# El Dourado by Sapore — Sistema de Atendimento

Sistema interno de gestão de requisições e movimentação de equipamentos para operações de catering.

---

## Visão Geral

Aplicação web para controle de requisições de materiais, checklists de retorno, custódia de itens e transferências entre colaboradores. Backend hospedado no Supabase (PostgreSQL) com autenticação própria via bcrypt.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend | HTML, CSS, JavaScript puro |
| Backend / Banco | Supabase (PostgreSQL + RLS + pgcrypto) |
| Auth | Tabela `users` customizada com `check_password` RPC (bcrypt via pgcrypto) |
| Hospedagem | Vercel ou Netlify Drop |
| Ícones | Tabler Icons |
| Fontes | DM Sans, DM Mono (Google Fonts) |

---

## Estrutura do Banco de Dados

### Tabelas principais

```
users
  id, username, password_hash, full_name, department, role (admin|user),
  active, avatar_url

categories
  id, name

products
  id, name, category_id → categories, emoji, quantity,
  has_serial, serial_code, photo_url, active

requests
  id, seq (gerado automaticamente), user_id → users, responsible,
  event_name, location, date_out, notes, status (pending|approved|returning|done|partial),
  created_at

request_items
  id, request_id → requests, product_id → products,
  name, quantity, serial_no, holder_id → users

return_checklists
  id, request_id → requests, overall_status, notes, created_at

return_checklist_items
  id, checklist_id → return_checklists, item_name, serial_no,
  quantity_returned, condition (ok|broken|missing|partial), note

transfers
  id, item_id, product_id, item_name, serial_no,
  from_user_id → users, to_user_id → users,
  quantity, note, status (pending|accepted|rejected), created_at

usage_logs
  id, item_id → request_items, product_id → products, request_id → requests,
  item_name, serial_no, user_id → users, quantity,
  note, location, used_at, created_at
```

### RPCs (funções PostgreSQL)

| Função | Descrição |
|---|---|
| `check_password(uname, pwd)` | Valida senha no login via bcrypt |
| `create_user(uname, pwd, fname, dept, urole)` | Cria usuário com senha hasheada |
| `update_password(uid, new_pwd)` | Atualiza senha de um usuário |

---

## Funcionalidades

### Perfis de acesso

**Administrador**
- Aprovação de requisições
- Itens Comigo — aceitar/recusar transferências recebidas de colaboradores
- Histórico de checklists de retorno
- Todos os pedidos (com filtro, aprovação, PDF e exclusão)
- Movimentações — todas as transferências do sistema
- Cadastro de itens (criar, editar, excluir produtos)
- Gerenciamento de usuários
- Métricas gerais

**Colaborador**
- Nova requisição de materiais
- Itens Comigo — itens aprovados sob sua responsabilidade
- Em Uso — apontar consumo de itens sob custódia (baixa de quantidade + log de auditoria)
- Transferir itens para outros colaboradores (parcial ou total)
- Meus Pedidos
- Movimentações — histórico próprio de transferências
- Histórico de requisições

### Fluxo de uma requisição

```
Colaborador cria requisição (status: pending)
        ↓
Admin aprova (status: approved)
  → holder_id dos itens é definido para o solicitante
  → itens aparecem em "Itens Comigo" do colaborador
        ↓
Colaborador pode transferir itens para outros colaboradores
  → transferência registrada em transfers
  → holder_id atualizado
        ↓
Admin faz checklist de retorno (status: done | partial)
        ↓
Exclusão de requisição devolve quantidade ao estoque
```

### PDF de requisição

Gerado via `window.open` com layout imprimível. Inclui:
- Logo El Dourado
- Dados do evento (responsável, local, data)
- Tabela de itens com foto/emoji, quantidade e N° série
- Campos de assinatura

---

## Configuração inicial (Supabase)

### 1. Políticas RLS necessárias

Todas as tabelas usam autenticação própria (não Supabase Auth), portanto `auth.uid()` retorna NULL. As policies devem usar `USING (true)` para o role `anon`.

```sql
-- Exemplo para requests (replicar para todas as tabelas)
DROP POLICY IF EXISTS "requests_select" ON requests;
CREATE POLICY "requests_select" ON requests
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "requests_insert" ON requests
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "requests_update" ON requests
  FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

CREATE POLICY "requests_delete" ON requests
  FOR DELETE TO anon, authenticated USING (true);
```

Tabelas que precisam de policies: `users`, `categories`, `products`, `requests`, `request_items`, `return_checklists`, `return_checklist_items`, `transfers`, `usage_logs`.

### 2. Coluna e tabela para custódia e transferências

```sql
-- Custódia de itens
ALTER TABLE request_items ADD COLUMN IF NOT EXISTS holder_id UUID REFERENCES users(id);

-- Backfill para requisições já aprovadas
UPDATE request_items ri
SET holder_id = r.user_id
FROM requests r
WHERE ri.request_id = r.id AND ri.holder_id IS NULL AND r.status = 'approved';

-- Histórico de transferências
CREATE TABLE IF NOT EXISTS transfers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  item_id UUID,
  product_id UUID,
  item_name TEXT,
  serial_no TEXT,
  from_user_id UUID REFERENCES users(id),
  to_user_id UUID REFERENCES users(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  note TEXT,
  status TEXT NOT NULL DEFAULT 'pending',  -- pending | accepted | rejected
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Para bancos que já têm a tabela sem a coluna status:
ALTER TABLE transfers ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'pending';

ALTER TABLE transfers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transfers_all" ON transfers
  FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
```

### 4. Tabela de apontamento de uso (aba "Em Uso")

A aba "Em Uso" permite ao colaborador registrar o consumo dos itens sob sua
custódia. Cada apontamento reduz `request_items.quantity` (o item continua na
custódia) e grava uma linha em `usage_logs` para auditoria. Rode o arquivo
`usage_logs.sql` no SQL Editor, ou o bloco abaixo:

```sql
CREATE TABLE IF NOT EXISTS usage_logs (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  item_id     UUID REFERENCES request_items(id) ON DELETE SET NULL,
  product_id  UUID REFERENCES products(id)      ON DELETE SET NULL,
  request_id  UUID REFERENCES requests(id)      ON DELETE SET NULL,
  item_name   TEXT NOT NULL,
  serial_no   TEXT,
  user_id     UUID REFERENCES users(id)         ON DELETE SET NULL,
  quantity    INTEGER NOT NULL CHECK (quantity > 0),
  note        TEXT,
  location    TEXT,
  used_at     DATE DEFAULT current_date,
  created_at  TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE usage_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "usage_logs_all" ON usage_logs
  FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
```

### 3. Coluna de avatar e RPC de senha

```sql
ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar_url TEXT;

CREATE OR REPLACE FUNCTION update_password(uid UUID, new_pwd TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE users
  SET password_hash = crypt(new_pwd, gen_salt('bf'))
  WHERE id = uid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

### Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod   # rodar na pasta com index.html
```

---

> ⚠️ A chave `anon` do Supabase fica visível no HTML. A segurança real do sistema depende das políticas RLS no banco — nunca exponha a `service_role` key no frontend.


## Observações importantes

- **Estoque:** ao criar uma requisição, a quantidade é descontada do produto. Ao excluir uma requisição, o estoque é devolvido automaticamente — exceto para requisições com status `done` (checklist concluído), que presume devolução já registrada via checklist.
- **Fotos:** imagens de produtos e avatares são armazenadas como base64 comprimido diretamente no banco. Limite prático de ~300KB por imagem após compressão.
- **Transferências parciais:** ao transferir parte da quantidade de um item, a linha original é reduzida e uma nova linha é criada para o destinatário — ambas ligadas à mesma requisição de origem.
- **Senhas:** hasheadas com bcrypt (pgcrypto) no banco. Nunca armazenadas em texto puro.
