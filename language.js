(function () {
  var LANG_KEY = 'curriculum_lang';

  function getLanguage() {
    return localStorage.getItem(LANG_KEY) || 'en';
  }

  function setLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
    document.body.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
      var active = btn.dataset.lang === lang;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('active', active);
    });
  }

  function initLanguage() {
    setLanguage(getLanguage());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }

  window.setLanguage = setLanguage;
  window.getLanguage = getLanguage;
})();
