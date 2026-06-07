# El Dourado by Sapore — Sistema de Atendimento

Sistema interno de gestão de requisições e movimentação de equipamentos para operações de catering.

---

## Visão Geral

Aplicação web de página única (`index.html`) para controle de requisições de materiais, checklists de retorno, custódia de itens e transferências entre colaboradores. Backend hospedado no Supabase (PostgreSQL) com autenticação própria via bcrypt.

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
  event_name, location, date_out, notes, status (pending|approved|done|partial),
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
  quantity, note, created_at
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
- Histórico de checklists de retorno
- Todos os pedidos (com filtro, aprovação, PDF e exclusão)
- Movimentações — todas as transferências do sistema
- Cadastro de itens (criar, editar, excluir produtos)
- Gerenciamento de usuários
- Métricas gerais

**Colaborador**
- Nova requisição de materiais
- Itens Comigo — itens aprovados sob sua responsabilidade
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

Tabelas que precisam de policies: `users`, `categories`, `products`, `requests`, `request_items`, `return_checklists`, `return_checklist_items`, `transfers`.

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
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE transfers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "transfers_all" ON transfers
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

## Deploy

### Netlify Drop (mais simples)
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste o `index.html`
3. Link gerado automaticamente

### Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod   # rodar na pasta com index.html
```

---

## Variáveis de ambiente (hardcoded no index.html)

```js
const SURL = 'https://<seu-projeto>.supabase.co';
const SKEY = '<sua-anon-key>';
```

> ⚠️ A chave `anon` do Supabase fica visível no HTML. A segurança real do sistema depende das políticas RLS no banco — nunca exponha a `service_role` key no frontend.

---

## Usuários padrão

| Nome | Username | Role |
|---|---|---|
| Antonio Aguilera | antonio | admin |
| Jeferson Garcia | jeferson | admin |
| Bruno Lopes | bruno | user |
| Cesar Augusto | cesar | user |

Senhas configuradas via RPC `create_user` no Supabase.

---

## Observações importantes

- **Estoque:** ao criar uma requisição, a quantidade é descontada do produto. Ao excluir uma requisição, o estoque é devolvido automaticamente — exceto para requisições com status `done` (checklist concluído), que presume devolução já registrada via checklist.
- **Fotos:** imagens de produtos e avatares são armazenadas como base64 comprimido diretamente no banco. Limite prático de ~300KB por imagem após compressão.
- **Transferências parciais:** ao transferir parte da quantidade de um item, a linha original é reduzida e uma nova linha é criada para o destinatário — ambas ligadas à mesma requisição de origem.
- **Senhas:** hasheadas com bcrypt (pgcrypto) no banco. Nunca armazenadas em texto puro.
