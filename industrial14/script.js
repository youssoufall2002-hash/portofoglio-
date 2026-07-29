// Anno nel footer
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Banner cookie
(function () {
  var c = document.getElementById('cookie');
  if (!c) return;
  if (!localStorage.getItem('i14_cookie_ok')) c.classList.remove('hidden');
  window.acceptCookie = function () {
    localStorage.setItem('i14_cookie_ok', '1');
    c.classList.add('hidden');
  };
})();

// Menu a schermo intero (hamburger)
(function () {
  var t = document.getElementById('navToggle');
  var o = document.getElementById('navOverlay');
  var c = document.getElementById('navClose');
  if (!t || !o) return;
  function open() {
    o.classList.add('open'); o.setAttribute('aria-hidden', 'false');
    t.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden';
  }
  function close() {
    o.classList.remove('open'); o.setAttribute('aria-hidden', 'true');
    t.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
  }
  t.addEventListener('click', open);
  if (c) c.addEventListener('click', close);
  o.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();

// Comparsa allo scroll
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    for (var i = 0; i < els.length; i++) els[i].classList.add('in');
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el) { io.observe(el); });
})();
