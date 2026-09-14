/* ============================================================
   Balachandar Saravanan — portfolio interactions
   Vanilla JS, no dependencies. Progressive enhancement only:
   every feature degrades to a working static page without it.
   ============================================================ */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var raf = window.requestAnimationFrame || function (cb) { return setTimeout(cb, 16); };

  /* ---------- current year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---------- header: shrink on scroll, hide on scroll down ---------- */
  var header = document.querySelector('.site-header');
  var lastY = window.pageYOffset;
  var progress = document.querySelector('.scroll-progress');

  function onScroll() {
    var y = window.pageYOffset;

    if (header) {
      header.classList.toggle('is-stuck', y > 24);
      var menuOpen = document.querySelector('.nav.is-open');
      if (!menuOpen && y > 420 && y > lastY + 6) {
        header.classList.add('is-hidden');
      } else if (y < lastY - 6 || y < 200) {
        header.classList.remove('is-hidden');
      }
    }

    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    }

    lastY = y;
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) { return; }
    ticking = true;
    raf(function () { onScroll(); ticking = false; });
  }, { passive: true });
  onScroll();

  /* ---------- mobile navigation ---------- */
  var toggle = document.querySelector('.nav__toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    var setMenu = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) { header && header.classList.remove('is-hidden'); }
    };

    toggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('is-open'));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { setMenu(false); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 920 && nav.classList.contains('is-open')) { setMenu(false); }
    });
  }

  /* ---------- reveal on scroll ---------- */
  var revealables = document.querySelectorAll('[data-reveal], .line-mask');

  if (!('IntersectionObserver' in window) || reduced) {
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add('is-in'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(revealables, function (el) { revealObserver.observe(el); });
  }

  /* ---------- hero line masks animate immediately ---------- */
  raf(function () {
    raf(function () {
      var heroMasks = document.querySelectorAll('.hero .line-mask, .hero [data-reveal]');
      Array.prototype.forEach.call(heroMasks, function (el) { el.classList.add('is-in'); });
    });
  });

  /* ---------- animated counters ---------- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    var runCount = function (el) {
      var target = parseFloat(el.getAttribute('data-count')) || 0;
      if (reduced) { el.textContent = target; return; }
      var start = performance.now();
      var dur = 1300;
      var step = function (now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) { raf(step); }
      };
      raf(step);
    };

    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(counters, runCount);
    } else {
      var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
      Array.prototype.forEach.call(counters, function (el) { countObserver.observe(el); });
    }
  }

  /* ---------- scroll-spy for the nav ---------- */
  var navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
  if (navLinks.length && 'IntersectionObserver' in window) {
    var sections = [];
    Array.prototype.forEach.call(navLinks, function (link) {
      var target = document.querySelector(link.getAttribute('href'));
      if (target) { sections.push({ link: link, el: target }); }
    });

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        Array.prototype.forEach.call(navLinks, function (l) { l.classList.remove('is-active'); });
        var match = sections.filter(function (s) { return s.el === entry.target; })[0];
        if (match) { match.link.classList.add('is-active'); }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { spy.observe(s.el); });
  }

  /* ---------- pointer-follow glow on cards ---------- */
  var glowCards = document.querySelectorAll('.card, .work-card');
  Array.prototype.forEach.call(glowCards, function (card) {
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------- custom cursor (fine pointers only) ---------- */
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var dot = document.querySelector('.cursor');
  var ring = document.querySelector('.cursor-ring');

  if (finePointer && dot && ring && !reduced) {
    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var rx = mx, ry = my;

    window.addEventListener('pointermove', function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate3d(' + mx + 'px,' + my + 'px,0)';
      document.body.classList.add('cursor-ready');
    }, { passive: true });

    (function loop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0)';
      raf(loop);
    })();

    var interactive = 'a, button, summary, [data-cursor], .tool-chip';
    document.addEventListener('pointerover', function (e) {
      if (e.target.closest(interactive)) { document.body.classList.add('cursor-hover'); }
    });
    document.addEventListener('pointerout', function (e) {
      if (e.target.closest(interactive)) { document.body.classList.remove('cursor-hover'); }
    });
    document.addEventListener('pointerleave', function () {
      document.body.classList.remove('cursor-ready');
    });
  }

  /* ---------- accordion: only one capability open at a time ---------- */
  var caps = document.querySelectorAll('.cap');
  Array.prototype.forEach.call(caps, function (cap) {
    cap.addEventListener('toggle', function () {
      if (!cap.open) { return; }
      Array.prototype.forEach.call(caps, function (other) {
        if (other !== cap) { other.open = false; }
      });
    });
  });

})();
