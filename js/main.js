// ============================================================
//  Sameer Khan & Associates — Main JavaScript
//  advocatesameerdelhi.in
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

/* ────────────────────────────────────────────
      DISCLAIMER MODAL
      Show on every homepage reload.
      After acceptance on a non-homepage, hide and don't show again
      until homepage reload/navigation.
      sessionStorage key: 'disc_accepted'
   ──────────────────────────────────────────── */
  const overlay    = document.getElementById('disclaimer-overlay');
  const agreeBtn   = document.getElementById('disclaimer-agree');
  const isHomePage = (window.location.pathname === '/' || window.location.pathname.endsWith('index.html') || window.location.pathname === '');
  const accepted   = sessionStorage.getItem('disc_accepted');

  if (overlay) {
    // On homepage, always show (reset the session flag so it re-shows on reload)
    if (isHomePage) {
      sessionStorage.removeItem('disc_accepted');
    }

    // On non-homepage: show if not accepted this session
    if (!isHomePage && sessionStorage.getItem('disc_accepted') === 'yes') {
      // Already accepted this session on a non-homepage — hide
      overlay.style.display = 'none';
    } else {
      // Show modal, block scroll
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    if (agreeBtn) {
      agreeBtn.addEventListener('click', function () {
        sessionStorage.setItem('disc_accepted', 'yes');
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      });
    }
  }

  /* ────────────────────────────────────────────
     NAVBAR — Scroll Effect
  ──────────────────────────────────────────── */
  const navbar     = document.getElementById('navbar');
  const scrollTop  = document.getElementById('scroll-top');

  window.addEventListener('scroll', function () {
    const scrolled = window.scrollY > 60;
    navbar     && navbar.classList.toggle('scrolled', scrolled);
    scrollTop  && scrollTop.classList.toggle('visible', scrolled);
  }, { passive: true });

  /* ────────────────────────────────────────────
     HAMBURGER MENU
  ──────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ────────────────────────────────────────────
     SCROLL TO TOP
  ──────────────────────────────────────────── */
  scrollTop && scrollTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ────────────────────────────────────────────
     SMOOTH SCROLL for anchor links
  ──────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 68; // navbar height
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });

  /* ────────────────────────────────────────────
     ACTIVE NAV LINK on scroll
  ──────────────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', function () {
      let current = '';
      sections.forEach(function (sec) {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
      });
      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    }, { passive: true });
  }

  /* ────────────────────────────────────────────
     FADE-IN ANIMATIONS (Intersection Observer)
  ──────────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    const fadeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(function (el) { fadeObs.observe(el); });
  } else {
    document.querySelectorAll('.fade-in').forEach(function (el) { el.classList.add('visible'); });
  }

  /* ────────────────────────────────────────────
     ANIMATED COUNTERS
  ──────────────────────────────────────────── */
  const statEls = document.querySelectorAll('.stat-num[data-count]');

  if ('IntersectionObserver' in window && statEls.length) {
    const counterObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        let  current = 0;
        const step   = Math.max(1, Math.ceil(target / 60));
        const tick   = function () {
          current = Math.min(current + step, target);
          el.textContent = current + suffix;
          if (current < target) requestAnimationFrame(tick);
        };
        el.textContent = '0';
        requestAnimationFrame(tick);
        counterObs.unobserve(el);
      });
    }, { threshold: 0.5 });

    statEls.forEach(function (el) { counterObs.observe(el); });
  }

  /* ────────────────────────────────────────────
     CONTACT FORM — Web3Forms + WhatsApp redirect
  ──────────────────────────────────────────── */
  const form       = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector('.form-submit');
      const name      = (form.querySelector('[name="name"]')    || {}).value || '';
      const phone     = (form.querySelector('[name="phone"]')   || {}).value || '';
      const query     = (form.querySelector('[name="message"]') || {}).value || '';
      const matter    = (form.querySelector('[name="matter"]')  || {}).value || 'General Query';

      const origText  = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled    = true;

      try {
        const resp   = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) });
        const result = await resp.json();

        if (result.success) {
          form.reset();
          if (successMsg) successMsg.style.display = 'block';

          // Build WhatsApp pre-filled message
          const waText = encodeURIComponent(
            'Hello Adv. Sameer Khan,\n\n' +
            'I am contacting you from your website.\n\n' +
            'Name: '          + name.trim()  + '\n' +
            'Contact Number: ' + phone.trim() + '\n' +
            'Matter Type: '   + matter       + '\n\n' +
            'Brief: '         + query.trim() + '\n\n' +
            'Request: Free Consultation'
          );

          setTimeout(function () {
            window.open('https://wa.me/919818151568?text=' + waText, '_blank');
          }, 1200);
        } else {
          alert('Something went wrong. Please call directly: +91 98181 51568');
        }
      } catch (err) {
        alert('Network error. Please call directly: +91 98181 51568');
      } finally {
        submitBtn.textContent = origText;
        submitBtn.disabled    = false;
      }
    });
  }

  /* ────────────────────────────────────────────
     TESTIMONIAL SLIDER — Mobile Left/Right Arrows
  ──────────────────────────────────────────── */
  const testiTrack = document.getElementById('testi-track');
  const testiPrev  = document.getElementById('testi-prev');
  const testiNext  = document.getElementById('testi-next');

  if (testiTrack && testiPrev && testiNext) {
    function getScrollDist() {
      var card = testiTrack.querySelector('.testi-card');
      return card ? card.offsetWidth + 12 : 280;
    }
    testiPrev.addEventListener('click', function () {
      testiTrack.scrollBy({ left: -getScrollDist(), behavior: 'smooth' });
    });
    testiNext.addEventListener('click', function () {
      testiTrack.scrollBy({ left: getScrollDist(), behavior: 'smooth' });
    });
  }

  /* ────────────────────────────────────────────
     FAQ ACCORDION (practice pages)
  ──────────────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item   = this.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ────────────────────────────────────────────
     DISABLE RIGHT-CLICK AND TEXT SELECTION
   ──────────────────────────────────────────── */
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });

});
