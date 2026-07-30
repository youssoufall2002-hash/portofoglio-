/* ==========================================================================
   INDUSTRIAL 14 — JavaScript vanilla (nessuna libreria esterna)
   - Navbar hamburger
   - Reveal on scroll (IntersectionObserver)
   - Lightbox galleria in JS puro
   - Evidenzia il giorno corrente nella tabella orari
   - Anno nel footer
   ========================================================================== */
(function () {
  "use strict";

  /* ----------------------------------------------------------------------
     1. Navbar hamburger
     ---------------------------------------------------------------------- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Chiude il menu quando si clicca un link (single page)
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----------------------------------------------------------------------
     2. Reveal on scroll
     ---------------------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: mostra tutto se l'API non è disponibile
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ----------------------------------------------------------------------
     3. Lightbox galleria (JS puro)
     ---------------------------------------------------------------------- */
  var figures = Array.prototype.slice.call(
    document.querySelectorAll(".gallery figure")
  );
  var lightbox = document.getElementById("lightbox");

  if (figures.length && lightbox) {
    var lbImg = lightbox.querySelector("img");
    var btnClose = lightbox.querySelector(".lightbox__close");
    var btnPrev = lightbox.querySelector(".lightbox__nav--prev");
    var btnNext = lightbox.querySelector(".lightbox__nav--next");
    var current = 0;

    function sources() {
      return figures.map(function (fig) {
        var img = fig.querySelector("img");
        // usa la versione a piena risoluzione se indicata, altrimenti src
        return { src: img.getAttribute("data-full") || img.src, alt: img.alt };
      });
    }

    function show(index) {
      var list = sources();
      current = (index + list.length) % list.length; // ciclico
      lbImg.src = list[current].src;
      lbImg.alt = list[current].alt;
    }

    function open(index) {
      show(index);
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      btnClose.focus();
    }

    function close() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    figures.forEach(function (fig, i) {
      fig.addEventListener("click", function () { open(i); });
      // accessibilità: apertura con Invio/Spazio
      fig.setAttribute("tabindex", "0");
      fig.setAttribute("role", "button");
      fig.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open(i);
        }
      });
    });

    btnClose.addEventListener("click", close);
    btnPrev.addEventListener("click", function () { show(current - 1); });
    btnNext.addEventListener("click", function () { show(current + 1); });

    // chiude cliccando sullo sfondo scuro
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });

    // navigazione da tastiera
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "ArrowRight") show(current + 1);
    });
  }

  /* ----------------------------------------------------------------------
     4. Evidenzia il giorno corrente negli orari
     getDay(): 0 = domenica ... 6 = sabato
     ---------------------------------------------------------------------- */
  var todayRow = document.querySelector(
    '.hours tr[data-day="' + new Date().getDay() + '"]'
  );
  if (todayRow) todayRow.classList.add("is-today");

  /* ----------------------------------------------------------------------
     5. Anno nel footer
     ---------------------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
