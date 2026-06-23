#!/bin/bash
# 🔐 SCRIPT DE VERIFICAÇÃO DE SEGURANÇA - Sistema ELD
# Use este script para validar configurações de segurança

echo "🔍 VERIFICAÇÃO DE SEGURANÇA - Sistema de Atendimento ELD"
echo "═══════════════════════════════════════════════════════"
echo ""

# Função para verificar se arquivo existe
check_file() {
  if [ -f "$1" ]; then
    echo "✅ $1 encontrado"
    return 0
  else
    echo "❌ $1 NÃO encontrado"
    return 1
  fi
}

# Função para verificar conteúdo
check_content() {
  if grep -q "$2" "$1" 2>/dev/null; then
    echo "✅ $1 contém '$2'"
    return 0
  else
    echo "❌ $1 NÃO contém '$2'"
    return 1
  fi
}

echo "1️⃣  Verificando Arquivos de Segurança..."
echo "─────────────────────────────────────"

check_file "config.js"
check_file "config.example.js"
check_file "security.js"
check_file "assets.js"
check_file ".gitignore"
check_file "index.html"

echo ""
echo "2️⃣  Verificando Configurações..."
echo "──────────────────────────────"

check_content "config.js" "SUPABASE_URL"
check_content "config.js" "SUPABASE_ANON_KEY"
check_content ".gitignore" "config.js"
check_content "index.html" "Content-Security-Policy"
check_content "index.html" "X-Frame-Options"

echo ""
echo "3️⃣  Verificando Proteções..."
echo "──────────────────────────"

check_content "security.js" "generateCSRFToken"
check_content "security.js" "sanitizeInput"
check_content "security.js" "checkLoginAttempts"
check_content "security.js" "validatePasswordStrength"

echo ""
echo "4️⃣  Verificando Scripts em index.html..."
echo "────────────────────────────────────────"

check_content "index.html" "security.js"
check_content "index.html" "config.js"
check_content "index.html" "assets.js"

echo ""
echo "5️⃣  Verificando Documentação..."
echo "──────────────────────────────"

check_file "SECURITY.md"
check_file "DEPLOY.md"
check_file "STATUS.md"

echo ""
echo "═══════════════════════════════════════════════════════"
echo "✅ Verificação Concluída!"
echo ""
echo "Próximos Passos:"
echo "1. Abrir index.html no navegador"
echo "2. Verificar console (F12) para erros"
echo "3. Testar login"
echo "4. Ler SECURITY.md para mais informações"
echo ""
