(function() {
      const root = document.documentElement;
      const saved = localStorage.getItem('theme') || 'dark';
      if (saved === 'light') root.setAttribute('data-theme', 'light');

      document.addEventListener('DOMContentLoaded', function() {
        const nav = document.getElementById('siteNav');
        const navLinks = document.getElementById('navLinks');
        const navToggle = document.getElementById('navToggle');
        const themeToggle = document.getElementById('themeToggle');

        function setNavOpen(isOpen) {
          nav.classList.toggle('nav-open', isOpen);
          navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          navToggle.textContent = isOpen ? 'Close' : 'Menu';
        }

        function updateThemeLabel() {
          themeToggle.textContent = root.getAttribute('data-theme') === 'light' ? 'Dark' : 'Light';
        }

        nav.classList.add('nav-ready');
        setNavOpen(false);
        updateThemeLabel();

        navToggle.addEventListener('click', function() {
          setNavOpen(!nav.classList.contains('nav-open'));
        });

        navLinks.querySelectorAll('a').forEach(function(link) {
          link.addEventListener('click', function() {
            if (window.innerWidth <= 900) {
              setNavOpen(false);
            }
          });
        });

        window.addEventListener('resize', function() {
          if (window.innerWidth > 900) {
            setNavOpen(false);
          }
        });

        themeToggle.addEventListener('click', function() {
          const isLight = root.getAttribute('data-theme') === 'light';
          root.setAttribute('data-theme', isLight ? 'dark' : 'light');
          localStorage.setItem('theme', isLight ? 'dark' : 'light');
          updateThemeLabel();
        });
      });
    })();
