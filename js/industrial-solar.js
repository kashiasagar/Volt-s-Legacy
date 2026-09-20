/* ==========================================================================
   VOLT'S LEGACY ENERGY SOLUTIONS
   Page 02: Industrial & Factory Solar
   URL: /solar-for-industrial-factories
   ========================================================================== */

function renderSolarForIndustrialFactoriesView() {
  document.title = "Industrial & Factory Solar Solutions | VOLT'S LEGACY";

  return `
    <!-- SECTION 01: HERO -->
    <section class="cig-hero-section">
      <div class="container container-wide">
        <div class="cig-hero-grid">
          
          <!-- Left Column -->
          <div class="cig-hero-content animate-fade-up">
            <div class="cig-badge gold">
              <span>⚙️</span>
              <span>INDUSTRIAL & FACTORY SOLAR</span>
            </div>
            <h1 class="cig-hero-title">
              POWER YOUR FACTORY<br>
              <span class="highlight-gold">WITH ENERGY YOU CONTROL.</span>
            </h1>
            <p class="cig-hero-text">
              Engineer industrial solar around production schedules, High Tension (HT) demand, daytime consumption, DG genset usage, and long-term energy cost certainty.
            </p>
            <p class="cig-hero-subtext">
              For manufacturing plants, textile mills, engineering facilities, chemical & pharma units, cold storage, and warehouses — we design solar around the way your facility actually consumes power.
            </p>
            <div class="cig-hero-actions">
              <a href="#industrial-financing" class="btn btn-solar btn-lg">
                CALCULATE FACTORY SAVINGS →
              </a>
              <a href="#industrial-lead-form" class="btn btn-secondary btn-lg">
                REQUEST INDUSTRIAL FEASIBILITY
              </a>
            </div>
            <div style="font-size:0.8rem; font-weight:700; color:#94a3b8; letter-spacing:0.5px; text-transform:uppercase;">
              HT INTERCONNECTION • DG SYNCHRONIZATION • 11kV/33kV TRANSFORMERS • SCADA • ZERO ROOF PUNCTURE
            </div>
          </div>

          <!-- Right Column: Hero Visual & Dual Energy Flows -->
          <div class="cig-hero-media animate-fade-up" style="animation-delay:0.12s;">
            <div class="cig-image-card">
              <img src="assets/solar-industrial-hero.jpg" alt="Industrial Manufacturing Factory & HT Substation Solar by VOLT'S LEGACY" class="cig-hero-img" loading="eager">
              
              <!-- Floating Badges -->
              <div class="cig-floating-badge badge-top-left">
                <span class="dot gold"></span>
                <span>HT POWER INTEGRATION (11kV / 33kV)</span>
              </div>
              <div class="cig-floating-badge badge-mid-right">
                <span class="dot blue"></span>
                <span>SMART DG SYNCHRONIZATION</span>
              </div>
              <div class="cig-floating-badge badge-bottom">
                <span class="dot green"></span>
                <span>CAPTIVE • OPEN ACCESS • METAL SHED EPC</span>
              </div>
            </div>

            <!-- Dual Energy Flow Diagram -->
            <div class="cig-hero-flow-bar" style="flex-direction:column; gap:0.6rem;">
              <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                <div class="cig-flow-step"><span class="icon">☀️</span><span class="text">SOLAR</span></div>
                <span class="cig-flow-sep">→</span>
                <div class="cig-flow-step"><span class="icon">🔌</span><span class="text">INVERTER</span></div>
                <span class="cig-flow-sep">→</span>
                <div class="cig-flow-step highlight"><span class="icon">⚡</span><span class="text">TRANSFORMER</span></div>
                <span class="cig-flow-sep">→</span>
                <div class="cig-flow-step highlight"><span class="icon">🏭</span><span class="text">HT PANEL</span></div>
                <span class="cig-flow-sep">→</span>
                <div class="cig-flow-step green"><span class="icon">⚙️</span><span class="text">FACTORY LOAD</span></div>
              </div>
              <div style="display:flex; align-items:center; justify-content:flex-end; gap:0.6rem; width:100%; border-top:1px dashed rgba(255,255,255,0.15); padding-top:0.4rem;">
                <span style="font-size:0.7rem; color:#f59e0b; font-weight:700;">DG BACKUP PATH:</span>
                <div class="cig-flow-step"><span class="text" style="color:#f59e0b;">DG SET</span></div>
                <span class="cig-flow-sep" style="color:#f59e0b;">→</span>
                <div class="cig-flow-step"><span class="text" style="color:#f59e0b;">SYNC CONTROLLER</span></div>
                <span class="cig-flow-sep" style="color:#f59e0b;">→</span>
                <div class="cig-flow-step green"><span class="text">LOAD</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Hero Trust Bar Items -->
        <div class="cig-trust-bar animate-fade-up" style="animation-delay:0.2s;">
          <div class="cig-trust-item">
            <span class="cig-trust-check">✓</span>
            <div>
              <strong style="display:block; font-size:0.92rem; color:#ffffff;">HT ELECTRICAL EPC</strong>
              <span style="font-size:0.8rem; color:#94a3b8;">11kV / 22kV / 33kV CEIG Clearances</span>
            </div>
          </div>
          <div class="cig-trust-item">
            <span class="cig-trust-check">✓</span>
            <div>
              <strong style="display:block; font-size:0.92rem; color:#ffffff;">DG DIESEL DISPLACEMENT</strong>
              <span style="font-size:0.8rem; color:#94a3b8;">Zero reverse power with PLC sync</span>
            </div>
          </div>
          <div class="cig-trust-item">
            <span class="cig-trust-check">✓</span>
            <div>
              <strong style="display:block; font-size:0.92rem; color:#ffffff;">NON-PENETRATIVE CLAMPS</strong>
              <span style="font-size:0.8rem; color:#94a3b8;">Zero roof leakage on standing seam & trapezoid sheds</span>
            </div>
          </div>
          <div class="cig-trust-item">
            <span class="cig-trust-check">✓</span>
            <div>
              <strong style="display:block; font-size:0.92rem; color:#ffffff;">24x7 IoT SCADA TELEMETRY</strong>
              <span style="font-size:0.8rem; color:#94a3b8;">String-level diagnostics & pyranometers</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 02: 6 INDUSTRIAL VALUE PROPOSITIONS -->
    <section class="cig-section cig-bg-light">
      <div class="container">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Factory Economic Drivers</span>
          <h2 class="cig-section-title">ENGINEERED FOR HEAVY PRODUCTION POWER REQUIREMENTS</h2>
          <p class="cig-section-subtitle">
            Electricity constitutes up to 20–40% of manufacturing operating costs in Indian industries. Solar transforms this variable liability into a predictable, long-term operational advantage.
          </p>
        </div>

        <div class="cig-cards-grid-6 animate-fade-up">
          <div class="cig-feature-card">
            <div class="card-icon-box">⚡</div>
            <h3 class="card-title">1. HIGH ENERGY CONSUMPTION</h3>
            <p class="card-desc">Drastically cuts monthly High-Tension (HT) electricity bills by displacing expensive utility power for heavy continuous loads, including industrial motors, induction furnaces, chillers, compressors, and automated extrusion lines.</p>
            <span class="card-tag">Heavy Load Offset</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box">☀️</div>
            <h3 class="card-title">2. DAYTIME PRODUCTION SYNERGY</h3>
            <p class="card-desc">Solar peak generation curves (9:00 AM to 4:30 PM) align directly with intensive daytime manufacturing operations, enabling up to 100% direct on-site solar power absorption without costly transmission losses.</p>
            <span class="card-tag">Peak Shift Match</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box">📈</div>
            <h3 class="card-title">3. HT TARIFF ARBITRAGE</h3>
            <p class="card-desc">Replaces escalating industrial grid power tariffs (₹7.50 to ₹10.50 per kVAh) with clean captive solar energy at a predictable levelized cost of energy (LCOE) under ₹2.20 to ₹2.50 per unit over 25 years.</p>
            <span class="card-tag">Sub-₹2.50 LCOE</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box">🛡️</div>
            <h3 class="card-title">4. DEMAND MANAGEMENT</h3>
            <p class="card-desc">Intelligent solar generation reduces your plant's recorded instantaneous peak kVA demand from the utility grid, actively preventing expensive penalty surcharges for exceeding sanctioned contract limits.</p>
            <span class="card-tag">Peak Shaving</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box">⛽</div>
            <h3 class="card-title">5. DG DIESEL DISPLACEMENT</h3>
            <p class="card-desc">Micro-second PLC Solar-DG controllers synchronize solar power with on-site diesel generators during utility outages, slashing expensive backup fuel consumption by up to 40% to 60% with zero reverse power risk.</p>
            <span class="card-tag">Save ₹25–₹35/kWh Fuel</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box">🔒</div>
            <h3 class="card-title">6. 25-YEAR COST CERTAINTY</h3>
            <p class="card-desc">Hedges your entire manufacturing balance sheet against continuous state DISCOM power tariff increases, locking in zero-fuel clean energy independence and substantially elevating operating EBITDA margins.</p>
            <span class="card-tag">Inflation Shield</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 03: INDUSTRIAL SOLAR CALCULATOR -->
    <section class="cig-section cig-bg-white" id="industrial-financing">
      <div class="container container-wide">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Enterprise Engineering Model</span>
          <h2 class="cig-section-title">INDUSTRIAL SOLAR & DG SIZING CALCULATOR</h2>
          <p class="cig-section-subtitle">
            Calculate your manufacturing plant's optimal solar capacity, HT grid offset, DG fuel displacement, and 25-year compounding economic returns.
          </p>
        </div>

        <div class="cig-calc-container animate-fade-up">
          
          <!-- Top Ribbon -->
          <div class="cig-calc-ribbon" style="background:linear-gradient(90deg, #071530 0%, #064e3b 100%);">
            <span>🏭 <strong>High-Tension (HT) Industrial Modeling:</strong> Real HT tariffs, contract demand kVA, and smart DG diesel displacement simulation.</span>
            <span style="font-size:0.8rem; color:#86efac;">*Engineer-Calibrated Model</span>
          </div>

          <div class="cig-calc-grid-layout">
            
            <!-- LEFT CONSOLE: INPUTS -->
            <div class="cig-calc-inputs-col">
              <div class="cig-calc-col-heading">
                <span>Factory Operating Parameters</span>
                <span style="font-size:0.8rem; color:#64748b;">Step 1 of 2</span>
              </div>

              <!-- Input 1: Monthly Electricity Bill -->
              <div class="cig-input-group">
                <div class="cig-label-row">
                  <label for="indSliderBill">Monthly Power Bill (₹)</label>
                  <div class="cig-val-badge green" id="indBillDisplay">₹5,00,000 / mo</div>
                </div>
                <input type="range" class="cig-range-slider" id="indSliderBill" min="100000" max="10000000" step="50000" value="500000">
                <div class="cig-slider-ticks">
                  <span>₹1 Lakh</span>
                  <span>₹25 Lakhs</span>
                  <span>₹50 Lakhs</span>
                  <span>₹1.0 Crore+</span>
                </div>
              </div>

              <!-- Input 2: HT Tariff & Contract Demand -->
              <div class="cig-input-row-2">
                <div class="cig-subgroup">
                  <label for="indTariffInput">HT Power Tariff (₹ / kVAh)</label>
                  <input type="number" id="indTariffInput" class="form-control" value="8.20" step="0.1" min="5.5" max="14.0">
                </div>
                <div class="cig-subgroup">
                  <label for="indContractDemand">Contract Demand (kVA / MW)</label>
                  <input type="number" id="indContractDemand" class="form-control" value="300" min="50" max="20000" step="25">
                </div>
              </div>

              <!-- Input 3: Production Shifts & Daytime Ratio -->
              <div class="cig-input-row-2">
                <div class="cig-subgroup">
                  <label for="indShiftsSelect">Production Schedule</label>
                  <select id="indShiftsSelect" class="form-control">
                    <option value="1">Single Shift (8 AM – 5 PM)</option>
                    <option value="2" selected>Double Shift (6 AM – 10 PM)</option>
                    <option value="3">Continuous 3-Shift (24 Hours)</option>
                  </select>
                </div>
                <div class="cig-subgroup">
                  <label for="indDaytimeRatio">Daytime Load Absorption %</label>
                  <select id="indDaytimeRatio" class="form-control">
                    <option value="0.70">70% Daytime (Standard Factory)</option>
                    <option value="0.85" selected>85% Daytime (Day Heavy)</option>
                    <option value="0.55">55% Daytime (Continuous 24x7)</option>
                  </select>
                </div>
              </div>

              <!-- Input 4: DG Genset Information -->
              <div class="cig-input-row-2" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.75rem;">
                <div class="cig-subgroup">
                  <label for="indDgCapacity">DG Genset (kVA)</label>
                  <input type="number" id="indDgCapacity" class="form-control" value="250" min="0" max="5000" step="25">
                </div>
                <div class="cig-subgroup">
                  <label for="indDgDieselLitres">Monthly Diesel (Litres/mo)</label>
                  <input type="number" id="indDgDieselLitres" class="form-control" value="1500" min="0" max="100000" step="100">
                </div>
              </div>

              <!-- Input 5: Shed Rooftop Area -->
              <div class="cig-input-group" style="margin-top:1.25rem;">
                <div class="cig-label-row">
                  <label for="indRoofArea">Available Shed Roof / Ground Area (sq.ft)</label>
                  <span style="font-size:0.85rem; font-weight:700; color:#0369a1;" id="indRoofDisplay">25,000 sq.ft</span>
                </div>
                <input type="range" class="cig-range-slider" id="indRoofArea" min="2000" max="500000" step="1000" value="25000">
                <div class="cig-slider-ticks">
                  <span>2,000 sq.ft</span>
                  <span>1,00,000 sq.ft</span>
                  <span>2,50,000 sq.ft</span>
                  <span>5,00,000+ sq.ft</span>
                </div>
              </div>

              <!-- Sizing Optimization Toggle -->
              <div style="margin-top:1.25rem; padding-top:1rem; border-top:1px dashed #cbd5e1;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:0.85rem; font-weight:700; color:#334155;">⚡ Sizing Optimization:</span>
                  <div class="cig-mode-toggle">
                    <button type="button" class="cig-btn-mode active" id="btnIndModeAuto">Auto Optimal</button>
                    <button type="button" class="cig-btn-mode" id="btnIndModeCustom">Custom kWp / MWp</button>
                  </div>
                </div>
                <div id="indCustomKwWrap" style="display:none; margin-top:0.75rem;">
                  <label for="indCustomKwInput" style="font-size:0.82rem; font-weight:700; color:#64748b;">Specify Target Size (kWp):</label>
                  <input type="number" id="indCustomKwInput" class="form-control" value="250" min="25" max="10000" step="25">
                </div>
              </div>
            </div>

            <!-- RIGHT CONSOLE: 8 INDUSTRIAL OUTPUTS & METRICS -->
            <div class="cig-calc-results-col">
              <div class="cig-calc-col-heading">
                <span>Calculated Industrial Proposal</span>
                <span class="cig-val-badge green">HT CEIG Standard</span>
              </div>

              <!-- 8 Live Metrics Grid -->
              <div class="cig-metrics-grid-4x2">
                
                <!-- Metric 01: System Capacity -->
                <div class="cig-metric-box highlight-primary">
                  <div class="metric-val blue" id="indResKw">250 kWp</div>
                  <div class="metric-lbl">Recommended Solar Plant Size</div>
                  <div class="metric-sub" id="indResPanels">~416 High-Wattage 600W TopCon Modules</div>
                </div>

                <!-- Metric 02: Annual Generation -->
                <div class="cig-metric-box">
                  <div class="metric-val" id="indResAnnualGen">~360 MWh / yr</div>
                  <div class="metric-lbl">Est. Annual Generation</div>
                  <div class="metric-sub">@ 1,440 kWh/kWp specific yield</div>
                </div>

                <!-- Metric 03: Grid Energy Offset -->
                <div class="cig-metric-box">
                  <div class="metric-val green" id="indResGridOffset">~62%</div>
                  <div class="metric-lbl">HT Grid Energy Displacement</div>
                  <div class="metric-sub">100% Daytime absorption on factory bus</div>
                </div>

                <!-- Metric 04: Estimated Diesel Displacement -->
                <div class="cig-metric-box highlight-gold">
                  <div class="metric-val gold" id="indResDieselSaved">~6,300 Litres / yr</div>
                  <div class="metric-lbl">Est. DG Diesel Displacement</div>
                  <div class="metric-sub" id="indResDieselCost">Saves ~₹5.80 Lakhs/yr in fuel (@ ₹92/L)</div>
                </div>

                <!-- Metric 05: Gross Turnkey EPC Cost -->
                <div class="cig-metric-box">
                  <div class="metric-val" id="indResGrossCost">₹1,15,00,000</div>
                  <div class="metric-lbl">Turnkey Industrial EPC Cost</div>
                  <div class="metric-sub">Includes HT transformer, switchgear & CEIG</div>
                </div>

                <!-- Metric 06: Section 32 Depreciation -->
                <div class="cig-metric-box highlight-green">
                  <div class="metric-val green" id="indResDepreciation">40% Rate</div>
                  <div class="metric-lbl">Section 32 Tax Depreciation</div>
                  <div class="metric-sub" id="indResTaxShield">~₹11.58 Lakhs Year 1 tax shelter benefit</div>
                </div>

                <!-- Metric 07: Annual Total Energy Savings -->
                <div class="cig-metric-box highlight-green">
                  <div class="metric-val green" id="indResAnnualSavings">₹35,32,000 / yr</div>
                  <div class="metric-lbl">Annual Savings (Grid + DG)</div>
                  <div class="metric-sub" id="indResPayback">Payback: ~3.1 Years (Project IRR: ~31%)</div>
                </div>

                <!-- Metric 08: 25-Year Net Wealth -->
                <div class="cig-metric-box highlight-primary">
                  <div class="metric-val blue" id="indRes25Yr">₹13.50 Crore+</div>
                  <div class="metric-lbl">25-Year Cumulative Benefit</div>
                  <div class="metric-sub">Net after 100% capital recovery & O&M</div>
                </div>

              </div>

              <!-- Action Bar -->
              <div style="background:#f1f5f9; border-radius:12px; padding:1rem 1.25rem; display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; flex-wrap:wrap; gap:0.75rem;">
                <div>
                  <span style="font-size:0.85rem; color:#475569; font-weight:700;">FACTORY CARBON OFFSET:</span>
                  <strong style="color:#16a34a; margin-left:0.4rem;" id="indResCo2">~295.2 Tonnes CO₂ Avoided / yr</strong>
                </div>
                <a href="#industrial-lead-form" class="btn btn-solar btn-sm">GET DETAILED AUDIT & SLD →</a>
              </div>

              <div style="font-size:0.74rem; color:#64748b; margin-top:0.75rem; line-height:1.5;">
                *All industrial calculations are indicative technical projections. Diesel displacement is calculated only where DG generation data is supplied. Sizing, transformer capacity, HT protection relay coordination, and net-metering/captive approval follow current CEA, GERC, and DISCOM statutory rules.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 04: INTERACTIVE 24-HOUR LOAD PROFILE SIMULATOR -->
    <section class="cig-section cig-bg-light">
      <div class="container container-wide">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Interactive Shift Simulation</span>
          <h2 class="cig-section-title">ENGINEERED AROUND YOUR 24-HOUR LOAD PROFILE</h2>
          <p class="cig-section-subtitle">
            The best industrial solar system is engineered precisely around how your factory produces. Toggle shifts below to see how daytime solar generation overlaps and offsets your factory load curve.
          </p>
        </div>

        <div class="cig-load-curve-container animate-fade-up">
          <div class="cig-curve-controls">
            <div>
              <span style="font-size:0.9rem; font-weight:800; color:#071530; display:block; margin-bottom:0.25rem;">Select Production Operating Schedule:</span>
              <div class="cig-shift-buttons">
                <button type="button" class="cig-btn-shift" data-shift="1">1 Shift (8 AM – 5 PM)</button>
                <button type="button" class="cig-btn-shift active" data-shift="2">2 Shifts (6 AM – 10 PM)</button>
                <button type="button" class="cig-btn-shift" data-shift="3">3 Shifts (24x7 Continuous)</button>
              </div>
            </div>
            <div style="text-align:right;">
              <span style="font-size:0.8rem; font-weight:700; color:#64748b; display:block;">Solar Peak Operating Window:</span>
              <strong style="color:#f59e0b; font-size:1.05rem;">08:30 AM — 04:30 PM (Peak 11:30 AM–02:00 PM)</strong>
            </div>
          </div>

          <!-- Visual Curve Box -->
          <div class="cig-curve-visual" id="indCurveVisual">
            <!-- Simulated SVG Graph -->
            <svg viewBox="0 0 900 240" width="100%" height="100%" preserveAspectRatio="none" style="overflow:visible;">
              <defs>
                <linearGradient id="solarFillGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.45"/>
                  <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.0"/>
                </linearGradient>
                <linearGradient id="loadFillGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0"/>
                </linearGradient>
              </defs>

              <!-- Grid Horizontal Lines -->
              <line x1="0" y1="50" x2="900" y2="50" stroke="#334155" stroke-width="1" stroke-dasharray="4"/>
              <line x1="0" y1="110" x2="900" y2="110" stroke="#334155" stroke-width="1" stroke-dasharray="4"/>
              <line x1="0" y1="170" x2="900" y2="170" stroke="#334155" stroke-width="1" stroke-dasharray="4"/>
              <line x1="0" y1="220" x2="900" y2="220" stroke="#475569" stroke-width="1.5"/>

              <!-- Timeline Hours Labels -->
              <text x="20" y="235" fill="#94a3b8" font-size="11" font-family="monospace">00:00</text>
              <text x="140" y="235" fill="#94a3b8" font-size="11" font-family="monospace">04:00</text>
              <text x="280" y="235" fill="#94a3b8" font-size="11" font-family="monospace">08:00</text>
              <text x="440" y="235" fill="#94a3b8" font-size="11" font-family="monospace">12:00 (Peak)</text>
              <text x="600" y="235" fill="#94a3b8" font-size="11" font-family="monospace">16:00</text>
              <text x="740" y="235" fill="#94a3b8" font-size="11" font-family="monospace">20:00</text>
              <text x="860" y="235" fill="#94a3b8" font-size="11" font-family="monospace">24:00</text>

              <!-- Factory Load Curve (2-Shift Default: 6 AM to 10 PM) -->
              <path id="svgLoadPath" d="M 0 190 L 210 190 Q 230 70 280 65 L 750 65 Q 800 180 840 190 L 900 190 L 900 220 L 0 220 Z" fill="url(#loadFillGrad)"/>
              <path id="svgLoadLine" d="M 0 190 L 210 190 Q 230 70 280 65 L 750 65 Q 800 180 840 190 L 900 190" fill="none" stroke="#38bdf8" stroke-width="3"/>

              <!-- Solar Bell Curve Generation (06:00 to 18:30, Peak 12:00) -->
              <path d="M 225 220 Q 330 220 380 90 Q 450 25 520 90 Q 570 220 675 220 Z" fill="url(#solarFillGrad)"/>
              <path d="M 225 220 Q 330 220 380 90 Q 450 25 520 90 Q 570 220 675 220" fill="none" stroke="#f59e0b" stroke-width="3.5"/>
            </svg>
          </div>

          <div class="cig-curve-legend">
            <div class="cig-legend-item">
              <span class="cig-legend-color" style="background:#38bdf8;"></span>
              <span style="color:#0f172a;">Factory Electrical Load Demand Curve (kW / kVA)</span>
            </div>
            <div class="cig-legend-item">
              <span class="cig-legend-color" style="background:#f59e0b;"></span>
              <span style="color:#0f172a;">Solar Clean Power Generation Bell Curve</span>
            </div>
            <div class="cig-legend-item">
              <span class="cig-legend-color" style="background:#10b981;"></span>
              <span style="color:#10b981;">Direct On-Site Solar Power Displacement Zone</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 05: 5 INDUSTRIAL ENERGY STRATEGIES -->
    <section class="cig-section cig-bg-white">
      <div class="container container-wide">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Strategic Deployment Models</span>
          <h2 class="cig-section-title">5 INDUSTRIAL ENERGY STRATEGIES</h2>
          <p class="cig-section-subtitle">
            Tailored deployment structures for factory shed roofs, ground land, captive wheeling, and high-reliability hybrid setups.
          </p>
        </div>

        <div class="cig-cards-grid-5 animate-fade-up">
          <div class="cig-feature-card">
            <div class="card-icon-box" style="background:#e0f2fe; color:#0284c7;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 21h18M3 10h18M5 10V21M19 10V21M9 10V21M14 10V21M3 10l9-7 9 7"/></svg>
            </div>
            <h3 class="card-title">1. FACTORY ROOFTOP</h3>
            <p class="card-desc">Non-penetrative anodized aluminum clamp mounting on trapezoidal and standing-seam industrial metal sheds, engineered to preserve 100% roof waterproofing integrity with zero drilling.</p>
            <span class="card-tag">Rooftop Asset</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box" style="background:#dcfce7; color:#16a34a;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            </div>
            <h3 class="card-title">2. FACTORY GROUND MOUNT</h3>
            <p class="card-desc">Converts unutilized factory land parcels, boundary buffer zones, and open campus plots into high-output ground solar arrays utilizing reinforced concrete or rammed-pile foundation systems.</p>
            <span class="card-tag">On-Site Land</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box" style="background:#fef3c7; color:#d97706;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 class="card-title">3. CAPTIVE POWER</h3>
            <p class="card-desc">100% company-owned dedicated on-site or off-site solar setup providing long-term tariff certainty, complete legal exemption from Cross-Subsidy Surcharges (CSS), and full Section 32 tax benefits.</p>
            <span class="card-tag">Zero CSS Surcharge</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box" style="background:#eff6ff; color:#2563eb;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3 class="card-title">4. GREEN OPEN ACCESS</h3>
            <p class="card-desc">Procure large-scale renewable power directly from off-site solar farms through the state GETCO grid network when on-site rooftop space is insufficient to meet your total HT power demand.</p>
            <span class="card-tag">Off-Site Supply</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box" style="background:#f3e8ff; color:#7c3aed;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="7" width="16" height="12" rx="2"/><path d="M22 11v4M6 11v4M10 11v4M14 11v4"/></svg>
            </div>
            <h3 class="card-title">5. SOLAR + STORAGE / HYBRID</h3>
            <p class="card-desc">Battery energy storage system (BESS) integration engineered for critical continuous processing plants requiring zero millisecond power interruptions and Time-of-Day (TOD) peak tariff arbitrage.</p>
            <span class="card-tag">Critical Process Power</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 06: DG DISPLACEMENT & REVERSE POWER CONTROLLERS -->
    <section class="cig-section cig-bg-light">
      <div class="container">
        <div class="split-layout animate-fade-up" style="align-items:center;">
          <div>
            <span class="section-tag section-tag-gold">Zero Reverse Power Feeding</span>
            <h2 class="cig-section-title">TURN DAYTIME SOLAR INTO LOWER DG DEPENDENCY.</h2>
            <p style="color:#475569; font-size:1rem; line-height:1.65; margin:1.25rem 0;">
              Running industrial diesel generator sets costs <strong>₹25 to ₹35 per kWh</strong> in fuel. During grid outages, standard on-grid solar plants shut down unless paired with an intelligent <strong>Solar-DG Synchronization Controller</strong>.
            </p>
            <p style="color:#475569; font-size:0.95rem; line-height:1.6; margin-bottom:1.5rem;">
              VOLT'S LEGACY deploys micro-second PLC-based controllers that continuously monitor DG minimum load limits (typically 30–35%) and dynamically modulate inverter output. This prevents dangerous reverse power feeding into generator alternators while reducing diesel consumption by up to 60%.
            </p>
            <ul class="cig-process-checks" style="font-size:0.9rem; gap:0.6rem;">
              <li><span class="chk" style="color:#16a34a; font-weight:bold;">✓</span> <strong>Dynamic Reverse Power Protection:</strong> Zero reverse current to DG alternator.</li>
              <li><span class="chk" style="color:#16a34a; font-weight:bold;">✓</span> <strong>Minimum DG Loading Guard:</strong> Keeps generator healthy and prevents carbon buildup.</li>
              <li><span class="chk" style="color:#16a34a; font-weight:bold;">✓</span> <strong>Instant Millisecond Response:</strong> Adapts to sudden machine load switching.</li>
            </ul>
          </div>

          <div>
            <div class="cig-sld-container">
              <h4 style="font-size:1.1rem; color:#38bdf8; margin-bottom:1.25rem; font-family:var(--font-heading);">Smart Solar-DG Synchronization Controller</h4>
              <div style="display:flex; flex-direction:column; gap:0.85rem;">
                <div style="background:rgba(15,23,42,0.85); border:1.5px solid rgba(245,158,11,0.5); border-radius:10px; padding:1rem; display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <strong style="color:#f59e0b; display:block; font-size:0.9rem;">Diesel Generator Set</strong>
                    <span style="font-size:0.75rem; color:#94a3b8;">Supplies baseline 30% load to maintain engine health</span>
                  </div>
                  <span style="font-size:1.4rem;">⛽</span>
                </div>
                <div style="text-align:center; color:#38bdf8; font-weight:800;">+ (Micro-second PLC Power Balancing) +</div>
                <div style="background:rgba(15,23,42,0.85); border:1.5px solid rgba(56,189,248,0.5); border-radius:10px; padding:1rem; display:flex; justify-content:space-between; align-items:center;">
                  <div>
                    <strong style="color:#38bdf8; display:block; font-size:0.9rem;">Solar PV Inverter Array</strong>
                    <span style="font-size:0.75rem; color:#94a3b8;">Supplies up to 70% daytime load, cutting diesel burn</span>
                  </div>
                  <span style="font-size:1.4rem;">☀️</span>
                </div>
                <div style="text-align:center; color:#22c55e; font-weight:800;">↓ Combined Stable Power to Factory Production Bus ↓</div>
                <div style="background:rgba(22,163,74,0.15); border:1.5px solid #22c55e; border-radius:10px; padding:0.85rem; text-align:center; color:#4ade80; font-weight:700; font-size:0.88rem;">
                  ⚙️ Factory Production Running at 50% Lower Operating Fuel Cost
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 07: INDUSTRIAL HT ELECTRICAL ENGINEERING & SLD -->
    <section class="cig-section cig-bg-dark">
      <div class="container container-wide">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Utility-Grade Substation Engineering</span>
          <h2 class="cig-section-title">ENGINEERED FOR HT POWER SYSTEMS (11kV / 33kV)</h2>
          <p class="cig-section-subtitle">
            Every industrial solar plant is engineered with CEA Technical Connectivity, power quality harmonics compliance (IEEE 519), and turnkey CEIG safety approval coordination.
          </p>
        </div>

        <!-- Industrial SLD Diagram -->
        <div class="cig-sld-flow animate-fade-up">
          <div class="cig-sld-node">
            <div class="node-icon">☀️</div>
            <div class="node-title">PV ARRAY</div>
            <div class="node-sub">600W+ TopCon Modules</div>
          </div>
          <span class="cig-sld-arrow">→</span>
          <div class="cig-sld-node">
            <div class="node-icon">🔌</div>
            <div class="node-title">STRING INVERTER</div>
            <div class="node-sub">100kW–350kW Units</div>
          </div>
          <span class="cig-sld-arrow">→</span>
          <div class="cig-sld-node">
            <div class="node-icon">⚡</div>
            <div class="node-title">ACDB (415V)</div>
            <div class="node-sub">MCCB + Class C SPD</div>
          </div>
          <span class="cig-sld-arrow">→</span>
          <div class="cig-sld-node highlight">
            <div class="node-icon">🔄</div>
            <div class="node-title">STEP-UP XMER</div>
            <div class="node-sub">415V to 11kV/33kV</div>
          </div>
          <span class="cig-sld-arrow">→</span>
          <div class="cig-sld-node highlight">
            <div class="node-icon">🏢</div>
            <div class="node-title">HT VCB PANEL</div>
            <div class="node-sub">11kV Vacuum Breaker</div>
          </div>
          <span class="cig-sld-arrow">→</span>
          <div class="cig-sld-node load-node">
            <div class="node-icon">⚙️</div>
            <div class="node-title">FACTORY BUS</div>
            <div class="node-sub">Production Plant & Motors</div>
          </div>
        </div>

        <!-- Industrial Checks Grid -->
        <div class="cig-checks-grid animate-fade-up">
          <div class="cig-check-item"><span class="chk">✓</span> CEIG Statutory Approvals & Inspection</div>
          <div class="cig-check-item"><span class="chk">✓</span> Transformer Differential & Overcurrent Relays</div>
          <div class="cig-check-item"><span class="chk">✓</span> Harmonics Compliance (IEEE 519 / CEA)</div>
          <div class="cig-check-item"><span class="chk">✓</span> Automatic Power Factor Correction (APFC)</div>
          <div class="cig-check-item"><span class="chk">✓</span> Zero Reverse Power to DG (PLC Controllers)</div>
          <div class="cig-check-item"><span class="chk">✓</span> Hot-Dip Galvanized Purlin Clamps (Zero Roof Holes)</div>
          <div class="cig-check-item"><span class="chk">✓</span> Dedicated HT & LT Chemical Earthing Pits</div>
          <div class="cig-check-item"><span class="chk">✓</span> Early Streamer Emission (ESE) Lightning Protection</div>
          <div class="cig-check-item"><span class="chk">✓</span> CT/PT Metering & Bi-directional Net Meter</div>
          <div class="cig-check-item"><span class="chk">✓</span> Industrial IoT SCADA with Modbus RS485/TCP</div>
          <div class="cig-check-item"><span class="chk">✓</span> Fire Isolation & Emergency Trip Switches</div>
          <div class="cig-check-item"><span class="chk">✓</span> 25-Year Performance & Degradation Warranty</div>
        </div>
      </div>
    </section>

    <!-- SECTION 08: 6-STEP INDUSTRIAL EPC PROCESS -->
    <section class="cig-section cig-bg-light">
      <div class="container">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Turnkey Execution</span>
          <h2 class="cig-section-title">THE 6-STEP INDUSTRIAL SOLAR EPC PROCESS</h2>
          <p class="cig-section-subtitle">
            From initial HT tariff analysis to statutory CEIG clearances, grid synchronization, and 25-year performance monitoring.
          </p>
        </div>

        <div class="cig-process-grid-6 animate-fade-up">
          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 01</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Day 1–2</span>
            </div>
            <h3 class="cig-process-title">HT Bill & Tariff Audit</h3>
            <p class="cig-process-desc">We examine 12-month HT electricity bills, Time-of-Day (TOD) peak tariffs, power factor records, and contract demand history to model daytime power savings.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>12-Month HT Bill Analysis</span></li>
              <li><span class="chk">✓</span><span>TOD Tariff Optimization</span></li>
            </ul>
          </div>

          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 02</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Day 3–4</span>
            </div>
            <h3 class="cig-process-title">Shed Structural & Drone Survey</h3>
            <p class="cig-process-desc">Our structural engineers perform drone LiDAR surveys, purlin load-bearing tests, and 3D shadow analysis to guarantee shed integrity and wind stability.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>Drone LiDAR 3D Modeling</span></li>
              <li><span class="chk">✓</span><span>Shed Structural Integrity</span></li>
            </ul>
          </div>

          <div class="cig-process-card gold-step">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 03</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Day 5–7</span>
            </div>
            <h3 class="cig-process-title">SLD & DG Sync Engineering</h3>
            <p class="cig-process-desc">We engineer custom Single-Line Diagrams (SLD), protection relay schemes, DG sync controller logic, and Section 32 tax depreciation ROI models.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>Custom Electrical SLD</span></li>
              <li><span class="chk">✓</span><span>DG Synchronization Logic</span></li>
            </ul>
          </div>

          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 04</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Day 8–20</span>
            </div>
            <h3 class="cig-process-title">DISCOM & CEIG Approvals</h3>
            <p class="cig-process-desc">We handle end-to-end statutory documentation, Chief Electrical Inspector (CEIG) drawings, GETCO connectivity, and DISCOM net-metering approvals.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>CEIG Inspection & Approval</span></li>
              <li><span class="chk">✓</span><span>DISCOM Net-Meter Liaison</span></li>
            </ul>
          </div>

          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 05</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Day 21–45</span>
            </div>
            <h3 class="cig-process-title">Industrial EPC Installation</h3>
            <p class="cig-process-desc">Certified teams install non-penetrative clamps, Tier-1 TopCon modules, multi-MPPT inverters, ACDB panels, and dedicated chemical earthing grids.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>Zero Roof Penetration</span></li>
              <li><span class="chk">✓</span><span>HT Step-Up Integration</span></li>
            </ul>
          </div>

          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 06</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Ongoing</span>
            </div>
            <h3 class="cig-process-title">Grid Sync & 25-Yr O&M</h3>
            <p class="cig-process-desc">Transformer charging, bi-directional net-meter commissioning, cloud IoT SCADA activation, and scheduled preventative thermography maintenance.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>24/7 Cloud SCADA Telemetry</span></li>
              <li><span class="chk">✓</span><span>25-Year Performance Protocol</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 09: QUALITY STANDARDS & ALMM COMPLIANCE -->
    <section class="cig-section cig-bg-white">
      <div class="container">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Tier-1 Standards & ALMM Compliance</span>
          <h2 class="cig-section-title">ENGINEERED TO INDIA'S POWER & SOLAR FRAMEWORK</h2>
          <p class="cig-section-subtitle">
            All equipment conforms to current Approved List of Models and Manufacturers (ALMM), Central Electricity Authority (CEA) connectivity standards, and Bureau of Indian Standards (BIS) specifications.
          </p>
        </div>

        <div class="cig-cards-grid-3 animate-fade-up">
          <div class="cig-feature-card">
            <div class="card-icon-box">🏛️</div>
            <h3 class="card-title">MNRE ALMM COMPLIANCE</h3>
            <p class="card-desc">All solar PV modules and cells are verified against active <a href="https://mnre.gov.in" target="_blank" rel="noopener noreferrer" style="color:#2563eb; font-weight:700; text-decoration:underline;">MNRE ALMM List-I & List-II</a> official government registers, ensuring Tier-1 quality, domestic content compliance, and verified wattage output.</p>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box">⚡</div>
            <h3 class="card-title">CEA GRID CONNECTIVITY</h3>
            <p class="card-desc">Interconnection complies fully with CEA (Technical Standards for Connectivity to the Grid) Regulations, including Low Voltage Ride-Through (LVRT), power quality harmonics, and relay coordination.</p>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box">🛡️</div>
            <h3 class="card-title">BIS / QCO QUALITY ORDERS</h3>
            <p class="card-desc">Inverters, HT step-up transformers, vacuum circuit breakers, cables, and safety switchgear strictly comply with Bureau of Indian Standards (IS 16221, IS 16169) and national safety norms.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 09: 12 INDUSTRIAL FAQS -->
    <section class="cig-section cig-bg-light" id="industrial-faq">
      <div class="container" style="max-width:960px;">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Frequently Asked Questions</span>
          <h2 class="cig-section-title">INDUSTRIAL SOLAR QUESTIONS ANSWERED</h2>
          <p class="cig-section-subtitle">
            Clear technical and financial answers for factory owners, plant directors, and chief engineers.
          </p>
        </div>

        <div class="sfhs-faq-accordion animate-fade-up" id="indFaqList">
          
          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>1. How much can industrial solar reduce factory electricity costs?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>For facilities operating daytime production shifts, industrial solar typically reduces daytime grid energy charges by 50% to 80%, providing electricity at a levelized cost (LCOE) under ₹2.30/kWh compared to ₹7.50–₹10.50/kWh grid tariffs.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>2. Can solar reduce our recorded HT contract demand charges?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Yes. If your factory's peak equipment operations coincide with peak solar generation hours (10 AM to 3 PM), solar reduces the instantaneous kVA drawn from the utility grid, helping manage maximum recorded demand within sanctioned limits.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>3. Can solar work alongside our factory diesel generator sets (DG)?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Yes. Using high-speed PLC Solar-DG controllers, solar co-generates with DG sets during power outages without reverse power flow, saving up to 60% in expensive diesel fuel.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>4. Will solar installation damage or cause leaks on our factory metal shed roof?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>No. We use specialized anodized aluminum non-penetrative clamps engineered for standing-seam and trapezoidal profile sheets. No holes are drilled through the roof, preserving 100% waterproofing integrity.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>5. Can a factory install captive solar on remote ground land?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Yes. Under the Electricity Act 2003, captive solar plants generate power on private land and wheel electricity to your factory via the state transmission grid with zero Cross-Subsidy Surcharges (CSS).</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>6. Does a factory need battery energy storage (BESS)?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Battery storage is recommended only where critical manufacturing processes cannot tolerate millisecond interruptions or where high peak TOD night tariffs justify battery arbitrage. Most on-grid manufacturing plants achieve maximum ROI with direct grid synchronization.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>7. What is the typical financial payback period for an industrial solar plant?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Industrial solar projects typically achieve complete financial payback in 2.8 to 3.5 years, generating free clean electricity for the remaining 22+ years of plant design life.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>8. What tax benefits apply to industrial solar under Section 32?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Solar energy systems are categorized under renewable energy devices eligible for 40% accelerated tax depreciation under Section 32 of the Income Tax Act, significantly lowering year-one taxable corporate liability.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>9. Who handles CEIG and DISCOM permissions?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>VOLT'S LEGACY manages 100% turnkey liaisoning: from single-line drawings (SLD), protection coordination studies, and Chief Electrical Inspector to Government (CEIG) approvals, to DISCOM net-metering commissioning.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>10. Can solar power be expanded in the future as our factory expands?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Yes. Our modular string inverter architecture and expandable HT busbars allow seamless phase-wise solar capacity additions as your manufacturing facility scales.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>11. What maintenance is required for industrial rooftop solar?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Periodic water cleaning of PV panels, string voltage diagnostics, thermal imaging thermography, and inverter filter maintenance. We provide complete 25-year comprehensive Operation & Maintenance (O&M) contracts.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>12. How does SCADA monitoring help plant engineers?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Our cloud-based IoT SCADA provides real-time generation graphs, string-level current tracking, pyranometer solar irradiance benchmarking, automated fault alerts, and PR (Performance Ratio) calculations accessible via desktop and smartphone.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 10: INDUSTRIAL LEAD GENERATION FORM -->
    <section class="cig-form-section" id="industrial-lead-form">
      <div class="container">
        <div class="cig-form-card animate-fade-up">
          <div class="cig-form-header">
            <span class="section-tag section-tag-gold" style="margin-bottom:0.5rem;">Turnkey Factory Feasibility</span>
            <h2 class="cig-form-title">REQUEST INDUSTRIAL SOLAR FEASIBILITY REPORT</h2>
            <p class="cig-form-subtitle">
              Provide your factory electricity and infrastructure parameters to receive an engineering SLD, 3D roof layout, and commercial ROI model.
            </p>
          </div>

          <form id="industrialBookingForm" novalidate>
            <div class="cig-form-grid">
              
              <div class="cig-form-group" id="group-ind-company">
                <label class="cig-form-label" for="indCompanyName">Company Name *</label>
                <input type="text" id="indCompanyName" name="companyName" class="cig-form-control" placeholder="e.g. Gujarat Polymer Industries Ltd" required>
                <div class="cig-form-error-msg">Please enter your company name.</div>
              </div>

              <div class="cig-form-group" id="group-ind-factory">
                <label class="cig-form-label" for="indFactoryName">Factory / Unit Name & Location *</label>
                <input type="text" id="indFactoryName" name="factoryName" class="cig-form-control" placeholder="e.g. Unit 2, Sachin GIDC / Dahej" required>
                <div class="cig-form-error-msg">Please enter your factory location.</div>
              </div>

              <div class="cig-form-group" id="group-ind-person">
                <label class="cig-form-label" for="indContactPerson">Contact Person & Designation *</label>
                <input type="text" id="indContactPerson" name="contactPerson" class="cig-form-control" placeholder="e.g. Amit Patel (VP Operations / Plant Head)" required>
                <div class="cig-form-error-msg">Please enter contact person name.</div>
              </div>

              <div class="cig-form-group" id="group-ind-phone">
                <label class="cig-form-label" for="indPhone">Mobile Number (WhatsApp) *</label>
                <input type="tel" id="indPhone" name="phone" class="cig-form-control" placeholder="10-digit mobile number" maxlength="10" required>
                <div class="cig-form-error-msg">Please enter a valid 10-digit mobile number.</div>
              </div>

              <div class="cig-form-group" id="group-ind-email">
                <label class="cig-form-label" for="indEmail">Official Corporate Email *</label>
                <input type="email" id="indEmail" name="email" class="cig-form-control" placeholder="plant@company.com" required>
                <div class="cig-form-error-msg">Please enter a valid email address.</div>
              </div>

              <div class="cig-form-group">
                <label class="cig-form-label" for="indIndustryType">Industry Sector *</label>
                <select id="indIndustryType" name="industryType" class="cig-form-control">
                  <option value="Textiles & Weaving">Textiles, Weaving & Processing</option>
                  <option value="Chemicals & Pharma">Chemicals & Pharmaceuticals</option>
                  <option value="Engineering & Auto">Engineering & Auto Ancillaries</option>
                  <option value="Plastic & Packaging">Plastics, Polymer & Packaging</option>
                  <option value="Food & Cold Storage">Food Processing & Cold Storage</option>
                  <option value="Steel & Metallurgy">Steel & Metal Fabrication</option>
                  <option value="Warehouse & Logistics">Warehouse & Logistics Park</option>
                  <option value="Other Manufacturing">Other Manufacturing Industry</option>
                </select>
              </div>

              <div class="cig-form-group" id="group-ind-bill">
                <label class="cig-form-label" for="indMonthlyBill">Approx. Monthly Power Bill (₹) *</label>
                <input type="number" id="indMonthlyBill" name="monthlyBill" class="cig-form-control" placeholder="e.g. 500000" min="25000" required>
                <div class="cig-form-error-msg">Please enter your monthly electricity bill.</div>
              </div>

              <div class="cig-form-group">
                <label class="cig-form-label" for="indContractDemandInput">Contract Demand (kVA / MW)</label>
                <input type="text" id="indContractDemandInput" name="contractDemand" class="cig-form-control" placeholder="e.g. 300 kVA / 1 MW">
              </div>

              <div class="cig-form-group">
                <label class="cig-form-label" for="indSupplyLevel">HT Connection Voltage</label>
                <select id="indSupplyLevel" name="supplyLevel" class="cig-form-control">
                  <option value="11 kV HT Connection">11 kV HT Connection</option>
                  <option value="22 kV HT Connection">22 kV HT Connection</option>
                  <option value="33 kV HT Connection">33 kV HT Connection</option>
                  <option value="LT Three Phase (415V)">LT Three Phase (415V)</option>
                  <option value="Not Sure">Not Sure / Need Survey</option>
                </select>
              </div>

              <div class="cig-form-group">
                <label class="cig-form-label" for="indDiscom">Power DISCOM / Utility</label>
                <select id="indDiscom" name="discom" class="cig-form-control">
                  <option value="DGVCL (South Gujarat)" selected>DGVCL (South Gujarat)</option>
                  <option value="Torrent Power">Torrent Power (Surat/Ahmedabad)</option>
                  <option value="MGVCL (Central Gujarat)">MGVCL (Central Gujarat)</option>
                  <option value="PGVCL (Saurashtra)">PGVCL (Saurashtra)</option>
                  <option value="UGVCL (North Gujarat)">UGVCL (North Gujarat)</option>
                  <option value="Other State DISCOM">Other State DISCOM</option>
                </select>
              </div>

              <div class="cig-form-group">
                <label class="cig-form-label" for="indDgCapacityInput">DG Genset Capacity (kVA) & Diesel Use</label>
                <input type="text" id="indDgCapacityInput" name="dgCapacity" class="cig-form-control" placeholder="e.g. 250 kVA, ~1500 L/mo">
              </div>

              <div class="cig-form-group">
                <label class="cig-form-label" for="indSolarPref">Solar Deployment Preference</label>
                <select id="indSolarPref" name="solarPref" class="cig-form-control">
                  <option value="Factory Shed Rooftop Solar" selected>Factory Shed Rooftop Solar (CAPEX)</option>
                  <option value="Captive Solar Plant">Captive Solar Plant</option>
                  <option value="Green Energy Open Access">Green Energy Open Access</option>
                  <option value="Solar + DG Sync Controller">Solar + DG Sync Controller</option>
                  <option value="Need Technical Recommendation">Need Technical Recommendation</option>
                </select>
              </div>

              <div class="cig-form-group-full">
                <label class="cig-form-label" for="indMessage">Technical Remarks / Shed Details (Optional)</label>
                <textarea id="indMessage" name="message" class="cig-form-control" rows="3" placeholder="Specify roof profile (trapezoidal / standing seam / curved shed), operating shifts, transformer capacity, or specific project milestones..."></textarea>
              </div>

            </div>

            <div style="text-align:center; margin-top:2rem;">
              <button type="submit" class="btn btn-solar btn-lg" id="indSubmitBtn" style="min-width:320px;">
                ⚡ GET INDUSTRIAL SOLAR FEASIBILITY →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- SECTION 11: FINAL CTA & DISCLAIMER -->
    <section class="cig-cta-section">
      <div class="container">
        <h2 class="cig-cta-title">YOUR FACTORY NEEDS POWER EVERY DAY.</h2>
        <p class="cig-cta-text">
          Engineer a high-yield industrial solar system around the way you produce. Protect your factory against rising grid tariffs, manage peak demand, and slash diesel costs with VOLT'S LEGACY.
        </p>
        <div class="cig-hero-actions" style="justify-content:center;">
          <a href="#industrial-financing" class="btn btn-solar btn-lg">CALCULATE SAVINGS →</a>
          <a href="#industrial-lead-form" class="btn btn-secondary btn-lg">REQUEST FEASIBILITY →</a>
          <a href="https://wa.me/919998765059?text=Hello%20VOLTS%20LEGACY,%20I%20want%20to%20discuss%20industrial%20solar%20for%20my%20factory." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            WHATSAPP SOLAR EXPERT →
          </a>
        </div>
      </div>
    </section>

    <!-- Legal Disclaimer -->
    <div class="cig-legal-disclaimer">
      <div class="container">
        <p class="cig-legal-text">
          <strong>Industrial Compliance & Regulatory Notice:</strong> High-tension (HT) power interconnection, transformer synchronization, CEIG approvals, and GERC open-access compliance are executed in strict accordance with CEA (Technical Standards for Connectivity to the Grid) Regulations, GERC regulations, and state transmission utility (GETCO / STU) guidelines. Financial payback, diesel fuel savings, and tax depreciation benefits under Section 32 are engineering projections subject to on-site technical inspection, factory load profile, roof structural capacity, and applicable tariff orders.
        </p>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// Interactive Logic for Industrial Solar Page
// --------------------------------------------------------------------------
window.initSolarForIndustrialFactoriesPage = function() {
  // 1. FAQ Accordion
  const faqList = document.getElementById('indFaqList');
  if (faqList) {
    const items = faqList.querySelectorAll('.sfhs-faq-item');
    items.forEach(item => {
      const btn = item.querySelector('.sfhs-faq-question');
      if (!btn) return;

      btn.onclick = () => {
        const isActive = item.classList.contains('active');
        items.forEach(other => {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.sfhs-faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          const icon = other.querySelector('.faq-icon');
          if (icon) icon.textContent = '+';
        });

        if (!isActive) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
          const icon = item.querySelector('.faq-icon');
          if (icon) icon.textContent = '−';
        }
      };
    });
  }

  // 2. Helper formatters
  function formatCurr(num) {
    return '₹' + Math.round(num).toLocaleString('en-IN');
  }

  function formatLakhsCr(amount) {
    if (Math.abs(amount) >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Crore`;
    }
    if (Math.abs(amount) >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakhs`;
    }
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  }

  // 3. Calculator Elements
  const sliderBill = document.getElementById('indSliderBill');
  const tariffInput = document.getElementById('indTariffInput');
  const shiftsSelect = document.getElementById('indShiftsSelect');
  const daytimeSelect = document.getElementById('indDaytimeRatio');
  const dieselLitresInput = document.getElementById('indDgDieselLitres');
  const roofAreaInput = document.getElementById('indRoofArea');
  const btnAuto = document.getElementById('btnIndModeAuto');
  const btnCustom = document.getElementById('btnIndModeCustom');
  const customWrap = document.getElementById('indCustomKwWrap');
  const customKwInput = document.getElementById('indCustomKwInput');

  // Displays
  const billDisplay = document.getElementById('indBillDisplay');
  const roofDisplay = document.getElementById('indRoofDisplay');

  // Outputs
  const resKw = document.getElementById('indResKw');
  const resPanels = document.getElementById('indResPanels');
  const resAnnualGen = document.getElementById('indResAnnualGen');
  const resGridOffset = document.getElementById('indResGridOffset');
  const resDieselSaved = document.getElementById('indResDieselSaved');
  const resDieselCost = document.getElementById('indResDieselCost');
  const resGrossCost = document.getElementById('indResGrossCost');
  const resTaxShield = document.getElementById('indResTaxShield');
  const resAnnualSavings = document.getElementById('indResAnnualSavings');
  const resPayback = document.getElementById('indResPayback');
  const res25Yr = document.getElementById('indRes25Yr');
  const resCo2 = document.getElementById('indResCo2');

  let currentMode = 'auto';

  function updateIndustrialCalc() {
    const bill = parseFloat(sliderBill ? sliderBill.value : 500000) || 500000;
    const tariff = parseFloat(tariffInput ? tariffInput.value : 8.20) || 8.20;
    const daytimeRatio = parseFloat(daytimeSelect ? daytimeSelect.value : 0.85) || 0.85;
    const monthlyDieselL = parseFloat(dieselLitresInput ? dieselLitresInput.value : 1500) || 0;
    const roofArea = parseFloat(roofAreaInput ? roofAreaInput.value : 25000) || 25000;

    if (billDisplay) billDisplay.textContent = `₹${bill.toLocaleString('en-IN')} / mo`;
    if (roofDisplay) roofDisplay.textContent = `${roofArea.toLocaleString('en-IN')} sq.ft`;

    // Monthly units
    const monthlyUnits = bill / tariff;
    const daytimeUnits = monthlyUnits * daytimeRatio;

    // Sizing: 1 kWp produces ~120 kWh/mo. Roof need ~80 sq.ft/kWp
    const kwByDaytime = Math.round(daytimeUnits / 120);
    const maxKwByRoof = Math.floor(roofArea / 80);

    let kw = 250;
    if (currentMode === 'auto') {
      kw = Math.max(25, Math.min(10000, Math.min(kwByDaytime, maxKwByRoof)));
    } else {
      kw = Math.max(25, Math.min(10000, parseFloat(customKwInput ? customKwInput.value : 250) || 250));
    }

    // Specific yield (1,440 kWh/kWp/year)
    const annualGenKwh = Math.round(kw * 1440);
    const annualGenMwh = (annualGenKwh / 1000).toFixed(1);
    const monthlyGenKwh = Math.round(annualGenKwh / 12);
    const gridOffsetPercent = Math.min(90, Math.round((monthlyGenKwh / Math.max(1, monthlyUnits)) * 100));

    // Turnkey Industrial EPC Cost (~₹46,000/kWp at 250kWp+ scale)
    const grossCost = Math.round(kw * 46000);

    // Section 32 40% depreciation tax shelter (40% * 25.17% = ~10.068%)
    const taxBenefitYear1 = Math.round(grossCost * 0.40 * 0.2517);
    const netInvestment = grossCost - taxBenefitYear1;

    // Grid Energy Savings
    const annualGridSavings = Math.round(annualGenKwh * tariff);

    // DG Diesel displacement (Solar can offset up to 35% of monthly diesel fuel running daytime)
    const dieselSavingsLitresPerYear = Math.round(monthlyDieselL * 12 * 0.35);
    const dieselFuelCostSavings = Math.round(dieselSavingsLitresPerYear * 92); // ₹92/litre diesel

    // Total Savings
    const totalAnnualSavings = annualGridSavings + dieselFuelCostSavings;
    const paybackYears = (netInvestment / Math.max(1, totalAnnualSavings)).toFixed(1);

    // 25-Year Cumulative Benefit (with 4% annual tariff hike)
    const factor25Yr = (Math.pow(1 + 0.04, 25) - 1) / 0.04; // 41.64
    const cum25YrNet = Math.round((totalAnnualSavings * factor25Yr) - netInvestment);

    const co2Tonnes = (annualGenKwh * 0.00082).toFixed(1);
    const panelCount = Math.round((kw * 1000) / 600);

    // Update UI
    if (resKw) resKw.textContent = `${kw} kWp`;
    if (resPanels) resPanels.textContent = `~${panelCount} High-Wattage 600W TopCon Modules`;
    if (resAnnualGen) resAnnualGen.textContent = `~${annualGenMwh} MWh / yr`;
    if (resGridOffset) resGridOffset.textContent = `~${gridOffsetPercent}%`;
    if (resDieselSaved) resDieselSaved.textContent = `~${dieselSavingsLitresPerYear.toLocaleString('en-IN')} Litres / yr`;
    if (resDieselCost) resDieselCost.textContent = `Saves ~${formatCurr(dieselFuelCostSavings)}/yr in fuel (@ ₹92/L)`;
    if (resGrossCost) resGrossCost.textContent = formatCurr(grossCost);
    if (resTaxShield) resTaxShield.textContent = `~${formatCurr(taxBenefitYear1)} Year 1 tax shelter benefit`;
    if (resAnnualSavings) resAnnualSavings.textContent = `${formatCurr(totalAnnualSavings)} / yr`;
    if (resPayback) resPayback.textContent = `Payback: ~${paybackYears} Years (Project IRR: ~${((totalAnnualSavings / netInvestment) * 100 - 1).toFixed(0)}%)`;
    if (res25Yr) res25Yr.textContent = `+${formatLakhsCr(cum25YrNet)}`;
    if (resCo2) resCo2.textContent = `~${co2Tonnes} Tonnes CO₂ Avoided / yr`;

    // Save active state
    window.indActiveCalculation = {
      systemKw: `${kw} kWp`,
      annualGen: `~${annualGenMwh} MWh/yr`,
      grossCost: grossCost,
      netInvestment: netInvestment,
      annualSavings: totalAnnualSavings,
      dieselSaved: dieselSavingsLitresPerYear,
      payback: `${paybackYears} Years`
    };
  }

  // Event Listeners
  if (sliderBill) sliderBill.addEventListener('input', updateIndustrialCalc);
  if (tariffInput) tariffInput.addEventListener('input', updateIndustrialCalc);
  if (shiftsSelect) shiftsSelect.addEventListener('change', updateIndustrialCalc);
  if (daytimeSelect) daytimeSelect.addEventListener('change', updateIndustrialCalc);
  if (dieselLitresInput) dieselLitresInput.addEventListener('input', updateIndustrialCalc);
  if (roofAreaInput) roofAreaInput.addEventListener('input', updateIndustrialCalc);
  if (customKwInput) customKwInput.addEventListener('input', updateIndustrialCalc);

  if (btnAuto && btnCustom) {
    btnAuto.addEventListener('click', () => {
      currentMode = 'auto';
      btnAuto.classList.add('active');
      btnCustom.classList.remove('active');
      if (customWrap) customWrap.style.display = 'none';
      updateIndustrialCalc();
    });

    btnCustom.addEventListener('click', () => {
      currentMode = 'custom';
      btnCustom.classList.add('active');
      btnAuto.classList.remove('active');
      if (customWrap) customWrap.style.display = 'block';
      updateIndustrialCalc();
    });
  }

  // 4. Shift Simulator Buttons
  const shiftBtns = document.querySelectorAll('.cig-btn-shift');
  const svgLoadPath = document.getElementById('svgLoadPath');
  const svgLoadLine = document.getElementById('svgLoadLine');

  shiftBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      shiftBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const shiftNum = btn.getAttribute('data-shift');

      if (svgLoadPath && svgLoadLine) {
        if (shiftNum === '1') {
          // 1 Shift: 8 AM to 5 PM
          svgLoadPath.setAttribute('d', 'M 0 200 L 260 200 Q 280 60 310 55 L 610 55 Q 630 190 660 200 L 900 200 L 900 220 L 0 220 Z');
          svgLoadLine.setAttribute('d', 'M 0 200 L 260 200 Q 280 60 310 55 L 610 55 Q 630 190 660 200 L 900 200');
        } else if (shiftNum === '2') {
          // 2 Shifts: 6 AM to 10 PM
          svgLoadPath.setAttribute('d', 'M 0 190 L 210 190 Q 230 70 280 65 L 750 65 Q 800 180 840 190 L 900 190 L 900 220 L 0 220 Z');
          svgLoadLine.setAttribute('d', 'M 0 190 L 210 190 Q 230 70 280 65 L 750 65 Q 800 180 840 190 L 900 190');
        } else {
          // 3 Shifts: 24 Hours
          svgLoadPath.setAttribute('d', 'M 0 65 L 900 65 L 900 220 L 0 220 Z');
          svgLoadLine.setAttribute('d', 'M 0 65 L 900 65');
        }
      }
    });
  });

  // 5. Industrial Lead Form Submission
  const indForm = document.getElementById('industrialBookingForm');
  if (indForm) {
    indForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const company = (indForm.companyName ? indForm.companyName.value : '').trim();
      const factory = (indForm.factoryName ? indForm.factoryName.value : '').trim();
      const person = (indForm.contactPerson ? indForm.contactPerson.value : '').trim();
      const phone = (indForm.phone ? indForm.phone.value : '').trim();
      const email = (indForm.email ? indForm.email.value : '').trim();
      const indType = indForm.industryType ? indForm.industryType.value : 'Manufacturing';
      const bill = (indForm.monthlyBill ? indForm.monthlyBill.value : '').trim();
      const demand = (indForm.contractDemand ? indForm.contractDemand.value : '').trim();
      const supply = indForm.supplyLevel ? indForm.supplyLevel.value : '11kV HT';
      const discom = indForm.discom ? indForm.discom.value : 'DGVCL';
      const dgInfo = (indForm.dgCapacity ? indForm.dgCapacity.value : '').trim();
      const pref = indForm.solarPref ? indForm.solarPref.value : 'Factory Shed Rooftop Solar';
      const remarks = (indForm.message ? indForm.message.value : '').trim();

      let hasError = false;

      // Validate Company
      if (!company || company.length < 2) {
        document.getElementById('group-ind-company')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-ind-company')?.classList.remove('has-error');
      }

      // Validate Factory
      if (!factory || factory.length < 2) {
        document.getElementById('group-ind-factory')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-ind-factory')?.classList.remove('has-error');
      }

      // Validate Person
      if (!person || person.length < 2) {
        document.getElementById('group-ind-person')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-ind-person')?.classList.remove('has-error');
      }

      // Validate Phone
      const cleanPhone = phone.replace(/\D/g, '');
      if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        document.getElementById('group-ind-phone')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-ind-phone')?.classList.remove('has-error');
      }

      // Validate Email
      if (!email || !email.includes('@')) {
        document.getElementById('group-ind-email')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-ind-email')?.classList.remove('has-error');
      }

      // Validate Bill
      if (!bill || isNaN(bill) || parseFloat(bill) < 25000) {
        document.getElementById('group-ind-bill')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-ind-bill')?.classList.remove('has-error');
      }

      if (hasError) {
        const firstErr = indForm.querySelector('.cig-form-group.has-error input, .cig-form-group.has-error select');
        if (firstErr) firstErr.focus();
        return;
      }

      const submitBtn = document.getElementById('indSubmitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ Submitting Industrial Feasibility Request...';
      }

      const active = window.indActiveCalculation || {};
      const refNumber = 'VLE-IND-' + Math.floor(100000 + Math.random() * 900000);

      // Submit lead to Google Sheets CRM
      let leadSubmission = null;
      if (window.GoogleSheetsLeadManager) {
        leadSubmission = await window.GoogleSheetsLeadManager.submitLead({
          refId: refNumber,
          fullName: `${person} (${company} - ${factory})`,
          mobileNumber: phone,
          email: email,
          city: factory,
          monthlyBill: `₹${Number(bill).toLocaleString('en-IN')}`,
          requiredKw: active.systemKw || '250 kWp',
          recommendedKw: `${active.systemKw || '250 kWp'} Industrial Solar`,
          monthlyGen: active.annualGen ? `${active.annualGen}` : '~360 MWh/yr',
          grossCost: active.grossCost ? `₹${active.grossCost.toLocaleString('en-IN')}` : '₹1,15,00,000',
          subsidy: 'Section 32 Tax Shield (40% Depr)',
          netCost: active.netInvestment ? `₹${active.netInvestment.toLocaleString('en-IN')}` : '₹1,03,42,000',
          customerType: `Industrial (${indType})`,
          systemType: `Industrial Solar (${pref}, ${supply})`,
          message: `Demand: ${demand || 'N/A'}, DISCOM: ${discom}, Supply: ${supply}, DG: ${dgInfo || 'None'}. Remarks: ${remarks || 'None'}`,
          sourcePage: 'Industrial & Factory Solar (/solar-for-industrial-factories)'
        });
      }

      const assignedRef = leadSubmission && leadSubmission.refId ? leadSubmission.refId : refNumber;
      const waMsg = encodeURIComponent(`Hello VOLTS LEGACY Energy Solutions, I have submitted an Industrial Solar Feasibility Request (Ref #${assignedRef}). Company: ${company}, Factory: ${factory}, Contact: ${person} (+91 ${phone}), Monthly Bill: ₹${Number(bill).toLocaleString('en-IN')}/mo, Sector: ${indType}, Solar Size: ${active.systemKw || '250 kWp'}. Please arrange an HT technical site audit.`);

      const modalHtml = `
        <div style="text-align: center; padding: 1rem 0;">
          <div style="width: 68px; height: 68px; border-radius: 50%; background: #dcfce7; color: #16a34a; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; font-size: 2.2rem; box-shadow: 0 4px 14px rgba(22,163,74,0.25);">
            ✓
          </div>
          <h3 style="font-size: 1.6rem; color: #071530; margin-bottom: 0.5rem; font-family: var(--font-heading);">Industrial Feasibility Request Received!</h3>
          <p style="color: #475569; font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.5;">
            Thank you, <strong>${person}</strong>. Your industrial solar enquiry for <strong>${company}</strong> (${factory}) has been recorded. Our Senior Industrial Solar Project Engineer will connect on <strong>+91 ${phone}</strong> to coordinate a detailed electrical & structural site audit.
          </p>

          <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-align: left; margin-bottom: 1.5rem; font-size: 0.9rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; padding-bottom: 0.5rem; border-bottom: 1px dashed #cbd5e1;">
              <span style="color: #64748b;">Enquiry Reference:</span>
              <strong style="color: #2563eb; font-family: monospace; font-size: 1.05rem;">#${assignedRef}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">Company & Plant:</span>
              <strong>${company} (${factory})</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">Sector & Connection:</span>
              <strong>${indType} • ${supply}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">Recommended Solar:</span>
              <strong style="color: #0284c7;">${active.systemKw || '250 kWp'}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">Est. Annual Savings:</span>
              <strong style="color: #16a34a;">${active.annualSavings ? formatCurr(active.annualSavings) : '₹35,32,000'} / yr</strong>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: #64748b;">Monthly Power Bill:</span>
              <strong>₹${Number(bill).toLocaleString('en-IN')}</strong>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <a href="https://wa.me/919998765059?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-solar btn-lg" style="width: 100%; justify-content: center; font-weight: 800;">
              💬 Connect Instantly on WhatsApp →
            </a>
            <button class="btn btn-secondary" style="width: 100%; justify-content: center;" onclick="window.appModal.close()">
              Close / Done
            </button>
          </div>
        </div>
      `;

      if (window.appModal) {
        window.appModal.open(modalHtml);
      }

      indForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '⚡ GET INDUSTRIAL SOLAR FEASIBILITY →';
      }
    });
  }

  // Initial Run
  updateIndustrialCalc();

  if (window.initScrollAnimations) {
    window.initScrollAnimations();
  }
};
