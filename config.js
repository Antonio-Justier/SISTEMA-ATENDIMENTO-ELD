// ⚠️ CONFIGURAÇÃO SEGURA - NUNCA COMMITE COM CREDENCIAIS REAIS
// Este arquivo é específico do seu ambiente e não deve ser versionado

// ⛔ IMPORTANTE: Em produção, use variáveis de ambiente!
// Exemplo com variáveis de ambiente:
// const SUPABASE_URL = process.env.SUPABASE_URL;
// const SUPABASE_KEY = process.env.SUPABASE_KEY;

const APP_CONFIG = {
  SUPABASE_URL: 'https://ogwcbmllpenelhkqetnx.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nd2NibWxscGVuZWxoa3FldG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NTIzNDQsImV4cCI6MjA5NjMyODM0NH0.sBci0IyhhvwWAxW_1TU5IKann5PWwEC5cO3ahpNEZns',
  
  // Versão da aplicação
  VERSION: '1.0.0',
  
  // Modo debug (false em produção!)
  DEBUG: false,
  
  // Timeout padrão para requisições (ms)
  TIMEOUT: 5000,
  
  // PROTEÇÃO CONTRA BRUTE FORCE
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_TIME: 15 * 60 * 1000, // 15 minutos
  
  // Requisitos de segurança para senha
  PASSWORD_MIN_LENGTH: 5,
  PASSWORD_REQUIRE_UPPERCASE: false,
  PASSWORD_REQUIRE_NUMBERS: false,
  PASSWORD_REQUIRE_SPECIAL: false,
  
  // Sessão
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutos de inatividade
  MAX_SESSION_DURATION: 24 * 60 * 60 * 1000, // 24 horas
  
  // Flags de segurança
  ENABLE_AUDIT_LOG: true,
  ENABLE_RATE_LIMITING: true,
  ENABLE_CSRF_PROTECTION: true
};

// Validação de configuração
console.log('🔐 Configuração carregada');
if (APP_CONFIG.DEBUG) {
  console.warn('⚠️ DEBUG MODE ATIVADO - Desative em produção!');
}

// Exportar configuração (para módulos ES6 se necessário)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APP_CONFIG;
}
