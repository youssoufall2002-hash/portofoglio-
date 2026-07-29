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
