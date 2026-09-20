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

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileDrawer?.classList.contains('active')) {
        this.closeMobileMenu();
      }
    });
  }

  handleScroll() {
    if (!this.header) return;
    if (window.scrollY > 30) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  }

  openMobileMenu() {
    if (this.mobileDrawer) this.mobileDrawer.classList.add('active');
    if (this.mobileOverlay) this.mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    if (this.mobileDrawer) this.mobileDrawer.classList.remove('active');
    if (this.mobileOverlay) this.mobileOverlay.classList.remove('active');
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
