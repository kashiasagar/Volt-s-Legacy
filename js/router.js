/* ==========================================================================
   VOLT'S LEGACY SOLAR - Client-Side Router
   ========================================================================== */

class AppRouter {
  constructor(routes) {
    this.routes = routes;
    this.appRoot = document.getElementById('app-view');
    this.isLocalFile = window.location.protocol === 'file:';
    this.init();
  }

  init() {
    // Intercept internal link clicks & data-href card clicks
    document.addEventListener('click', (e) => {
      const clickable = e.target.closest('a, [data-href]');
      if (!clickable) return;

      let href = clickable.getAttribute('href') || clickable.getAttribute('data-href');
      if (!href) return;

      // Strip same-origin domain if present (e.g. http://localhost:8080/contact)
      if (href.startsWith(window.location.origin)) {
        href = href.slice(window.location.origin.length);
      }

      // Handle relative routing paths (starting with / or #)
      if (href.startsWith('/') || href.startsWith('#')) {
        e.preventDefault();
        this.navigate(href);
      }
    });

    // Handle back/forward browser navigation
    window.addEventListener('popstate', () => {
      this.resolveCurrentRoute();
    });

    window.addEventListener('hashchange', () => {
      if (this.isLocalFile) {
        this.resolveCurrentRoute();
      }
    });

    // Initial route resolve
    this.resolveCurrentRoute();
  }

  navigate(path) {
    // Handle anchor links on home
    if (path.startsWith('#')) {
      const targetEl = document.querySelector(path);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (this.isLocalFile) {
      // Under file://, use window.location.hash to allow full routing without browser origin security errors
      window.location.hash = path;
    } else {
      if (window.location.pathname !== path) {
        try {
          window.history.pushState({}, '', path);
        } catch (e) {
          window.location.hash = path;
        }
      }
    }

    this.resolveRoute(path);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile menu if open
    if (window.appNavigation) {
      window.appNavigation.closeMobileMenu();
    }
  }

  resolveCurrentRoute() {
    let currentPath = '/';
    if (this.isLocalFile) {
      if (window.location.hash) {
        currentPath = window.location.hash.replace('#', '') || '/';
      }
    } else {
      currentPath = window.location.pathname || '/';
      if (window.location.hash && currentPath === '/') {
        currentPath = window.location.hash.replace('#', '') || '/';
      }
    }
    this.resolveRoute(currentPath);
  }

  resolveRoute(path) {
    // Strip query string and hash for route matching
    const basePath = path.split('?')[0].split('#')[0];
    const cleanPath = basePath.length > 1 && basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    
    let handler = this.routes[cleanPath];
    if (!handler && (cleanPath.startsWith('/projects/') || cleanPath.startsWith('/project/'))) {
      const slug = cleanPath.replace('/projects/', '').replace('/project/', '');
      if (typeof window.renderProjectDetailSubpage === 'function') {
        handler = () => window.renderProjectDetailSubpage(slug);
      }
    }
    handler = handler || this.routes['/'] || this.routes['*'];

    if (handler) {
      const viewHtml = handler();
      if (this.appRoot) {
        this.appRoot.innerHTML = viewHtml;
        this.onViewRendered(cleanPath);

        // If a hash was present, scroll to the targeted element after DOM rendering
        const hash = window.location.hash;
        if (hash && hash.length > 1) {
          setTimeout(() => {
            const targetEl = document.querySelector(hash);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    }

    // Update active nav links
    if (window.appNavigation) {
      window.appNavigation.setActiveNavLink(cleanPath);
    }
  }

  onViewRendered(path) {
    // Re-initialize interactive components based on rendered page
    if (path === '/') {
      if (window.HeroCarousel) {
        window.appCarousel = new HeroCarousel();
      }
    }

    if (window.QuotationEngine) {
      window.appQuotation = new QuotationEngine();
    }

    if (window.onGridSimulator) {
      window.onGridSimulator.init();
    }

    if ((path === '/solar-for-homes' || path === '/offerings/homes') && window.initSolarForHomesPage) {
      window.initSolarForHomesPage();
    }

    if ((path === '/solar-for-housing-societies' || path === '/offerings/housing-societies') && window.initSolarForHousingSocietiesPage) {
      window.initSolarForHousingSocietiesPage();
    }

    if ((path === '/solar-for-commercial-institutions' || path === '/offerings/commercial-industrial') && window.initSolarForCommercialInstitutionsPage) {
      window.initSolarForCommercialInstitutionsPage();
    }

    if ((path === '/solar-for-industrial-factories') && window.initSolarForIndustrialFactoriesPage) {
      window.initSolarForIndustrialFactoriesPage();
    }

    if ((path === '/solar-ground-mount' || path === '/offerings/ground-mount') && window.initSolarGroundMountPage) {
      window.initSolarGroundMountPage();
    }

    if (path === '/design-consulting' && window.initDesignConsultingPage) {
      window.initDesignConsultingPage();
    }

    if (window.TorrentRoiCapacityFinder) {
      window.appTorrentFinder = new TorrentRoiCapacityFinder();
      window.appTorrentFinder.initEvents();
    }

    if (window.initScrollAnimations) {
      window.initScrollAnimations();
    }
  }
}

window.AppRouter = AppRouter;
