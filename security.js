/**
 * 🔐 MÓDULO DE SEGURANÇA
 * Proteções contra XSS, CSRF, Rate Limiting, etc.
 */

const SECURITY = {
  // Token CSRF armazenado na sessão
  csrfToken: null,
  
  // Controle de tentativas de login
  loginAttempts: {},
  
  /**
   * Gera um token CSRF aleatório
   */
  generateCSRFToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    this.csrfToken = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    sessionStorage.setItem('csrf_token', this.csrfToken);
    return this.csrfToken;
  },
  
  /**
   * Retorna o token CSRF atual
   */
  getCSRFToken() {
    if (!this.csrfToken) {
      this.csrfToken = sessionStorage.getItem('csrf_token') || this.generateCSRFToken();
    }
    return this.csrfToken;
  },
  
  /**
   * Valida um token CSRF
   */
  validateCSRFToken(token) {
    return token === this.getCSRFToken();
  },
  
  /**
   * Sanitiza texto para evitar XSS
   * Remove scripts, event handlers, etc.
   */
  sanitizeHTML(html) {
    if (!html) return '';
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  },
  
  /**
   * Valida e sanitiza entrada de usuário
   */
  sanitizeInput(input) {
    if (!input) return '';
    return String(input)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .trim();
  },
  
  /**
   * Rate Limiting para tentativas de login
   */
  checkLoginAttempts(username) {
    const now = Date.now();
    if (!this.loginAttempts[username]) {
      this.loginAttempts[username] = [];
    }
    
    // Remove tentativas antigas
    this.loginAttempts[username] = this.loginAttempts[username].filter(
      time => now - time < APP_CONFIG.LOCKOUT_TIME
    );
    
    // Verifica limite
    if (this.loginAttempts[username].length >= APP_CONFIG.MAX_LOGIN_ATTEMPTS) {
      const timeLeft = Math.ceil((APP_CONFIG.LOCKOUT_TIME - (now - this.loginAttempts[username][0])) / 1000 / 60);
      throw new Error(`Muitas tentativas. Tente novamente em ${timeLeft} minutos.`);
    }
    
    return true;
  },
  
  /**
   * Registra tentativa de login falha
   */
  recordLoginAttempt(username) {
    if (!this.loginAttempts[username]) {
      this.loginAttempts[username] = [];
    }
    this.loginAttempts[username].push(Date.now());
  },
  
  /**
   * Limpa tentativas após login bem-sucedido
   */
  clearLoginAttempts(username) {
    delete this.loginAttempts[username];
  },
  
  /**
   * Valida força da senha
   */
  validatePasswordStrength(password) {
    const errors = [];
    
    if (password.length < 8) {
      errors.push('Mínimo 8 caracteres');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Deve ter letra maiúscula');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Deve ter letra minúscula');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('Deve ter número');
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push('Deve ter caractere especial (!@#$%^&*)');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  },
  
  /**
   * Hash simples para dados não-sensíveis
   */
  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  },
  
  /**
   * Valida email
   */
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },
  
  /**
   * Log de segurança (auditoria)
   */
  auditLog(action, details = {}) {
    const log = {
      timestamp: new Date().toISOString(),
      action,
      details,
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    if (APP_CONFIG.DEBUG) {
      console.log('🔐 Audit:', log);
    }
    
    // Aqui você poderia enviar para um servidor de auditoria
    // await fetch('/api/audit', { method: 'POST', body: JSON.stringify(log) })
  },
  
  /**
   * Limpa dados sensíveis da memória
   */
  clearSensitiveData() {
    sessionStorage.clear();
    // Não limpa localStorage completamente, pois contém configurações
    // Mas remove dados sensíveis específicos
    localStorage.removeItem('user_password_hash');
    localStorage.removeItem('temp_token');
  },
  
  /**
   * Bloqueia acesso via iframe
   */
  preventClickjacking() {
    if (window.self !== window.top) {
      window.top.location = window.self.location;
    }
  },
  
  /**
   * Monitora tentativas de manipulação do DOM
   */
  detectDOMManipulation() {
    const observer = new MutationObserver(() => {
      // Aqui você poderia adicionar verificações
      if (APP_CONFIG.DEBUG) {
        console.warn('⚠️ DOM foi modificado');
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
  }
};

// Inicializa proteções ao carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    SECURITY.generateCSRFToken();
    SECURITY.preventClickjacking();
  });
} else {
  SECURITY.generateCSRFToken();
  SECURITY.preventClickjacking();
}
