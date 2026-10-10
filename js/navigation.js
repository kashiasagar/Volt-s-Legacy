/* ==========================================================================
   VOLT'S LEGACY SOLAR - Navigation & Header Module
   ========================================================================== */

class Navigation {
  constructor() {
    this.header = document.querySelector('.site-header');
    this.mobileToggle = document.querySelector('.mobile-menu-toggle');
    this.mobileDrawer = document.querySelector('.mobile-drawer');
    this.mobileOverlay = document.querySelector('.mobile-drawer-overlay');
    this.mobileClose = document.querySelector('.mobile-drawer-close');
    this.accordionToggles = document.querySelectorAll('.mobile-accordion-toggle');

    this.init();
  }

  init() {
    // Header Scroll Effect
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    this.handleScroll(); // Initial check

    // Mobile Menu Toggle
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener('click', () => this.openMobileMenu());
    }

    if (this.mobileClose) {
      this.mobileClose.addEventListener('click', () => this.closeMobileMenu());
    }

    if (this.mobileOverlay) {
      this.mobileOverlay.addEventListener('click', () => this.closeMobileMenu());
    }

    // Accordion Submenus in Mobile Drawer
    this.accordionToggles.forEach((toggle) => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parentItem = toggle.closest('.mobile-nav-item');
        if (parentItem) {
          const isOpen = parentItem.classList.contains('open');
          // Close other open accordions
          document.querySelectorAll('.mobile-nav-item.open').forEach(item => {
            if (item !== parentItem) item.classList.remove('open');
          });
          parentItem.classList.toggle('open', !isOpen);
        }
      });
    });

    // Auto-close mobile drawer when any link inside drawer is clicked
    if (this.mobileDrawer) {
      this.mobileDrawer.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          this.closeMobileMenu();
        });
      });

      // Touch swipe right to close drawer on touch devices
      let touchStartX = 0;
      this.mobileDrawer.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
          touchStartX = e.touches[0].clientX;
        }
      }, { passive: true });

      this.mobileDrawer.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches[0]) {
          const touchEndX = e.changedTouches[0].clientX;
          if (touchEndX - touchStartX > 50) { // Swiped right toward screen edge
            this.closeMobileMenu();
          }
        }
      }, { passive: true });
    }

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileDrawer?.classList.contains('active')) {
        this.closeMobileMenu();
      }
    });

    // Auto-close drawer if screen resized or orientation changed to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1180 && this.mobileDrawer?.classList.contains('active')) {
        this.closeMobileMenu();
      }
    }, { passive: true });
  }

  handleScroll() {
    if (!this.header) return;
    if (window.scrollY > 20) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  }

  openMobileMenu() {
    if (this.mobileDrawer) this.mobileDrawer.classList.add('active');
    if (this.mobileOverlay) this.mobileOverlay.classList.add('active');
    document.body.classList.add('mobile-menu-open');
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    if (this.mobileDrawer) this.mobileDrawer.classList.remove('active');
    if (this.mobileOverlay) this.mobileOverlay.classList.remove('active');
    document.body.classList.remove('mobile-menu-open');
    document.body.style.overflow = '';
  }

  setActiveNavLink(path) {
    // Desktop links
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (path !== '/' && href !== '/' && path.startsWith(href))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Mobile links
    document.querySelectorAll('.mobile-nav-link, .mobile-submenu-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

window.Navigation = Navigation;
