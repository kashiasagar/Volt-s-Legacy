/* ==========================================================================
   VOLT'S LEGACY SOLAR - Torrent Power Capacity & 30-Year ROI Payback Engine
   Based on "ON-GRID ROI & CAPACITY FINDER.xlsm" (Sheet 3 & Sheet 4)
   Normal String Inverter Payback Model
   ========================================================================== */

class TorrentRoiCapacityFinder {
  constructor() {
    this.tariff = 7.80; // Torrent Power Standard Tariff (₹/unit)
    this.baseBill = 3500;
    
    // Future AC List from Sheet 3
    this.acList = [
      { id: 1, name: "Living Room AC", nos: 1, ton: 1.5, star: 3, eff: 1.4, hours: 8, picked: false },
      { id: 2, name: "Master Bedroom AC", nos: 1, ton: 1.0, star: 5, eff: 1.8, hours: 8, picked: false },
      { id: 3, name: "Bedroom 2 AC", nos: 1, ton: 1.0, star: 3, eff: 1.4, hours: 8, picked: false },
      { id: 4, name: "Dining / Hall AC", nos: 1, ton: 2.0, star: 3, eff: 1.4, hours: 8, picked: false }
    ];

    // Official Torrent Power / Gujarat Maximum Price Dataset (Normal String Inverter + HDG Nut-Bolt)
    this.pricingMatrix = [
      { panels: 4, kw: 2.40, inv: "3 kW String Inverter", struct: "3 Leg • 2 Rafter • 2 Purlin", rate: 150652, subsidy: 60000, net: 90652, units: 300 },
      { panels: 5, kw: 3.00, inv: "3 kW String Inverter", struct: "3 Leg • 2 Rafter • 3 Purlin", rate: 176364, subsidy: 78000, net: 98364, units: 375 },
      { panels: 6, kw: 3.60, inv: "3 kW String Inverter", struct: "3 Leg • 2 Rafter • 3 Purlin", rate: 201530, subsidy: 78000, net: 123530, units: 450 },
      { panels: 7, kw: 4.20, inv: "4 kW String Inverter", struct: "5 Leg • 3 Rafter • 5 Purlin", rate: 246190, subsidy: 78000, net: 168190, units: 525 },
      { panels: 8, kw: 4.80, inv: "5 kW String Inverter", struct: "5 Leg • 3 Rafter • 5 Purlin", rate: 274080, subsidy: 78000, net: 196080, units: 600 },
      { panels: 9, kw: 5.40, inv: "5 kW String Inverter", struct: "5 Leg • 3 Rafter • 5 Purlin", rate: 299246, subsidy: 78000, net: 221246, units: 675 },
      { panels: 10, kw: 6.00, inv: "5 kW String Inverter", struct: "6 Leg • 4 Rafter • 6 Purlin", rate: 358172, subsidy: 78000, net: 280172, units: 750 },
      { panels: 11, kw: 6.60, inv: "8 kW (3 PH) String Inverter", struct: "6 Leg • 4 Rafter • 6 Purlin", rate: 393140, subsidy: 78000, net: 315140, units: 825 },
      { panels: 12, kw: 7.20, inv: "8 kW String Inverter", struct: "6 Leg • 4 Rafter • 6 Purlin", rate: 418307, subsidy: 78000, net: 340307, units: 900 },
      { panels: 13, kw: 7.80, inv: "8 kW String Inverter", struct: "6 Leg • 4 Rafter • 8 Purlin", rate: 444562, subsidy: 78000, net: 366562, units: 975 },
      { panels: 14, kw: 8.40, inv: "8 kW String Inverter", struct: "6 Leg • 4 Rafter • 8 Purlin", rate: 469729, subsidy: 78000, net: 391729, units: 1050 },
      { panels: 15, kw: 9.00, inv: "10 kW String Inverter", struct: "6 Leg • 4 Rafter • 8 Purlin", rate: 499252, subsidy: 78000, net: 421252, units: 1125 },
      { panels: 16, kw: 9.60, inv: "10 kW String Inverter", struct: "6 Leg • 4 Rafter • 8 Purlin", rate: 524419, subsidy: 78000, net: 446419, units: 1200 }
    ];
  }

  // Format currency in Indian format (₹98,364)
  formatInr(num) {
    if (isNaN(num) || num === null || num === undefined) return '₹0';
    return '₹' + Math.round(num).toLocaleString('en-IN');
  }

  // Format Lakhs / Cr (+₹17.95 Lakhs)
  formatLakhs(num) {
    if (isNaN(num) || num === null || num === undefined) return '₹0';
    const abs = Math.abs(num);
    if (abs >= 10000000) {
      return '₹' + (num / 10000000).toFixed(2) + ' Cr';
    } else if (abs >= 100000) {
      return '₹' + (num / 100000).toFixed(2) + ' Lakhs';
    } else {
      return '₹' + Math.round(num).toLocaleString('en-IN');
    }
  }

  // Calculate monthly cost for an individual AC
  calculateAcMonthlyCost(ac) {
    const tariff = this.tariff;
    return (ac.ton * ac.nos * 0.8 * 30 * tariff * ac.hours) / ac.eff;
  }

  // Core Financial & Sizing Calculation Engine (Normal String Inverter)
  calculate(billAmount) {
    let bill = Math.max(500, Math.min(100000, parseFloat(billAmount) || 3500));

    // Sum picked AC monthly costs if any
    let totalAcCost = 0;
    this.acList.forEach(ac => {
      if (ac.picked) {
        totalAcCost += this.calculateAcMonthlyCost(ac);
      }
    });

    const effectiveBill = Math.round(bill + totalAcCost);

    // 1. Torrent Power Sheet 3 Sizing Formula
    // Required Solar System (in KW) = (Monthly_Bill / (30 * 7.80 * 4)) * 1.08
    const requiredKw = +((effectiveBill / (30 * this.tariff * 4)) * 1.08).toFixed(2);
    let numPanels = Math.max(4, Math.ceil((requiredKw * 1000) / 600));
    let kw = +((numPanels * 0.60).toFixed(2));

    let tier = this.pricingMatrix.find(t => t.panels === numPanels);
    if (!tier) {
      const baseTier = this.pricingMatrix[this.pricingMatrix.length - 1];
      if (numPanels > 16) {
        const extraPanels = numPanels - 16;
        const extraKw = +(extraPanels * 0.60).toFixed(2);
        tier = {
          panels: numPanels,
          kw: +(9.60 + extraKw).toFixed(2),
          inv: `${Math.ceil(kw)} kW (3-Phase) String Inverter`,
          struct: `6 Leg • ${Math.ceil(numPanels/2)} Rafter`,
          rate: Math.round(baseTier.rate + (extraPanels * 25167)),
          subsidy: 78000,
          net: Math.round(baseTier.rate + (extraPanels * 25167)) - 78000,
          units: numPanels * 75
        };
      } else {
        tier = this.pricingMatrix[0];
      }
    }

    let grossCost = tier.rate;
    let subsidy = tier.subsidy;
    let netInvestment = tier.net;
    let monthlyGenUnits = numPanels * 75;
    let numPanelsOut = numPanels;
    let inverterName = tier.inv;

    // Monthly solar generation value & residual grid bill
    const monthlySolarValue = Math.min(effectiveBill, Math.round(monthlyGenUnits * this.tariff));
    const residualGridBill = Math.max(450, Math.round(effectiveBill - monthlySolarValue));
    const monthlySavings = effectiveBill - residualGridBill;
    const annualSavings = monthlySavings * 12;

    // Cash Solar Payback (Net Cost / Annual Savings)
    const cashPaybackYears = (netInvestment / Math.max(1, annualSavings)).toFixed(1);
    const freePowerYears = Math.max(0, (30 - parseFloat(cashPaybackYears))).toFixed(1);

    // 5-Year Concessional Solar Loan Calculation on Net Cost (8.5% interest p.a.)
    const loanAmount = netInvestment;
    const monthlyRate = 0.085 / 12;
    const tenureMonths = 60;
    const emi = Math.round(
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1)
    );
    const emiTotalMonthly = emi + residualGridBill;
    const totalLoanPaid = emi * 60;

    // EMI Solar Payback (Total Loan Principal + Interest recovered via bill savings)
    const emiPaybackYears = ((totalLoanPaid * 1.03) / Math.max(1, annualSavings)).toFixed(1);
    const emiFreePowerYears = Math.max(0, (30 - parseFloat(emiPaybackYears))).toFixed(1);

    // 30-Year Compounding Calculations (4% annual grid tariff escalation)
    const annualEscalation = 0.04;
    const factor30Yr = (Math.pow(1 + annualEscalation, 30) - 1) / annualEscalation; // 56.084937
    const normal30YrTotal = Math.round((effectiveBill * 12) * factor30Yr);
    const residual30YrTotal = Math.round((residualGridBill * 12) * factor30Yr);

    const cash30YrNetWealth = normal30YrTotal - (netInvestment + residual30YrTotal);
    const emi30YrNetWealth = normal30YrTotal - (totalLoanPaid + residual30YrTotal);

    // Milestones Data for the Table
    const pbCashVal = parseFloat(cashPaybackYears);
    const pbEmiVal = parseFloat(emiPaybackYears);

    const milestones = [
      {
        year: 1,
        label: 'Year 1',
        normal: -(effectiveBill * 12),
        cash: (annualSavings - netInvestment),
        emi: (effectiveBill * 12) - ((emi * 12) + (residualGridBill * 12)),
        emiStatus: 'Loan active'
      },
      {
        year: pbCashVal,
        label: `Year ${cashPaybackYears} (Cash Payback)`,
        normal: -Math.round((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, pbCashVal) - 1) / Math.log(1 + annualEscalation))),
        cash: Math.round(((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, pbCashVal) - 1) / Math.log(1 + annualEscalation))) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, pbCashVal) - 1) / Math.log(1 + annualEscalation))))),
        emi: Math.round(((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, pbCashVal) - 1) / Math.log(1 + annualEscalation))) - ((emi * 12 * Math.min(5, pbCashVal)) + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, pbCashVal) - 1) / Math.log(1 + annualEscalation))))),
        emiStatus: 'Loan active'
      },
      {
        year: pbEmiVal,
        label: `Year ${emiPaybackYears} (EMI Payback)`,
        normal: -Math.round((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, pbEmiVal) - 1) / Math.log(1 + annualEscalation))),
        cash: Math.round(((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, pbEmiVal) - 1) / Math.log(1 + annualEscalation))) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, pbEmiVal) - 1) / Math.log(1 + annualEscalation))))),
        emi: Math.round(((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, pbEmiVal) - 1) / Math.log(1 + annualEscalation))) - ((emi * 12 * Math.min(5, pbEmiVal)) + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, pbEmiVal) - 1) / Math.log(1 + annualEscalation))))),
        emiStatus: pbEmiVal <= 5 ? 'Loan active' : 'Net Wealth'
      },
      {
        year: 5,
        label: 'Year 5 (Loan Paid)',
        normal: -Math.round((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)),
        cash: Math.round(((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)))),
        emi: Math.round(((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)) - (totalLoanPaid + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)))),
        emiStatus: 'Loan active'
      },
      {
        year: 10,
        label: 'Year 10',
        normal: -Math.round((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)),
        cash: Math.round(((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)))),
        emi: Math.round(((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)) - (totalLoanPaid + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)))),
        emiStatus: 'Net Wealth'
      },
      {
        year: 20,
        label: 'Year 20',
        normal: -Math.round((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)),
        cash: Math.round(((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)))),
        emi: Math.round(((effectiveBill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)) - (totalLoanPaid + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)))),
        emiStatus: 'Net Wealth'
      },
      {
        year: 30,
        label: 'Year 30 (Lifetime)',
        normal: -normal30YrTotal,
        cash: cash30YrNetWealth,
        emi: emi30YrNetWealth,
        emiStatus: 'Net Wealth'
      }
    ];

    return {
      baseBill: bill,
      totalAcCost: Math.round(totalAcCost),
      effectiveBill: effectiveBill,
      requiredKw: requiredKw,
      kw: kw,
      numPanels: numPanels,
      inverterName: inverterName,
      monthlyGenUnits: monthlyGenUnits,
      grossCost: grossCost,
      subsidy: subsidy,
      netInvestment: netInvestment,
      residualGridBill: residualGridBill,
      monthlySavings: monthlySavings,
      annualSavings: annualSavings,
      cashPaybackYears: cashPaybackYears,
      freePowerYears: freePowerYears,
      emi: emi,
      emiTotalMonthly: emiTotalMonthly,
      totalLoanPaid: totalLoanPaid,
      emiPaybackYears: emiPaybackYears,
      emiFreePowerYears: emiFreePowerYears,
      normal30YrTotal: normal30YrTotal,
      cash30YrNetWealth: cash30YrNetWealth,
      emi30YrNetWealth: emi30YrNetWealth,
      milestones: milestones
    };
  }

  // Render Full 3-Way Comparative Financial Model UI
  render() {
    const data = this.calculate(this.baseBill);

    return `
      <div class="sfh-3way-calc-wrapper animate-fade-up">
        
        <!-- PM Surya Ghar Government Subsidy Callout Banner -->
        <div class="sfh-3way-subsidy-badge-banner">
          <span class="sfh-sub-tag">⚡ PM Surya Ghar Subsidy Included</span>
          <span><strong>Government Subsidy Included:</strong> This calculation accounts for up to <strong>₹78,000 Central DBT Subsidy</strong> directly credited into your bank account, drastically reducing your net investment and making Solar EMI cheaper than your current electricity bill from Day 1!</span>
        </div>

        <!-- Interactive Controls Console -->
        <div class="sfh-3way-control-panel">
          <div class="sfh-3way-control-header">
            <div>
              <label for="trFinderBillRange" class="sfh-3way-label">Monthly Electricity Bill</label>
              <div class="sfh-3way-sublabel">Drag the slider dot or enter your exact bill amount below</div>
            </div>
            <div class="sfh-3way-input-box-wrap">
              <span class="sfh-3way-curr-symbol">₹</span>
              <input type="number" id="trFinderBillInput" class="sfh-3way-number-input" min="1000" max="50000" step="250" value="${data.baseBill}" aria-label="Enter monthly electricity bill">
              <span class="sfh-3way-unit-label">/ month</span>
            </div>
          </div>

          <!-- Slider -->
          <div class="sfh-3way-slider-container">
            <input type="range" class="sfh-range-slider" id="trFinderBillRange" min="1000" max="30000" step="250" value="${data.baseBill}" aria-label="Monthly electricity bill slider">
            <div class="sfh-3way-slider-ticks">
              <span>₹1,000</span>
              <span>₹5,000</span>
              <span>₹10,000</span>
              <span>₹20,000</span>
              <span>₹30,000+</span>
            </div>
          </div>

          <!-- Quick Preset Buttons -->
          <div class="sfh-3way-presets">
            <span class="sfh-3way-preset-label">Quick Presets:</span>
            <button type="button" class="sfh-preset-btn tr-preset-btn" data-val="2000">₹2,000</button>
            <button type="button" class="sfh-preset-btn tr-preset-btn active" data-val="3500">₹3,500</button>
            <button type="button" class="sfh-preset-btn tr-preset-btn" data-val="5000">₹5,000</button>
            <button type="button" class="sfh-preset-btn tr-preset-btn" data-val="7500">₹7,500</button>
            <button type="button" class="sfh-preset-btn tr-preset-btn" data-val="10000">₹10,000</button>
            <button type="button" class="sfh-preset-btn tr-preset-btn" data-val="15000">₹15,000</button>
            <button type="button" class="sfh-preset-btn tr-preset-btn" data-val="25000">₹25,000</button>
          </div>

          <!-- Future AC Load Planner (Integrated Option) -->
          <div class="tr-ac-collapsible" style="margin-top:1.5rem; background:rgba(15,23,42,0.03); border:1px solid rgba(0,0,0,0.08); border-radius:12px; padding:1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; cursor:pointer;" id="trAcToggleHeader">
              <div>
                <strong style="color:var(--primary-900); font-size:0.95rem;">❄️ Optional: Plan Future Air Conditioners (AC Loads)</strong>
                <p style="color:var(--text-muted); font-size:0.8rem; margin:0.2rem 0 0 0;">Check below to add future AC loads to your monthly bill sizing (Torrent Power ₹8.40/unit).</p>
              </div>
              <span id="trAcToggleIcon" style="font-size:1.2rem; color:var(--primary-600); font-weight:bold;">+</span>
            </div>
            <div id="trAcBodyContent" style="display:none; margin-top:1rem;">
              <div class="table-responsive">
                <table class="table" style="font-size:0.85rem; margin-bottom:0.5rem; width:100%;">
                  <thead>
                    <tr style="background:rgba(0,0,0,0.04);">
                      <th style="padding:0.5rem;">Select</th>
                      <th style="padding:0.5rem;">Appliance</th>
                      <th style="padding:0.5rem;">Rating</th>
                      <th style="padding:0.5rem;">Run Time</th>
                      <th style="padding:0.5rem;">Est. Monthly Outgo</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${this.renderAcRows()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Matched System Specs Bar (6 Items) -->
          <div class="sfh-3way-specs-bar">
            <div class="sfh-spec-item">
              <span class="sfh-spec-lbl">Required System:</span>
              <strong class="sfh-spec-val" id="trFinderSpecReqKw">${data.requiredKw} kW</strong>
            </div>
            <div class="sfh-spec-item">
              <span class="sfh-spec-lbl">Recommended System:</span>
              <strong class="sfh-spec-val" id="trFinderSpecRecKw">${data.kw} kW (${data.numPanels} Panels)</strong>
            </div>
            <div class="sfh-spec-item">
              <span class="sfh-spec-lbl">Estimated Generation:</span>
              <strong class="sfh-spec-val" id="trFinderSpecGen">~${data.monthlyGenUnits} kWh / mo</strong>
            </div>
            <div class="sfh-spec-item">
              <span class="sfh-spec-lbl">Gross Plant Cost:</span>
              <strong class="sfh-spec-val" id="trFinderSpecCost">${this.formatInr(data.grossCost)}</strong>
            </div>
            <div class="sfh-spec-item">
              <span class="sfh-spec-lbl">Central Subsidy (DBT):</span>
              <strong class="sfh-spec-val green" id="trFinderSpecSub">${this.formatInr(data.subsidy)} Direct</strong>
            </div>
            <div class="sfh-spec-item">
              <span class="sfh-spec-lbl">Net Customer Cost:</span>
              <strong class="sfh-spec-val green" id="trFinderSpecNet">${this.formatInr(data.netInvestment)}</strong>
            </div>
          </div>
        </div>

        <!-- 3-Way Comparative Cards Grid -->
        <div class="sfh-3way-cards-grid">
          
          <!-- OPTION 1: NORMAL GRID (WITHOUT SOLAR) -->
          <div class="sfh-3way-card normal-card">
            <div class="sfh-3way-card-badge red">⚡ Normal Grid Power</div>
            <h3 class="sfh-3way-card-title">Without Solar</h3>
            <p class="sfh-3way-card-tagline">Continuous monthly expense with zero asset creation</p>

            <div class="sfh-3way-metric-box red-bg">
              <span class="sfh-3way-metric-lbl">Current Monthly Outgo</span>
              <div class="sfh-3way-metric-val red-text" id="trFinderNormalMonthly">${this.formatInr(data.effectiveBill)} <span class="sfh-val-unit">/ mo</span></div>
              <span class="sfh-3way-metric-sub" id="trFinderNormalAnnual">${this.formatInr(data.effectiveBill * 12)} / year (+4% annual tariff hike)</span>
            </div>

            <!-- Payback Callout -->
            <div class="sfh-3way-highlight-pill red">
              <div class="sfh-hl-label">⚠️ Payback Period</div>
              <div class="sfh-hl-val red-text">Never (0% Return)</div>
              <div class="sfh-hl-note">Continuous lifetime liability to DISCOM</div>
            </div>

            <!-- 30-Year Return Callout -->
            <div class="sfh-3way-highlight-pill red">
              <div class="sfh-hl-label">📉 30-Year Cumulative Outflow / Lost Money</div>
              <div class="sfh-hl-val red-text" id="trFinderNormal30Yr">-${this.formatLakhs(data.normal30YrTotal)}</div>
              <div class="sfh-hl-note">100% money spent with ₹0 asset creation</div>
            </div>

            <div class="sfh-3way-card-footer red-foot">
              <span>✕ Vulnerable to Grid Outages & Tariff Hikes</span>
            </div>
          </div>

          <!-- OPTION 2: CASH SOLAR (FULL UPFRONT) -->
          <div class="sfh-3way-card cash-card">
            <div class="sfh-3way-card-badge green">💵 Cash Purchase</div>
            <h3 class="sfh-3way-card-title">Full Upfront Solar</h3>
            <p class="sfh-3way-card-tagline">Maximum return with zero interest & immediate 100% asset ownership</p>

            <div class="sfh-3way-metric-box green-bg">
              <span class="sfh-3way-metric-lbl">Net Initial Investment</span>
              <div class="sfh-3way-metric-val green-text" id="trFinderCashNet">${this.formatInr(data.netInvestment)}</div>
              <span class="sfh-3way-metric-sub" id="trFinderCashSubCalc">After ${this.formatInr(data.subsidy)} Central DBT Subsidy</span>
            </div>

            <!-- Payback Callout -->
            <div class="sfh-3way-highlight-pill green">
              <div class="sfh-hl-label">⏱️ Estimated Payback Period</div>
              <div class="sfh-hl-val green-text" id="trFinderCashPayback">${data.cashPaybackYears} Years</div>
              <div class="sfh-hl-note">100% net investment recovered via bill savings</div>
            </div>

            <!-- 30-Year Return Callout -->
            <div class="sfh-3way-highlight-pill gold">
              <div class="sfh-hl-label">💰 30-Year Net Wealth Created / Return</div>
              <div class="sfh-hl-val green-text" id="trFinderCash30Yr">+${this.formatLakhs(data.cash30YrNetWealth)}</div>
              <div class="sfh-hl-note">Net savings after 100% cost recovery</div>
            </div>

            <div class="sfh-3way-card-footer green-foot">
              <span>✓ Zero Bank Debt • Maximum Lifetime ROI</span>
            </div>
          </div>

          <!-- OPTION 3: EMI SOLAR FINANCING -->
          <div class="sfh-3way-card emi-card highlight-smart">
            <div class="sfh-3way-smart-tag">MOST POPULAR CHOICE</div>
            <div class="sfh-3way-card-badge blue">💳 Easy Solar EMI</div>
            <h3 class="sfh-3way-card-title">Solar on EMI / Loan</h3>
            <p class="sfh-3way-card-tagline">Zero upfront friction — your monthly solar bill savings pay the entire loan EMI</p>

            <div class="sfh-3way-metric-box blue-bg">
              <span class="sfh-3way-metric-lbl">Monthly Outgo (Years 1–5)</span>
              <div class="sfh-3way-metric-val blue-text" id="trFinderEmiMonthly">${this.formatInr(data.emiTotalMonthly)} <span class="sfh-val-unit">/ mo</span></div>
              <span class="sfh-3way-metric-sub" id="trFinderEmiBreakdown">${this.formatInr(data.emi)} (5-Yr Solar EMI) + ~${this.formatInr(data.residualGridBill)} (Grid Fixed)</span>
            </div>

            <!-- Payback Callout (EMI Payback Period) -->
            <div class="sfh-3way-highlight-pill blue">
              <div class="sfh-hl-label">⏱️ Estimated Payback Period (With Loan)</div>
              <div class="sfh-hl-val" style="color:#1d4ed8;" id="trFinderEmiPayback">${data.emiPaybackYears} Years</div>
              <div class="sfh-hl-note">100% loan principal + bank interest recovered via bill savings</div>
            </div>

            <!-- 30-Year Return Callout -->
            <div class="sfh-3way-highlight-pill gold">
              <div class="sfh-hl-label">💰 30-Year Net Wealth Created / Return</div>
              <div class="sfh-hl-val green-text" id="trFinderEmi30Yr">+${this.formatLakhs(data.emi30YrNetWealth)}</div>
              <div class="sfh-hl-note">Net savings after 100% loan repayment (principal + interest)</div>
            </div>

            <div class="sfh-3way-card-footer blue-foot">
              <span>✓ Solar Bill Savings Offset EMI Automatically</span>
            </div>
          </div>

        </div>

        <!-- 30-Year Milestone Comparison Table -->
        <div class="sfh-3way-milestones-card">
          <div class="sfh-3way-milestones-header">
            <span class="section-tag section-tag-gold" style="margin-bottom:0.25rem;">30-Year Financial Trajectory</span>
            <h4 class="sfh-3way-milestones-title">Cumulative Financial Position at Key Milestones (With PM Surya Ghar Subsidy)</h4>
            <p class="sfh-3way-milestones-sub">See how your family wealth evolves over 30 years across Normal Grid Power, Cash Solar (2.7-Yr Payback), and Solar Loan EMI (3.4-Yr Payback).</p>
          </div>

          <div class="sfh-3way-table-responsive">
            <table class="sfh-3way-table">
              <thead>
                <tr>
                  <th>Milestone Timeline</th>
                  <th>⚡ Normal Grid (Without Solar)</th>
                  <th>💵 Cash Solar (Upfront)</th>
                  <th>💳 Solar EMI Financing (5-Yr Loan)</th>
                </tr>
              </thead>
              <tbody id="trFinderMilestonesBody">
                ${this.renderMilestoneRows(data.milestones)}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;
  }

  // Render AC Table Rows
  renderAcRows() {
    return this.acList.map(ac => {
      const monthlyCost = this.calculateAcMonthlyCost(ac);
      return `
        <tr class="tr-ac-row ${ac.picked ? 'ac-selected' : ''}">
          <td style="text-align:center;">
            <input type="checkbox" class="tr-finder-ac-cb" data-id="${ac.id}" ${ac.picked ? 'checked' : ''} aria-label="Include ${ac.name}">
          </td>
          <td><strong>${ac.name}</strong></td>
          <td>${ac.ton} Ton • ${ac.star}★</td>
          <td>${ac.hours} hrs/day</td>
          <td><strong style="color:#2563eb;">+${this.formatInr(monthlyCost)} / mo</strong></td>
        </tr>
      `;
    }).join('');
  }

  // Render Milestone Rows
  renderMilestoneRows(milestones) {
    return milestones.map(m => {
      const normalText = `<span style="color:#dc2626; font-weight:700;">-${this.formatLakhs(Math.abs(m.normal))} Lost Outflow</span>`;

      const cashText = m.cash >= 0
        ? `<strong style="color:#16a34a;">+${this.formatLakhs(m.cash)} Net Wealth</strong>`
        : `<span style="color:#d97706; font-weight:600;">-${this.formatLakhs(Math.abs(m.cash))} (Payback in progress)</span>`;

      const emiText = m.year <= 5
        ? (m.emi >= 0
            ? `<strong style="color:#2563eb;">+${this.formatLakhs(m.emi)} (Loan active)</strong>`
            : `<span style="color:#2563eb; font-weight:600;">-${this.formatLakhs(Math.abs(m.emi))} (Loan active)</span>`)
        : `<strong style="color:#16a34a;">+${this.formatLakhs(m.emi)} Net Wealth</strong>`;

      return `
        <tr>
          <td><strong style="color:var(--primary-900, #0f172a);">${m.label}</strong></td>
          <td>${normalText}</td>
          <td>${cashText}</td>
          <td>${emiText}</td>
        </tr>
      `;
    }).join('');
  }

  // Event Listeners and Interactive Bindings
  initEvents() {
    const slider = document.getElementById('trFinderBillRange');
    const numInput = document.getElementById('trFinderBillInput');
    const presets = document.querySelectorAll('.tr-preset-btn');
    const acToggleHeader = document.getElementById('trAcToggleHeader');
    const acBodyContent = document.getElementById('trAcBodyContent');
    const acToggleIcon = document.getElementById('trAcToggleIcon');

    if (acToggleHeader && acBodyContent) {
      acToggleHeader.addEventListener('click', () => {
        const isHidden = acBodyContent.style.display === 'none';
        acBodyContent.style.display = isHidden ? 'block' : 'none';
        if (acToggleIcon) acToggleIcon.textContent = isHidden ? '−' : '+';
      });
    }

    if (slider) {
      slider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value) || 0;
        if (numInput) numInput.value = val;
        this.updateFromInput(val);
      });
    }

    if (numInput) {
      numInput.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value) || 0;
        if (slider) slider.value = Math.min(30000, val);
        this.updateFromInput(val);
      });
    }

    presets.forEach(btn => {
      btn.addEventListener('click', () => {
        presets.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const val = parseFloat(btn.getAttribute('data-val')) || 3500;
        if (slider) slider.value = Math.min(30000, val);
        if (numInput) numInput.value = val;
        this.updateFromInput(val);
      });
    });

    const acCheckboxes = document.querySelectorAll('.tr-finder-ac-cb');
    acCheckboxes.forEach(cb => {
      cb.addEventListener('change', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'), 10);
        const ac = this.acList.find(a => a.id === id);
        if (ac) {
          ac.picked = e.target.checked;
          const row = e.target.closest('.tr-ac-row');
          if (row) {
            if (ac.picked) row.classList.add('ac-selected');
            else row.classList.remove('ac-selected');
          }
        }
        const val = parseFloat(numInput ? numInput.value : this.baseBill);
        this.updateFromInput(val);
      });
    });
  }

  updateFromInput(billAmount) {
    const data = this.calculate(billAmount);

    // Update Specs Bar
    const elReqKw = document.getElementById('trFinderSpecReqKw');
    const elRecKw = document.getElementById('trFinderSpecRecKw');
    const elKw = document.getElementById('trFinderSpecKw');
    const elGen = document.getElementById('trFinderSpecGen');
    const elCost = document.getElementById('trFinderSpecCost');
    const elSub = document.getElementById('trFinderSpecSub');
    const elNet = document.getElementById('trFinderSpecNet');

    if (elReqKw) elReqKw.textContent = `${data.requiredKw} kW`;
    if (elRecKw) elRecKw.textContent = `${data.kw} kW (${data.numPanels} Panels)`;
    if (elKw) elKw.textContent = `${data.requiredKw} kW Req. • ${data.kw} kW Rec. (${data.numPanels} Panels)`;
    if (elGen) elGen.textContent = `~${data.monthlyGenUnits} kWh / mo`;
    if (elCost) elCost.textContent = this.formatInr(data.grossCost);
    if (elSub) elSub.textContent = `${this.formatInr(data.subsidy)} Direct`;
    if (elNet) elNet.textContent = this.formatInr(data.netInvestment);

    // Update Normal Grid Card
    const elNormMonthly = document.getElementById('trFinderNormalMonthly');
    const elNormAnnual = document.getElementById('trFinderNormalAnnual');
    const elNorm30Yr = document.getElementById('trFinderNormal30Yr');

    if (elNormMonthly) elNormMonthly.innerHTML = `${this.formatInr(data.effectiveBill)} <span class="sfh-val-unit">/ mo</span>`;
    if (elNormAnnual) elNormAnnual.textContent = `${this.formatInr(data.effectiveBill * 12)} / year (+4% annual tariff hike)`;
    if (elNorm30Yr) elNorm30Yr.textContent = `-${this.formatLakhs(data.normal30YrTotal)}`;

    // Update Cash Option Card
    const elCashNet = document.getElementById('trFinderCashNet');
    const elCashSubCalc = document.getElementById('trFinderCashSubCalc');
    const elCashPayback = document.getElementById('trFinderCashPayback');
    const elCash30Yr = document.getElementById('trFinderCash30Yr');

    if (elCashNet) elCashNet.textContent = this.formatInr(data.netInvestment);
    if (elCashSubCalc) elCashSubCalc.textContent = `After ${this.formatInr(data.subsidy)} Central DBT Subsidy`;
    if (elCashPayback) elCashPayback.textContent = `${data.cashPaybackYears} Years`;
    if (elCash30Yr) elCash30Yr.textContent = `+${this.formatLakhs(data.cash30YrNetWealth)}`;

    // Update EMI Option Card
    const elEmiMonthly = document.getElementById('trFinderEmiMonthly');
    const elEmiBreakdown = document.getElementById('trFinderEmiBreakdown');
    const elEmiPayback = document.getElementById('trFinderEmiPayback');
    const elEmi30Yr = document.getElementById('trFinderEmi30Yr');

    if (elEmiMonthly) elEmiMonthly.innerHTML = `${this.formatInr(data.emiTotalMonthly)} <span class="sfh-val-unit">/ mo</span>`;
    if (elEmiBreakdown) elEmiBreakdown.textContent = `${this.formatInr(data.emi)} (5-Yr Solar EMI) + ~${this.formatInr(data.residualGridBill)} (Grid Fixed)`;
    if (elEmiPayback) elEmiPayback.textContent = `${data.emiPaybackYears} Years`;
    if (elEmi30Yr) elEmi30Yr.textContent = `+${this.formatLakhs(data.emi30YrNetWealth)}`;

    // Update Milestone Table Body
    const tbody = document.getElementById('trFinderMilestonesBody');
    if (tbody) {
      tbody.innerHTML = this.renderMilestoneRows(data.milestones);
    }
  }
}

// Global Export
window.TorrentRoiCapacityFinder = TorrentRoiCapacityFinder;
