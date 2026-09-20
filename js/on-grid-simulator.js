/**
 * VOLT'S LEGACY SOLAR - "HOW ON-GRID SOLAR WORKS" Interactive Simulation Engine
 * 
 * CORE PRINCIPLE:
 * "THE SYSTEM STAYS STILL. THE ENERGY MOVES."
 * 
 * STRICT ARCHITECTURAL RULES:
 * - NO mousemove listeners
 * - NO cursor tracking / parallax
 * - NO 3D tilt / perspective shifts
 * - NO coordinate-based translate
 * - Components remain 100% fixed in place.
 * - Only energy particles, solar rays, LEDs, and telemetry numbers animate.
 */

class OnGridSimulator {
  constructor() {
    this.mode = 'day'; // 'day'
    this.activeStep = 1;
    this.hasAutoPlayed = false;
    this.isInitialized = false;
  }

  init() {
    this.bindEvents();
    this.initScrollStorytelling();
    this.setMode('day');
  }

  bindEvents() {
    const dayBtn = document.getElementById('ogModeDayBtn');

    if (dayBtn) {
      dayBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.setMode('day');
      });
    }

    // Step cards mouse hover and click handler
    const phaseCards = document.querySelectorAll('.og-phase-card');
    phaseCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const step = parseInt(card.getAttribute('data-step'), 10);
        if (step) this.highlightStep(step);
      });
      card.addEventListener('mouseleave', () => {
        this.highlightStep(0);
      });
      card.addEventListener('click', () => {
        const step = parseInt(card.getAttribute('data-step'), 10);
        if (step) this.highlightStep(step);
      });
    });

    // SVG node hover and click handler
    const diagramNodes = document.querySelectorAll('.og-diagram-node');
    diagramNodes.forEach(node => {
      node.addEventListener('mouseenter', () => {
        const step = parseInt(node.getAttribute('data-step'), 10);
        if (step) this.highlightStep(step);
      });
      node.addEventListener('mouseleave', () => {
        this.highlightStep(0);
      });
      node.addEventListener('click', () => {
        const step = parseInt(node.getAttribute('data-step'), 10);
        if (step) this.highlightStep(step);
      });
      // Keyboard accessibility (Enter / Space)
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const step = parseInt(node.getAttribute('data-step'), 10);
          if (step) this.highlightStep(step);
        }
      });
    });
  }

  setMode(mode) {
    this.mode = mode;
    const stage = document.getElementById('ogSimulationStage');
    const dayBtn = document.getElementById('ogModeDayBtn');
    const statusPill = document.getElementById('ogStatusPill');

    // Telemetry display elements
    const metricSolar = document.getElementById('ogMetricSolar');
    const metricLoad = document.getElementById('ogMetricLoad');
    const metricGrid = document.getElementById('ogMetricGrid');
    const metricGridLabel = document.getElementById('ogMetricGridLabel');
    const metricGridSub = document.getElementById('ogMetricGridSub');
    const meterLcdVal = document.getElementById('ogMeterLcdVal');
    const meterLcdMode = document.getElementById('ogMeterLcdMode');
    const meterArrow = document.getElementById('ogMeterDirectionArrow');
    const meterImportVal = document.getElementById('ogMeterImportVal');
    const meterExportVal = document.getElementById('ogMeterExportVal');

    if (!stage) return;

    stage.classList.remove('stage-night');
    stage.classList.add('stage-day');

    if (dayBtn) dayBtn.classList.add('active');

    if (statusPill) {
      statusPill.className = 'og-status-pill status-export';
      statusPill.innerHTML = '<span class="og-live-dot green"></span> DAYTIME: SOLAR GENERATING &amp; EXPORTING SURPLUS';
    }

    if (metricSolar) metricSolar.innerHTML = '5.2 <span class="og-unit">kW</span>';
    if (metricLoad) metricLoad.innerHTML = '3.1 <span class="og-unit">kW</span>';
    if (metricGrid) {
      metricGrid.className = 'og-metric-value text-export';
      metricGrid.innerHTML = '+2.1 <span class="og-unit">kW EXPORT</span>';
    }
    if (metricGridLabel) metricGridLabel.textContent = 'SURPLUS TO GRID';
    if (metricGridSub) metricGridSub.textContent = 'Banking Units with DISCOM';

    if (meterLcdVal) meterLcdVal.textContent = 'kW';
    if (meterLcdMode) meterLcdMode.textContent = 'EXPORT ->';
    if (meterArrow) {
      meterArrow.textContent = 'EXPORT -> [GRID]';
      meterArrow.style.color = '#16a34a';
    }
    if (meterImportVal) meterImportVal.textContent = '0.0 kWh';
    if (meterExportVal) meterExportVal.textContent = '2.1 kWh';
  }

  highlightStep(stepNum) {
    this.activeStep = stepNum;

    // Update active phase card
    const phaseCards = document.querySelectorAll('.og-phase-card');
    phaseCards.forEach(card => {
      const cardStep = parseInt(card.getAttribute('data-step'), 10);
      if (stepNum && cardStep === stepNum) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Highlight SVG diagram nodes on hover without locking permanently
    const diagramNodes = document.querySelectorAll('.og-diagram-node');
    diagramNodes.forEach(node => {
      const nodeStep = parseInt(node.getAttribute('data-step'), 10);
      if (stepNum && nodeStep === stepNum) {
        node.classList.add('highlighted');
      } else {
        node.classList.remove('highlighted');
      }
    });

    // Highlight associated SVG conduit lines
    const conduits = document.querySelectorAll('.og-conduit');
    conduits.forEach(conduit => {
      const conduitStep = parseInt(conduit.getAttribute('data-step'), 10);
      if (stepNum && conduitStep === stepNum) {
        conduit.classList.add('conduit-active');
      } else {
        conduit.classList.remove('conduit-active');
      }
    });
  }

  initScrollStorytelling() {
    // Keep initial display clean without pre-highlighting Grid or any node
    this.highlightStep(0);
  }

  playSequentialIntro() {
    // No auto-sticking highlights
    this.highlightStep(0);
  }
}

// Global instance
window.onGridSimulator = new OnGridSimulator();
