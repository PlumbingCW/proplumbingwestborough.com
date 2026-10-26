(function () {
  var d = document, root = d.documentElement;
  var hb = d.querySelector('.hamburger'), dr = d.querySelector('.mob-drawer'), ov = d.querySelector('.mob-overlay'), cl = d.querySelector('.drawer-close');
  function openMenu() {
    if (!dr) return;
    dr.hidden = false; ov.classList.add('visible'); hb.setAttribute('aria-expanded', 'true');
    root.style.overflow = 'hidden'; cl.focus();
  }
  function closeMenu() {
    if (!dr) return;
    dr.hidden = true; ov.classList.remove('visible'); hb.setAttribute('aria-expanded', 'false');
    root.style.overflow = '';
  }
  if (hb && dr && ov && cl) {
    hb.addEventListener('click', function () { dr.hidden ? openMenu() : closeMenu(); });
    cl.addEventListener('click', function () { closeMenu(); hb.focus(); });
    ov.addEventListener('click', closeMenu);
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !dr.hidden) { closeMenu(); hb.focus(); } });
    dr.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 768 && !dr.hidden) closeMenu(); });
  }
  var qs = d.querySelectorAll('.faq-q');
  for (var i = 0; i < qs.length; i++) {
    qs[i].addEventListener('click', function () {
      var item = this.closest('.faq-item'), open = item.classList.toggle('open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
