(() => {
  const toggle = document.getElementById('language');
  function setLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.dataset[lang].replace(/\\n/g, '\n');
    });
    toggle.textContent = lang === 'zh' ? 'EN ↗' : '中文 ↗';
    toggle.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    try { localStorage.setItem('sl-language', lang); } catch {}
  }
  let initial = 'en';
  try { initial = localStorage.getItem('sl-language') === 'zh' ? 'zh' : 'en'; } catch {}
  setLanguage(initial);
  toggle.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
})();
