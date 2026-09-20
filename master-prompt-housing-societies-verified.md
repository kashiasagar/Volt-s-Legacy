### 🔍 COMPARISON: "Solar for Homes" Prompt vs. Housing Societies Requirements

Before the corrected master prompt, here's what had to change and why — checked against current MNRE/GERC sources (Sept 2026):

| Element | Homes Page (Correct for Homes) | Housing Societies (Must Change) |
|---|---|---|
| **Subsidy mechanism** | PM Surya Ghar residential CFA: ₹30,000/kW (first 2 kW) + ₹18,000/kW (3rd kW) = ₹78,000 max at 3 kW, nil beyond 3 kW | GHS/RWA get a **flat ₹18,000/kW** on the *common facility* connection (₹19,800/kW in special-category states) — not the tiered residential slab, and not capped at 3 kW total |
| **Capacity cap** | Effectively caps at 3 kW per individual connection | Capped at **3 kW × number of houses** in the society, **and a hard ceiling of 500 kW overall**, whichever is lower |
| **Eligible connection** | Individual residential electricity connection | Only the **common-facility connection** (lifts, pumps, lighting, clubhouse, EV charging) — MNRE's June 7, 2024 operational guidelines (Clause 5(f)) explicitly bar using this connection to supply individual flats |
| **Module/cell requirement** | ALMM-listed modules | Same ALMM requirement, **plus a domestic content (DCR) requirement** — MNRE's 2025 amendment states only projects using domestically manufactured modules *and cells* qualify for CFA; non-DCR components at any stage make the whole installation ineligible |
| **Applicant** | Individual homeowner | RWA/GHS/Apartment Owner Association/Cooperative Housing Society — or, per a Nov 19, 2024 MNRE clarification, the **developer/promoter** where no RWA is yet constituted, subject to an undertaking to hand over the asset |
| **System cost basis** | Homes prompt used a flat ₹7.80/unit tariff and an informal ~₹58,600/kW effective cost | Society-scale systems (10 kW–500 kW range) price closer to current **turnkey C&I rates of ₹40,000–₹45,000/kW** (2026 market data), not residential small-system rates — the earlier Housing Societies build used ₹58,500/kW, which is high for this scale and should be revised down |
| **Tariff** | Hard-coded ₹7.80/unit | Must stay **editable per DISCOM/category** — GERC's FY 2026-27 order (effective April 1, 2026) kept scheduled rates unchanged for Torrent Power (Ahmedabad/Surat) and the four state DISCOMs, but rates are slab- and category-specific, not a single number |

---

### ☀️ CORRECTED MASTER PROMPT: "Solar for Housing Societies" Page — VOLT'S LEGACY SOLAR

**Goal**: Build a premium, high-converting, fully responsive "Solar for Housing Societies" (Group Housing Society / RWA Rooftop Solar) landing page, matching the "Solar for Homes" visual identity, with government-accurate PM Surya Ghar RWA/GHS common-facility CFA modeling, a society-scale financial calculator, and DCR/ALMM compliance messaging.

**Page URL**: `/solar-for-housing-societies`
**Page relationship**: Reached from `Our Expertise → Housing Societies → Explore Housing Societies`.

---

### 🎨 1. Design System (unchanged from Homes — brand consistency)
- Navy `#071530` / `#0f172a` · Gold `#f59e0b` / `#d97706` · Blue `#2563eb` / `#1d4ed8` / `#eff6ff` · Green `#16a34a` / `#15803d` / `#f0fdf4` · Red `#dc2626` / `#fef2f2`
- Fonts: `Outfit` (headings), `Plus Jakarta Sans` (body)
- Glassmorphism cards, `0 10px 30px rgba(7,21,48,0.08)` shadows, rounded 16–24px corners, one deliberate hero illustration rather than scattered motion

---

### 🧱 2. Core Sections

#### 1. Hero
- Badge: `☀️ Solar for Housing Societies`
- Headline: `"TURN YOUR SOCIETY'S ROOFTOP INTO A SHARED POWER ASSET."`
- Subheadline: `"Reduce common-area electricity costs with professionally engineered rooftop solar for lifts, water pumps, lighting, clubhouse facilities and EV charging infrastructure."`
- CTAs: `"CALCULATE SOCIETY SAVINGS →"` / `"GET FREE SOCIETY ASSESSMENT"`
- Trust bar: Common-Area Solar / PM Surya Ghar RWA Assistance / DISCOM Coordination / End-to-End EPC Support

#### 2. PM Surya Ghar RWA/GHS Subsidy Section — **government-verified figures**
- **Headline card**: `₹18,000 per kW` CFA for eligible GHS/RWA common-facility rooftop solar (₹19,800/kW in special-category states: Uttarakhand, Himachal Pradesh, J&K, Ladakh, NE states incl. Sikkim, A&N and Lakshadweep).
- **Cap card**: Eligible capacity = **3 kW × number of houses in the society**, capped at a **maximum of 500 kW overall** — whichever is lower. This cap is *inclusive of* any individual rooftop plants already installed by residents within the same GHS/RWA.
- **Eligibility card**: Connection must be the **common-facility connection only** (lifts, pumps, lighting, clubhouse, EV charging) — cannot supply individual flats. Applicant is normally the RWA/AOA/Cooperative Housing Society, or the developer/promoter (with a handover undertaking) where no such body yet exists.
- **Compliance card**: Only **ALMM-listed AND domestically manufactured (DCR) modules and solar cells** qualify for CFA — using non-DCR components anywhere in the installation makes the entire system ineligible.
- **Facility pill grid**: Lift · Water Pump · Corridor Lighting · Clubhouse · Security Systems · EV Charging · Community Facilities · Common Area Loads
- **Source note**: Cite MNRE's PM Surya Ghar: Muft Bijli Yojana operational guidelines and 2025 CFA amendment as the basis, and note figures are current as of the scheme's latest notification — confirm on the National Portal (pmsuryaghar.gov.in) before quoting to a customer.

#### 3. Society Solar Savings Calculator (`#calculator`)
- **Banner**: Calculator is consumption/tariff/design-driven — not a fixed "% bill reduction" claim.
- **Inputs**: Number of Flats/Houses, Monthly Common-Area Bill (₹), Electricity Tariff (₹/unit — editable, confirm with DISCOM), Available Shadow-Free Roof Area (sq. ft.), EV Chargers Planned, Lift Count, Water Pump Count, Special-Category State toggle (changes CFA rate to ₹19,800/kW).
- **Live outputs**: Demand-Based System Size, Roof-Area Capacity Limit, Scheme-Eligible Capacity Limit (3 kW × houses, max 500 kW), ⭐ Recommended System, Est. Annual Generation, Gross EPC Cost, Eligible PM Surya Ghar CFA, Net Society Investment.
- **3 Scenario cards**: (1) Continue Paying Grid Bill — annual/10-yr/25-yr outflow. (2) CAPEX Solar (highlighted) — net investment, annual savings, payback, 25-yr savings. (3) Solar Financing/RESCO — zero/low upfront, indicative monthly payment, monthly savings vs grid.
- **Milestone table**: Year 1, Payback Milestone, Year 10, Year 25 (Lifetime).
- **Mandatory on-page assumption note**: generation assumption, EPC cost/kW assumption, escalation rate, and "confirm exact CFA slab and tariff with DISCOM/National Portal before final quotation."

##### Corrected calculation formulas
- `Monthly_Units = Monthly_Bill / Tariff`
- `Demand_kW = Monthly_Units / 125` (≈125 kWh generated per kWp per month — India-average irradiation, ~4.1 units/kWp/day, adjust regionally)
- `Area_kW = Roof_Area_sqft / 100` (≈100 sq ft per kWp for elevated common-area mounting structures)
- `Scheme_Cap_kW = MIN(Houses × 3, 500)` — per MNRE's GHS/RWA CFA condition
- `Recommended_kW = MIN(Demand_kW, Area_kW, Scheme_Cap_kW)` — round to nearest 0.5 kW, minimum 1 kW
- `Annual_Generation_Units = Recommended_kW × 125 × 12`
- `CFA_Rate_per_kW = 18000` (general states) `or 19800` (special-category states)
- `Eligible_CFA_kW = MIN(Recommended_kW, Scheme_Cap_kW)`
- `CFA = Eligible_CFA_kW × CFA_Rate_per_kW`
- `Gross_EPC_Cost = Recommended_kW × Rate_per_kW`, where `Rate_per_kW` = **₹40,000–₹45,000** for society-scale (10–500 kW) turnkey systems in 2026 market conditions — **do not reuse the Homes page's small-system rate**, and treat this as an editable field since EPC pricing moves with module/steel prices and site complexity
- `Net_Investment = Gross_EPC_Cost − CFA`
- `Annual_Savings = Annual_Generation_Units × Tariff`
- `Payback_Years = Net_Investment / Annual_Savings`
- `25-Year_Escalated_Value = Annual_Savings × Σ(1 + Escalation_Rate)^y for y = 0 to 24`, with `Escalation_Rate` as an editable assumption (commonly modeled at 3–4% p.a. tariff growth; state this is an assumption, not a guarantee)
- `RESCO_Monthly_Payment` — set as an editable field per financier/RESCO quote; do not hard-code a fixed multiplier, since RESCO/PPA rates are negotiated per project

#### 4. PM Surya Ghar RWA Explainer (process flow)
Society → Common-Facility Connection → Capacity/Eligibility Check (3 kW/house, 500 kW cap, DCR compliance) → Application on National Portal (RWA/AOA or developer with undertaking) → DISCOM Technical Feasibility & Inspection → Installation & Net-Metering Commissioning → CFA Disbursement via DBT.

#### 5. Society Engineering Section
Cards: Lift Load, Water Pumping, Common Lighting, Clubhouse Load, EV Charging, Rooftop Structural Capacity.
Checklist: Shadow analysis, waterproofing protection, walkway access, fire-safety access, maintenance access, drainage, cable routing, inverter location, earthing, lightning protection.

#### 6. Society Process (6 steps)
01 Society Energy Audit → 02 Rooftop & Structural Survey → 03 Common-Load Analysis → 04 Solar Design + CFA Mapping (incl. DCR component sourcing check) → 05 Installation + DISCOM Coordination → 06 Commissioning + Long-Term O&M.

#### 7. FAQ Accordion (updated with verified answers)
- How much CFA can an RWA receive? → ₹18,000/kW (₹19,800/kW in special-category states), capped at 3 kW × number of houses or 500 kW, whichever is lower.
- Is the CFA for individual flats? → No — common-facility connection only.
- What components qualify? → ALMM-listed and domestically manufactured (DCR) modules and cells only.
- Who can apply? → The RWA/AOA/Cooperative Housing Society, or the developer/promoter with a handover undertaking if no such body exists yet.
- Can solar power lifts and pumps / include EV charging? → Yes, both are named eligible common facilities.
- What happens to surplus generation? → Governed by your DISCOM's net-metering regulations.
- Can the society finance the project? → Yes — CAPEX or RESCO/financing structures are both viable.
- Who handles DISCOM documentation and National Portal application? → Handled end-to-end by our team.

#### 8. Gujarat Solar Regulatory Check Module
- DISCOM selector: Torrent Power (Surat/Ahmedabad/Gandhinagar), DGVCL, MGVCL, PGVCL, UGVCL.
- Note: GERC's FY 2026-27 tariff order (effective April 1, 2026) kept scheduled rates unchanged for all these licensees, but exact ₹/unit figures are slab- and category-specific — never hard-code one number across DISCOMs.

#### 9. Government & Regulatory Framework Section
MNRE (PM Surya Ghar operational guidelines + 2025 CFA amendment, ALMM list) · Ministry of Power (Green Energy Open Access) · CEA (distributed-generation connectivity standards) · GERC (net metering and open access regulations, FY 2026-27 tariff order).

#### 10. Lead Form
Society Name*, RWA/Association Name, Contact Person*, WhatsApp*, City*, Pincode*, Number of Flats, Monthly Common Bill, Sanctioned Load, Rooftop Type, Rooftop Area, EV Chargers, Lift Count, Pump Count, Installation Address, Message. CTA: `"GET MY SOCIETY SOLAR ASSESSMENT →"`.

#### 11. Legal Disclaimer
All figures indicative; CFA rate, cap, eligibility, DCR requirements, DISCOM tariffs and net-metering rules are governed by MNRE's and GERC's current notifications and may change; confirm exact terms on the National Portal and with the DISCOM before quoting; not a subsidy guarantee, tax advice, or financing offer.

---

### 📚 Sources used for verification (Sept 2026)
- MNRE — PM-Surya Ghar: Muft Bijli Yojana operational guidelines (June 7, 2024) and 2025 CFA amendment notices
- MNRE Office Memorandum (Nov 19, 2024) — CFA to developers/promoters for GHS/RWA
- Gujarat Electricity Regulatory Commission — FY 2026-27 Tariff Order (effective April 1, 2026) for Torrent Power and state DISCOMs
- Current (2026) market turnkey EPC cost data for C&I/society-scale rooftop systems (₹40,000–45,000/kW)

**Note**: MNRE guidelines, CFA rates and caps are amended periodically. Before this page goes live, verify the current figures directly at pmsuryaghar.gov.in and mnre.gov.in, since scheme terms can change between this document's writing and deployment.
