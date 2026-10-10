/* ==========================================================================
   VOLT'S LEGACY SOLAR - Client-Side Router
   ========================================================================== */

class AppRouter {
  constructor(routes) {
    this.routes = routes;
    this.appRoot = document.getElementById('app-view');
    this.isLocalFile = window.location.protocol === 'file:';
    this.repoPrefix = this.detectRepoPrefix();
    this.init();
  }

  detectRepoPrefix() {
    if (window.location.hostname.endsWith('github.io')) {
      const parts = window.location.pathname.split('/').filter(Boolean);
      return parts.length > 0 ? '/' + parts[0] : '';
    }
    return '';
  }

  stripRepoPrefix(path) {
    if (this.repoPrefix && path.startsWith(this.repoPrefix)) {
      const remainder = path.slice(this.repoPrefix.length);
      return remainder ? (remainder.startsWith('/') ? remainder : '/' + remainder) : '/';
    }
    return path;
  }

  formatFullPath(path) {
    let clean = path;
    if (!clean.startsWith('/')) clean = '/' + clean;
    return this.repoPrefix ? this.repoPrefix + clean : clean;
  }

  init() {
    // Intercept internal link clicks & data-href card clicks
    document.addEventListener('click', (e) => {
      const clickable = e.target.closest('a, [data-href]');
      if (!clickable) return;

      let href = clickable.getAttribute('href') || clickable.getAttribute('data-href');
      if (!href) return;

      // Ignore external or protocol links
      if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http:') || href.startsWith('https:') || href.startsWith('//')) {
        return;
      }

      // Handle relative routing paths (starting with / or # or ./)
      if (href.startsWith('/') || href.startsWith('#') || href.startsWith('./')) {
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

    let routePath = path;
    if (routePath.startsWith('./')) routePath = routePath.slice(1);
    if (!routePath.startsWith('/')) routePath = '/' + routePath;
    routePath = this.stripRepoPrefix(routePath);

    if (this.isLocalFile) {
      window.location.hash = routePath;
    } else {
      const fullUrl = this.formatFullPath(routePath);
      if (window.location.pathname !== fullUrl) {
        try {
          window.history.pushState({}, '', fullUrl);
        } catch (e) {
          window.location.hash = routePath;
        }
      }
    }

    this.resolveRoute(routePath);

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
      currentPath = this.stripRepoPrefix(currentPath);
      if (window.location.hash && currentPath === '/') {
        currentPath = window.location.hash.replace('#', '') || '/';
      }
    }
    this.resolveRoute(currentPath);
  }

  resolveRoute(path) {
    const rawPath = this.stripRepoPrefix(path);
    // Strip query string and hash for route matching
    const basePath = rawPath.split('?')[0].split('#')[0];
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
