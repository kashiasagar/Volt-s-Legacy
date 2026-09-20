/* ==========================================================================
   VOLT'S LEGACY ENERGY SOLUTIONS
   Page 03: Ground Mount Solar
   URL: /solar-ground-mount
   ========================================================================== */

function renderSolarGroundMountView() {
  document.title = "Ground Mount Solar Projects | VOLT'S LEGACY";

  return `
    <!-- SECTION 01: HERO -->
    <section class="cig-hero-section">
      <div class="container container-wide">
        <div class="cig-hero-grid">
          
          <!-- Left Column -->
          <div class="cig-hero-content animate-fade-up">
            <div class="cig-badge gold">
              <span>☀️</span>
              <span>GROUND MOUNT & UTILITY SOLAR</span>
            </div>
            <h1 class="cig-hero-title">
              ENGINEERED FOR LAND.<br>
              <span class="highlight-gold">BUILT FOR MEGAWATTS.</span>
            </h1>
            <p class="cig-hero-text">
              Utility-scale, captive, group captive and open-access solar power plants engineered around land topography, solar resource, grid connectivity, evacuation infrastructure and long-term project economics.
            </p>
            <p class="cig-hero-subtext">
              From 500 kW captive industrial ground plants to multi-megawatt IPP solar farms — we engineer turnkey power plants from geotechnical pull-out tests and 33kV/66kV switchyards to GETCO grid evacuation.
            </p>
            <div class="cig-hero-actions">
              <a href="#ground-calculator" class="btn btn-solar btn-lg">
                ASSESS MY LAND →
              </a>
              <a href="#ground-lead-form" class="btn btn-secondary btn-lg">
                REQUEST GROUND MOUNT FEASIBILITY
              </a>
            </div>
            <div style="font-size:0.8rem; font-weight:700; color:#94a3b8; letter-spacing:0.5px; text-transform:uppercase;">
              CAPTIVE • GROUP CAPTIVE • GREEN ENERGY OPEN ACCESS • UTILITY PPA • 33kV/66kV GETCO EVACUATION
            </div>
          </div>

          <!-- Right Column: Hero Visual & Energy Flow -->
          <div class="cig-hero-media animate-fade-up" style="animation-delay:0.12s;">
            <div class="cig-image-card">
              <img src="assets/solar-groundmount-hero.jpg" alt="Multi-Megawatt Utility Scale Ground Mount Solar Farm in Gujarat by VOLT'S LEGACY" class="cig-hero-img" loading="eager">
              
              <!-- Floating Badges -->
              <div class="cig-floating-badge badge-top-left">
                <span class="dot gold"></span>
                <span>MEGAWATT SCALE EPC</span>
              </div>
              <div class="cig-floating-badge badge-mid-right">
                <span class="dot blue"></span>
                <span>SINGLE-AXIS TRACKERS & FIXED TILT</span>
              </div>
              <div class="cig-floating-badge badge-bottom">
                <span class="dot green"></span>
                <span>GETCO / STU SUBSTATION EVACUATION</span>
              </div>
            </div>

            <!-- Ground Mount Flow Diagram -->
            <div class="cig-hero-flow-bar" style="flex-direction:column; gap:0.6rem;">
              <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                <div class="cig-flow-step"><span class="icon">☀️</span><span class="text">SOLAR FIELD</span></div>
                <span class="cig-flow-sep">→</span>
                <div class="cig-flow-step"><span class="icon">🔌</span><span class="text">INVERTERS</span></div>
                <span class="cig-flow-sep">→</span>
                <div class="cig-flow-step highlight"><span class="icon">⚡</span><span class="text">33kV XMER</span></div>
                <span class="cig-flow-sep">→</span>
                <div class="cig-flow-step highlight"><span class="icon">🏢</span><span class="text">POOLING YARD</span></div>
                <span class="cig-flow-sep">→</span>
                <div class="cig-flow-step green"><span class="icon">🌐</span><span class="text">GETCO GRID</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Hero Trust Bar Items -->
        <div class="cig-trust-bar animate-fade-up" style="animation-delay:0.2s;">
          <div class="cig-trust-item">
            <span class="cig-trust-check">✓</span>
            <div>
              <strong style="display:block; font-size:0.92rem; color:#ffffff;">LAND FEASIBILITY & DUE DILIGENCE</strong>
              <span style="font-size:0.8rem; color:#94a3b8;">Revenue records, NA & topography</span>
            </div>
          </div>
          <div class="cig-trust-item">
            <span class="cig-trust-check">✓</span>
            <div>
              <strong style="display:block; font-size:0.92rem; color:#ffffff;">TRANSMISSION & EVACUATION EPC</strong>
              <span style="font-size:0.8rem; color:#94a3b8;">11kV / 33kV / 66kV Bay & Transmission</span>
            </div>
          </div>
          <div class="cig-trust-item">
            <span class="cig-trust-check">✓</span>
            <div>
              <strong style="display:block; font-size:0.92rem; color:#ffffff;">SINGLE-AXIS TRACKER OPTION</strong>
              <span style="font-size:0.8rem; color:#94a3b8;">+18% to +22% Higher Generation Yield</span>
            </div>
          </div>
          <div class="cig-trust-item">
            <span class="cig-trust-check">✓</span>
            <div>
              <strong style="display:block; font-size:0.92rem; color:#ffffff;">GERC OPEN ACCESS LIAISON</strong>
              <span style="font-size:0.8rem; color:#94a3b8;">GETCO, SLDC & DISCOM Wheeling Approvals</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 02: 5 GROUND MOUNT PROJECT TYPES -->
    <section class="cig-section cig-bg-light">
      <div class="container">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Utility & Enterprise Scale Models</span>
          <h2 class="cig-section-title">GROUND MOUNT SOLAR PROJECT TYPES</h2>
          <p class="cig-section-subtitle">
            Deploy solar on private land, agricultural plots with conversion, or dedicated energy parks under central and state regulatory frameworks.
          </p>
        </div>

        <div class="cig-cards-grid-5 animate-fade-up">
          <div class="cig-feature-card">
            <div class="card-icon-box">🏭</div>
            <h3 class="card-title">01. CAPTIVE SOLAR</h3>
            <p class="card-desc">100% self-owned ground solar power plant wheeling clean electricity directly to your industrial manufacturing unit or corporate campus via GETCO grid, legally exempt from Cross-Subsidy Surcharges (CSS).</p>
            <span class="card-tag">100% Self-Owned</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box">👥</div>
            <h3 class="card-title">02. GROUP CAPTIVE</h3>
            <p class="card-desc">Structured Special Purpose Vehicle (SPV) where qualifying commercial or industrial consumers hold ≥26% equity and consume ≥51% of generated power, unlocking massive CSS waiver cost savings.</p>
            <span class="card-tag">26% Equity / 51% Consumption</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box">🌐</div>
            <h3 class="card-title">03. GREEN OPEN ACCESS</h3>
            <p class="card-desc">Procure clean solar electricity directly from third-party utility solar parks across the state transmission grid under the latest central and GERC Green Energy Open Access regulatory frameworks.</p>
            <span class="card-tag">Off-Site Supply</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box">📜</div>
            <h3 class="card-title">04. UTILITY PPA PROJECT</h3>
            <p class="card-desc">Large utility-scale solar farm developments bidding into state and national auctions (GUVNL, SECI, NTPC) under bankable long-term 25-year fixed Power Purchase Agreements with guaranteed sovereign off-take.</p>
            <span class="card-tag">25-Year Long-Term PPA</span>
          </div>

          <div class="cig-feature-card">
            <div class="card-icon-box">🏛️</div>
            <h3 class="card-title">05. DECENTRALISED SCHEMES</h3>
            <p class="card-desc">Decentralized 500 kW to 2 MW grid-connected ground solar installations on rural or agricultural land parcels connected directly to nearby 66/11kV DISCOM rural substations for localized power feeding.</p>
            <span class="card-tag">Rural / Decentralized</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 03: PM-KUSUM REGULATORY DISCLOSURE -->
    <section class="cig-section cig-bg-white">
      <div class="container">
        <div class="cig-regulatory-banner gold animate-fade-up">
          <div class="cig-reg-title">
            <span>🏛️</span>
            <span>PM-KUSUM / DECENTRALISED GROUND-MOUNT SOLAR STATUS DISCLOSURE</span>
          </div>
          <p class="cig-reg-text">
            <strong>Important Current-Status Notice:</strong> The Ministry of New and Renewable Energy (MNRE) guidelines state the PM-KUSUM scheme period through <strong>31.03.2026</strong>. PM-KUSUM eligibility and ongoing scheme continuation are strictly subject to the latest official MNRE extension notifications and active state/DISCOM implementation tenders. Current availability must be independently verified before making commercial project commitments.
          </p>
          <p class="cig-reg-text" style="margin-top:0.75rem;">
            When active under Component-A, eligible participants (farmers, cooperatives, Panchayats, FPOs) can set up <strong>500 kW to 2 MW</strong> decentralized grid-connected solar plants on barren or agricultural land within 5 km of a 33/11kV or 66/11kV DISCOM substation. Performance-Based Incentives (PBI) under the scheme are associated with DISCOM procurement frameworks and are not generic consumer subsidies.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 04: GROUND MOUNT LAND & PROJECT CALCULATOR -->
    <section class="cig-section cig-bg-light" id="ground-calculator">
      <div class="container container-wide">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Megawatt Land Sizing Engine</span>
          <h2 class="cig-section-title">HOW MUCH SOLAR CAN YOUR LAND SUPPORT?</h2>
          <p class="cig-section-subtitle">
            Input your land acreage, mounting structure type, and substation proximity to calculate indicative MW capacity, generation yield, capital outlay, and revenue projections.
          </p>
        </div>

        <div class="cig-calc-container animate-fade-up">
          
          <!-- Top Ribbon -->
          <div class="cig-calc-ribbon" style="background:linear-gradient(90deg, #071530 0%, #1e3a8a 100%);">
            <span>☀️ <strong>Land-to-Megawatt Sizing Model:</strong> Calibrated with standard TopCon bifacial modules, fixed-tilt vs single-axis tracker mechanics, and GETCO substation evacuation.</span>
            <span style="font-size:0.8rem; color:#93c5fd;">*Planning Benchmark</span>
          </div>

          <div class="cig-calc-grid-layout">
            
            <!-- LEFT CONSOLE: INPUTS -->
            <div class="cig-calc-inputs-col">
              <div class="cig-calc-col-heading">
                <span>Land & Project Parameters</span>
                <span style="font-size:0.8rem; color:#64748b;">Step 1 of 2</span>
              </div>

              <!-- Input 1: Land Area (Acres) -->
              <div class="cig-input-group">
                <div class="cig-label-row">
                  <label for="gmSliderLand">Available Land Area (Acres)</label>
                  <div class="cig-val-badge green" id="gmLandDisplay">20 Acres (~5.0 MWp)</div>
                </div>
                <input type="range" class="cig-range-slider" id="gmSliderLand" min="2" max="250" step="1" value="20">
                <div class="cig-slider-ticks">
                  <span>2 Acres (~0.5 MW)</span>
                  <span>50 Acres (~12 MW)</span>
                  <span>100 Acres (~25 MW)</span>
                  <span>250+ Acres (60+ MW)</span>
                </div>
              </div>

              <!-- Input 2: Mounting Technology & Module Wattage -->
              <div class="cig-input-row-2">
                <div class="cig-subgroup">
                  <label for="gmMountingTech">Mounting Technology</label>
                  <select id="gmMountingTech" class="form-control">
                    <option value="fixed" selected>Fixed Tilt (~4 Acres/MW, Standard)</option>
                    <option value="tracker">Single-Axis Tracker (~4.5 Acres/MW, +20% Yield)</option>
                  </select>
                </div>
                <div class="cig-subgroup">
                  <label for="gmModuleWattage">Module Wattage</label>
                  <select id="gmModuleWattage" class="form-control">
                    <option value="585">585W TopCon Bifacial</option>
                    <option value="600" selected>600W TopCon Bifacial Tier-1</option>
                    <option value="620">620W High-Efficiency Dual Glass</option>
                  </select>
                </div>
              </div>

              <!-- Input 3: Substation Distance & Evacuation Voltage -->
              <div class="cig-input-row-2">
                <div class="cig-subgroup">
                  <label for="gmSubstationDist">Nearest Substation Distance (km)</label>
                  <input type="number" id="gmSubstationDist" class="form-control" value="3.5" min="0.5" max="30" step="0.5">
                </div>
                <div class="cig-subgroup">
                  <label for="gmEvacuationVolt">Grid Evacuation Voltage</label>
                  <select id="gmEvacuationVolt" class="form-control">
                    <option value="11">11 kV (Up to 2–3 MW)</option>
                    <option value="33" selected>33 kV (3 MW to 15 MW)</option>
                    <option value="66">66 kV (15 MW+ GETCO)</option>
                  </select>
                </div>
              </div>

              <!-- Input 4: Expected Power Sale / Value Tariff -->
              <div class="cig-input-row-2">
                <div class="cig-subgroup">
                  <label for="gmPowerTariff">Expected Power Tariff / PPA (₹/kWh)</label>
                  <input type="number" id="gmPowerTariff" class="form-control" value="4.20" min="2.80" max="9.00" step="0.1">
                </div>
                <div class="cig-subgroup">
                  <label for="gmBusinessModel">Project Business Model</label>
                  <select id="gmBusinessModel" class="form-control">
                    <option value="captive" selected>Captive Industrial Wheeling</option>
                    <option value="group_captive">Group Captive (26% Equity)</option>
                    <option value="open_access">Green Energy Open Access</option>
                    <option value="utility_ppa">Utility PPA / GUVNL</option>
                  </select>
                </div>
              </div>

              <!-- Land Reference Notice -->
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.85rem; font-size:0.76rem; color:#64748b; line-height:1.5;">
                📌 <strong>Land Benchmark Reference:</strong> Government planning information cites an average indicative benchmark of approximately <strong>4 acres per MW</strong> for solar power projects. Actual land requirement varies with topography, module efficiency, row pitch/spacing, trackers, setbacks, internal roads, and transmission corridors.
              </div>
            </div>

            <!-- RIGHT CONSOLE: 8 MEGAWATT OUTPUTS -->
            <div class="cig-calc-results-col">
              <div class="cig-calc-col-heading">
                <span>Indicative Project Sizing & Financials</span>
                <span class="cig-val-badge green">Utility Model</span>
              </div>

              <div class="cig-metrics-grid-4x2">
                
                <!-- 01: Solar Capacity MWp -->
                <div class="cig-metric-box highlight-primary">
                  <div class="metric-val blue" id="gmResCapacity">5.00 MWp</div>
                  <div class="metric-lbl">Indicative Solar Plant Capacity</div>
                  <div class="metric-sub" id="gmResAcCapacity">AC Grid Export: ~4.00 MW (DC/AC: 1.25)</div>
                </div>

                <!-- 02: Annual Energy Generation -->
                <div class="cig-metric-box">
                  <div class="metric-val" id="gmResAnnualGen">~7.50 Million Units</div>
                  <div class="metric-lbl">Est. Annual Generation (GWh)</div>
                  <div class="metric-sub" id="gmResYield">Specific Yield: ~1,500 kWh/kWp/yr</div>
                </div>

                <!-- 03: Turnkey EPC CAPEX -->
                <div class="cig-metric-box">
                  <div class="metric-val" id="gmResCapex">₹20.50 Crore</div>
                  <div class="metric-lbl">Turnkey Plant CAPEX (~₹4.1 Cr/MW)</div>
                  <div class="metric-sub">PV modules, inverters, structures & civil</div>
                </div>

                <!-- 04: Evacuation Line & Bay CAPEX -->
                <div class="cig-metric-box">
                  <div class="metric-val" id="gmResEvacCost">~₹1.05 Crore</div>
                  <div class="metric-lbl">Substation Bay & Evacuation Line</div>
                  <div class="metric-sub" id="gmResEvacSub">~3.5 km 33kV Dedicated Line</div>
                </div>

                <!-- 05: Annual Project Revenue / Value -->
                <div class="cig-metric-box highlight-green">
                  <div class="metric-val green" id="gmResAnnualRev">₹3.15 Crore / yr</div>
                  <div class="metric-lbl">Annual Energy Value / Revenue</div>
                  <div class="metric-sub">@ ₹4.20/unit captive/PPA tariff</div>
                </div>

                <!-- 06: Project Payback & IRR -->
                <div class="cig-metric-box highlight-gold">
                  <div class="metric-val gold" id="gmResPayback">~4.8 Years</div>
                  <div class="metric-lbl">Estimated Project Payback</div>
                  <div class="metric-sub" id="gmResIrr">Project IRR: ~19.5% • Equity IRR: ~23.8%</div>
                </div>

                <!-- 07: 25-Year Cumulative EBITDA -->
                <div class="cig-metric-box highlight-green">
                  <div class="metric-val green" id="gmRes25Yr">₹68.5 Crore+</div>
                  <div class="metric-lbl">25-Year Project EBITDA</div>
                  <div class="metric-sub">Net after O&M, insurance & degradation</div>
                </div>

                <!-- 08: Lifetime Carbon Offset -->
                <div class="cig-metric-box">
                  <div class="metric-val blue" id="gmResCo2">~6,150 Tonnes / yr</div>
                  <div class="metric-lbl">Annual CO₂ Emissions Avoided</div>
                  <div class="metric-sub">~1,53,750 Tonnes over 25 years</div>
                </div>

              </div>

              <!-- Action Bar -->
              <div style="background:#f1f5f9; border-radius:12px; padding:1rem 1.25rem; display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; flex-wrap:wrap; gap:0.75rem;">
                <div>
                  <span style="font-size:0.85rem; color:#475569; font-weight:700;">LAND UTILIZATION EFFICIENCY:</span>
                  <strong style="color:#0284c7; margin-left:0.4rem;" id="gmResLandDensity">~4.00 Acres per MW (Fixed Tilt)</strong>
                </div>
                <a href="#ground-lead-form" class="btn btn-solar btn-sm">REQUEST LAND FEASIBILITY REPORT →</a>
              </div>

              <div style="font-size:0.74rem; color:#64748b; margin-top:0.75rem; line-height:1.5;">
                *All projections are indicative financial and technical simulations. Actual land sizing, evacuation costs, bay allocation at GETCO substation, wheeling/banking charges, and project returns depend on detailed topographic drone survey, soil geotechnical testing, SLDC permissions, and GERC open-access orders.
              </div>
            </div>

          </div>

          <!-- 4 FINANCIAL MODELS COMPARISON CARDS -->
          <div class="cig-compare-grid-4 animate-fade-up">
            
            <div class="cig-compare-card">
              <div class="cig-compare-header">
                <span class="cig-compare-tag">100% OWNED</span>
                <h4 class="cig-compare-title">01. Captive Plant</h4>
              </div>
              <div style="font-size:0.85rem; color:#16a34a; font-weight:700; margin-bottom:0.75rem;">Zero CSS / AS Surcharges</div>
              <ul class="cig-compare-features">
                <li><span class="chk">✓</span> 100% Equity held by consuming company</li>
                <li><span class="chk">✓</span> Full Section 32 40% tax depreciation</li>
                <li><span class="chk">✓</span> Power wheeled to factory via GETCO grid</li>
                <li><span class="chk">✓</span> Subject only to wheeling & banking charges</li>
              </ul>
            </div>

            <div class="cig-compare-card">
              <div class="cig-compare-header">
                <span class="cig-compare-tag">SPV STRUCTURE</span>
                <h4 class="cig-compare-title">02. Group Captive</h4>
              </div>
              <div style="font-size:0.85rem; color:#2563eb; font-weight:700; margin-bottom:0.75rem;">Shared Capital Model</div>
              <ul class="cig-compare-features">
                <li><span class="chk">✓</span> Consumer holds ≥26% equity in project SPV</li>
                <li><span class="chk">✓</span> Consumes ≥51% of generated power</li>
                <li><span class="chk">✓</span> Exempt from Cross-Subsidy Surcharge (CSS)</li>
                <li><span class="chk">✓</span> Lower upfront equity requirement</li>
              </ul>
            </div>

            <div class="cig-compare-card">
              <div class="cig-compare-header">
                <span class="cig-compare-tag">THIRD-PARTY SUPPLY</span>
                <h4 class="cig-compare-title">03. Green Open Access</h4>
              </div>
              <div style="font-size:0.85rem; color:#d97706; font-weight:700; margin-bottom:0.75rem;">Contractual PPA</div>
              <ul class="cig-compare-features">
                <li><span class="chk">✓</span> Power sold to third-party C&I consumers</li>
                <li><span class="chk">✓</span> Subject to applicable CSS, AS & wheeling</li>
                <li><span class="chk">✓</span> 100 kW general central threshold</li>
                <li><span class="chk">✓</span> Governed by GERC open-access framework</li>
              </ul>
            </div>

            <div class="cig-compare-card">
              <div class="cig-compare-header">
                <span class="cig-compare-tag">UTILITY / BIDDING</span>
                <h4 class="cig-compare-title">04. Utility PPA / GUVNL</h4>
              </div>
              <div style="font-size:0.85rem; color:#0f172a; font-weight:700; margin-bottom:0.75rem;">State Grid Sale</div>
              <ul class="cig-compare-features">
                <li><span class="chk">✓</span> Long-term 25-year fixed tariff PPA</li>
                <li><span class="chk">✓</span> Power evacuated directly to state grid</li>
                <li><span class="chk">✓</span> Zero marketing or counterparty risk</li>
                <li><span class="chk">✓</span> Bankable cash flow with sovereign ratings</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 05: 9-STEP ENGINEERING JOURNEY & 17-POINT LAND DUE DILIGENCE -->
    <section class="cig-section cig-bg-white">
      <div class="container">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">End-to-End Development Lifecycle</span>
          <h2 class="cig-section-title">THE 9-STEP GROUND MOUNT ENGINEERING JOURNEY</h2>
          <p class="cig-section-subtitle">
            From preliminary land screening and 7/12 revenue records to 33kV switchyard construction, GETCO grid synchronization, and 25-year SCADA O&M.
          </p>
        </div>

        <!-- 9 Step Process -->
        <div class="cig-process-grid-6 animate-fade-up">
          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 01</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Phase 01</span>
            </div>
            <h3 class="cig-process-title">Land Screening & 7/12 Title</h3>
            <p class="cig-process-desc">Verification of clean land title ownership, 30-year encumbrance certificates, 7/12 & 8A revenue records, and non-agricultural (NA) conversion feasibility.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>7/12 & 8A Title Search</span></li>
              <li><span class="chk">✓</span><span>NA Conversion Feasibility</span></li>
            </ul>
          </div>

          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 02</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Phase 01</span>
            </div>
            <h3 class="cig-process-title">Solar Resource & Met Data</h3>
            <p class="cig-process-desc">Comprehensive satellite GHI/DNI solar irradiance evaluation, ambient temperature profiling, and bankable P50/P90 generation yield simulations.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>Satellite GHI/DNI Analysis</span></li>
              <li><span class="chk">✓</span><span>Bankable P50/P90 Yield Model</span></li>
            </ul>
          </div>

          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 03</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Phase 02</span>
            </div>
            <h3 class="cig-process-title">Topographic & Drone Survey</h3>
            <p class="cig-process-desc">Centimeter-accurate drone LiDAR contour mapping, natural watershed hydrology analysis, 50-year flood plain verification, and boundary fencing plotting.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>Drone LiDAR Contour Mapping</span></li>
              <li><span class="chk">✓</span><span>Hydrology & Flood Study</span></li>
            </ul>
          </div>

          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 04</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Phase 02</span>
            </div>
            <h3 class="cig-process-title">Geotechnical Pull-Out Testing</h3>
            <p class="cig-process-desc">On-site soil electrical resistivity, chemical corrosivity profiling, and ramming pile pull-out testing to engineer stable pile foundation depths.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>Ramming Pile Pull-Out Tests</span></li>
              <li><span class="chk">✓</span><span>Soil Resistivity Profiling</span></li>
            </ul>
          </div>

          <div class="cig-process-card gold-step">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 05</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Phase 03</span>
            </div>
            <h3 class="cig-process-title">CAD Layout & Pitch Engineering</h3>
            <p class="cig-process-desc">Optimized row-to-row spacing, inter-row shading elimination, tracker angle optimization, and centralized inverter station power-block layout.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>Inter-Row Pitch Optimization</span></li>
              <li><span class="chk">✓</span><span>Central Power-Block Design</span></li>
            </ul>
          </div>

          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 06</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Phase 03</span>
            </div>
            <h3 class="cig-process-title">Grid Evacuation & Bay Design</h3>
            <p class="cig-process-desc">Overhead transmission line route survey, Right of Way (ROW) securing, GETCO substation bay allocation, and SLDC connectivity approvals.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>33kV/66kV Transmission Route</span></li>
              <li><span class="chk">✓</span><span>GETCO Substation Bay Allotment</span></li>
            </ul>
          </div>

          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 07</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Phase 04</span>
            </div>
            <h3 class="cig-process-title">Statutory Approvals & CEIG</h3>
            <p class="cig-process-desc">Pollution Control Board NOC, forest/waterway clearances, GERC open-access registration, and Chief Electrical Inspector to Government (CEIG) approvals.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>CEIG Safety Sanctions</span></li>
              <li><span class="chk">✓</span><span>GERC Open Access Filing</span></li>
            </ul>
          </div>

          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 08</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Phase 05</span>
            </div>
            <h3 class="cig-process-title">Turnkey EPC Construction</h3>
            <p class="cig-process-desc">Pile driving, hot-dip galvanized mounting structures, Tier-1 TopCon bifacial modules, DC trenching, central inverter stations, and 33kV switchyards.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>Utility-Scale Civil & Piling</span></li>
              <li><span class="chk">✓</span><span>33kV/66kV Switchyard EPC</span></li>
            </ul>
          </div>

          <div class="cig-process-card">
            <div class="cig-process-top">
              <span class="cig-process-step-num">STEP 09</span>
              <span style="font-size:0.78rem; color:#64748b; font-weight:700;">Ongoing</span>
            </div>
            <h3 class="cig-process-title">Grid Sync & 25-Yr SCADA O&M</h3>
            <p class="cig-process-desc">Transformer charging, commercial operation date (COD) declaration, robotic cleaning integration, and 24/7 IoT SCADA weather telemetry.</p>
            <ul class="cig-process-checks">
              <li><span class="chk">✓</span><span>GETCO Grid Synchronization</span></li>
              <li><span class="chk">✓</span><span>25-Year IoT SCADA O&M</span></li>
            </ul>
          </div>
        </div>

        <!-- 17-Point Land Due Diligence Checklist -->
        <div style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:16px; padding:2rem; margin-top:3rem;" class="animate-fade-up">
          <h3 style="font-family:var(--font-heading); font-size:1.3rem; color:#071530; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
            <span>📋</span>
            <span>17-POINT LAND DUE DILIGENCE & PERMITTING CHECKLIST</span>
          </h3>
          <div class="cig-checks-grid" style="grid-template-columns:repeat(3, 1fr);">
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 1. Clean Title Search & Ownership Verification</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 2. 7/12 & 8A Land Revenue Records</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 3. Encumbrance Certificate (30-Year Search)</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 4. Non-Agricultural (NA) Permission Status</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 5. Forest & Wildlife Distance Verification</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 6. Coastal Regulation Zone (CRZ) Check</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 7. 50-Year Flood Plain & Hydrology Study</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 8. Direct All-Weather Road Access & Width</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 9. Ground Water Availability for Module Washing</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 10. Nearest GETCO Substation Distance & Capacity</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 11. Transmission Line Right of Way (ROW)</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 12. Soil Geotechnical Load Bearing & Resistivity</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 13. High-Wind Speed Cyclone Zone Assessment</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 14. GERC & GETCO Connectivity Feasibility</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 15. CEIG Electrical Safety Compliance</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 16. Local Panchayat / Taluka Clearances</div>
            <div class="cig-check-item" style="color:#0f172a; background:#ffffff;"><span class="chk">✓</span> 17. Security Fencing & Perimeter Protection</div>
          </div>
          <p style="font-size:0.75rem; color:#64748b; margin-top:1rem; margin-bottom:0;">
            *Due diligence requirements vary by state revenue laws and local town planning rules. Final legal verification is conducted through certified revenue advocates and geotechnical testing laboratories.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 06: GROUND MOUNT ELECTRICAL ARCHITECTURE & SWITCHYARD -->
    <section class="cig-section cig-bg-dark">
      <div class="container container-wide">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Transmission & Substation Architecture</span>
          <h2 class="cig-section-title">UTILITY ELECTRICAL EVACUATION (33kV / 66kV)</h2>
          <p class="cig-section-subtitle">
            Engineered with central power conversion, 33kV/66kV step-up pooling substations, lightning masts, SCADA weather stations, and dedicated GETCO transmission feeder bays.
          </p>
        </div>

        <!-- SLD Flow -->
        <div class="cig-sld-flow animate-fade-up">
          <div class="cig-sld-node">
            <div class="node-icon" style="color:#0284c7;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            </div>
            <div class="node-title">SOLAR ARRAYS</div>
            <div class="node-sub">Bifacial String Rows</div>
          </div>

          <span class="cig-sld-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>

          <div class="cig-sld-node">
            <div class="node-icon" style="color:#38bdf8;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15h10M7 9h2M11 9h6"/></svg>
            </div>
            <div class="node-title">STRING / CENTRAL INVERTERS</div>
            <div class="node-sub">800V AC Generation</div>
          </div>

          <span class="cig-sld-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>

          <div class="cig-sld-node highlight">
            <div class="node-icon" style="color:#f59e0b;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div class="node-title">STEP-UP TRANSFORMER</div>
            <div class="node-sub">0.8kV to 33kV Oil-Cooled</div>
          </div>

          <span class="cig-sld-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>

          <div class="cig-sld-node highlight">
            <div class="node-icon" style="color:#10b981;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
            </div>
            <div class="node-title">33kV / 66kV SWITCHYARD</div>
            <div class="node-sub">VCB, Isolators, CT/PT & Relay</div>
          </div>

          <span class="cig-sld-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>

          <div class="cig-sld-node highlight">
            <div class="node-icon" style="color:#f97316;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2l4 8H8l4-8zM12 10v12M7 16l5-3 5 3M5 22h14"/></svg>
            </div>
            <div class="node-title">TRANSMISSION LINE</div>
            <div class="node-sub">Dedicated Overhead Line</div>
          </div>

          <span class="cig-sld-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>

          <div class="cig-sld-node load-node">
            <div class="node-icon" style="color:#6366f1;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div class="node-title">GETCO SUBSTATION</div>
            <div class="node-sub">Utility Grid Injection / SLDC</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 07: 16 GROUND MOUNT FAQS -->
    <section class="cig-section cig-bg-light" id="ground-faq">
      <div class="container" style="max-width:960px;">
        <div class="cig-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Frequently Asked Questions</span>
          <h2 class="cig-section-title">GROUND MOUNT SOLAR QUESTIONS ANSWERED</h2>
          <p class="cig-section-subtitle">
            Essential technical, land, and regulatory insights for landowners, industrial investors, and utility developers.
          </p>
        </div>

        <div class="sfhs-faq-accordion animate-fade-up" id="gmFaqList">
          
          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>1. How many acres of land are required to set up a 1 MW solar plant?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>With modern 600W+ high-efficiency TopCon bifacial modules, a 1 MW fixed-tilt ground solar plant requires approximately 3.8 to 4.2 acres of contiguous land. Single-axis tracker systems require approximately 4.5 to 5.0 acres per MW due to wider row spacing to avoid inter-row shading.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>2. Can a solar power plant be installed on private agricultural land?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Yes, provided the land obtains Non-Agricultural (NA) permission or solar project conversion as per the respective state revenue policy. In Gujarat, solar projects benefit from streamlined land conversion procedures under Gujarat Renewable Energy Policies.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>3. What land documents are required for initial feasibility?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Initial feasibility requires Land 7/12 & 8A revenue records, village map (naksha) showing survey numbers, land ownership title deeds, GPS coordinates/KML boundary file, and distance to the nearest GETCO/DISCOM substation.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>4. What is the nearest-substation distance requirement?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Ideally, the solar plant site should be within 1 km to 5 km of an eligible 66/11kV or 66/33kV GETCO substation. Shorter transmission lines lower evacuation line construction CAPEX, reduce transmission power loss, and minimize Right of Way (ROW) complexities.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>5. What is Captive Solar under the Electricity Act 2003?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>A captive solar power plant is 100% constructed and owned by a commercial/industrial consumer to supply power to its own manufacturing units. Captive power is legally exempt from Cross-Subsidy Surcharge (CSS) and Additional Surcharge (AS).</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>6. What is Group Captive and what are the 26/51 rules?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>A group captive structure allows multiple industrial consumers to form an SPV where the captive users collectively hold at least 26% equity and consume at least 51% of the annual generated electricity in proportion to their shareholding, qualifying for 100% Cross-Subsidy Surcharge exemption.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>7. What is Green Energy Open Access (GEOA)?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Green Energy Open Access allows consumers with sanctioned load of 100 kW or above (and captive consumers with no minimum limit) to procure solar power from an independent developer across the state grid under GERC regulations.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>8. What is a Power Purchase Agreement (PPA)?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>A PPA is a long-term contract (typically 15 to 25 years) between the solar power producer and a power off-taker (either a private industrial consumer or a state utility like GUVNL) defining the energy tariff, minimum off-take obligations, and settlement terms.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>9. What is PM-KUSUM Component-A?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Component-A covers decentralized ground-mounted grid-connected solar power plants of 500 kW to 2 MW set up on rural land by farmers/FPOs within 5 km of rural substations, with power purchased by DISCOMs at pre-determined feed-in tariffs.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>10. Is PM-KUSUM currently open for new applications?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>MNRE guidelines state the scheme period through 31.03.2026. Scheme continuation and tender rollouts depend on the latest official notifications and state DISCOM tendering schedules.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>11. Can a project be developed on private land outside a Solar Park?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Yes. Private standalone ground-mount solar projects can be developed on privately acquired or leased land anywhere in India, provided grid evacuation feasibility and statutory CEIG approvals are obtained.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>12. Fixed tilt vs Single-Axis Trackers — which should we choose?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Fixed-tilt systems have lower CAPEX, require less land (~4 acres/MW), and involve near-zero mechanical maintenance. Single-axis trackers cost ~10–12% more in CAPEX and need slightly more land (~4.5 acres/MW), but generate 18% to 22% higher electricity yield throughout the year.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>13. What is the DC/AC ratio in utility solar plants?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>The DC/AC ratio (typically 1.25 to 1.35) is the ratio of installed peak solar panel capacity (MWp) to inverter AC output capacity (MW). Higher DC overloading maximizes inverter utilization during morning and late afternoon hours, optimizing levelized cost of energy (LCOE).</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>14. What is evacuation infrastructure?</span>
              <span class="sfhs-faq-answer">
                <p>Evacuation infrastructure includes the on-site step-up transformer (e.g. 0.8kV to 33kV or 66kV), switchyard with circuit breakers and protective relays, overhead transmission line, and the dedicated breaker bay inside the GETCO grid substation.</p>
              </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>15. What is the typical project payback for a ground mount solar plant?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Captive industrial ground plants typically achieve financial payback in 3.5 to 4.5 years. Open-access and utility PPA projects achieve equity IRRs of 18% to 24% with a payback of 4.5 to 5.5 years under 25-year bankable revenue streams.</p>
            </div>
          </div>

          <div class="sfhs-faq-item">
            <button class="sfhs-faq-question" type="button" aria-expanded="false">
              <span>16. How is land due diligence performed before project commitment?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              <p>Our engineering and legal team conducts 30-year revenue title verification, non-encumbrance searches, drone contour topography, soil pull-out testing, hydrology flood risk mapping, and GETCO substation feeder capacity confirmation.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 08: GROUND MOUNT LEAD GENERATION FORM -->
    <section class="cig-form-section" id="ground-lead-form">
      <div class="container">
        <div class="cig-form-card animate-fade-up">
          <div class="cig-form-header">
            <span class="section-tag section-tag-gold" style="margin-bottom:0.5rem;">Land Sizing & MW Feasibility</span>
            <h2 class="cig-form-title">REQUEST GROUND MOUNT SOLAR FEASIBILITY REPORT</h2>
            <p class="cig-form-subtitle">
              Submit your land coordinates, acreage, and substation details to receive a comprehensive MW yield analysis, evacuation plan, and financial model.
            </p>
          </div>

          <form id="groundBookingForm" novalidate>
            <div class="cig-form-grid">
              
              <div class="cig-form-group" id="group-gm-project">
                <label class="cig-form-label" for="gmProjectName">Project / Company Name *</label>
                <input type="text" id="gmProjectName" name="projectName" class="cig-form-control" placeholder="e.g. Sterling Green Energy Park / Dahej Solar SPV" required>
                <div class="cig-form-error-msg">Please enter project or company name.</div>
              </div>

              <div class="cig-form-group" id="group-gm-person">
                <label class="cig-form-label" for="gmContactPerson">Contact Person *</label>
                <input type="text" id="gmContactPerson" name="contactPerson" class="cig-form-control" placeholder="e.g. Jayesh Patel" required>
                <div class="cig-form-error-msg">Please enter contact person name.</div>
              </div>

              <div class="cig-form-group" id="group-gm-phone">
                <label class="cig-form-label" for="gmPhone">Mobile Number (WhatsApp) *</label>
                <input type="tel" id="gmPhone" name="phone" class="cig-form-control" placeholder="10-digit mobile number" maxlength="10" required>
                <div class="cig-form-error-msg">Please enter a valid 10-digit mobile number.</div>
              </div>

              <div class="cig-form-group" id="group-gm-email">
                <label class="cig-form-label" for="gmEmail">Official Email *</label>
                <input type="email" id="gmEmail" name="email" class="cig-form-control" placeholder="director@company.com" required>
                <div class="cig-form-error-msg">Please enter a valid email address.</div>
              </div>

              <div class="cig-form-group" id="group-gm-state">
                <label class="cig-form-label" for="gmState">State *</label>
                <select id="gmState" name="state" class="cig-form-control">
                  <option value="Gujarat" selected>Gujarat</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Other State">Other State</option>
                </select>
              </div>

              <div class="cig-form-group" id="group-gm-district">
                <label class="cig-form-label" for="gmDistrict">District & Taluka *</label>
                <input type="text" id="gmDistrict" name="district" class="cig-form-control" placeholder="e.g. Bharuch, Vagra / Surat, Olpad" required>
                <div class="cig-form-error-msg">Please specify District & Taluka.</div>
              </div>

              <div class="cig-form-group" id="group-gm-village">
                <label class="cig-form-label" for="gmVillage">Village / Survey No. *</label>
                <input type="text" id="gmVillage" name="village" class="cig-form-control" placeholder="e.g. Village Dahej, Survey 142/P" required>
                <div class="cig-form-error-msg">Please specify Village or Survey No.</div>
              </div>

              <div class="cig-form-group" id="group-gm-land">
                <label class="cig-form-label" for="gmLandArea">Available Land Area (Acres) *</label>
                <input type="number" id="gmLandArea" name="landArea" class="cig-form-control" placeholder="e.g. 20" min="1" required>
                <div class="cig-form-error-msg">Please enter land acreage.</div>
              </div>

              <div class="cig-form-group">
                <label class="cig-form-label" for="gmLandOwnership">Land Ownership Status</label>
                <select id="gmLandOwnership" name="landOwnership" class="cig-form-control">
                  <option value="Owned by Promoters" selected>Owned by Promoters</option>
                  <option value="Long-term Leasehold">Long-term Leasehold (25+ Yrs)</option>
                  <option value="Under Evaluation / Purchase">Under Evaluation / Purchase</option>
                </select>
              </div>

              <div class="cig-form-group">
                <label class="cig-form-label" for="gmLandType">Land Classification</label>
                <select id="gmLandType" name="landType" class="cig-form-control">
                  <option value="Non-Agricultural (NA Solar)">Non-Agricultural (NA Solar / Industrial)</option>
                  <option value="Agricultural (Need NA Conversion)">Agricultural (Need NA Conversion)</option>
                  <option value="Barren / Wasteland">Barren / Wasteland</option>
                </select>
              </div>

              <div class="cig-form-group" id="group-gm-substation">
                <label class="cig-form-label" for="gmSubstationName">Nearest Substation Name & Distance (km) *</label>
                <input type="text" id="gmSubstationName" name="substationName" class="cig-form-control" placeholder="e.g. 66kV Dahej GETCO (~3.5 km)" required>
                <div class="cig-form-error-msg">Please specify nearest substation & distance.</div>
              </div>

              <div class="cig-form-group">
                <label class="cig-form-label" for="gmBusinessModelPref">Desired Business Model</label>
                <select id="gmBusinessModelPref" name="businessModelPref" class="cig-form-control">
                  <option value="Captive Solar Plant (Self-Consumption)" selected>Captive Solar Plant (Self-Consumption)</option>
                  <option value="Group Captive SPV">Group Captive SPV</option>
                  <option value="Green Energy Open Access (Third Party PPA)">Green Energy Open Access (Third Party PPA)</option>
                  <option value="Utility Scale PPA (GUVNL / SECI)">Utility Scale PPA (GUVNL / SECI)</option>
                  <option value="Decentralized / PM-KUSUM Scheme">Decentralized / PM-KUSUM Scheme</option>
                  <option value="Need Guidance">Need Guidance from Solar Engineers</option>
                </select>
              </div>

              <div class="cig-form-group-full">
                <label class="cig-form-label" for="gmMessage">Topography Details / GPS Coordinates / Notes (Optional)</label>
                <textarea id="gmMessage" name="message" class="cig-form-control" rows="3" placeholder="Provide GPS pin, terrain details (flat/sloped), road access width, target commercial operation date (COD), or existing industrial consumption details..."></textarea>
              </div>

            </div>

            <div style="text-align:center; margin-top:2rem;">
              <button type="submit" class="btn btn-solar btn-lg" id="gmSubmitBtn" style="min-width:320px;">
                ⚡ GET GROUND MOUNT FEASIBILITY →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    

    <!-- Legal Disclaimer -->
    <div class="cig-legal-disclaimer">
      <div class="container">
        <p class="cig-legal-text">
          <strong>Utility & Ground Mount Regulatory Notice:</strong> Grid interconnection, evacuation voltage levels, transmission lines, bay allocations, and open-access wheeling approvals are executed in accordance with CEA Technical Standards, Central/State Transmission Utility (GETCO / CTU) codes, and GERC regulations. Land conversion, environmental clearances, and right-of-way permissions are subject to state revenue laws and local administrative jurisdictions. Financial models, levelized tariffs, and capacity estimates are indicative engineering simulations subject to geotechnical survey, irradiance logging, and formal grid interconnect approvals.
        </p>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// Interactive Logic for Ground Mount Solar Page
// --------------------------------------------------------------------------
window.initSolarGroundMountPage = function() {
  // 1. FAQ Accordion
  const faqList = document.getElementById('gmFaqList');
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

  function formatCr(amount) {
    return `₹${(amount / 10000000).toFixed(2)} Crore`;
  }

  // 3. Calculator Elements
  const sliderLand = document.getElementById('gmSliderLand');
  const mountingSelect = document.getElementById('gmMountingTech');
  const distInput = document.getElementById('gmSubstationDist');
  const voltSelect = document.getElementById('gmEvacuationVolt');
  const tariffInput = document.getElementById('gmPowerTariff');

  // Displays
  const landDisplay = document.getElementById('gmLandDisplay');

  // Outputs
  const resCapacity = document.getElementById('gmResCapacity');
  const resAcCapacity = document.getElementById('gmResAcCapacity');
  const resAnnualGen = document.getElementById('gmResAnnualGen');
  const resYield = document.getElementById('gmResYield');
  const resCapex = document.getElementById('gmResCapex');
  const resEvacCost = document.getElementById('gmResEvacCost');
  const resEvacSub = document.getElementById('gmResEvacSub');
  const resAnnualRev = document.getElementById('gmResAnnualRev');
  const resPayback = document.getElementById('gmResPayback');
  const resIrr = document.getElementById('gmResIrr');
  const res25Yr = document.getElementById('gmRes25Yr');
  const resCo2 = document.getElementById('gmResCo2');
  const resLandDensity = document.getElementById('gmResLandDensity');

  function updateGroundCalc() {
    const acres = parseFloat(sliderLand ? sliderLand.value : 20) || 20;
    const isTracker = mountingSelect ? mountingSelect.value === 'tracker' : false;
    const distKm = parseFloat(distInput ? distInput.value : 3.5) || 3.5;
    const voltKv = voltSelect ? voltSelect.value : '33';
    const tariff = parseFloat(tariffInput ? tariffInput.value : 4.20) || 4.20;

    // Land density: Fixed tilt ~4.0 acres/MW, Tracker ~4.6 acres/MW
    const acresPerMw = isTracker ? 4.6 : 4.0;
    const capacityMwp = (acres / acresPerMw);
    const capacityMwpFormatted = capacityMwp.toFixed(2);
    const capacityAcMw = (capacityMwp / 1.25).toFixed(2);

    if (landDisplay) {
      landDisplay.textContent = `${acres} Acres (~${capacityMwpFormatted} MWp)`;
    }

    // Specific yield: Fixed tilt ~1,500 kWh/kWp/yr, Tracker ~1,800 kWh/kWp/yr (+20%)
    const specificYield = isTracker ? 1800 : 1500;
    const annualGenKwh = Math.round(capacityMwp * 1000 * specificYield);
    const annualGenMillionUnits = (annualGenKwh / 1000000).toFixed(2);

    // Turnkey EPC CAPEX (~₹4.1 Cr/MW for Fixed, ~₹4.5 Cr/MW for Tracker)
    const costPerMwp = isTracker ? 45000000 : 41000000;
    const plantCapex = Math.round(capacityMwp * costPerMwp);

    // Evacuation Line CAPEX: ~₹25 Lakh/km for 33kV Line + ~₹40 Lakh Substation Bay
    const bayCost = voltKv === '66' ? 7500000 : 4000000;
    const lineCostPerKm = voltKv === '66' ? 4500000 : 2500000;
    const evacCapex = Math.round(bayCost + (distKm * lineCostPerKm));
    const totalProjectCapex = plantCapex + evacCapex;

    // Annual Revenue
    const annualRevenue = Math.round(annualGenKwh * tariff);
    // Annual O&M (~₹3.5 Lakh/MW/yr)
    const annualOm = Math.round(capacityMwp * 350000);
    const annualEbitda = annualRevenue - annualOm;

    // Payback
    const paybackYears = (totalProjectCapex / Math.max(1, annualEbitda)).toFixed(1);
    const projectIrr = ((annualEbitda / totalProjectCapex) * 100 - 1.2).toFixed(1);

    // 25-Year Cumulative EBITDA
    const cum25YrEbitda = (annualEbitda * 25) - totalProjectCapex;

    const co2TonnesPerYr = Math.round(annualGenKwh * 0.00082);

    // Update UI
    if (resCapacity) resCapacity.textContent = `${capacityMwpFormatted} MWp`;
    if (resAcCapacity) resAcCapacity.textContent = `AC Grid Export: ~${capacityAcMw} MW (DC/AC: 1.25)`;
    if (resAnnualGen) resAnnualGen.textContent = `~${annualGenMillionUnits} Million Units`;
    if (resYield) resYield.textContent = `Specific Yield: ~${specificYield} kWh/kWp/yr (${isTracker ? '+20% Tracker Boost' : 'Fixed Tilt'})`;
    if (resCapex) resCapex.textContent = formatCr(plantCapex);
    if (resEvacCost) resEvacCost.textContent = `~${formatCr(evacCapex)}`;
    if (resEvacSub) resEvacSub.textContent = `~${distKm} km ${voltKv}kV Dedicated Line + Bay`;
    if (resAnnualRev) resAnnualRev.textContent = `${formatCr(annualRevenue)} / yr`;
    if (resPayback) resPayback.textContent = `~${paybackYears} Years`;
    if (resIrr) resIrr.textContent = `Project IRR: ~${projectIrr}% • Equity IRR: ~${(parseFloat(projectIrr) * 1.22).toFixed(1)}%`;
    if (res25Yr) res25Yr.textContent = `+${formatCr(cum25YrEbitda)}`;
    if (resCo2) resCo2.textContent = `~${co2TonnesPerYr.toLocaleString('en-IN')} Tonnes / yr`;
    if (resLandDensity) {
      resLandDensity.textContent = `~${acresPerMw.toFixed(2)} Acres per MW (${isTracker ? 'Single-Axis Tracker' : 'Fixed Tilt'})`;
    }

    // Save active state
    window.gmActiveCalculation = {
      capacityMwp: `${capacityMwpFormatted} MWp`,
      annualGen: `~${annualGenMillionUnits} Million Units/yr`,
      totalCapex: totalProjectCapex,
      annualRevenue: annualRevenue,
      payback: `${paybackYears} Years`,
      acres: acres,
      distKm: distKm
    };
  }

  // Event Listeners
  if (sliderLand) sliderLand.addEventListener('input', updateGroundCalc);
  if (mountingSelect) mountingSelect.addEventListener('change', updateGroundCalc);
  if (distInput) distInput.addEventListener('input', updateGroundCalc);
  if (voltSelect) voltSelect.addEventListener('change', updateGroundCalc);
  if (tariffInput) tariffInput.addEventListener('input', updateGroundCalc);

  // 4. Ground Mount Lead Form Submission
  const gmForm = document.getElementById('groundBookingForm');
  if (gmForm) {
    gmForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const project = (gmForm.projectName ? gmForm.projectName.value : '').trim();
      const person = (gmForm.contactPerson ? gmForm.contactPerson.value : '').trim();
      const phone = (gmForm.phone ? gmForm.phone.value : '').trim();
      const email = (gmForm.email ? gmForm.email.value : '').trim();
      const state = gmForm.state ? gmForm.state.value : 'Gujarat';
      const district = (gmForm.district ? gmForm.district.value : '').trim();
      const village = (gmForm.village ? gmForm.village.value : '').trim();
      const land = (gmForm.landArea ? gmForm.landArea.value : '').trim();
      const ownership = gmForm.landOwnership ? gmForm.landOwnership.value : 'Owned';
      const landType = gmForm.landType ? gmForm.landType.value : 'NA';
      const substation = (gmForm.substationName ? gmForm.substationName.value : '').trim();
      const model = gmForm.businessModelPref ? gmForm.businessModelPref.value : 'Captive';
      const remarks = (gmForm.message ? gmForm.message.value : '').trim();

      let hasError = false;

      // Validate Project
      if (!project || project.length < 2) {
        document.getElementById('group-gm-project')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-gm-project')?.classList.remove('has-error');
      }

      // Validate Person
      if (!person || person.length < 2) {
        document.getElementById('group-gm-person')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-gm-person')?.classList.remove('has-error');
      }

      // Validate Phone
      const cleanPhone = phone.replace(/\D/g, '');
      if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
        document.getElementById('group-gm-phone')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-gm-phone')?.classList.remove('has-error');
      }

      // Validate Email
      if (!email || !email.includes('@')) {
        document.getElementById('group-gm-email')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-gm-email')?.classList.remove('has-error');
      }

      // Validate District
      if (!district || district.length < 2) {
        document.getElementById('group-gm-district')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-gm-district')?.classList.remove('has-error');
      }

      // Validate Village
      if (!village || village.length < 2) {
        document.getElementById('group-gm-village')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-gm-village')?.classList.remove('has-error');
      }

      // Validate Land
      if (!land || isNaN(land) || parseFloat(land) < 1) {
        document.getElementById('group-gm-land')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-gm-land')?.classList.remove('has-error');
      }

      // Validate Substation
      if (!substation || substation.length < 2) {
        document.getElementById('group-gm-substation')?.classList.add('has-error');
        hasError = true;
      } else {
        document.getElementById('group-gm-substation')?.classList.remove('has-error');
      }

      if (hasError) {
        const firstErr = gmForm.querySelector('.cig-form-group.has-error input, .cig-form-group.has-error select');
        if (firstErr) firstErr.focus();
        return;
      }

      const submitBtn = document.getElementById('gmSubmitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ Submitting Ground Mount Feasibility Request...';
      }

      const active = window.gmActiveCalculation || {};
      const refNumber = 'VLE-GM-' + Math.floor(100000 + Math.random() * 900000);

      // Submit lead to Google Sheets CRM
      let leadSubmission = null;
      if (window.GoogleSheetsLeadManager) {
        leadSubmission = await window.GoogleSheetsLeadManager.submitLead({
          refId: refNumber,
          fullName: `${person} (${project})`,
          mobileNumber: phone,
          email: email,
          city: `${village}, ${district}, ${state}`,
          monthlyBill: `${land} Acres Land`,
          requiredKw: active.capacityMwp || '5.0 MWp',
          recommendedKw: `${active.capacityMwp || '5.0 MWp'} Ground Mount Plant`,
          monthlyGen: active.annualGen ? `${active.annualGen}` : '~7.50 Million Units/yr',
          grossCost: active.totalCapex ? `₹${(active.totalCapex / 10000000).toFixed(2)} Cr` : '₹21.55 Cr',
          subsidy: 'Utility Model / Open Access',
          netCost: active.totalCapex ? `₹${(active.totalCapex / 10000000).toFixed(2)} Cr` : '₹21.55 Cr',
          customerType: `Ground Mount (${model})`,
          systemType: `Utility Solar (${ownership}, ${landType})`,
          message: `Location: ${village}, ${district}, ${state}. Land: ${land} Acres (${ownership}, ${landType}). Substation: ${substation}. Remarks: ${remarks || 'None'}`,
          sourcePage: 'Ground Mount Solar (/solar-ground-mount)'
        });
      }

      const assignedRef = leadSubmission && leadSubmission.refId ? leadSubmission.refId : refNumber;
      const waMsg = encodeURIComponent(`Hello VOLTS LEGACY Energy Solutions, I have submitted a Ground Mount Solar Feasibility Request (Ref #${assignedRef}). Project: ${project}, Location: ${village}, ${district}, ${state}, Contact: ${person} (+91 ${phone}), Land: ${land} Acres (${ownership}), Substation: ${substation}, Model: ${model}. Please connect for land screening and evacuation study.`);

      const modalHtml = `
        <div style="text-align: center; padding: 1rem 0;">
          <div style="width: 68px; height: 68px; border-radius: 50%; background: #dcfce7; color: #16a34a; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; font-size: 2.2rem; box-shadow: 0 4px 14px rgba(22,163,74,0.25);">
            ✓
          </div>
          <h3 style="font-size: 1.6rem; color: #071530; margin-bottom: 0.5rem; font-family: var(--font-heading);">Ground Mount Feasibility Request Received!</h3>
          <p style="color: #475569; font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.5;">
            Thank you, <strong>${person}</strong>. Your utility ground solar enquiry for <strong>${project}</strong> in <strong>${district}, ${state}</strong> has been registered. Our Chief Megawatt Project Engineer will connect on <strong>+91 ${phone}</strong> to coordinate the satellite land due diligence and evacuation feasibility report.
          </p>

          <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-align: left; margin-bottom: 1.5rem; font-size: 0.9rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; padding-bottom: 0.5rem; border-bottom: 1px dashed #cbd5e1;">
              <span style="color: #64748b;">Enquiry Reference:</span>
              <strong style="color: #2563eb; font-family: monospace; font-size: 1.05rem;">#${assignedRef}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">Project / Location:</span>
              <strong>${project} (${district}, ${state})</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">Land & Substation:</span>
              <strong>${land} Acres • ${substation}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">Indicative Capacity:</span>
              <strong style="color: #0284c7;">${active.capacityMwp || '5.0 MWp'}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">Est. Annual Generation:</span>
              <strong style="color: #16a34a;">${active.annualGen ? active.annualGen : '~7.50 Million Units/yr'}</strong>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: #64748b;">Est. Project Outlay:</span>
              <strong style="color: #071530;">${active.totalCapex ? formatCr(active.totalCapex) : '₹21.55 Crore'}</strong>
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

      gmForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '⚡ GET GROUND MOUNT FEASIBILITY →';
      }
    });
  }

  // Initial Run
  updateGroundCalc();

  if (window.initScrollAnimations) {
    window.initScrollAnimations();
  }
};
