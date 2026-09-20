/* ==========================================================================
   VOLT'S LEGACY SOLAR - Main Application & View Renderers
   ========================================================================== */

// Reusable SVG Icons
const SVG_ICONS = {
  home: `<svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  building: `<svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M16 18h.01"/></svg>`,
  factory: `<svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>`,
  sun: `<svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  grid: `<svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>`,
  battery: `<svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/><line x1="6" x2="6" y1="11" y2="13"/><line x1="10" x2="10" y1="11" y2="13"/><line x1="14" x2="14" y1="11" y2="13"/></svg>`,
  zap: `<svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  shield: `<svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  check: `<svg class="offering-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowRight: `<svg style="width:16px;height:16px;margin-left:4px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  mapPin: `<svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  phone: `<svg style="width:18px;height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg style="width:18px;height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  whatsapp: `<svg style="width:20px;height:20px;" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
  instagram: `<svg style="width:20px;height:20px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
  facebook: `<svg style="width:20px;height:20px;" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
};

// Projects Data Store - Real Engineering Case Studies & Landmark Installations
const PROJECTS_DATA = [
  {
    id: 1,
    slug: 'dhanjibhai-vaniya',
    clientName: 'DHANJIBHAI VANIYA',
    name: '3.66 kW Elevated Rooftop Solar Canopy',
    category: 'canopy',
    filterTags: 'canopy residential',
    subType: 'Elevated HDGI Canopy',
    systemType: 'Elevated Rooftop Solar',
    capacity: '3.66 kW',
    capacityNum: 3.66,
    moduleSpecs: 'Premier 610 Wp Monocrystalline',
    moduleCount: '6 Modules',
    moduleFormula: '610 Wp × 6 Nos = 3.66 kW',
    tiltAngle: 'Custom Sloped Array',
    azimuth: 'South-Facing',
    location: 'Surat, Gujarat',
    coordinates: 'Surat (DGVCL / Torrent Power Grid)',
    structureType: 'Elevated HDGI Canopy over Water Tank',
    clearanceHeight: "5' to 8' (10' total vertical column height)",
    rafterLength: "16' Sloped Rafters",
    spanWidth: "12' Array Width (4 Purlin Lines)",
    lightningProtection: 'Top-Right Mounted Early-Streamer Lightning Arrester + Chemical Earthing',
    estimatedMonthlyUnits: '~450 kWh / month',
    estimatedAnnualGen: '~5,400 kWh / year',
    co2Offset: '4.3 Tonnes / year',
    image: 'assets/projects/dhanjibhai-p2.png',
    description: 'Precision-engineered 3.66 kW elevated rooftop solar canopy structure clearing the overhead water tank while providing full, shaded terrace usability. Features 6 Premier 610Wp high-output monocrystalline modules with dedicated structural lightning protection and heavy-duty parapet clamp anchoring.',
    highlights: [
      'Elevated structure with 5ft to 8ft clearance perfectly spanning over the overhead water tank',
      'High-yield Premier 610 Wp monocrystalline modules delivering ~450 units/month',
      'Hot-Dip Galvanized Iron (HDGI) 16ft rafters with 4-line purlin grid engineered for high wind loads',
      'Dual anchoring system combining heavy concrete slab baseplates and reinforced parapet wall brackets',
      'Integrated top-mounted structural lightning arrester with dedicated chemical earthing pit'
    ],
    gallery: [
      { src: 'assets/projects/dhanjibhai-p1.png', title: '2D Roof Plan & Electrical Layout', tag: '2D CAD Plan', desc: 'Panel orientation: 610 Wp × 6 Nos = 3.66 kW with cable routing.' },
      { src: 'assets/projects/dhanjibhai-p2.png', title: '3D Front Perspective View (Overhead Tank Clearance)', tag: '3D Perspective', desc: 'Canopy height clearance from 5ft front to 8ft rear over the water tank.' },
      { src: 'assets/projects/dhanjibhai-p3.png', title: '3D Top Aerial Isometric View', tag: '3D Array', desc: '6-module array geometry with corner-mounted lightning arrester.' },
      { src: 'assets/projects/dhanjibhai-p4.png', title: '3D Rear Angle Perspective', tag: '3D Isometric', desc: 'Rear terrace view showing open headroom and water tank clearance.' },
      { src: 'assets/projects/dhanjibhai-p5.png', title: 'Structural Column Height Details', tag: 'Elevations', desc: 'Front columns at 5ft and rear vertical columns at 10ft anchored to wall.' },
      { src: 'assets/projects/dhanjibhai-p6.png', title: 'Rafter Slope & Structural Cross-Section', tag: 'Structural', desc: '16ft main rafter slope engineered for optimal rain runoff and seasonal angle.' },
      { src: 'assets/projects/dhanjibhai-p7.png', title: 'Purlin Spacing & Framing Grid', tag: 'Framing Grid', desc: '12ft array span width with 4 equidistant HDGI purlin lines.' },
      { src: 'assets/projects/dhanjibhai-p8.png', title: '3D Steel Skeleton Framing Isometric', tag: 'Superstructure', desc: 'Complete hot-dip galvanized iron framing layout prior to module mounting.' }
    ]
  },
  {
    id: 2,
    slug: 'santoshbhai',
    clientName: 'SANTOSHBHAI',
    name: '4.8 kW Staggered High-Rise Solar Canopy',
    category: 'canopy',
    filterTags: 'canopy residential',
    subType: 'Staggered High-Rise Canopy',
    systemType: 'Elevated Rooftop Solar',
    capacity: '4.8 kW',
    capacityNum: 4.8,
    moduleSpecs: 'Premier 600 Wp Monocrystalline',
    moduleCount: '8 Modules',
    moduleFormula: '600 Wp × 8 Nos = 4.8 kW',
    tiltAngle: '15° Optimal Solar Tilt',
    azimuth: '0° True South',
    location: 'Surat, Gujarat',
    coordinates: 'Lat: 21.165987, Long: 72.861821',
    googleMapsUrl: 'https://maps.google.com/?q=21.165987,72.861821',
    structureType: 'Staggered Elevated HDGI Structure',
    clearanceHeight: "7'5\" to 13'7\" (Spanning Staircase Cabin & Dual Tanks)",
    rafterLength: "22'9\" Sloped Rafters",
    spanWidth: "12'3\" Array Width (Dual 11'8\" & 10'4\" cross bays)",
    lightningProtection: 'Twin-Terminal Structural Lightning Arrester + Copper Clad Grounding',
    estimatedMonthlyUnits: '~620 kWh / month',
    estimatedAnnualGen: '~7,440 kWh / year',
    co2Offset: '5.9 Tonnes / year',
    image: 'assets/projects/santoshbhai-p2.png',
    description: 'Advanced 4.8 kW elevated rooftop installation featuring 8 Premier 600Wp panels configured with a 15° optimal solar tilt angle. Designed to span across a terrace staircase cabin with column heights up to 13\'7", maximizing energy harvest without blocking natural roof ventilation or access.',
    highlights: [
      'Engineered for 15° optimal solar tilt at GPS 21.165987, 72.861821 in Surat',
      '8 Premier 600 Wp high-output modules delivering ~620 units/month',
      'Staggered column elevation (7ft 5in to 13ft 7in) clearing staircase headhouse and two water tanks',
      'Extended 22ft 9in rafter slope with 12ft 3in array width providing ample shade to the terrace',
      'Central roof skylight cutout preserving natural daylighting into the building staircase'
    ],
    gallery: [
      { src: 'assets/projects/santoshbhai-p1.png', title: '2D Layout Plan & Geolocation Coordinates', tag: '2D CAD Plan', desc: 'Premier 600 Wp × 8 Nos = 4.8 kW, Tilt 15°, Lat: 21.165987, Long: 72.861821.' },
      { src: 'assets/projects/santoshbhai-p2.png', title: '3D Perspective View (Headroom Clearance)', tag: '3D Perspective', desc: 'Canopy spanning the roof headroom with 7\'5" front to 13\'7" rear clearance.' },
      { src: 'assets/projects/santoshbhai-p3.png', title: '3D Rear Perspective & Staircase Cabin', tag: '3D Rear', desc: 'Rear view showing structural clearance over staircase room and water tanks.' },
      { src: 'assets/projects/santoshbhai-p4.png', title: '3D Purlin Framing Grid on Sloped Rafters', tag: 'Framing Grid', desc: 'Heavy HDGI C-channels with skylight vent cutout for terrace access.' },
      { src: 'assets/projects/santoshbhai-p5.png', title: 'Column Heights & Anchor Elevation Details', tag: 'Elevations', desc: 'Staggered columns: 7\'9", 10\'6", and 13\'3" anchored to parapet and floor slab.' },
      { src: 'assets/projects/santoshbhai-p6.png', title: 'Main Rafter Span Dimensions (22ft 9in)', tag: 'Structural', desc: 'Continuous 22\'9" rafter girder delivering precision 15-degree solar inclination.' },
      { src: 'assets/projects/santoshbhai-p7.png', title: 'Top Purlin Spacing & 12ft 3in Width', tag: 'Top Plan', desc: 'Overhead view showing mounting spacing for 8 large-format 600Wp modules.' },
      { src: 'assets/projects/santoshbhai-p8.png', title: 'Cross-Girder & Bracing Dimensions', tag: 'Truss Details', desc: 'Cross bracing spans (11\'8" and 10\'4") providing rigid wind resistance.' }
    ]
  },
  {
    id: 3,
    slug: 'lagarbhai-ladumor',
    clientName: 'LAGARBHAI LADUMOR',
    name: '7.32 kW Super-Elevated Terrace Pergola',
    category: 'pergola',
    filterTags: 'pergola dual-meter residential',
    subType: 'Super-Elevated Terrace Pergola',
    systemType: 'Dual Consumer Solar Pergola',
    capacity: '7.32 kW (3.66 + 3.66 kW)',
    capacityNum: 7.32,
    moduleSpecs: 'Premier 610 Wp High-Efficiency Monocrystalline',
    moduleCount: '12 Modules (Twin 6-Module Arrays)',
    moduleFormula: '610 Wp × 12 Nos = 3.66 kW + 3.66 kW',
    tiltAngle: 'Engineered Canopy Slope',
    azimuth: 'South-Facing',
    location: 'Surat, Gujarat',
    coordinates: 'Lat: 21.191300, Long: 72.885946',
    googleMapsUrl: 'https://maps.google.com/?q=21.191300,72.885946',
    structureType: 'Super-Elevated Full Terrace Pergola (Dual Metering)',
    clearanceHeight: "6'8\" to 10'11\" Full Walkable Headroom",
    rafterLength: "15' Sloped Rafters",
    spanWidth: "23'8\" Wide Multi-Bay Structure",
    lightningProtection: 'Twin Top-Mounted Early-Streamer Lightning Arresters + Dual Grounding',
    estimatedMonthlyUnits: '~940 kWh / month',
    estimatedAnnualGen: '~11,280 kWh / year',
    co2Offset: '8.9 Tonnes / year',
    image: 'assets/projects/lagarbhai-p2.png',
    description: 'High-capacity 7.32 kW dual-meter residential rooftop solar pergola providing 100% usable terrace shelter beneath. Engineered with 12 Premier 610Wp modules in twin 6-module arrays, clearing dual overhead water tanks with 10\'11" column elevation, heavy baseplates, and dual early-streamer lightning arresters.',
    highlights: [
      'Dual consumer system setup: 3.66 kW + 3.66 kW synchronized net metering',
      '12 Premier 610 Wp monocrystalline modules producing over 940 units/month',
      'Huge 23ft 8in wide structural pergola span creating a covered terrace room underneath',
      'Column heights ranging from 6\'8" to 10\'11", allowing completely unobstructed door and tank access',
      'Twin rooftop lightning arresters providing 360-degree storm surge protection'
    ],
    gallery: [
      { src: 'assets/projects/lagarbhai-p1.png', title: '2D Layout Plan & Dual Array Configuration', tag: '2D CAD Plan', desc: 'Twin 6-module arrays (3.66 + 3.66 kW), GPS Lat: 21.191300, Long: 72.885946.' },
      { src: 'assets/projects/lagarbhai-p2.png', title: '3D Aerial Perspective View with Panels', tag: '3D Perspective', desc: '12 Premier 610Wp panels covering half terrace while maintaining dual tank clearance.' },
      { src: 'assets/projects/lagarbhai-p3.png', title: '3D Underside View (Full Terrace Headroom)', tag: '3D Headroom', desc: 'Shows complete open terrace usability, clear door opening, and shaded walkway.' },
      { src: 'assets/projects/lagarbhai-p4.png', title: '3D Rear Perspective & Twin Lightning Arresters', tag: '3D Rear', desc: 'Dual lightning arresters mounted on rear structure columns for comprehensive surge safety.' },
      { src: 'assets/projects/lagarbhai-p5.png', title: '3D Superstructure Framing Grid', tag: 'Framing Grid', desc: 'Heavy HDGI framing network spanning 23\'8" with diagonal stiffening gussets.' },
      { src: 'assets/projects/lagarbhai-p6.png', title: 'Column Heights & Wall Anchor Elevations', tag: 'Elevations', desc: 'Column measurements: 6\'8", 8\'1", and 10\'11" with structural base plates.' },
      { src: 'assets/projects/lagarbhai-p7.png', title: '3-Bay Main Rafter System (15ft Slope)', tag: 'Structural', desc: 'Three longitudinal rafter lines spanning 15ft across the terrace.' },
      { src: 'assets/projects/lagarbhai-p8.png', title: 'Longitudinal Front Elevation (23ft 8in Span)', tag: 'Front View', desc: '23\'8" total structural width with multi-column support.' }
    ]
  },
  {
    id: 4,
    slug: 'nagjibhai-patel',
    clientName: 'NAGJIBHAI PATEL',
    name: '8.82 kW Multi-Tank High-Rise Solar Canopy',
    category: 'canopy',
    filterTags: 'canopy dual-meter residential',
    subType: 'Multi-Tank High-Rise Canopy',
    systemType: 'High-Rise Rooftop Solar',
    capacity: '8.82 kW (4.41 + 4.41 kW)',
    capacityNum: 8.82,
    moduleSpecs: 'Adani 630 Wp High-Efficiency Modules',
    moduleCount: '14 Modules (Twin 7-Module Arrays)',
    moduleFormula: '630 Wp × 14 Nos = 4.41 kW + 4.41 kW',
    tiltAngle: 'High-Yield Angle',
    azimuth: '0° True South Facing',
    location: 'Surat, Gujarat',
    coordinates: 'Lat: 21.167424, Long: 72.882825',
    googleMapsUrl: 'https://maps.google.com/?q=21.167424,72.882825',
    structureType: 'Multi-Bay High-Rise Elevated Canopy spanning 5 Water Tanks',
    clearanceHeight: "High-Rise Canopy Clearing Cluster of 5 Water Tanks",
    rafterLength: "Extended Multi-Bay Rafter Framing",
    spanWidth: "Twin Symmetrical 7-Panel Banks",
    lightningProtection: 'Twin Heavy-Duty Copper Spike Lightning Arresters',
    estimatedMonthlyUnits: '~1,150 kWh / month',
    estimatedAnnualGen: '~13,800 kWh / year',
    co2Offset: '10.8 Tonnes / year',
    image: 'assets/projects/nagjibhai-p2.png',
    description: 'Massive 8.82 kW residential rooftop power plant utilizing 14 high-efficiency Adani 630Wp modules. Designed to clear an intricate cluster of 5 water storage tanks while maintaining True South 0° azimuth orientation for maximum annual kilowatt-hour yield, reinforced by parapet clamp brackets and dual lightning protection.',
    highlights: [
      'Dual array setup: 4.41 kW + 4.41 kW = 8.82 kW powered by Adani 630 Wp modules',
      'True South 0° azimuth alignment for maximum peak-sun generation in Gujarat',
      'Elevated multi-post structure spanning above five overhead water tanks without shadow interference',
      'Twin symmetrical 7-panel banks with integrated service cutout for maintenance access',
      'Generates ~1,150 units/month, eliminating hefty residential slab electricity bills'
    ],
    gallery: [
      { src: 'assets/projects/nagjibhai-p1.png', title: '2D Layout Master Plan & Compass Orientation', tag: '2D CAD Plan', desc: '14 Modules of Adani 630Wp, True South Azimuth 0°, Lat: 21.167424, Long: 72.882825.' },
      { src: 'assets/projects/nagjibhai-p2.png', title: '3D Aerial View Showing 14 High-Power Panels', tag: '3D Perspective', desc: 'Twin 7-panel wings positioned high above the terrace roofline.' },
      { src: 'assets/projects/nagjibhai-p3.png', title: '3D Rear Perspective & Structure Bracing', tag: '3D Rear', desc: 'Heavy duty column structure with dual mid-array service cutouts.' },
      { src: 'assets/projects/nagjibhai-p4.png', title: '3D Underside View Over 5 Overhead Tanks', tag: '3D Clearance', desc: 'Shows structural clearance completely above the cluster of 5 water tanks.' },
      { src: 'assets/projects/nagjibhai-p5.png', title: '3D Isometric View from Staircase Side', tag: '3D Isometric', desc: 'Anchoring details into building structural columns and parapet walls.' },
      { src: 'assets/projects/nagjibhai-p6.png', title: 'Heavy-Duty 3-Bay Purlin Structure Skeleton', tag: 'Framing Grid', desc: 'High-tensile steel framing skeleton with twin lightning arrester masts.' }
    ]
  },
  {
    id: 5,
    slug: 'balbirsingh',
    clientName: 'BALBIRSINGH',
    name: '7.32 kW Architectural Solar Pergola',
    category: 'pergola',
    filterTags: 'pergola dual-meter residential',
    subType: 'Architectural Solar Pergola',
    systemType: 'Architectural Rooftop Pergola',
    capacity: '7.32 kW (3.66 + 3.66 kW)',
    capacityNum: 7.32,
    moduleSpecs: 'Premier 610 Wp High-Efficiency Monocrystalline',
    moduleCount: '12 Modules (Twin 6-Module Arrays)',
    moduleFormula: '610 Wp × 12 Nos = 3.66 kW + 3.66 kW',
    tiltAngle: '15° Optimal Solar Tilt',
    azimuth: '0° True South Facing',
    location: 'Surat, Gujarat',
    coordinates: 'Lat: 21.162245, Long: 72.880717',
    googleMapsUrl: 'https://maps.google.com/?q=21.162245,72.880717',
    structureType: 'Elevated Rooftop Pergola with Hybrid Pedestal & Wall Mounts',
    clearanceHeight: "9'8\", 11'8\", 13'7\" Staggered Columns (Full usable living space)",
    rafterLength: "18'10\" Heavy Cross-Girder Truss",
    spanWidth: "23'5\" Full Purlin Lattice Span",
    lightningProtection: 'Twin Structural Lightning Arresters with Isolated Down-Conductors',
    estimatedMonthlyUnits: '~950 kWh / month',
    estimatedAnnualGen: '~11,400 kWh / year',
    co2Offset: '9.1 Tonnes / year',
    image: 'assets/projects/balbirsingh-p2.png',
    description: 'Masterpiece 7.32 kW elevated solar pergola installation engineered to transform the rooftop into a fully usable, weather-protected terrace living space. Featuring 12 Premier 610Wp modules with a 15° tilt, 0° azimuth, dual heavy cross-girders, dual lightning arresters, and vibration-damped HDGI column mounts.',
    highlights: [
      'Dual consumer system: 3.66 kW + 3.66 kW powered by Premier 610 Wp modules',
      'Precision 15° tilt and True South 0° azimuth orientation at GPS 21.162245, 72.880717',
      'Multi-height columns (9ft 8in, 11ft 8in, 13ft 7in) spanning across staircase cabin and terrace',
      'Heavy 18ft 10in cross-girder truss supporting a 23ft 5in wide structural purlin grid',
      'Delivers ~950 units/month while shielding the rooftop terrace from intense sun and monsoon rains'
    ],
    gallery: [
      { src: 'assets/projects/balbirsingh-p1.png', title: '2D Engineering Master Plan & GPS Coordinates', tag: '2D CAD Plan', desc: '12 Modules Premier 610Wp, Tilt 15°, Azimuth 0°, Lat: 21.162245, Long: 72.880717.' },
      { src: 'assets/projects/balbirsingh-p2.png', title: '3D Perspective View (10\'4" to 13\'8" Clearance)', tag: '3D Perspective', desc: 'Full rooftop terrace pergola shelter with high-clearance columns.' },
      { src: 'assets/projects/balbirsingh-p3.png', title: '3D Underside Canopy View', tag: '3D Headroom', desc: 'Shows complete open terrace usability, clear door opening, and shaded patio.' },
      { src: 'assets/projects/balbirsingh-p4.png', title: '3D Front Isometric with Dual 6-Panel Arrays', tag: '3D Front View', desc: 'Twin arrays facing true south with integrated lightning surge arresters.' },
      { src: 'assets/projects/balbirsingh-p5.png', title: '3D Side Elevation View', tag: 'Side Elevation', desc: 'Shows 15-degree panel slope and stepped column anchoring.' },
      { src: 'assets/projects/balbirsingh-p6.png', title: '3D Angle Perspective View', tag: '3D Isometric', desc: 'View from parapet corner highlighting clean structural geometry.' },
      { src: 'assets/projects/balbirsingh-p7.png', title: '3D Superstructure Framing Skeleton', tag: 'Framing Grid', desc: 'Hot-dip galvanized purlin and rafter network prior to panel clamping.' },
      { src: 'assets/projects/balbirsingh-p8.png', title: 'Structural Column Dimensions (9\'8", 11\'8", 13\'7")', tag: 'Elevations', desc: 'Exact column lengths: 13\'7", 11\'8", and 9\'8" with base pedestals.' },
      { src: 'assets/projects/balbirsingh-p9.png', title: 'Heavy Cross-Girder Truss (18ft 10in Span)', tag: 'Structural', desc: '18\'10" heavy primary steel beam spanning across the building walls.' },
      { src: 'assets/projects/balbirsingh-p10.png', title: 'Full Purlin Lattice Structure (23ft 5in Width)', tag: 'Top Plan', desc: '23\'5" total purlin width providing rigid mounting for 12 solar panels.' }
    ]
  }
];

// Blog Insights Data Store
const BLOGS_DATA = [
  {
    id: 1,
    category: 'Subsidy Guide',
    date: 'August 2026',
    readTime: '4 min read',
    title: 'PM Surya Ghar Muft Bijli Yojana: Complete Subsidy & Application Guide',
    image: 'assets/blog-pm-surya-ghar.jpg',
    summary: 'Everything Indian homeowners need to know about claiming up to ₹78,000 central government subsidy for residential rooftop solar installations.',
    content: `The Government of India's PM Surya Ghar: Muft Bijli Yojana provides significant financial incentives for residential rooftop solar installations across India. Under this scheme, eligible homeowners receive direct DBT (Direct Benefit Transfer) subsidies credited straight to their linked bank accounts within 30 days of project commissioning and net meter installation.

Key Highlights of the PM Surya Ghar Subsidy Structure:
• Up to 2 kWp Capacity: ₹30,000 per kW (₹60,000 max for 2 kW).
• Additional 1 kWp Capacity: ₹18,000 for the 3rd kW.
• Maximum Central Financial Assistance (CFA): ₹78,000 for all systems 3 kWp and larger.

Eligibility & Compliance Checklist:
1. The rooftop solar plant must be installed on a residential household property with an active individual domestic electricity connection.
2. Must deploy ALMM-listed (Approved List of Models & Manufacturers) and Made-in-India DCR (Domestic Content Requirement) solar photovoltaic modules.
3. The installation must be executed through a registered MNRE vendor.

At VOLT'S LEGACY SOLAR, our turnkey engineering team manages the complete end-to-end process: from precision shadow-free roof layout and structural installation to DISCOM inspection, bi-directional net meter commissioning, and National Portal subsidy filing.`
  },
  {
    id: 2,
    category: 'Solar Technology',
    date: 'August 2026',
    readTime: '5 min read',
    title: 'N-Type TOPCon vs Mono PERC: Why 600W+ Bifacial Modules Deliver Higher ROI',
    image: 'assets/blog-topcon-modules.jpg',
    summary: 'Explore why next-generation N-Type TOPCon bifacial panels outperform traditional Mono PERC cells in high-temperature Indian climates.',
    content: `When investing in a solar power plant intended to operate for 30 years, solar cell technology selection directly impacts lifetime financial yield. In recent years, N-Type TOPCon (Tunnel Oxide Passivated Contact) has replaced legacy P-type Mono PERC as the gold standard in Tier-1 utility and rooftop solar engineering.

Why N-Type TOPCon Outperforms in Indian Weather:
1. Superior Temperature Coefficient: In hot Indian summer months where rooftop ambient temperatures exceed 45°C, solar cells heat up past 65°C. TOPCon features a low temperature coefficient of -0.30%/°C compared to -0.38%/°C in Mono PERC, delivering up to 3–5% higher daily energy harvest under peak sun.
2. Ultra-Low Annual Degradation: Traditional P-type cells suffer from Light-Induced Degradation (LID) and LeTID. N-type silicon eliminates boron-oxygen defects, resulting in only 1.0% first-year degradation and ≤0.40% annual degradation over 30 years.
3. Bifacial Energy Gain: TOPCon modules feature transparent double-glass architecture with bifaciality exceeding 80–85%. Reflected ambient light from RCC white-painted roofs produces an additional 8% to 15% bonus energy generation.
4. Lower Balance of System (BOS) Cost: Higher-wattage 600W+ panels mean fewer total modules, fewer mounting brackets, fewer DC string connectors, and faster installation speeds.`
  },
  {
    id: 3,
    category: 'Commercial Solar',
    date: 'July 2026',
    readTime: '5 min read',
    title: 'How Commercial & Industrial Facilities Save Millions with Accelerated Depreciation',
    image: 'assets/blog-commercial-industrial.jpg',
    summary: 'Discover how Section 32 of the Indian Income Tax Act allows 40% accelerated depreciation on commercial solar power assets in Year 1.',
    content: `Commercial establishments, manufacturing plants, cold storages, and educational institutions in India can drastically reduce corporate tax liabilities while hedging against escalating HT/LT grid power tariffs.

Key Commercial Solar Incentives in India:
• 40% Accelerated Depreciation (AD): Under Section 32 of the Income Tax Act, businesses can claim 40% tax depreciation on the total capitalized solar asset value in the first financial year (20% if commissioned in the second half of the fiscal year), significantly lowering taxable profits.
• Sub-3-Year Payback Period: Commercial tariffs across Gujarat DISCOMs (Torrent Power, DGVCL, PGVCL) range between ₹7.50 and ₹9.20 per unit. A well-engineered rooftop solar system generates electricity at a levelized cost (LCOE) below ₹1.80/unit, producing rapid capital payback within 2.5 to 3.5 years.
• Green Building Certification & ESG Compliance: Rooftop solar assists commercial facilities in achieving LEED, IGBC, and GRIHA green building certifications while fulfilling corporate ESG (Environmental, Social, and Governance) targets.

VOLT'S LEGACY SOLAR engineers industrial-grade rooftop installations equipped with HT line integration, zero-export protection devices, and automated DG-synchronization controllers.`
  },
  {
    id: 4,
    category: 'Housing Societies',
    date: 'July 2026',
    readTime: '6 min read',
    title: 'Solar for Housing Societies: How RWAs Slash Common Area Bills by 85%',
    image: 'assets/blog-housing-society.jpg',
    summary: 'A step-by-step roadmap for Managing Committees & RWAs to eliminate expensive maintenance bills for elevators, water pumps, and clubhouse amenities.',
    content: `Common-area electricity bills are among the highest recurring expenses for apartment societies and residential welfare associations (RWAs). Between continuous elevator operations, underground borewell pumps, corridor lighting, and new EV charging stations, monthly utility bills frequently range from ₹40,000 to ₹3,00,000+.

How Rooftop Solar Transforms Society Financials:
1. Dedicated Common Meter Net-Metering: Under state net-metering regulations, solar generation is synchronized directly to the society's three-phase common facility electricity meter, offsetting high-tariff commercial-slab grid units.
2. Central Government CFA for Societies: Under PM Surya Ghar, Group Housing Societies (GHS) and RWAs are eligible for a direct capital grant of ₹18,000 per kW (up to 3 kW per individual apartment, capped at 500 kW total common facility capacity).
3. Sinking Fund Preservation: By cutting common utility bills by up to 85%, societies can redirect collected maintenance charges into long-term infrastructure reserves, painting, and security enhancements rather than sending funds to power utilities.
4. Society AGM Resolution & Legal Process: VOLT'S LEGACY SOLAR provides complete handholding for society management committees, including detailed financial feasibility presentations for AGM approvals, DISCOM structural safety clearances, and net-metering liaisoning.`
  },
  {
    id: 5,
    category: 'Engineering',
    date: 'June 2026',
    readTime: '6 min read',
    title: 'On-Grid vs Hybrid Solar Systems: Which is Right for Your Property?',
    image: 'assets/blog-hybrid-solar.jpg',
    summary: 'A comprehensive technical comparison between grid-tied solar, battery-backed hybrid systems, and off-grid solutions for Indian conditions.',
    content: `Choosing the right solar system architecture depends on your geographic location, grid reliability, and power backup requirements. The two dominant configurations installed across India are On-Grid (Grid-Tied) and Hybrid solar systems.

1. On-Grid Solar Systems (Maximum Financial ROI):
• Operates strictly in parallel with the public electrical grid through a bi-directional net meter.
• Lowest initial capital cost and quickest payback (typically 3 to 4 years).
• Excess daytime generation exports directly to the grid, earning credits against night-time usage.
• Crucial Note: For anti-islanding safety, on-grid systems automatically shut down during grid power outages to protect linemen working on distribution wires.

2. Hybrid Solar Systems (Continuous Uninterrupted Power):
• Combines solar generation, grid interaction, and advanced Lithium-ion (LiFePO4) battery storage in a single smart inverter architecture.
• When grid power fails, the hybrid inverter switches seamlessly (<10 milliseconds) to battery backup mode, keeping critical loads like refrigerators, lights, fans, computers, and medical equipment running.
• Ideal for areas experiencing frequent load shedding, voltage fluctuations, or commercial premises requiring uninterrupted operations.`
  },
  {
    id: 6,
    category: 'Net Metering & Policy',
    date: 'June 2026',
    readTime: '5 min read',
    title: 'Gujarat Net Metering & Torrent Power Solar Banking: Step-by-Step Guide',
    image: 'assets/blog-net-metering.jpg',
    summary: 'Demystifying bi-directional meters, energy banking cycles, fixed charges, and DISCOM synchronization across Torrent Power and GUVNL.',
    content: `Net metering is the regulatory framework that makes rooftop solar financially viable for Indian consumers. Instead of storing surplus daytime solar energy in costly battery banks, the public grid acts as a virtual battery.

How Bi-Directional Net-Metering Operates in Practice:
1. Two-Way Energy Flow: When your rooftop solar generates more power than your home or factory consumes, excess units flow into the DISCOM grid. The bi-directional meter records exported units.
2. Night-Time Consumption: When the sun sets, your property pulls electricity from the grid as usual. The meter records imported units.
3. Net Billing Calculation: At the end of the monthly billing cycle, your DISCOM bill is calculated strictly on (Imported Units – Exported Units). If generation exceeds consumption, the surplus units are banked and carried forward to subsequent billing cycles.
4. DISCOM Application & Inspection Process: In Gujarat, applications are processed via the unified National Portal and DISCOM portals (Torrent Power, DGVCL, PGVCL, MGVCL, UGVCL). Technical feasibility approval, plant installation, DISCOM engineer site testing, and bi-directional meter sealing are managed end-to-end by VOLT'S LEGACY SOLAR.`
  },
  {
    id: 7,
    category: 'Maintenance & Operations',
    date: 'May 2026',
    readTime: '4 min read',
    title: 'Solar Panel Cleaning & Maintenance: How to Prevent 20% Soiling Losses',
    image: 'assets/blog-panel-cleaning.jpg',
    summary: 'Practical maintenance strategies, cleaning frequencies, and preventive safety tips to keep your solar panels generating at 99%+ efficiency.',
    content: `Dust, vehicular exhaust, airborne construction particles, and bird droppings form a thin opaque film over solar glass known as 'soiling'. In industrial and urban environments across India, uncleaned solar panels can lose anywhere between 15% to 25% of their peak power output within 30 to 45 days.

Best Practices for Solar Cleaning & Preventative Care:
1. Recommended Cleaning Frequency: Clean residential rooftop modules once every 10 to 14 days during dry seasons. For industrial facilities near highways or textile/chemical clusters, weekly washdowns are advised.
2. Optimal Timing to Avoid Thermal Shock: Always clean solar modules early in the morning before 8:30 AM or late in the afternoon after 5:30 PM. Spraying cold water onto panels heated by midday sun can cause micro-cracks in solar cells and shatter tempered glass.
3. Equipment & Water Quality: Use demineralized (TDS < 150 ppm) or soft water with soft microfiber brushes or non-abrasive wipers. Never use harsh abrasive chemicals, wire brushes, or high-pressure power washers that can strip the anti-reflective coating.
4. Inverter Health Monitoring: Check your smart inverter app weekly. Modern inverters provide real-time string voltage and daily generation curves, allowing you to instantly identify string mismatch, shading, or tripping.`
  },
  {
    id: 8,
    category: 'Solar Financing',
    date: 'May 2026',
    readTime: '5 min read',
    title: 'Zero Down-Payment Solar Financing: 5-Year Concessional Bank Loans Explained',
    image: 'assets/blog-solar-financing.jpg',
    summary: 'How homeowners can switch to solar with zero upfront friction through collateral-free PSU bank loans at 7.0%–8.5% interest rates.',
    content: `High upfront capital cost is no longer a barrier to adopting clean solar energy. Under the PM Surya Ghar initiative, leading nationalized banks (including State Bank of India, Punjab National Bank, Canara Bank, and Bank of Baroda) offer dedicated collateral-free solar loans with rapid digital sanction.

Key Loan Highlights for Residential Solar:
• Concessional Interest Rate: Starting at Repo Rate + 0.5% (typically 7.00% to 8.50% p.a.), significantly lower than standard personal loans.
• Zero Collateral Required: The rooftop solar equipment itself serves as the hypothecated asset; no residential property mortgage is required.
• Tenures Up to 5 to 7 Years: Flexible repayment tenures enable comfortable monthly installments.

The Math: Why EMI Solar is Cheaper Than Continuing with Grid Power:
For a standard 4.2 kW system (reducing an average ₹3,500 monthly electricity bill to ₹450), the 5-year EMI on the net investment is approximately ₹3,400/month. The immediate grid bill savings of ~₹3,050/month effectively fund the entire loan repayment. After Year 5 when the loan is fully paid off, the homeowner enjoys completely free solar electricity for the remaining 25+ years of the plant's operational life.`
  }
];

// Modal Management
class ModalManager {
  constructor() {
    this.overlay = document.getElementById('appModalOverlay');
    this.container = document.getElementById('appModalContent');
    this.closeBtn = document.getElementById('appModalClose');

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.close();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay?.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(htmlContent) {
    if (!this.overlay || !this.container) return;
    this.container.innerHTML = htmlContent;
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --------------------------------------------------------------------------
// PAGE VIEW RENDERERS
// --------------------------------------------------------------------------

// 1. HOME VIEW
function renderHomeView() {
  document.title = "VOLT'S LEGACY SOLAR | Premium Solar Energy Solutions";

  return `
    <!-- HERO SECTION (CLEAN SINGLE HERO IMAGE DISPLAY) -->
    <section class="hero-section" id="hero">
      <div class="hero-carousel">
        <!-- Main Solar Hero Image -->
        <div class="hero-slide hero-slide-1 active"></div>
      </div>
    </section>

    <!-- TRUST STRIP -->
    <div class="trust-strip">
      <div class="container">
        <div class="trust-strip-inner">
          <div class="trust-pill">
            <div class="trust-pill-icon">${SVG_ICONS.shield}</div>
            <span class="trust-pill-text">Quality You Can Trust. Energy You Can Rely On.</span>
          </div>
          <div class="trust-pill">
            <div class="trust-pill-icon">${SVG_ICONS.sun}</div>
            <span class="trust-pill-text">Premium Quality Components</span>
          </div>
          <div class="trust-pill">
            <div class="trust-pill-icon">${SVG_ICONS.zap}</div>
            <span class="trust-pill-text">Expert Installation & Support</span>
          </div>
          <div class="trust-pill">
            <div class="trust-pill-icon">${SVG_ICONS.check}</div>
            <span class="trust-pill-text">Transparent Service Guarantee</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 10. OUR EXPERTISE SECTION -->
    <section class="section section-alt" id="offerings">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Engineering Excellence</span>
          <h2 class="section-title">Our Expertise</h2>
        </div>

        <!-- 5-Sector Customer-Centric Expertise Grid -->
        <div class="offerings-grid-5">
          
          <!-- Card 1: Residential Homes -->
          <div class="offering-card animate-fade-up" data-href="/solar-for-homes">
            <div class="offering-photo-box">
              <img src="assets/expertise-homes.jpg" alt="Residential Rooftop Solar & Elevated Pergola for Homes" class="offering-photo-img" loading="lazy">
              <div class="offering-photo-overlay">
                <div class="offering-photo-badges">
                  <span class="offering-scheme-badge">🏛️ PM Surya Ghar Yojana</span>
                  <span class="section-tag section-tag-gold" style="font-size:0.7rem; padding:0.2rem 0.5rem; margin:0;">Residential</span>
                </div>
              </div>
            </div>
            
            <div class="offering-card-body">
              <div class="offering-header">
                <span class="offering-num">1. Homes</span>
                <div class="offering-icon">${SVG_ICONS.home}</div>
              </div>
              <h3 class="offering-title">Solar for Homes</h3>
              <p class="offering-desc">
                Save up to 90% on electricity bills. High elevated solar pergolas preserve 100% of your terrace space for family leisure and terrace gardens.
              </p>

              <!-- Customer Quick Metrics -->
              <div class="offering-metrics-grid">
                <div class="metric-chip">
                  <span class="metric-chip-label">Govt Subsidy</span>
                  <span class="metric-chip-value highlight-green">Up to ₹78,000 DBT</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Monthly Savings</span>
                  <span class="metric-chip-value highlight-gold">Up to 90% Drop</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Shadow-Free Roof</span>
                  <span class="metric-chip-value">~100 Sq.Ft / kW</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">System Payback</span>
                  <span class="metric-chip-value">3 – 4 Years</span>
                </div>
              </div>

              <ul class="offering-subtypes">
                <li>${SVG_ICONS.check} Independent Villas & Row Houses</li>
                <li>${SVG_ICONS.check} 100% Usable Elevated Pergola Structure</li>
                <li>${SVG_ICONS.check} Direct Bank Transfer Subsidy Assistance</li>
              </ul>

              <div class="offering-footer">
                <a href="/solar-for-homes" class="btn btn-primary" style="width:100%;">
                  Explore Homes Solar ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 2: Housing Societies & Apartments -->
          <div class="offering-card animate-fade-up" data-href="/solar-for-housing-societies" style="animation-delay: 0.1s;">
            <div class="offering-photo-box">
              <img src="assets/expertise-societies.jpg" alt="Housing Society & Apartment Complex Common Area Solar" class="offering-photo-img" loading="lazy">
              <div class="offering-photo-overlay">
                <div class="offering-photo-badges">
                  <span class="offering-scheme-badge">🏢 PM Surya Ghar RWA CFA</span>
                  <span class="section-tag" style="font-size:0.7rem; padding:0.2rem 0.5rem; margin:0;">Community</span>
                </div>
              </div>
            </div>

            <div class="offering-card-body">
              <div class="offering-header">
                <span class="offering-num">2. Housing Societies</span>
                <div class="offering-icon">${SVG_ICONS.building}</div>
              </div>
              <h3 class="offering-title">Housing Societies (RWAs)</h3>
              <p class="offering-desc">
                Power common elevators, water transfer pumps, corridor lights, and EV charging bays to drastically reduce monthly maintenance charges.
              </p>

              <!-- Customer Quick Metrics -->
              <div class="offering-metrics-grid">
                <div class="metric-chip">
                  <span class="metric-chip-label">RWA Subsidy</span>
                  <span class="metric-chip-value highlight-green">₹18,000 / kW</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Maintenance Bill</span>
                  <span class="metric-chip-value highlight-gold">Up to 80% Reduction</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Max Eligible Cap</span>
                  <span class="metric-chip-value">Up to 500 kW</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">RWA Governance</span>
                  <span class="metric-chip-value">Committee Presentation</span>
                </div>
              </div>

              <ul class="offering-subtypes">
                <li>${SVG_ICONS.check} Common Lifts & Water Pumping Motors</li>
                <li>${SVG_ICONS.check} Clubhouse & EV Charger Integration</li>
                <li>${SVG_ICONS.check} Zero Waterproofing Damage Guarantee</li>
              </ul>

              <div class="offering-footer">
                <a href="/solar-for-housing-societies" class="btn btn-secondary" style="width:100%;">
                  Explore Housing Societies ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 3: Commercial & Institutional -->
          <div class="offering-card animate-fade-up" data-href="/solar-for-commercial-institutions" style="animation-delay: 0.2s;">
            <div class="offering-photo-box">
              <img src="assets/expertise-commercial.jpg" alt="Commercial Office Building & Institutional Rooftop Solar" class="offering-photo-img" loading="lazy">
              <div class="offering-photo-overlay">
                <div class="offering-photo-badges">
                  <span class="offering-scheme-badge">💼 Section 32 Tax Shield</span>
                  <span class="section-tag" style="font-size:0.7rem; padding:0.2rem 0.5rem; margin:0;">Commercial</span>
                </div>
              </div>
            </div>

            <div class="offering-card-body">
              <div class="offering-header">
                <span class="offering-num">3. Commercial</span>
                <div class="offering-icon">${SVG_ICONS.factory}</div>
              </div>
              <h3 class="offering-title">Commercial & Institutions</h3>
              <p class="offering-desc">
                Slash peak commercial electricity tariffs (₹8–₹12/unit) down to ~₹2.5/unit for IT tech parks, corporate offices, hospitals, and educational campuses.
              </p>

              <!-- Customer Quick Metrics -->
              <div class="offering-metrics-grid">
                <div class="metric-chip">
                  <span class="metric-chip-label">Tax Benefit</span>
                  <span class="metric-chip-value highlight-green">40% Depreciation</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Effective Power Cost</span>
                  <span class="metric-chip-value highlight-gold">&lt; ₹2.50 / kWh</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Financing Models</span>
                  <span class="metric-chip-value">CAPEX & OPEX / PPA</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Payback Period</span>
                  <span class="metric-chip-value">2.5 – 3.5 Years</span>
                </div>
              </div>

              <ul class="offering-subtypes">
                <li>${SVG_ICONS.check} Corporate Offices & IT Tech Parks</li>
                <li>${SVG_ICONS.check} Schools, Colleges & Multi-Specialty Hospitals</li>
                <li>${SVG_ICONS.check} Retail Malls & Commercial Complexes</li>
              </ul>

              <div class="offering-footer">
                <a href="/solar-for-commercial-institutions" class="btn btn-secondary" style="width:100%;">
                  Explore Commercial Solar ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 4: Industrial & Manufacturing -->
          <div class="offering-card animate-fade-up" data-href="/solar-for-industrial-factories" style="animation-delay: 0.1s;">
            <div class="offering-photo-box">
              <img src="assets/expertise-industrial.jpg" alt="Industrial Factory Shed & Warehouse Solar Array" class="offering-photo-img" loading="lazy">
              <div class="offering-photo-overlay">
                <div class="offering-photo-badges">
                  <span class="offering-scheme-badge">⚡ Industrial Captive Power</span>
                  <span class="section-tag" style="font-size:0.7rem; padding:0.2rem 0.5rem; margin:0;">Industrial</span>
                </div>
              </div>
            </div>

            <div class="offering-card-body">
              <div class="offering-header">
                <span class="offering-num">4. Industrial</span>
                <div class="offering-icon">${SVG_ICONS.zap}</div>
              </div>
              <h3 class="offering-title">Industrial & Factories</h3>
              <p class="offering-desc">
                High-capacity solar setups engineered for metal shed roofs and heavy continuous loads. Intelligent DG synchronization cuts factory diesel bills by up to 60%.
              </p>

              <!-- Customer Quick Metrics -->
              <div class="offering-metrics-grid">
                <div class="metric-chip">
                  <span class="metric-chip-label">DG Diesel Offset</span>
                  <span class="metric-chip-value highlight-green">Up to 60% Savings</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Mounting Safety</span>
                  <span class="metric-chip-value highlight-gold">Zero Roof Puncture</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">CEIG Clearances</span>
                  <span class="metric-chip-value">HT Approvals Handled</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">ESG & Carbon</span>
                  <span class="metric-chip-value">Certified Offset</span>
                </div>
              </div>

              <ul class="offering-subtypes">
                <li>${SVG_ICONS.check} Manufacturing Plants & Processing Mills</li>
                <li>${SVG_ICONS.check} Warehouses & Modern Cold Storage</li>
                <li>${SVG_ICONS.check} Smart Solar-Diesel Synchronization</li>
              </ul>

              <div class="offering-footer">
                <a href="/solar-for-industrial-factories" class="btn btn-secondary" style="width:100%;">
                  Explore Industrial Solar ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 5: Ground Mount & Utility / Agro Solar -->
          <div class="offering-card animate-fade-up" data-href="/solar-ground-mount" style="animation-delay: 0.2s;">
            <div class="offering-photo-box">
              <img src="assets/expertise-groundmount.jpg" alt="Ground Mount Megawatt Utility Solar Farm" class="offering-photo-img" loading="lazy">
              <div class="offering-photo-overlay">
                <div class="offering-photo-badges">
                  <span class="offering-scheme-badge">☀️ Utility & Open Access</span>
                  <span class="section-tag" style="font-size:0.7rem; padding:0.2rem 0.5rem; margin:0;">Utility Scale</span>
                </div>
              </div>
            </div>

            <div class="offering-card-body">
              <div class="offering-header">
                <span class="offering-num">5. Ground Mount</span>
                <div class="offering-icon">${SVG_ICONS.sun}</div>
              </div>
              <h3 class="offering-title">Ground Mount Solar</h3>
              <p class="offering-desc">
                Megawatt-scale ground plants engineered for available barren or agricultural land, captive industrial power feeding, and high-tension grid transmission.
              </p>

              <!-- Customer Quick Metrics -->
              <div class="offering-metrics-grid">
                <div class="metric-chip">
                  <span class="metric-chip-label">Plant Scale</span>
                  <span class="metric-chip-value highlight-green">100 kW to Multi-MW</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Tracker Option</span>
                  <span class="metric-chip-value highlight-gold">+20% Yield Boost</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Evacuation</span>
                  <span class="metric-chip-value">11kV / 33kV Switchyard</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Telemetry</span>
                  <span class="metric-chip-value">24x7 IoT SCADA</span>
                </div>
              </div>

              <ul class="offering-subtypes">
                <li>${SVG_ICONS.check} Open Access & Captive Solar Power Plants</li>
                <li>${SVG_ICONS.check} Topographical Drone & Geotechnical Survey</li>
                <li>${SVG_ICONS.check} Complete Substation & SLDC Liaisoning</li>
              </ul>

              <div class="offering-footer">
                <a href="/solar-ground-mount" class="btn btn-secondary" style="width:100%;">
                  Explore Ground Mount ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 6: Custom Solar System & Feasibility Box -->
          <div class="offering-card animate-fade-up" data-href="/quotation" style="background:linear-gradient(145deg, #071530 0%, #132f6b 100%); color:var(--white); border-color:rgba(245,158,11,0.3); animation-delay: 0.3s;">
            <div class="offering-card-body" style="justify-content:center; text-align:center; padding:2.5rem 2rem;">
              <div style="font-size:3rem; margin-bottom:1rem;">⚡</div>
              <span class="section-tag section-tag-gold" style="margin-bottom:1rem; align-self:center;">Custom Solar Engineering</span>
              <h3 style="color:var(--white); font-size:1.6rem; margin-bottom:0.75rem;">Have Specific System Requirements?</h3>
              <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6; margin-bottom:2rem;">
                Already know your desired kW / MW capacity or have custom site specifications? Our certified engineers deliver tailored <strong>3D Layout Simulations & Engineering Feasibility</strong> for rooftop, land, or industrial setups.
              </p>
              <a href="/quotation" class="btn btn-solar btn-lg" style="width:100%; margin-bottom:0.75rem;">
                Get Custom Solar Proposal ${SVG_ICONS.arrowRight}
              </a>
              <span style="font-size:0.8rem; color:#94a3b8;">Rooftop • Ground Mount • Captive • Free Consultation</span>
            </div>
          </div>

        </div>



      </div>
    </section>

    <!-- 10.5. SIGNATURE "OUR WORKING PROCESS" SECTION -->
    <section class="solar-journey-section" id="process">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header animate-fade-up">
          <div style="display:flex; justify-content:center;">
            <span class="hassle-free-headline-badge">
              <span class="energy-zap-highlight">⚡</span>
              <span>Our Hassle Free Process</span>
            </span>
          </div>
          <h2 class="section-title">From First Consultation to Clean Energy.</h2>
        </div>

        <!-- 6-Step Solar Journey Interactive Timeline -->
        <div class="solar-journey-timeline">
          <div class="solar-journey-track"></div>

          <!-- STEP 01 -->
          <div class="journey-step-card animate-fade-up">
            <div class="journey-card-top">
              <div class="journey-node-num">01</div>
              <span class="journey-time-badge">Day 1</span>
            </div>
            <div class="journey-icon-wrap" style="background:#eff6ff; color:#2563eb;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
            </div>
            <span class="journey-step-label">STEP 01</span>
            <h3 class="journey-step-title">Free Consultation</h3>
            <p class="journey-step-desc">
              Tell us about your energy needs, electricity usage and property. Our solar experts understand your requirements and recommend the right direction.
            </p>
            <a href="/quotation" class="journey-step-cta">
              Start Your Solar Journey →
            </a>
          </div>

          <!-- STEP 02 -->
          <div class="journey-step-card animate-fade-up" style="animation-delay:0.1s;">
            <div class="journey-card-top">
              <div class="journey-node-num">02</div>
              <span class="journey-time-badge">Day 1–3</span>
            </div>
            <div class="journey-icon-wrap" style="background:#f0fdf4; color:#16a34a;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="14" r="3"/><path d="m14.5 16.5 2.5 2.5"/></svg>
            </div>
            <span class="journey-step-label">STEP 02</span>
            <h3 class="journey-step-title">Site Survey & Assessment</h3>
            <p class="journey-step-desc">
              Our team evaluates your rooftop, structure, shadow conditions, electricity consumption and available space to determine the right solar solution.
            </p>
            <span class="journey-step-cta" style="color:var(--text-muted); pointer-events:none;">
              Shadow & Strength Check
            </span>
          </div>

          <!-- STEP 03: FEATURED 3D DESIGN -->
          <div class="journey-step-card featured-step animate-fade-up" style="animation-delay:0.2s;">
            <span class="featured-step-pill">Engineering Core</span>
            <div class="journey-card-top">
              <div class="journey-node-num">03</div>
              <span class="journey-time-badge">Day 3–5</span>
            </div>
            <div class="journey-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>
            </div>
            <span class="journey-step-label" style="color:#b45309;">STEP 03 • PROPOSAL</span>
            <h3 class="journey-step-title">Solar Design & Proposal</h3>
            <p class="journey-step-desc">
              We create a customised system design with recommended capacity, estimated generation, investment, savings and project details.
            </p>
            <a href="/design-consulting" class="journey-step-cta" style="color:#d97706;">
              View 3D Layout Simulation →
            </a>
          </div>

          <!-- STEP 04 -->
          <div class="journey-step-card animate-fade-up" style="animation-delay:0.1s;">
            <div class="journey-card-top">
              <div class="journey-node-num">04</div>
              <span class="journey-time-badge">Day 5–10</span>
            </div>
            <div class="journey-icon-wrap" style="background:#fef3c7; color:#d97706;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <span class="journey-step-label">STEP 04</span>
            <h3 class="journey-step-title">Installation & Commissioning</h3>
            <p class="journey-step-desc">
              Our trained installation team installs the solar system with attention to structural strength, electrical safety, workmanship and performance.
            </p>
            <span class="journey-step-cta" style="color:var(--text-muted); pointer-events:none;">
              Cyclone-Proof Mounting
            </span>
          </div>

          <!-- STEP 05 -->
          <div class="journey-step-card animate-fade-up" style="animation-delay:0.2s;">
            <div class="journey-card-top">
              <div class="journey-node-num">05</div>
              <span class="journey-time-badge">After Installation</span>
            </div>
            <div class="journey-icon-wrap" style="background:#e0e7ff; color:#4f46e5;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
            </div>
            <span class="journey-step-label">STEP 05</span>
            <h3 class="journey-step-title">Approvals & System Activation</h3>
            <p class="journey-step-desc">
              We assist with the required documentation, approvals and grid-related processes so your solar system can be commissioned smoothly.
            </p>
            <span class="journey-step-cta" style="color:var(--text-muted); pointer-events:none;">
              100% DISCOM Approvals
            </span>
          </div>

          <!-- STEP 06: FINAL MILESTONE -->
          <div class="journey-step-card final-milestone animate-fade-up" style="animation-delay:0.3s;">
            <span class="featured-step-pill" style="background:#10b981;">Lifetime Milestone</span>
            <div class="journey-card-top">
              <div class="journey-node-num">06</div>
              <span class="journey-time-badge">Long-Term Support</span>
            </div>
            <div class="journey-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            </div>
            <span class="journey-step-label" style="color:#15803d;">STEP 06 • CLEAN ENERGY</span>
            <h3 class="journey-step-title">Generate. Save. Sustain.</h3>
            <p class="journey-step-desc">
              Your solar system starts generating clean electricity. We remain available for monitoring, maintenance and after-sales support.
            </p>
            <a href="/quotation" class="journey-step-cta" style="color:#15803d;">
              30-Yr Performance Shield ⚡
            </a>
          </div>

        </div>



        <!-- Bottom Action CTA -->
        <div class="journey-cta-box animate-fade-up">
          <h3 style="color:var(--primary-900); font-size:1.5rem; margin-bottom:0.5rem;">Ready to Start Your Solar Journey?</h3>
          <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:1.5rem; max-width:550px; margin-left:auto; margin-right:auto;">
            Get a free shadow-free rooftop assessment and custom 3D design proposal tailored for your property.
          </p>
          <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <a href="/quotation" class="btn btn-solar btn-lg">
              Get Free Quotation ${SVG_ICONS.arrowRight}
            </a>
            <a href="/contact" class="btn btn-secondary btn-lg">
              Talk to Our Solar Experts ${SVG_ICONS.arrowRight}
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- 11. SOLAR SOLUTIONS SECTION -->
    <section class="section" id="solutions">
      <div class="container">
        <div class="section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Grid Architecture</span>
          <h2 class="section-title">Solar Solutions</h2>
          <p class="section-subtitle">
            Choose the right solar system architecture tailored precisely to your energy needs.
          </p>
        </div>

        <div class="solutions-grid">
          <!-- i. On-Grid System -->
          <div class="solution-card featured animate-fade-up">
            <span class="solution-badge">i. Most Popular</span>
            <div class="solution-icon-wrap">${SVG_ICONS.grid}</div>
            <h3 class="solution-title">i. On - Grid System</h3>
            <p class="solution-desc">
              Generate clean electricity and reduce dependence on conventional grid power with bi-directional net-metering.
            </p>
            <ul class="solution-features">
              <li><span class="solution-bullet">⚡</span> Direct Discom Net-Metering export credits</li>
              <li><span class="solution-bullet">⚡</span> Lowest capital cost and quickest ROI (3-4 years)</li>
              <li><span class="solution-bullet">⚡</span> Zero battery replacement maintenance</li>
              <li><span class="solution-bullet">⚡</span> Ideal for reliable urban grid areas</li>
            </ul>
            <a href="/solutions/on-grid" class="btn btn-primary" style="width:100%;">
              Explore Solution ${SVG_ICONS.arrowRight}
            </a>
          </div>

          <!-- ii. Off-Grid System -->
          <div class="solution-card animate-fade-up" style="animation-delay: 0.1s;">
            <div class="solution-icon-wrap">${SVG_ICONS.battery}</div>
            <h3 class="solution-title">ii. Off - Grid System</h3>
            <p class="solution-desc">
              Independent solar power solutions designed for locations requiring complete energy autonomy and self-reliance.
            </p>
            <ul class="solution-features">
              <li><span class="solution-bullet">⚡</span> 100% self-sufficient energy independence</li>
              <li><span class="solution-bullet">⚡</span> High-capacity Lithium / Tubular energy storage</li>
              <li><span class="solution-bullet">⚡</span> Operates completely isolated from the grid</li>
              <li><span class="solution-bullet">⚡</span> Perfect for remote farms, estates & hills</li>
            </ul>
            <a href="/solutions/off-grid" class="btn btn-secondary" style="width:100%;">
              Explore Solution ${SVG_ICONS.arrowRight}
            </a>
          </div>

          <!-- iii. Hybrid System -->
          <div class="solution-card animate-fade-up" style="animation-delay: 0.2s;">
            <div class="solution-icon-wrap">${SVG_ICONS.zap}</div>
            <h3 class="solution-title">iii. Hybrid System</h3>
            <p class="solution-desc">
              A flexible combination of solar, battery storage, and grid power for uninterrupted power security day and night.
            </p>
            <ul class="solution-features">
              <li><span class="solution-bullet">⚡</span> Continuous power during discom blackouts</li>
              <li><span class="solution-bullet">⚡</span> Smart automatic source switching</li>
              <li><span class="solution-bullet">⚡</span> Export surplus energy when batteries are full</li>
              <li><span class="solution-bullet">⚡</span> Ideal for areas with frequent power outages</li>
            </ul>
            <a href="/solutions/hybrid" class="btn btn-secondary" style="width:100%;">
              Explore Solution ${SVG_ICONS.arrowRight}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 13. DESIGN & CONSULTING SECTION -->
    <section class="section" id="design-consulting">
      <div class="container">
        <div class="split-layout">
          <div class="animate-fade-up">
            <span class="section-tag section-tag-gold">Engineering Precision</span>
            <h2 class="section-title">Designed Around Your Energy Needs.</h2>
            <p style="color:var(--text-muted); font-size:1.05rem; line-height:1.65; margin-bottom:1.5rem;">
              At <strong>VOLT'S LEGACY SOLAR</strong>, every solar project starts with in-depth engineering assessment. We don’t use generic templates—our specialized solar design engineers simulate shadow contours, structural wind load thresholds, and electrical yields for decades of peak generation.
            </p>
            
            <div class="consulting-features-grid">
              <div class="consulting-feature-item">${SVG_ICONS.sun} Site assessment</div>
              <div class="consulting-feature-item">${SVG_ICONS.grid} Solar system design</div>
              <div class="consulting-feature-item">${SVG_ICONS.zap} Energy requirement analysis</div>
              <div class="consulting-feature-item">${SVG_ICONS.battery} System sizing</div>
              <div class="consulting-feature-item">${SVG_ICONS.home} Roof / land evaluation</div>
              <div class="consulting-feature-item">${SVG_ICONS.factory} Generation planning</div>
              <div class="consulting-feature-item">${SVG_ICONS.shield} Installation planning</div>
              <div class="consulting-feature-item">${SVG_ICONS.building} Technical consultation</div>
            </div>

            <div style="margin-top: 2rem; display:flex; gap:0.75rem; flex-wrap:wrap;">
              <a href="/design-consulting" class="btn btn-solar btn-lg">
                Explore 3D Design Consulting ${SVG_ICONS.arrowRight}
              </a>
              <a href="/contact" class="btn btn-secondary btn-lg">
                Talk to Our Solar Experts ${SVG_ICONS.arrowRight}
              </a>
            </div>
          </div>

          <div class="animate-fade-up" style="animation-delay: 0.15s;">
            <div class="consulting-card-preview">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:1rem;">
                <h3 style="color:var(--white); font-size:1.3rem;">3D Engineering Workflow</h3>
                <span style="background:rgba(245,158,11,0.2); color:var(--solar-gold-400); padding:0.25rem 0.65rem; border-radius:4px; font-size:0.75rem; font-weight:700;">VOLT'S PROCESS</span>
              </div>

              <div class="consulting-steps">
                <div class="consulting-step">
                  <div class="step-num">1</div>
                  <div class="step-content">
                    <h4>3D Shadow & Irradiation Modeling</h4>
                    <p>Sub-millimeter LiDAR rooftop mapping and seasonal sun-path ray tracing.</p>
                  </div>
                </div>

                <div class="consulting-step">
                  <div class="step-num">2</div>
                  <div class="step-content">
                    <h4>Structural Wind-Load Certification</h4>
                    <p>Hot-dip galvanized structural calculations rated to withstand 170+ km/h cyclone gusts.</p>
                  </div>
                </div>

                <div class="consulting-step">
                  <div class="step-num">3</div>
                  <div class="step-content">
                    <h4>Electrical SLD & Discom Net Metering</h4>
                    <p>Complete single-line diagrams, protection relays, and statutory clearance filing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 14. WHY CHOOSE VOLT’S LEGACY ENERGY SOLUTIONS? -->
    <section class="section why-volt-section" id="why-us">
      <div class="container container-wide" style="max-width: 1440px; width: 100%; padding: 0 1.5rem;">
        <div class="section-header animate-fade-up" style="text-align:center; max-width:850px; margin:0 auto 3.5rem;">
          <h2 class="section-title" style="color:#071530; font-size:2.4rem; font-weight:800; line-height:1.25; margin-bottom:0.75rem;">
            Why Choose VOLT’S LEGACY?
          </h2>
          <p class="section-subtitle" style="color:#64748b; font-size:1.05rem; margin:0 auto; font-weight:500;">
            Built for better performance. Backed by dependable service.
          </p>
        </div>

        <div class="why-volt-grid">
          <!-- CARD 01: GUARANTEED GENERATION -->
          <div class="why-volt-card animate-fade-up">
            <div class="why-volt-img-wrapper">
              <img src="assets/why-generation.jpg?v=2.1" alt="Rooftop solar installation under bright daylight" class="why-volt-img" loading="lazy">
            </div>
            <div class="why-volt-body">
              <span class="why-volt-num">01</span>
              <h3 class="why-volt-title">GUARANTEED GENERATION</h3>
              <p class="why-volt-desc">
                Designed to deliver dependable solar generation with the right system size, quality components and professional installation.
              </p>
            </div>
          </div>

          <!-- CARD 02: STORM-PROOF STRUCTURE -->
          <div class="why-volt-card animate-fade-up" style="animation-delay: 0.1s;">
            <div class="why-volt-img-wrapper">
              <img src="assets/why-storm-proof.jpg?v=2.1" alt="Engineered storm-proof rooftop solar mounting structure" class="why-volt-img" loading="lazy">
            </div>
            <div class="why-volt-body">
              <span class="why-volt-num">02</span>
              <h3 class="why-volt-title">STORM-PROOF STRUCTURE</h3>
              <p class="why-volt-desc">
                Strong, carefully engineered mounting structures built to handle demanding weather conditions and provide long-term stability.
              </p>
            </div>
          </div>

          <!-- CARD 03: QUALITY YOU CAN RELY ON -->
          <div class="why-volt-card animate-fade-up" style="animation-delay: 0.2s;">
            <div class="why-volt-img-wrapper">
              <img src="assets/why-quality.jpg?v=2.2" alt="Premium solar panels and modern inverter electrical installation" class="why-volt-img" loading="lazy">
            </div>
            <div class="why-volt-body">
              <span class="why-volt-num">03</span>
              <h3 class="why-volt-title">QUALITY YOU CAN RELY ON</h3>
              <p class="why-volt-desc">
                We use dependable solar components selected for long-term performance, safety and reliability.
              </p>
            </div>
          </div>

          <!-- CARD 04: PROFESSIONAL INSTALLATION -->
          <div class="why-volt-card animate-fade-up" style="animation-delay: 0.3s;">
            <div class="why-volt-img-wrapper">
              <img src="assets/why-installation.jpg?v=2.1" alt="Professional certified engineers installing rooftop solar panels" class="why-volt-img" loading="lazy">
            </div>
            <div class="why-volt-body">
              <span class="why-volt-num">04</span>
              <h3 class="why-volt-title">PROFESSIONAL INSTALLATION</h3>
              <p class="why-volt-desc">
                Experienced installation with attention to safety, alignment, wiring and finishing — from rooftop to final commissioning.
              </p>
            </div>
          </div>

          <!-- CARD 05: SUPPORT BEYOND INSTALLATION -->
          <div class="why-volt-card animate-fade-up" style="animation-delay: 0.4s;">
            <div class="why-volt-img-wrapper">
              <img src="assets/why-support.jpg?v=2.1" alt="Customer checking live solar performance on smartphone with engineer support" class="why-volt-img" loading="lazy">
            </div>
            <div class="why-volt-body">
              <span class="why-volt-num">05</span>
              <h3 class="why-volt-title">SUPPORT BEYOND INSTALLATION</h3>
              <p class="why-volt-desc">
                Our relationship doesn’t end when your solar system is switched on. We remain available for guidance and service when you need us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 15. CALL TO ACTION BANNER -->
    <section class="section">
      <div class="container">
        <div class="cta-banner animate-fade-up">
          <div class="cta-banner-content">
            <span class="section-tag section-tag-gold" style="margin-bottom:1.25rem;">Switch & Save</span>
            <h2>Ready to Make the Switch to Solar?</h2>
            <p>
              Get a professional solar consultation and discover the right solution for your home, business or project.
            </p>
            <div class="cta-banner-actions">
              <a href="/quotation" class="btn btn-solar btn-lg">
                Get Free Quotation ${SVG_ICONS.arrowRight}
              </a>
              <a href="/design-consulting" class="btn btn-outline-white btn-lg">
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 16. GET QUOTATION & CALCULATOR SECTION -->
    <section class="section section-alt" id="quotation">
      <div class="container">
        <div class="section-header animate-fade-up">
          <span class="section-tag">Instant Estimate & Consultation</span>
          <h2 class="section-title">Get Quotation</h2>
          <p class="section-subtitle">
            Calculate your estimated solar savings and request a detailed engineering proposal from our solar specialists.
          </p>
        </div>

        <div class="quote-layout">
          <!-- Solar Savings Calculator Widget -->
          <div class="calculator-card animate-fade-up">
            <div class="calc-header">
              <h3 style="font-size: 1.4rem; margin-bottom:0.4rem; color:var(--primary-900);">Solar Savings Estimator</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem;">Slide or type your monthly electricity bill or desired system size</p>
            </div>

            <div class="calc-slider-group">
              <div class="calc-slider-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
                <span class="calc-slider-label" style="font-weight:700; color:var(--primary-900);">Monthly Bill (₹)</span>
                <div style="display:flex; align-items:center; gap:0.25rem; background:#ffffff; border:1.5px solid var(--blue-500); border-radius:8px; padding:0.25rem 0.6rem; box-shadow:0 2px 6px rgba(37,99,235,0.1);">
                  <span style="font-weight:800; color:var(--blue-600); font-size:1.1rem;">₹</span>
                  <input type="number" id="calcBillTypedInput" min="500" max="100000" step="100" value="3500" style="width:105px; border:none; outline:none; font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:var(--primary-900); background:transparent;">
                </div>
              </div>
              <input type="range" class="custom-range" id="billRangeSlider" min="1000" max="35000" step="250" value="3500">

              <!-- Manual System Size / Node System Input -->
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-top:1.15rem; padding-top:0.95rem; border-top:1px dashed #cbd5e1;">
                <label for="calcKwTypedInput" style="font-size:0.88rem; font-weight:700; color:#334155;">
                  ⚡ Or Type Desired System Size:
                </label>
                <div style="display:flex; align-items:center; gap:0.35rem; background:#f8fafc; border:1.5px solid #cbd5e1; border-radius:8px; padding:0.3rem 0.65rem;">
                  <input type="number" id="calcKwTypedInput" min="1" max="100" step="0.1" value="4.2" style="width:75px; border:none; outline:none; font-family:var(--font-heading); font-size:1rem; font-weight:800; color:#0369a1; background:transparent;">
                  <span style="font-size:0.84rem; font-weight:700; color:#64748b;">kWp</span>
                </div>
              </div>
            </div>

            <div class="calc-results-grid">
              <div class="calc-result-box highlight-req">
                <span class="calc-result-badge-req">⚡ Required System</span>
                <div class="calc-result-val" id="calcReqSystemSize">4.04 kW</div>
                <div class="calc-result-lbl">Required System Capacity</div>
              </div>
              <div class="calc-result-box highlight-savings">
                <div class="calc-result-val" id="calcMonthlySavings">₹3,050</div>
                <div class="calc-result-lbl">Est. Monthly Savings</div>
              </div>
              <div class="calc-result-box highlight-subsidy">
                <div class="calc-result-val" id="calcGovtSubsidy">₹78,000 Direct</div>
                <div class="calc-result-lbl">PM Surya Ghar Subsidy</div>
              </div>
              <div class="calc-result-box">
                <div class="calc-result-val" id="calcLifetimeSavings">₹18.85 Lakh</div>
                <div class="calc-result-lbl">30-Year Net Wealth / Savings</div>
              </div>
              <div class="calc-result-box">
                <div class="calc-result-val" id="calcRoofSpace">336 sq.ft</div>
                <div class="calc-result-lbl">Shadow-Free Roof Needed</div>
              </div>
            </div>

            <div style="background:var(--blue-50); border-radius:var(--radius-md); padding:1rem; border:1px solid var(--blue-100); display:flex; align-items:flex-start; gap:0.75rem;">
              <span style="color:var(--blue-600); font-size:1.25rem;">💡</span>
              <p style="font-size:0.85rem; color:var(--primary-800); line-height:1.45;">
                *Calculated with Torrent Power standard tariffs, Tier-1 600W TopCon modules, and ₹78,000 PM Surya Ghar DBT subsidy.
              </p>
            </div>
          </div>

          <!-- Quotation Request Form -->
          <div class="quote-form-card animate-fade-up" style="animation-delay: 0.1s;">
            <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem; color: var(--primary-900);">Request Your Free Quote</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Fill in your details for a tailored 3D solar layout & financial proposal.</p>

            <form id="solarQuoteForm" novalidate>
              <div class="form-grid">
                <div>
                  <label class="form-label" for="formFullName">Full Name *</label>
                  <input type="text" id="formFullName" name="fullName" class="form-control" placeholder="e.g. Rajesh Sharma" required>
                  <span class="error-text">Please enter your full name.</span>
                </div>

                <div>
                  <label class="form-label" for="formMobileNumber">Mobile Number *</label>
                  <input type="tel" id="formMobileNumber" name="mobileNumber" class="form-control" placeholder="10-digit Mobile" maxlength="10" required>
                  <span class="error-text">Please enter a valid 10-digit mobile number.</span>
                </div>

                <div>
                  <label class="form-label" for="formEmail">Email Address (Optional)</label>
                  <input type="email" id="formEmail" name="email" class="form-control" placeholder="name@example.com">
                  <span class="error-text">Please enter a valid email address.</span>
                </div>

                <div>
                  <label class="form-label" for="formCity">City / Location *</label>
                  <input type="text" id="formCity" name="city" class="form-control" placeholder="e.g. Surat, Ahmedabad, Vadodara" required>
                  <span class="error-text">Please specify your city.</span>
                </div>

                <div>
                  <label class="form-label" for="formCustomerType">Property Type (Optional)</label>
                  <select id="formCustomerType" name="customerType" class="form-control">
                    <option value="" selected>Select Property Type (Optional)</option>
                    <option value="Home">Home (Residential Bungalow/Villa)</option>
                    <option value="Housing Society">Housing Society / Apartment</option>
                    <option value="Commercial">Commercial (Office / Retail)</option>
                    <option value="Industrial">Industrial / Factory</option>
                    <option value="Ground Mount">Ground Mount Project</option>
                  </select>
                </div>

                <div>
                  <label class="form-label" for="formSystemType">Required System Type (Optional)</label>
                  <select id="formSystemType" name="systemType" class="form-control">
                    <option value="" selected>Select System (Optional)</option>
                    <option value="On-Grid">On-Grid (Net Metering + Subsidy)</option>
                    <option value="Off-Grid">Off-Grid (Battery Storage)</option>
                    <option value="Hybrid">Hybrid (Grid + Battery)</option>
                  </select>
                </div>

                <div>
                  <label class="form-label" for="formMonthlyBill">Approximate Monthly Electricity Bill (₹) *</label>
                  <input type="number" id="formMonthlyBill" name="monthlyBill" class="form-control" placeholder="3500" min="500" required>
                  <span class="error-text">Please enter your approximate monthly bill.</span>
                </div>

                <div>
                  <label class="form-label" for="formSystemKw">Preferred System Size (kW)</label>
                  <input type="text" id="formSystemKw" name="systemKw" class="form-control" placeholder="e.g. 4.04 kW">
                </div>

                <div class="form-group-full">
                  <label class="form-label" for="formMessage">Installation Address / Notes (Optional)</label>
                  <textarea id="formMessage" name="message" class="form-control" rows="3" placeholder="Tell us about your rooftop area, specific requirements, or queries..."></textarea>
                </div>
              </div>

              <button type="submit" class="btn btn-solar btn-lg" style="width:100%;">
                Submit Enquiry ${SVG_ICONS.arrowRight}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 17. BLOGS SECTION ("Latest from Solar") -->
    <section class="section" id="blogs">
      <div class="container">
        <div class="section-header animate-fade-up">
          <span class="section-tag">Knowledge & Insights</span>
          <h2 class="section-title">Latest from Solar</h2>
          <p class="section-subtitle">
            Expert insights, subsidy updates, and engineering guides to help you make informed clean energy decisions.
          </p>
        </div>

        <div class="blogs-grid">
          ${BLOGS_DATA.slice(0, 6).map(blog => `
            <article class="blog-card animate-fade-up">
              <div class="blog-banner" style="padding:0; overflow:hidden; position:relative; height:210px;">
                <img src="${blog.image}" alt="${blog.title}" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.4s ease;" loading="lazy">
                <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(7,21,48,0.1) 0%, rgba(7,21,48,0.65) 100%); pointer-events:none;"></div>
                <span class="blog-category-tag">${blog.category}</span>
              </div>
              <div class="blog-body">
                <div class="blog-meta">
                  <span>${blog.date}</span>
                  <span>•</span>
                  <span>${blog.readTime}</span>
                </div>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-summary">${blog.summary}</p>
                <a href="/blogs" class="blog-link" onclick="window.readBlog(${blog.id}); return false;">
                  Read More ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </article>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 3.5rem;">
          <a href="/blogs" class="btn btn-secondary btn-lg">
            View All Solar Articles ${SVG_ICONS.arrowRight}
          </a>
        </div>
      </div>
    </section>
  `;
}

// 2. EXPERTISE HUB VIEW (/offerings)
function renderOfferingsView() {
  document.title = "Our Expertise | VOLT'S LEGACY SOLAR";

  return `
    <div class="section section-dark" style="padding-top:2.25rem; padding-bottom:2rem;">
      <div class="container">
        <div class="section-header" style="margin-bottom:0;">
          <span class="section-tag section-tag-gold">Comprehensive Portfolio</span>
          <h1 class="section-title">Our Solar Engineering Expertise</h1>
          <p class="section-subtitle">
            Clean, high-yield solar energy solutions tailored for Indian homes, housing societies, commercial campuses, and industrial facilities.
          </p>
        </div>
      </div>
    </div>

    <section class="section section-alt">
      <div class="container">
        
        <!-- 5-Sector Grid -->
        <div class="offerings-grid-5">
          <!-- Card 1: Homes -->
          <div class="offering-card animate-fade-up" data-href="/solar-for-homes">
            <div class="offering-photo-box">
              <img src="assets/expertise-homes.jpg" alt="Residential Rooftop Solar & Elevated Pergola for Homes" class="offering-photo-img" loading="lazy">
              <div class="offering-photo-overlay">
                <div class="offering-photo-badges">
                  <span class="offering-scheme-badge">🏛️ PM Surya Ghar Yojana</span>
                  <span class="section-tag section-tag-gold" style="font-size:0.7rem; padding:0.2rem 0.5rem; margin:0;">Residential</span>
                </div>
              </div>
            </div>
            <div class="offering-card-body">
              <div class="offering-header">
                <span class="offering-num">1. Homes</span>
                <div class="offering-icon">${SVG_ICONS.home}</div>
              </div>
              <h3 class="offering-title">Solar for Homes</h3>
              <p class="offering-desc">
                Save up to 90% on electricity bills. High elevated solar pergolas preserve 100% of your terrace space for family leisure and terrace gardens.
              </p>
              <div class="offering-metrics-grid">
                <div class="metric-chip">
                  <span class="metric-chip-label">Govt Subsidy</span>
                  <span class="metric-chip-value highlight-green">Up to ₹78,000 DBT</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Monthly Savings</span>
                  <span class="metric-chip-value highlight-gold">Up to 90% Drop</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Shadow-Free Roof</span>
                  <span class="metric-chip-value">~100 Sq.Ft / kW</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">System Payback</span>
                  <span class="metric-chip-value">3 – 4 Years</span>
                </div>
              </div>
              <ul class="offering-subtypes">
                <li>${SVG_ICONS.check} Independent Villas & Row Houses</li>
                <li>${SVG_ICONS.check} 100% Usable Elevated Pergola Structure</li>
                <li>${SVG_ICONS.check} Direct Bank Transfer Subsidy Assistance</li>
              </ul>
              <div class="offering-footer">
                <a href="/solar-for-homes" class="btn btn-primary" style="width:100%;">
                  Explore Homes Solar ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 2: Housing Societies -->
          <div class="offering-card animate-fade-up" data-href="/solar-for-housing-societies" style="animation-delay: 0.1s;">
            <div class="offering-photo-box">
              <img src="assets/expertise-societies.jpg" alt="Housing Society & Apartment Complex Common Area Solar" class="offering-photo-img" loading="lazy">
              <div class="offering-photo-overlay">
                <div class="offering-photo-badges">
                  <span class="offering-scheme-badge">🏢 PM Surya Ghar RWA CFA</span>
                  <span class="section-tag" style="font-size:0.7rem; padding:0.2rem 0.5rem; margin:0;">Community</span>
                </div>
              </div>
            </div>
            <div class="offering-card-body">
              <div class="offering-header">
                <span class="offering-num">2. Housing Societies</span>
                <div class="offering-icon">${SVG_ICONS.building}</div>
              </div>
              <h3 class="offering-title">Housing Societies (RWAs)</h3>
              <p class="offering-desc">
                Power common elevators, water transfer pumps, corridor lights, and EV charging bays to drastically reduce monthly maintenance charges.
              </p>
              <div class="offering-metrics-grid">
                <div class="metric-chip">
                  <span class="metric-chip-label">RWA Subsidy</span>
                  <span class="metric-chip-value highlight-green">₹18,000 / kW</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Maintenance Bill</span>
                  <span class="metric-chip-value highlight-gold">Up to 80% Reduction</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Max Eligible Cap</span>
                  <span class="metric-chip-value">Up to 500 kW</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">RWA Governance</span>
                  <span class="metric-chip-value">Committee Presentation</span>
                </div>
              </div>
              <ul class="offering-subtypes">
                <li>${SVG_ICONS.check} Common Lifts & Water Pumping Motors</li>
                <li>${SVG_ICONS.check} Clubhouse & EV Charger Integration</li>
                <li>${SVG_ICONS.check} Zero Waterproofing Damage Guarantee</li>
              </ul>
              <div class="offering-footer">
                <a href="/solar-for-housing-societies" class="btn btn-primary" style="width:100%;">
                  Explore Housing Societies ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 3: Commercial -->
          <div class="offering-card animate-fade-up" data-href="/solar-for-commercial-institutions" style="animation-delay: 0.2s;">
            <div class="offering-photo-box">
              <img src="assets/expertise-commercial.jpg" alt="Commercial Office Building & Institutional Rooftop Solar" class="offering-photo-img" loading="lazy">
              <div class="offering-photo-overlay">
                <div class="offering-photo-badges">
                  <span class="offering-scheme-badge">💼 Section 32 Tax Shield</span>
                  <span class="section-tag" style="font-size:0.7rem; padding:0.2rem 0.5rem; margin:0;">Commercial</span>
                </div>
              </div>
            </div>
            <div class="offering-card-body">
              <div class="offering-header">
                <span class="offering-num">3. Commercial</span>
                <div class="offering-icon">${SVG_ICONS.factory}</div>
              </div>
              <h3 class="offering-title">Commercial & Institutions</h3>
              <p class="offering-desc">
                Slash peak commercial electricity tariffs (₹8–₹12/unit) down to ~₹2.5/unit for IT tech parks, corporate offices, hospitals, and educational campuses.
              </p>
              <div class="offering-metrics-grid">
                <div class="metric-chip">
                  <span class="metric-chip-label">Tax Benefit</span>
                  <span class="metric-chip-value highlight-green">40% Depreciation</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Effective Power Cost</span>
                  <span class="metric-chip-value highlight-gold">&lt; ₹2.50 / kWh</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Financing Models</span>
                  <span class="metric-chip-value">CAPEX & OPEX / PPA</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Payback Period</span>
                  <span class="metric-chip-value">2.5 – 3.5 Years</span>
                </div>
              </div>
              <ul class="offering-subtypes">
                <li>${SVG_ICONS.check} Corporate Offices & IT Tech Parks</li>
                <li>${SVG_ICONS.check} Schools, Colleges & Multi-Specialty Hospitals</li>
                <li>${SVG_ICONS.check} Retail Malls & Commercial Complexes</li>
              </ul>
              <div class="offering-footer">
                <a href="/solar-for-commercial-institutions" class="btn btn-secondary" style="width:100%;">
                  Explore Commercial Solar ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 4: Industrial -->
          <div class="offering-card animate-fade-up" data-href="/solar-for-industrial-factories" style="animation-delay: 0.1s;">
            <div class="offering-photo-box">
              <img src="assets/expertise-industrial.jpg" alt="Industrial Factory Shed & Warehouse Solar Array" class="offering-photo-img" loading="lazy">
              <div class="offering-photo-overlay">
                <div class="offering-photo-badges">
                  <span class="offering-scheme-badge">⚡ Industrial Captive Power</span>
                  <span class="section-tag" style="font-size:0.7rem; padding:0.2rem 0.5rem; margin:0;">Industrial</span>
                </div>
              </div>
            </div>
            <div class="offering-card-body">
              <div class="offering-header">
                <span class="offering-num">4. Industrial</span>
                <div class="offering-icon">${SVG_ICONS.zap}</div>
              </div>
              <h3 class="offering-title">Industrial & Factories</h3>
              <p class="offering-desc">
                High-capacity solar setups engineered for metal shed roofs and heavy continuous loads. Intelligent DG synchronization cuts factory diesel bills by up to 60%.
              </p>
              <div class="offering-metrics-grid">
                <div class="metric-chip">
                  <span class="metric-chip-label">DG Diesel Offset</span>
                  <span class="metric-chip-value highlight-green">Up to 60% Savings</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Mounting Safety</span>
                  <span class="metric-chip-value highlight-gold">Zero Roof Puncture</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">CEIG Clearances</span>
                  <span class="metric-chip-value">HT Approvals Handled</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">ESG & Carbon</span>
                  <span class="metric-chip-value">Certified Offset</span>
                </div>
              </div>
              <ul class="offering-subtypes">
                <li>${SVG_ICONS.check} Manufacturing Plants & Processing Mills</li>
                <li>${SVG_ICONS.check} Warehouses & Modern Cold Storage</li>
                <li>${SVG_ICONS.check} Smart Solar-Diesel Synchronization</li>
              </ul>
              <div class="offering-footer">
                <a href="/solar-for-industrial-factories" class="btn btn-secondary" style="width:100%;">
                  Explore Industrial Solar ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 5: Ground Mount -->
          <div class="offering-card animate-fade-up" data-href="/solar-ground-mount" style="animation-delay: 0.2s;">
            <div class="offering-photo-box">
              <img src="assets/expertise-groundmount.jpg" alt="Ground Mount Megawatt Utility Solar Farm" class="offering-photo-img" loading="lazy">
              <div class="offering-photo-overlay">
                <div class="offering-photo-badges">
                  <span class="offering-scheme-badge">☀️ Utility & Open Access</span>
                  <span class="section-tag" style="font-size:0.7rem; padding:0.2rem 0.5rem; margin:0;">Utility Scale</span>
                </div>
              </div>
            </div>
            <div class="offering-card-body">
              <div class="offering-header">
                <span class="offering-num">5. Ground Mount</span>
                <div class="offering-icon">${SVG_ICONS.sun}</div>
              </div>
              <h3 class="offering-title">Ground Mount Solar</h3>
              <p class="offering-desc">
                Megawatt-scale ground plants engineered for available barren or agricultural land, captive industrial power feeding, and high-tension grid transmission.
              </p>
              <div class="offering-metrics-grid">
                <div class="metric-chip">
                  <span class="metric-chip-label">Plant Scale</span>
                  <span class="metric-chip-value highlight-green">100 kW to Multi-MW</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Tracker Option</span>
                  <span class="metric-chip-value highlight-gold">+20% Yield Boost</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Evacuation</span>
                  <span class="metric-chip-value">11kV / 33kV Switchyard</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Telemetry</span>
                  <span class="metric-chip-value">24x7 IoT SCADA</span>
                </div>
              </div>
              <ul class="offering-subtypes">
                <li>${SVG_ICONS.check} Open Access & Captive Solar Power Plants</li>
                <li>${SVG_ICONS.check} Topographical Drone & Geotechnical Survey</li>
                <li>${SVG_ICONS.check} Complete Substation & SLDC Liaisoning</li>
              </ul>
              <div class="offering-footer">
                <a href="/solar-ground-mount" class="btn btn-secondary" style="width:100%;">
                  Explore Ground Mount ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>

          <!-- Card 6: 3D Design & Technical Consulting -->
          <div class="offering-card animate-fade-up" data-href="/design-consulting" style="animation-delay: 0.3s;">
            <div class="offering-photo-box">
              <img src="assets/dc-3d-vis.jpg" alt="3D Solar Architectural Design & Engineering Consulting" class="offering-photo-img" loading="lazy">
              <div class="offering-photo-overlay">
                <div class="offering-photo-badges">
                  <span class="offering-scheme-badge">📐 3D CAD & PVSyst Modeling</span>
                  <span class="section-tag section-tag-gold" style="font-size:0.7rem; padding:0.2rem 0.5rem; margin:0;">Advisory</span>
                </div>
              </div>
            </div>
            <div class="offering-card-body">
              <div class="offering-header">
                <span class="offering-num">6. Design & Consulting</span>
                <div class="offering-icon">${SVG_ICONS.zap}</div>
              </div>
              <h3 class="offering-title">3D Design & Technical Consulting</h3>
              <p class="offering-desc">
                Bankable PVsyst yield simulations, shadow-free 3D CAD modeling, DISCOM-compliant SLDs, and certified structural engineering before installation.
              </p>
              <div class="offering-metrics-grid">
                <div class="metric-chip">
                  <span class="metric-chip-label">Shadow Modeling</span>
                  <span class="metric-chip-value highlight-green">365-Day Sun Path</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Yield Accuracy</span>
                  <span class="metric-chip-value highlight-gold">PVSyst Verified</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">Wind Stability</span>
                  <span class="metric-chip-value">180 km/h Certified</span>
                </div>
                <div class="metric-chip">
                  <span class="metric-chip-label">DISCOM Clearance</span>
                  <span class="metric-chip-value">100% Approval Rate</span>
                </div>
              </div>
              <ul class="offering-subtypes">
                <li>${SVG_ICONS.check} Drone Rooftop LiDAR & CAD Setback Mapping</li>
                <li>${SVG_ICONS.check} Electrical Single Line Diagrams (SLD) for DISCOM</li>
                <li>${SVG_ICONS.check} STAAD.Pro Structural Wind Load Calculations</li>
              </ul>
              <div class="offering-footer">
                <a href="/design-consulting" class="btn btn-primary" style="width:100%;">
                  Explore Design & Consulting ${SVG_ICONS.arrowRight}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:4rem;">
          <a href="/quotation" class="btn btn-solar btn-lg">Get Customized Quotation ${SVG_ICONS.arrowRight}</a>
        </div>
      </div>
    </section>
  `;
}

// 3. HOMES VIEW (/offerings/homes)
function renderHomesView() {
  document.title = "Residential Solar for Homes | VOLT'S LEGACY SOLAR";

  return `
    <div class="section section-dark" style="padding-top:2.25rem; padding-bottom:2rem;">
      <div class="container">
        <div class="section-header" style="margin-bottom:0;">
          <span class="section-tag section-tag-gold">🏛️ PM Surya Ghar Yojana Compliant</span>
          <h1 class="section-title">Residential Solar for Homes</h1>
          <p class="section-subtitle">
            Say goodbye to high electricity bills. Generate your own clean energy, claim up to ₹78,000 central government subsidy, and keep 100% of your terrace usable with elevated pergolas.
          </p>
        </div>
      </div>
    </div>

    <section class="section section-alt">
      <div class="container">
        <div class="split-layout">
          <div>
            <span class="section-tag">Key Homeowner Benefits</span>
            <h2>Elevated Rooftop Solar: Save Money, Keep Your Terrace</h2>
            <p style="color:var(--text-muted); font-size:1.05rem; line-height:1.65; margin: 1.5rem 0;">
              VOLT'S LEGACY SOLAR brings premium elevated rooftop pergolas and flush-mount systems designed to fit your terrace perfectly. We manage everything: site survey, 3D shadow design, DISCOM net metering permissions, PM Surya Ghar subsidy documentation, and certified engineering installation.
            </p>
            <ul class="solution-features">
              <li><span class="solution-bullet">⚡</span> <strong>Up to 90% Bill Reduction:</strong> Offset daytime consumption and export surplus units back to the state power grid.</li>
              <li><span class="solution-bullet">⚡</span> <strong>PM Surya Ghar DBT Subsidy:</strong> Claim up to ₹78,000 direct bank transfer central government subsidy with zero follow-ups.</li>
              <li><span class="solution-bullet">⚡</span> <strong>Elevated Pergola Design:</strong> Walk freely, grow rooftop gardens, and relax beneath high elevated structures with 100% usable terrace space.</li>
              <li><span class="solution-bullet">⚡</span> <strong>30-Year Performance Warranty:</strong> Tier-1 ALMM listed bifacial mono PERC modules with 30-year power generation guarantee.</li>
            </ul>
            <div style="margin-top:2rem;">
              <a href="/quotation" class="btn btn-solar btn-lg">Calculate Home Savings ${SVG_ICONS.arrowRight}</a>
            </div>
          </div>

          <div>
            <div style="border-radius:16px; overflow:hidden; box-shadow:var(--shadow-xl); margin-bottom:1.5rem;">
              <img src="assets/expertise-homes.jpg" alt="Modern Indian Villa Rooftop Solar Pergola" style="width:100%; height:280px; object-fit:cover;">
            </div>

            <div class="consulting-card-preview">
              <h3 style="color:var(--white); margin-bottom:1rem;">What's Included in Your Home Solar</h3>
              <div class="consulting-steps">
                <div class="consulting-step">
                  <div class="step-num">✓</div>
                  <div class="step-content">
                    <h4>Tier-1 ALMM Listed Bifacial Panels</h4>
                    <p>High-efficiency modules producing power from both top sun rays and terrace floor reflections.</p>
                  </div>
                </div>
                <div class="consulting-step">
                  <div class="step-num">✓</div>
                  <div class="step-content">
                    <h4>Smart BIS Certified Inverter</h4>
                    <p>Real-time smartphone generation monitoring and automated error diagnostics via mobile app.</p>
                  </div>
                </div>
                <div class="consulting-step">
                  <div class="step-num">✓</div>
                  <div class="step-content">
                    <h4>170 km/h Cyclone-Proof Structure</h4>
                    <p>Hot-dip galvanized C-section purlins engineered for 30+ years rust-proof structural safety.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Real Installation Showcase -->
        <div class="pergola-showcase-section animate-fade-up">
          <div class="pergola-grid">
            <div>
              <span class="section-tag section-tag-gold">Authentic On-Site Installation</span>
              <h3 style="font-size:1.75rem; color:var(--white); margin-bottom:0.75rem;">
                See the Real Elevated Pergola Structure
              </h3>
              <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6; margin-bottom:1.5rem;">
                No cramped rooftop space. Clean elevated solar pergolas provide full 7-foot clearance for comfortable walking, hosting family events, and terrace gardening.
              </p>
              <div class="pergola-feature-list">
                <div class="pergola-feature-item">
                  <div class="pergola-feature-icon">🏗️</div>
                  <div class="pergola-feature-text">
                    <h5>Hot-Dip Galvanized C-Section Steel</h5>
                    <p>Industrial strength mounting frame that never rusts or degrades under monsoon rains.</p>
                  </div>
                </div>
                <div class="pergola-feature-item">
                  <div class="pergola-feature-icon">🛡️</div>
                  <div class="pergola-feature-text">
                    <h5>Zero Roof Penetration Leakage</h5>
                    <p>Precision anchor fasteners with waterproof chemical seals to protect your terrace floor.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="pergola-photos-cluster">
{{ ... }}
                <div class="pergola-photo-card">
                <img src="assets/real-pergola-terrace.jpg" alt="Real Terrace Solar Pergola Setup" loading="lazy">
                <div class="pergola-photo-label">📷 Real Home: 100% Usable Rooftop</div>
              </div>
              <div class="pergola-photo-card">
                <img src="assets/real-pergola-detail.jpg" alt="Galvanized Purlin Structural Framing" loading="lazy">
                <div class="pergola-photo-label">📷 Storm-Resistant Framing Detail</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}


// Alias for backward compatibility
const renderHousingSocietiesView = renderSolarForHousingSocietiesView;


// 5. COMMERCIAL & INDUSTRIAL VIEW (/offerings/commercial-industrial)
function renderCommercialIndustrialView() {
  if (typeof renderSolarForCommercialInstitutionsView === 'function') {
    return renderSolarForCommercialInstitutionsView();
  }
  document.title = "Commercial & Institutional Solar | VOLT'S LEGACY";
  return `<div class="container" style="padding:4rem 1rem;"><h2>Commercial & Institutional Solar</h2></div>`;
}

// 6. GROUND MOUNT VIEW (/offerings/ground-mount)
function renderGroundMountView() {
  if (typeof renderSolarGroundMountView === 'function') {
    return renderSolarGroundMountView();
  }
  document.title = "Ground Mount Solar | VOLT'S LEGACY";
  return `<div class="container" style="padding:4rem 1rem;"><h2>Ground Mount Solar</h2></div>`;
}

// 7. SOLUTIONS HUB VIEW (/solutions)
function renderSolutionsView() {
  document.title = "Solar Solutions | VOLT'S LEGACY SOLAR";

  return `
    <div class="section section-dark" style="padding-top:2.25rem; padding-bottom:2rem;">
      <div class="container">
        <div class="section-header" style="margin-bottom:0;">
          <span class="section-tag section-tag-gold">Architectural Comparison</span>
          <h1 class="section-title">Solar Solutions</h1>
          <p class="section-subtitle">
            Choose the right solar architecture engineered for your power reliability requirements and grid stability.
          </p>
        </div>
      </div>
    </div>

    <section class="section section-alt">
      <div class="container">
        <div class="solutions-grid">
          <!-- On Grid -->
          <div class="solution-card featured">
            <span class="solution-badge">Highest Savings</span>
            <div class="solution-icon-wrap">${SVG_ICONS.grid}</div>
            <h3 class="solution-title">On-Grid System</h3>
            <p class="solution-desc">Tied directly to the municipal grid with bi-directional net-metering. No batteries required.</p>
            <a href="/solutions/on-grid" class="btn btn-primary" style="margin-top:auto;">Deep Dive On-Grid ${SVG_ICONS.arrowRight}</a>
          </div>

          <!-- Off Grid -->
          <div class="solution-card">
            <div class="solution-icon-wrap">${SVG_ICONS.battery}</div>
            <h3 class="solution-title">Off-Grid System</h3>
            <p class="solution-desc">Operate 100% independently from the power grid with dedicated Lithium / tubular battery banks.</p>
            <a href="/solutions/off-grid" class="btn btn-primary" style="margin-top:auto;">Deep Dive Off-Grid ${SVG_ICONS.arrowRight}</a>
          </div>

          <!-- Hybrid -->
          <div class="solution-card">
            <div class="solution-icon-wrap">${SVG_ICONS.zap}</div>
            <h3 class="solution-title">Hybrid System</h3>
            <p class="solution-desc">The ultimate blend of grid-tied net metering and battery backup during power outages.</p>
            <a href="/solutions/hybrid" class="btn btn-primary" style="margin-top:auto;">Deep Dive Hybrid ${SVG_ICONS.arrowRight}</a>
          </div>
        </div>

        <div style="text-align:center; margin-top:4rem;">
          <a href="/quotation" class="btn btn-solar btn-lg">Get Custom Recommendation ${SVG_ICONS.arrowRight}</a>
        </div>
      </div>
    </section>
  `;
}

// 7.5. SIGNATURE ON-GRID SIMULATION SECTION BUILDER
function renderOnGridSection() {
  return `
    <div class="on-grid-simulator-wrapper" id="on-grid">
      <style>
      .og-particle-track {
        fill: none !important;
        stroke-linecap: round !important;
        stroke-dasharray: 8 24 !important;
        animation: particleStream 1.2s linear infinite !important;
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      .og-track-panel-inv, .stream-dc {
        stroke: #fbbf24 !important;
        stroke-width: 5.5px !important;
        filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.95)) !important;
      }
      .og-track-inv-junc, .stream-ac {
        stroke: #f59e0b !important;
        stroke-width: 5.5px !important;
        filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.95)) !important;
      }
      .og-track-junc-house, .stream-home {
        stroke: #10b981 !important;
        stroke-width: 5.5px !important;
        filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.95)) !important;
      }
      .og-track-junc-meter, .stream-meter {
        stroke: #06b6d4 !important;
        stroke-width: 5.5px !important;
        filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.95)) !important;
      }
      .og-track-meter-grid, .stream-export {
        stroke: #22c55e !important;
        stroke-width: 6px !important;
        filter: drop-shadow(0 0 10px rgba(34, 197, 94, 1)) !important;
      }
      .og-track-grid-l1, .og-track-grid-l2, .og-track-grid-l3 {
        stroke: #38bdf8 !important;
        stroke-width: 4px !important;
        stroke-dasharray: 6 20 !important;
        filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.95)) !important;
        animation: particleStream 1.3s linear infinite !important;
      }
      @keyframes particleStream {
        from { stroke-dashoffset: 32; }
        to { stroke-dashoffset: 0; }
      }
      .og-sun-flares {
        animation: sunRayPulse 3s ease-in-out infinite !important;
      }
      @keyframes sunRayPulse {
        0%, 100% { opacity: 0.75; transform: scale(1); }
        50% { opacity: 1; stroke: #fde047; transform: scale(1.03); }
      }
      .og-celestial-core {
        animation: sunCorePulse 2.5s ease-in-out infinite alternate !important;
      }
      @keyframes sunCorePulse {
        0% { filter: drop-shadow(0 0 8px #f59e0b); }
        100% { filter: drop-shadow(0 0 24px #fbbf24); }
      }
      .og-sunlight-cone {
        animation: sunConePulse 3s ease-in-out infinite alternate !important;
      }
      @keyframes sunConePulse {
        0% { opacity: 0.55; }
        100% { opacity: 0.95; }
      }
      .og-window-glow {
        animation: windowGlowPulse 2.5s ease-in-out infinite alternate !important;
      }
      @keyframes windowGlowPulse {
        0%, 100% { fill: #facc15; opacity: 0.75; }
        50% { fill: #fef08a; opacity: 1; filter: drop-shadow(0 0 8px #facc15); }
      }
      .og-led-pulse {
        animation: pulseLiveDot 1.4s infinite !important;
      }
    </style>
      <div class="og-stage-wrapper">
        <div class="og-simulation-stage stage-day" id="ogSimulationStage">
          <svg class="og-svg-canvas" viewBox="0 0 1020 680" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <!-- Gradients & Filters -->
                <linearGradient id="ogSunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#fffbeb"/>
                  <stop offset="30%" stop-color="#fbbf24"/>
                  <stop offset="70%" stop-color="#f59e0b"/>
                  <stop offset="100%" stop-color="#ea580c"/>
                </linearGradient>
                <linearGradient id="ogSunBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#fef08a" stop-opacity="0.85"/>
                  <stop offset="50%" stop-color="#fef08a" stop-opacity="0.45"/>
                  <stop offset="100%" stop-color="#fef08a" stop-opacity="0.05"/>
                </linearGradient>
                <linearGradient id="ogMoonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffffff"/>
                  <stop offset="100%" stop-color="#94a3b8"/>
                </linearGradient>
                <!-- Realistic Aluminum Frame Gradient -->
                <linearGradient id="ogFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#f8fafc"/>
                  <stop offset="50%" stop-color="#cbd5e1"/>
                  <stop offset="100%" stop-color="#94a3b8"/>
                </linearGradient>
                <!-- Authentic Monocrystalline Solar Cell Silicon Gradient -->
                <linearGradient id="ogSiliconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0f2b5c"/>
                  <stop offset="35%" stop-color="#1e40af"/>
                  <stop offset="70%" stop-color="#1d4ed8"/>
                  <stop offset="100%" stop-color="#0c234a"/>
                </linearGradient>
                <!-- Tempered Glass Glare Reflection -->
                <linearGradient id="ogGlassGleam" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffffff" stop-opacity="0.6"/>
                  <stop offset="40%" stop-color="#93c5fd" stop-opacity="0.15"/>
                  <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
                </linearGradient>
                <filter id="ogGlowGold" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="6" result="blur"/>
                  <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                </filter>
                <!-- Sleek, Small & Refined Engineering Arrow Markers (userSpaceOnUse prevents ballooning) -->
                <marker id="ogArrowRight" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" refX="8" refY="5.5" orient="auto">
                  <path d="M 1 2 L 9 5.5 L 1 9 Z" fill="#ef4444"/>
                </marker>
                <marker id="ogArrowUp" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" refX="5.5" refY="8" orient="auto">
                  <path d="M 2 9 L 5.5 1 L 9 9 Z" fill="#ef4444"/>
                </marker>
                <marker id="ogArrowDown" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" refX="5.5" refY="3" orient="auto">
                  <path d="M 2 1 L 5.5 9 L 9 1 Z" fill="#ef4444"/>
                </marker>
                <marker id="ogArrowBlue" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" refX="8" refY="5.5" orient="auto">
                  <path d="M 1 2 L 9 5.5 L 1 9 Z" fill="#38bdf8"/>
                </marker>
              </defs>

              <!-- ================= 1. SUNLIGHT BEAM ================= -->
              <g class="og-sun-beam-group">
                <!-- Conical yellow sunlight beam spreading from sun to solar panel -->
                <polygon points="110,90 188,215 322,235 272,333 138,313" fill="url(#ogSunBeamGrad)" class="og-sunlight-cone"/>
              </g>

              <!-- ================= 2. RED WIRING CABLES & ARROWS ================= -->
              <!-- Main static red cables -->
              <!-- a) Panel to Inverter (Down then Right) -->
              <path class="og-conduit og-cable-dc" data-step="2" d="M 204 327 L 204 470 L 350 470" stroke="#ef4444" stroke-width="4.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
              <line x1="260" y1="470" x2="285" y2="470" stroke="#ef4444" stroke-width="4.5" marker-end="url(#ogArrowRight)"/>

              <!-- b) Inverter to Main Panel / Generation Meter (Straight Right) -->
              <path class="og-conduit og-cable-ac" data-step="3" d="M 440 470 L 515 470" stroke="#ef4444" stroke-width="4.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
              <line x1="465" y1="470" x2="490" y2="470" stroke="#ef4444" stroke-width="4.5" marker-end="url(#ogArrowRight)"/>

              <!-- c) Main Panel / Generation Meter branches to House and Net Meter -->
              <!-- Branch to House: Straight Right into House -->
              <path class="og-conduit og-cable-home" data-step="4" d="M 575 470 L 660 470 L 660 520" stroke="#ef4444" stroke-width="4.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
              <line x1="605" y1="470" x2="630" y2="470" stroke="#ef4444" stroke-width="4.5" marker-end="url(#ogArrowRight)"/>

              <!-- Branch from Main Panel Upwards to Net-Meter (ONE centered arrow between the two components) -->
              <path class="og-conduit og-cable-meter" data-step="5" d="M 545 425 L 545 305 L 590 305" stroke="#ef4444" stroke-width="4.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
              <line x1="545" y1="380" x2="545" y2="355" stroke="#ef4444" stroke-width="4.5" marker-end="url(#ogArrowUp)"/>

              <!-- d) Net-Meter to Grid: Up then Right to Grid Pylon (ONE centered arrow between Net-Meter and Grid) -->
              <path class="og-conduit og-cable-grid" data-step="6" d="M 680 280 L 760 280 L 760 200" stroke="#ef4444" stroke-width="4.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
              <line x1="705" y1="280" x2="735" y2="280" stroke="#ef4444" stroke-width="4.5" marker-end="url(#ogArrowRight)"/>

              <!-- Night Inbound Grid Flow (Active only in night mode via CSS) -->
              <path class="og-grid-import-line" d="M 760 200 L 760 280 L 680 280" stroke="#38bdf8" stroke-width="4" stroke-dasharray="8 6" fill="none" opacity="0"/>
              <path class="og-grid-to-house-line" d="M 590 310 L 545 310 L 545 470 L 660 470 L 660 520" stroke="#38bdf8" stroke-width="4" stroke-dasharray="8 6" fill="none" opacity="0"/>

              <!-- Animated Particle Overlay Paths (Pure visual energy motion) -->
              <!-- Animated Electricity Particle Energy Tracks -->
              <g class="og-particle-streams">
                <!-- Stream 1: Panel -> Inverter (Solar DC Flow) -->
                <path class="og-particle-track og-track-panel-inv stream-dc" data-step="2" d="M 204 327 L 204 470 L 350 470"/>
                
                <!-- Stream 2: Inverter -> Main Panel (Inverted AC Flow) -->
                <path class="og-particle-track og-track-inv-junc stream-ac" data-step="3" d="M 440 470 L 515 470"/>

                <!-- Stream 3: Main Panel -> House (Self-Consumption Flow) -->
                <path class="og-particle-track og-track-junc-house stream-home" data-step="4" d="M 575 470 L 660 470 L 660 520"/>

                <!-- Stream 4: Main Panel -> Net Meter (Surplus Upward Feed) -->
                <path class="og-particle-track og-track-junc-meter stream-meter" data-step="5" d="M 545 425 L 545 310 L 590 310"/>

                <!-- Stream 5: Net Meter -> Grid (Surplus Grid Export) -->
                <path class="og-particle-track og-track-meter-grid stream-export" data-step="6" d="M 680 280 L 760 280 L 760 200"/>

                <!-- Stream 6: Grid 3-Phase Transmission Power Lines Flow -->
                <path class="og-particle-track og-track-grid-l1" data-step="7" d="M 860 188 Q 920 195 1000 180"/>
                <path class="og-particle-track og-track-grid-l2" data-step="7" d="M 868 228 Q 930 235 1000 218"/>
                <path class="og-particle-track og-track-grid-l3" data-step="7" d="M 860 268 Q 930 275 1000 258"/>
              </g>

              <!-- ================= 3. SYSTEM COMPONENT NODES (Fixed Positions) ================= -->

              <!-- NODE 1: SUN / CELESTIAL (Top-Left) -->
              <g class="og-diagram-node node-sun" data-step="1" transform="translate(60, 40)" tabindex="0" role="button" aria-label="1. Sun: Daytime Solar Generation">
                <rect class="og-node-halo" x="-15" y="-15" width="130" height="130" rx="65" fill="rgba(251, 191, 36, 0.08)"/>
                <!-- Golden Sun Radiance Flares -->
                <g class="og-sun-flares">
                  <line x1="50" y1="5" x2="50" y2="18" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
                  <line x1="50" y1="82" x2="50" y2="95" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
                  <line x1="5" y1="50" x2="18" y2="50" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
                  <line x1="82" y1="50" x2="95" y2="50" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
                  <line x1="18" y1="18" x2="28" y2="28" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
                  <line x1="72" y1="72" x2="82" y2="82" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
                  <line x1="82" y1="18" x2="72" y2="28" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
                  <line x1="18" y1="82" x2="28" y2="72" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
                </g>
                <!-- Sun Core Disk with 3D Spherical Gradient -->
                <circle cx="50" cy="50" r="28" fill="url(#ogSunGrad)" filter="url(#ogGlowGold)" class="og-celestial-core"/>
                <circle cx="44" cy="44" r="10" fill="#ffffff" opacity="0.45" class="og-celestial-highlight"/>
                <!-- Label matching reference image -->
                <text x="50" y="116" class="og-ref-label" text-anchor="middle">Sun</text>
              </g>

              <!-- NODE 2: PROPER MONOCRYSTALLINE SOLAR PANEL ARRAY -->
              <g class="og-diagram-node node-panel" data-step="1" transform="translate(130, 190)" tabindex="0" role="button" aria-label="1. Solar Panels: Photovoltaic Generation">
                <rect class="og-node-halo" x="-10" y="-10" width="215" height="185" rx="14" fill="rgba(37, 99, 235, 0.08)"/>
                
                <!-- Heavy-Duty Galvanized Steel Structural Support Legs & Ground Footings -->
                <line x1="38" y1="122" x2="48" y2="45" stroke="#334155" stroke-width="4.5" stroke-linecap="round"/>
                <line x1="152" y1="138" x2="178" y2="52" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/>
                <line x1="42" y1="110" x2="168" y2="60" stroke="#475569" stroke-width="2.5" stroke-dasharray="8 4"/>
                <!-- Foundation Footing Pads -->
                <rect x="26" y="122" width="24" height="7" rx="2" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
                <rect x="142" y="136" width="24" height="7" rx="2" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>

                <!-- 3D Bevel Extruded Aluminum Module Frame -->
                <polygon points="60,28 194,48 144,146 10,126" fill="#334155"/>
                <polygon points="58,25 192,45 142,143 8,123" fill="url(#ogFrameGrad)" stroke="#64748b" stroke-width="1.5"/>
                <polygon points="62,29 188,48 139,140 13,121" fill="#020617"/>
                <polygon points="63,30 187,49 138,139 14,122" fill="url(#ogSiliconGrad)"/>

                <!-- 18 Individual Monocrystalline Solar Cells Grid Matrix -->
                <!-- Longitudinal Cell Division Lines -->
                <line x1="104" y1="36" x2="55" y2="128" stroke="#ffffff" stroke-width="1.2" opacity="0.9"/>
                <line x1="146" y1="43" x2="96" y2="134" stroke="#ffffff" stroke-width="1.2" opacity="0.9"/>

                <!-- Transverse Cell Division Lines -->
                <line x1="55" y1="48" x2="179" y2="66" stroke="#ffffff" stroke-width="1.2" opacity="0.9"/>
                <line x1="46" y1="67" x2="170" y2="85" stroke="#ffffff" stroke-width="1.2" opacity="0.9"/>
                <line x1="37" y1="86" x2="161" y2="104" stroke="#ffffff" stroke-width="1.2" opacity="0.9"/>
                <line x1="28" y1="105" x2="152" y2="123" stroke="#ffffff" stroke-width="1.2" opacity="0.9"/>

                <!-- Multi-Busbar (MBB) Silver Conductors Across Cells -->
                <g stroke="#93c5fd" stroke-width="0.75" opacity="0.85">
                  <line x1="77" y1="32" x2="28" y2="124"/>
                  <line x1="90" y1="34" x2="41" y2="126"/>
                  <line x1="118" y1="38" x2="69" y2="130"/>
                  <line x1="132" y1="41" x2="83" y2="132"/>
                  <line x1="160" y1="45" x2="110" y2="136"/>
                  <line x1="174" y1="47" x2="124" y2="138"/>
                </g>

                <!-- Monocrystalline Chamfered Cell Corner Dots -->
                <g fill="#ffffff" opacity="0.85">
                  <circle cx="104" cy="36" r="1.5"/>
                  <circle cx="146" cy="43" r="1.5"/>
                  <circle cx="95" cy="54" r="1.5"/>
                  <circle cx="137" cy="62" r="1.5"/>
                  <circle cx="86" cy="73" r="1.5"/>
                  <circle cx="128" cy="81" r="1.5"/>
                  <circle cx="77" cy="92" r="1.5"/>
                  <circle cx="119" cy="99" r="1.5"/>
                  <circle cx="68" cy="111" r="1.5"/>
                  <circle cx="110" cy="118" r="1.5"/>
                  <circle cx="55" cy="128" r="1.5"/>
                  <circle cx="96" cy="134" r="1.5"/>
                </g>

                <!-- Tempered Glass Reflection Diagonal Highlight -->
                <polygon points="63,30 187,49 140,88 40,65" fill="url(#ogGlassGleam)"/>

                <!-- Weatherproof IP68 DC Junction Box & Connector -->
                <rect x="67" y="132" width="14" height="10" rx="2" fill="#0f172a" stroke="#475569" stroke-width="1.2"/>
                <circle cx="74" cy="137" r="4" fill="#ef4444"/>

                <!-- Label matching reference image -->
                <text x="96" y="166" class="og-ref-label" text-anchor="middle">Solar Panels</text>
              </g>

              <!-- NODE 3: INVERTER (Center-Left) -->
              <g class="og-diagram-node node-inverter" data-step="3" transform="translate(350, 420)" tabindex="0" role="button" aria-label="3. Solar Inverter: DC to AC Conversion">
                <rect class="og-node-halo" x="-8" y="-8" width="106" height="116" rx="12" fill="rgba(245, 158, 11, 0.08)"/>
                <!-- Inverter Metal Chassis -->
                <rect x="0" y="0" width="90" height="100" rx="8" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
                <!-- Top Bevel -->
                <rect x="5" y="5" width="80" height="6" rx="2" fill="#e2e8f0"/>
                <!-- Inverter LCD / Status Screen -->
                <rect x="15" y="20" width="60" height="28" rx="3" fill="#020617" stroke="#475569" stroke-width="1.5"/>
                <text x="45" y="34" font-size="7.5" fill="#38bdf8" text-anchor="middle" font-family="monospace">5.2 kW</text>
                <text x="45" y="43" font-size="6.5" fill="#22c55e" text-anchor="middle" font-family="monospace">ON-GRID</text>
                <!-- Status LED Indicators -->
                <circle cx="28" cy="62" r="3" fill="#22c55e" class="og-led-pulse"/>
                <circle cx="45" cy="62" r="3" fill="#38bdf8"/>
                <circle cx="62" cy="62" r="3" fill="#94a3b8"/>
                <!-- Heat Sink Cooling Louvres -->
                <line x1="20" y1="76" x2="70" y2="76" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
                <line x1="20" y1="82" x2="70" y2="82" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
                <line x1="20" y1="88" x2="70" y2="88" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
                <!-- Label matching reference image -->
                <text x="45" y="122" class="og-ref-label" text-anchor="middle">Inverter</text>
              </g>

              <!-- INTERMEDIATE NODE: MAIN PANEL / GENERATION METER (Center) -->
              <g class="og-diagram-node node-gen-meter" data-step="5" transform="translate(515, 425)" tabindex="0" role="button" aria-label="5. Main Distribution Board">
                <rect class="og-node-halo" x="-6" y="-6" width="72" height="92" rx="10" fill="rgba(16, 185, 129, 0.08)"/>
                <!-- Distribution Box Metal Body -->
                <rect x="0" y="0" width="60" height="80" rx="5" fill="#1e293b" stroke="#0f172a" stroke-width="2.5"/>
                <!-- Enclosure Door Bevel -->
                <rect x="6" y="6" width="48" height="68" rx="3" fill="#334155"/>
                <!-- Miniature Circuit Breakers (MCB Switches) -->
                <g fill="#e2e8f0">
                  <rect x="12" y="16" width="7" height="14" rx="1"/>
                  <rect x="22" y="16" width="7" height="14" rx="1"/>
                  <rect x="32" y="16" width="7" height="14" rx="1"/>
                  <rect x="42" y="16" width="7" height="14" rx="1"/>
                </g>
                <line x1="10" y1="23" x2="50" y2="23" stroke="#22c55e" stroke-width="1.8"/>
                <!-- Busbar Connection Hub -->
                <circle cx="30" cy="52" r="9" fill="#020617"/>
                <circle cx="30" cy="52" r="5" fill="#22c55e" class="og-led-pulse"/>
                <!-- Label matching reference image -->
                <text x="30" y="102" class="og-ref-label" text-anchor="middle" font-size="11">Main Panel</text>
              </g>

              <!-- NODE 4: NET - METER (Center-Right - Displays kW only) -->
              <g class="og-diagram-node node-meter" data-step="6" transform="translate(590, 250)" tabindex="0" role="button" aria-label="6. Net Meter: Bi-directional Accounting">
                <rect class="og-node-halo" x="-8" y="-8" width="105" height="120" rx="12" fill="rgba(16, 185, 129, 0.08)"/>
                <!-- Meter Outer Enclosure (Black Casing matching reference image) -->
                <rect x="0" y="0" width="90" height="105" rx="8" fill="#1e293b" stroke="#0f172a" stroke-width="3"/>
                <!-- Meter Inner Front Plate -->
                <rect x="8" y="8" width="74" height="89" rx="5" fill="#e2e8f0"/>
                <!-- Digital LCD Window -->
                <rect x="14" y="14" width="62" height="34" rx="3" fill="#020617" stroke="#64748b" stroke-width="1.5"/>
                <!-- Digital Counter Display: kW only (removed 2.1) -->
                <text x="45" y="29" font-size="9" fill="#22c55e" font-weight="bold" text-anchor="middle" id="ogMeterLcdVal">kW</text>
                <text x="45" y="42" font-size="7.5" fill="#a7f3d0" text-anchor="middle" id="ogMeterLcdMode">EXPORT &rarr;</text>
                <!-- Barcode & Serial Area -->
                <line x1="20" y1="56" x2="70" y2="56" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 1.5"/>
                <line x1="20" y1="60" x2="70" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
                <!-- Electric Symbol / Pulse LED -->
                <circle cx="45" cy="74" r="8" fill="#0f172a"/>
                <path d="M44 68 L48 68 L45 74 L48 74 L42 80 L44 75 L42 75 Z" fill="#f59e0b"/>
                <!-- Label matching reference image -->
                <text x="45" y="125" class="og-ref-label" text-anchor="middle">Net - Meter</text>
              </g>

              <!-- NODE 5: GRID (Top-Right Transmission Pylon) -->
              <g class="og-diagram-node node-grid" data-step="7" transform="translate(760, 110)" tabindex="0" role="button" aria-label="7. Electricity Grid: High Voltage Network">
                <rect class="og-node-halo" x="-8" y="-8" width="160" height="230" rx="12" fill="rgba(14, 165, 233, 0.08)"/>
                <!-- High-Voltage Steel Transmission Lattice Tower (Accurate Engineering Vector) -->
                <g stroke="#334155" stroke-width="2.2" stroke-linecap="round" fill="none">
                  <!-- Main Tower Legs (A-frame tapering upwards) -->
                  <line x1="60" y1="20" x2="25" y2="190"/>
                  <line x1="60" y1="20" x2="95" y2="190"/>
                  <!-- Horizontal Cross-members -->
                  <line x1="48" y1="65" x2="72" y2="65"/>
                  <line x1="42" y1="105" x2="78" y2="105"/>
                  <line x1="36" y1="145" x2="84" y2="145"/>
                  <line x1="28" y1="185" x2="92" y2="185"/>
                  <!-- Diagonal Cross Bracing (Lattice Structure) -->
                  <line x1="48" y1="65" x2="78" y2="105"/>
                  <line x1="72" y1="65" x2="42" y2="105"/>
                  <line x1="42" y1="105" x2="84" y2="145"/>
                  <line x1="78" y1="105" x2="36" y2="145"/>
                  <line x1="36" y1="145" x2="92" y2="185"/>
                  <line x1="84" y1="145" x2="28" y2="185"/>
                  <!-- 3 Horizontal Crossarms (for insulators) -->
                  <!-- Upper Crossarm -->
                  <line x1="20" y1="65" x2="100" y2="65" stroke-width="3"/>
                  <!-- Middle Crossarm -->
                  <line x1="12" y1="105" x2="108" y2="105" stroke-width="3"/>
                  <!-- Lower Crossarm -->
                  <line x1="20" y1="145" x2="100" y2="145" stroke-width="3"/>
                  <!-- Insulator Strings (Vertical drops) -->
                  <line x1="20" y1="65" x2="20" y2="78" stroke="#0ea5e9" stroke-width="2.5"/>
                  <line x1="100" y1="65" x2="100" y2="78" stroke="#0ea5e9" stroke-width="2.5"/>
                  <line x1="12" y1="105" x2="12" y2="118" stroke="#0ea5e9" stroke-width="2.5"/>
                  <line x1="108" y1="105" x2="108" y2="118" stroke="#0ea5e9" stroke-width="2.5"/>
                  <line x1="20" y1="145" x2="20" y2="158" stroke="#0ea5e9" stroke-width="2.5"/>
                  <line x1="100" y1="145" x2="100" y2="158" stroke="#0ea5e9" stroke-width="2.5"/>
                  <!-- 3 Phase Overhead Transmission Power Lines spreading right into distance -->
                  <path d="M 100 78 Q 160 85 240 70" stroke="#94a3b8" stroke-width="2"/>
                  <path d="M 108 118 Q 170 125 240 108" stroke="#94a3b8" stroke-width="2"/>
                  <path d="M 100 158 Q 170 165 240 148" stroke="#94a3b8" stroke-width="2"/>
                </g>
                <!-- Illuminated High-Voltage Grid Insulator Phase Nodes -->
                <circle cx="20" cy="78" r="3.5" fill="#38bdf8"/>
                <circle cx="100" cy="78" r="3.5" fill="#38bdf8"/>
                <circle cx="12" cy="118" r="3.5" fill="#38bdf8"/>
                <circle cx="108" cy="118" r="3.5" fill="#38bdf8"/>
                <circle cx="20" cy="158" r="3.5" fill="#38bdf8"/>
                <circle cx="100" cy="158" r="3.5" fill="#38bdf8"/>
                <!-- Label matching reference image -->
                <text x="60" y="-8" class="og-ref-label" text-anchor="middle">Grid</text>
              </g>

              <!-- NODE 6: HOUSE (Bottom-Right matching reference image) -->
              <g class="og-diagram-node node-house" data-step="4" transform="translate(660, 480)" tabindex="0" role="button" aria-label="4. House: Self-Consumption Load">
                <rect class="og-node-halo" x="-5" y="0" width="195" height="175" rx="12" fill="rgba(239, 68, 68, 0.08)"/>
                <!-- Red Chimney -->
                <rect x="145" y="15" width="22" height="38" fill="#b91c1c" stroke="#000000" stroke-width="2.5"/>
                <rect x="141" y="10" width="30" height="7" fill="#991b1b" stroke="#000000" stroke-width="2"/>
                <!-- White House Main Facade -->
                <rect x="25" y="70" width="140" height="90" fill="#ffffff" stroke="#000000" stroke-width="3"/>
                <!-- Red Triangular Gable Roof matching reference image -->
                <polygon points="95,5 180,70 10,70" fill="#b91c1c" stroke="#000000" stroke-width="3.5"/>
                <!-- Top Yellow 4-Pane Window in Gable Roof -->
                <rect x="80" y="38" width="30" height="24" fill="#facc15" stroke="#000000" stroke-width="2" class="og-window-glow"/>
                <line x1="95" y1="38" x2="95" y2="62" stroke="#000000" stroke-width="1.8"/>
                <line x1="80" y1="50" x2="110" y2="50" stroke="#000000" stroke-width="1.8"/>
                <!-- Left Yellow 4-Pane Window -->
                <rect x="38" y="90" width="28" height="24" fill="#facc15" stroke="#000000" stroke-width="2" class="og-window-glow"/>
                <line x1="52" y1="90" x2="52" y2="114" stroke="#000000" stroke-width="1.8"/>
                <line x1="38" y1="102" x2="66" y2="102" stroke="#000000" stroke-width="1.8"/>
                <!-- Right Yellow 4-Pane Window -->
                <rect x="124" y="90" width="28" height="24" fill="#facc15" stroke="#000000" stroke-width="2" class="og-window-glow"/>
                <line x1="138" y1="90" x2="138" y2="114" stroke="#000000" stroke-width="1.8"/>
                <line x1="124" y1="102" x2="152" y2="102" stroke="#000000" stroke-width="1.8"/>
                <!-- Red Front Door matching reference image -->
                <rect x="80" y="94" width="30" height="66" fill="#991b1b" stroke="#000000" stroke-width="2.5"/>
                <!-- Door Knob -->
                <circle cx="86" cy="128" r="2.5" fill="#facc15"/>
                <!-- Label centered cleanly above roof -->
                <text x="95" y="-12" class="og-ref-label" text-anchor="middle">House</text>
              </g>

            </svg>
        </div>
      </div>
    </div>
  `;
}

// 8. ON-GRID VIEW (/solutions/on-grid)
// 8. ON-GRID VIEW (/solutions/on-grid)
// 8. ON-GRID VIEW (/solutions/on-grid)
function renderOnGridView() {
  document.title = "On-Grid Solar Systems | VOLT'S LEGACY SOLAR";

  return `
    <!-- On-Grid Solar Page Styles -->
    <style>
      .og-hero {
        position: relative;
        background: linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%);
        padding: 3.5rem 0 3rem;
        overflow: hidden;
        border-bottom: 1px solid #e2e8f0;
      }
      .og-hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 90% 10%, rgba(37, 99, 235, 0.08), transparent 45%),
                    radial-gradient(circle at 10% 90%, rgba(245, 158, 11, 0.07), transparent 45%);
        pointer-events: none;
      }
      .og-hero-grid {
        display: grid;
        grid-template-columns: 1.05fr 1fr;
        gap: 2.5rem;
        align-items: center;
      }
      @media (max-width: 1080px) {
        .og-hero-grid {
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
      }
      .og-hero-title {
        font-size: clamp(2.3rem, 4.2vw, 3.4rem);
        font-weight: 900;
        line-height: 1.15;
        letter-spacing: -0.03em;
        color: #071530;
        margin-bottom: 1.25rem;
        text-transform: uppercase;
      }
      .og-hero-title span {
        color: #2563eb;
        display: block;
      }
      .og-hero-desc {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #475569;
        max-width: 640px;
        margin-bottom: 1.75rem;
      }
      .og-hero-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1.75rem;
      }

      /* Hero Simulation Card */
      .og-hero-sim-card {
        position: relative;
        border-radius: 20px;
      }
      .og-hero-sim-card .og-stage-wrapper {
        max-width: 100%;
        margin: 0;
      }
      .og-hero-sim-card .og-simulation-stage {
        padding: 1.25rem 1rem;
        border-radius: 18px;
        box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.28), 0 0 0 1px rgba(226, 232, 240, 0.8);
      }

      /* Application Cards Grid */
      .og-apps-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        margin-top: 2.5rem;
      }
      @media (max-width: 1200px) {
        .og-apps-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 640px) {
        .og-apps-grid {
          grid-template-columns: 1fr;
        }
      }
      .og-app-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .og-app-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
      }
      .og-app-img-wrap {
        width: 100%;
        height: 230px;
        overflow: hidden;
        background: #0f172a;
        position: relative;
      }
      .og-app-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.35s ease;
      }
      .og-app-card:hover .og-app-img-wrap img {
        transform: scale(1.05);
      }
      .og-app-body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      /* Decision Matrix: 7 columns on desktop = 1 single row */
      .og-decision-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 0.85rem;
        margin-top: 2rem;
      }
      @media (max-width: 1280px) {
        .og-decision-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }
      @media (max-width: 768px) {
        .og-decision-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      .og-decision-pill {
        background: #ffffff;
        border: 1.5px solid #e2e8f0;
        border-radius: 14px;
        padding: 1.25rem 0.75rem;
        text-align: center;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.25s ease;
      }
      .og-decision-pill:hover {
        border-color: #2563eb;
        background: #f0f7ff;
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.12);
      }
      .og-dec-icon-box {
        width: 46px;
        height: 46px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.25rem;
      }

      /* Benefit Cards Grid */
      .og-benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.5rem;
        margin-top: 2.5rem;
      }
      .og-benefit-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 2rem;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }
      .og-benefit-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
      }
      .og-ben-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.25rem;
      }

      /* Step Cards */
      .og-step-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 2rem 1.5rem;
        position: relative;
        text-align: center;
      }
      .og-step-num {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: #2563eb;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 1.1rem;
        margin: 0 auto 1.25rem auto;
      }

      /* Accordion */
      .og-faq-item {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        margin-bottom: 1rem;
        overflow: hidden;
      }
      .og-faq-btn {
        width: 100%;
        text-align: left;
        padding: 1.25rem 1.5rem;
        background: none;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.05rem;
        font-weight: 700;
        color: #0f172a;
        cursor: pointer;
      }
      .og-faq-ans {
        padding: 0 1.5rem 1.25rem;
        color: #475569;
        font-size: 0.95rem;
        line-height: 1.6;
        display: none;
      }
      .og-faq-item.active .og-faq-ans {
        display: block;
      }
      .og-faq-item.active .og-faq-btn {
        color: #2563eb;
      }
      .og-faq-icon {
        transition: transform 0.25s ease;
      }
      .og-faq-item.active .og-faq-icon {
        transform: rotate(180deg);
      }
    </style>

    <!-- 1. HERO SECTION (WITH SIMULATION IN MARKED RIGHT AREA) -->
    <section class="og-hero">
      <div class="container container-wide" style="max-width: 1440px; width: 100%; padding: 0 1.5rem;">
        <div class="og-hero-grid">
          <!-- Left Column: Headline, Description, Actions, Trust -->
          <div>
            <h1 class="og-hero-title">
              ON-GRID SOLAR SYSTEMS<br>
              <span>POWER YOUR PROPERTY. EXPORT EXTRA. CUT BILLS.</span>
            </h1>

            <p class="og-hero-desc">
              Connect your solar system seamlessly with the electricity grid. Generate direct power during the day, power your appliances automatically, and export surplus units via bi-directional net metering.
            </p>

            <div class="og-hero-actions">
              <a href="/quotation" class="btn btn-primary" style="padding: 0.95rem 2rem; font-size: 1rem; font-weight:700;">
                GET FREE SOLAR QUOTATION &rarr;
              </a>
              <a href="#applications" class="btn btn-secondary" style="padding: 0.95rem 2rem; font-size: 1rem; font-weight:700;">
                EXPLORE APPLICATIONS &darr;
              </a>
            </div>

            <!-- Feature Trust Highlights (Homes Page Style) -->
            <div style="display:flex; flex-wrap:wrap; gap:1.25rem; margin-top:1.75rem; padding-top:1.5rem; border-top:1px solid #e2e8f0;">
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; font-weight:700; color:#0f172a;">
                <span style="color:#16a34a; font-weight:900;">&#10004;</span> Bi-Directional Net Metering
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; font-weight:700; color:#0f172a;">
                <span style="color:#16a34a; font-weight:900;">&#10004;</span> Up to &#8377;78,000 Govt Subsidy
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; font-weight:700; color:#0f172a;">
                <span style="color:#16a34a; font-weight:900;">&#10004;</span> 25-Year Performance Warranty
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; font-weight:700; color:#0f172a;">
                <span style="color:#16a34a; font-weight:900;">&#10004;</span> Zero Battery Maintenance
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Simulation (Marked Area) -->
          <div class="og-hero-sim-card animate-fade-up" id="onGridSimulatorSection">
            <div style="margin-bottom:0.6rem; display:flex; align-items:center; justify-content:space-between; padding:0 0.5rem;">
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.82rem; font-weight:800; color:#0f172a; text-transform:uppercase; letter-spacing:0.05em;">
                <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#16a34a; box-shadow:0 0 8px #22c55e;"></span>
                Live Energy Flow Simulation
              </div>
              <span style="font-size:0.75rem; color:#64748b; font-weight:600;">Interactive Real-Time Architecture</span>
            </div>
            ${renderOnGridSection()}
          </div>
        </div>
      </div>
    </section>

    <!-- 2. SECTION 1: ONE SOLAR TECHNOLOGY. DIFFERENT APPLICATIONS. (WITH HIGH-RES IMAGES) -->
    <section class="section" style="padding: 4.5rem 0 3.5rem; background:#ffffff;" id="applications">
      <div class="container container-wide" style="max-width: 1440px; width: 100%; padding: 0 1.5rem;">
        <div class="section-header animate-fade-up" style="text-align:center; max-width:820px; margin:0 auto 1.5rem auto;">
          <span class="section-tag section-tag-gold">ON-GRID SOLAR SYSTEMS</span>
          <h2 class="section-title">One Solar Technology. Different Applications.</h2>
          <p style="color:#64748b; font-size:1.02rem; line-height:1.6;">
            On-grid solar connects reliably across diverse property types and project scales.
          </p>
        </div>

        <div class="og-apps-grid">
          <!-- Card 1: Rooftop Solar -->
          <div class="og-app-card animate-fade-up">
            <div class="og-app-img-wrap">
              <img src="assets/solar-homes-hero.jpg" alt="Residential Rooftop Solar" loading="eager" style="width:100%; height:100%; object-fit:cover; display:block;">
            </div>
            <div class="og-app-body">
              <div style="font-size:0.78rem; font-weight:800; color:#2563eb; text-transform:uppercase; margin-bottom:0.35rem;">
                01 &bull; FOR HOMES
              </div>
              <h3 style="font-size:1.2rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
                Rooftop Solar
              </h3>
              <p style="font-size:0.88rem; color:#64748b; line-height:1.6; margin-bottom:1.25rem;">
                Turn unused rooftop space into clean electricity for your home with zero battery maintenance.
              </p>
              <div style="margin-top:auto;">
                <a href="/solar-for-homes" class="btn btn-secondary" style="width:100%; justify-content:center;">
                  Explore Rooftop Solar &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 2: Housing Society Solar -->
          <div class="og-app-card animate-fade-up">
            <div class="og-app-img-wrap">
              <img src="assets/solar-society-hero.jpg" alt="Housing Society Solar" loading="eager" style="width:100%; height:100%; object-fit:cover; display:block;">
            </div>
            <div class="og-app-body">
              <div style="font-size:0.78rem; font-weight:800; color:#d97706; text-transform:uppercase; margin-bottom:0.35rem;">
                02 &bull; FOR RESIDENTIAL COMMUNITIES
              </div>
              <h3 style="font-size:1.2rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
                Housing Society Solar
              </h3>
              <p style="font-size:0.88rem; color:#64748b; line-height:1.6; margin-bottom:1.25rem;">
                Solar solutions designed for common-area electricity consumption in housing societies and apartments.
              </p>
              <div style="margin-top:auto;">
                <a href="/solar-for-housing-societies" class="btn btn-secondary" style="width:100%; justify-content:center;">
                  Explore Housing Society Solar &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 3: Commercial & Industrial Solar -->
          <div class="og-app-card animate-fade-up">
            <div class="og-app-img-wrap">
              <img src="assets/solar-commercial-hero.jpg" alt="Commercial and Industrial Solar" loading="eager" style="width:100%; height:100%; object-fit:cover; display:block;">
            </div>
            <div class="og-app-body">
              <div style="font-size:0.78rem; font-weight:800; color:#16a34a; text-transform:uppercase; margin-bottom:0.35rem;">
                03 &bull; FOR BUSINESSES &amp; INDUSTRIES
              </div>
              <h3 style="font-size:1.2rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
                Commercial &amp; Industrial Solar
              </h3>
              <p style="font-size:0.88rem; color:#64748b; line-height:1.6; margin-bottom:1.25rem;">
                Use available rooftop or suitable project space to generate electricity for commercial and industrial operations.
              </p>
              <div style="margin-top:auto;">
                <a href="/solar-for-commercial-institutions" class="btn btn-secondary" style="width:100%; justify-content:center;">
                  Explore Commercial &amp; Industrial Solar &rarr;
                </a>
              </div>
            </div>
          </div>

          <!-- Card 4: Ground-Mount Solar -->
          <div class="og-app-card animate-fade-up">
            <div class="og-app-img-wrap">
              <img src="assets/solar-groundmount-hero.jpg" alt="Ground-Mount Solar" loading="eager" style="width:100%; height:100%; object-fit:cover; display:block;">
            </div>
            <div class="og-app-body">
              <div style="font-size:0.78rem; font-weight:800; color:#9333ea; text-transform:uppercase; margin-bottom:0.35rem;">
                04 &bull; FOR LARGE-SCALE SOLAR PROJECTS
              </div>
              <h3 style="font-size:1.2rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
                Ground-Mount Solar
              </h3>
              <p style="font-size:0.88rem; color:#64748b; line-height:1.6; margin-bottom:1.25rem;">
                Solar panels installed on suitable ground-mounted structures where sufficient land is available.
              </p>
              <div style="margin-top:auto;">
                <a href="/solar-ground-mount" class="btn btn-secondary" style="width:100%; justify-content:center;">
                  Explore Ground-Mount Solar &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. SECTION 2: OTHER SOLAR APPLICATIONS (WITH HIGH-RES IMAGES) -->
        <div style="margin-top: 4rem; padding-top: 3rem; border-top: 1px solid #e2e8f0;">
          <div class="section-header animate-fade-up" style="text-align:center; max-width:760px; margin:0 auto 2rem auto;">
            <span class="section-tag section-tag-gold">STANDALONE &amp; SPECIALIZED</span>
            <h3 style="font-size:1.75rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
              Other Solar Applications
            </h3>
            <p style="color:#64748b; font-size:0.95rem; line-height:1.6; margin:0;">
              These are separate solar applications and may use different system architectures depending on the project.
            </p>
          </div>

          <div class="og-apps-grid" style="grid-template-columns: repeat(2, 1fr); max-width: 1080px; margin: 0 auto; gap: 2rem;">
            <!-- Other App 1: Solar Street Lights -->
            <div class="og-app-card animate-fade-up">
              <div class="og-app-img-wrap" style="height: 240px;">
                <img src="assets/solar-street-light.jpg" alt="Solar Street Lights" loading="eager" style="width:100%; height:100%; object-fit:cover; display:block;">
              </div>
              <div class="og-app-body">
                <div style="font-size:0.78rem; font-weight:800; color:#d97706; text-transform:uppercase; margin-bottom:0.35rem;">
                  OUTDOOR LIGHTING &bull; ZERO POWER BILL
                </div>
                <h3 style="font-size:1.25rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
                  Solar Street Lights
                </h3>
                <p style="font-size:0.88rem; color:#64748b; line-height:1.6; margin-bottom:1.25rem;">
                  All-in-one and integrated solar LED street lighting solutions for society premises, campuses, farmhouses, and industrial roads with built-in battery storage and automatic dusk-to-dawn sensors.
                </p>
                <div style="margin-top:auto;">
                  <a href="/contact" class="btn btn-secondary" style="width:100%; justify-content:center;">
                    Explore Street Lighting &rarr;
                  </a>
                </div>
              </div>
            </div>

            <!-- Other App 2: Solar Water Pumps -->
            <div class="og-app-card animate-fade-up">
              <div class="og-app-img-wrap" style="height: 240px;">
                <img src="assets/solar-water-pump.jpg" alt="Solar Water Pumps" loading="eager" style="width:100%; height:100%; object-fit:cover; display:block;">
              </div>
              <div class="og-app-body">
                <div style="font-size:0.78rem; font-weight:800; color:#2563eb; text-transform:uppercase; margin-bottom:0.35rem;">
                  AGRICULTURE &bull; RURAL WATER SUPPLY
                </div>
                <h3 style="font-size:1.25rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
                  Solar Water Pumps
                </h3>
                <p style="font-size:0.88rem; color:#64748b; line-height:1.6; margin-bottom:1.25rem;">
                  High-efficiency solar submersible and surface pumping systems designed for agricultural irrigation and community water supply, operating reliably with dedicated solar pump controllers.
                </p>
                <div style="margin-top:auto;">
                  <a href="/contact" class="btn btn-secondary" style="width:100%; justify-content:center;">
                    Explore Solar Pumps &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. "WHICH SOLAR SOLUTION FITS YOUR REQUIREMENT?" (WIDER IN ONE PAGE, ONE SINGLE ROW) -->
    <section class="section" style="padding: 3.5rem 0; background:#f8fafc;">
      <div class="container container-wide" style="max-width: 1440px; width: 100%; padding: 0 1.5rem;">
        <div class="section-header animate-fade-up" style="text-align:center; max-width:820px; margin:0 auto 1.5rem auto;">
          <span class="section-tag section-tag-gold">DECISION HELPER</span>
          <h2 class="section-title">Which Solar Solution Fits Your Requirement?</h2>
          <p style="color:#64748b; font-size:1.02rem; line-height:1.6;">
            Select your property category to explore the best matching solar configuration.
          </p>
        </div>

        <div class="og-decision-grid">
          <a href="/solar-for-homes" class="og-decision-pill animate-fade-up">
            <div class="og-dec-icon-box" style="background:#eff6ff; color:#2563eb;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            </div>
            <strong style="font-size:0.95rem; color:#0f172a;">HOME</strong>
            <span style="font-size:0.82rem; color:#2563eb; font-weight:700;">Rooftop Solar &rarr;</span>
          </a>
          <a href="/solar-for-housing-societies" class="og-decision-pill animate-fade-up">
            <div class="og-dec-icon-box" style="background:#fef3c7; color:#d97706;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/></svg>
            </div>
            <strong style="font-size:0.95rem; color:#0f172a;">HOUSING SOCIETY</strong>
            <span style="font-size:0.82rem; color:#2563eb; font-weight:700;">Common Area Solar &rarr;</span>
          </a>
          <a href="/solar-for-commercial-institutions" class="og-decision-pill animate-fade-up">
            <div class="og-dec-icon-box" style="background:#f0fdf4; color:#16a34a;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M10 6h4"/><path d="M10 10h4"/></svg>
            </div>
            <strong style="font-size:0.95rem; color:#0f172a;">BUSINESS</strong>
            <span style="font-size:0.82rem; color:#2563eb; font-weight:700;">Commercial Solar &rarr;</span>
          </a>
          <a href="/solar-for-industrial-factories" class="og-decision-pill animate-fade-up">
            <div class="og-dec-icon-box" style="background:#fdf2f8; color:#db2777;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>
            </div>
            <strong style="font-size:0.95rem; color:#0f172a;">INDUSTRY</strong>
            <span style="font-size:0.82rem; color:#2563eb; font-weight:700;">Industrial Solar &rarr;</span>
          </a>
          <a href="/solar-ground-mount" class="og-decision-pill animate-fade-up">
            <div class="og-dec-icon-box" style="background:#f5f3ff; color:#7c3aed;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/></svg>
            </div>
            <strong style="font-size:0.95rem; color:#0f172a;">LARGE LAND</strong>
            <span style="font-size:0.82rem; color:#2563eb; font-weight:700;">Ground-Mount Solar &rarr;</span>
          </a>
          <a href="/contact" class="og-decision-pill animate-fade-up">
            <div class="og-dec-icon-box" style="background:#fffbeb; color:#b45309;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="18" x2="15" y2="18"/><line x1="12" y1="2" x2="12" y2="22"/><path d="M12 2a5 5 0 0 1 5 5v3H7V7a5 5 0 0 1 5-5z"/></svg>
            </div>
            <strong style="font-size:0.95rem; color:#0f172a;">OUTDOOR LIGHTING</strong>
            <span style="font-size:0.82rem; color:#2563eb; font-weight:700;">Solar Street Light &rarr;</span>
          </a>
          <a href="/contact" class="og-decision-pill animate-fade-up">
            <div class="og-dec-icon-box" style="background:#f0f9ff; color:#0284c7;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            </div>
            <strong style="font-size:0.95rem; color:#0f172a;">WATER REQUIREMENT</strong>
            <span style="font-size:0.82rem; color:#2563eb; font-weight:700;">Solar Pump &rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 5. WHY CHOOSE ON-GRID SOLAR? -->
    <section class="section" style="padding: 4.5rem 0; background:#ffffff;">
      <div class="container container-wide" style="max-width: 1440px; width: 100%; padding: 0 1.5rem;">
        <div class="section-header animate-fade-up" style="text-align:center; max-width:820px; margin:0 auto 2.5rem auto;">
          <span class="section-tag section-tag-gold">MAXIMUM VALUE</span>
          <h2 class="section-title">Why Choose an On-Grid Solar System?</h2>
          <p style="color:#64748b; font-size:1.02rem; line-height:1.6;">
            On-grid solar remains the most financially sensible and widely adopted solar solution across India.
          </p>
        </div>

        <div class="og-benefits-grid">
          <!-- Benefit 1 -->
          <div class="og-benefit-card animate-fade-up">
            <div class="og-ben-icon" style="background:#eff6ff; color:#2563eb;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 6v2m0 8v2"/></svg>
            </div>
            <h3 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
              Lowest Upfront Investment
            </h3>
            <p style="font-size:0.9rem; color:#64748b; line-height:1.6; margin:0;">
              Because on-grid systems do not require expensive battery banks, initial capital costs are significantly lower than hybrid or off-grid systems.
            </p>
          </div>

          <!-- Benefit 2 -->
          <div class="og-benefit-card animate-fade-up">
            <div class="og-ben-icon" style="background:#f0fdf4; color:#16a34a;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
            <h3 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
              Fastest ROI &amp; Payback
            </h3>
            <p style="font-size:0.9rem; color:#64748b; line-height:1.6; margin:0;">
              Typical payback periods range between 3 to 4 years for residential and 2.5 to 3.5 years for commercial installations, followed by decades of free energy.
            </p>
          </div>

          <!-- Benefit 3 -->
          <div class="og-benefit-card animate-fade-up">
            <div class="og-ben-icon" style="background:#fef3c7; color:#d97706;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
              Net Metering Unit Banking
            </h3>
            <p style="font-size:0.9rem; color:#64748b; line-height:1.6; margin:0;">
              Surplus units generated during peak sunny days are fed into the utility grid, credited on your DISCOM bill to offset nighttime or monsoon usage.
            </p>
          </div>

          <!-- Benefit 4 -->
          <div class="og-benefit-card animate-fade-up">
            <div class="og-ben-icon" style="background:#fdf2f8; color:#db2777;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h3 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
              Virtually Zero Maintenance
            </h3>
            <p style="font-size:0.9rem; color:#64748b; line-height:1.6; margin:0;">
              No batteries means no chemical degradation, acid top-ups, or replacement expenses every few years. Simply keep panels dusted for optimal generation.
            </p>
          </div>

          <!-- Benefit 5 -->
          <div class="og-benefit-card animate-fade-up">
            <div class="og-ben-icon" style="background:#f5f3ff; color:#7c3aed;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
              25-Year Long-Term Reliability
            </h3>
            <p style="font-size:0.9rem; color:#64748b; line-height:1.6; margin:0;">
              Tier-1 monocrystalline panels come with standard 25-year performance warranties, ensuring dependable savings for residential and commercial assets.
            </p>
          </div>

          <!-- Benefit 6 -->
          <div class="og-benefit-card animate-fade-up">
            <div class="og-ben-icon" style="background:#ecfdf5; color:#059669;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">
              Eligible for Govt Subsidies
            </h3>
            <p style="font-size:0.9rem; color:#64748b; line-height:1.6; margin:0;">
              Residential systems qualify for direct benefit transfers under the PM Surya Ghar Muft Bijli Yojana (up to &#8377;78,000 subsidy) directly to your bank account.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FROM YOUR ROOF TO SOLAR POWER: 5 SIMPLE STEPS -->
    <section class="section" style="padding: 4.5rem 0; background:#f8fafc;">
      <div class="container container-wide" style="max-width: 1440px; width: 100%; padding: 0 1.5rem;">
        <div class="section-header animate-fade-up" style="text-align:center; max-width:820px; margin:0 auto 3rem auto;">
          <span class="section-tag section-tag-gold">STREAMLINED ADOPTION</span>
          <h2 class="section-title">From Your Roof To Solar Power: 5 Simple Steps</h2>
          <p style="color:#64748b; font-size:1.02rem; line-height:1.6;">
            We handle everything from precision engineering and rooftop analysis to DISCOM approvals and net metering.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1.25rem;">
          <!-- Step 1 -->
          <div class="og-step-card animate-fade-up">
            <div class="og-step-num">1</div>
            <h3 style="font-size:1.1rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">Site Assessment</h3>
            <p style="font-size:0.88rem; color:#64748b; line-height:1.6; margin:0;">
              Our engineers analyze your shadow profile, roof strength, electricity sanction load, and past utility bills.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="og-step-card animate-fade-up">
            <div class="og-step-num">2</div>
            <h3 style="font-size:1.1rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">Engineering &amp; Design</h3>
            <p style="font-size:0.88rem; color:#64748b; line-height:1.6; margin:0;">
              Custom 3D CAD modeling to maximize generation yield and match structural safety wind load specifications.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="og-step-card animate-fade-up">
            <div class="og-step-num">3</div>
            <h3 style="font-size:1.1rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">DISCOM Approvals</h3>
            <p style="font-size:0.88rem; color:#64748b; line-height:1.6; margin:0;">
              End-to-end documentation, technical feasibility filings, and subsidy registration with your local power board.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="og-step-card animate-fade-up">
            <div class="og-step-num">4</div>
            <h3 style="font-size:1.1rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">Installation &amp; Testing</h3>
            <p style="font-size:0.88rem; color:#64748b; line-height:1.6; margin:0;">
              Turnkey installation of Tier-1 PV modules, inverters, AC/DC safety boxes, earthing pits, and surge protection.
            </p>
          </div>

          <!-- Step 5 -->
          <div class="og-step-card animate-fade-up">
            <div class="og-step-num">5</div>
            <h3 style="font-size:1.1rem; font-weight:800; color:#0f172a; margin-bottom:0.5rem;">Net Meter &amp; Power On</h3>
            <p style="font-size:0.88rem; color:#64748b; line-height:1.6; margin:0;">
              DISCOM inspection, bi-directional meter installation, online monitoring setup, and plant commissioning.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. FREQUENTLY ASKED QUESTIONS -->
    <section class="section" style="padding: 4.5rem 0; background:#ffffff;" id="faq">
      <div class="container container-wide" style="max-width: 1000px; width: 100%; padding: 0 1.5rem;">
        <div class="section-header animate-fade-up" style="text-align:center; margin-bottom: 2.5rem;">
          <span class="section-tag section-tag-gold">COMMON QUESTIONS</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p style="color:#64748b; font-size:1.02rem; line-height:1.6;">
            Straightforward answers to the most common questions about on-grid solar energy systems.
          </p>
        </div>

        <div class="og-faq-list">
          <div class="og-faq-item">
            <button class="og-faq-btn" onclick="this.parentElement.classList.toggle('active')">
              <span>What happens to my power supply during a power cut?</span>
              <svg class="og-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="og-faq-ans">
              For electrical safety, standard on-grid solar inverters automatically shut down during a grid power outage. This mandatory feature (anti-islanding) prevents solar electricity from feeding into the utility lines while utility workers perform repairs. If you require power backup during load shedding, a hybrid solar system with battery backup is the recommended alternative.
            </div>
          </div>

          <div class="og-faq-item">
            <button class="og-faq-btn" onclick="this.parentElement.classList.toggle('active')">
              <span>How does net metering save money on my electricity bill?</span>
              <svg class="og-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="og-faq-ans">
              A bi-directional net meter records both the electricity you draw from the grid and the excess solar electricity you export. At the end of the billing cycle, your DISCOM deducts exported units from your imported units. You only pay for the net units consumed, dramatically reducing or virtually eliminating your electricity bill.
            </div>
          </div>

          <div class="og-faq-item">
            <button class="og-faq-btn" onclick="this.parentElement.classList.toggle('active')">
              <span>How much roof space do I need for an on-grid solar plant?</span>
              <svg class="og-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="og-faq-ans">
              As a general engineering rule of thumb, each 1 kW of solar capacity requires approximately 80 to 100 square feet of shadow-free rooftop or land space. A typical 3 kW residential rooftop system requires approximately 250 to 300 square feet.
            </div>
          </div>

          <div class="og-faq-item">
            <button class="og-faq-btn" onclick="this.parentElement.classList.toggle('active')">
              <span>Can I get a government subsidy for installing solar at home?</span>
              <svg class="og-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="og-faq-ans">
              Yes! Under the Central Government PM Surya Ghar Muft Bijli Yojana, residential individual homeowners are eligible for direct subsidies: &#8377;30,000 for 1 kW, &#8377;60,000 for 2 kW, and &#8377;78,000 for 3 kW or higher. Housing societies are also eligible for group common-meter subsidies up to &#8377;18,000 per kW (up to 500 kW).
            </div>
          </div>

          <div class="og-faq-item">
            <button class="og-faq-btn" onclick="this.parentElement.classList.toggle('active')">
              <span>Do solar panels work during cloudy or rainy days?</span>
              <svg class="og-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="og-faq-ans">
              Yes, solar panels continue to generate electricity on cloudy days using diffused ambient sunlight, typically producing 20% to 40% of their peak capacity. During periods of low generation, your property automatically draws whatever additional power it needs from the grid without any manual switching.
            </div>
          </div>

          <div class="og-faq-item">
            <button class="og-faq-btn" onclick="this.parentElement.classList.toggle('active')">
              <span>What maintenance is required for an on-grid system?</span>
              <svg class="og-faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="og-faq-ans">
              On-grid solar systems have no moving mechanical parts and no chemical batteries, making them exceptionally low maintenance. You simply need to wash dust off the solar panels with clean water every 10 to 15 days to keep efficiency high.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. FINAL CALL TO ACTION -->
    <section style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color:#ffffff; padding: 4.5rem 0; text-align:center;">
      <div class="container container-wide" style="max-width: 860px; width: 100%; padding: 0 1.5rem;">
        <span class="og-badge" style="background:rgba(255,255,255,0.1); color:#fbbf24; border-color:rgba(255,255,255,0.2);">GET STARTED TODAY</span>
        <h2 style="font-size: clamp(2rem, 4vw, 2.75rem); font-weight:800; margin-bottom:1rem; color:#ffffff;">
          Ready To Turn Sunlight Into Savings?
        </h2>
        <p style="color:#94a3b8; font-size:1.1rem; line-height:1.6; margin-bottom:2rem;">
          Connect with Volt's Legacy Solar engineers for a free site assessment, custom system design, and complete net metering assistance.
        </p>
        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <a href="/quotation" class="btn btn-primary" style="padding:0.9rem 2rem; font-size:1.05rem;">
            Request Free Site Survey &rarr;
          </a>
          <a href="tel:+919876543210" class="btn btn-secondary" style="padding:0.9rem 2rem; font-size:1.05rem;">
            Call Solar Expert
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderRoiCapacityFinderView() {
  document.title = "Torrent Power Solar Capacity & 30-Year ROI Finder | VOLT'S LEGACY SOLAR";

  const finder = window.TorrentRoiCapacityFinder ? new window.TorrentRoiCapacityFinder() : null;

  return `
    <div class="section section-dark" style="padding-top:4.5rem; padding-bottom:4.5rem;">
      <div class="container">
        <div class="section-header" style="margin-bottom:0;">
          <span class="section-tag section-tag-gold">Official Torrent Power Analysis</span>
          <h1 class="section-title">On-Grid Capacity & 30-Year Payback Finder</h1>
          <p class="section-subtitle">
            Engineered precisely for Gujarat Torrent Power consumers with future AC load modeling, PM Surya Ghar subsidy optimization, and 30-year Normal String Inverter cash vs EMI payback returns.
          </p>
        </div>
      </div>
    </div>

    <section class="section" style="padding-top:2rem; padding-bottom:5rem; background:var(--surface-alt);">
      <div class="container">
        ${finder ? finder.render() : '<div class="alert alert-info">Loading Capacity & ROI Finder...</div>'}
      </div>
    </section>
  `;
}

// 9. OFF-GRID VIEW (/solutions/off-grid)
function renderOffGridView() {
  document.title = "Off-Grid Solar Systems | VOLT'S LEGACY SOLAR";

  return `
    <!-- Off-Grid Solar Page Styles -->
    <style>
      .offgrid-hero {
        position: relative;
        background: linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%);
        padding: 3.5rem 0 3rem;
        overflow: hidden;
        border-bottom: 1px solid #e2e8f0;
      }
      .offgrid-hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 90% 10%, rgba(37, 99, 235, 0.08), transparent 45%),
                    radial-gradient(circle at 10% 90%, rgba(245, 158, 11, 0.07), transparent 45%);
        pointer-events: none;
      }
      .offgrid-hero-grid {
        display: grid;
        grid-template-columns: 1.05fr 1fr;
        gap: 2.5rem;
        align-items: center;
      }
      @media (max-width: 1080px) {
        .offgrid-hero-grid {
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
      }
      .offgrid-hero-title {
        font-size: clamp(2.3rem, 4.2vw, 3.4rem);
        font-weight: 900;
        line-height: 1.15;
        letter-spacing: -0.03em;
        color: #071530;
        margin-bottom: 1.25rem;
        text-transform: uppercase;
      }
      .offgrid-hero-title span {
        color: #2563eb;
        display: block;
      }
      .offgrid-hero-desc {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #475569;
        max-width: 620px;
        margin-bottom: 1.75rem;
      }
      .offgrid-hero-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1.75rem;
      }

      /* Simulation Card Container */
      .offgrid-sim-card {
        position: relative;
        background: #ffffff;
        border-radius: 20px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8);
        overflow: hidden;
      }
      .offgrid-sim-topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.85rem 1.25rem;
        background: #ffffff;
        border-bottom: 1px solid #e2e8f0;
      }
      .offgrid-sim-canvas-wrap {
        position: relative;
        width: 100%;
        background: #f8fafc;
        overflow: hidden;
      }
      .offgrid-sim-canvas-wrap.mode-night {
        background: #0a1128;
      }

      /* Animated SVG Particle Streams */
      .offgrid-track {
        fill: none;
        stroke-linecap: round;
        stroke-dasharray: 8 22;
        animation: offgridFlow 1.2s linear infinite;
        opacity: 1;
      }
      .offgrid-track-reverse {
        fill: none;
        stroke-linecap: round;
        stroke-dasharray: 8 22;
        animation: offgridFlowRev 1.2s linear infinite;
        opacity: 1;
      }
      @keyframes offgridFlow {
        from { stroke-dashoffset: 60; }
        to { stroke-dashoffset: 0; }
      }
      @keyframes offgridFlowRev {
        from { stroke-dashoffset: 0; }
        to { stroke-dashoffset: 60; }
      }

      /* Application Cards (4 only) */
      .offgrid-apps-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        margin-top: 2.5rem;
      }
      @media (max-width: 1100px) {
        .offgrid-apps-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 640px) {
        .offgrid-apps-grid {
          grid-template-columns: 1fr;
        }
      }
      .offgrid-app-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        overflow: hidden;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .offgrid-app-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
      }
      .offgrid-app-img-wrap {
        width: 100%;
        height: 210px;
        overflow: hidden;
        background: #0f172a;
        position: relative;
      }
      .offgrid-app-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.35s ease;
      }
      .offgrid-app-card:hover .offgrid-app-img-wrap img {
        transform: scale(1.05);
      }
      .offgrid-app-body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      /* 3 Comparison Cards */
      .offgrid-compare-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-top: 2.5rem;
      }
      @media (max-width: 860px) {
        .offgrid-compare-grid {
          grid-template-columns: 1fr;
        }
      }
      .offgrid-compare-card {
        background: #ffffff;
        border: 1.5px solid #e2e8f0;
        border-radius: 16px;
        padding: 2rem 1.75rem;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
      }
      .offgrid-compare-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
      }
      .offgrid-compare-card.card-active {
        border-color: #2563eb;
        box-shadow: 0 12px 30px rgba(37, 99, 235, 0.12);
        background: #fafcff;
      }

      /* Simple FAQ Accordion */
      .offgrid-faq-item {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        margin-bottom: 0.85rem;
        overflow: hidden;
        transition: border-color 0.2s ease;
      }
      .offgrid-faq-item:hover {
        border-color: #cbd5e1;
      }
      .offgrid-faq-btn {
        width: 100%;
        padding: 1.25rem 1.5rem;
        text-align: left;
        background: none;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.05rem;
        font-weight: 700;
        color: #0f172a;
        cursor: pointer;
      }
      .offgrid-faq-ans {
        padding: 0 1.5rem 1.25rem;
        color: #475569;
        font-size: 0.95rem;
        line-height: 1.6;
        display: none;
      }
      .offgrid-faq-item.active .offgrid-faq-ans {
        display: block;
      }
      .offgrid-faq-item.active .offgrid-faq-btn {
        color: #2563eb;
      }
      .offgrid-faq-icon {
        transition: transform 0.25s ease;
      }
      .offgrid-faq-item.active .offgrid-faq-icon {
        transform: rotate(180deg);
      }
    </style>

    <!-- 1. HERO SECTION (WITH 2-COLUMN STRUCTURE) -->
    <section class="offgrid-hero">
      <div class="container container-wide" style="max-width: 1440px; width: 100%; padding: 0 1.5rem;">
        <div class="offgrid-hero-grid">
          <!-- Left Column: Content -->
          <div>
            <div style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.35rem 0.9rem; background:#dbeafe; color:#1e40af; border:1px solid rgba(59,130,246,0.25); border-radius:9999px; font-size:0.75rem; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:1.25rem;">
              OUR EXPERTISE &bull; OFF-GRID SOLAR
            </div>

            <h1 class="offgrid-hero-title">
              OFF-GRID SOLAR SYSTEM
              <span>POWER WHERE THE GRID ISN'T ENOUGH.</span>
            </h1>

            <p class="offgrid-hero-desc">
              An Off-Grid Solar System uses solar panels and battery storage to provide electricity independently from the utility grid.
            </p>

            <div class="offgrid-hero-actions">
              <a href="/quotation" class="btn btn-primary" style="padding: 0.95rem 2rem; font-size: 1rem; font-weight:700;">
                GET FREE SOLAR QUOTATION &rarr;
              </a>
              <a href="#how-it-works" class="btn btn-secondary" style="padding: 0.95rem 2rem; font-size: 1rem; font-weight:700;">
                SEE HOW IT WORKS &darr;
              </a>
            </div>

            <!-- 3 Highlights Underneath -->
            <div style="display:flex; flex-wrap:wrap; gap:1.75rem; margin-top:1.75rem; padding-top:1.5rem; border-top:1px solid #e2e8f0;">
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; font-weight:700; color:#0f172a;">
                <span style="color:#16a34a; font-weight:900;">&#10004;</span> Solar + Battery
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; font-weight:700; color:#0f172a;">
                <span style="color:#16a34a; font-weight:900;">&#10004;</span> Independent Power
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; font-weight:700; color:#0f172a;">
                <span style="color:#16a34a; font-weight:900;">&#10004;</span> Battery Storage
              </div>
            </div>
          </div>

          <!-- Right Column: 2. SIMPLE OFF-GRID SIMULATION -->
          <div class="offgrid-sim-card animate-fade-up" id="offgridSimSection">
            <!-- Top Controls -->
            <div class="offgrid-sim-topbar">
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.82rem; font-weight:800; color:#0f172a; text-transform:uppercase; letter-spacing:0.04em;">
                <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#16a34a; box-shadow:0 0 8px #22c55e;"></span>
                Off-Grid Energy Flow
              </div>

              <!-- Day / Night Toggle -->
              <div style="display:inline-flex; background:#e2e8f0; padding:3px; border-radius:10px; gap:3px;">
                <button type="button" id="btnOffGridDay" onclick="window.setOffGridSimMode('day')" style="padding:5px 14px; border-radius:7px; border:none; font-size:0.78rem; font-weight:800; cursor:pointer; background:#ffffff; color:#0f172a; box-shadow:0 1px 3px rgba(0,0,0,0.1); transition:all 0.2s ease;">
                  DAY &#9728;
                </button>
                <button type="button" id="btnOffGridNight" onclick="window.setOffGridSimMode('night')" style="padding:5px 14px; border-radius:7px; border:none; font-size:0.78rem; font-weight:800; cursor:pointer; background:transparent; color:#64748b; transition:all 0.2s ease;">
                  NIGHT &#127769;
                </button>
              </div>
            </div>

            <!-- SVG Canvas (Strictly NO ELECTRICITY GRID) -->
            <div class="offgrid-sim-canvas-wrap" id="offgridCanvasWrap">
              <svg viewBox="0 0 860 520" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; display:block;">
                <defs>
                  <!-- Gradients -->
                  <linearGradient id="offSunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fffbeb"/>
                    <stop offset="30%" stop-color="#fbbf24"/>
                    <stop offset="70%" stop-color="#f59e0b"/>
                    <stop offset="100%" stop-color="#ea580c"/>
                  </linearGradient>
                  <linearGradient id="offSunBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fef08a" stop-opacity="0.85"/>
                    <stop offset="50%" stop-color="#fef08a" stop-opacity="0.35"/>
                    <stop offset="100%" stop-color="#fef08a" stop-opacity="0.03"/>
                  </linearGradient>
                  <linearGradient id="offMoonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffffff"/>
                    <stop offset="100%" stop-color="#94a3b8"/>
                  </linearGradient>
                  <linearGradient id="offSiliconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#0f2b5c"/>
                    <stop offset="40%" stop-color="#1e40af"/>
                    <stop offset="100%" stop-color="#0c234a"/>
                  </linearGradient>
                  <linearGradient id="offFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f8fafc"/>
                    <stop offset="50%" stop-color="#cbd5e1"/>
                    <stop offset="100%" stop-color="#94a3b8"/>
                  </linearGradient>
                  <linearGradient id="offBatteryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1e293b"/>
                    <stop offset="100%" stop-color="#0f172a"/>
                  </linearGradient>
                  <filter id="offGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                  </filter>
                  <!-- Arrow Markers -->
                  <marker id="offArrowRight" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
                    <path d="M 1 2 L 8 5 L 1 8 Z" fill="#ef4444"/>
                  </marker>
                  <marker id="offArrowDown" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="5" refY="7" orient="auto">
                    <path d="M 2 1 L 5 8 L 8 1 Z" fill="#06b6d4"/>
                  </marker>
                  <marker id="offArrowUp" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                    <path d="M 2 8 L 5 1 L 8 8 Z" fill="#f59e0b"/>
                  </marker>
                </defs>

                <!-- ================= SUNLIGHT BEAM (Day Only) ================= -->
                <polygon id="offSunBeam" points="95,75 140,165 245,185 200,285 95,265" fill="url(#offSunBeamGrad)"/>

                <!-- ================= STATIC CONDUIT CABLES ================= -->
                <!-- 1. Panels to Inverter -->
                <path d="M 210 240 L 360 240" stroke="#ef4444" stroke-width="4.5" stroke-linecap="round"/>
                <line x1="270" y1="240" x2="295" y2="240" stroke="#ef4444" stroke-width="4.5" marker-end="url(#offArrowRight)" id="arrowPanelsToInv"/>

                <!-- 2. Inverter to Home -->
                <path d="M 500 240 L 640 240" stroke="#ef4444" stroke-width="4.5" stroke-linecap="round"/>
                <line x1="560" y1="240" x2="585" y2="240" stroke="#ef4444" stroke-width="4.5" marker-end="url(#offArrowRight)"/>

                <!-- 3. Inverter to Battery (Bi-directional Link) -->
                <path d="M 430 315 L 430 380" stroke="#ef4444" stroke-width="4.5" stroke-linecap="round"/>
                <!-- Down arrow for day (charging) -->
                <line x1="430" y1="330" x2="430" y2="355" stroke="#06b6d4" stroke-width="4.5" marker-end="url(#offArrowDown)" id="arrowInvToBat"/>
                <!-- Up arrow for night (discharging) -->
                <line x1="430" y1="365" x2="430" y2="340" stroke="#f59e0b" stroke-width="4.5" marker-end="url(#offArrowUp)" id="arrowBatToInv" style="display:none;"/>

                <!-- ================= ANIMATED PARTICLE TRACKS ================= -->
                <!-- Stream A: Solar Panel to Inverter (Day Only) -->
                <path id="trackPanelToInv" class="offgrid-track" d="M 210 240 L 360 240" stroke="#fbbf24" stroke-width="5" style="filter: drop-shadow(0 0 6px rgba(251,191,36,0.9));"/>

                <!-- Stream B: Inverter to Home (Always Active - Solar in Day, Battery in Night) -->
                <path id="trackInvToHome" class="offgrid-track" d="M 500 240 L 640 240" stroke="#10b981" stroke-width="5" style="filter: drop-shadow(0 0 6px rgba(16,185,129,0.9));"/>

                <!-- Stream C: Inverter to Battery (Day: Charging Down) -->
                <path id="trackInvToBat" class="offgrid-track" d="M 430 315 L 430 380" stroke="#06b6d4" stroke-width="5" style="filter: drop-shadow(0 0 6px rgba(6,182,212,0.9));"/>

                <!-- Stream D: Battery to Inverter (Night: Discharging Up) -->
                <path id="trackBatToInv" class="offgrid-track-reverse" d="M 430 380 L 430 315" stroke="#f59e0b" stroke-width="5" style="filter: drop-shadow(0 0 6px rgba(245,158,11,0.9)); display:none;"/>

                <!-- ================= COMPONENT NODES ================= -->

                <!-- 1. SUN / MOON -->
                <!-- DAY SUN -->
                <g id="nodeSun" transform="translate(55, 35)">
                  <!-- Flare rays -->
                  <g stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round">
                    <line x1="40" y1="5" x2="40" y2="15"/>
                    <line x1="40" y1="65" x2="40" y2="75"/>
                    <line x1="5" y1="40" x2="15" y2="40"/>
                    <line x1="65" y1="40" x2="75" y2="40"/>
                    <line x1="15" y1="15" x2="22" y2="22"/>
                    <line x1="58" y1="58" x2="65" y2="65"/>
                    <line x1="65" y1="15" x2="58" y2="22"/>
                    <line x1="15" y1="65" x2="22" y2="58"/>
                  </g>
                  <!-- Sun core -->
                  <circle cx="40" cy="40" r="22" fill="url(#offSunGrad)" filter="url(#offGlow)"/>
                  <circle cx="34" cy="34" r="8" fill="#ffffff" opacity="0.4"/>
                  <text x="40" y="96" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">SUN</text>
                </g>

                <!-- NIGHT MOON (Hidden by default) -->
                <g id="nodeMoon" transform="translate(55, 35)" style="display:none;">
                  <!-- Stars -->
                  <circle cx="15" cy="20" r="2" fill="#93c5fd" opacity="0.8"/>
                  <circle cx="70" cy="18" r="1.5" fill="#93c5fd" opacity="0.9"/>
                  <circle cx="68" cy="65" r="2" fill="#93c5fd" opacity="0.7"/>
                  <!-- Moon Crescent -->
                  <circle cx="40" cy="40" r="22" fill="url(#offMoonGrad)" filter="url(#offGlow)"/>
                  <circle cx="48" cy="34" r="18" fill="#0a1128"/>
                  <text x="40" y="96" font-size="12" font-weight="800" fill="#cbd5e1" text-anchor="middle">NIGHT</text>
                </g>

                <!-- 2. SOLAR PANELS -->
                <g id="nodePanels" transform="translate(90, 160)">
                  <!-- Mount legs -->
                  <line x1="30" y1="95" x2="38" y2="35" stroke="#334155" stroke-width="3.5" stroke-linecap="round"/>
                  <line x1="120" y1="108" x2="138" y2="40" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
                  <!-- Panel 3D bevel frame -->
                  <polygon points="45,22 150,38 110,115 5,99" fill="url(#offFrameGrad)" stroke="#64748b" stroke-width="1.5"/>
                  <polygon points="49,25 146,39 107,112 10,98" fill="url(#offSiliconGrad)"/>
                  <!-- Grid cell lines -->
                  <line x1="82" y1="30" x2="43" y2="104" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
                  <line x1="115" y1="35" x2="76" y2="108" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
                  <line x1="43" y1="46" x2="139" y2="60" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
                  <line x1="32" y1="65" x2="128" y2="79" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
                  <line x1="21" y1="84" x2="117" y2="98" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
                  <!-- Label -->
                  <text x="75" y="140" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle" id="lblPanels">SOLAR PANELS</text>
                </g>

                <!-- 3. INVERTER (Solar PCU) -->
                <g id="nodeInverter" transform="translate(360, 165)">
                  <!-- Inverter casing -->
                  <rect x="0" y="0" width="140" height="150" rx="14" fill="#ffffff" stroke="#0f172a" stroke-width="2.5"/>
                  <!-- Top heat-sink cooling vent -->
                  <rect x="15" y="12" width="110" height="12" rx="4" fill="#e2e8f0"/>
                  <line x1="25" y1="18" x2="115" y2="18" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 3"/>
                  <!-- LCD Display -->
                  <rect x="20" y="36" width="100" height="46" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5"/>
                  <text x="70" y="55" font-size="9" font-weight="800" fill="#22c55e" text-anchor="middle" id="invLcdLine1">SOLAR ACTIVE</text>
                  <text x="70" y="70" font-size="8" font-weight="700" fill="#a7f3d0" text-anchor="middle" id="invLcdLine2">&rarr; LOAD + BAT</text>
                  <!-- Dual Status LEDs -->
                  <circle cx="35" cy="100" r="5" fill="#22c55e" id="ledInvPower"/>
                  <circle cx="55" cy="100" r="5" fill="#3b82f6"/>
                  <!-- Conversion Zap Icon -->
                  <path d="M 85 92 L 95 92 L 90 100 L 98 100 L 86 112 L 89 104 L 83 104 Z" fill="#f59e0b"/>
                  <!-- Label -->
                  <text x="70" y="132" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">INVERTER</text>
                </g>

                <!-- 4. BATTERY STORAGE -->
                <g id="nodeBattery" transform="translate(360, 380)">
                  <!-- Battery Cabinet -->
                  <rect x="0" y="0" width="140" height="100" rx="12" fill="url(#offBatteryGrad)" stroke="#334155" stroke-width="2"/>
                  <!-- Terminal Posts -->
                  <rect x="25" y="-6" width="16" height="6" rx="2" fill="#ef4444"/>
                  <rect x="99" y="-6" width="16" height="6" rx="2" fill="#3b82f6"/>
                  <!-- Battery State of Charge (SoC) Bar -->
                  <rect x="18" y="20" width="104" height="24" rx="5" fill="#020617" stroke="#475569" stroke-width="1"/>
                  <!-- Dynamic Level Fill -->
                  <rect x="22" y="24" width="76" height="16" rx="3" fill="#10b981" id="batChargeFill"/>
                  <line x1="45" y1="24" x2="45" y2="40" stroke="#020617" stroke-width="2"/>
                  <line x1="70" y1="24" x2="70" y2="40" stroke="#020617" stroke-width="2"/>
                  <line x1="95" y1="24" x2="95" y2="40" stroke="#020617" stroke-width="2"/>
                  <!-- Status text & icon -->
                  <text x="70" y="62" font-size="9" font-weight="800" fill="#38bdf8" text-anchor="middle" id="batStatusText">CHARGING &bull; 85%</text>
                  <!-- Label -->
                  <text x="70" y="85" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">BATTERY</text>
                </g>

                <!-- 5. HOME / LOAD -->
                <g id="nodeHome" transform="translate(640, 160)">
                  <!-- Red Chimney -->
                  <rect x="110" y="10" width="16" height="30" fill="#b91c1c" stroke="#000000" stroke-width="2"/>
                  <!-- White Facade -->
                  <rect x="15" y="55" width="115" height="75" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
                  <!-- Red Gable Roof -->
                  <polygon points="72,5 140,55 5,55" fill="#b91c1c" stroke="#000000" stroke-width="2.5"/>
                  <!-- Windows (Glows warmly in Day & Night) -->
                  <rect x="26" y="70" width="22" height="20" fill="#facc15" stroke="#000000" stroke-width="1.5"/>
                  <line x1="37" y1="70" x2="37" y2="90" stroke="#000000" stroke-width="1.2"/>
                  <line x1="26" y1="80" x2="48" y2="80" stroke="#000000" stroke-width="1.2"/>

                  <rect x="94" y="70" width="22" height="20" fill="#facc15" stroke="#000000" stroke-width="1.5"/>
                  <line x1="105" y1="70" x2="105" y2="90" stroke="#000000" stroke-width="1.2"/>
                  <line x1="94" y1="80" x2="116" y2="80" stroke="#000000" stroke-width="1.2"/>

                  <!-- Roof Attic Window -->
                  <rect x="62" y="28" width="20" height="16" fill="#facc15" stroke="#000000" stroke-width="1.5"/>
                  <!-- Front Door -->
                  <rect x="60" y="74" width="24" height="56" fill="#991b1b" stroke="#000000" stroke-width="2"/>
                  <circle cx="66" cy="102" r="2" fill="#facc15"/>
                  <!-- Label -->
                  <text x="72" y="152" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle" id="lblHome">HOME / LOAD</text>
                </g>
              </svg>
            </div>

            <!-- Simple Live Simulation State Footer -->
            <div style="padding:0.75rem 1.25rem; background:#f1f5f9; border-top:1px solid #e2e8f0; display:flex; align-items:center; justify-content:space-between; font-size:0.85rem; font-weight:700; color:#334155;" id="offgridSimFooter">
              <span id="offgridFlowSummary">DAY: Sun &rarr; Solar Panels &rarr; Inverter &rarr; Home + Battery Charging</span>
              <span style="display:inline-flex; align-items:center; gap:0.35rem; color:#16a34a; font-size:0.8rem; font-weight:800;">
                <span style="width:6px; height:6px; border-radius:50%; background:#16a34a;"></span>
                No Grid Connection
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. WHAT IS OFF-GRID SOLAR? (COMPACT & CLEAN) -->
    <section class="section" style="padding: 3.75rem 0; background: #ffffff;" id="how-it-works">
      <div class="container" style="max-width: 980px; text-align: center;">
        <div style="display:inline-block; font-size:0.78rem; font-weight:800; color:#2563eb; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.75rem;">
          WHAT IS OFF-GRID SOLAR?
        </div>
        <h2 style="font-size: clamp(1.9rem, 3vw, 2.5rem); font-weight: 900; color: #071530; margin-bottom: 1.25rem;">
          Solar Power With Battery Storage.
        </h2>
        <p style="color: #475569; font-size: 1.08rem; line-height: 1.75; max-width: 800px; margin: 0 auto 2.25rem auto;">
          Solar panels generate electricity during the day. The battery stores available energy for later use. When solar power is unavailable or insufficient, stored battery energy can supply the connected loads.
        </p>

        <!-- Simple Visual Flow: SOLAR -> BATTERY -> YOUR PROPERTY -->
        <div style="display: inline-flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 0.85rem; background: #f8fafc; border: 1.5px solid #e2e8f0; padding: 1.25rem 2rem; border-radius: 9999px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
          <div style="display:flex; align-items:center; gap:0.5rem; font-weight:800; font-size:0.95rem; color:#0f172a;">
            <span style="font-size:1.25rem;">&#9728;</span> SOLAR
          </div>
          <span style="color:#2563eb; font-weight:900; font-size:1.25rem;">&rarr;</span>
          <div style="display:flex; align-items:center; gap:0.5rem; font-weight:800; font-size:0.95rem; color:#0f172a;">
            <span style="font-size:1.25rem;">&#128267;</span> BATTERY
          </div>
          <span style="color:#2563eb; font-weight:900; font-size:1.25rem;">&rarr;</span>
          <div style="display:flex; align-items:center; gap:0.5rem; font-weight:800; font-size:0.95rem; color:#0f172a;">
            <span style="font-size:1.25rem;">&#127968;</span> YOUR PROPERTY
          </div>
        </div>
      </div>
    </section>

    <!-- 4. WHERE IS IT USED? (4 CARDS ONLY) -->
    <section class="section" style="padding: 4.5rem 0 4rem; background: #f8fafc; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
      <div class="container container-wide" style="max-width: 1440px; width: 100%; padding: 0 1.5rem;">
        <div style="text-align:center; max-width:760px; margin:0 auto 1.5rem auto;">
          <h2 style="font-size: clamp(1.9rem, 3.2vw, 2.5rem); font-weight: 900; color: #071530; margin-bottom: 0.75rem;">
            Where Off-Grid Solar Makes Sense
          </h2>
          <p style="color: #64748b; font-size: 1.05rem; line-height: 1.6;">
            Tailored autonomous energy solutions for independent residential, rural, and remote demands.
          </p>
        </div>

        <div class="offgrid-apps-grid">
          <!-- Card 1: Remote Homes -->
          <div class="offgrid-app-card">
            <div class="offgrid-app-img-wrap">
              <img src="assets/solar-homes-hero.jpg" alt="Remote Homes" loading="lazy">
            </div>
            <div class="offgrid-app-body">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>&#127968;</span> REMOTE HOMES
              </h3>
              <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                For properties with limited or no grid access.
              </p>
            </div>
          </div>

          <!-- Card 2: Farms & Farmhouses -->
          <div class="offgrid-app-card">
            <div class="offgrid-app-img-wrap">
              <img src="assets/solar-water-pump.jpg" alt="Farms & Farmhouses" loading="lazy">
            </div>
            <div class="offgrid-app-body">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>&#127806;</span> FARMS &amp; FARMHOUSES
              </h3>
              <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                For suitable agricultural and rural applications.
              </p>
            </div>
          </div>

          <!-- Card 3: Remote Locations -->
          <div class="offgrid-app-card">
            <div class="offgrid-app-img-wrap">
              <img src="assets/solar-groundmount-hero.jpg" alt="Remote Locations" loading="lazy">
            </div>
            <div class="offgrid-app-body">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>&#128205;</span> REMOTE LOCATIONS
              </h3>
              <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                For places where grid connection is unavailable or difficult.
              </p>
            </div>
          </div>

          <!-- Card 4: Independent Loads -->
          <div class="offgrid-app-card">
            <div class="offgrid-app-img-wrap">
              <img src="assets/solar-street-light.jpg" alt="Independent Loads" loading="lazy">
            </div>
            <div class="offgrid-app-body">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>&#128161;</span> INDEPENDENT LOADS
              </h3>
              <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                For selected applications requiring independent solar power.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. OFF-GRID VS ON-GRID VS HYBRID (3 COMPACT CARDS) -->
    <section class="section" style="padding: 4.5rem 0; background: #ffffff;">
      <div class="container container-wide" style="max-width: 1200px; width: 100%; padding: 0 1.5rem;">
        <div style="text-align:center; max-width:760px; margin:0 auto 1rem auto;">
          <h2 style="font-size: clamp(1.9rem, 3.2vw, 2.5rem); font-weight: 900; color: #071530; margin-bottom: 0.75rem;">
            Which Solar System Is Right For You?
          </h2>
          <p style="color: #64748b; font-size: 1.05rem; line-height: 1.6;">
            A straightforward comparison to help you choose the best solar architecture.
          </p>
        </div>

        <div class="offgrid-compare-grid">
          <!-- Card 1: On-Grid -->
          <div class="offgrid-compare-card">
            <div style="font-size: 0.8rem; font-weight: 800; color: #64748b; text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.05em;">
              GRID-TIED
            </div>
            <h3 style="font-size: 1.5rem; font-weight: 900; color: #0f172a; margin-bottom: 0.35rem;">
              ON-GRID
            </h3>
            <div style="font-size: 0.95rem; font-weight: 700; color: #2563eb; margin-bottom: 1rem;">
              Solar + Grid
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; flex-grow: 1;">
              Best when reliable grid connection is available.
            </p>
            <a href="/solutions/on-grid" style="color: #2563eb; font-weight: 800; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
              Explore On-Grid &rarr;
            </a>
          </div>

          <!-- Card 2: Off-Grid (Current System) -->
          <div class="offgrid-compare-card card-active">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
              <span style="font-size: 0.8rem; font-weight: 800; color: #2563eb; text-transform: uppercase; letter-spacing: 0.05em;">
                STANDALONE
              </span>
              <span style="background: #2563eb; color: #ffffff; font-size: 0.7rem; font-weight: 800; padding: 2px 8px; border-radius: 9999px; text-transform: uppercase;">
                CURRENT
              </span>
            </div>
            <h3 style="font-size: 1.5rem; font-weight: 900; color: #0f172a; margin-bottom: 0.35rem;">
              OFF-GRID
            </h3>
            <div style="font-size: 0.95rem; font-weight: 700; color: #2563eb; margin-bottom: 1rem;">
              Solar + Battery
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; flex-grow: 1;">
              Best when independent operation is required.
            </p>
            <span style="color: #16a34a; font-weight: 800; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 0.35rem;">
              &#10004; 100% Autonomous
            </span>
          </div>

          <!-- Card 3: Hybrid -->
          <div class="offgrid-compare-card">
            <div style="font-size: 0.8rem; font-weight: 800; color: #64748b; text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.05em;">
              DUAL BACKUP
            </div>
            <h3 style="font-size: 1.5rem; font-weight: 900; color: #0f172a; margin-bottom: 0.35rem;">
              HYBRID
            </h3>
            <div style="font-size: 0.95rem; font-weight: 700; color: #2563eb; margin-bottom: 1rem;">
              Solar + Battery + Grid
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; flex-grow: 1;">
              Best when you want solar savings with battery backup.
            </p>
            <a href="/solutions/hybrid" style="color: #2563eb; font-weight: 800; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
              Explore Hybrid &rarr;
            </a>
          </div>
        </div>

        <!-- Add expert CTA below comparison -->
        <div style="text-align: center; margin-top: 2.75rem; padding-top: 2rem; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 1.05rem; font-weight: 600; color: #475569; margin-bottom: 0.75rem;">
            Not sure which one is right for you?
          </p>
          <a href="/quotation" class="btn btn-primary" style="padding: 0.85rem 2rem; font-size: 0.95rem; font-weight: 700;">
            TALK TO A SOLAR EXPERT &rarr;
          </a>
        </div>
      </div>
    </section>

    <!-- 6. SMALL FAQ (EXACTLY 4 QUESTIONS) -->
    <section class="section" style="padding: 4.5rem 0; background: #f8fafc; border-top: 1px solid #e2e8f0;">
      <div class="container" style="max-width: 820px;">
        <div style="text-align: center; margin-bottom: 2.25rem;">
          <span style="font-size:0.78rem; font-weight:800; color:#2563eb; letter-spacing:0.08em; text-transform:uppercase; display:block; margin-bottom:0.5rem;">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 style="font-size: clamp(1.8rem, 3vw, 2.3rem); font-weight: 900; color: #071530;">
            Questions About Off-Grid Solar
          </h2>
        </div>

        <div>
          <!-- Q1 -->
          <div class="offgrid-faq-item active">
            <button class="offgrid-faq-btn" type="button" onclick="window.toggleOffGridFaq(this)">
              <span>What is an Off-Grid Solar System?</span>
              <span class="offgrid-faq-icon">&#9662;</span>
            </button>
            <div class="offgrid-faq-ans" style="display:block;">
              An Off-Grid Solar System is an autonomous setup that generates electricity using solar panels and stores surplus energy in a battery bank. It operates completely independently without any connection to the public utility grid.
            </div>
          </div>

          <!-- Q2 -->
          <div class="offgrid-faq-item">
            <button class="offgrid-faq-btn" type="button" onclick="window.toggleOffGridFaq(this)">
              <span>Does Off-Grid Solar need a battery?</span>
              <span class="offgrid-faq-icon">&#9662;</span>
            </button>
            <div class="offgrid-faq-ans">
              Yes. Because an off-grid system has no grid connection to draw electricity from, a battery bank is required to store daytime solar electricity and supply power when solar generation is unavailable.
            </div>
          </div>

          <!-- Q3 -->
          <div class="offgrid-faq-item">
            <button class="offgrid-faq-btn" type="button" onclick="window.toggleOffGridFaq(this)">
              <span>Can Off-Grid Solar work at night?</span>
              <span class="offgrid-faq-icon">&#9662;</span>
            </button>
            <div class="offgrid-faq-ans">
              Yes. During nighttime or overcast conditions, your connected appliances draw stored electrical power directly from the battery bank through the off-grid inverter.
            </div>
          </div>

          <!-- Q4 -->
          <div class="offgrid-faq-item">
            <button class="offgrid-faq-btn" type="button" onclick="window.toggleOffGridFaq(this)">
              <span>How much battery storage do I need?</span>
              <span class="offgrid-faq-icon">&#9662;</span>
            </button>
            <div class="offgrid-faq-ans">
              Battery capacity is sized around your daily power consumption (kWh), peak appliance loads, and required backup duration. Our solar engineers evaluate your specific equipment to design an appropriately balanced battery bank.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. FINAL CTA (SIMPLE DARK NAVY SECTION) -->
    <section class="section" style="padding: 4.5rem 1.5rem; background: #ffffff;">
      <div class="container" style="max-width: 1080px;">
        <div style="background: #071530; border-radius: 20px; padding: 3.5rem 2rem; text-align: center; color: #ffffff; box-shadow: 0 20px 40px rgba(7, 21, 48, 0.18);">
          <h2 style="font-size: clamp(2rem, 3.5vw, 2.6rem); font-weight: 900; margin-bottom: 1rem; color: #ffffff;">
            Need Power Beyond The Grid?
          </h2>
          <p style="font-size: 1.1rem; color: #94a3b8; max-width: 600px; margin: 0 auto 2rem auto; line-height: 1.6;">
            Let's design a solar and battery system around your energy requirements.
          </p>
          <a href="/quotation" class="btn btn-primary" style="padding: 1rem 2.25rem; font-size: 1.05rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem;">
            GET FREE SOLAR QUOTATION &rarr;
          </a>
        </div>
      </div>
    </section>

    <!-- Interactive Script for Simulation Mode & FAQ -->
    <script>
      (function() {
        window.setOffGridSimMode = function(mode) {
          var wrap = document.getElementById('offgridCanvasWrap');
          var btnDay = document.getElementById('btnOffGridDay');
          var btnNight = document.getElementById('btnOffGridNight');
          var sunBeam = document.getElementById('offSunBeam');
          var nodeSun = document.getElementById('nodeSun');
          var nodeMoon = document.getElementById('nodeMoon');
          var trackPanelToInv = document.getElementById('trackPanelToInv');
          var trackInvToBat = document.getElementById('trackInvToBat');
          var trackBatToInv = document.getElementById('trackBatToInv');
          var arrowPanelsToInv = document.getElementById('arrowPanelsToInv');
          var arrowInvToBat = document.getElementById('arrowInvToBat');
          var arrowBatToInv = document.getElementById('arrowBatToInv');
          var invLcdLine1 = document.getElementById('invLcdLine1');
          var invLcdLine2 = document.getElementById('invLcdLine2');
          var batStatusText = document.getElementById('batStatusText');
          var batChargeFill = document.getElementById('batChargeFill');
          var flowSummary = document.getElementById('offgridFlowSummary');
          var lblPanels = document.getElementById('lblPanels');
          var lblHome = document.getElementById('lblHome');

          if (!wrap) return;

          if (mode === 'day') {
            wrap.classList.remove('mode-night');
            btnDay.style.background = '#ffffff';
            btnDay.style.color = '#0f172a';
            btnDay.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            btnNight.style.background = 'transparent';
            btnNight.style.color = '#64748b';
            btnNight.style.boxShadow = 'none';

            if (sunBeam) sunBeam.style.display = 'block';
            if (nodeSun) nodeSun.style.display = 'block';
            if (nodeMoon) nodeMoon.style.display = 'none';
            if (trackPanelToInv) trackPanelToInv.style.display = 'block';
            if (trackInvToBat) trackInvToBat.style.display = 'block';
            if (trackBatToInv) trackBatToInv.style.display = 'none';
            if (arrowPanelsToInv) arrowPanelsToInv.style.display = 'block';
            if (arrowInvToBat) arrowInvToBat.style.display = 'block';
            if (arrowBatToInv) arrowBatToInv.style.display = 'none';

            if (invLcdLine1) { invLcdLine1.textContent = 'SOLAR ACTIVE'; invLcdLine1.setAttribute('fill', '#22c55e'); }
            if (invLcdLine2) invLcdLine2.textContent = '\u2192 LOAD + BAT';
            if (batStatusText) { batStatusText.textContent = 'CHARGING \u2022 85%'; batStatusText.setAttribute('fill', '#38bdf8'); }
            if (batChargeFill) batChargeFill.setAttribute('fill', '#10b981');
            if (lblPanels) lblPanels.setAttribute('fill', '#0f172a');
            if (lblHome) lblHome.setAttribute('fill', '#0f172a');

            if (flowSummary) {
              flowSummary.textContent = 'DAY: Sun \u2192 Solar Panels \u2192 Inverter \u2192 Home + Battery Charging';
            }
          } else {
            wrap.classList.add('mode-night');
            btnNight.style.background = '#ffffff';
            btnNight.style.color = '#0f172a';
            btnNight.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            btnDay.style.background = 'transparent';
            btnDay.style.color = '#64748b';
            btnDay.style.boxShadow = 'none';

            if (sunBeam) sunBeam.style.display = 'none';
            if (nodeSun) nodeSun.style.display = 'none';
            if (nodeMoon) nodeMoon.style.display = 'block';
            if (trackPanelToInv) trackPanelToInv.style.display = 'none';
            if (trackInvToBat) trackInvToBat.style.display = 'none';
            if (trackBatToInv) trackBatToInv.style.display = 'block';
            if (arrowPanelsToInv) arrowPanelsToInv.style.display = 'none';
            if (arrowInvToBat) arrowInvToBat.style.display = 'none';
            if (arrowBatToInv) arrowBatToInv.style.display = 'block';

            if (invLcdLine1) { invLcdLine1.textContent = 'BATTERY POWER'; invLcdLine1.setAttribute('fill', '#f59e0b'); }
            if (invLcdLine2) invLcdLine2.textContent = '\u2192 HOME LOAD';
            if (batStatusText) { batStatusText.textContent = 'DISCHARGING \u2022 75%'; batStatusText.setAttribute('fill', '#f59e0b'); }
            if (batChargeFill) batChargeFill.setAttribute('fill', '#f59e0b');
            if (lblPanels) lblPanels.setAttribute('fill', '#94a3b8');
            if (lblHome) lblHome.setAttribute('fill', '#f1f5f9');

            if (flowSummary) {
              flowSummary.textContent = 'NIGHT: Battery \u2192 Inverter \u2192 Home (Autonomous Night Power)';
            }
          }
        };

        window.toggleOffGridFaq = function(btn) {
          var item = btn.closest('.offgrid-faq-item');
          if (!item) return;
          var wasActive = item.classList.contains('active');
          var allItems = document.querySelectorAll('.offgrid-faq-item');
          allItems.forEach(function(el) {
            el.classList.remove('active');
            var ans = el.querySelector('.offgrid-faq-ans');
            if (ans) ans.style.display = 'none';
          });
          if (!wasActive) {
            item.classList.add('active');
            var ans = item.querySelector('.offgrid-faq-ans');
            if (ans) ans.style.display = 'block';
          }
        };
      })();
    </script>
  `;
}


// 10. HYBRID VIEW (/solutions/hybrid)
function renderHybridView() {
  document.title = "Hybrid Solar Systems | VOLT'S LEGACY SOLAR";

  return `
    <!-- Hybrid Solar Page Styles -->
    <style>
      .hybrid-hero {
        position: relative;
        background: linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%);
        padding: 3.5rem 0 3rem;
        overflow: hidden;
        border-bottom: 1px solid #e2e8f0;
      }
      .hybrid-hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 90% 10%, rgba(37, 99, 235, 0.08), transparent 45%),
                    radial-gradient(circle at 10% 90%, rgba(245, 158, 11, 0.07), transparent 45%);
        pointer-events: none;
      }
      .hybrid-hero-grid {
        display: grid;
        grid-template-columns: 1.05fr 1fr;
        gap: 2.5rem;
        align-items: center;
      }
      @media (max-width: 1080px) {
        .hybrid-hero-grid {
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
      }
      .hybrid-hero-title {
        font-size: clamp(2.3rem, 4.2vw, 3.4rem);
        font-weight: 900;
        line-height: 1.15;
        letter-spacing: -0.03em;
        color: #071530;
        margin-bottom: 1.25rem;
        text-transform: uppercase;
      }
      .hybrid-hero-title span {
        color: #2563eb;
        display: block;
      }
      .hybrid-hero-desc {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #475569;
        max-width: 620px;
        margin-bottom: 1.75rem;
      }
      .hybrid-hero-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1.75rem;
      }

      /* Simulation Card Container */
      .hybrid-sim-card {
        position: relative;
        background: #ffffff;
        border-radius: 20px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8);
        overflow: hidden;
      }
      .hybrid-sim-topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.85rem 1.25rem;
        background: #ffffff;
        border-bottom: 1px solid #e2e8f0;
      }
      .hybrid-sim-canvas-wrap {
        position: relative;
        width: 100%;
        background: #f8fafc;
        overflow: hidden;
        transition: background 0.3s ease;
      }
      .hybrid-sim-canvas-wrap.mode-night {
        background: #0b132b;
      }
      .hybrid-sim-canvas-wrap.mode-outage {
        background: #111827;
      }

      /* Animated SVG Particle Streams */
      .hybrid-track {
        fill: none;
        stroke-linecap: round;
        stroke-dasharray: 8 22;
        animation: hybridFlow 1.2s linear infinite;
      }
      .hybrid-track-rev {
        fill: none;
        stroke-linecap: round;
        stroke-dasharray: 8 22;
        animation: hybridFlowRev 1.2s linear infinite;
      }
      @keyframes hybridFlow {
        from { stroke-dashoffset: 60; }
        to { stroke-dashoffset: 0; }
      }
      @keyframes hybridFlowRev {
        from { stroke-dashoffset: 0; }
        to { stroke-dashoffset: 60; }
      }

      /* 4 Application Cards */
      .hybrid-apps-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        margin-top: 2.5rem;
      }
      @media (max-width: 1100px) {
        .hybrid-apps-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 640px) {
        .hybrid-apps-grid {
          grid-template-columns: 1fr;
        }
      }
      .hybrid-app-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        overflow: hidden;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .hybrid-app-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
      }
      .hybrid-app-img-wrap {
        width: 100%;
        height: 210px;
        overflow: hidden;
        background: #0f172a;
        position: relative;
      }
      .hybrid-app-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.35s ease;
      }
      .hybrid-app-card:hover .hybrid-app-img-wrap img {
        transform: scale(1.05);
      }
      .hybrid-app-body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      /* 3 Comparison Cards */
      .hybrid-compare-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-top: 2.5rem;
      }
      @media (max-width: 860px) {
        .hybrid-compare-grid {
          grid-template-columns: 1fr;
        }
      }
      .hybrid-compare-card {
        background: #ffffff;
        border: 1.5px solid #e2e8f0;
        border-radius: 16px;
        padding: 2rem 1.75rem;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
      }
      .hybrid-compare-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
      }
      .hybrid-compare-card.card-active {
        border-color: #2563eb;
        box-shadow: 0 12px 30px rgba(37, 99, 235, 0.12);
        background: #fafcff;
      }

      /* FAQ Accordion */
      .hybrid-faq-item {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        margin-bottom: 0.85rem;
        overflow: hidden;
        transition: border-color 0.2s ease;
      }
      .hybrid-faq-item:hover {
        border-color: #cbd5e1;
      }
      .hybrid-faq-btn {
        width: 100%;
        padding: 1.25rem 1.5rem;
        text-align: left;
        background: none;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.05rem;
        font-weight: 700;
        color: #0f172a;
        cursor: pointer;
      }
      .hybrid-faq-ans {
        padding: 0 1.5rem 1.25rem;
        color: #475569;
        font-size: 0.95rem;
        line-height: 1.6;
        display: none;
      }
      .hybrid-faq-item.active .hybrid-faq-ans {
        display: block;
      }
      .hybrid-faq-item.active .hybrid-faq-btn {
        color: #2563eb;
      }
      .hybrid-faq-icon {
        transition: transform 0.25s ease;
      }
      .hybrid-faq-item.active .hybrid-faq-icon {
        transform: rotate(180deg);
      }
    </style>

    <!-- 1. HERO SECTION (2-COLUMN STRUCTURE) -->
    <section class="hybrid-hero">
      <div class="container container-wide" style="max-width: 1440px; width: 100%; padding: 0 1.5rem;">
        <div class="hybrid-hero-grid">
          <!-- Left Column: Content -->
          <div>
            <div style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.35rem 0.9rem; background:#dbeafe; color:#1e40af; border:1px solid rgba(59,130,246,0.25); border-radius:9999px; font-size:0.75rem; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:1.25rem;">
              OUR EXPERTISE &bull; HYBRID SOLAR
            </div>

            <h1 class="hybrid-hero-title">
              HYBRID SOLAR SYSTEM
              <span>SOLAR POWER. BATTERY BACKUP. GRID SUPPORT.</span>
            </h1>

            <p class="hybrid-hero-desc">
              A Hybrid Solar System combines solar panels, battery storage and grid electricity to give you greater control over how your property uses energy.
            </p>

            <div class="hybrid-hero-actions">
              <a href="/quotation" class="btn btn-primary" style="padding: 0.95rem 2rem; font-size: 1rem; font-weight:700;">
                GET FREE SOLAR QUOTATION &rarr;
              </a>
              <a href="#how-it-works" class="btn btn-secondary" style="padding: 0.95rem 2rem; font-size: 1rem; font-weight:700;">
                SEE HOW IT WORKS &darr;
              </a>
            </div>

            <!-- 3 Highlights Underneath -->
            <div style="display:flex; flex-wrap:wrap; gap:1.75rem; margin-top:1.75rem; padding-top:1.5rem; border-top:1px solid #e2e8f0;">
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; font-weight:700; color:#0f172a;">
                <span style="color:#16a34a; font-weight:900;">&#10004;</span> Solar + Battery
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; font-weight:700; color:#0f172a;">
                <span style="color:#16a34a; font-weight:900;">&#10004;</span> Grid Connected
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; font-weight:700; color:#0f172a;">
                <span style="color:#16a34a; font-weight:900;">&#10004;</span> Backup Capability
              </div>
            </div>
          </div>

          <!-- Right Column: 2. SIMPLE HYBRID SIMULATION -->
          <div class="hybrid-sim-card animate-fade-up" id="hybridSimSection">
            <!-- Top Controls -->
            <div class="hybrid-sim-topbar">
              <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.82rem; font-weight:800; color:#0f172a; text-transform:uppercase; letter-spacing:0.04em;">
                <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#16a34a; box-shadow:0 0 8px #22c55e;"></span>
                Hybrid Energy Flow
              </div>

              <!-- 3-Way Mode Toggle: DAY / NIGHT / OUTAGE -->
              <div style="display:inline-flex; background:#e2e8f0; padding:3px; border-radius:10px; gap:3px;">
                <button type="button" id="btnHybDay" onclick="window.setHybridSimMode('day')" style="padding:5px 12px; border-radius:7px; border:none; font-size:0.75rem; font-weight:800; cursor:pointer; background:#ffffff; color:#0f172a; box-shadow:0 1px 3px rgba(0,0,0,0.1); transition:all 0.2s ease;">
                  DAY &#9728;
                </button>
                <button type="button" id="btnHybNight" onclick="window.setHybridSimMode('night')" style="padding:5px 12px; border-radius:7px; border:none; font-size:0.75rem; font-weight:800; cursor:pointer; background:transparent; color:#64748b; transition:all 0.2s ease;">
                  NIGHT &#127769;
                </button>
                <button type="button" id="btnHybOutage" onclick="window.setHybridSimMode('outage')" style="padding:5px 12px; border-radius:7px; border:none; font-size:0.75rem; font-weight:800; cursor:pointer; background:transparent; color:#64748b; transition:all 0.2s ease;">
                  OUTAGE &#9889;
                </button>
              </div>
            </div>

            <!-- SVG Canvas (Shows 3 Energy Sources: Solar, Battery, Grid) -->
            <div class="hybrid-sim-canvas-wrap" id="hybridCanvasWrap">
              <svg viewBox="0 0 920 540" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; display:block;">
                <defs>
                  <linearGradient id="hybSunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fffbeb"/>
                    <stop offset="30%" stop-color="#fbbf24"/>
                    <stop offset="70%" stop-color="#f59e0b"/>
                    <stop offset="100%" stop-color="#ea580c"/>
                  </linearGradient>
                  <linearGradient id="hybSunBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fef08a" stop-opacity="0.85"/>
                    <stop offset="50%" stop-color="#fef08a" stop-opacity="0.35"/>
                    <stop offset="100%" stop-color="#fef08a" stop-opacity="0.03"/>
                  </linearGradient>
                  <linearGradient id="hybMoonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffffff"/>
                    <stop offset="100%" stop-color="#94a3b8"/>
                  </linearGradient>
                  <linearGradient id="hybSiliconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#0f2b5c"/>
                    <stop offset="40%" stop-color="#1e40af"/>
                    <stop offset="100%" stop-color="#0c234a"/>
                  </linearGradient>
                  <linearGradient id="hybFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f8fafc"/>
                    <stop offset="50%" stop-color="#cbd5e1"/>
                    <stop offset="100%" stop-color="#94a3b8"/>
                  </linearGradient>
                  <linearGradient id="hybBatteryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1e293b"/>
                    <stop offset="100%" stop-color="#0f172a"/>
                  </linearGradient>
                  <filter id="hybGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                  </filter>
                  <!-- Arrow Markers -->
                  <marker id="hybArrowRight" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
                    <path d="M 1 2 L 8 5 L 1 8 Z" fill="#ef4444"/>
                  </marker>
                  <marker id="hybArrowDown" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="5" refY="7" orient="auto">
                    <path d="M 2 1 L 5 8 L 8 1 Z" fill="#06b6d4"/>
                  </marker>
                  <marker id="hybArrowUp" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                    <path d="M 2 8 L 5 1 L 8 8 Z" fill="#f59e0b"/>
                  </marker>
                  <marker id="hybArrowBlue" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
                    <path d="M 1 2 L 8 5 L 1 8 Z" fill="#38bdf8"/>
                  </marker>
                </defs>

                <!-- ================= SUNLIGHT BEAM (Day Only) ================= -->
                <polygon id="hybSunBeam" points="95,75 140,165 245,185 200,285 95,265" fill="url(#hybSunBeamGrad)"/>

                <!-- ================= STATIC CONDUIT CABLES ================= -->
                <!-- 1. Solar Panels to Inverter -->
                <path d="M 220 245 L 390 245" stroke="#ef4444" stroke-width="4.5" stroke-linecap="round"/>
                <line x1="285" y1="245" x2="315" y2="245" stroke="#ef4444" stroke-width="4.5" marker-end="url(#hybArrowRight)" id="hybArrPanelsToInv"/>

                <!-- 2. Inverter to Home -->
                <path d="M 530 245 L 690 245" stroke="#ef4444" stroke-width="4.5" stroke-linecap="round"/>
                <line x1="590" y1="245" x2="620" y2="245" stroke="#ef4444" stroke-width="4.5" marker-end="url(#hybArrowRight)"/>

                <!-- 3. Inverter to Battery (Vertical Bi-directional Link) -->
                <path d="M 460 320 L 460 385" stroke="#ef4444" stroke-width="4.5" stroke-linecap="round"/>
                <!-- Down arrow (charging) -->
                <line x1="460" y1="335" x2="460" y2="360" stroke="#06b6d4" stroke-width="4.5" marker-end="url(#hybArrowDown)" id="hybArrInvToBat"/>
                <!-- Up arrow (discharging) -->
                <line x1="460" y1="370" x2="460" y2="345" stroke="#f59e0b" stroke-width="4.5" marker-end="url(#hybArrowUp)" id="hybArrBatToInv" style="display:none;"/>

                <!-- 4. Grid to Inverter (L-Branch from Top-Right Grid) -->
                <path d="M 690 120 L 460 120 L 460 165" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" id="hybConduitGrid"/>
                <line x1="595" y1="120" x2="565" y2="120" stroke="#38bdf8" stroke-width="4.5" marker-end="url(#hybArrowBlue)" id="hybArrGridToInv"/>

                <!-- ================= ANIMATED PARTICLE TRACKS ================= -->
                <!-- Stream 1: Solar Panel to Inverter (Day Only) -->
                <path id="hybTrackPanels" class="hybrid-track" d="M 220 245 L 390 245" stroke="#fbbf24" stroke-width="5" style="filter: drop-shadow(0 0 6px rgba(251,191,36,0.9));"/>

                <!-- Stream 2: Inverter to Home (Active in all 3 modes) -->
                <path id="hybTrackHome" class="hybrid-track" d="M 530 245 L 690 245" stroke="#10b981" stroke-width="5" style="filter: drop-shadow(0 0 6px rgba(16,185,129,0.9));"/>

                <!-- Stream 3: Inverter to Battery (Day Charging Down) -->
                <path id="hybTrackCharge" class="hybrid-track" d="M 460 320 L 460 385" stroke="#06b6d4" stroke-width="5" style="filter: drop-shadow(0 0 6px rgba(6,182,212,0.9));"/>

                <!-- Stream 4: Battery to Inverter (Night / Outage Discharging Up) -->
                <path id="hybTrackDischarge" class="hybrid-track-rev" d="M 460 385 L 460 320" stroke="#f59e0b" stroke-width="5" style="filter: drop-shadow(0 0 6px rgba(245,158,11,0.9)); display:none;"/>

                <!-- Stream 5: Grid to Inverter (Night assistance / grid support) -->
                <path id="hybTrackGrid" class="hybrid-track-rev" d="M 690 120 L 460 120 L 460 165" stroke="#38bdf8" stroke-width="4.5" style="filter: drop-shadow(0 0 6px rgba(56,189,248,0.9)); display:none;"/>

                <!-- ================= COMPONENT NODES ================= -->

                <!-- 1. SUN / MOON -->
                <!-- DAY SUN -->
                <g id="hybNodeSun" transform="translate(55, 35)">
                  <g stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round">
                    <line x1="40" y1="5" x2="40" y2="15"/>
                    <line x1="40" y1="65" x2="40" y2="75"/>
                    <line x1="5" y1="40" x2="15" y2="40"/>
                    <line x1="65" y1="40" x2="75" y2="40"/>
                    <line x1="15" y1="15" x2="22" y2="22"/>
                    <line x1="58" y1="58" x2="65" y2="65"/>
                    <line x1="65" y1="15" x2="58" y2="22"/>
                    <line x1="15" y1="65" x2="22" y2="58"/>
                  </g>
                  <circle cx="40" cy="40" r="22" fill="url(#hybSunGrad)" filter="url(#hybGlow)"/>
                  <circle cx="34" cy="34" r="8" fill="#ffffff" opacity="0.4"/>
                  <text x="40" y="96" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">SUN</text>
                </g>

                <!-- NIGHT MOON (Hidden in Day) -->
                <g id="hybNodeMoon" transform="translate(55, 35)" style="display:none;">
                  <circle cx="15" cy="20" r="2" fill="#93c5fd" opacity="0.8"/>
                  <circle cx="70" cy="18" r="1.5" fill="#93c5fd" opacity="0.9"/>
                  <circle cx="68" cy="65" r="2" fill="#93c5fd" opacity="0.7"/>
                  <circle cx="40" cy="40" r="22" fill="url(#hybMoonGrad)" filter="url(#hybGlow)"/>
                  <circle cx="48" cy="34" r="18" fill="#0b132b"/>
                  <text x="40" y="96" font-size="12" font-weight="800" fill="#cbd5e1" text-anchor="middle">NIGHT</text>
                </g>

                <!-- 2. SOLAR PANELS -->
                <g id="hybNodePanels" transform="translate(90, 165)">
                  <line x1="30" y1="95" x2="38" y2="35" stroke="#334155" stroke-width="3.5" stroke-linecap="round"/>
                  <line x1="120" y1="108" x2="138" y2="40" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
                  <polygon points="45,22 150,38 110,115 5,99" fill="url(#hybFrameGrad)" stroke="#64748b" stroke-width="1.5"/>
                  <polygon points="49,25 146,39 107,112 10,98" fill="url(#hybSiliconGrad)"/>
                  <line x1="82" y1="30" x2="43" y2="104" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
                  <line x1="115" y1="35" x2="76" y2="108" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
                  <line x1="43" y1="46" x2="139" y2="60" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
                  <line x1="32" y1="65" x2="128" y2="79" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
                  <line x1="21" y1="84" x2="117" y2="98" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
                  <text x="75" y="140" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle" id="hybLblPanels">SOLAR PANELS</text>
                </g>

                <!-- 3. HYBRID INVERTER -->
                <g id="hybNodeInverter" transform="translate(390, 165)">
                  <rect x="0" y="0" width="140" height="155" rx="14" fill="#ffffff" stroke="#0f172a" stroke-width="2.5"/>
                  <rect x="15" y="12" width="110" height="12" rx="4" fill="#e2e8f0"/>
                  <line x1="25" y1="18" x2="115" y2="18" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 3"/>
                  <!-- Digital Inverter Screen -->
                  <rect x="20" y="36" width="100" height="48" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5"/>
                  <text x="70" y="55" font-size="8.5" font-weight="800" fill="#22c55e" text-anchor="middle" id="hybInvScreen1">SOLAR ACTIVE</text>
                  <text x="70" y="71" font-size="8" font-weight="700" fill="#a7f3d0" text-anchor="middle" id="hybInvScreen2">&rarr; LOAD + BAT</text>
                  <!-- Status LEDs -->
                  <circle cx="35" cy="102" r="5" fill="#22c55e" id="hybLedSolar"/>
                  <circle cx="55" cy="102" r="5" fill="#38bdf8" id="hybLedGrid"/>
                  <circle cx="75" cy="102" r="5" fill="#06b6d4" id="hybLedBat"/>
                  <!-- Zap Icon -->
                  <path d="M 98 94 L 108 94 L 103 102 L 111 102 L 99 114 L 102 106 L 96 106 Z" fill="#f59e0b"/>
                  <!-- Label -->
                  <text x="70" y="136" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">HYBRID INVERTER</text>
                </g>

                <!-- 4. BATTERY STORAGE -->
                <g id="hybNodeBattery" transform="translate(390, 385)">
                  <rect x="0" y="0" width="140" height="105" rx="12" fill="url(#hybBatteryGrad)" stroke="#334155" stroke-width="2"/>
                  <rect x="25" y="-6" width="16" height="6" rx="2" fill="#ef4444"/>
                  <rect x="99" y="-6" width="16" height="6" rx="2" fill="#3b82f6"/>
                  <!-- Battery Level Bar -->
                  <rect x="18" y="20" width="104" height="24" rx="5" fill="#020617" stroke="#475569" stroke-width="1"/>
                  <rect x="22" y="24" width="76" height="16" rx="3" fill="#10b981" id="hybBatChargeFill"/>
                  <line x1="45" y1="24" x2="45" y2="40" stroke="#020617" stroke-width="2"/>
                  <line x1="70" y1="24" x2="70" y2="40" stroke="#020617" stroke-width="2"/>
                  <line x1="95" y1="24" x2="95" y2="40" stroke="#020617" stroke-width="2"/>
                  <text x="70" y="64" font-size="9" font-weight="800" fill="#38bdf8" text-anchor="middle" id="hybBatStatusText">CHARGING &bull; 90%</text>
                  <text x="70" y="88" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">BATTERY</text>
                </g>

                <!-- 5. ELECTRICITY GRID (Top-Right) -->
                <g id="hybNodeGrid" transform="translate(690, 50)">
                  <!-- Transmission Tower Lattice -->
                  <g stroke="#334155" stroke-width="2" stroke-linecap="round" fill="none" id="hybGridPylon">
                    <line x1="50" y1="15" x2="25" y2="100"/>
                    <line x1="50" y1="15" x2="75" y2="100"/>
                    <line x1="40" y1="42" x2="60" y2="42"/>
                    <line x1="33" y1="68" x2="67" y2="68"/>
                    <line x1="26" y1="95" x2="74" y2="95"/>
                    <line x1="18" y1="42" x2="82" y2="42" stroke-width="2.5"/>
                    <line x1="12" y1="68" x2="88" y2="68" stroke-width="2.5"/>
                    <!-- Power transmission lines -->
                    <path d="M 82 42 Q 120 48 150 40" stroke="#94a3b8" stroke-width="1.8"/>
                    <path d="M 88 68 Q 125 74 150 66" stroke="#94a3b8" stroke-width="1.8"/>
                  </g>
                  <!-- Insulator Nodes -->
                  <circle cx="18" cy="42" r="3" fill="#38bdf8" id="hybGridNode1"/>
                  <circle cx="82" cy="42" r="3" fill="#38bdf8" id="hybGridNode2"/>
                  <circle cx="12" cy="68" r="3" fill="#38bdf8" id="hybGridNode3"/>
                  <circle cx="88" cy="68" r="3" fill="#38bdf8" id="hybGridNode4"/>
                  <!-- Grid Status Badge -->
                  <rect x="15" y="104" width="70" height="20" rx="10" fill="#dbeafe" id="hybGridBadgeBg"/>
                  <text x="50" y="118" font-size="9" font-weight="800" fill="#1e40af" text-anchor="middle" id="hybGridBadgeText">GRID ON</text>
                </g>

                <!-- 6. HOME / LOAD (Bottom-Right) -->
                <g id="hybNodeHome" transform="translate(690, 180)">
                  <rect x="110" y="10" width="16" height="30" fill="#b91c1c" stroke="#000000" stroke-width="2"/>
                  <rect x="15" y="55" width="115" height="75" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
                  <polygon points="72,5 140,55 5,55" fill="#b91c1c" stroke="#000000" stroke-width="2.5"/>
                  <rect x="26" y="70" width="22" height="20" fill="#facc15" stroke="#000000" stroke-width="1.5"/>
                  <line x1="37" y1="70" x2="37" y2="90" stroke="#000000" stroke-width="1.2"/>
                  <line x1="26" y1="80" x2="48" y2="80" stroke="#000000" stroke-width="1.2"/>
                  <rect x="94" y="70" width="22" height="20" fill="#facc15" stroke="#000000" stroke-width="1.5"/>
                  <line x1="105" y1="70" x2="105" y2="90" stroke="#000000" stroke-width="1.2"/>
                  <line x1="94" y1="80" x2="116" y2="80" stroke="#000000" stroke-width="1.2"/>
                  <rect x="62" y="28" width="20" height="16" fill="#facc15" stroke="#000000" stroke-width="1.5"/>
                  <rect x="60" y="74" width="24" height="56" fill="#991b1b" stroke="#000000" stroke-width="2"/>
                  <circle cx="66" cy="102" r="2" fill="#facc15"/>
                  <text x="72" y="152" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle" id="hybLblHome">HOME / LOAD</text>
                </g>
              </svg>
            </div>

            <!-- Simulation State Footer Bar -->
            <div style="padding:0.75rem 1.25rem; background:#f1f5f9; border-top:1px solid #e2e8f0; display:flex; align-items:center; justify-content:space-between; font-size:0.85rem; font-weight:700; color:#334155;" id="hybSimFooter">
              <span id="hybFlowSummary">DAY: Solar powers property + charges battery. Grid on standby.</span>
              <span style="font-size:0.75rem; color:#64748b; font-weight:600;" id="hybBackupNote">Backup depends on system design and supported loads.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. WHAT IS HYBRID SOLAR? (SMALL SECTION) -->
    <section class="section" style="padding: 3.75rem 0; background: #ffffff;" id="how-it-works">
      <div class="container" style="max-width: 980px; text-align: center;">
        <div style="display:inline-block; font-size:0.78rem; font-weight:800; color:#2563eb; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.75rem;">
          WHAT IS HYBRID SOLAR?
        </div>
        <h2 style="font-size: clamp(1.9rem, 3vw, 2.5rem); font-weight: 900; color: #071530; margin-bottom: 1.25rem;">
          Three Power Sources. One Flexible System.
        </h2>
        <p style="color: #475569; font-size: 1.08rem; line-height: 1.75; max-width: 800px; margin: 0 auto 2.25rem auto;">
          A Hybrid Solar System combines solar generation, battery storage and grid electricity. Solar can power your property during the day, the battery can store energy for later, and the grid can provide additional power when required.
        </p>

        <!-- Simple Visual: SOLAR + BATTERY + GRID -> PROPERTY -->
        <div style="display: inline-flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 0.85rem; background: #f8fafc; border: 1.5px solid #e2e8f0; padding: 1.25rem 2rem; border-radius: 9999px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
          <div style="display:flex; align-items:center; gap:0.5rem; font-weight:800; font-size:0.95rem; color:#0f172a;">
            <span style="font-size:1.25rem;">&#9728;</span> SOLAR
          </div>
          <span style="color:#2563eb; font-weight:900; font-size:1.25rem;">+</span>
          <div style="display:flex; align-items:center; gap:0.5rem; font-weight:800; font-size:0.95rem; color:#0f172a;">
            <span style="font-size:1.25rem;">&#128267;</span> BATTERY
          </div>
          <span style="color:#2563eb; font-weight:900; font-size:1.25rem;">+</span>
          <div style="display:flex; align-items:center; gap:0.5rem; font-weight:800; font-size:0.95rem; color:#0f172a;">
            <span style="font-size:1.25rem;">&#9889;</span> GRID
          </div>
          <span style="color:#2563eb; font-weight:900; font-size:1.25rem;">&rarr;</span>
          <div style="display:flex; align-items:center; gap:0.5rem; font-weight:800; font-size:0.95rem; color:#0f172a;">
            <span style="font-size:1.25rem;">&#127968;</span> PROPERTY
          </div>
        </div>
      </div>
    </section>

    <!-- 4. WHEN DOES HYBRID MAKE SENSE? (4 CARDS ONLY) -->
    <section class="section" style="padding: 4.5rem 0 4rem; background: #f8fafc; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
      <div class="container container-wide" style="max-width: 1440px; width: 100%; padding: 0 1.5rem;">
        <div style="text-align:center; max-width:760px; margin:0 auto 1.5rem auto;">
          <h2 style="font-size: clamp(1.9rem, 3.2vw, 2.5rem); font-weight: 900; color: #071530; margin-bottom: 0.75rem;">
            When Is Hybrid Solar A Good Choice?
          </h2>
          <p style="color: #64748b; font-size: 1.05rem; line-height: 1.6;">
            Balanced power security and utility savings for properties needing continuous operation.
          </p>
        </div>

        <div class="hybrid-apps-grid">
          <!-- Card 1: Homes -->
          <div class="hybrid-app-card">
            <div class="hybrid-app-img-wrap">
              <img src="assets/solar-homes-hero.jpg" alt="Homes" loading="lazy">
            </div>
            <div class="hybrid-app-body">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>&#127968;</span> HOMES
              </h3>
              <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                Solar savings with battery backup for suitable loads.
              </p>
            </div>
          </div>

          <!-- Card 2: Housing Societies -->
          <div class="hybrid-app-card">
            <div class="hybrid-app-img-wrap">
              <img src="assets/solar-society-hero.jpg" alt="Housing Societies" loading="lazy">
            </div>
            <div class="hybrid-app-body">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>&#127970;</span> HOUSING SOCIETIES
              </h3>
              <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                Useful for selected common or essential loads.
              </p>
            </div>
          </div>

          <!-- Card 3: Businesses -->
          <div class="hybrid-app-card">
            <div class="hybrid-app-img-wrap">
              <img src="assets/solar-commercial-hero.jpg" alt="Businesses" loading="lazy">
            </div>
            <div class="hybrid-app-body">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>&#127978;</span> BUSINESSES
              </h3>
              <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                Solar generation with added energy flexibility.
              </p>
            </div>
          </div>

          <!-- Card 4: Areas With Power Outages -->
          <div class="hybrid-app-card">
            <div class="hybrid-app-img-wrap">
              <img src="assets/solar-industrial-hero.jpg" alt="Areas With Power Outages" loading="lazy">
            </div>
            <div class="hybrid-app-body">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>&#9889;</span> AREAS WITH POWER OUTAGES
              </h3>
              <p style="color: #64748b; font-size: 0.95rem; line-height: 1.6; margin: 0;">
                Battery backup for supported loads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. SIMPLE SYSTEM COMPARISON (3 CLEAN CARDS) -->
    <section class="section" style="padding: 4.5rem 0; background: #ffffff;">
      <div class="container container-wide" style="max-width: 1200px; width: 100%; padding: 0 1.5rem;">
        <div style="text-align:center; max-width:760px; margin:0 auto 1rem auto;">
          <h2 style="font-size: clamp(1.9rem, 3.2vw, 2.5rem); font-weight: 900; color: #071530; margin-bottom: 0.75rem;">
            On-Grid, Off-Grid Or Hybrid?
          </h2>
          <p style="color: #64748b; font-size: 1.05rem; line-height: 1.6;">
            A straightforward comparison to help you choose the best solar architecture.
          </p>
        </div>

        <div class="hybrid-compare-grid">
          <!-- Card 1: On-Grid -->
          <div class="hybrid-compare-card">
            <div style="font-size: 1.5rem; margin-bottom: 0.35rem;">&#9728; + &#9889;</div>
            <h3 style="font-size: 1.4rem; font-weight: 900; color: #0f172a; margin-bottom: 0.25rem;">
              ON-GRID
            </h3>
            <div style="font-size: 0.95rem; font-weight: 700; color: #2563eb; margin-bottom: 1rem;">
              Solar + Grid
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; flex-grow: 1;">
              Best for reliable grid-connected locations.
            </p>
            <a href="/solutions/on-grid" style="color: #2563eb; font-weight: 800; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
              Explore On-Grid &rarr;
            </a>
          </div>

          <!-- Card 2: Off-Grid -->
          <div class="hybrid-compare-card">
            <div style="font-size: 1.5rem; margin-bottom: 0.35rem;">&#9728; + &#128267;</div>
            <h3 style="font-size: 1.4rem; font-weight: 900; color: #0f172a; margin-bottom: 0.25rem;">
              OFF-GRID
            </h3>
            <div style="font-size: 0.95rem; font-weight: 700; color: #2563eb; margin-bottom: 1rem;">
              Solar + Battery
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; flex-grow: 1;">
              Best when independent operation is required.
            </p>
            <a href="/solutions/off-grid" style="color: #2563eb; font-weight: 800; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
              Explore Off-Grid &rarr;
            </a>
          </div>

          <!-- Card 3: Hybrid (Active Card) -->
          <div class="hybrid-compare-card card-active">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
              <span style="font-size: 1.5rem;">&#9728; + &#128267; + &#9889;</span>
              <span style="background: #2563eb; color: #ffffff; font-size: 0.7rem; font-weight: 800; padding: 2px 8px; border-radius: 9999px; text-transform: uppercase;">
                CURRENT
              </span>
            </div>
            <h3 style="font-size: 1.4rem; font-weight: 900; color: #0f172a; margin-bottom: 0.25rem;">
              HYBRID
            </h3>
            <div style="font-size: 0.95rem; font-weight: 700; color: #2563eb; margin-bottom: 1rem;">
              Solar + Battery + Grid
            </div>
            <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; flex-grow: 1;">
              Best when you want solar + battery backup + grid support.
            </p>
            <span style="color: #16a34a; font-weight: 800; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 0.35rem;">
              &#10004; Complete Flexibility
            </span>
          </div>
        </div>

        <div style="text-align: center; margin-top: 2.75rem; padding-top: 2rem; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 1.05rem; font-weight: 600; color: #475569; margin-bottom: 0.75rem;">
            Not sure which one is right for you?
          </p>
          <a href="/quotation" class="btn btn-primary" style="padding: 0.85rem 2rem; font-size: 0.95rem; font-weight: 700;">
            TALK TO A SOLAR EXPERT &rarr;
          </a>
        </div>
      </div>
    </section>

    <!-- 6. SMALL FAQ (EXACTLY 4 QUESTIONS) -->
    <section class="section" style="padding: 4.5rem 0; background: #f8fafc; border-top: 1px solid #e2e8f0;">
      <div class="container" style="max-width: 820px;">
        <div style="text-align: center; margin-bottom: 2.25rem;">
          <span style="font-size:0.78rem; font-weight:800; color:#2563eb; letter-spacing:0.08em; text-transform:uppercase; display:block; margin-bottom:0.5rem;">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 style="font-size: clamp(1.8rem, 3vw, 2.3rem); font-weight: 900; color: #071530;">
            Questions About Hybrid Solar
          </h2>
        </div>

        <div>
          <!-- Q1 -->
          <div class="hybrid-faq-item active">
            <button class="hybrid-faq-btn" type="button" onclick="window.toggleHybridFaq(this)">
              <span>What is a Hybrid Solar System?</span>
              <span class="hybrid-faq-icon">&#9662;</span>
            </button>
            <div class="hybrid-faq-ans" style="display:block;">
              A Hybrid Solar System combines solar panels, a battery bank, and a connection to the utility grid. It lets you generate solar power, store surplus energy in batteries for later or during blackouts, and use grid power whenever additional electricity is required.
            </div>
          </div>

          <!-- Q2 -->
          <div class="hybrid-faq-item">
            <button class="hybrid-faq-btn" type="button" onclick="window.toggleHybridFaq(this)">
              <span>What is the difference between Hybrid and On-Grid Solar?</span>
              <span class="hybrid-faq-icon">&#9662;</span>
            </button>
            <div class="hybrid-faq-ans">
              An On-Grid system has no battery and automatically shuts down during a grid power outage for lineman safety. A Hybrid system incorporates battery storage and a smart inverter that seamlessly supplies backup power to your supported loads when the grid fails.
            </div>
          </div>

          <!-- Q3 -->
          <div class="hybrid-faq-item">
            <button class="hybrid-faq-btn" type="button" onclick="window.toggleHybridFaq(this)">
              <span>Will Hybrid Solar work during a power cut?</span>
              <span class="hybrid-faq-icon">&#9662;</span>
            </button>
            <div class="hybrid-faq-ans">
              Yes. During a power cut, the hybrid inverter automatically isolates from the grid and uses stored battery energy (and active solar power if during daytime) to keep your supported loads running smoothly.
            </div>
          </div>

          <!-- Q4 -->
          <div class="hybrid-faq-item">
            <button class="hybrid-faq-btn" type="button" onclick="window.toggleHybridFaq(this)">
              <span>Will the whole house get backup power?</span>
              <span class="hybrid-faq-icon">&#9662;</span>
            </button>
            <div class="hybrid-faq-ans">
              Backup depends on system design and supported loads. Typically, essential circuits such as lights, fans, refrigerators, internet routers, and workstations are connected for continuous backup. Heavy loads like large air conditioners or EV chargers are configured based on battery capacity.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. FINAL CTA (SIMPLE DARK NAVY SECTION) -->
    <section class="section" style="padding: 4.5rem 1.5rem; background: #ffffff;">
      <div class="container" style="max-width: 1080px;">
        <div style="background: #071530; border-radius: 20px; padding: 3.5rem 2rem; text-align: center; color: #ffffff; box-shadow: 0 20px 40px rgba(7, 21, 48, 0.18);">
          <h2 style="font-size: clamp(2rem, 3.5vw, 2.6rem); font-weight: 900; margin-bottom: 1rem; color: #ffffff;">
            Want Solar With Battery Backup?
          </h2>
          <p style="font-size: 1.1rem; color: #94a3b8; max-width: 620px; margin: 0 auto 2rem auto; line-height: 1.6;">
            Tell us about your energy requirements and we'll help you choose the right system.
          </p>
          <a href="/quotation" class="btn btn-primary" style="padding: 1rem 2.25rem; font-size: 1.05rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem;">
            GET FREE SOLAR QUOTATION &rarr;
          </a>
        </div>
      </div>
    </section>

    <!-- Interactive Script for Hybrid Simulation (DAY / NIGHT / OUTAGE) & FAQ -->
    <script>
      (function() {
        window.setHybridSimMode = function(mode) {
          var wrap = document.getElementById('hybridCanvasWrap');
          var btnDay = document.getElementById('btnHybDay');
          var btnNight = document.getElementById('btnHybNight');
          var btnOutage = document.getElementById('btnHybOutage');
          
          var sunBeam = document.getElementById('hybSunBeam');
          var nodeSun = document.getElementById('hybNodeSun');
          var nodeMoon = document.getElementById('hybNodeMoon');
          
          var trackPanels = document.getElementById('hybTrackPanels');
          var trackHome = document.getElementById('hybTrackHome');
          var trackCharge = document.getElementById('hybTrackCharge');
          var trackDischarge = document.getElementById('hybTrackDischarge');
          var trackGrid = document.getElementById('hybTrackGrid');

          var arrPanels = document.getElementById('hybArrPanelsToInv');
          var arrCharge = document.getElementById('hybArrInvToBat');
          var arrDischarge = document.getElementById('hybArrBatToInv');
          var arrGrid = document.getElementById('hybArrGridToInv');
          var conduitGrid = document.getElementById('hybConduitGrid');

          var invScreen1 = document.getElementById('hybInvScreen1');
          var invScreen2 = document.getElementById('hybInvScreen2');
          var batStatusText = document.getElementById('hybBatStatusText');
          var batChargeFill = document.getElementById('hybBatChargeFill');

          var gridBadgeBg = document.getElementById('hybGridBadgeBg');
          var gridBadgeText = document.getElementById('hybGridBadgeText');
          var gridPylon = document.getElementById('hybGridPylon');

          var flowSummary = document.getElementById('hybFlowSummary');
          var lblPanels = document.getElementById('hybLblPanels');
          var lblHome = document.getElementById('hybLblHome');

          if (!wrap) return;

          // Reset buttons
          var btns = [btnDay, btnNight, btnOutage];
          btns.forEach(function(b) {
            if (b) {
              b.style.background = 'transparent';
              b.style.color = '#64748b';
              b.style.boxShadow = 'none';
            }
          });

          if (mode === 'day') {
            wrap.className = 'hybrid-sim-canvas-wrap';
            if (btnDay) {
              btnDay.style.background = '#ffffff';
              btnDay.style.color = '#0f172a';
              btnDay.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }

            // Visual elements
            if (sunBeam) sunBeam.style.display = 'block';
            if (nodeSun) nodeSun.style.display = 'block';
            if (nodeMoon) nodeMoon.style.display = 'none';

            // Energy tracks
            if (trackPanels) trackPanels.style.display = 'block';
            if (trackHome) trackHome.style.display = 'block';
            if (trackCharge) trackCharge.style.display = 'block';
            if (trackDischarge) trackDischarge.style.display = 'none';
            if (trackGrid) trackGrid.style.display = 'none';

            // Arrows
            if (arrPanels) arrPanels.style.display = 'block';
            if (arrCharge) arrCharge.style.display = 'block';
            if (arrDischarge) arrDischarge.style.display = 'none';
            if (arrGrid) arrGrid.style.display = 'none';
            if (conduitGrid) conduitGrid.setAttribute('stroke', '#38bdf8');

            // Inverter LCD
            if (invScreen1) { invScreen1.textContent = 'SOLAR ACTIVE'; invScreen1.setAttribute('fill', '#22c55e'); }
            if (invScreen2) invScreen2.textContent = '\u2192 LOAD + BAT';

            // Battery
            if (batStatusText) { batStatusText.textContent = 'CHARGING \u2022 90%'; batStatusText.setAttribute('fill', '#38bdf8'); }
            if (batChargeFill) batChargeFill.setAttribute('fill', '#10b981');

            // Grid
            if (gridBadgeBg) gridBadgeBg.setAttribute('fill', '#dbeafe');
            if (gridBadgeText) { gridBadgeText.textContent = 'GRID ON'; gridBadgeText.setAttribute('fill', '#1e40af'); }
            if (gridPylon) gridPylon.setAttribute('opacity', '1');

            if (lblPanels) lblPanels.setAttribute('fill', '#0f172a');
            if (lblHome) lblHome.setAttribute('fill', '#0f172a');

            if (flowSummary) {
              flowSummary.textContent = 'DAY: Solar powers property + charges battery. Grid on standby.';
            }

          } else if (mode === 'night') {
            wrap.className = 'hybrid-sim-canvas-wrap mode-night';
            if (btnNight) {
              btnNight.style.background = '#ffffff';
              btnNight.style.color = '#0f172a';
              btnNight.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }

            // Visual elements
            if (sunBeam) sunBeam.style.display = 'none';
            if (nodeSun) nodeSun.style.display = 'none';
            if (nodeMoon) nodeMoon.style.display = 'block';

            // Energy tracks
            if (trackPanels) trackPanels.style.display = 'none';
            if (trackHome) trackHome.style.display = 'block';
            if (trackCharge) trackCharge.style.display = 'none';
            if (trackDischarge) trackDischarge.style.display = 'block';
            if (trackGrid) trackGrid.style.display = 'block';

            // Arrows
            if (arrPanels) arrPanels.style.display = 'none';
            if (arrCharge) arrCharge.style.display = 'none';
            if (arrDischarge) arrDischarge.style.display = 'block';
            if (arrGrid) arrGrid.style.display = 'block';
            if (conduitGrid) conduitGrid.setAttribute('stroke', '#38bdf8');

            // Inverter LCD
            if (invScreen1) { invScreen1.textContent = 'BAT + GRID'; invScreen1.setAttribute('fill', '#38bdf8'); }
            if (invScreen2) invScreen2.textContent = '\u2192 HOME LOAD';

            // Battery
            if (batStatusText) { batStatusText.textContent = 'DISCHARGING \u2022 75%'; batStatusText.setAttribute('fill', '#f59e0b'); }
            if (batChargeFill) batChargeFill.setAttribute('fill', '#f59e0b');

            // Grid
            if (gridBadgeBg) gridBadgeBg.setAttribute('fill', '#dbeafe');
            if (gridBadgeText) { gridBadgeText.textContent = 'GRID ON'; gridBadgeText.setAttribute('fill', '#1e40af'); }
            if (gridPylon) gridPylon.setAttribute('opacity', '1');

            if (lblPanels) lblPanels.setAttribute('fill', '#94a3b8');
            if (lblHome) lblHome.setAttribute('fill', '#f1f5f9');

            if (flowSummary) {
              flowSummary.textContent = 'NIGHT: Battery powers property with grid support when needed.';
            }

          } else if (mode === 'outage') {
            wrap.className = 'hybrid-sim-canvas-wrap mode-outage';
            if (btnOutage) {
              btnOutage.style.background = '#ffffff';
              btnOutage.style.color = '#0f172a';
              btnOutage.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }

            // Visual elements
            if (sunBeam) sunBeam.style.display = 'none';
            if (nodeSun) nodeSun.style.display = 'none';
            if (nodeMoon) nodeMoon.style.display = 'block';

            // Energy tracks
            if (trackPanels) trackPanels.style.display = 'none';
            if (trackHome) trackHome.style.display = 'block';
            if (trackCharge) trackCharge.style.display = 'none';
            if (trackDischarge) trackDischarge.style.display = 'block';
            if (trackGrid) trackGrid.style.display = 'none';

            // Arrows
            if (arrPanels) arrPanels.style.display = 'none';
            if (arrCharge) arrCharge.style.display = 'none';
            if (arrDischarge) arrDischarge.style.display = 'block';
            if (arrGrid) arrGrid.style.display = 'none';
            if (conduitGrid) conduitGrid.setAttribute('stroke', '#475569');

            // Inverter LCD
            if (invScreen1) { invScreen1.textContent = 'GRID CUT'; invScreen1.setAttribute('fill', '#ef4444'); }
            if (invScreen2) invScreen2.textContent = 'BAT \u2192 BACKUP';

            // Battery
            if (batStatusText) { batStatusText.textContent = 'BACKUP \u2022 65%'; batStatusText.setAttribute('fill', '#f59e0b'); }
            if (batChargeFill) batChargeFill.setAttribute('fill', '#f59e0b');

            // Grid shows OFF
            if (gridBadgeBg) gridBadgeBg.setAttribute('fill', '#fee2e2');
            if (gridBadgeText) { gridBadgeText.textContent = 'GRID OFF'; gridBadgeText.setAttribute('fill', '#dc2626'); }
            if (gridPylon) gridPylon.setAttribute('opacity', '0.35');

            if (lblPanels) lblPanels.setAttribute('fill', '#64748b');
            if (lblHome) lblHome.setAttribute('fill', '#f1f5f9');

            if (flowSummary) {
              flowSummary.textContent = 'POWER OUTAGE: Grid Off. Battery seamlessly powers supported loads.';
            }
          }
        };

        window.toggleHybridFaq = function(btn) {
          var item = btn.closest('.hybrid-faq-item');
          if (!item) return;
          var wasActive = item.classList.contains('active');
          var allItems = document.querySelectorAll('.hybrid-faq-item');
          allItems.forEach(function(el) {
            el.classList.remove('active');
            var ans = el.querySelector('.hybrid-faq-ans');
            if (ans) ans.style.display = 'none';
          });
          if (!wasActive) {
            item.classList.add('active');
            var ans = item.querySelector('.hybrid-faq-ans');
            if (ans) ans.style.display = 'block';
          }
        };
      })();
    </script>
  `;
}


// 11. PROJECTS GALLERY VIEW (/projects)
// 11. PROJECTS GALLERY VIEW (/projects)
function renderProjectsView() {
  document.title = "Our Projects | VOLT'S LEGACY SOLAR";

  return `
    <div class="section section-dark" style="padding-top:2.25rem; padding-bottom:2rem;">
      <div class="container">
        <div class="section-header" style="margin-bottom:0;">
          <span class="section-tag section-tag-gold">Project Portfolio & 3D Blueprints</span>
          <h1 class="section-title">Our Landmark Engineering Projects</h1>
          <p class="section-subtitle">
            Explore our real-world rooftop solar installations with full 3D CAD blueprints, elevation structural heights, module specifications, and verifiable clean energy generation.
          </p>
        </div>
      </div>
    </div>

    <section class="section section-alt">
      <div class="container">
        <div class="projects-filter-bar">
          <button class="filter-btn active" onclick="window.filterProjects('all', this)">All Real Installations (5)</button>
          <button class="filter-btn" onclick="window.filterProjects('canopy', this)">Elevated Canopies</button>
          <button class="filter-btn" onclick="window.filterProjects('pergola', this)">Terrace Solar Pergolas</button>
          <button class="filter-btn" onclick="window.filterProjects('dual-meter', this)">Dual-Meter Systems</button>
        </div>

        <div class="projects-grid" id="projectsGrid">
          ${PROJECTS_DATA.map(p => `
            <div class="project-card" data-cat="${p.category} ${p.filterTags || ''}">
              <div class="project-img-box">
                <img src="${p.image}" alt="${p.name}" class="project-img" loading="lazy">
                <span class="project-badge">${p.systemType}</span>
                <span class="project-capacity">${p.capacity}</span>
              </div>
              <div class="project-body">
                ${p.clientName ? `
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                    <span style="font-size:0.75rem; font-weight:800; color:var(--blue-600); text-transform:uppercase; letter-spacing:0.04em;">
                      Client: ${p.clientName}
                    </span>
                    ${p.gallery ? `<span style="font-size:0.7rem; background:#f1f5f9; color:#475569; padding:0.15rem 0.45rem; border-radius:4px; font-weight:700;">${p.gallery.length} Drawings</span>` : ''}
                  </div>
                ` : ''}
                <h3 class="project-name" style="font-size:1.15rem; line-height:1.3; margin-bottom:0.4rem;">${p.name}</h3>
                <div class="project-location" style="margin-bottom:0.6rem;">
                  ${SVG_ICONS.mapPin} ${p.location}
                </div>

                ${p.moduleSpecs ? `
                  <div style="display:flex; gap:0.35rem; flex-wrap:wrap; margin-bottom:0.85rem;">
                    <span style="font-size:0.74rem; background:#f8fafc; border:1px solid #e2e8f0; padding:0.2rem 0.5rem; border-radius:4px; font-weight:700; color:#1e293b;">
                      ⚡ ${p.moduleSpecs}
                    </span>
                    ${p.clearanceHeight ? `
                      <span style="font-size:0.74rem; background:#fffbeb; border:1px solid #fde68a; padding:0.2rem 0.5rem; border-radius:4px; font-weight:700; color:#92400e;">
                        📐 ${p.clearanceHeight.split('(')[0]}
                      </span>
                    ` : ''}
                  </div>
                ` : ''}

                <p class="project-desc" style="font-size:0.875rem; color:#64748b; line-height:1.55; margin-bottom:1.15rem; flex-grow:1;">
                  ${p.description}
                </p>

                <div style="display:flex; gap:0.5rem; flex-direction:column;">
                  <a href="/projects/${p.slug}" class="btn btn-primary btn-sm" style="width:100%; text-align:center; justify-content:center;">
                    View Full Project Details ${SVG_ICONS.arrowRight}
                  </a>
                  <button class="btn btn-secondary btn-sm" style="width:100%; justify-content:center;" onclick="window.viewProjectDetails(${p.id})">
                    3D Blueprints & CAD Details
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 11.1 PROJECT DETAILS SUB-PAGE (/projects/:slug)
function renderProjectDetailSubpage(slugOrId) {
  const project = PROJECTS_DATA.find(p => p.slug === slugOrId || p.id == slugOrId) || PROJECTS_DATA[0];
  document.title = `${project.name} | VOLT'S LEGACY SOLAR`;

  // Sibling projects for navigation
  const currentIndex = PROJECTS_DATA.findIndex(p => p.id === project.id);
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const firstGalleryItem = project.gallery && project.gallery.length > 0 ? project.gallery[0] : { src: project.image, title: project.name, tag: 'Overview', desc: project.description };

  return `
    <div class="peta-page-wrapper">
      <!-- HERO HEADER -->
      <section class="peta-hero">
        <div class="container">
          <!-- Breadcrumb -->
          <nav class="peta-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/projects">Our Projects</a>
            <span>/</span>
            <strong>${project.clientName || project.name}</strong>
          </nav>

          <div class="peta-hero-badge-row">
            <span class="peta-pill peta-pill-gold">⚡ Landmark Installation</span>
            <span class="peta-pill peta-pill-blue">${project.systemType}</span>
            <span class="peta-pill peta-pill-green">Capacity: ${project.capacity}</span>
          </div>

          <h1 class="peta-hero-title">${project.name}</h1>
          <div class="peta-hero-meta">
            <div class="peta-meta-item">
              ${SVG_ICONS.mapPin}
              <span>${project.location}</span>
            </div>
            ${project.coordinates ? `
              <div class="peta-meta-item">
                <span>📍 Location / GPS:</span>
                ${project.googleMapsUrl ? `<a href="${project.googleMapsUrl}" target="_blank" rel="noopener noreferrer">${project.coordinates} ↗</a>` : `<span>${project.coordinates}</span>`}
              </div>
            ` : ''}
            <div class="peta-meta-item">
              <span>Client:</span>
              <strong style="color:#ffffff;">${project.clientName || 'Private Installation'}</strong>
            </div>
          </div>
        </div>
      </section>

      <!-- MAIN CONTENT CONTAINER -->
      <div class="container" style="margin-top:2rem;">
        <div class="peta-main-grid">
          
          <!-- LEFT COLUMN: 3D CAD BLUEPRINT & DRAWING VIEWER -->
          <div class="peta-gallery-card animate-fade-up">
            <div class="peta-gallery-header">
              <div class="peta-gallery-title">
                ${SVG_ICONS.sun}
                <span>Interactive 3D CAD & Blueprint Viewer</span>
              </div>
              <span class="peta-gallery-counter" id="petaGalleryCounter">
                Drawing 1 of ${project.gallery ? project.gallery.length : 1}
              </span>
            </div>

            <!-- Active High-Res Viewport -->
            <div class="peta-main-viewport" id="petaMainViewport">
              <img id="petaActiveImg" src="${firstGalleryItem.src}" alt="${firstGalleryItem.title}" class="peta-main-img">
              <div class="peta-viewport-overlay">
                <div class="peta-overlay-text">
                  <h4 id="petaActiveTitle">${firstGalleryItem.title}</h4>
                  <p id="petaActiveDesc">${firstGalleryItem.desc || ''}</p>
                </div>
                <button type="button" class="peta-zoom-btn" onclick="window.openPetaZoom()">
                  <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  <span>Enlarge</span>
                </button>
              </div>
            </div>

            <!-- Thumbnail Ribbon -->
            ${project.gallery && project.gallery.length > 1 ? `
              <div class="peta-thumbnails-wrapper">
                <div class="peta-thumbnails-label">
                  <span>CAD Blueprints & 3D Perspectives (${project.gallery.length} Drawings)</span>
                  <span style="font-size:0.72rem; color:#94a3b8;">Click any drawing to inspect</span>
                </div>
                <div class="peta-thumbnails-scroll" id="petaThumbsContainer">
                  ${project.gallery.map((g, idx) => `
                    <button type="button" class="peta-thumb-btn ${idx === 0 ? 'active' : ''}" 
                      onclick="window.switchPetaImage('${g.src}', '${g.title.replace(/'/g, "\\'")}', '${(g.desc || '').replace(/'/g, "\\'")}', ${idx + 1}, ${project.gallery.length}, this)">
                      <img src="${g.src}" alt="${g.title}" loading="lazy">
                      <span class="peta-thumb-badge">${g.tag || `Page ${idx + 1}`}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Project Narrative Description -->
            <div style="margin-top:1.5rem; padding-top:1.25rem; border-top:1px solid #f1f5f9;">
              <h3 style="font-size:1.1rem; color:#071530; margin-bottom:0.5rem; font-weight:700;">Project Engineering Overview</h3>
              <p style="color:#475569; line-height:1.65; font-size:0.95rem;">${project.description}</p>
            </div>
          </div>

          <!-- RIGHT COLUMN: BANKABLE TECHNICAL SPECIFICATIONS & GENERATION -->
          <div>
            <!-- Specification Table -->
            <div class="peta-specs-card animate-fade-up" style="animation-delay:0.1s;">
              <div class="peta-card-title">
                ${SVG_ICONS.zap}
                <span>Technical Specifications</span>
              </div>
              <div class="peta-spec-list">
                <div class="peta-spec-item">
                  <span class="peta-spec-label">Customer Name</span>
                  <span class="peta-spec-value">${project.clientName || 'Confidential'}</span>
                </div>
                <div class="peta-spec-item">
                  <span class="peta-spec-label">System Capacity</span>
                  <span class="peta-spec-value highlight-gold">${project.capacity}</span>
                </div>
                ${project.moduleSpecs ? `
                  <div class="peta-spec-item">
                    <span class="peta-spec-label">PV Module Brand</span>
                    <span class="peta-spec-value highlight-blue">${project.moduleSpecs}</span>
                  </div>
                ` : ''}
                ${project.moduleFormula ? `
                  <div class="peta-spec-item">
                    <span class="peta-spec-label">Array Configuration</span>
                    <span class="peta-spec-value">${project.moduleFormula}</span>
                  </div>
                ` : ''}
                ${project.tiltAngle ? `
                  <div class="peta-spec-item">
                    <span class="peta-spec-label">Tilt & Orientation</span>
                    <span class="peta-spec-value">${project.tiltAngle} ${project.azimuth ? `(${project.azimuth})` : ''}</span>
                  </div>
                ` : ''}
                ${project.structureType ? `
                  <div class="peta-spec-item">
                    <span class="peta-spec-label">Mounting Structure</span>
                    <span class="peta-spec-value">${project.structureType}</span>
                  </div>
                ` : ''}
                ${project.clearanceHeight ? `
                  <div class="peta-spec-item">
                    <span class="peta-spec-label">Structural Clearance</span>
                    <span class="peta-spec-value">${project.clearanceHeight}</span>
                  </div>
                ` : ''}
                ${project.rafterLength ? `
                  <div class="peta-spec-item">
                    <span class="peta-spec-label">Rafter & Span</span>
                    <span class="peta-spec-value">${project.rafterLength} / ${project.spanWidth || 'Engineered'}</span>
                  </div>
                ` : ''}
                ${project.lightningProtection ? `
                  <div class="peta-spec-item">
                    <span class="peta-spec-label">Surge & Earthing</span>
                    <span class="peta-spec-value">${project.lightningProtection}</span>
                  </div>
                ` : ''}
                ${project.coordinates ? `
                  <div class="peta-spec-item">
                    <span class="peta-spec-label">DISCOM & Coordinates</span>
                    <span class="peta-spec-value">${project.coordinates}</span>
                  </div>
                ` : ''}
              </div>

              <!-- Estimated Generation Widgets -->
              <div class="peta-gen-grid">
                <div class="peta-gen-box">
                  <span class="peta-gen-num" style="color:#0284c7;">${project.estimatedMonthlyUnits || '~500 kWh'}</span>
                  <span class="peta-gen-label">Monthly Units</span>
                </div>
                <div class="peta-gen-box">
                  <span class="peta-gen-num" style="color:#16a34a;">${project.estimatedAnnualGen || '~6,000 kWh'}</span>
                  <span class="peta-gen-label">Annual Yield</span>
                </div>
                <div class="peta-gen-box">
                  <span class="peta-gen-num" style="color:#d97706;">${project.co2Offset || '5.2 T'}</span>
                  <span class="peta-gen-label">Annual CO2 Offset</span>
                </div>
              </div>

              <!-- Engineering Highlights List -->
              ${project.highlights && project.highlights.length > 0 ? `
                <div style="margin-top:1.25rem;">
                  <h4 style="font-size:0.95rem; font-weight:700; color:#071530; margin-bottom:0.65rem;">Engineering Highlights:</h4>
                  <ul class="peta-highlights-list">
                    ${project.highlights.map(h => `
                      <li>
                        <span class="check-icon">✓</span>
                        <span>${h}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              ` : ''}

              <!-- Direct Quotation CTA -->
              <div style="margin-top:1.75rem;">
                <a href="/quotation" class="btn btn-solar" style="width:100%; text-align:center;">
                  Get Quotation For Your Rooftop ${SVG_ICONS.arrowRight}
                </a>
                <a href="https://wa.me/919998765059?text=Hello%20Volt's%20Legacy%20Solar,%20I%20am%20interested%20in%20a%20structure%20like%20${encodeURIComponent(project.name)}" 
                  target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width:100%; margin-top:0.5rem; text-align:center; display:flex; align-items:center; justify-content:center; gap:0.5rem;">
                  ${SVG_ICONS.whatsapp} WhatsApp Our Solar Engineers
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- SIBLING PROJECT NAVIGATION (Previous / Next) -->
        <div class="peta-sibling-nav">
          <a href="/projects/${prevProject.slug}" class="peta-sibling-card">
            <img src="${prevProject.image}" alt="${prevProject.name}" class="peta-sibling-img">
            <div class="peta-sibling-body">
              <div class="peta-sibling-direction">← Previous Landmark Project</div>
              <div class="peta-sibling-name">${prevProject.clientName || prevProject.name}</div>
              <div class="peta-sibling-capacity">${prevProject.capacity} &bull; ${prevProject.systemType}</div>
            </div>
          </a>
          <a href="/projects/${nextProject.slug}" class="peta-sibling-card" style="text-align:right; flex-direction:row-reverse;">
            <img src="${nextProject.image}" alt="${nextProject.name}" class="peta-sibling-img">
            <div class="peta-sibling-body">
              <div class="peta-sibling-direction">Next Landmark Project →</div>
              <div class="peta-sibling-name">${nextProject.clientName || nextProject.name}</div>
              <div class="peta-sibling-capacity">${nextProject.capacity} &bull; ${nextProject.systemType}</div>
            </div>
          </a>
        </div>

      </div>
    </div>
  `;
}


// 12. DESIGN & CONSULTING VIEW (/design-consulting)
function renderDesignConsultingView() {
  document.title = "Solar Design & Technical Consulting | VOLT'S LEGACY SOLAR";

  return `
    <!-- 1. HERO SECTION -->
    <section class="dc-hero-wrapper">
      <div class="container container-wide">
        <div class="dc-hero-grid">
          <div>
            <div class="dc-hero-badge">
              ${SVG_ICONS.zap} Technical Advisory & 3D Simulation
            </div>
            <h1 class="dc-hero-title">
              Precision Solar Engineering & <span>3D Design Consulting</span>
            </h1>
            <p class="dc-hero-subtitle">
              Bankable PVsyst yield simulations, shadow-free 3D CAD modeling, DISCOM-compliant SLDs, and certified structural engineering before a single bolt is fastened on your site.
            </p>

            <div class="dc-hero-actions">
              <a href="/quotation" class="btn btn-solar btn-lg">
                Request 3D Technical Proposal ${SVG_ICONS.arrowRight}
              </a>
              <a href="/contact" class="btn btn-secondary btn-lg">
                Talk to Our Solar Experts ${SVG_ICONS.arrowRight}
              </a>
            </div>

            <!-- Subtle Engineering UI Overlay -->
            <div class="dc-hero-overlay-tag">
              <span>SITE ANALYSIS</span>
              <span class="sep">+</span>
              <span>SOLAR LAYOUT</span>
              <span class="sep">+</span>
              <span>ENGINEERING</span>
            </div>
          </div>

          <div>
            <div class="dc-hero-visual-frame">
              <img src="assets/dc-hero-aerial.jpg" alt="Aerial view of commercial rooftop solar PV engineering" class="dc-hero-img" loading="eager">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. PROBLEM STATEMENT SECTION -->
    <section class="dc-problem-strip">
      <div class="container">
        <div class="section-header" style="margin-bottom:1.5rem; text-align:center;">
          <span class="section-tag section-tag-gold">Engineering Feasibility</span>
          <h2 class="section-title">Why 85% of Unengineered Solar Plants Underperform</h2>
          <p class="section-subtitle" style="max-width:650px; margin:0 auto;">
            Installing solar without prior 3D shadow and electrical engineering leads to permanent generation losses, equipment overheating, and structural risks.
          </p>
        </div>

        <div class="dc-problem-grid">
          <!-- Problem 1: Shadow -->
          <div class="dc-problem-card">
            <div class="dc-problem-img-wrap">
              <img src="assets/dc-problem-shadow.jpg" alt="Rooftop solar panels cast in shadow from high water tank tower" class="dc-problem-img" loading="lazy">
              <span class="dc-problem-badge">UP TO 25% LOSS</span>
            </div>
            <div class="dc-problem-body">
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.6rem;">
                <div class="dc-problem-icon">${SVG_ICONS.sun}</div>
                <h3 style="font-size:1.05rem; font-weight:800; color:#0f172a; margin:0;">Hidden Shadow Obstacles</h3>
              </div>
              <p style="font-size:0.86rem; color:#64748b; line-height:1.55; margin:0;">
                Parapets, elevator rooms, and water tanks cast winter shadows that create cell hotspots and degrade annual plant output by up to 25%.
              </p>
            </div>
          </div>

          <!-- Problem 2: Inverter Clipping -->
          <div class="dc-problem-card">
            <div class="dc-problem-img-wrap">
              <img src="assets/dc-problem-inverter.jpg" alt="Solar string inverter power clipping diagnostic curve" class="dc-problem-img" loading="lazy">
              <span class="dc-problem-badge">CLIPPING LOSS</span>
            </div>
            <div class="dc-problem-body">
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.6rem;">
                <div class="dc-problem-icon">${SVG_ICONS.zap}</div>
                <h3 style="font-size:1.05rem; font-weight:800; color:#0f172a; margin:0;">Inverter Clipping & Mismatch</h3>
              </div>
              <p style="font-size:0.86rem; color:#64748b; line-height:1.55; margin:0;">
                Unbalanced string sizing and MPPT allocation cause severe clipping losses during peak generation hours, wasting generated solar energy.
              </p>
            </div>
          </div>

          <!-- Problem 3: Wind Vulnerability -->
          <div class="dc-problem-card">
            <div class="dc-problem-img-wrap">
              <img src="assets/dc-problem-wind.jpg" alt="Bent solar mounting structure damaged by severe high wind gusts" class="dc-problem-img" loading="lazy">
              <span class="dc-problem-badge">CYCLONE RISK</span>
            </div>
            <div class="dc-problem-body">
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.6rem;">
                <div class="dc-problem-icon">${SVG_ICONS.shield}</div>
                <h3 style="font-size:1.05rem; font-weight:800; color:#0f172a; margin:0;">Structural Wind Vulnerability</h3>
              </div>
              <p style="font-size:0.86rem; color:#64748b; line-height:1.55; margin:0;">
                Generic off-the-shelf mounting structures fail to withstand 150+ km/h cyclone gusts and cause micro-cracks in roof waterproofing.
              </p>
            </div>
          </div>

          <!-- Problem 4: DC Voltage Drop & Fire Risk -->
          <div class="dc-problem-card">
            <div class="dc-problem-img-wrap">
              <img src="assets/dc-problem-cables.jpg" alt="Loose unorganized DC solar cables with thermal hazard inspection" class="dc-problem-img" loading="lazy">
              <span class="dc-problem-badge">FIRE & THERMAL RISK</span>
            </div>
            <div class="dc-problem-body">
              <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.6rem;">
                <div class="dc-problem-icon">${SVG_ICONS.grid}</div>
                <h3 style="font-size:1.05rem; font-weight:800; color:#0f172a; margin:0;">DC Voltage Drop & Fire Risk</h3>
              </div>
              <p style="font-size:0.86rem; color:#64748b; line-height:1.55; margin:0;">
                Improperly calculated DC cable cross-sections create high resistive losses, excess heat in cable trays, and long-term fire hazards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. SERVICES 01-06 (SPECIFIC ENGINEERING VISUALS) -->
    <section class="dc-service-section">
      <div class="container">
        
        <div class="section-header" style="text-align:center; margin-bottom:3.5rem;">
          <span class="section-tag section-tag-gold">Scope of Consulting</span>
          <h2 class="section-title">6 Core Solar Engineering Services</h2>
          <p class="section-subtitle" style="max-width:650px; margin:0 auto;">
            Every phase of our engineering design is documented with CAD drawings, mathematical simulations, and verified against Indian standards.
          </p>
        </div>

        <!-- SERVICE 01 — SITE & FEASIBILITY STUDY -->
        <div class="dc-service-item">
          <div>
            <span class="dc-service-num">SERVICE 01</span>
            <h3 class="dc-service-title">Site & Feasibility Study</h3>
            <p class="dc-service-desc">
              Comprehensive drone survey and satellite mapping to accurately measure available roof area, structural setbacks, true solar azimuth, and obstacle exclusion perimeters.
            </p>
            <div class="dc-feature-pill-list">
              <span class="dc-feature-pill">${SVG_ICONS.check} Roof Boundary & Setback Analysis</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} South Direction & True Azimuth</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Panel Placement Zones</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} HVAC Obstacle Exclusion</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Dedicated Maintenance Walkways</span>
            </div>
            <a href="/quotation" class="btn btn-secondary btn-sm">Schedule Site Survey ${SVG_ICONS.arrowRight}</a>
          </div>
          <div class="dc-service-visual">
            <img src="assets/dc-site-survey.jpg" alt="Drone rooftop solar site survey CAD boundary overlay" class="dc-service-img" loading="lazy">
            <span class="dc-service-label">SITE SURVEY CAD OVERLAY</span>
          </div>
        </div>

        <!-- SERVICE 02 — 3D SOLAR DESIGN -->
        <div class="dc-service-item reverse">
          <div>
            <span class="dc-service-num">SERVICE 02</span>
            <h3 class="dc-service-title">3D Solar Architectural Design</h3>
            <p class="dc-service-desc">
              Photorealistic 3D architectural visualization integrating your solar system harmoniously with the building. We design elevated solar canopies that preserve rooftop utility, protect water tanks, and create usable covered spaces.
            </p>
            <div class="dc-feature-pill-list">
              <span class="dc-feature-pill">${SVG_ICONS.check} Elevated Galvanized Pergola Architecture</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Water Tank & Obstacle Integration</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Walkway Between Two Panel Rows</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} 100% Usable Rooftop Preservation</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Modern Aesthetic Harmony</span>
            </div>
            <a href="/quotation" class="btn btn-secondary btn-sm">Get Quotation for 3D Designs ${SVG_ICONS.arrowRight}</a>
          </div>
          <div class="dc-service-visual">
            <img src="assets/dc-3d-vis.jpg" alt="3D architectural visualization of residential and commercial rooftop solar" class="dc-service-img" loading="lazy">
            <span class="dc-service-label">3D SOLAR VISUALIZATION</span>
          </div>
        </div>

        <!-- SERVICE 03 — SHADOW & GENERATION ANALYSIS -->
        <div class="dc-service-item">
          <div>
            <span class="dc-service-num">SERVICE 03</span>
            <h3 class="dc-service-title">Shadow & Generation Analysis</h3>
            <p class="dc-service-desc">
              Digital twin sun-path simulations across all 365 days of the year. We quantify exact hourly irradiance heatmaps to place panels only in 100% shadow-free zones, eliminating generation loss before installation.
            </p>
            <div class="dc-feature-pill-list">
              <span class="dc-feature-pill">${SVG_ICONS.check} 365-Day Solar Trajectory Arc</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Irradiance Heatmap Modeling</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Surrounding Building Shading Loss</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Bankable PVSyst Generation Yield</span>
            </div>
            <a href="/quotation" class="btn btn-secondary btn-sm">Simulate Plant Generation ${SVG_ICONS.arrowRight}</a>
          </div>
          <div class="dc-service-visual">
            <img src="assets/dc-shadow-sim.jpg" alt="Solar shadow analysis and irradiance heatmap simulation" class="dc-service-img" loading="lazy">
            <span class="dc-service-label">PVSYST SHADOW SIMULATION</span>
          </div>
        </div>

        <!-- SERVICE 04 — ELECTRICAL DESIGN (SLD) -->
        <div class="dc-service-item reverse">
          <div>
            <span class="dc-service-num">SERVICE 04</span>
            <h3 class="dc-service-title">Electrical Design & SLD Schematics</h3>
            <p class="dc-service-desc">
              Clean, professional Single Line Diagrams (SLD) engineered for safety, minimum power loss, and DISCOM net metering compliance. Visually transparent and straightforward for both client review and statutory inspectors.
            </p>
            <div class="dc-feature-pill-list">
              <span class="dc-feature-pill">${SVG_ICONS.check} Solar PV String Matching</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} DCDB with Type II SPDs & Fuses</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Multi-MPPT Grid-Tied Inverters</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} ACDB & Main LT Panel Interface</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Bi-Directional Net Metering Sync</span>
            </div>
            <a href="/quotation" class="btn btn-secondary btn-sm">Get Electrical SLD ${SVG_ICONS.arrowRight}</a>
          </div>
          <div class="dc-service-visual fit-contain" style="cursor:pointer;" title="Click to inspect full high-resolution SLD schematic" onclick="if(window.appModal){window.appModal.openModal('<div style=\'padding:0.5rem;\'><div style=\'display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;\'><h3 style=\'margin:0; font-size:1.25rem; color:#0f172a; font-weight:800;\'>Single Line Diagram (SLD) Electrical Schematic</h3><span style=\'font-size:0.8rem; background:#0284c7; color:#fff; padding:0.25rem 0.6rem; border-radius:4px; font-weight:700;\'>DISCOM / CEI COMPLIANT</span></div><img src=\'assets/dc-electrical-sld.jpg\' style=\'width:100%; height:auto; border-radius:8px; display:block; box-shadow:0 10px 25px rgba(0,0,0,0.15);\' alt=\'Full SLD Diagram\'></div>');}">
            <img src="assets/dc-electrical-sld.jpg" alt="Single Line Diagram SLD schematic for solar electrical system" class="dc-service-img fit-contain" loading="lazy">
            <span class="dc-service-label">SINGLE LINE DIAGRAM (SLD)</span>
          </div>
        </div>

        <!-- SERVICE 05 — STRUCTURAL DESIGN -->
        <div class="dc-service-item">
          <div>
            <span class="dc-service-num">SERVICE 05</span>
            <h3 class="dc-service-title">Structural Design & Wind Engineering</h3>
            <p class="dc-service-desc">
              Precision mounting structure calculations combining 3D CAD stress models with detailed 2D fabrication drawings. Certified to withstand 150–180 km/h wind gusts for both RCC rooftop structures and utility ground-mount solar arrays.
            </p>
            <div class="dc-feature-pill-list">
              <span class="dc-feature-pill">${SVG_ICONS.check} Structural Analysis for Wind Loads and Deflection Limits</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} STAAD.Pro Wind Uplift Simulation</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} RCC Rooftop & Ground Mount 2D Fabrication Blueprints</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Structural Stability Certification</span>
            </div>
            <a href="/quotation" class="btn btn-secondary btn-sm">Download Structural Specs ${SVG_ICONS.arrowRight}</a>
          </div>
          <div class="dc-service-visual-wrap">
            <div class="dc-struct-tabs">
              <button type="button" class="dc-struct-tab active" onclick="window.switchDcStructural('rcc', this)">
                <span>🏢 RCC Roof Structure</span>
              </button>
              <button type="button" class="dc-struct-tab" onclick="window.switchDcStructural('groundmount', this)">
                <span>⚡ Ground Mount Project</span>
              </button>
            </div>
            <div class="dc-service-visual" style="cursor:pointer;" title="Click to inspect full high-resolution engineering drawing" onclick="window.zoomDcStructural()">
              <img id="dcStructuralImg" src="assets/dc-structural-split.jpg" alt="Split 3D RCC solar mounting structure and CAD mechanical engineering drawing" class="dc-service-img" loading="lazy" style="transition: opacity 0.22s ease, transform 0.22s ease;">
              <span class="dc-service-label" id="dcStructuralLabel">RCC ROOF: 3D STRUCTURE + 2D DRAWING</span>
            </div>
          </div>
        </div>

        <!-- SERVICE 06 — APPROVAL & DOCUMENTATION -->
        <div class="dc-service-item reverse">
          <div>
            <span class="dc-service-num">SERVICE 06</span>
            <h3 class="dc-service-title">DISCOM Approval & Statutory Documentation</h3>
            <p class="dc-service-desc">
              End-to-end technical dossier preparation for DISCOM, CEIG electrical inspectorate, and MNRE national portal subsidy clearance. Completely compliant drawings eliminate delays and guarantee first-time approval.
            </p>
            <div class="dc-feature-pill-list">
              <span class="dc-feature-pill">${SVG_ICONS.check} Complete DISCOM Submission Dossier</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} CEIG Electrical Safety Compliance</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Certified Engineer Endorsement</span>
              <span class="dc-feature-pill">${SVG_ICONS.check} Net Metering Technical Approvals</span>
            </div>
            <a href="/contact" class="btn btn-secondary btn-sm">Talk to Approval Expert ${SVG_ICONS.arrowRight}</a>
          </div>
          <div class="dc-service-visual">
            <img src="assets/dc-doc-workspace.jpg" alt="Professional solar engineering documentation workspace with blueprints and checklist" class="dc-service-img" loading="lazy">
            <span class="dc-service-label">STATUTORY COMPLIANCE DOSSIER</span>
          </div>
        </div>

      </div>
    </section>

    <!-- 4. PROJECT TYPE PHOTOS -->
    <section class="section section-alt" style="padding: 4rem 0;">
      <div class="container">
        <div class="section-header" style="text-align:center;">
          <span class="section-tag section-tag-gold">Sectors We Engineer</span>
          <h2 class="section-title">Solar Design Across Project Sectors</h2>
          <p class="section-subtitle" style="max-width:650px; margin:0 auto;">
            Tailored engineering blueprints for distinct architectural and grid connection profiles.
          </p>
        </div>

        <div class="dc-projects-grid">
          <!-- 1. HOMES -->
          <div class="dc-project-card">
            <div class="dc-project-card-img-wrap">
              <img src="assets/solar-homes-hero.jpg" alt="Modern Indian residential rooftop solar installation" class="dc-project-card-img" loading="lazy">
            </div>
            <div class="dc-project-card-body">
              <div>
                <h3 class="dc-project-card-title">Solar Design for Homes</h3>
                <p class="dc-project-card-desc">
                  Elevated solar pergola structures that turn your terrace into a shaded garden while slashing household electricity bills by up to 90%.
                </p>
              </div>
              <a href="/solar-for-homes" class="btn btn-secondary btn-sm" style="width:100%; justify-content:center;">Explore Residential ${SVG_ICONS.arrowRight}</a>
            </div>
          </div>

          <!-- 2. HOUSING SOCIETIES -->
          <div class="dc-project-card">
            <div class="dc-project-card-img-wrap">
              <img src="assets/solar-society-hero.jpg" alt="Large Indian apartment housing society rooftop solar" class="dc-project-card-img" loading="lazy">
            </div>
            <div class="dc-project-card-body">
              <div>
                <h3 class="dc-project-card-title">Solar Design for Housing Societies</h3>
                <p class="dc-project-card-desc">
                  Multi-tower common area solarization powering lifts, water pumps, clubhouses, and EV charging with joint DISCOM metering.
                </p>
              </div>
              <a href="/solar-for-housing-societies" class="btn btn-secondary btn-sm" style="width:100%; justify-content:center;">Explore Societies ${SVG_ICONS.arrowRight}</a>
            </div>
          </div>

          <!-- 3. COMMERCIAL & INDUSTRIAL -->
          <div class="dc-project-card">
            <div class="dc-project-card-img-wrap">
              <img src="assets/solar-commercial-hero.jpg" alt="Commercial and industrial factory rooftop solar system" class="dc-project-card-img" loading="lazy">
            </div>
            <div class="dc-project-card-body">
              <div>
                <h3 class="dc-project-card-title">Commercial & Industrial Solar Design</h3>
                <p class="dc-project-card-desc">
                  High-capacity rooftop installations for textile mills, manufacturing plants, and cold storages featuring DG synchronization.
                </p>
              </div>
              <a href="/solar-for-commercial-institutions" class="btn btn-secondary btn-sm" style="width:100%; justify-content:center;">Explore C&I Solar ${SVG_ICONS.arrowRight}</a>
            </div>
          </div>

          <!-- 4. GROUND MOUNT -->
          <div class="dc-project-card">
            <div class="dc-project-card-img-wrap">
              <img src="assets/solar-groundmount-hero.jpg" alt="Ground-mounted solar PV installation in open landscape" class="dc-project-card-img" loading="lazy">
            </div>
            <div class="dc-project-card-body">
              <div>
                <h3 class="dc-project-card-title">Ground-Mount Solar Design</h3>
                <p class="dc-project-card-desc">
                  Megawatt-scale captive and open-access solar power plants with pile foundation engineering and 11kV/66kV HT evacuation.
                </p>
              </div>
              <a href="/solar-ground-mount" class="btn btn-secondary btn-sm" style="width:100%; justify-content:center;">Explore Ground Mount ${SVG_ICONS.arrowRight}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9-PART ENGINEERING DELIVERABLES & DESIGN REPORT SCOPE -->
    <section class="dc-pillars-section">
      <div class="container">
        <div class="section-header" style="text-align:center; max-width:850px; margin:0 auto 2.5rem;">
          <span class="section-tag section-tag-gold">Engineering Scope & Deliverables</span>
          <h2 class="section-title">Complete Solar Engineering & Advisory Scope</h2>
          <p class="section-subtitle" style="margin:0 auto;">
            Our comprehensive engineering report covers 9 core disciplines—from initial LiDAR drone modeling to statutory CEI clearances, structural STAAD.Pro simulations, and electrical single line diagrams.
          </p>
        </div>

        <div class="dc-pillars-grid">
          
          <!-- 1. SAR & STRUCTURE STABILITY -->
          <div class="dc-pillar-card animate-fade-up">
            <div class="dc-pillar-card-header">
              <div class="dc-pillar-num-badge">01</div>
              <div>
                <h3 class="dc-pillar-title">SAR & Structure Stability Report</h3>
                <span style="font-size:0.75rem; color:#0284c7; font-weight:700; text-transform:uppercase;">Shadow & Structural Baseline</span>
              </div>
            </div>
            <p class="dc-pillar-desc">
              Comprehensive shadow assessment ratio and structural load integrity audit guaranteeing long-term building safety and maximum generation.
            </p>
            <ul class="dc-pillar-list">
              <li class="dc-pillar-list-item">${SVG_ICONS.check} Detailed Shadow Assessment Ratio (SAR) Calculations</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} Structural Stability Assessment & Dead/Live Load Verifications</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} Identification of Year-Round Shading Obstacles</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} RCC Slab Integrity & Water-Retention Safety Factor</li>
            </ul>
          </div>

          <!-- 2. PRE-DESIGN (SKETCHUP) -->
          <div class="dc-pillar-card animate-fade-up" style="animation-delay: 0.1s;">
            <div class="dc-pillar-card-header">
              <div class="dc-pillar-num-badge">02</div>
              <div>
                <h3 class="dc-pillar-title">Pre-Design (SketchUp 3D)</h3>
                <span style="font-size:0.75rem; color:#0284c7; font-weight:700; text-transform:uppercase;">Preliminary Architectural Concept</span>
              </div>
            </div>
            <p class="dc-pillar-desc">
              Rapid 3D digital-twin concept modeling to visualize panel placement and compare solstice sun angles before detailed drafting.
            </p>
            <ul class="dc-pillar-list">
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>I. 3D Architectural Model:</strong> Exact building & rooftop digital twin</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>II. Panel Placement:</strong> Preliminary pitch, tilt & azimuth array layout</li>
              <li class="dc-pillar-list-item">
                ${SVG_ICONS.check} 
                <div>
                  <strong>III. Shadow Analysis Photos:</strong><br>
                  <span class="dc-solstice-badge">❄️ 21st December (Winter Solstice)</span>
                  <span class="dc-solstice-badge" style="margin-left:0.25rem;">☀️ 21st June (Summer Solstice)</span>
                </div>
              </li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>IV. Video Animation:</strong> 3D sun-path simulation & client walkthrough</li>
            </ul>
          </div>

          <!-- 3. PVSYST REPORT -->
          <div class="dc-pillar-card animate-fade-up" style="animation-delay: 0.2s;">
            <div class="dc-pillar-card-header">
              <div class="dc-pillar-num-badge">03</div>
              <div>
                <h3 class="dc-pillar-title">PVsyst Generation & Losses Report</h3>
                <span style="font-size:0.75rem; color:#0284c7; font-weight:700; text-transform:uppercase;">Global Gold Standard Simulation</span>
              </div>
            </div>
            <p class="dc-pillar-desc">
              Bankable 8,760-hour generation simulation accepted by financial institutions and NBFCs for solar project financing.
            </p>
            <ul class="dc-pillar-list">
              <li class="dc-pillar-list-item">${SVG_ICONS.check} 8,760 Hourly Annual Solar Yield Projection</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} Performance Ratio (PR%) & Specific Production (kWh/kWp)</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} Loss Waterfall Analysis: Soiling, IAM, Thermal & Wiring Losses</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} Inverter MPPT Clipping & String Mismatch Quantification</li>
            </ul>
          </div>

          <!-- 4. TSL (THE SOLAR LABS) REPORT -->
          <div class="dc-pillar-card animate-fade-up">
            <div class="dc-pillar-card-header">
              <div class="dc-pillar-num-badge">04</div>
              <div>
                <h3 class="dc-pillar-title">TSL (The Solar Labs) Report</h3>
                <span style="font-size:0.75rem; color:#0284c7; font-weight:700; text-transform:uppercase;">AI LiDAR & Fast CAD Feasibility</span>
              </div>
            </div>
            <p class="dc-pillar-desc">
              AI-assisted high-precision LiDAR surface elevation modeling and automated generation forecasting for fast project turnarounds.
            </p>
            <ul class="dc-pillar-list">
              <li class="dc-pillar-list-item">${SVG_ICONS.check} Sub-centimeter LiDAR Surface & Height Profiling</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} Automated Roof Setback & Exclusion Zoning</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} High-Speed 3D Digital Twin Generation</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} Comparative Financial ROI & Payback Matrices</li>
            </ul>
          </div>

          <!-- 5. POST-DESIGN (EXECUTION BLUEPRINTS) -->
          <div class="dc-pillar-card animate-fade-up" style="animation-delay: 0.1s;">
            <div class="dc-pillar-card-header">
              <div class="dc-pillar-num-badge">05</div>
              <div>
                <h3 class="dc-pillar-title">Post-Design Execution Blueprints</h3>
                <span style="font-size:0.75rem; color:#0284c7; font-weight:700; text-transform:uppercase;">Final Engineering Sign-Off</span>
              </div>
            </div>
            <p class="dc-pillar-desc">
              Production-ready fabrication drawings and engineering documents ready for immediate on-site installation.
            </p>
            <ul class="dc-pillar-list">
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>I. Final 3D Model:</strong> As-engineered assembly</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>II. Panel Placement:</strong> Exact coordinate mapping</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>III. Solstice Photos:</strong> 21st Dec & 21st June verification</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>IV. Structure Design:</strong> Columns, rafters, purlins & sag rods</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>V. Structure Section View:</strong> Critical dimensional cuts</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>VI. Foundation Marking:</strong> Stub and base plate grid layout</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>VII. Bill of Material (BOM):</strong> Itemized hardware schedule</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>VIII. Walkway Video:</strong> Maintenance access walkthrough</li>
            </ul>
          </div>

          <!-- 6. DETAILED DESIGN (2D LAYOUT) -->
          <div class="dc-pillar-card animate-fade-up" style="animation-delay: 0.2s;">
            <div class="dc-pillar-card-header">
              <div class="dc-pillar-num-badge">06</div>
              <div>
                <h3 class="dc-pillar-title">Detailed Design (2D Layouts)</h3>
                <span style="font-size:0.75rem; color:#0284c7; font-weight:700; text-transform:uppercase;">AutoCAD Execution Schematics</span>
              </div>
            </div>
            <p class="dc-pillar-desc">
              Millimeter-accurate 2D shop drawings for civil, plumbing, electrical tray routing, and maintenance accessibility.
            </p>
            <ul class="dc-pillar-list">
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>I. Walkway Layout:</strong> Non-slip FRP / aluminum grating pathways</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>II. Cleaning System Layout:</strong> Pressurized water piping & valves</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>III. Cable Tray Layout:</strong> Perforated GI tray routing & supports</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>IV. Conduit Layout:</strong> Heavy-duty PVC/GI conduits & pull boxes</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>V. Structure Section View:</strong> Tilt angles & clamping details</li>
            </ul>
          </div>

          <!-- 7. DETAILED ELECTRICAL DRAWING (2D LAYOUT) -->
          <div class="dc-pillar-card animate-fade-up">
            <div class="dc-pillar-card-header">
              <div class="dc-pillar-num-badge">07</div>
              <div>
                <h3 class="dc-pillar-title">Detailed Electrical & CEI Drawings</h3>
                <span style="font-size:0.75rem; color:#0284c7; font-weight:700; text-transform:uppercase;">Inspectorate & Grid Compliance</span>
              </div>
            </div>
            <p class="dc-pillar-desc">
              Comprehensive electrical schematics prepared to Chief Electrical Inspectorate (CEI) and DISCOM net metering standards.
            </p>
            <div class="dc-nested-box">
              <div class="dc-nested-box-title">I. CEI Approval Drawing Package</div>
              <ul class="dc-nested-list">
                <li>• 1. General Arrangement (GA) or Key Plan Layout</li>
                <li>• 2. Equipment Layout (Inverter & Transformer yard)</li>
                <li>• 3. Earthing Layout (Mesh grid & test links)</li>
                <li>• 4. Single Line Diagram (SLD) with protections</li>
              </ul>
            </div>
            <ul class="dc-pillar-list">
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>II. DC/AC String Layout:</strong> String mapping & MPPT allocation</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>III. DCDB / ACDB Design:</strong> Internal busbars, SPDs & breakers</li>
            </ul>
          </div>

          <!-- 8. CALCULATION SHEETS -->
          <div class="dc-pillar-card animate-fade-up" style="animation-delay: 0.1s;">
            <div class="dc-pillar-card-header">
              <div class="dc-pillar-num-badge">08</div>
              <div>
                <h3 class="dc-pillar-title">Engineering Calculation Sheets</h3>
                <span style="font-size:0.75rem; color:#0284c7; font-weight:700; text-transform:uppercase;">Mathematical Verification</span>
              </div>
            </div>
            <p class="dc-pillar-desc">
              Exhaustive engineering formulas ensuring safe thermal dissipation, zero nuisance tripping, and minimum electrical losses.
            </p>
            <ul class="dc-pillar-list">
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>I. DC String Sizing:</strong> Voc max & Vmp temperature limits</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>II. DC/AC Cable Sizing:</strong> Current capacity & &lt;1.5% drop</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>III. Earthing Conductor Sizing:</strong> Short-circuit withstand</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>IV. Earthing Pits & Rods:</strong> Soil resistivity & &lt;1Ω target</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>V. Lightning Arrester (LA):</strong> Protection radius calculation</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>VI. Equipment Sizing:</strong> Breakers, fuses & transformers</li>
              <li class="dc-pillar-list-item">${SVG_ICONS.check} <strong>VII. HT / LT Cable Sizing:</strong> High-tension evacuation losses</li>
            </ul>
          </div>

          <!-- 9. CIVIL & STRUCTURAL ENGINEERING -->
          <div class="dc-pillar-card animate-fade-up" style="animation-delay: 0.2s;">
            <div class="dc-pillar-card-header">
              <div class="dc-pillar-num-badge">09</div>
              <div>
                <h3 class="dc-pillar-title">Civil & Structural Engineering</h3>
                <span style="font-size:0.75rem; color:#0284c7; font-weight:700; text-transform:uppercase;">Rooftop & Ground Mount Analysis</span>
              </div>
            </div>
            <p class="dc-pillar-desc">
              Chartered engineer certified structural models rated for 150-180 km/h wind speeds, corrosion resistance, and soil stability.
            </p>
            <div class="dc-nested-box">
              <div class="dc-nested-box-title">I. Rooftop Solar System</div>
              <ul class="dc-nested-list">
                <li>• 1. STAAD.Pro Structural Analysis Report (Wind & dead loads)</li>
                <li>• 2. MMS Detailed Fabrication Drawing (HDGI 80μm)</li>
                <li>• 3. Pile Foundation / Anchor Base Design & Marking Layout</li>
              </ul>
            </div>
            <div class="dc-nested-box">
              <div class="dc-nested-box-title">II. Ground Mount Solar System</div>
              <ul class="dc-nested-list">
                <li>• 1. Module Cleaning System Calculation & Water Network</li>
                <li>• 2. Perimeter Fencing & Security Layout</li>
                <li>• 3. Storm Water Drainage & Runoff Trench Layout</li>
                <li>• 4. Plant Execution Layout & Roadways</li>
                <li>• 5. Transformer / LT Panel / HT Panel Foundation Design</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 5. BEFORE / AFTER INTERACTIVE SLIDER -->
    <section class="dc-ba-section">
      <div class="container">
        <div class="dc-ba-header">
          <span class="section-tag section-tag-gold">Transformation Journey</span>
          <h2 class="section-title" style="color:#ffffff;">Before & After: The Power of Engineering</h2>
          <p style="color:#94a3b8; font-size:1rem; margin-top:0.5rem;">
            See how Volt's Legacy transforms cluttered, unusable rooftops into elevated, clean energy power stations.
          </p>
        </div>

        <div class="dc-ba-stages">
          <div class="dc-ba-stage-pill active">RAW SITE</div>
          <span style="color:#f59e0b; font-weight:900;">→</span>
          <div class="dc-ba-stage-pill active">3D ANALYSIS</div>
          <span style="color:#f59e0b; font-weight:900;">→</span>
          <div class="dc-ba-stage-pill active">DESIGNED SOLAR SYSTEM</div>
        </div>

        <div class="dc-ba-container" id="dcBaContainer">
          <!-- Background: Raw Site Before Design -->
          <img src="assets/dc-before-raw.jpg" alt="Site Before Design: Unorganized empty rooftop with water tanks and AC units" class="dc-ba-before-img">
          <span class="dc-ba-label before">BEFORE: CLUTTERED SITE</span>

          <!-- Foreground: Engineered Solar Layout -->
          <div class="dc-ba-after-wrap" id="dcBaAfterWrap">
            <img src="assets/dc-3d-vis.jpg" alt="Engineered Solar Layout: Elevated solar canopy with preserved terrace and walkways" class="dc-ba-after-img" id="dcBaAfterImg">
            <span class="dc-ba-label after">AFTER: ENGINEERED SOLAR</span>
          </div>

          <!-- Draggable Slider Handle -->
          <div class="dc-ba-slider-handle" id="dcBaHandle" title="Drag to compare before and after">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="3"><polyline points="15 18 9 12 15 6"/><polyline points="9 18 3 12 9 6"/></svg>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="3"><polyline points="9 18 15 12 9 6"/><polyline points="15 18 21 12 15 6"/></svg>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. ENGINEERING + EXECUTION SECTION (CLICKABLE HOTSPOTS) -->
    <section class="dc-exec-section">
      <div class="container">
        <div class="section-header" style="text-align:center;">
          <span class="section-tag section-tag-gold">Installation Precision</span>
          <h2 class="section-title">Engineering + Execution Anatomy</h2>
          <p class="section-subtitle" style="max-width:680px; margin:0 auto;">
            Explore the anatomy of a certified Volt's Legacy installation. Click or hover on the interactive hotspots below to inspect each engineering subsystem.
          </p>
        </div>

        <div class="dc-hotspot-container">
          <img src="assets/dc-hotspot-exec.jpg" alt="Interactive 3D solar installation engineering render" class="dc-hotspot-img">

          <!-- 6 Pulsing Interactive Hotspots -->
          <!-- 1. Panels -->
          <div class="dc-hotspot-pin active" style="top:14%; left:45%;" data-title="Optimized Panel Placement" data-desc="Mono-PERC / TopCon bifacial modules oriented at optimum seasonal tilt for maximum annual kWh yield and self-cleaning rainfall runoff." title="Click to inspect Panels">
            1
          </div>

          <!-- 2. Structure -->
          <div class="dc-hotspot-pin" style="top:48%; left:35%;" data-title="Site-Specific Mounting Structure" data-desc="Heavy-duty Hot-Dip Galvanized Steel (80μm zinc coating) column and purlin design engineered for 160 km/h wind stability without roof slab penetration." title="Click to inspect Structure">
            2
          </div>

          <!-- 3. Inverter -->
          <div class="dc-hotspot-pin" style="top:40%; left:52%;" data-title="Planned Equipment Location" data-desc="Central string inverters mounted with IP65 weatherproofing, dedicated air ventilation clearance, and rapid-shutdown safety mechanisms." title="Click to inspect Inverter">
            3
          </div>

          <!-- 4. Cable Routing -->
          <div class="dc-hotspot-pin" style="top:76%; left:60%;" data-title="Organized Electrical Cable Routing" data-desc="Pre-punched galvanized cable trays organizing UV-resistant solar cables with clean bend radiuses, zero conductor drooping, and under 1.2% total DC voltage drop." title="Click to inspect Cable Routing">
            4
          </div>

          <!-- 5. Walkway -->
          <div class="dc-hotspot-pin" style="top:55%; left:74%;" data-title="Maintenance & Cleaning Access Walkway" data-desc="Non-slip perforated aluminum grating walkways with safety handrails providing maintenance technicians safe, unobstructed access for bi-weekly module washing." title="Click to inspect Walkway">
            5
          </div>

          <!-- 6. Earthing -->
          <div class="dc-hotspot-pin" style="top:86%; left:37%;" data-title="Safety-Focused Grounding & Surge Protection" data-desc="Dedicated chemical copper earthing pits with dual grounding for inverter AC/DC surge protection (SPDs) and Class I lightning arresters." title="Click to inspect Earthing">
            6
          </div>

          <!-- Dynamic Hotspot Inspection Detail Card -->
          <div class="dc-hotspot-detail-box" id="dcHotspotDetailBox">
            <div>
              <div class="dc-hotspot-detail-title" id="dcHotspotTitle">Optimized Panel Placement</div>
              <p class="dc-hotspot-detail-text" id="dcHotspotDesc">
                Mono-PERC / TopCon bifacial modules oriented at optimum seasonal tilt for maximum annual kWh yield and self-cleaning rainfall runoff.
              </p>
            </div>
            <a href="/quotation" class="btn btn-solar btn-sm" style="white-space:nowrap;">Request Design</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. DESIGN DELIVERABLES VISUAL (STACK OF DESIGN SHEETS) -->
    <section class="dc-deliverables-section">
      <div class="container">
        <div class="section-header" style="text-align:center;">
          <span class="section-tag section-tag-gold">Client Deliverables</span>
          <h2 class="section-title">Visual Stack of Design Deliverables</h2>
          <p class="section-subtitle" style="max-width:650px; margin:0 auto;">
            Before installation starts, you receive a full engineering drawing package. Hover on any sheet to examine the technical scope.
          </p>
        </div>

        <div class="dc-sheet-stack-grid">
          <!-- 01 Solar Layout -->
          <div class="dc-sheet-card">
            <span class="dc-sheet-num">SHEET 01</span>
            <h3 class="dc-sheet-title">Solar Array Layout</h3>
            <p class="dc-sheet-desc">
              CAD coordinates, module count, row-to-row spacing, tilt angle, azimuth orientation, and roof perimeter clearance.
            </p>
          </div>

          <!-- 02 3D View -->
          <div class="dc-sheet-card">
            <span class="dc-sheet-num">SHEET 02</span>
            <h3 class="dc-sheet-title">3D Architectural View</h3>
            <p class="dc-sheet-desc">
              High-resolution 3D renders showing finished installation, elevated canopy clearance, and aesthetic building integration.
            </p>
          </div>

          <!-- 03 Shadow Analysis -->
          <div class="dc-sheet-card">
            <span class="dc-sheet-num">SHEET 03</span>
            <h3 class="dc-sheet-title">Shadow Simulation Report</h3>
            <p class="dc-sheet-desc">
              365-day PVSyst sun simulation calculating hourly shading loss factors, horizon profiles, and annual kWh generation.
            </p>
          </div>

          <!-- 04 Single Line Diagram -->
          <div class="dc-sheet-card">
            <span class="dc-sheet-num">SHEET 04</span>
            <h3 class="dc-sheet-title">Single Line Diagram (SLD)</h3>
            <p class="dc-sheet-desc">
              Complete electrical schematic with DC strings, inverters, AC/DC distribution boxes, protection switchgear, and net meter.
            </p>
          </div>

          <!-- 05 Structural Drawing -->
          <div class="dc-sheet-card">
            <span class="dc-sheet-num">SHEET 05</span>
            <h3 class="dc-sheet-title">Structural Stability Drawing</h3>
            <p class="dc-sheet-desc">
              STAAD.Pro load calculations, member sizing (IS 800:2007), weld specs, anchor bolt tension, and 160 km/h wind certification.
            </p>
          </div>

          <!-- 06 Electrical Layout -->
          <div class="dc-sheet-card">
            <span class="dc-sheet-num">SHEET 06</span>
            <h3 class="dc-sheet-title">Electrical & Conduit Layout</h3>
            <p class="dc-sheet-desc">
              Inverter stanchion mounting details, AC/DC DB positions, conduit pathways, and earthing conductor grid layout.
            </p>
          </div>

          <!-- 07 Cable Routing -->
          <div class="dc-sheet-card">
            <span class="dc-sheet-num">SHEET 07</span>
            <h3 class="dc-sheet-title">Cable Sizing & Schedule</h3>
            <p class="dc-sheet-desc">
              Cross-sectional copper/aluminum calculations, string interconnection diagrams, and guaranteed &lt;1.5% voltage drop tables.
            </p>
          </div>

          <!-- 08 Documentation -->
          <div class="dc-sheet-card">
            <span class="dc-sheet-num">SHEET 08</span>
            <h3 class="dc-sheet-title">Statutory Approval Dossier</h3>
            <p class="dc-sheet-desc">
              DISCOM feasibility paperwork, CEIG electrical safety checklist, equipment BIS/IEC datasheets, and net meter application.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. WHY VOLT'S LEGACY ENGINEERING ADVISORY -->
    <section class="dc-why-section">
      <div class="container">
        <div class="section-header" style="text-align:center;">
          <span class="section-tag section-tag-gold">Engineering Excellence</span>
          <h2 class="section-title" style="color:#ffffff;">Why Volt's Legacy Engineering Advisory?</h2>
          <p style="color:#94a3b8; font-size:1.05rem; max-width:650px; margin:0.5rem auto 0;">
            Our in-house design engineers combine structural acumen, electrical precision, and regulatory expertise to deliver bankable solar assets.
          </p>
        </div>

        <div class="dc-why-grid">
          <div class="dc-why-card">
            <div class="dc-why-metric">100%</div>
            <div class="dc-why-title">DISCOM Approval Rate</div>
            <p class="dc-why-desc">Flawless regulatory compliance with zero statutory document rejections across Gujarat & Western India.</p>
          </div>

          <div class="dc-why-card">
            <div class="dc-why-metric">180 km/h</div>
            <div class="dc-why-title">Wind Certified Structures</div>
            <p class="dc-why-desc">Chartered engineer verified structural stability withstanding extreme monsoon cyclones without roof leaks.</p>
          </div>

          <div class="dc-why-card">
            <div class="dc-why-metric">+15%</div>
            <div class="dc-why-title">Higher Annual Yield</div>
            <p class="dc-why-desc">Shadow elimination and precision MPPT stringing delivering 10-15% more electricity compared to unengineered plants.</p>
          </div>

          <div class="dc-why-card">
            <div class="dc-why-metric">0 Rework</div>
            <div class="dc-why-title">Site Fit Guarantee</div>
            <p class="dc-why-desc">100% pre-engineered modular structures designed to millimeter tolerance ensuring seamless on-site assembly.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. FINAL CTA SECTION -->
    <section class="section" style="background:#f8fafc; padding: 4.5rem 0;">
      <div class="container">
        <div class="journey-cta-box animate-fade-up">
          <h3 style="color:var(--primary-900); font-size:1.75rem; margin-bottom:0.75rem;">
            Ready to Engineer Your Solar System?
          </h3>
          <p style="color:var(--text-muted); font-size:1rem; margin-bottom:1.75rem; max-width:580px; margin-left:auto; margin-right:auto;">
            Get a free shadow-free rooftop assessment and custom 3D design proposal tailored for your property.
          </p>
          <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <a href="/quotation" class="btn btn-solar btn-lg">
              Get Free Quotation ${SVG_ICONS.arrowRight}
            </a>
            <a href="/contact" class="btn btn-secondary btn-lg">
              Talk to Our Solar Experts ${SVG_ICONS.arrowRight}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}


// 13. BLOGS VIEW (/blogs)
function renderBlogsView() {
  document.title = "Solar Insights & Articles | VOLT'S LEGACY SOLAR";

  return `
    <div class="section section-dark" style="padding-top:2.25rem; padding-bottom:2rem;">
      <div class="container">
        <div class="section-header" style="margin-bottom:0;">
          <span class="section-tag section-tag-gold">Clean Energy Knowledge</span>
          <h1 class="section-title">Solar Energy Blogs & Insights</h1>
          <p class="section-subtitle">
            Stay updated with policy developments, government subsidy schemes, technology breakthroughs, and maintenance best practices.
          </p>
        </div>
      </div>
    </div>

    <section class="section section-alt">
      <div class="container">
        <!-- Category Filter Pills -->
        <div class="blog-filter-bar">
          <button class="blog-filter-btn active" onclick="window.filterBlogs('all', this)">All Topics (${BLOGS_DATA.length})</button>
          <button class="blog-filter-btn" onclick="window.filterBlogs('Subsidy Guide', this)">Subsidy & Schemes</button>
          <button class="blog-filter-btn" onclick="window.filterBlogs('Solar Technology', this)">Solar Technology</button>
          <button class="blog-filter-btn" onclick="window.filterBlogs('Housing Societies', this)">Housing Societies</button>
          <button class="blog-filter-btn" onclick="window.filterBlogs('Commercial Solar', this)">Commercial & Industrial</button>
          <button class="blog-filter-btn" onclick="window.filterBlogs('Engineering', this)">Engineering</button>
          <button class="blog-filter-btn" onclick="window.filterBlogs('Net Metering & Policy', this)">Net Metering</button>
          <button class="blog-filter-btn" onclick="window.filterBlogs('Maintenance & Operations', this)">Maintenance & Care</button>
          <button class="blog-filter-btn" onclick="window.filterBlogs('Solar Financing', this)">Financing & Loans</button>
        </div>

        <div class="blogs-grid" id="blogsPageGrid">
          ${BLOGS_DATA.map(blog => `
            <article class="blog-card" data-category="${blog.category}">
              <div class="blog-banner" style="padding:0; overflow:hidden; position:relative; height:210px;">
                <img src="${blog.image}" alt="${blog.title}" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.4s ease;" loading="lazy">
                <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(7,21,48,0.15) 0%, rgba(7,21,48,0.65) 100%); pointer-events:none;"></div>
                <span class="blog-category-tag">${blog.category}</span>
              </div>
              <div class="blog-body">
                <div class="blog-meta">
                  <span>${blog.date}</span>
                  <span>•</span>
                  <span>${blog.readTime}</span>
                </div>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-summary">${blog.summary}</p>
                <button class="btn btn-secondary btn-sm" onclick="window.readBlog(${blog.id})" style="margin-top:auto;">
                  Read Full Article ${SVG_ICONS.arrowRight}
                </button>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// 14. QUOTATION VIEW (/quotation)
function renderQuotationView() {
  document.title = "Get Free Solar Quotation | VOLT'S LEGACY SOLAR";

  return `
    <div class="section section-dark" style="padding-top:2.25rem; padding-bottom:2rem;">
      <div class="container">
        <div class="section-header" style="margin-bottom:0;">
          <span class="section-tag section-tag-gold">Solar Feasibility</span>
          <h1 class="section-title">Get Quotation & Savings Estimate</h1>
          <p class="section-subtitle">
            Discover how much you can save with a custom solar setup from VOLT'S LEGACY SOLAR.
          </p>
        </div>
      </div>
    </div>

    <section class="section section-alt">
      <div class="container">
        <div class="quote-layout">
          <!-- Solar Savings Calculator Widget -->
          <div class="calculator-card">
            <div class="calc-header">
              <h3 style="font-size: 1.4rem; margin-bottom:0.4rem; color:var(--primary-900);">Solar Savings Estimator</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem;">Slide or type your monthly electricity bill or desired system size</p>
            </div>

            <div class="calc-slider-group">
              <div class="calc-slider-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
                <span class="calc-slider-label" style="font-weight:700; color:var(--primary-900);">Monthly Bill (₹)</span>
                <div style="display:flex; align-items:center; gap:0.25rem; background:#ffffff; border:1.5px solid var(--blue-500); border-radius:8px; padding:0.25rem 0.6rem; box-shadow:0 2px 6px rgba(37,99,235,0.1);">
                  <span style="font-weight:800; color:var(--blue-600); font-size:1.1rem;">₹</span>
                  <input type="number" id="calcBillTypedInput" min="500" max="100000" step="100" value="3500" style="width:105px; border:none; outline:none; font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:var(--primary-900); background:transparent;">
                </div>
              </div>
              <input type="range" class="custom-range" id="billRangeSlider" min="1000" max="35000" step="250" value="3500">

              <!-- Manual System Size / Node System Input -->
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-top:1.15rem; padding-top:0.95rem; border-top:1px dashed #cbd5e1;">
                <label for="calcKwTypedInput" style="font-size:0.88rem; font-weight:700; color:#334155;">
                  ⚡ Or Type Desired System Size:
                </label>
                <div style="display:flex; align-items:center; gap:0.35rem; background:#f8fafc; border:1.5px solid #cbd5e1; border-radius:8px; padding:0.3rem 0.65rem;">
                  <input type="number" id="calcKwTypedInput" min="1" max="100" step="0.1" value="4.2" style="width:75px; border:none; outline:none; font-family:var(--font-heading); font-size:1rem; font-weight:800; color:#0369a1; background:transparent;">
                  <span style="font-size:0.84rem; font-weight:700; color:#64748b;">kWp</span>
                </div>
              </div>
            </div>

            <div class="calc-results-grid">
              <div class="calc-result-box highlight-req">
                <span class="calc-result-badge-req">⚡ Required System</span>
                <div class="calc-result-val" id="calcReqSystemSize">4.04 kW</div>
                <div class="calc-result-lbl">Required System Capacity</div>
              </div>
              <div class="calc-result-box highlight-savings">
                <div class="calc-result-val" id="calcMonthlySavings">₹3,050</div>
                <div class="calc-result-lbl">Est. Monthly Savings</div>
              </div>
              <div class="calc-result-box highlight-subsidy">
                <div class="calc-result-val" id="calcGovtSubsidy">₹78,000 Direct</div>
                <div class="calc-result-lbl">PM Surya Ghar Subsidy</div>
              </div>
              <div class="calc-result-box">
                <div class="calc-result-val" id="calcLifetimeSavings">₹18.85 Lakh</div>
                <div class="calc-result-lbl">30-Year Net Wealth / Savings</div>
              </div>
              <div class="calc-result-box">
                <div class="calc-result-val" id="calcRoofSpace">336 sq.ft</div>
                <div class="calc-result-lbl">Shadow-Free Roof Needed</div>
              </div>
            </div>

            <div style="background:var(--blue-50); border-radius:var(--radius-md); padding:1rem; border:1px solid var(--blue-100); display:flex; align-items:flex-start; gap:0.75rem;">
              <span style="color:var(--blue-600); font-size:1.25rem;">💡</span>
              <p style="font-size:0.85rem; color:var(--primary-800); line-height:1.45;">
                *Calculated with Torrent Power standard tariffs, Tier-1 600W TopCon modules, and ₹78,000 PM Surya Ghar DBT subsidy.
              </p>
            </div>
          </div>

          <!-- Quotation Request Form -->
          <div class="quote-form-card">
            <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem; color: var(--primary-900);">Request Your Free Quote</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Fill in your details for a tailored 3D solar layout & financial proposal.</p>

            <form id="solarQuoteForm" novalidate>
              <div class="form-grid">
                <div>
                  <label class="form-label" for="formFullName">Full Name *</label>
                  <input type="text" id="formFullName" name="fullName" class="form-control" placeholder="e.g. Rajesh Sharma" required>
                  <span class="error-text">Please enter your full name.</span>
                </div>

                <div>
                  <label class="form-label" for="formMobileNumber">Mobile Number *</label>
                  <input type="tel" id="formMobileNumber" name="mobileNumber" class="form-control" placeholder="10-digit Mobile" maxlength="10" required>
                  <span class="error-text">Please enter a valid 10-digit mobile number.</span>
                </div>

                <div>
                  <label class="form-label" for="formEmail">Email Address (Optional)</label>
                  <input type="email" id="formEmail" name="email" class="form-control" placeholder="name@example.com">
                  <span class="error-text">Please enter a valid email address.</span>
                </div>

                <div>
                  <label class="form-label" for="formCity">City / Location *</label>
                  <input type="text" id="formCity" name="city" class="form-control" placeholder="e.g. Surat, Ahmedabad, Vadodara" required>
                  <span class="error-text">Please specify your city.</span>
                </div>

                <div>
                  <label class="form-label" for="formCustomerType">Property Type (Optional)</label>
                  <select id="formCustomerType" name="customerType" class="form-control">
                    <option value="" selected>Select Property Type (Optional)</option>
                    <option value="Home">Home (Residential Bungalow/Villa)</option>
                    <option value="Housing Society">Housing Society / Apartment</option>
                    <option value="Commercial">Commercial (Office / Retail)</option>
                    <option value="Industrial">Industrial / Factory</option>
                    <option value="Ground Mount">Ground Mount Project</option>
                  </select>
                </div>

                <div>
                  <label class="form-label" for="formSystemType">Required System Type (Optional)</label>
                  <select id="formSystemType" name="systemType" class="form-control">
                    <option value="" selected>Select System (Optional)</option>
                    <option value="On-Grid">On-Grid (Net Metering + Subsidy)</option>
                    <option value="Off-Grid">Off-Grid (Battery Storage)</option>
                    <option value="Hybrid">Hybrid (Grid + Battery)</option>
                  </select>
                </div>

                <div>
                  <label class="form-label" for="formMonthlyBill">Approximate Monthly Electricity Bill (₹) *</label>
                  <input type="number" id="formMonthlyBill" name="monthlyBill" class="form-control" placeholder="3500" min="500" required>
                  <span class="error-text">Please enter your approximate monthly bill.</span>
                </div>

                <div>
                  <label class="form-label" for="formSystemKw">Preferred System Size (kW)</label>
                  <input type="text" id="formSystemKw" name="systemKw" class="form-control" placeholder="e.g. 4.04 kW">
                </div>

                <div class="form-group-full">
                  <label class="form-label" for="formMessage">Installation Address / Notes (Optional)</label>
                  <textarea id="formMessage" name="message" class="form-control" rows="3" placeholder="Tell us about your rooftop area, specific requirements, or queries..."></textarea>
                </div>
              </div>

              <button type="submit" class="btn btn-solar btn-lg" style="width:100%;">
                Submit Enquiry ${SVG_ICONS.arrowRight}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 14. CONTACT US VIEW (/contact)
function renderContactView() {
  document.title = "Contact Us | VOLT'S LEGACY SOLAR";

  return `
    <div class="section section-dark" style="padding-top:2.25rem; padding-bottom:2.25rem;">
      <div class="container">
        <div class="section-header" style="margin-bottom:0; text-align:center;">
          <span class="section-tag section-tag-gold" style="margin-bottom:0.35rem;"><span class="live-pulse-dot"></span> 📍 Surat, Gujarat Corporate Office</span>
          <h1 class="section-title contact-hero-title">CONTACT US</h1>
        </div>
      </div>
    </div>

    <section class="section section-alt">
      <div class="container">
        
        <!-- 4 Interactive Contact Cards with Micro-Animations -->
        <div class="contact-info-grid animate-fade-up">
          
          <!-- Card 1: Phone -->
          <div class="contact-info-card">
            <div class="contact-card-icon-wrap icon-phone-anim" style="background:#fef3c7; color:#d97706;">
              ${SVG_ICONS.phone}
            </div>
            <h3 class="contact-card-title">Call Us Directly</h3>
            <p class="contact-card-desc">Mon - Sat: 9:00 AM – 7:30 PM</p>
            <div class="contact-card-val">+91 99987 65059</div>
            <a href="tel:+919998765059" class="btn btn-primary btn-sm contact-card-btn">
              ${SVG_ICONS.phone} Call Now
            </a>
          </div>

          <!-- Card 2: WhatsApp -->
          <div class="contact-info-card featured">
            <span class="contact-card-pill">Fastest Response</span>
            <div class="contact-card-icon-wrap icon-wa-anim" style="background:#dcfce7; color:#16a34a;">
              ${SVG_ICONS.whatsapp}
            </div>
            <h3 class="contact-card-title">Chat on WhatsApp</h3>
            <p class="contact-card-desc">Instant 3D estimates & proposals</p>
            <div class="contact-card-val">+91 99987 65059</div>
            <a href="https://wa.me/919998765059?text=Hello%20Volt's%20Legacy%20Solar,%20I%20would%20like%20a%20solar%20consultation." target="_blank" rel="noopener noreferrer" class="btn btn-sm contact-card-btn" style="background:#25D366; color:#fff; border-color:#25D366;">
              ${SVG_ICONS.whatsapp} Open WhatsApp
            </a>
          </div>

          <!-- Card 3: Email -->
          <div class="contact-info-card">
            <div class="contact-card-icon-wrap icon-mail-anim" style="background:#e0e7ff; color:#4f46e5;">
              ${SVG_ICONS.mail}
            </div>
            <h3 class="contact-card-title">Official Email</h3>
            <p class="contact-card-desc">Send bills, RFPs & inquiries</p>
            <div class="contact-card-val" style="font-size:0.95rem; word-break:break-all;">contact@voltslegacy.com</div>
            <a href="mailto:contact@voltslegacy.com" class="btn btn-secondary btn-sm contact-card-btn">
              ${SVG_ICONS.mail} Send Email
            </a>
          </div>

          <!-- Card 4: Address -->
          <div class="contact-info-card">
            <div class="contact-card-icon-wrap icon-pin-anim" style="background:#fce7f3; color:#db2777;">
              ${SVG_ICONS.mapPin}
            </div>
            <h3 class="contact-card-title">Office Location</h3>
            <p class="contact-card-desc">Surat, Gujarat, India</p>
            <div class="contact-card-val" style="font-size:0.8rem; font-weight:500; line-height:1.4; color:var(--text-muted);">
              Shop No. 40, 150 Feet Rd, Behind Sai Shrushti Residency, Man Sarovar Society, Godadara Gam, Godadara, Surat, Devadh, Gujarat 395010
            </div>
            <a href="https://maps.google.com/?q=Shop+No.+40,+150+Feet+Rd,+Behind+Sai+Shrushti+Residency,+Man+Sarovar+Society,+Godadara+Gam,+Godadara,+Surat,+Devadh,+Gujarat+395010" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm contact-card-btn">
              ${SVG_ICONS.mapPin} View on Google Maps
            </a>
          </div>

        </div>

        <!-- Social Channels & Apps Direct Redirection Strip -->
        <div class="social-redirect-strip animate-fade-up">
          <div class="social-redirect-header">
            <div>
              <span class="section-tag section-tag-gold" style="margin-bottom:0.25rem;">Stay Connected</span>
              <h3 style="color:var(--white); font-size:1.5rem; margin:0;">Connect on Social Media & Direct Apps</h3>
            </div>
            <p style="color:#94a3b8; font-size:0.9rem; margin:0; max-width:450px;">
              Follow our latest landmark solar installations, real-time video demonstrations, customer testimonials, and government subsidy updates.
            </p>
          </div>

          <div class="social-app-buttons-grid">
            <!-- Instagram -->
            <a href="https://www.instagram.com/voltslegacy?igsi=ZjZzZm91em00aW9n" target="_blank" rel="noopener noreferrer" class="social-app-btn instagram-app">
              <div class="social-app-icon">${SVG_ICONS.instagram}</div>
              <div class="social-app-text">
                <span class="social-app-name">Instagram</span>
                <span class="social-app-handle">@voltslegacy</span>
              </div>
              <span class="social-app-arrow">↗</span>
            </a>

            <!-- Facebook -->
            <a href="https://www.facebook.com/share/1CaiQtfFdc/" target="_blank" rel="noopener noreferrer" class="social-app-btn facebook-app">
              <div class="social-app-icon">${SVG_ICONS.facebook}</div>
              <div class="social-app-text">
                <span class="social-app-name">Facebook</span>
                <span class="social-app-handle">VOLT'S LEGACY SOLAR</span>
              </div>
              <span class="social-app-arrow">↗</span>
            </a>

            <!-- WhatsApp -->
            <a href="https://wa.me/919998765059?text=Hello%20Volt's%20Legacy%20Solar,%20I%20would%20like%20a%20solar%20consultation." target="_blank" rel="noopener noreferrer" class="social-app-btn whatsapp-app">
              <div class="social-app-icon">${SVG_ICONS.whatsapp}</div>
              <div class="social-app-text">
                <span class="social-app-name">WhatsApp</span>
                <span class="social-app-handle">+91 99987 65059</span>
              </div>
              <span class="social-app-arrow">↗</span>
            </a>
          </div>
        </div>

        <!-- Split Form & Location Map -->
        <div class="split-layout" style="margin-top:3.5rem;">
          
          <!-- Contact & Quotation Form (Email, Property Type, System Type Optional) -->
          <div class="quote-form-card animate-fade-up">
            <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem; color: var(--primary-900);">Send Us a Message / Request Quote</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
              Fill in your contact details and rooftop requirements. Our solar engineers will respond within 2 business hours.
            </p>

            <form id="solarQuoteForm" novalidate>
              <div class="form-grid">
                <div>
                  <label class="form-label" for="formFullName">Full Name *</label>
                  <input type="text" id="formFullName" name="fullName" class="form-control" placeholder="e.g. Rajesh Sharma" required>
                  <span class="error-text">Please enter your full name.</span>
                </div>

                <div>
                  <label class="form-label" for="formMobileNumber">Mobile Number *</label>
                  <input type="tel" id="formMobileNumber" name="mobileNumber" class="form-control" placeholder="10-digit Mobile" maxlength="10" required>
                  <span class="error-text">Please enter a valid 10-digit mobile number.</span>
                </div>

                <div>
                  <label class="form-label" for="formEmail">Email Address (Optional)</label>
                  <input type="email" id="formEmail" name="email" class="form-control" placeholder="name@example.com">
                </div>

                <div>
                  <label class="form-label" for="formCity">City / Location *</label>
                  <input type="text" id="formCity" name="city" class="form-control" placeholder="e.g. Surat, Ahmedabad, Vadodara" required>
                  <span class="error-text">Please specify your city.</span>
                </div>

                <div>
                  <label class="form-label" for="formCustomerType">Property Type (Optional)</label>
                  <select id="formCustomerType" name="customerType" class="form-control">
                    <option value="" selected>Select Property Type (Optional)</option>
                    <option value="Home">Home (Residential)</option>
                    <option value="Housing Society">Housing Society / Apartment</option>
                    <option value="Commercial">Commercial (Office / Retail)</option>
                    <option value="Industrial">Industrial / Factory</option>
                    <option value="Ground Mount">Ground Mount Project</option>
                  </select>
                </div>

                <div>
                  <label class="form-label" for="formSystemType">Required System Type (Optional)</label>
                  <select id="formSystemType" name="systemType" class="form-control">
                    <option value="" selected>Select System (Optional)</option>
                    <option value="On-Grid">On-Grid (Net Metering)</option>
                    <option value="Off-Grid">Off-Grid (Battery Storage)</option>
                    <option value="Hybrid">Hybrid (Grid + Battery)</option>
                  </select>
                </div>

                <div class="form-group-full">
                  <label class="form-label" for="formMonthlyBill">Approximate Monthly Electricity Bill (₹) *</label>
                  <input type="number" id="formMonthlyBill" name="monthlyBill" class="form-control" placeholder="5000" min="500" value="5000" required>
                  <span class="error-text">Please enter your approximate monthly bill.</span>
                </div>

                <div class="form-group-full">
                  <label class="form-label" for="formMessage">Message (Optional)</label>
                  <textarea id="formMessage" name="message" class="form-control" rows="3" placeholder="Tell us about your rooftop area, pergola preferences, or queries..."></textarea>
                </div>
              </div>

              <button type="submit" class="btn btn-solar btn-lg" style="width:100%;">
                Submit Inquiry / Request Call ${SVG_ICONS.arrowRight}
              </button>
            </form>
          </div>

          <!-- Location & Map View -->
          <div class="animate-fade-up" style="display:flex; flex-direction:column; gap:1.5rem;">
            
            <div class="consulting-card-preview" style="background:#071530; border-color:rgba(255,255,255,0.12);">
              <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
                <div style="width:40px; height:40px; border-radius:8px; background:var(--solar-gold-500); color:#071530; display:flex; align-items:center; justify-content:center;">
                  ${SVG_ICONS.mapPin}
                </div>
                <div>
                  <h4 style="color:var(--white); font-size:1.15rem; margin:0;">Head Office Location</h4>
                  <span style="color:var(--solar-gold-400); font-size:0.8rem; font-weight:600;">Surat, Gujarat</span>
                </div>
              </div>
              <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6; margin-bottom:1.25rem;">
                <strong>Shop No. 40, 150 Feet Rd</strong><br>
                Behind Sai Shrushti Residency, Man Sarovar Society,<br>
                Godadara Gam, Godadara, Surat, Devadh, Gujarat 395010
              </p>
              
              <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
                <a href="https://maps.google.com/?q=Shop+No.+40,+150+Feet+Rd,+Behind+Sai+Shrushti+Residency,+Man+Sarovar+Society,+Godadara+Gam,+Godadara,+Surat,+Devadh,+Gujarat+395010" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex:1;">
                  ${SVG_ICONS.mapPin} Open in Google Maps
                </a>
                <a href="tel:+919998765059" class="btn btn-secondary btn-sm">
                  ${SVG_ICONS.phone} +91 99987 65059
                </a>
              </div>
            </div>

            <!-- Map Iframe Wrapper -->
            <div style="border-radius:16px; overflow:hidden; border:1px solid #e2e8f0; height:320px; box-shadow:var(--shadow-md); background:#e2e8f0;">
              <iframe 
                title="VOLT'S LEGACY SOLAR Location Map"
                src="https://maps.google.com/maps?q=Shop+No.+40,+150+Feet+Rd,+Behind+Sai+Shrushti+Residency,+Man+Sarovar+Society,+Godadara+Gam,+Godadara,+Surat,+Gujarat+395010&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}

// --------------------------------------------------------------------------
// GLOBAL WINDOW METHODS
// --------------------------------------------------------------------------

// Filter projects in gallery
window.filterProjects = function(category, btnElement) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const cats = (card.getAttribute('data-cat') || '').split(/\s+/);
    if (category === 'all' || cats.includes(category)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

// Peta Page Blueprint Switcher Helper
window.switchPetaImage = function(src, title, desc, currentIdx, totalCount, btnElement) {
  const activeImg = document.getElementById('petaActiveImg');
  const activeTitle = document.getElementById('petaActiveTitle');
  const activeDesc = document.getElementById('petaActiveDesc');
  const counter = document.getElementById('petaGalleryCounter');

  if (activeImg) {
    activeImg.style.opacity = '0.3';
    setTimeout(() => {
      activeImg.src = src;
      activeImg.style.opacity = '1';
    }, 150);
  }
  if (activeTitle) activeTitle.textContent = title;
  if (activeDesc) activeDesc.textContent = desc;
  if (counter) counter.textContent = `Drawing ${currentIdx} of ${totalCount}`;

  if (btnElement) {
    const parent = btnElement.closest('#petaThumbsContainer');
    if (parent) {
      parent.querySelectorAll('.peta-thumb-btn').forEach(b => b.classList.remove('active'));
    }
    btnElement.classList.add('active');
  }
};

window.openPetaZoom = function() {
  const activeImg = document.getElementById('petaActiveImg');
  const activeTitle = document.getElementById('petaActiveTitle');
  if (!activeImg || !window.appModal) return;

  const content = `
    <div style="text-align:center;">
      <h3 style="margin-bottom:0.75rem; color:#071530; font-size:1.2rem;">${activeTitle ? activeTitle.textContent : '3D Blueprint Viewer'}</h3>
      <div style="max-height:75vh; overflow:auto; background:#071530; border-radius:10px; padding:0.5rem;">
        <img src="${activeImg.src}" alt="Full Resolution Blueprint" style="max-width:100%; height:auto; display:block; margin:0 auto; object-fit:contain;">
      </div>
      <button class="btn btn-secondary btn-sm" style="margin-top:1rem;" onclick="window.appModal.close();">Close Viewer</button>
    </div>
  `;
  window.appModal.open(content);
};

// View project modal details with interactive multi-blueprint switcher
window.viewProjectDetails = function(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project || !window.appModal) return;

  const firstGallery = project.gallery && project.gallery.length > 0 ? project.gallery[0] : { src: project.image, title: project.name, tag: 'CAD Plan', desc: project.description };

  const content = `
    <div class="project-modal-viewer">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
          <span class="section-tag" style="margin-bottom:0;">${project.systemType}</span>
          <span class="section-tag section-tag-gold" style="margin-bottom:0;">Capacity: ${project.capacity}</span>
          ${project.clientName ? `<span class="section-tag" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd; margin-bottom:0;">Client: ${project.clientName}</span>` : ''}
        </div>
        <a href="/projects/${project.slug}" class="btn btn-primary btn-sm" onclick="window.appModal.close();">
          Open Full Project Page →
        </a>
      </div>

      <h3 style="font-size: 1.35rem; color: #071530; margin-bottom: 0.35rem; line-height:1.25;">${project.name}</h3>
      <div style="display:flex; align-items:center; gap:0.4rem; color:#64748b; font-size:0.88rem; margin-bottom:0.85rem;">
        ${SVG_ICONS.mapPin} ${project.location} ${project.coordinates ? `&bull; ${project.coordinates}` : ''}
      </div>

      <!-- Main Modal Blueprint Image Box -->
      <div class="project-modal-main-img-box">
        <img id="modalActiveImg" src="${firstGallery.src}" alt="${firstGallery.title}">
      </div>

      <!-- Modal Thumbnails Filmstrip if multiple -->
      ${project.gallery && project.gallery.length > 1 ? `
        <div style="margin-bottom:0.4rem; font-size:0.78rem; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.04em;">
          ENGINEERING DRAWINGS & 3D RENDERS (${project.gallery.length} DRAWINGS):
        </div>
        <div class="project-modal-thumbs" id="modalThumbsList">
          ${project.gallery.map((g, idx) => `
            <div class="project-modal-thumb ${idx === 0 ? 'active' : ''}" 
              onclick="document.getElementById('modalActiveImg').src='${g.src}'; document.getElementById('modalThumbsList').querySelectorAll('.project-modal-thumb').forEach(t=>t.classList.remove('active')); this.classList.add('active');"
              title="${g.title}">
              <img src="${g.src}" alt="${g.title}" loading="lazy">
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Specifications Grid -->
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1rem; margin-bottom:1.25rem;">
        <h4 style="font-size:0.95rem; margin-bottom:0.5rem; color:#071530;">Technical Data Sheet</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.6rem; font-size:0.85rem; color:#475569;">
          <div><strong>Module Specs:</strong> ${project.moduleSpecs || 'Tier-1 Mono'}</div>
          <div><strong>Configuration:</strong> ${project.moduleFormula || project.capacity}</div>
          <div><strong>Structure:</strong> ${project.structureType || 'Elevated HDGI'}</div>
          <div><strong>Clearance:</strong> ${project.clearanceHeight || 'Custom Height'}</div>
          <div><strong>Tilt & Azimuth:</strong> ${project.tiltAngle || '15°'} / ${project.azimuth || 'South'}</div>
          <div><strong>Generation:</strong> ${project.estimatedMonthlyUnits || '~500 kWh/mo'}</div>
        </div>
      </div>

      <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
        <a href="/projects/${project.slug}" class="btn btn-solar" style="flex:1; text-align:center; justify-content:center;" onclick="window.appModal.close();">
          Open Full Project Page →
        </a>
        <a href="/quotation" class="btn btn-secondary" style="flex:1; text-align:center; justify-content:center;" onclick="window.appModal.close();">
          Get Free Quotation ${SVG_ICONS.arrowRight}
        </a>
      </div>
    </div>
  `;

  window.appModal.open(content);
};

// --------------------------------------------------------------------------
// 15. SOLAR FOR HOMES VIEW (/solar-for-homes)
// --------------------------------------------------------------------------
function renderSolarForHomesView() {
  document.title = "Solar for Homes | VOLT'S LEGACY SOLAR";

  return `
    <!-- 3. HERO SECTION -->
    <section class="sfh-hero-section">
      <div class="container">
        <div class="sfh-hero-grid">
          <div class="sfh-hero-content animate-fade-up">
            <div class="sfh-badge">
              <span>☀️</span>
              <span>Solar for Homes</span>
            </div>
            <h1 class="sfh-hero-title">
              TURN YOUR ROOFTOP INTO<br>
              <span style="color:var(--blue-600);">YOUR OWN POWER PLANT.</span>
            </h1>
            <p class="sfh-hero-text">
              Generate clean electricity from your own rooftop, reduce your dependence on grid power and make your electricity bill work harder for you.
            </p>
            <div class="sfh-hero-actions">
              <a href="#financing" class="btn btn-solar btn-lg">
                COMPARE CASH vs. EMI →
              </a>
              <a href="#sfh-booking-form" class="btn btn-secondary btn-lg">
                GET FREE QUOTATION
              </a>
            </div>
          </div>

          <div class="sfh-hero-image-card animate-fade-up" style="animation-delay:0.1s;">
            <img src="assets/solar-homes-hero.jpg" alt="Premium Modern Indian Residential House with Rooftop Solar Panels" loading="eager">
            <div class="sfh-hero-image-badge">
              <div>
                <strong style="display:block; font-size:0.95rem; color:#ffffff;">Residential Rooftop Solar</strong>
                <span style="font-size:0.8rem; color:#cbd5e1;">High-Yield Monocrystalline Array</span>
              </div>
              <span class="badge-subsidy" style="background:var(--solar-gold-500); color:#071530; font-weight:800; font-size:0.8rem; padding:0.35rem 0.75rem; border-radius:var(--radius-full);">PM Surya Ghar</span>
            </div>
          </div>
        </div>

        <!-- Four Small Trust Points Under Hero -->
        <div class="sfh-trust-bar animate-fade-up" style="animation-delay:0.2s;">
          <div class="sfh-trust-item">
            <span class="sfh-trust-check">✓</span>
            <span>Residential Rooftop Solar</span>
          </div>
          <div class="sfh-trust-item">
            <span class="sfh-trust-check">✓</span>
            <span>Government Subsidy Assistance</span>
          </div>
          <div class="sfh-trust-item">
            <span class="sfh-trust-check">✓</span>
            <span>Professional Installation</span>
          </div>
          <div class="sfh-trust-item">
            <span class="sfh-trust-check">✓</span>
            <span>End-to-End Support</span>
          </div>
        </div>
      </div>
    </section>

    <!-- GOVERNMENT SUBSIDY SECTION -->
    <section class="section" id="subsidy" style="background:#ffffff;">
      <div class="container">
        <div class="section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Direct Benefit Transfer</span>
          <h2 class="section-title">GOVERNMENT SUBSIDY CAN REDUCE YOUR SOLAR INVESTMENT.</h2>
        </div>

        <div class="sfh-subsidy-cards-grid animate-fade-up">
          <!-- Card 1: 1 kW -->
          <div class="sfh-subsidy-card">
            <div class="sfh-subsidy-kw">1 kW System</div>
            <div class="sfh-subsidy-val">UP TO ₹30,000</div>
            <div class="sfh-subsidy-lbl">CENTRAL SUBSIDY</div>
          </div>

          <!-- Card 2: 2 kW -->
          <div class="sfh-subsidy-card">
            <div class="sfh-subsidy-kw">2 kW System</div>
            <div class="sfh-subsidy-val">UP TO ₹60,000</div>
            <div class="sfh-subsidy-lbl">CENTRAL SUBSIDY</div>
          </div>

          <!-- Card 3: 3 kW+ (Highlighted) -->
          <div class="sfh-subsidy-card highlight-max">
            <span class="sfh-max-pill">Most Popular Choice</span>
            <div class="sfh-subsidy-kw">3 kW+ System</div>
            <div class="sfh-subsidy-val">UP TO ₹78,000</div>
            <div class="sfh-subsidy-lbl">MAXIMUM CENTRAL SUBSIDY</div>
          </div>
        </div>

        <div style="text-align:center; margin-bottom:1.5rem;" class="animate-fade-up">
          <span class="badge-subsidy" style="background:linear-gradient(135deg, #d97706 0%, #f59e0b 100%); color:#ffffff; font-size:1.05rem; font-weight:800; padding:0.65rem 1.5rem; border-radius:var(--radius-full);">
            UP TO ₹78,000 MAXIMUM CENTRAL SUBSIDY
          </span>
        </div>

        <!-- Information Box -->
        <div class="sfh-info-box animate-fade-up">
          <strong>IMPORTANT:</strong> Subsidy eligibility, amount and processing depend on current government guidelines, approved installation procedures and DISCOM verification. We assist all our customers transparently with the complete documentation workflow.
        </div>
      </div>
    </section>

    <!-- 13. WITHOUT SOLAR VS CASH SOLAR VS EMI SOLAR COMPARISON CALCULATOR -->
    <section class="section" style="background:#ffffff;" id="financing">
      <div class="container">
        <div class="section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Interactive Financial Model</span>
          <h2 class="section-title">WITHOUT SOLAR vs. CASH SOLAR vs. EMI SOLAR CALCULATOR</h2>
          <p class="section-subtitle" style="max-width: 980px;">
            Enter your monthly electricity bill or slide the dot to compare your upfront investment, monthly outgo, payback period and 30-year cumulative return across all three options with PM Surya Ghar Government Subsidy included.
          </p>
        </div>

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
                <label for="sfh-3way-bill-range" class="sfh-3way-label">Monthly Electricity Bill</label>
                <div class="sfh-3way-sublabel">Drag the slider dot or enter your exact bill amount below</div>
              </div>
              <div class="sfh-3way-input-box-wrap">
                <span class="sfh-3way-curr-symbol">₹</span>
                <input type="number" id="sfh-3way-bill-input" class="sfh-3way-number-input" min="1000" max="50000" step="250" value="3500" aria-label="Enter monthly electricity bill">
                <span class="sfh-3way-unit-label">/ month</span>
              </div>
            </div>

            <!-- Slider -->
            <div class="sfh-3way-slider-container">
              <input type="range" class="sfh-range-slider" id="sfh-3way-bill-range" min="1000" max="30000" step="250" value="3500" aria-label="Monthly electricity bill slider">
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
              <button type="button" class="sfh-preset-btn" data-val="2000">₹2,000</button>
              <button type="button" class="sfh-preset-btn active" data-val="3500">₹3,500</button>
              <button type="button" class="sfh-preset-btn" data-val="5000">₹5,000</button>
              <button type="button" class="sfh-preset-btn" data-val="7500">₹7,500</button>
              <button type="button" class="sfh-preset-btn" data-val="10000">₹10,000</button>
              <button type="button" class="sfh-preset-btn" data-val="15000">₹15,000</button>
              <button type="button" class="sfh-preset-btn" data-val="25000">₹25,000</button>
            </div>

            <!-- Matched System Specs Bar (5 Items) -->
            <div class="sfh-3way-specs-bar">
              <!-- 1. Sizing Requirement -->
              <div class="sfh-spec-item sfh-spec-highlight-req">
                <div class="sfh-spec-header-row">
                  <span class="sfh-spec-lbl blue">Required System</span>
                  <span class="sfh-spec-pill blue">⚡ Solar Capacity</span>
                </div>
                <strong class="sfh-spec-val highlight-blue" id="sfh-3way-spec-req-kw">4.04 kW</strong>
                <span class="sfh-spec-sub-note">Exact consumption fit</span>
              </div>


              <!-- 3. Estimated Generation -->
              <div class="sfh-spec-item sfh-spec-regular">
                <div class="sfh-spec-header-row">
                  <span class="sfh-spec-lbl">Est. Generation</span>
                </div>
                <strong class="sfh-spec-val" id="sfh-3way-spec-gen">~525 kWh / mo</strong>
                <span class="sfh-spec-sub-note">~6,300 units / year</span>
              </div>

              <!-- 4. Gross Plant Cost -->
              <div class="sfh-spec-item sfh-spec-regular">
                <div class="sfh-spec-header-row">
                  <span class="sfh-spec-lbl">Gross Plant Cost</span>
                </div>
                <strong class="sfh-spec-val" id="sfh-3way-spec-cost">₹2,46,190</strong>
                <span class="sfh-spec-sub-note">Turnkey EPC + Inverter</span>
              </div>

              <!-- 5. Central Subsidy -->
              <div class="sfh-spec-item sfh-spec-highlight-sub">
                <div class="sfh-spec-header-row">
                  <span class="sfh-spec-lbl green">Central Subsidy</span>
                  <span class="sfh-spec-pill green">Govt DBT</span>
                </div>
                <strong class="sfh-spec-val green" id="sfh-3way-spec-sub">₹78,000 Direct</strong>
                <span class="sfh-spec-sub-note">Direct Bank Transfer</span>
              </div>

              <!-- 6. Net Customer Cost -->
              <div class="sfh-spec-item sfh-spec-highlight-net">
                <div class="sfh-spec-header-row">
                  <span class="sfh-spec-lbl">Net Cost</span>
                  <span class="sfh-spec-pill dark">Final</span>
                </div>
                <strong class="sfh-spec-val highlight-dark" id="sfh-3way-spec-net">₹1,68,190</strong>
                <span class="sfh-spec-sub-note">After ₹78k Subsidy</span>
              </div>
            </div>
          </div>

          <!-- 3-Way Comparative Cards Grid (WITHOUT SOLAR FIRST) -->
          <div class="sfh-3way-cards-grid">
            
            <!-- OPTION 1: NORMAL GRID (WITHOUT SOLAR - SHOWN FIRST) -->
            <div class="sfh-3way-card normal-card">
              <div class="sfh-3way-card-badge red">⚡ Normal Grid Power</div>
              <h3 class="sfh-3way-card-title">Without Solar</h3>
              <p class="sfh-3way-card-tagline">Continuous monthly expense with zero asset creation</p>

              <div class="sfh-3way-metric-box red-bg">
                <span class="sfh-3way-metric-lbl">Current Monthly Outgo</span>
                <div class="sfh-3way-metric-val red-text" id="sfh-3way-normal-monthly">₹3,500 <span class="sfh-val-unit">/ mo</span></div>
                <span class="sfh-3way-metric-sub" id="sfh-3way-normal-annual">₹42,000 / year (+4% annual tariff hike)</span>
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
                <div class="sfh-hl-val red-text" id="sfh-3way-normal-30yr">-₹23.56 Lakhs</div>
                <div class="sfh-hl-note">100% money spent with ₹0 asset creation</div>
              </div>

              <div class="sfh-3way-card-footer red-foot">
                <span>✕ Vulnerable to Grid Outages & Tariff Hikes</span>
              </div>
            </div>

            <!-- OPTION 2: CASH SOLAR (FULL UPFRONT - SHOWN SECOND) -->
            <div class="sfh-3way-card cash-card">
              <div class="sfh-3way-card-badge green">💵 Cash Purchase</div>
              <h3 class="sfh-3way-card-title">Full Upfront Solar</h3>
              <p class="sfh-3way-card-tagline">Maximum return with zero interest & immediate 100% asset ownership</p>

              <div class="sfh-3way-metric-box green-bg">
                <span class="sfh-3way-metric-lbl">Net Initial Investment</span>
                <div class="sfh-3way-metric-val green-text" id="sfh-3way-cash-net">₹1,68,190</div>
                <span class="sfh-3way-metric-sub" id="sfh-3way-cash-sub-calc">After ₹78,000 Central DBT Subsidy</span>
              </div>

              <!-- Payback Callout -->
              <div class="sfh-3way-highlight-pill green">
                <div class="sfh-hl-label">⏱️ Estimated Payback Period</div>
                <div class="sfh-hl-val green-text" id="sfh-3way-cash-payback">4.6 Years</div>
                <div class="sfh-hl-note">100% net investment recovered via bill savings</div>
              </div>

              <!-- 30-Year Return Callout -->
              <div class="sfh-3way-highlight-pill gold">
                <div class="sfh-hl-label">💰 30-Year Net Wealth Created / Return</div>
                <div class="sfh-hl-val green-text" id="sfh-3way-cash-30yr">+₹18.85 Lakhs</div>
                <div class="sfh-hl-note">Net savings after 100% cost recovery</div>
              </div>

              <div class="sfh-3way-card-footer green-foot">
                <span>✓ Zero Bank Debt • Maximum Lifetime ROI</span>
              </div>
            </div>

            <!-- OPTION 3: EMI SOLAR FINANCING (SHOWN THIRD) -->
            <div class="sfh-3way-card emi-card highlight-smart">
              <div class="sfh-3way-smart-tag">MOST POPULAR CHOICE</div>
              <div class="sfh-3way-card-badge blue">💳 Easy Solar EMI</div>
              <h3 class="sfh-3way-card-title">Solar on EMI / Loan</h3>
              <p class="sfh-3way-card-tagline">Zero upfront friction — your monthly solar bill savings pay the entire loan EMI</p>

              <div class="sfh-3way-metric-box blue-bg">
                <span class="sfh-3way-metric-lbl">Monthly Outgo (Years 1–5)</span>
                <div class="sfh-3way-metric-val blue-text" id="sfh-3way-emi-monthly">₹3,901 <span class="sfh-val-unit">/ mo</span></div>
                <span class="sfh-3way-metric-sub" id="sfh-3way-emi-breakdown">₹3,451 (5-Yr Solar EMI) + ~₹450 (Grid Fixed)</span>
              </div>

              <!-- Payback Callout (EMI Payback Period) -->
              <div class="sfh-3way-highlight-pill blue">
                <div class="sfh-hl-label">⏱️ Estimated Payback Period (With Loan)</div>
                <div class="sfh-hl-val" style="color:#1d4ed8;" id="sfh-3way-emi-payback">5.8 Years</div>
                <div class="sfh-hl-note">100% loan principal + bank interest recovered via bill savings</div>
              </div>

              <!-- 30-Year Return Callout -->
              <div class="sfh-3way-highlight-pill gold">
                <div class="sfh-hl-label">💰 30-Year Net Wealth Created / Return</div>
                <div class="sfh-hl-val green-text" id="sfh-3way-emi-30yr">+₹18.46 Lakhs</div>
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
                <tbody id="sfh-3way-milestones-body">
                  <tr>
                    <td><strong style="color:var(--primary-900, #0f172a);">Year 1</strong></td>
                    <td><span style="color:#dc2626; font-weight:700;">-₹42,000 Lost Outflow</span></td>
                    <td><span style="color:#d97706; font-weight:600;">-₹64,608 (Payback in progress)</span></td>
                    <td><strong style="color:#2563eb;">+₹9,540 (Loan active)</strong></td>
                  </tr>
                  <tr>
                    <td><strong style="color:var(--primary-900, #0f172a);">Year 2.9 (Cash Payback)</strong></td>
                    <td><span style="color:#dc2626; font-weight:700;">-₹1.31 Lakhs Lost Outflow</span></td>
                    <td><strong style="color:#16a34a;">+₹7,009 Net Wealth</strong></td>
                    <td><strong style="color:#2563eb;">+₹32,725 (Loan active)</strong></td>
                  </tr>
                  <tr>
                    <td><strong style="color:var(--primary-900, #0f172a);">Year 3.7 (EMI Payback)</strong></td>
                    <td><span style="color:#dc2626; font-weight:700;">-₹1.78 Lakhs Lost Outflow</span></td>
                    <td><strong style="color:#16a34a;">+₹44,980 Net Wealth</strong></td>
                    <td><strong style="color:#2563eb;">+₹46,480 (Loan active)</strong></td>
                  </tr>
                  <tr>
                    <td><strong style="color:var(--primary-900, #0f172a);">Year 5 (Loan Paid)</strong></td>
                    <td><span style="color:#dc2626; font-weight:700;">-₹2.27 Lakhs Lost Outflow</span></td>
                    <td><strong style="color:#16a34a;">+₹84,469 Net Wealth</strong></td>
                    <td><strong style="color:#16a34a;">+₹61,753 Net Wealth</strong></td>
                  </tr>
                  <tr>
                    <td><strong style="color:var(--primary-900, #0f172a);">Year 10</strong></td>
                    <td><span style="color:#dc2626; font-weight:700;">-₹5.04 Lakhs Lost Outflow</span></td>
                    <td><strong style="color:#16a34a;">+₹3.07 Lakhs Net Wealth</strong></td>
                    <td><strong style="color:#16a34a;">+₹2.84 Lakhs Net Wealth</strong></td>
                  </tr>
                  <tr>
                    <td><strong style="color:var(--primary-900, #0f172a);">Year 20</strong></td>
                    <td><span style="color:#dc2626; font-weight:700;">-₹12.51 Lakhs Lost Outflow</span></td>
                    <td><strong style="color:#16a34a;">+₹9.07 Lakhs Net Wealth</strong></td>
                    <td><strong style="color:#16a34a;">+₹8.84 Lakhs Net Wealth</strong></td>
                  </tr>
                  <tr>
                    <td><strong style="color:var(--primary-900, #0f172a);">Year 30 (Lifetime)</strong></td>
                    <td><span style="color:#dc2626; font-weight:700;">-₹23.56 Lakhs Lost Outflow</span></td>
                    <td><strong style="color:#16a34a;">+₹17.95 Lakhs Net Wealth</strong></td>
                    <td><strong style="color:#16a34a;">+₹17.72 Lakhs Net Wealth</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- OUR ROOFTOP SOLAR PROCESS -->
    <section class="section section-alt" id="process">
      <div class="container">
        <div class="section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Our Rooftop Solar Process</span>
          <h2 class="section-title">FROM YOUR FIRST CALL TO CLEAN ENERGY.</h2>
          <p class="section-subtitle">
            A simple, transparent and hassle-free journey from consultation to long-term solar savings.
          </p>
        </div>

        <div class="sfh-process-container animate-fade-up">
          <div class="sfh-process-grid-6">
            
            <!-- STEP 01 -->
            <div class="sfh-process-card">
              <div class="sfh-process-top">
                <span class="sfh-process-step-num">STEP 01</span>
                <span class="sfh-process-time">Day 1</span>
              </div>
              <h3 class="sfh-process-title">Free Energy Consultation</h3>
              <p class="sfh-process-desc">
                We analyze your recent power bills and sanctioned load to assess solar feasibility and calculate your optimal system size.
              </p>
              <ul class="sfh-process-checks">
                <li><span class="chk">✓</span><span>Bill & Tariff Review</span></li>
                <li><span class="chk">✓</span><span>Feasibility Analysis</span></li>
              </ul>
            </div>

            <!-- STEP 02 -->
            <div class="sfh-process-card">
              <div class="sfh-process-top">
                <span class="sfh-process-step-num">STEP 02</span>
                <span class="sfh-process-time">Day 2–3</span>
              </div>
              <h3 class="sfh-process-title">Site Survey & Assessment</h3>
              <p class="sfh-process-desc">
                Our engineers conduct on-site 3D shadow analysis and verify structural terrace integrity for maximum sunlight exposure.
              </p>
              <ul class="sfh-process-checks">
                <li><span class="chk">✓</span><span>3D Shadow Modeling</span></li>
                <li><span class="chk">✓</span><span>Structural Check</span></li>
              </ul>
            </div>

            <!-- STEP 03: HIGHLIGHTED ORANGE AS ENGINEERING CORE -->
            <div class="sfh-process-card orange-core">
              <div class="sfh-process-top">
                <span class="sfh-process-step-num">STEP 03</span>
                <span class="sfh-process-time">Day 4–5</span>
              </div>
              <h3 class="sfh-process-title">Solar Design & Proposal</h3>
              <p class="sfh-process-desc">
                We engineer an optimized CAD layout with guaranteed generation metrics, component BOM, and PM Surya Ghar subsidy mapping.
              </p>
              <ul class="sfh-process-checks">
                <li><span class="chk">✓</span><span>3D CAD Layout</span></li>
                <li><span class="chk">✓</span><span>Subsidy & ROI Plan</span></li>
              </ul>
            </div>

            <!-- STEP 04 -->
            <div class="sfh-process-card">
              <div class="sfh-process-top">
                <span class="sfh-process-step-num">STEP 04</span>
                <span class="sfh-process-time">Day 6–10</span>
              </div>
              <h3 class="sfh-process-title">Precision Installation</h3>
              <p class="sfh-process-desc">
                Certified technicians mount hot-dip galvanized elevated nut-bolt structures, Tier-1 monocrystalline panels, and dual-pole arrestors.
              </p>
              <ul class="sfh-process-checks">
                <li><span class="chk">✓</span><span>Tier-1 Mono Panels</span></li>
                <li><span class="chk">✓</span><span>Nut-Bolt Galvanized Mounts</span></li>
              </ul>
            </div>

            <!-- STEP 05 -->
            <div class="sfh-process-card">
              <div class="sfh-process-top">
                <span class="sfh-process-step-num">STEP 05</span>
                <span class="sfh-process-time">Day 11–15</span>
              </div>
              <h3 class="sfh-process-title">Net Metering & Activation</h3>
              <p class="sfh-process-desc">
                We handle DISCOM plant inspection, bi-directional net-meter replacement, and official grid interconnection documentation.
              </p>
              <ul class="sfh-process-checks">
                <li><span class="chk">✓</span><span>Bi-Directional Meter</span></li>
                <li><span class="chk">✓</span><span>DISCOM Approvals</span></li>
              </ul>
            </div>

            <!-- STEP 06: HIGHLIGHTED GREEN AS LONG-TERM MILESTONE -->
            <div class="sfh-process-card green-milestone">
              <div class="sfh-process-top">
                <span class="sfh-process-step-num">STEP 06</span>
                <span class="sfh-process-time">Day 15+</span>
              </div>
              <h3 class="sfh-process-title">Lifetime Generation & Care</h3>
              <p class="sfh-process-desc">
                Your rooftop starts generating clean power. Track daily generation via mobile app with scheduled maintenance and 30-year care.
              </p>
              <ul class="sfh-process-checks">
                <li><span class="chk">✓</span><span>Live App Monitoring</span></li>
                <li><span class="chk">✓</span><span>30-Yr Performance</span></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 17. ROOFTOP SPACE -->
    <section class="section section-alt" style="background:#f8fafc;">
      <div class="container">
        <div class="sfh-space-grid">
          <div class="animate-fade-up">
            <span class="section-tag section-tag-gold">Engineering Space Assessment</span>
            <h2 class="section-title" style="font-size:2.2rem; margin-bottom:1rem;">HOW MUCH ROOFTOP SPACE DO YOU NEED?</h2>
            <p style="font-size:1.05rem; color:var(--text-muted); line-height:1.65; margin-bottom:1.5rem;">
              Available shadow-free rooftop area is an important factor when designing your solar system. Our solar engineering team evaluates your exact rooftop structure to ensure maximum sunlight capture and structural safety.
            </p>

            <div style="font-size:0.9rem; font-weight:700; color:var(--primary-900); margin-bottom:0.75rem;">Required area varies according to:</div>
            <ul class="sfh-space-list">
              <li><span>📐</span> Module Technology</li>
              <li><span>🏗️</span> Mounting Layout</li>
              <li><span>📏</span> Setbacks & Clearances</li>
              <li><span>🧭</span> True South Orientation</li>
              <li><span>🌳</span> Surrounding Shading</li>
              <li><span>🧱</span> Installation Conditions</li>
            </ul>

            <a href="#sfh-booking-form" class="btn btn-solar btn-lg">
              CHECK MY ROOFTOP →
            </a>
          </div>

          <div class="sfh-space-img-card animate-fade-up" style="animation-delay:0.1s;">
            <img src="assets/rooftop-solar-space.jpg" alt="3D Architectural Rooftop Space and Setback Simulation for Solar Panels" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- 18. FAQ -->
    <section class="section section-alt" id="faq">
      <div class="container">
        <div class="section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Clear Answers</span>
          <h2 class="section-title">SOLAR FOR HOMES — YOUR QUESTIONS, ANSWERED</h2>
          <p class="section-subtitle">
            Everything you need to know about going solar without technical jargon.
          </p>
        </div>

        <div class="sfh-faq-container animate-fade-up">
          
          <!-- Q1 -->
          <div class="sfh-faq-item active">
            <button class="sfh-faq-question" aria-expanded="true">
              <span>How much government subsidy can I get?</span>
              <span class="sfh-faq-icon">+</span>
            </button>
            <div class="sfh-faq-answer">
              Under the PM Surya Ghar: Muft Bijli Yojana, eligible residential rooftop solar customers can receive up to ₹30,000 for 1 kW, up to ₹60,000 for 2 kW, and up to ₹78,000 for systems 3 kW and above. Subsidies are credited directly to your bank account via Direct Benefit Transfer (DBT) upon DISCOM inspection.
            </div>
          </div>

          <!-- Q2 -->
          <div class="sfh-faq-item">
            <button class="sfh-faq-question" aria-expanded="false">
              <span>Will solar completely eliminate my electricity bill?</span>
              <span class="sfh-faq-icon">+</span>
            </button>
            <div class="sfh-faq-answer">
              Solar can reduce your electricity units consumption significantly—often by 80% to 90%. However, minimum fixed grid charges, meter rent, and government electricity duties remain applicable as per your local DISCOM regulations.
            </div>
          </div>

          <!-- Q3 -->
          <div class="sfh-faq-item">
            <button class="sfh-faq-question" aria-expanded="false">
              <span>How long does solar take to pay back?</span>
              <span class="sfh-faq-icon">+</span>
            </button>
            <div class="sfh-faq-answer">
              Most residential rooftop solar systems with government subsidy have an estimated payback period of 3 to 5 years through monthly electricity bill savings. After investment recovery, the solar energy generated is virtually free for the remainder of the 30-year panel lifecycle.
            </div>
          </div>

          <!-- Q4 -->
          <div class="sfh-faq-item">
            <button class="sfh-faq-question" aria-expanded="false">
              <span>Can I install solar using a loan?</span>
              <span class="sfh-faq-icon">+</span>
            </button>
            <div class="sfh-faq-answer">
              Yes! Multiple leading national and private banks offer collateral-free solar loans with attractive interest rates for PM Surya Ghar beneficiaries. Your monthly electricity savings can help offset the loan EMI.
            </div>
          </div>

          <!-- Q5 -->
          <div class="sfh-faq-item">
            <button class="sfh-faq-question" aria-expanded="false">
              <span>Will I still receive an electricity bill after installing solar?</span>
              <span class="sfh-faq-icon">+</span>
            </button>
            <div class="sfh-faq-answer">
              Yes, you will receive a bi-directional net-metered electricity bill from your DISCOM. It clearly accounts for the units your solar system exported to the grid, the units you imported from the grid, and any minimal fixed connection charges.
            </div>
          </div>

          <!-- Q6 -->
          <div class="sfh-faq-item">
            <button class="sfh-faq-question" aria-expanded="false">
              <span>What happens after my solar loan is completed?</span>
              <span class="sfh-faq-icon">+</span>
            </button>
            <div class="sfh-faq-answer">
              Once your solar loan is paid off, your monthly EMI stops completely. Your solar system continues generating clean power, meaning your household enjoys maximum ongoing electricity savings for decades.
            </div>
          </div>

          <!-- Q7 -->
          <div class="sfh-faq-item">
            <button class="sfh-faq-question" aria-expanded="false">
              <span>Can VOLTS LEGACY help with the subsidy process?</span>
              <span class="sfh-faq-icon">+</span>
            </button>
            <div class="sfh-faq-answer">
              Absolutely. VOLTS LEGACY SOLAR provides end-to-end liaisoning support—including PM Surya Ghar portal registration, engineering feasibility documentation, DISCOM net-metering approvals, and DBT processing assistance.
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 19. GET FREE SOLAR QUOTATION FOR ROOFTOP FORM -->
    <section class="section section-alt" id="sfh-booking-form">
      <div class="container">
        <div class="section-header animate-fade-up">
          <span class="section-tag section-tag-gold">⚡ Instant Solar Quotation & Feasibility</span>
          <h2 class="section-title">GET YOUR FREE SOLAR QUOTATION FOR ROOFTOP</h2>
          <p class="section-subtitle">
            Get an instant engineer-verified quotation, rooftop sizing breakdown, and PM Surya Ghar ₹78,000 DBT subsidy calculation customized for your home.
          </p>
        </div>

        <div class="sfh-simple-survey-wrapper animate-fade-up">
          <div class="sfh-simple-survey-card" style="max-width: 880px; margin: 0 auto; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 1.25rem; box-shadow: 0 12px 36px rgba(15,23,42,0.08); overflow: hidden;">

            <!-- Form Body -->
            <div style="padding: 2rem 2.25rem;">
              <form id="sfhSolarBookingForm" class="sfh-simple-form" novalidate>
                
                <!-- Row 1: Name & WhatsApp Phone -->
                <div class="sfh-form-row-2">
                  <div class="form-group" id="sfh-group-name">
                    <label class="form-label" for="sfh-fullname" style="font-weight: 700; color: #1e293b; font-size: 0.9rem;">
                      Full Name <span style="color:#ef4444;">*</span>
                    </label>
                    <input type="text" class="form-control" id="sfh-fullname" name="fullname" placeholder="e.g. Rajesh Sharma" required style="border-radius: 8px; font-size: 0.95rem; padding: 0.75rem 1rem;">
                    <span class="field-error-msg">Please enter your full name.</span>
                  </div>
                  <div class="form-group" id="sfh-group-phone">
                    <label class="form-label" for="sfh-phone" style="font-weight: 700; color: #1e293b; font-size: 0.9rem;">
                      WhatsApp Mobile Number <span style="color:#ef4444;">*</span>
                    </label>
                    <div class="input-phone-group" style="display: flex;">
                      <span class="phone-prefix" style="background: #f1f5f9; border: 1.5px solid #cbd5e1; border-right: none; padding: 0.75rem 0.85rem; font-weight: 700; color: #475569; border-radius: 8px 0 0 8px; font-size: 0.95rem;">+91</span>
                      <input type="tel" class="form-control" id="sfh-phone" name="phone" placeholder="9876543210" maxlength="10" required style="border-radius: 0 8px 8px 0; font-size: 0.95rem; padding: 0.75rem 1rem;">
                    </div>
                    <span class="field-error-msg">Please enter a valid 10-digit mobile number.</span>
                  </div>
                </div>

                <!-- Row 2: City/Pincode & Monthly Bill -->
                <div class="sfh-form-row-2" style="margin-top: 1.25rem;">
                  <div class="form-group" id="sfh-group-city">
                    <label class="form-label" for="sfh-city" style="font-weight: 700; color: #1e293b; font-size: 0.9rem;">
                      City / Area & Pincode <span style="color:#ef4444;">*</span>
                    </label>
                    <input type="text" class="form-control" id="sfh-city" name="city" placeholder="e.g. Ahmedabad / Surat - 380015" required style="border-radius: 8px; font-size: 0.95rem; padding: 0.75rem 1rem;">
                    <span class="field-error-msg">Please enter your city and area pincode.</span>
                  </div>
                  <div class="form-group" id="sfh-group-bill">
                    <label class="form-label" for="sfh-bill-amount" style="font-weight: 700; color: #1e293b; font-size: 0.9rem;">
                      Average Monthly Electricity Bill <span style="color:#ef4444;">*</span>
                    </label>
                    <select class="form-control" id="sfh-bill-amount" name="billAmount" required style="border-radius: 8px; font-size: 0.95rem; padding: 0.75rem 1rem; background-color: #ffffff;">
                      <option value="">Select Monthly Bill Range</option>
                      <option value="1500">₹1,000 – ₹2,500 / Month (1–2.4 kW Solar)</option>
                      <option value="3500" selected>₹2,500 – ₹5,000 / Month (3.6–4.2 kW Solar • Most Popular)</option>
                      <option value="6000">₹5,000 – ₹8,000 / Month (4.8–6.6 kW Solar)</option>
                      <option value="10000">₹8,000 – ₹15,000 / Month (7.2–10 kW Solar)</option>
                      <option value="20000">Above ₹15,000 / Month (10+ kW High Capacity)</option>
                    </select>
                    <span class="field-error-msg">Please select your monthly electricity bill range.</span>
                  </div>
                </div>

                <!-- Row 3: Property Type & System Preference -->
                <div class="sfh-form-row-2" style="margin-top: 1.25rem;">
                  <div class="form-group" id="sfh-group-property">
                    <label class="form-label" for="sfh-property-type" style="font-weight: 700; color: #1e293b; font-size: 0.9rem;">
                      Property / Rooftop Type
                    </label>
                    <select class="form-control" id="sfh-property-type" name="propertyType" style="border-radius: 8px; font-size: 0.95rem; padding: 0.75rem 1rem; background-color: #ffffff;">
                      <option value="Independent Bungalow / Villa" selected>Independent Bungalow / Villa</option>
                      <option value="Row House / Tenement">Row House / Tenement</option>
                      <option value="Housing Society / Penthouse Terrace">Housing Society / Penthouse Terrace</option>
                      <option value="Commercial / Farmhouse">Commercial / Farmhouse / Other</option>
                    </select>
                  </div>
                  <div class="form-group" id="sfh-group-system">
                    <label class="form-label" for="sfh-system-type" style="font-weight: 700; color: #1e293b; font-size: 0.9rem;">
                      Solar System Preference
                    </label>
                    <select class="form-control" id="sfh-system-type" name="systemType" style="border-radius: 8px; font-size: 0.95rem; padding: 0.75rem 1rem; background-color: #ffffff;">
                      <option value="On-Grid System with Net-Metering" selected>On-Grid (Net-Metering + ₹78K DBT Subsidy)</option>
                      <option value="Hybrid Solar (With Battery Storage)">Hybrid Solar (With Battery Backup)</option>
                      <option value="Off-Grid Solar (Stand-Alone Power)">Off-Grid Solar (Zero Grid Dependency)</option>
                    </select>
                  </div>
                </div>

                <!-- Row 4: Address / Roof Details (Optional) -->
                <div class="form-group" id="sfh-group-address" style="margin-top: 1.25rem;">
                  <label class="form-label" for="sfh-address" style="font-weight: 700; color: #1e293b; font-size: 0.9rem;">
                    Installation Address / Roof Details <span style="color:#64748b; font-size:0.82rem; font-weight:normal;">(Optional - e.g. RCC flat roof, Tin shed, Elevated structure required)</span>
                  </label>
                  <input type="text" class="form-control" id="sfh-address" name="address" placeholder="Address, Society name, or specific roof requirements..." style="border-radius: 8px; font-size: 0.95rem; padding: 0.75rem 1rem;">
                </div>

                <!-- Submit Button & Security Note -->
                <div class="sfh-form-submit-row" style="margin-top: 1.5rem;">
                  <button type="submit" id="sfh-submit-btn" class="btn btn-solar btn-lg" style="width: 100%; font-size: 1.1rem; font-weight: 800; padding: 1.15rem 1.75rem; justify-content: center; border-radius: 10px; box-shadow: 0 10px 25px rgba(245,158,11,0.38); letter-spacing: 0.3px;">
                    ⚡ GET FREE SOLAR QUOTATION NOW →
                  </button>
                  <div class="sfh-form-security-note" style="text-align: center; margin-top: 0.9rem; font-size: 0.84rem; color: #64748b; line-height: 1.5;">
                    🔒 100% Free & No Obligation • Instant WhatsApp Delivery & Google Sheet Synced • 30-Minute Solar Engineer Callback
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- 21. DISCLAIMER -->
    <section class="sfh-legal-disclaimer">
        <p class="sfh-legal-text">
          Subsidy amounts, eligibility criteria, electricity tariffs, net-metering regulations, financing rates and government policies may change from time to time. All savings, ROI, payback and EMI figures shown on this page are estimates or illustrative examples unless specifically stated otherwise. Final project economics depend on system size, project cost, consumption, solar generation, applicable subsidy, DISCOM regulations and financing terms.
        </p>
      </div>
    </section>
  `;
}

// ==========================================================================
// SOLAR FOR HOUSING SOCIETIES (/solar-for-housing-societies)
// Streamlined, High-Converting Page for Housing Societies, RWAs & GHS Common Facilities
// ==========================================================================
function renderSolarForHousingSocietiesView() {
  document.title = "Solar for Housing Societies & RWAs | VOLT'S LEGACY ENERGY SOLUTIONS";

  return `
    <!-- 3. HERO SECTION -->
    <section class="sfh-hero-section">
      <div class="container">
        <div class="sfh-hero-grid">
          <div class="sfh-hero-content animate-fade-up">
            <div class="sfh-badge">
              <span>☀️</span>
              <span>SOLAR FOR HOUSING SOCIETIES & RWAs</span>
            </div>
            <h1 class="sfh-hero-title">
              TURN YOUR SOCIETY'S ROOFTOP<br>
              <span style="color:var(--blue-600);">INTO A SHARED POWER ASSET.</span>
            </h1>
            <p class="sfh-hero-text">
              Generate clean electricity from your society rooftop, reduce common-area maintenance bills by up to 80% and power lifts, water pumps, lighting, and EV charging.
            </p>
            <div class="sfh-hero-actions">
              <a href="#society-financing" class="btn btn-solar btn-lg">
                CALCULATE SOCIETY SAVINGS ➔
              </a>
              <a href="#society-booking-form" class="btn btn-secondary btn-lg">
                GET FREE QUOTATION
              </a>
            </div>
          </div>

          <div class="sfh-hero-image-card animate-fade-up" style="animation-delay:0.1s;">
            <img src="assets/solar-society-hero.jpg" alt="Housing Society & Apartment Complex Rooftop Solar by VOLTS LEGACY" loading="eager">
            <div class="sfh-hero-image-badge">
              <div>
                <strong style="display:block; font-size:0.95rem; color:#ffffff;">Housing Society Rooftop Solar</strong>
                <span style="font-size:0.8rem; color:#cbd5e1;">Common-Facility Microgrid & Elevators</span>
              </div>
              <span class="badge-subsidy" style="background:var(--solar-gold-500); color:#071530; font-weight:800; font-size:0.8rem; padding:0.35rem 0.75rem; border-radius:var(--radius-full);">PM Surya Ghar</span>
            </div>
          </div>
        </div>

        <!-- Four Small Trust Points Under Hero -->
        <div class="sfh-trust-bar animate-fade-up" style="animation-delay:0.2s;">
          <div class="sfh-trust-item">
            <span class="sfh-trust-check">✔</span>
            <span>Common-Area Rooftop Solar</span>
          </div>
          <div class="sfh-trust-item">
            <span class="sfh-trust-check">✔</span>
            <span>Government Subsidy Assistance</span>
          </div>
          <div class="sfh-trust-item">
            <span class="sfh-trust-check">✔</span>
            <span>DISCOM Net-Metering</span>
          </div>
          <div class="sfh-trust-item">
            <span class="sfh-trust-check">✔</span>
            <span>End-to-End Support</span>
          </div>
        </div>
      </div>
    </section>

    <!-- GOVERNMENT SUBSIDY SECTION -->
    <section class="section sfhs-section" id="society-subsidy" style="background:#ffffff; padding-top:1.5rem; padding-bottom:1rem;">
      <div class="container">
        <div class="section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Direct Benefit Transfer</span>
          <h2 class="section-title">GOVERNMENT CFA SUBSIDY CAN REDUCE YOUR SOCIETY INVESTMENT.</h2>
        </div>

        <!-- 3 Core CFA Rule Cards -->
        <div class="sfhs-cfa-rules-grid animate-fade-up">
          <div class="sfhs-cfa-rule-card highlight-gold">
            <div class="rule-badge">CFA RATE</div>
            <div class="rule-val">₹18,000 <span class="unit">/ kWp</span></div>
            <div class="rule-label">CENTRAL FINANCIAL ASSISTANCE</div>
            <p class="rule-desc">
              Direct government subsidy for eligible common facilities including lifts, pumps, lighting, and EV charging.
            </p>
          </div>

          <div class="sfhs-cfa-rule-card highlight-blue">
            <div class="rule-badge">HOUSEHOLD LIMIT</div>
            <div class="rule-val">@ 3 kWp <span class="unit">/ Flat</span></div>
            <div class="rule-label">FLAT-LINKED CAPACITY LIMIT</div>
            <p class="rule-desc">
              Household-linked eligible capacity is calculated as: <strong>Total Number of Flats × 3 kWp</strong>.
            </p>
          </div>

          <div class="sfhs-cfa-rule-card highlight-dark">
            <div class="rule-badge">MAX CEILING</div>
            <div class="rule-val">UP TO 500 kWp</div>
            <div class="rule-label">OVERALL SCHEME CEILING</div>
            <p class="rule-desc">
              Maximum subsidized capacity limit per registered Group Housing Society project under national guidelines.
            </p>
          </div>
        </div>

        <!-- Dynamic CFA Formula Card -->
        <div class="sfhs-cfa-calc-preview-card animate-fade-up">
          <div class="preview-header">
            <span class="preview-tag">OFFICIAL GHS/RWA CFA CALCULATION FORMULA</span>
            <h3 class="preview-title">How Society Subsidy Is Calculated:</h3>
          </div>

          <div class="formula-math-flow">
            <div class="formula-box">
              <span class="f-lbl">Household Limit</span>
              <span class="f-math">Flats × 3 kWp</span>
            </div>
            <span class="f-op">➔</span>
            <div class="formula-box">
              <span class="f-lbl">Eligible Capacity</span>
              <span class="f-math">Min(Proposed kWp, Flat Limit, 500 kWp)</span>
            </div>
            <span class="f-op">➔</span>
            <div class="formula-box highlight">
              <span class="f-lbl">CFA Amount</span>
              <span class="f-math">Eligible kWp × ₹18,000/kWp</span>
            </div>
          </div>

          <div class="preview-examples-row">
            <div class="ex-item">
              <strong>50 Flats Society (50 kWp Solar):</strong><br>
              Limit = 150 kWp • Eligible = 50 kWp • <strong>CFA = ₹9.00 Lakhs</strong>
            </div>
            <div class="ex-item">
              <strong>100 Flats Society (100 kWp Solar):</strong><br>
              Limit = 300 kWp • Eligible = 100 kWp • <strong>CFA = ₹18.00 Lakhs</strong>
            </div>
            <div class="ex-item">
              <strong>250 Flats Society (200 kWp Solar):</strong><br>
              Limit = 750 kWp • Eligible = 200 kWp • <strong>CFA = ₹36.00 Lakhs</strong>
            </div>
          </div>

          <div class="preview-notice">
            ℹ️ <strong>Important Disclosure:</strong> Illustrative calculations. Final CFA eligibility, technical feasibility, documentation, and Direct Benefit Transfer (DBT) disbursement are subject to MNRE scheme guidelines, national portal verification, and DISCOM net-meter inspection.
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 03: HIGH-CONSUMPTION COMMON LOADS -->
    <section class="section sfhs-section sfhs-bg-light" id="society-loads" style="padding-top:1.25rem; padding-bottom:1.5rem;">
      <div class="container container-wide">
        <div class="sfhs-section-header animate-fade-up">
          <span class="section-tag section-tag-blue">HIGH-CONSUMPTION COMMON UTILITIES</span>
          <h2 class="sfhs-section-title">COMMON LOADS THAT ROOFTOP SOLAR DIRECTLY OFFSETS</h2>
          <p class="sfhs-section-subtitle">
            Every month, housing societies spend lakhs on non-negotiable common utilities. Solar directly eliminates these recurring costs during peak daylight hours.
          </p>
        </div>

        <div class="sfhs-loads-problem-grid animate-fade-up">
          <div class="sfhs-load-prob-card">
            <div class="prob-icon">🛗</div>
            <div class="prob-title">LIFTS & ELEVATORS</div>
            <div class="prob-desc">Continuous daytime motor operations for passenger and service elevators powered directly by high-yield rooftop solar arrays, substantially lowering peak daytime power tariffs.</div>
            <div class="sfhs-use-tag">Peak Daytime Offset</div>
          </div>

          <div class="sfhs-load-prob-card">
            <div class="prob-icon">💧</div>
            <div class="prob-title">WATER PUMPS & STP</div>
            <div class="prob-desc">Daily scheduled operations of hydro-pneumatic water booster pumps, overhead storage filling, and sewage treatment aeration plants running at virtually zero grid power cost.</div>
            <div class="sfhs-use-tag">High-Power Load</div>
          </div>

          <div class="sfhs-load-prob-card">
            <div class="prob-icon">💡</div>
            <div class="prob-title">COMMON LIGHTING</div>
            <div class="prob-desc">Continuous illumination across residential corridors, multi-level basements, stairwells, and boundary security perimeters fully offset through daytime net-metered banking units.</div>
            <div class="sfhs-use-tag">Net-Metered Offset</div>
          </div>

          <div class="sfhs-load-prob-card">
            <div class="prob-icon">🏋️</div>
            <div class="prob-title">CLUBHOUSE & GYM</div>
            <div class="prob-desc">Community banquet halls, air-conditioned fitness centres, swimming pool filtration plants, and recreational campus amenities energized reliably throughout all daylight hours.</div>
            <div class="sfhs-use-tag">Society Amenities</div>
          </div>

          <div class="sfhs-load-prob-card">
            <div class="prob-icon">⚡</div>
            <div class="prob-title">EV CHARGING BAYS</div>
            <div class="prob-desc">Dedicated clean solar power infrastructure directly supports residents' 2-wheeler and 4-wheeler electric vehicle charging stations at a remarkably low levelized energy cost.</div>
            <div class="sfhs-use-tag">Future-Ready Green</div>
          </div>
        </div>

        <!-- Important Engineering Callout Box -->
        <div class="sfhs-engineering-callout animate-fade-up" style="margin-top:2rem;">
          <div class="callout-icon">💡</div>
          <div class="callout-text">
            <strong>CUSTOMIZED TO YOUR SOCIETY'S REAL ELECTRICAL & ROOFTOP PROFILE.</strong><br>
            <span>VOLT'S LEGACY designs an optimized system tailored specifically around your society's connected common load, usable terrace area, and applicable DISCOM tariff order.</span>
          </div>
        </div>
      </div>
    </section>
    <!-- SECTION 04: INTERACTIVE SOCIETY SOLAR CALCULATOR -->
    <section class="sfhs-section sfhs-bg-light" id="society-financing">
      <div class="container container-wide">
        <div class="sfhs-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">Interactive Financial Model</span>
          <h2 class="sfhs-section-title">HOW MUCH CAN YOUR SOCIETY SAVE WITH SOLAR?</h2>
          <p class="sfhs-section-subtitle">
            Enter your society's common electricity details to calculate indicative sizing, PM Surya Ghar CFA subsidy, net investment, and 30-year cumulative returns.
          </p>
        </div>

        <div class="sfhs-full-calc-container animate-fade-up">
          
          <!-- Top PM Surya Ghar Banner -->
          <div class="sfhs-calc-subsidy-ribbon">
            <span class="ribbon-tag">🏛️ PM Surya Ghar GHS/RWA CFA Included</span>
            <span>This calculation applies official <strong>₹18,000/kWp Central Financial Assistance</strong> for eligible common facilities, reducing your society's net investment significantly!</span>
          </div>

          <div class="sfhs-calc-grid-layout">
            
            <!-- LEFT CONSOLE: INTERACTIVE INPUTS -->
            <div class="sfhs-calc-inputs-col">
              <h3 class="col-heading">Society Parameters</h3>

              <!-- Input 1: Number of Flats -->
              <div class="soc-input-group">
                <div class="soc-label-row">
                  <label for="socSliderHouses">Number of Apartments / Flats</label>
                  <div class="soc-val-badge" id="socHousesDisplay">100 Flats</div>
                </div>
                <input type="range" class="sfhs-range-slider" id="socSliderHouses" min="10" max="1000" step="5" value="100">
                <div class="slider-ticks">
                  <span>10 Flats</span>
                  <span>250 Flats</span>
                  <span>500 Flats</span>
                  <span>1,000+ Flats</span>
                </div>
              </div>

              <!-- Input 2: Monthly Common Electricity Bill -->
              <div class="soc-input-group" style="margin-top:1.5rem;">
                <div class="soc-label-row">
                  <label for="socSliderBill">Monthly Common Electricity Bill (₹)</label>
                  <div class="soc-val-badge green" id="socBillDisplay">₹50,000 / mo</div>
                </div>
                <input type="range" class="sfhs-range-slider" id="socSliderBill" min="10000" max="1000000" step="5000" value="50000">
                <div class="slider-ticks">
                  <span>₹10,000</span>
                  <span>₹1,00,000</span>
                  <span>₹5,00,000</span>
                  <span>₹10,00,000+</span>
                </div>
              </div>

              <!-- Input 3: DISCOM & Tariff Selection -->
              <div class="soc-input-row-2" style="margin-top:1.5rem;">
                <div class="soc-subgroup">
                  <label for="socDiscomSelect">Applicable DISCOM</label>
                  <select id="socDiscomSelect" class="form-control">
                    <option value="Torrent Power" selected>Torrent Power (Ahmedabad/Surat)</option>
                    <option value="DGVCL">DGVCL (South Gujarat)</option>
                    <option value="MGVCL">MGVCL (Central Gujarat)</option>
                    <option value="PGVCL">PGVCL (West Gujarat / Saurashtra)</option>
                    <option value="UGVCL">UGVCL (North Gujarat)</option>
                    <option value="Other">Other State DISCOM</option>
                  </select>
                </div>
                <div class="soc-subgroup">
                  <label for="socTariffInput">Tariff (₹ / Unit)</label>
                  <input type="number" id="socTariffInput" class="form-control" value="8.50" step="0.1" min="5" max="18">
                </div>
              </div>

              <!-- Input 4: Common Equipment Inventory -->
              <div class="soc-input-row-3" style="margin-top:1.25rem;">
                <div class="soc-subgroup">
                  <label for="socLiftsInput">Lifts</label>
                  <input type="number" id="socLiftsInput" class="form-control" value="4" min="0" max="50">
                </div>
                <div class="soc-subgroup">
                  <label for="socPumpsInput">Pumps</label>
                  <input type="number" id="socPumpsInput" class="form-control" value="3" min="0" max="50">
                </div>
                <div class="soc-subgroup">
                  <label for="socEvInput">EV Bays</label>
                  <input type="number" id="socEvInput" class="form-control" value="4" min="0" max="100">
                </div>
              </div>

              <!-- Input 5: Usable Terrace Area -->
              <div class="soc-input-group" style="margin-top:1.25rem;">
                <div class="soc-label-row">
                  <label for="socRoofInput">Available Rooftop Area (sq.ft)</label>
                  <span style="font-size:0.85rem; font-weight:700; color:#0369a1;" id="socRoofDisplay">5,000 sq.ft</span>
                </div>
                <input type="range" class="sfhs-range-slider" id="socRoofInput" min="1000" max="50000" step="500" value="5000">
              </div>

              <!-- Input 6: Sizing Mode Toggle -->
              <div class="soc-mode-toggle-wrap" style="margin-top:1.25rem; padding-top:1rem; border-top:1px dashed #cbd5e1;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <span style="font-size:0.88rem; font-weight:700; color:#334155;">⚡ Sizing Mode:</span>
                  <div class="mode-toggle-btns">
                    <button type="button" class="btn-mode active" id="btnModeAuto">Auto Optimal</button>
                    <button type="button" class="btn-mode" id="btnModeCustom">Custom kWp</button>
                  </div>
                </div>
                <div id="customKwWrap" style="display:none; margin-top:0.75rem;">
                  <label for="socCustomKwInput" style="font-size:0.82rem; font-weight:700; color:#64748b;">Specify Proposed System Size (kWp):</label>
                  <input type="number" id="socCustomKwInput" class="form-control" value="50" min="5" max="500" step="1">
                </div>
              </div>
            </div>

            <!-- RIGHT CONSOLE: 8 LIVE METRICS & RESULTS -->
            <div class="sfhs-calc-results-col">
              <h3 class="col-heading">Calculated Society Proposal</h3>

              <!-- 8 Live Metrics Grid -->
              <div class="sfhs-8-metrics-grid">
                
                <!-- Metric 1: Required Capacity -->
                <div class="soc-metric-box highlight-req">
                  <div class="metric-val" id="socResKw" style="color:#0284c7;">50 kWp</div>
                  <div class="metric-lbl">Required Solar Capacity</div>
                </div>

                <!-- Metric 2: Monthly Generation -->
                <div class="soc-metric-box">
                  <div class="metric-val" id="socResMonthlyGen">~6,000 kWh</div>
                  <div class="metric-lbl">Est. Monthly Generation</div>
                </div>

                <!-- Metric 3: Annual Generation -->
                <div class="soc-metric-box">
                  <div class="metric-val" id="socResAnnualGen">~72,000 kWh</div>
                  <div class="metric-lbl">Est. Annual Generation</div>
                </div>

                <!-- Metric 4: Grid Offset -->
                <div class="soc-metric-box">
                  <div class="metric-val green" id="socResGridOffset">~85%</div>
                  <div class="metric-lbl">Grid Electricity Offset</div>
                </div>

                <!-- Metric 5: Gross Project Cost -->
                <div class="soc-metric-box">
                  <div class="metric-val" id="socResGrossCost">₹27,50,000</div>
                  <div class="metric-lbl">Turnkey EPC Gross Cost</div>
                </div>

                <!-- Metric 6: Eligible CFA -->
                <div class="soc-metric-box highlight-cfa">
                  <span class="soc-badge green">🏛️ MNRE CFA</span>
                  <div class="metric-val green" id="socResCfa">₹9,00,000</div>
                  <div class="metric-lbl">Govt Central Subsidy</div>
                </div>

                <!-- Metric 7: Net Investment -->
                <div class="soc-metric-box highlight-net">
                  <div class="metric-val blue" id="socResNetCost">₹18,50,000</div>
                  <div class="metric-lbl">Net Society Investment</div>
                </div>

                <!-- Metric 8: Annual Savings -->
                <div class="soc-metric-box highlight-save">
                  <div class="metric-val green" id="socResAnnualSavings">₹5,10,000</div>
                  <div class="metric-lbl">Est. Annual Bill Savings</div>
                </div>

              </div>

              <!-- Quick Payback Bar -->
              <div class="soc-payback-banner" style="margin-top:1.25rem;">
                <div>
                  <span style="font-size:0.85rem; color:#64748b; font-weight:700;">INDICATIVE PAYBACK PERIOD:</span>
                  <strong style="font-size:1.35rem; color:#16a34a; font-family:var(--font-heading); margin-left:0.5rem;" id="socResPayback">~3.6 YEARS</strong>
                </div>
                <a href="#society-booking-form" class="btn btn-solar btn-sm">REQUEST SITE SURVEY →</a>
              </div>

              <div style="font-size:0.76rem; color:#64748b; margin-top:0.75rem; line-height:1.4;">
                *Indicative calculation based on 1,440 kWh/kWp/year yield. Final generation and payback depend on actual shading profile, orientation, sanctioned load and DISCOM tariff order.
              </div>
            </div>

          </div>

          <!-- 3-WAY COMPARATIVE FINANCIAL SCENARIOS -->
          <div class="sfhs-3way-scenarios-section" style="margin-top:3rem;">
            <div class="sfhs-section-header" style="margin-bottom:1.75rem;">
              <span class="section-tag section-tag-gold">3-WAY FINANCIAL COMPARISON</span>
              <h3 class="sfhs-section-title" style="font-size:1.85rem;">WITHOUT SOLAR vs. CASH CAPEX vs. FINANCED SOLAR</h3>
              <p class="sfhs-section-subtitle">
                Compare your society's capital outlay, monthly cash flow, and 30-year cumulative return across all three procurement paths.
              </p>
            </div>

            <div class="sfhs-3way-cards-grid">
              
              <!-- OPTION 1: WITHOUT SOLAR -->
              <div class="sfh-3way-card normal-card">
                <div class="sfh-3way-card-badge red">⚡ GRID POWER ONLY</div>
                <h4 class="sfh-3way-card-title">Without Solar</h4>
                <p class="sfh-3way-card-tagline">100% recurring utility expense with continuous exposure to escalating grid tariff hikes.</p>

                <div class="sfh-3way-metric-box red-bg">
                  <span class="sfh-3way-metric-lbl">Current Monthly Outgo</span>
                  <div class="sfh-3way-metric-val red-text" id="soc3WayNormalMonthly">₹50,000 <span class="sfh-val-unit">/ mo</span></div>
                  <span class="sfh-3way-metric-sub" id="soc3WayNormalAnnual">₹6,00,000 / year (+4% annual tariff hike)</span>
                </div>

                <div class="sfh-3way-highlight-pill red">
                  <div class="sfh-hl-label">⚠️ Payback Period</div>
                  <div class="sfh-hl-val red-text">Never (0% Return)</div>
                  <div class="sfh-hl-note">Continuous lifetime liability with ₹0 asset created</div>
                </div>

                <div class="sfh-3way-highlight-pill red">
                  <div class="sfh-hl-label">📉 30-Year Cumulative Outflow / Lost Money</div>
                  <div class="sfh-hl-val red-text" id="soc3WayNormal30Yr">-₹3.36 Crore</div>
                  <div class="sfh-hl-note">100% money spent with zero equity ownership</div>
                </div>

                <div class="sfh-3way-card-footer red-foot">
                  <span>✕ Vulnerable to Grid Outages & Escalating Rates</span>
                </div>
              </div>

              <!-- OPTION 2: CAPEX SOLAR (FULL UPFRONT) -->
              <div class="sfh-3way-card cash-card">
                <div class="sfh-3way-card-badge green">💵 SELF-FUNDED CAPEX</div>
                <h4 class="sfh-3way-card-title">CAPEX Purchase</h4>
                <p class="sfh-3way-card-tagline">Society directly funds and owns the plant with maximum lifetime energy return and zero bank debt.</p>

                <div class="sfh-3way-metric-box green-bg">
                  <span class="sfh-3way-metric-lbl">Net Society Investment</span>
                  <div class="sfh-3way-metric-val green-text" id="soc3WayCapexNet">₹18,50,000</div>
                  <span class="sfh-3way-metric-sub" id="soc3WayCapexCfaSub">After ₹9,00,000 MNRE CFA</span>
                </div>

                <div class="sfh-3way-highlight-pill green">
                  <div class="sfh-hl-label">⏱️ Estimated Payback</div>
                  <div class="sfh-hl-val green-text" id="soc3WayCapexPayback">3.6 Years</div>
                  <div class="sfh-hl-note">100% investment recovered via power savings</div>
                </div>

                <div class="sfh-3way-highlight-pill gold">
                  <div class="sfh-hl-label">💰 30-Year Net Wealth Created</div>
                  <div class="sfh-hl-val green-text" id="soc3WayCapex30Yr">+₹2.68 Crore</div>
                  <div class="sfh-hl-note">Net savings after 100% cost recovery</div>
                </div>

                <div class="sfh-3way-card-footer green-foot">
                  <span>✓ 100% Society Ownership • Zero Interest Outgo</span>
                </div>
              </div>

              <!-- OPTION 3: FINANCED / OPEX SOLAR -->
              <div class="sfh-3way-card emi-card highlight-smart">
                <div class="sfh-3way-smart-tag">MOST POPULAR CHOICE</div>
                <div class="sfh-3way-card-badge blue">💳 SOLAR LOAN / OPEX</div>
                <h4 class="sfh-3way-card-title">Financed Solar</h4>
                <p class="sfh-3way-card-tagline">Spread investment over a 5-year solar loan — monthly bill savings offset the loan EMI automatically.</p>

                <div class="sfh-3way-metric-box blue-bg">
                  <span class="sfh-3way-metric-lbl">Monthly Outgo (Years 1–5)</span>
                  <div class="sfh-3way-metric-val blue-text" id="soc3WayEmiMonthly">₹46,800 <span class="sfh-val-unit">/ mo</span></div>
                  <span class="sfh-3way-metric-sub" id="soc3WayEmiBreakdown">₹39,300 (EMI) + ₹7,500 (Grid Fixed)</span>
                </div>

                <div class="sfh-3way-highlight-pill blue">
                  <div class="sfh-hl-label">⏱️ Estimated Payback</div>
                  <div class="sfh-hl-val" style="color:#1d4ed8;" id="soc3WayEmiPayback">4.8 Years</div>
                  <div class="sfh-hl-note">Loan principal + interest fully offset by energy savings</div>
                </div>

                <div class="sfh-3way-highlight-pill gold">
                  <div class="sfh-hl-label">💰 30-Year Net Wealth Created</div>
                  <div class="sfh-hl-val green-text" id="soc3WayEmi30Yr">+₹2.58 Crore</div>
                  <div class="sfh-hl-note">Net savings after loan repayment is complete</div>
                </div>

                <div class="sfh-3way-card-footer blue-foot">
                  <span>✓ Zero Capital Strain on Society Reserve Funds</span>
                </div>
              </div>

            </div>
          </div>

          <!-- 30-YEAR FINANCIAL MILESTONE TABLE -->
          <div class="sfhs-3way-milestones-card" style="margin-top:2.5rem;">
            <div class="sfhs-3way-milestones-header">
              <span class="section-tag section-tag-gold" style="margin-bottom:0.25rem;">30-YEAR CUMULATIVE TRAJECTORY</span>
              <h4 class="sfh-3way-milestones-title">Cumulative Financial Evolution Across 30 Years</h4>
              <p class="sfhs-3way-milestones-sub">Calculated with 4% annual grid tariff escalation, 0.5% annual solar module degradation, and PM Surya Ghar GHS CFA.</p>
            </div>

            <div class="sfh-3way-table-responsive">
              <table class="sfh-3way-table">
                <thead>
                  <tr>
                    <th>Milestone Timeline</th>
                    <th>⚡ Grid Only (Without Solar)</th>
                    <th>💵 CAPEX Solar (With CFA)</th>
                    <th>💳 Financed Solar (5-Yr Loan)</th>
                  </tr>
                </thead>
                <tbody id="socMilestonesBody">
                  <!-- Generated dynamically in JS -->
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 04B: HOW MUCH TERRACE SPACE DOES YOUR SOCIETY NEED? -->
    <section class="section section-alt" style="background:#f8fafc; padding: 2.25rem 0 1.75rem; scroll-margin-top: 110px;" id="society-space">
      <div class="container">
        <div class="sfh-space-grid">
          <div class="animate-fade-up">
            <span class="section-tag section-tag-gold">SOCIETY TERRACE ENGINEERING</span>
            <h2 class="section-title" style="font-size:2.2rem; margin-bottom:1rem; text-align:left;">HOW MUCH TERRACE SPACE DOES YOUR SOCIETY NEED?</h2>
            <p style="font-size:1.05rem; color:var(--text-muted); line-height:1.65; margin-bottom:1.5rem;">
              Available shadow-free terrace area determines your society's solar generation potential. VOLT'S LEGACY engineers custom elevated superstructures (10ft+ clearance) &mdash; preserving 100% of your terrace floor for residents, evening walks, and events while powering all common utilities.
            </p>

            <div style="font-size:0.9rem; font-weight:700; color:var(--primary-900); margin-bottom:0.75rem;">Society terrace engineering factors:</div>
            <ul class="sfh-space-list">
              <li style="background:#ffffff;"><span style="color:#0284c7; display:flex; align-items:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg></span> Elevated Pergola (10ft Clear)</li>
              <li style="background:#ffffff;"><span style="color:#0284c7; display:flex; align-items:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg></span> 150+ km/h Wind Certified</li>
              <li style="background:#ffffff;"><span style="color:#0284c7; display:flex; align-items:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span> Zero Terrace Leakage Risk</li>
              <li style="background:#ffffff;"><span style="color:#0284c7; display:flex; align-items:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></span> Lift &amp; Tank Buffer Setbacks</li>
              <li style="background:#ffffff;"><span style="color:#0284c7; display:flex; align-items:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></span> True South 12&deg;&ndash;15&deg; Tilt</li>
              <li style="background:#ffffff;"><span style="color:#0284c7; display:flex; align-items:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span> Common LT Panel Sync</li>
            </ul>

            <a href="#society-booking-form" class="btn btn-solar btn-lg">
              CHECK SOCIETY ROOFTOP &rarr;
            </a>
          </div>

          <div class="sfh-space-img-card animate-fade-up" style="animation-delay:0.1s;">
            <img src="assets/society-rooftop-space.jpg" alt="3D Architectural Housing Society Rooftop Space and Elevated Pergola Simulation" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 05: GUJARAT DISCOM REGULATORY & 6-STEP EPC JOURNEY -->
    <section class="sfhs-section">
      <div class="container container-wide">
        <div class="sfhs-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">END-TO-END TURNKEY EXECUTION</span>
          <h2 class="sfhs-section-title">A HASSLE-FREE JOURNEY FROM CONSULTATION TO GENERATION</h2>
          <p class="sfhs-section-subtitle">
            VOLT'S LEGACY manages the entire end-to-end process, DISCOM net-metering synchronization, and PM Surya Ghar CFA liaisoning.
          </p>
        </div>

        <!-- 4 Regulatory Body Badges -->
        <div class="sfhs-reg-grid-4 animate-fade-up" style="margin-bottom:2.5rem;">
          <div class="sfhs-reg-card">
            <div class="reg-icon">🏛️</div>
            <h3 class="reg-title">PM SURYA GHAR</h3>
            <p class="reg-desc">₹18,000/kWp CFA for eligible GHS/RWA common facility meters.</p>
          </div>
          <div class="sfhs-reg-card">
            <div class="reg-icon">📑</div>
            <h3 class="reg-title">MNRE COMPLIANT</h3>
            <p class="reg-desc">Tier-1 ALMM listed modules, BIS inverters, and national portal processing.</p>
          </div>
          <div class="sfhs-reg-card">
            <div class="reg-icon">⚖️</div>
            <h3 class="reg-title">GERC TARIFF ORDER</h3>
            <p class="reg-desc">Gujarat Electricity Regulatory Commission net-metering & banking framework.</p>
          </div>
          <div class="sfhs-reg-card">
            <div class="reg-icon">🔌</div>
            <h3 class="reg-title">GUJARAT DISCOMs</h3>
            <p class="reg-desc">Torrent Power, DGVCL, MGVCL, PGVCL, UGVCL feasibility inspection & net-meter sync.</p>
          </div>
        </div>

        <!-- 6 Working Steps with Checklists -->
        <div class="sfh-process-grid-6 animate-fade-up">
          
          <div class="sfh-process-card">
            <div class="sfh-process-top">
              <span class="sfh-process-step-num">STEP 01</span>
              <span class="sfh-process-time">Day 1</span>
            </div>
            <h3 class="sfh-process-title">Bill & Load Audit</h3>
            <p class="sfh-process-desc">
              We conduct a comprehensive audit of your society's recent common electricity bills, connected sanction load, and tariff structure to identify peak energy saving opportunities.
            </p>
            <ul class="sfh-process-checks">
              <li><span class="chk">✓</span><span>Bill & Tariff Analysis</span></li>
              <li><span class="chk">✓</span><span>Sanctioned Load Review</span></li>
            </ul>
          </div>

          <div class="sfh-process-card">
            <div class="sfh-process-top">
              <span class="sfh-process-step-num">STEP 02</span>
              <span class="sfh-process-time">Day 2–3</span>
            </div>
            <h3 class="sfh-process-title">3D Rooftop Survey</h3>
            <p class="sfh-process-desc">
              Our engineering team conducts drone and laser surveys on-site for 3D shadow analysis, structural terrace integrity checks, and optimal cable routing to the LT panel.
            </p>
            <ul class="sfh-process-checks">
              <li><span class="chk">✓</span><span>3D Shadow Modeling</span></li>
              <li><span class="chk">✓</span><span>Terrace Structural Audit</span></li>
            </ul>
          </div>

          <div class="sfh-process-card orange-core">
            <div class="sfh-process-top">
              <span class="sfh-process-step-num">STEP 03</span>
              <span class="sfh-process-time">Day 4–7</span>
            </div>
            <h3 class="sfh-process-title">Custom Proposal & ROI</h3>
            <p class="sfh-process-desc">
              We engineer a customized 3D plant layout, accurate generation forecasts, PM Surya Ghar CFA subsidy mapping, and cash flow comparisons for committee review.
            </p>
            <ul class="sfh-process-checks">
              <li><span class="chk">✓</span><span>Detailed CAD Sizing</span></li>
              <li><span class="chk">✓</span><span>CFA Subsidy Roadmap</span></li>
            </ul>
          </div>

          <div class="sfh-process-card">
            <div class="sfh-process-top">
              <span class="sfh-process-step-num">STEP 04</span>
              <span class="sfh-process-time">Committee</span>
            </div>
            <h3 class="sfh-process-title">Committee Presentation</h3>
            <p class="sfh-process-desc">
              Our senior solar engineers present the complete proposal to your Management Committee (MC) and AGM members to address technical, financial, and structural questions.
            </p>
            <ul class="sfh-process-checks">
              <li><span class="chk">✓</span><span>AGM Presentation Dossier</span></li>
              <li><span class="chk">✓</span><span>Member Q&A Clarification</span></li>
            </ul>
          </div>

          <div class="sfh-process-card">
            <div class="sfh-process-top">
              <span class="sfh-process-step-num">STEP 05</span>
              <span class="sfh-process-time">Execution</span>
            </div>
            <h3 class="sfh-process-title">Installation & Net-Meter</h3>
            <p class="sfh-process-desc">
              Certified technicians install elevated galvanized structures, TopCon modules, and inverters, followed by DISCOM testing and bi-directional net-meter synchronization.
            </p>
            <ul class="sfh-process-checks">
              <li><span class="chk">✓</span><span>Nut-Bolt Elevated Mounts</span></li>
              <li><span class="chk">✓</span><span>DISCOM Bi-Directional Meter</span></li>
            </ul>
          </div>

          <div class="sfh-process-card green-milestone">
            <div class="sfh-process-top">
              <span class="sfh-process-step-num">STEP 06</span>
              <span class="sfh-process-time">Long-Term</span>
            </div>
            <h3 class="sfh-process-title">Commissioning & Care</h3>
            <p class="sfh-process-desc">
              Your society terrace begins generating green electricity with real-time cloud IoT monitoring, scheduled cleaning visits, and guaranteed 30-year lifecycle care.
            </p>
            <ul class="sfh-process-checks">
              <li><span class="chk">✓</span><span>Live Mobile App Telemetry</span></li>
              <li><span class="chk">✓</span><span>30-Year Performance Care</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 06: QUALITY, SAFETY & LIVE ENVIRONMENTAL IMPACT -->
    <section class="sfhs-section sfhs-bg-light">
      <div class="container container-wide">
        <div class="sfhs-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">ENGINEERED TO INDIA'S STANDARDS</span>
          <h2 class="sfhs-section-title">SAFETY, QUALITY & SUSTAINABILITY AT EVERY STEP</h2>
          <p class="sfhs-section-subtitle">
            Built strictly in accordance with MNRE, ALMM, CEA, BIS QCO, and DISCOM technical requirements.
          </p>
        </div>

        <div class="sfhs-quality-grid-3 animate-fade-up">
          <div class="sfhs-q-box">
            <div class="q-icon">🛡️</div>
            <h3 class="q-title">Tier-1 ALMM TopCon Modules</h3>
            <p class="q-desc">
              High-efficiency N-Type TOPCon bifacial and monocrystalline solar modules equipped with 30-year linear performance degradation warranties and IP66 smart string inverters.
            </p>
          </div>

          <div class="sfhs-q-box">
            <div class="q-icon">⚡</div>
            <h3 class="q-title">Elevated Superstructures & Safety</h3>
            <p class="q-desc">
              Hot-dip galvanized elevated superstructures engineered to withstand 150+ km/h wind loads, dual-pole lightning arrestors, dedicated earthing pits, and zero terrace waterproofing penetration.
            </p>
          </div>

          <div class="sfhs-q-box">
            <div class="q-icon">🌱</div>
            <h3 class="q-title">30-Year Sustainable Impact</h3>
            <p class="q-desc">
              Generating clean solar power directly on your terrace substantially reduces society carbon emissions, slashes recurring utility bills, and creates an eco-friendly community legacy.
            </p>
          </div>
        </div>

        <!-- Live Environmental Counters -->
        <div class="sfhs-env-counters-card animate-fade-up" style="margin-top:2rem;">
          <div class="env-counter-item">
            <span class="cnt-icon">☀️</span>
            <strong class="cnt-val" id="socResEnvMwh">~72 MWh</strong>
            <span class="cnt-lbl">Clean Solar Power / Year</span>
          </div>
          <div class="env-counter-item">
            <span class="cnt-icon">🌳</span>
            <strong class="cnt-val" id="socResEnvCo2">~59.0 Tonnes</strong>
            <span class="cnt-lbl">CO₂ Emissions Avoided / Year</span>
          </div>
          <div class="env-counter-item">
            <span class="cnt-icon">🍃</span>
            <strong class="cnt-val" id="socResEnvTrees">~2,480 Trees</strong>
            <span class="cnt-lbl">Equivalent Forest Plantation</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 07: TOP 6 ESSENTIAL FAQs -->
    <section class="sfhs-section" id="society-faq">
      <div class="container" style="max-width:960px;">
        <div class="sfhs-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">FREQUENTLY ASKED QUESTIONS</span>
          <h2 class="sfhs-section-title">HOUSING SOCIETY SOLAR — KEY QUESTIONS ANSWERED</h2>
          <p class="sfhs-section-subtitle">
            Essential answers for Society Management Committees, Chairmen, Secretaries, and flat owners.
          </p>
        </div>

        <div class="sfhs-faq-container" id="sfhs-faq-list">
          
          <!-- Q1 -->
          <div class="sfhs-faq-item active animate-fade-up">
            <button class="sfhs-faq-question" aria-expanded="true">
              <span>01. How much PM Surya Ghar CFA can a housing society receive?</span>
              <span class="faq-icon">−</span>
            </button>
            <div class="sfhs-faq-answer">
              Under the PM Surya Ghar scheme, eligible GHS/RWA common facility meters receive Central Financial Assistance (CFA) of <strong>₹18,000 per kWp</strong>, subject to a limit of 3 kWp per household and an overall ceiling of 500 kWp per society.
            </div>
          </div>

          <!-- Q2 -->
          <div class="sfhs-faq-item animate-fade-up">
            <button class="sfhs-faq-question" aria-expanded="false">
              <span>02. What common facilities can the solar plant power?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              The rooftop solar system connects directly into your society's main LT distribution panel to power passenger & service lifts, water transfer & booster pumps, corridor & basement lighting, clubhouse/gymnasium amenities, security CCTV systems, and EV charging points.
            </div>
          </div>

          <!-- Q3 -->
          <div class="sfhs-faq-item animate-fade-up">
            <button class="sfhs-faq-question" aria-expanded="false">
              <span>03. Can our society finance the project so monthly bill savings pay the loan EMI?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              Yes. Multiple leading banks offer collateral-free solar loans tailored for registered RWAs and Housing Societies across 3 to 7 year tenures. The monthly electricity bill savings directly offset the loan EMI, eliminating any immediate drain on the society's reserve/sinking fund.
            </div>
          </div>

          <!-- Q4 -->
          <div class="sfhs-faq-item animate-fade-up">
            <button class="sfhs-faq-question" aria-expanded="false">
              <span>04. What permissions and resolutions are required from the society?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              The society requires a Management Committee (MC) / AGM resolution approving rooftop solar installation on the common terrace. VOLT'S LEGACY assists your committee with complete technical dossiers, ROI presentations, and DISCOM application documentation.
            </div>
          </div>

          <!-- Q5 -->
          <div class="sfhs-faq-item animate-fade-up">
            <button class="sfhs-faq-question" aria-expanded="false">
              <span>05. How does net-metering work with Gujarat DISCOMs (Torrent / GUVNL)?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              A bi-directional net-meter records solar energy generated vs. energy consumed from the grid. Daytime surplus units are exported to the grid and credited against evening/nighttime consumption in accordance with GERC net-metering regulations.
            </div>
          </div>

          <!-- Q6 -->
          <div class="sfhs-faq-item animate-fade-up">
            <button class="sfhs-faq-question" aria-expanded="false">
              <span>06. What warranties and lifecycle maintenance does VOLT'S LEGACY provide?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="sfhs-faq-answer">
              We provide 30-year linear performance warranties on Tier-1 TopCon modules, 8–10 year inverter warranties, 24/7 cloud IoT generation monitoring, scheduled preventative maintenance visits, and complete warranty claim management.
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 08: LEAD GENERATION FORM -->
    <section class="sfhs-section sfhs-bg-light" id="society-booking-form">
      <div class="container">
        <div class="sfhs-section-header animate-fade-up">
          <span class="section-tag section-tag-gold">⚡ FREE SOCIETY FEASIBILITY REPORT</span>
          <h2 class="sfhs-section-title">GET YOUR FREE SOLAR FEASIBILITY REPORT FOR YOUR HOUSING SOCIETY</h2>
          <p class="sfhs-section-subtitle">
            Share your society's common electricity details. Our senior solar engineers will calculate your exact sizing, PM Surya Ghar GHS CFA eligibility, 3D terrace layout, and financial savings.
          </p>
        </div>

        <div class="sfhs-form-wrapper animate-fade-up">
          <div class="sfhs-form-card">
            
            <form id="societyBookingForm" novalidate>
              
              <!-- Row 1: Society Name & Contact Person -->
              <div class="sfh-form-row-2">
                <div class="form-group" id="group-soc-name">
                  <label class="form-label" for="socFormSocietyName">Society / Apartment / RWA Name <span style="color:#ef4444;">*</span></label>
                  <input type="text" class="form-control" id="socFormSocietyName" name="societyName" placeholder="e.g. Silver Crest Heights RWA" required>
                  <span class="field-error-msg">Please enter your society name.</span>
                </div>
                <div class="form-group" id="group-soc-person">
                  <label class="form-label" for="socFormContactPerson">Contact Person & Designation <span style="color:#ef4444;">*</span></label>
                  <input type="text" class="form-control" id="socFormContactPerson" name="contactPerson" placeholder="e.g. Ramesh Patel (Chairman / Secretary)" required>
                  <span class="field-error-msg">Please enter contact person name.</span>
                </div>
              </div>

              <!-- Row 2: WhatsApp Mobile & Email -->
              <div class="sfh-form-row-2" style="margin-top:1.25rem;">
                <div class="form-group" id="group-soc-phone">
                  <label class="form-label" for="socFormPhone">WhatsApp Mobile Number <span style="color:#ef4444;">*</span></label>
                  <div style="display:flex;">
                    <span style="background:#f1f5f9; border:1.5px solid #cbd5e1; border-right:none; padding:0.75rem 0.85rem; font-weight:700; color:#475569; border-radius:8px 0 0 8px;">+91</span>
                    <input type="tel" class="form-control" id="socFormPhone" name="phone" placeholder="9876543210" maxlength="10" required style="border-radius:0 8px 8px 0;">
                  </div>
                  <span class="field-error-msg">Please enter a valid 10-digit mobile number.</span>
                </div>
                <div class="form-group" id="group-soc-email">
                  <label class="form-label" for="socFormEmail">Official Email ID</label>
                  <input type="email" class="form-control" id="socFormEmail" name="email" placeholder="e.g. rwa.silvercrest@gmail.com">
                </div>
              </div>

              <!-- Row 3: City/Pincode & Number of Flats -->
              <div class="sfh-form-row-2" style="margin-top:1.25rem;">
                <div class="form-group" id="group-soc-city">
                  <label class="form-label" for="socFormCity">City / Area & Pincode <span style="color:#ef4444;">*</span></label>
                  <input type="text" class="form-control" id="socFormCity" name="city" placeholder="e.g. Surat / Ahmedabad - 395007" required>
                  <span class="field-error-msg">Please enter your city and pincode.</span>
                </div>
                <div class="form-group" id="group-soc-flats">
                  <label class="form-label" for="socFormFlats">Total Number of Apartments / Flats <span style="color:#ef4444;">*</span></label>
                  <input type="number" class="form-control" id="socFormFlats" name="flats" placeholder="e.g. 120" min="10" max="5000" required>
                  <span class="field-error-msg">Please specify total flats.</span>
                </div>
              </div>

              <!-- Row 4: Monthly Bill & DISCOM -->
              <div class="sfh-form-row-2" style="margin-top:1.25rem;">
                <div class="form-group" id="group-soc-bill">
                  <label class="form-label" for="socFormBill">Avg. Monthly Common Electricity Bill (₹) <span style="color:#ef4444;">*</span></label>
                  <input type="number" class="form-control" id="socFormBill" name="monthlyBill" placeholder="e.g. 65000" min="5000" required>
                  <span class="field-error-msg">Please enter monthly common bill.</span>
                </div>
                <div class="form-group" id="group-soc-discom">
                  <label class="form-label" for="socFormDiscom">Applicable DISCOM Provider</label>
                  <select class="form-control" id="socFormDiscom" name="discom">
                    <option value="Torrent Power" selected>Torrent Power</option>
                    <option value="DGVCL">DGVCL (South Gujarat)</option>
                    <option value="MGVCL">MGVCL (Central Gujarat)</option>
                    <option value="PGVCL">PGVCL (Saurashtra / Kutch)</option>
                    <option value="UGVCL">UGVCL (North Gujarat)</option>
                    <option value="Other">Other Electricity Board</option>
                  </select>
                </div>
              </div>

              <!-- Row 5: Common Facilities Inventory -->
              <div class="soc-input-row-3" style="margin-top:1.25rem;">
                <div class="form-group">
                  <label class="form-label" for="socFormLifts">Number of Lifts</label>
                  <input type="number" class="form-control" id="socFormLifts" name="lifts" placeholder="e.g. 4" value="4">
                </div>
                <div class="form-group">
                  <label class="form-label" for="socFormPumps">Number of Water Pumps</label>
                  <input type="number" class="form-control" id="socFormPumps" name="pumps" placeholder="e.g. 3" value="3">
                </div>
                <div class="form-group">
                  <label class="form-label" for="socFormEv">EV Charging Bays</label>
                  <input type="number" class="form-control" id="socFormEv" name="evChargers" placeholder="e.g. 2" value="2">
                </div>
              </div>

              <!-- Row 6: Financing Preference & Roof Area -->
              <div class="sfh-form-row-2" style="margin-top:1.25rem;">
                <div class="form-group">
                  <label class="form-label" for="socFormPref">Solar Procurement Preference</label>
                  <select class="form-control" id="socFormPref" name="procurementPref">
                    <option value="CAPEX (Direct Purchase)" selected>CAPEX (Direct Society Purchase + CFA)</option>
                    <option value="Financed CAPEX (5-Yr Loan)">Financed CAPEX (Solar Bank Loan / EMI)</option>
                    <option value="OPEX / RESCO Model">OPEX / RESCO (Zero Upfront Cost)</option>
                    <option value="Not Sure / Suggest Best">Not Sure / Please Suggest Best Option</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="socFormRoofArea">Est. Available Rooftop Space (sq.ft)</label>
                  <input type="text" class="form-control" id="socFormRoofArea" name="roofArea" placeholder="e.g. 6,000 sq.ft (RCC Flat Terrace)">
                </div>
              </div>

              <!-- Row 7: Message / Specific Requirements -->
              <div class="form-group" style="margin-top:1.25rem;">
                <label class="form-label" for="socFormMessage">Additional Notes / Terrace Specifications</label>
                <textarea class="form-control" id="socFormMessage" name="message" rows="3" placeholder="Tell us if you need elevated structures, have high-rise lift machine rooms, or require an on-site Committee Presentation..."></textarea>
              </div>

              <!-- Submit Button -->
              <div style="margin-top:1.75rem;">
                <button type="submit" id="socSubmitBtn" class="btn btn-solar btn-lg" style="width:100%; font-size:1.1rem; font-weight:800; padding:1.15rem; justify-content:center; box-shadow:0 10px 25px rgba(245,158,11,0.38);">
                  ⚡ GET MY FREE SOCIETY SOLAR ASSESSMENT →
                </button>
                <div style="text-align:center; margin-top:0.85rem; font-size:0.84rem; color:#64748b;">
                  🔒 100% Free & No-Obligation • Google Sheets Synced • Dedicated Solar Engineer Presentation for Society Committee
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 09: FINAL CTA & DISCLAIMER -->
    <section class="sfhs-cta-section">
      <div class="container">
        <div class="sfhs-cta-box animate-fade-up">
          <h2 class="sfhs-cta-title">
            YOUR SOCIETY PAYS FOR COMMON ELECTRICITY EVERY SINGLE MONTH.<br>
            <span style="color:var(--solar-gold-400);">TURN PART OF THAT COST INTO A SHARED ASSET.</span>
          </h2>
          <p class="sfhs-cta-text">
            Get an engineer-verified assessment of your society's electricity bills, terrace potential, common load profile, and 30-year financial returns with PM Surya Ghar GHS CFA.
          </p>
          <div class="sfhs-cta-buttons">
            <a href="#society-financing" class="btn btn-solar btn-lg">
              CALCULATE SOCIETY SAVINGS →
            </a>
            <a href="#society-booking-form" class="btn btn-secondary btn-lg" style="background:rgba(255,255,255,0.12); color:#ffffff; border-color:rgba(255,255,255,0.3);">
              GET FREE SOCIETY ASSESSMENT →
            </a>
            <a href="https://wa.me/919998765059?text=Hello%20Volt's%20Legacy%20Solar,%20I%20would%20like%20to%20discuss%20rooftop%20solar%20for%20our%20Housing%20Society." target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg" style="background:#25d366; color:#ffffff; border-color:#25d366; font-weight:800;">
              💬 CHAT WITH SOCIETY EXPERT →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 10: LEGAL & REGULATORY DISCLAIMER -->
    <section class="sfhs-legal-disclaimer">
      <div class="container">
        <p class="sfhs-legal-text">
          <strong>Government & Financial Disclaimer:</strong> Government Central Financial Assistance (CFA), scheme guidelines, eligibility conditions, capacity limits, electricity tariffs, net-metering regulations, DISCOM procedures, and financing terms are subject to change from time to time by MNRE, GERC, and respective DISCOM authorities. All solar generation figures, savings, ROI, and payback estimates presented on this page are illustrative engineering estimates based on standard irradiance models. Final project economics, CFA disbursement, and system performance are subject to on-site technical survey, shadow profiling, sanctioned load verification, and official DISCOM approvals.
        </p>
      </div>
    </section>
  `;
}

// Interactive Logic for Solar for Homes Page
window.initSolarForHomesPage = function() {
  // 1. FAQ Accordion Handling
  const faqItems = document.querySelectorAll('.sfh-faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.sfh-faq-question');
    if (!btn) return;

    btn.onclick = () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherBtn = other.querySelector('.sfh-faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    };
  });

  // Helper formatters
  function formatCurr(num) {
    return '₹' + Math.round(num).toLocaleString('en-IN');
  }

  function formatLakhs(amount) {
    if (Math.abs(amount) >= 100000) {
      const l = (amount / 100000).toFixed(2);
      return `₹${l} Lakhs`;
    }
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  }

  // 2. Mini ROI Calculator Sync
  const miniCost = document.getElementById('sfh-mini-cost');
  const miniSub = document.getElementById('sfh-mini-sub');
  const miniSavings = document.getElementById('sfh-mini-savings');
  const miniNet = document.getElementById('sfh-mini-net');
  const miniPayback = document.getElementById('sfh-mini-payback');

  function updateMiniRoi() {
    if (!miniCost || !miniSub || !miniSavings || !miniNet || !miniPayback) return;
    const cost = parseFloat(miniCost.value) || 0;
    const sub = parseFloat(miniSub.value) || 0;
    const savings = parseFloat(miniSavings.value) || 1;

    const net = Math.max(0, cost - sub);
    const payback = (net / Math.max(1, savings)).toFixed(1);

    miniNet.textContent = `₹${net.toLocaleString('en-IN')}`;
    miniPayback.textContent = `${payback} Years`;
  }

  if (miniCost && miniSub && miniSavings) {
    miniCost.addEventListener('input', updateMiniRoi);
    miniSub.addEventListener('input', updateMiniRoi);
    miniSavings.addEventListener('input', updateMiniRoi);
  }

  // 3. 3-Way Cash vs Normal vs EMI Comparative Calculator
  const range3Way = document.getElementById('sfh-3way-bill-range');
  const input3Way = document.getElementById('sfh-3way-bill-input');
  const presetBtns = document.querySelectorAll('.sfh-preset-btn');

  // Specs
  const specReqKw = document.getElementById('sfh-3way-spec-req-kw');
  const specRecKw = document.getElementById('sfh-3way-spec-rec-kw');
  const specKw = document.getElementById('sfh-3way-spec-kw');
  const specHardware = document.getElementById('sfh-3way-spec-hardware');
  const specGen = document.getElementById('sfh-3way-spec-gen');
  const specCost = document.getElementById('sfh-3way-spec-cost');
  const specSub = document.getElementById('sfh-3way-spec-sub');
  const specNet = document.getElementById('sfh-3way-spec-net');

  // Cash Option Card
  const cashNet = document.getElementById('sfh-3way-cash-net');
  const cashSubCalc = document.getElementById('sfh-3way-cash-sub-calc');
  const cashPayback = document.getElementById('sfh-3way-cash-payback');
  const cash30Yr = document.getElementById('sfh-3way-cash-30yr');
  const cashMonthlyBill = document.getElementById('sfh-3way-cash-monthly-bill');
  const cashMonthlySave = document.getElementById('sfh-3way-cash-monthly-save');
  const cashAnnualSave = document.getElementById('sfh-3way-cash-annual-save');
  const cashFreeYears = document.getElementById('sfh-3way-cash-free-years');

  // Normal Option Card
  const normalMonthly = document.getElementById('sfh-3way-normal-monthly');
  const normalAnnual = document.getElementById('sfh-3way-normal-annual');
  const normal30Yr = document.getElementById('sfh-3way-normal-30yr');
  const normal5Yr = document.getElementById('sfh-3way-normal-5yr');

  // EMI Option Card
  const emiMonthly = document.getElementById('sfh-3way-emi-monthly');
  const emiBreakdown = document.getElementById('sfh-3way-emi-breakdown');
  const emiPayback = document.getElementById('sfh-3way-emi-payback');
  const emi30Yr = document.getElementById('sfh-3way-emi-30yr');
  const emiDiff = document.getElementById('sfh-3way-emi-diff');
  const emiPostBill = document.getElementById('sfh-3way-emi-post-bill');
  const emiFreeYears = document.getElementById('sfh-3way-emi-free-years');

  // Milestones Table & Summary CTA
  const milestonesBody = document.getElementById('sfh-3way-milestones-body');
  const summarySave = document.getElementById('sfh-3way-summary-save');

  // Official Maximum Price Dataset: Tier-1 High Yield 600W TopCon + Normal String Inverter System
  const OFFICIAL_MAX_PRICING = [
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

  function calculateAll(billValue, source = 'range3way') {
    let bill = Math.max(500, Math.min(100000, parseFloat(billValue) || 3500));

    // Sync input controls
    if (source !== 'input3way' && input3Way) input3Way.value = bill;
    if (source !== 'range3way' && range3Way) range3Way.value = Math.min(30000, bill);

    // Highlight active preset button if matches
    presetBtns.forEach(btn => {
      if (parseInt(btn.getAttribute('data-val')) === bill) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 1. Torrent Power Sheet 3 Sizing Formula
    // Required Solar System (in KW) = (Monthly_Bill / (30 * 7.80 * 4)) * 1.08
    const tariff = 7.80; // Torrent Power Standard Tariff (₹/unit)
    const requiredKw = +((bill / (30 * tariff * 4)) * 1.08).toFixed(2);
    let numPanels = Math.max(4, Math.ceil((requiredKw * 1000) / 600));
    let kw = +((numPanels * 0.60).toFixed(2));

    // Find closest matching tier from OFFICIAL_MAX_PRICING
    let tier = OFFICIAL_MAX_PRICING.find(t => t.panels === numPanels);
    if (!tier) {
      const baseTier = OFFICIAL_MAX_PRICING[OFFICIAL_MAX_PRICING.length - 1];
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
        tier = OFFICIAL_MAX_PRICING[0];
      }
    }

    let grossCost = tier.rate;
    let subsidy = tier.subsidy;
    let netInvestment = tier.net;
    let monthlyGenUnits = numPanels * 75;
    let inverterName = tier.inv;

    // Monthly solar generation & power savings
    const monthlySolarValue = Math.min(bill, Math.round(monthlyGenUnits * tariff));
    const residualGridBill = Math.max(450, Math.round(bill - monthlySolarValue));
    const monthlySavings = bill - residualGridBill;
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
    const factor5Yr = (Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation;
    const normal30YrTotal = Math.round((bill * 12) * factor30Yr);
    const normal5YrTotal = Math.round((bill * 12) * factor5Yr);
    const residual30YrTotal = Math.round((residualGridBill * 12) * factor30Yr);

    const cash30YrNetWealth = normal30YrTotal - (netInvestment + residual30YrTotal);
    const emi30YrNetWealth = normal30YrTotal - (totalLoanPaid + residual30YrTotal);

    // Year-by-year milestone tracking
    const pbCashVal = parseFloat(cashPaybackYears);
    const pbEmiVal = parseFloat(emiPaybackYears);

    const milestonesData = [
      {
        year: 1,
        label: 'Year 1',
        normal: -(bill * 12),
        cash: (annualSavings - netInvestment),
        emi: (bill * 12) - ((emi * 12) + (residualGridBill * 12)),
        emiStatus: 'Loan active'
      },
      {
        year: pbCashVal,
        label: `Year ${cashPaybackYears} (Cash Payback)`,
        normal: -Math.round((bill * 12) * ((Math.pow(1 + annualEscalation, pbCashVal) - 1) / Math.log(1 + annualEscalation))),
        cash: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, pbCashVal) - 1) / Math.log(1 + annualEscalation))) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, pbCashVal) - 1) / Math.log(1 + annualEscalation))))),
        emi: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, pbCashVal) - 1) / Math.log(1 + annualEscalation))) - ((emi * 12 * Math.min(5, pbCashVal)) + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, pbCashVal) - 1) / Math.log(1 + annualEscalation))))),
        emiStatus: 'Loan active'
      },
      {
        year: pbEmiVal,
        label: `Year ${emiPaybackYears} (EMI Payback)`,
        normal: -Math.round((bill * 12) * ((Math.pow(1 + annualEscalation, pbEmiVal) - 1) / Math.log(1 + annualEscalation))),
        cash: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, pbEmiVal) - 1) / Math.log(1 + annualEscalation))) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, pbEmiVal) - 1) / Math.log(1 + annualEscalation))))),
        emi: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, pbEmiVal) - 1) / Math.log(1 + annualEscalation))) - ((emi * 12 * Math.min(5, pbEmiVal)) + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, pbEmiVal) - 1) / Math.log(1 + annualEscalation))))),
        emiStatus: pbEmiVal <= 5 ? 'Loan active' : 'Net Wealth'
      },
      {
        year: 5,
        label: 'Year 5 (Loan Paid)',
        normal: -Math.round((bill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)),
        cash: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)))),
        emi: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)) - (totalLoanPaid + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)))),
        emiStatus: 'Loan active'
      },
      {
        year: 10,
        label: 'Year 10',
        normal: -Math.round((bill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)),
        cash: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)))),
        emi: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)) - (totalLoanPaid + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)))),
        emiStatus: 'Net Wealth'
      },
      {
        year: 20,
        label: 'Year 20',
        normal: -Math.round((bill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)),
        cash: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)))),
        emi: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)) - (totalLoanPaid + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)))),
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

    // Update Specs Bar
    if (specReqKw) specReqKw.textContent = `${requiredKw} kW`;
    if (specRecKw) specRecKw.textContent = `${kw} kW (${numPanels} Panels)`;
    if (specKw) specKw.textContent = `${requiredKw} kW (${numPanels} Panels)`;
    if (specHardware) specHardware.textContent = `${inverterName} • Nut-Bolt`;
    if (specGen) specGen.textContent = `~${monthlyGenUnits} kWh / mo`;
    if (specCost) specCost.textContent = formatCurr(grossCost);
    if (specSub) specSub.textContent = `${formatCurr(subsidy)} Direct`;
    if (specNet) specNet.textContent = formatCurr(netInvestment);

    // Update Cash Option Card
    if (cashNet) cashNet.textContent = formatCurr(netInvestment);
    if (cashSubCalc) cashSubCalc.textContent = `After ${formatCurr(subsidy)} Central DBT Subsidy`;
    if (cashPayback) cashPayback.textContent = `${cashPaybackYears} Years`;
    if (cash30Yr) cash30Yr.textContent = `+${formatLakhs(cash30YrNetWealth)}`;
    if (cashMonthlyBill) cashMonthlyBill.textContent = `~${formatCurr(residualGridBill)} / mo`;
    if (cashMonthlySave) cashMonthlySave.textContent = `${formatCurr(monthlySavings)} / mo`;
    if (cashAnnualSave) cashAnnualSave.textContent = `${formatCurr(annualSavings)} / yr`;
    if (cashFreeYears) cashFreeYears.textContent = `${freePowerYears} Years`;

    // Update Normal Grid Card
    if (normalMonthly) normalMonthly.innerHTML = `${formatCurr(bill)} <span class="sfh-val-unit">/ mo</span>`;
    if (normalAnnual) normalAnnual.textContent = `${formatCurr(bill * 12)} / year (+4% annual tariff hike)`;
    if (normal30Yr) normal30Yr.textContent = `-${formatLakhs(normal30YrTotal)}`;
    if (normal5Yr) normal5Yr.textContent = `-${formatLakhs(normal5YrTotal)}`;

    // Update EMI Option Card
    if (emiMonthly) emiMonthly.innerHTML = `${formatCurr(emiTotalMonthly)} <span class="sfh-val-unit">/ mo</span>`;
    if (emiBreakdown) emiBreakdown.textContent = `${formatCurr(emi)} (5-Yr Solar EMI) + ~${formatCurr(residualGridBill)} (Grid Fixed)`;
    if (emiPayback) emiPayback.textContent = `${emiPaybackYears} Years`;
    if (emi30Yr) emi30Yr.textContent = `+${formatLakhs(emi30YrNetWealth)}`;
    const diffVal = bill - emiTotalMonthly;
    if (emiDiff) {
      if (diffVal > 0) {
        emiDiff.textContent = `Cheaper by ~${formatCurr(diffVal)}/mo!`;
        emiDiff.style.color = '#16a34a';
      } else {
        emiDiff.textContent = `Near bill-neutral (+${formatCurr(Math.abs(diffVal))}/mo)`;
        emiDiff.style.color = '#2563eb';
      }
    }
    if (emiPostBill) emiPostBill.textContent = `~${formatCurr(residualGridBill)} / mo (₹0 EMI)`;
    if (emiFreeYears) emiFreeYears.textContent = `${emiFreePowerYears} Years`;

    // Update Milestones Table
    if (milestonesBody) {
      milestonesBody.innerHTML = milestonesData.map(m => {
        const normalText = `<span style="color:#dc2626; font-weight:700;">-${formatLakhs(Math.abs(m.normal))} Lost Outflow</span>`;

        const cashText = m.cash >= 0
          ? `<strong style="color:#16a34a;">+${formatLakhs(m.cash)} Net Wealth</strong>`
          : `<span style="color:#d97706; font-weight:600;">-${formatLakhs(Math.abs(m.cash))} (Payback in progress)</span>`;

        const emiText = m.year <= 5
          ? (m.emi >= 0
              ? `<strong style="color:#2563eb;">+${formatLakhs(m.emi)} (Loan active)</strong>`
              : `<span style="color:#2563eb; font-weight:600;">-${formatLakhs(Math.abs(m.emi))} (Loan active)</span>`)
          : `<strong style="color:#16a34a;">+${formatLakhs(m.emi)} Net Wealth</strong>`;

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
    if (summarySave) summarySave.textContent = `${formatLakhs(cash30YrNetWealth)}`;

    // Store active calculation state for Quotation Engine & Google Sheets submission
    window.sfhCurrentCalculation = {
      bill: bill,
      requiredKw: `${requiredKw} kW`,
      recommendedKw: `${kw} kW (${numPanels} Panels)`,
      monthlyGenUnits: monthlyGenUnits,
      grossCost: grossCost,
      subsidy: subsidy,
      netInvestment: netInvestment,
      inverterName: inverterName,
      monthlySavings: monthlySavings,
      annualSavings: annualSavings,
      cashPaybackYears: cashPaybackYears,
      freePowerYears: freePowerYears,
      emi: emi
    };

    // Sync Live Quotation Summary Preview in Section 19 Form
    const quoteSummarySize = document.getElementById('sfh-quote-summary-size');
    const quoteSummarySub = document.getElementById('sfh-quote-summary-sub');
    if (quoteSummarySize) {
      quoteSummarySize.textContent = `${requiredKw} kW Req. • ${kw} kW Rec. (${numPanels} Panels)`;
    }
    if (quoteSummarySub) {
      quoteSummarySub.textContent = `${formatCurr(subsidy)} Direct Credit`;
    }
  }

  // Event Listeners for 3-Way Comparative Calculator
  if (range3Way) {
    range3Way.addEventListener('input', (e) => calculateAll(e.target.value, 'range3way'));
  }
  if (input3Way) {
    input3Way.addEventListener('input', (e) => calculateAll(e.target.value, 'input3way'));
  }

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = parseInt(btn.getAttribute('data-val'));
      if (val) calculateAll(val, 'preset');
    });
  });

  // 4. Instant Solar Quotation Form Handler & Live Google Sheets Lead Dispatcher
  const bookingForm = document.getElementById('sfhSolarBookingForm');
  if (bookingForm) {
    const fullNameInput = document.getElementById('sfh-fullname');
    const phoneInput = document.getElementById('sfh-phone');
    const cityInput = document.getElementById('sfh-city');
    const billSelect = document.getElementById('sfh-bill-amount');
    const propTypeSelect = document.getElementById('sfh-property-type');
    const systemTypeSelect = document.getElementById('sfh-system-type');
    const addressInput = document.getElementById('sfh-address');
    const submitBtn = document.getElementById('sfh-submit-btn');

    // Auto-clear error state on user input
    [fullNameInput, phoneInput, cityInput, billSelect, propTypeSelect, systemTypeSelect, addressInput].forEach(field => {
      if (!field) return;
      field.addEventListener('input', () => {
        const group = field.closest('.form-group');
        if (group) group.classList.remove('has-error');
        field.classList.remove('error');
      });
      field.addEventListener('change', () => {
        const group = field.closest('.form-group');
        if (group) group.classList.remove('has-error');
        field.classList.remove('error');
      });
    });

    // When user changes bill dropdown in quote form, update live sizing
    if (billSelect) {
      billSelect.addEventListener('change', (e) => {
        const selVal = parseInt(e.target.value, 10);
        if (selVal) {
          calculateAll(selVal, 'quoteForm');
        }
      });
    }

    bookingForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      let isValid = true;
      let firstErrorField = null;

      function setError(inputEl, condition) {
        const group = inputEl ? inputEl.closest('.form-group') : null;
        if (condition) {
          if (group) group.classList.add('has-error');
          if (inputEl) inputEl.classList.add('error');
          isValid = false;
          if (!firstErrorField && inputEl) firstErrorField = inputEl;
        } else {
          if (group) group.classList.remove('has-error');
          if (inputEl) inputEl.classList.remove('error');
        }
      }

      // 1. Full Name Validation (>= 2 chars)
      const nameVal = fullNameInput ? fullNameInput.value.trim() : '';
      setError(fullNameInput, nameVal.length < 2);

      // 2. Phone Validation (10 digits starting with 6-9)
      const phoneVal = phoneInput ? phoneInput.value.trim() : '';
      const phoneValid = /^[6-9]\d{9}$/.test(phoneVal.replace(/\D/g, ''));
      setError(phoneInput, !phoneValid);

      // 3. City Validation (>= 2 chars)
      const cityVal = cityInput ? cityInput.value.trim() : '';
      setError(cityInput, cityVal.length < 2);

      // 4. Monthly Bill Validation
      const billVal = billSelect ? billSelect.value : '';
      setError(billSelect, !billVal);

      // Property & System Type & Address
      const propTypeVal = propTypeSelect ? propTypeSelect.value : 'Independent Bungalow / Villa';
      const systemTypeVal = systemTypeSelect ? systemTypeSelect.value : 'On-Grid System with Net-Metering';
      const addressVal = addressInput ? addressInput.value.trim() : '';

      if (!isValid) {
        if (firstErrorField) {
          firstErrorField.focus();
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Show submitting state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>⏳ Generating Quotation & Syncing to Google Sheets...</span>';
      }

      // Sizing & Commercial calculations snapshot
      const currentCalc = window.sfhCurrentCalculation || {};
      const numBill = parseInt(billVal, 10) || 3500;
      const reqKwStr = currentCalc.requiredKw || `${+((numBill / (30 * 7.80 * 4)) * 1.08).toFixed(2)} kW`;
      const recKwStr = currentCalc.recommendedKw || '4.20 kW (7 Panels)';
      const genStr = currentCalc.monthlyGenUnits ? `${currentCalc.monthlyGenUnits} kWh/mo` : '525 kWh/mo';
      const grossStr = currentCalc.grossCost ? `₹${currentCalc.grossCost.toLocaleString('en-IN')}` : '₹2,46,190';
      const subStr = currentCalc.subsidy ? `₹${currentCalc.subsidy.toLocaleString('en-IN')}` : '₹78,000';
      const netStr = currentCalc.netInvestment ? `₹${currentCalc.netInvestment.toLocaleString('en-IN')}` : '₹1,68,190';
      const billLabel = billSelect && billSelect.options[billSelect.selectedIndex] ? billSelect.options[billSelect.selectedIndex].text : `₹${billVal} / month`;

      // 1. Submit lead directly to Google Sheets & Local CRM
      let leadSubmission = null;
      if (window.GoogleSheetsLeadManager) {
        leadSubmission = await window.GoogleSheetsLeadManager.submitLead({
          fullName: nameVal,
          mobileNumber: phoneVal,
          city: cityVal,
          monthlyBill: `₹${numBill.toLocaleString('en-IN')}`,
          requiredKw: reqKwStr,
          recommendedKw: recKwStr,
          monthlyGen: genStr,
          grossCost: grossStr,
          subsidy: subStr,
          netCost: netStr,
          customerType: propTypeVal,
          systemType: systemTypeVal,
          message: addressVal || 'Requested via Solar For Homes Page',
          sourcePage: 'Solar For Homes (Quotation Form)'
        });
      }

      const refNumber = leadSubmission && leadSubmission.refId ? leadSubmission.refId : `VL-HOME-${Math.floor(100000 + Math.random() * 900000)}`;

      // Construct instant WhatsApp pre-filled enquiry string
      const waMessage = `Hello VOLTS LEGACY Solar,%0A%0AI have requested a Free Solar Quotation on your website with Reference *%23${refNumber}*.%0A%0A👤 *Name:* ${encodeURIComponent(nameVal)}%0A📱 *Mobile:* +91 ${phoneVal}%0A📍 *Location:* ${encodeURIComponent(cityVal)}%0A⚡ *Monthly Bill:* ₹${numBill.toLocaleString('en-IN')}%0A☀️ *Recommended Plant:* ${encodeURIComponent(recKwStr)}%0A💰 *Govt DBT Subsidy:* ${encodeURIComponent(subStr)}%0A🏠 *Property:* ${encodeURIComponent(propTypeVal)}%0A%0APlease connect with me for 3D layout & final proposal.`;

      const modalHtml = `
        <div style="text-align: center; padding: 1rem 0.5rem;">
          <div style="width: 72px; height: 72px; border-radius: 50%; background: #dcfce7; color: #16a34a; font-size: 2.35rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; box-shadow: 0 6px 18px rgba(22,163,74,0.25);">
            ✓
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.55rem; font-weight: 800; color: #071530; margin-bottom: 0.4rem;">
            Quotation Generated for ${nameVal}!
          </h3>
          <p style="color: #64748b; font-size: 0.94rem; margin-bottom: 1.4rem; line-height: 1.5;">
            Your customized rooftop solar assessment & PM Surya Ghar DBT subsidy quotation has been prepared and synced to our system.
          </p>

          <!-- Quote Summary Card -->
          <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-align: left; margin-bottom: 1.4rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px dashed #cbd5e1;">
              <span style="color: #64748b; font-size: 0.88rem; font-weight: 600;">Quotation Reference:</span>
              <strong style="color: #2563eb; font-size: 1.05rem; font-family: monospace;">#${refNumber}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.88rem;">
              <span style="color: #64748b;">Customer Name & Contact:</span>
              <strong style="color: #0f172a;">${nameVal} (+91 ${phoneVal})</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.88rem;">
              <span style="color: #64748b;">City / Area:</span>
              <strong style="color: #0f172a;">${cityVal}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.88rem;">
              <span style="color: #64748b;">Recommended Solar System:</span>
              <strong style="color: #0284c7;">${recKwStr}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.88rem;">
              <span style="color: #64748b;">PM Surya Ghar DBT Subsidy:</span>
              <strong style="color: #16a34a;">${subStr} Direct Credit</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.88rem; padding-top: 0.5rem; border-top: 1px solid #e2e8f0;">
              <span style="color: #64748b; font-weight: 700;">Estimated Net Investment:</span>
              <strong style="color: #071530; font-size: 1.05rem; font-weight: 800;">${netStr}</strong>
            </div>
          </div>

          <!-- Google Sheet Real-time Status Badge -->
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 0.85rem 1rem; text-align: left; margin-bottom: 1.4rem; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span style="font-size: 1.1rem;">📊</span>
              <div>
                <div style="font-size: 0.85rem; font-weight: 700; color: #15803d;">Enquiry Recorded & Synced</div>
                <div style="font-size: 0.78rem; color: #166534;">Stored in local CRM and transmitted to Google Sheets</div>
              </div>
            </div>
            <button class="btn btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.6rem; background: #ffffff; border: 1px solid #86efac; color: #166534;" onclick="window.GoogleSheetsLeadManager.downloadCsv()">
              📥 Export CSV
            </button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <a href="https://wa.me/919998765059?text=${waMessage}" target="_blank" rel="noopener noreferrer" class="btn btn-solar btn-lg" style="width: 100%; justify-content: center; font-weight: 800;">
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

      // Reset form
      bookingForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '⚡ GET FREE SOLAR QUOTATION NOW →';
      }
    });
  }

  // Initial Calculation Run
  calculateAll(3500, 'init');
  updateMiniRoi();
};

// Interactive Logic for Solar for Housing Societies Page
window.initSolarForHousingSocietiesPage = function() {
  // 1. FAQ Accordion Handling (12 Items)
  const faqContainer = document.getElementById('sfhs-faq-list') || document.getElementById('sfhs-faq');
  if (faqContainer) {
    const faqItems = faqContainer.querySelectorAll('.sfhs-faq-item');
    faqItems.forEach(item => {
      const btn = item.querySelector('.sfhs-faq-question');
      if (!btn) return;

      btn.onclick = () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => {
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

  // 3. Society Solar Calculator Elements
  const sliderHouses = document.getElementById('socSliderHouses');
  const sliderBill = document.getElementById('socSliderBill');
  const discomSelect = document.getElementById('socDiscomSelect');
  const tariffInput = document.getElementById('socTariffInput');
  const roofInput = document.getElementById('socRoofInput');
  const btnModeAuto = document.getElementById('btnModeAuto');
  const btnModeCustom = document.getElementById('btnModeCustom');
  const customKwWrap = document.getElementById('customKwWrap');
  const customKwInput = document.getElementById('socCustomKwInput');

  // Displays
  const housesDisplay = document.getElementById('socHousesDisplay');
  const billDisplay = document.getElementById('socBillDisplay');
  const roofDisplay = document.getElementById('socRoofDisplay');

  // 8 Live Metric Outputs
  const resKw = document.getElementById('socResKw');
  const resMonthlyGen = document.getElementById('socResMonthlyGen');
  const resAnnualGen = document.getElementById('socResAnnualGen');
  const resGridOffset = document.getElementById('socResGridOffset');
  const resGrossCost = document.getElementById('socResGrossCost');
  const resCfa = document.getElementById('socResCfa');
  const resNetCost = document.getElementById('socResNetCost');
  const resAnnualSavings = document.getElementById('socResAnnualSavings');
  const resPayback = document.getElementById('socResPayback');

  // 3-Way Scenario Elements
  const normalMonthly = document.getElementById('soc3WayNormalMonthly');
  const normalAnnual = document.getElementById('soc3WayNormalAnnual');
  const normal30Yr = document.getElementById('soc3WayNormal30Yr');

  const capexNet = document.getElementById('soc3WayCapexNet');
  const capexCfaSub = document.getElementById('soc3WayCapexCfaSub');
  const capexPayback = document.getElementById('soc3WayCapexPayback');
  const capex30Yr = document.getElementById('soc3WayCapex30Yr');

  const emiMonthly = document.getElementById('soc3WayEmiMonthly');
  const emiBreakdown = document.getElementById('soc3WayEmiBreakdown');
  const emiPayback = document.getElementById('soc3WayEmiPayback');
  const emi30Yr = document.getElementById('soc3WayEmi30Yr');

  // Milestone Table & Environmental Counters
  const milestonesBody = document.getElementById('socMilestonesBody');
  const envMwh = document.getElementById('socResEnvMwh');
  const envCo2 = document.getElementById('socResEnvCo2');
  const envTrees = document.getElementById('socResEnvTrees');

  let currentMode = 'auto';

  // DISCOM Tariff Defaults
  const discomTariffs = {
    'Torrent Power': 8.50,
    'DGVCL': 8.20,
    'MGVCL': 8.30,
    'PGVCL': 8.40,
    'UGVCL': 8.30,
    'Other': 8.50
  };

  function updateHousingCalculations() {
    const numHouses = parseInt(sliderHouses ? sliderHouses.value : 100, 10) || 100;
    const bill = parseFloat(sliderBill ? sliderBill.value : 50000) || 50000;
    const tariff = parseFloat(tariffInput ? tariffInput.value : 8.50) || 8.50;
    const roofArea = parseFloat(roofInput ? roofInput.value : 5000) || 5000;

    // Update Input Badges
    if (housesDisplay) housesDisplay.textContent = `${numHouses} Flats`;
    if (billDisplay) billDisplay.textContent = `₹${bill.toLocaleString('en-IN')} / mo`;
    if (roofDisplay) roofDisplay.textContent = `${roofArea.toLocaleString('en-IN')} sq.ft`;

    // Monthly Units Calculation
    const monthlyUnits = Math.round(bill / tariff);

    // Sizing Sizing Logic:
    // 1. Sizing by bill offset: 1 kWp produces ~120 kWh/month in Gujarat irradiance
    const kwByBill = Math.round(monthlyUnits / 120);
    // 2. Sizing limited by usable terrace area: ~80 sq.ft per kWp
    const maxKwByRoof = Math.floor(roofArea / 80);

    let kw = 50;
    if (currentMode === 'auto') {
      kw = Math.max(5, Math.min(500, Math.min(kwByBill, maxKwByRoof)));
    } else {
      kw = Math.max(5, Math.min(500, parseFloat(customKwInput ? customKwInput.value : 50) || 50));
    }

    // Annual & Monthly Generation (1,440 kWh/kWp/year)
    const specificYield = 1440;
    const annualGen = Math.round(kw * specificYield);
    const monthlyGen = Math.round(annualGen / 12);
    const gridOffsetPercent = Math.min(100, Math.round((monthlyGen / Math.max(1, monthlyUnits)) * 100));

    // Turnkey Society EPC Benchmark Cost (Scale of 25-500 kWp: ~₹55,000/kWp turnkey with 600W TopCon & structural mounts)
    const grossCost = Math.round(kw * 55000);

    // PM Surya Ghar GHS/RWA CFA Calculation Engine:
    // Household Limit = Flats * 3 kWp
    // Eligible kWp = Min(Proposed kWp, Household Limit, 500 kWp)
    // CFA = Eligible kWp * ₹18,000/kWp
    const householdLimit = numHouses * 3;
    const cfaEligibleKw = Math.min(kw, householdLimit, 500);
    const cfaAmount = cfaEligibleKw * 18000;

    // Net Society Investment
    const netInvestment = Math.max(0, grossCost - cfaAmount);

    // Energy Savings Calculations
    const monthlySolarValue = Math.min(bill, Math.round(monthlyGen * tariff));
    const residualGridBill = Math.max(Math.round(bill * 0.12), Math.round(bill - monthlySolarValue));
    const monthlySavings = bill - residualGridBill;
    const annualSavings = monthlySavings * 12;

    // Payback in Years (Net Investment / Annual Savings)
    const capexPaybackYears = (netInvestment / Math.max(1, annualSavings)).toFixed(1);

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
    const emiPaybackYears = ((totalLoanPaid * 1.02) / Math.max(1, annualSavings)).toFixed(1);

    // 30-Year Compounding Calculations (4% annual grid tariff escalation)
    const annualEscalation = 0.04;
    const factor30Yr = (Math.pow(1 + annualEscalation, 30) - 1) / annualEscalation; // 56.084937
    const normal30YrTotal = Math.round((bill * 12) * factor30Yr);
    const residual30YrTotal = Math.round((residualGridBill * 12) * factor30Yr);

    const cash30YrNetWealth = normal30YrTotal - (netInvestment + residual30YrTotal);
    const emi30YrNetWealth = normal30YrTotal - (totalLoanPaid + residual30YrTotal);

    // Render 8 Live Metric Outputs
    if (resKw) resKw.textContent = `${kw} kWp`;
    if (resMonthlyGen) resMonthlyGen.textContent = `~${monthlyGen.toLocaleString('en-IN')} kWh`;
    if (resAnnualGen) resAnnualGen.textContent = `~${annualGen.toLocaleString('en-IN')} kWh`;
    if (resGridOffset) resGridOffset.textContent = `~${gridOffsetPercent}%`;
    if (resGrossCost) resGrossCost.textContent = formatCurr(grossCost);
    if (resCfa) resCfa.textContent = formatCurr(cfaAmount);
    if (resNetCost) resNetCost.textContent = formatCurr(netInvestment);
    if (resAnnualSavings) resAnnualSavings.textContent = formatCurr(annualSavings);
    if (resPayback) resPayback.textContent = `~${capexPaybackYears} YEARS`;

    // Render 3-Way Comparative Cards
    if (normalMonthly) normalMonthly.innerHTML = `${formatCurr(bill)} <span class="sfh-val-unit">/ mo</span>`;
    if (normalAnnual) normalAnnual.textContent = `${formatCurr(bill * 12)} / year (+4% annual tariff hike)`;
    if (normal30Yr) normal30Yr.textContent = `-${formatLakhsCr(normal30YrTotal)}`;

    if (capexNet) capexNet.textContent = formatCurr(netInvestment);
    if (capexCfaSub) capexCfaSub.textContent = `After ${formatCurr(cfaAmount)} MNRE CFA`;
    if (capexPayback) capexPayback.textContent = `${capexPaybackYears} Years`;
    if (capex30Yr) capex30Yr.textContent = `+${formatLakhsCr(cash30YrNetWealth)}`;

    if (emiMonthly) emiMonthly.innerHTML = `${formatCurr(emiTotalMonthly)} <span class="sfh-val-unit">/ mo</span>`;
    if (emiBreakdown) emiBreakdown.textContent = `${formatCurr(emi)} (EMI) + ${formatCurr(residualGridBill)} (Grid Fixed)`;
    if (emiPayback) emiPayback.textContent = `${emiPaybackYears} Years`;
    if (emi30Yr) emi30Yr.textContent = `+${formatLakhsCr(emi30YrNetWealth)}`;

    // Render 30-Year Milestones Table
    if (milestonesBody) {
      const pbCashNum = parseFloat(capexPaybackYears);
      const pbEmiNum = parseFloat(emiPaybackYears);

      const milestones = [
        {
          label: 'Year 1',
          normal: -(bill * 12),
          capex: annualSavings - netInvestment,
          emi: (bill * 12) - ((emi * 12) + (residualGridBill * 12)),
          isEmiActive: true
        },
        {
          label: `Year ${capexPaybackYears} (CAPEX Payback)`,
          normal: -Math.round((bill * 12) * ((Math.pow(1 + annualEscalation, pbCashNum) - 1) / Math.log(1 + annualEscalation))),
          capex: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, pbCashNum) - 1) / Math.log(1 + annualEscalation))) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, pbCashNum) - 1) / Math.log(1 + annualEscalation))))),
          emi: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, pbCashNum) - 1) / Math.log(1 + annualEscalation))) - ((emi * 12 * Math.min(5, pbCashNum)) + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, pbCashNum) - 1) / Math.log(1 + annualEscalation))))),
          isEmiActive: true
        },
        {
          label: 'Year 5 (Loan Repaid)',
          normal: -Math.round((bill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)),
          capex: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)))),
          emi: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)) - (totalLoanPaid + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 5) - 1) / annualEscalation)))),
          isEmiActive: false
        },
        {
          label: 'Year 10',
          normal: -Math.round((bill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)),
          capex: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)))),
          emi: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)) - (totalLoanPaid + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 10) - 1) / annualEscalation)))),
          isEmiActive: false
        },
        {
          label: 'Year 20',
          normal: -Math.round((bill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)),
          capex: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)) - (netInvestment + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)))),
          emi: Math.round(((bill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)) - (totalLoanPaid + ((residualGridBill * 12) * ((Math.pow(1 + annualEscalation, 20) - 1) / annualEscalation)))),
          isEmiActive: false
        },
        {
          label: 'Year 30 (Lifetime)',
          normal: -normal30YrTotal,
          capex: cash30YrNetWealth,
          emi: emi30YrNetWealth,
          isEmiActive: false
        }
      ];

      milestonesBody.innerHTML = milestones.map(m => {
        const normalCol = `<span style="color:#dc2626; font-weight:700;">-${formatLakhsCr(Math.abs(m.normal))} Lost Outflow</span>`;
        const capexCol = m.capex >= 0
          ? `<strong style="color:#16a34a;">+${formatLakhsCr(m.capex)} Net Wealth</strong>`
          : `<span style="color:#d97706; font-weight:600;">-${formatLakhsCr(Math.abs(m.capex))} (Recovery)</span>`;
        const emiCol = m.isEmiActive
          ? `<strong style="color:#2563eb;">+${formatLakhsCr(m.emi)} (Loan Active)</strong>`
          : `<strong style="color:#16a34a;">+${formatLakhsCr(m.emi)} Net Wealth</strong>`;

        return `
          <tr>
            <td><strong style="color:#0f172a;">${m.label}</strong></td>
            <td>${normalCol}</td>
            <td>${capexCol}</td>
            <td>${emiCol}</td>
          </tr>
        `;
      }).join('');
    }

    // Environmental Counters
    if (envMwh) envMwh.textContent = `~${Math.round(annualGen / 1000)} MWh`;
    if (envCo2) envCo2.textContent = `~${(annualGen * 0.00082).toFixed(1)} Tonnes`;
    if (envTrees) envTrees.textContent = `~${Math.round(annualGen * 0.034).toLocaleString('en-IN')} Trees`;

    // Save active state for form submission & CRM
    window.sfhsActiveCalculation = {
      flats: numHouses,
      bill: bill,
      tariff: tariff,
      discom: discomSelect ? discomSelect.value : 'Torrent Power',
      roofArea: roofArea,
      systemKw: `${kw} kWp`,
      annualGen: `${annualGen.toLocaleString('en-IN')} kWh`,
      grossCost: grossCost,
      cfaAmount: cfaAmount,
      netInvestment: netInvestment,
      annualSavings: annualSavings,
      paybackYears: capexPaybackYears
    };
  }

  // Event Listeners for Calculator
  if (sliderHouses) sliderHouses.addEventListener('input', updateHousingCalculations);
  if (sliderBill) sliderBill.addEventListener('input', updateHousingCalculations);
  if (tariffInput) tariffInput.addEventListener('input', updateHousingCalculations);
  if (roofInput) roofInput.addEventListener('input', updateHousingCalculations);
  if (customKwInput) customKwInput.addEventListener('input', updateHousingCalculations);

  if (discomSelect) {
    discomSelect.addEventListener('change', () => {
      const selected = discomSelect.value;
      if (discomTariffs[selected] && tariffInput) {
        tariffInput.value = discomTariffs[selected].toFixed(2);
      }
      updateHousingCalculations();
    });
  }

  if (btnModeAuto && btnModeCustom) {
    btnModeAuto.addEventListener('click', () => {
      currentMode = 'auto';
      btnModeAuto.classList.add('active');
      btnModeCustom.classList.remove('active');
      if (customKwWrap) customKwWrap.style.display = 'none';
      updateHousingCalculations();
    });

    btnModeCustom.addEventListener('click', () => {
      currentMode = 'custom';
      btnModeCustom.classList.add('active');
      btnModeAuto.classList.remove('active');
      if (customKwWrap) customKwWrap.style.display = 'block';
      updateHousingCalculations();
    });
  }

  // 4. EV Mini Calculator Sync
  const evCountInput = document.getElementById('evChargersCount');
  const evKwhInput = document.getElementById('evDailyKwh');
  const evTotalDisplay = document.getElementById('evResTotalKwh');

  function updateEvCalc() {
    if (!evCountInput || !evKwhInput || !evTotalDisplay) return;
    const count = parseInt(evCountInput.value, 10) || 6;
    const dailyKwh = parseFloat(evKwhInput.value) || 15;
    const monthlyEvTotal = Math.round(count * dailyKwh * 30);
    const reqSolarKw = (monthlyEvTotal / 120).toFixed(1);
    evTotalDisplay.textContent = `~${monthlyEvTotal.toLocaleString('en-IN')} kWh / mo`;
    const parentNote = evTotalDisplay.nextElementSibling;
    if (parentNote) {
      parentNote.textContent = `Requires ~${reqSolarKw} kWp dedicated solar`;
    }
  }

  if (evCountInput) evCountInput.addEventListener('input', updateEvCalc);
  if (evKwhInput) evKwhInput.addEventListener('input', updateEvCalc);

  // 5. Lead Generation Form Submission Handling
  const societyForm = document.getElementById('societyBookingForm');
  if (societyForm) {
    societyForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        societyName: (societyForm.societyName ? societyForm.societyName.value : '').trim(),
        contactPerson: (societyForm.contactPerson ? societyForm.contactPerson.value : '').trim(),
        phone: (societyForm.phone ? societyForm.phone.value : '').trim(),
        email: (societyForm.email ? societyForm.email.value : '').trim(),
        city: (societyForm.city ? societyForm.city.value : '').trim(),
        flats: (societyForm.flats ? societyForm.flats.value : '').trim(),
        monthlyBill: (societyForm.monthlyBill ? societyForm.monthlyBill.value : '').trim(),
        discom: societyForm.discom ? societyForm.discom.value : 'Torrent Power',
        lifts: societyForm.lifts ? societyForm.lifts.value : '4',
        pumps: societyForm.pumps ? societyForm.pumps.value : '3',
        evChargers: societyForm.evChargers ? societyForm.evChargers.value : '2',
        procurementPref: societyForm.procurementPref ? societyForm.procurementPref.value : 'CAPEX',
        roofArea: (societyForm.roofArea ? societyForm.roofArea.value : '').trim(),
        message: (societyForm.message ? societyForm.message.value : '').trim()
      };

      let hasError = false;

      // Validate Society Name
      if (!formData.societyName || formData.societyName.length < 3) {
        document.getElementById('group-soc-name')?.classList.add('error');
        hasError = true;
      } else {
        document.getElementById('group-soc-name')?.classList.remove('error');
      }

      // Validate Contact Person
      if (!formData.contactPerson || formData.contactPerson.length < 2) {
        document.getElementById('group-soc-person')?.classList.add('error');
        hasError = true;
      } else {
        document.getElementById('group-soc-person')?.classList.remove('error');
      }

      // Validate Phone (10 digits starting with 6-9)
      const phoneClean = formData.phone.replace(/\D/g, '');
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phoneClean)) {
        document.getElementById('group-soc-phone')?.classList.add('error');
        hasError = true;
      } else {
        document.getElementById('group-soc-phone')?.classList.remove('error');
      }

      // Validate City
      if (!formData.city || formData.city.length < 2) {
        document.getElementById('group-soc-city')?.classList.add('error');
        hasError = true;
      } else {
        document.getElementById('group-soc-city')?.classList.remove('error');
      }

      // Validate Flats
      if (!formData.flats || isNaN(formData.flats) || parseInt(formData.flats, 10) < 5) {
        document.getElementById('group-soc-flats')?.classList.add('error');
        hasError = true;
      } else {
        document.getElementById('group-soc-flats')?.classList.remove('error');
      }

      // Validate Monthly Bill
      if (!formData.monthlyBill || isNaN(formData.monthlyBill) || parseFloat(formData.monthlyBill) < 1000) {
        document.getElementById('group-soc-bill')?.classList.add('error');
        hasError = true;
      } else {
        document.getElementById('group-soc-bill')?.classList.remove('error');
      }

      if (hasError) {
        const firstErr = societyForm.querySelector('.form-group.error input, .form-group.error select');
        if (firstErr) firstErr.focus();
        return;
      }

      const submitBtn = document.getElementById('socSubmitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ Submitting Society Enquiry...';
      }

      const activeCalc = window.sfhsActiveCalculation || {};
      const refNumber = 'VLE-SOC-' + Math.floor(100000 + Math.random() * 900000);

      // Submit lead to Google Sheets CRM
      let leadSubmission = null;
      if (window.GoogleSheetsLeadManager) {
        leadSubmission = await window.GoogleSheetsLeadManager.submitLead({
          refId: refNumber,
          fullName: `${formData.contactPerson} (${formData.societyName})`,
          mobileNumber: formData.phone,
          city: formData.city,
          monthlyBill: `₹${Number(formData.monthlyBill).toLocaleString('en-IN')}`,
          requiredKw: activeCalc.systemKw || '50 kWp',
          recommendedKw: `${activeCalc.systemKw || '50 kWp'} (GHS Solar)`,
          monthlyGen: activeCalc.annualGen ? `~${activeCalc.annualGen}/yr` : '~72,000 kWh/yr',
          grossCost: activeCalc.grossCost ? `₹${activeCalc.grossCost.toLocaleString('en-IN')}` : '₹27,50,000',
          subsidy: activeCalc.cfaAmount ? `₹${activeCalc.cfaAmount.toLocaleString('en-IN')} (GHS CFA)` : '₹9,00,000 CFA',
          netCost: activeCalc.netInvestment ? `₹${activeCalc.netInvestment.toLocaleString('en-IN')}` : '₹18,50,000',
          customerType: 'Housing Society / RWA',
          systemType: `GHS Common Solar (${formData.procurementPref})`,
          message: `Flats: ${formData.flats}, DISCOM: ${formData.discom}, Lifts: ${formData.lifts}, Pumps: ${formData.pumps}, EV: ${formData.evChargers}. Notes: ${formData.message || formData.email || 'None'}`,
          sourcePage: 'Solar for Housing Societies (/solar-for-housing-societies)'
        });
      }

      const assignedRef = leadSubmission && leadSubmission.refId ? leadSubmission.refId : refNumber;
      const waMsg = encodeURIComponent(`Hello VOLTS LEGACY Energy Solutions, I have submitted a Housing Society Solar Feasibility Enquiry (Ref #${assignedRef}). Society: ${formData.societyName}, Contact: ${formData.contactPerson} (+91 ${formData.phone}), City: ${formData.city}, Flats: ${formData.flats}, Common Bill: ₹${Number(formData.monthlyBill).toLocaleString('en-IN')}/mo, Est. Solar: ${activeCalc.systemKw || '50 kWp'}. Please arrange a Committee Proposal.`);

      const modalHtml = `
        <div style="text-align: center; padding: 1rem 0;">
          <div style="width: 68px; height: 68px; border-radius: 50%; background: #dcfce7; color: #16a34a; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; font-size: 2.2rem; box-shadow: 0 4px 14px rgba(22,163,74,0.25);">
            ✓
          </div>
          <h3 style="font-size: 1.6rem; color: #071530; margin-bottom: 0.5rem; font-family: var(--font-heading);">Society Solar Enquiry Received!</h3>
          <p style="color: #475569; font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.5;">
            Thank you, <strong>${formData.contactPerson}</strong>. Your enquiry for <strong>${formData.societyName}</strong> has been registered. Our senior society solar engineer will connect on <strong>+91 ${formData.phone}</strong> to prepare your custom Committee Proposal.
          </p>

          <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-align: left; margin-bottom: 1.5rem; font-size: 0.9rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; padding-bottom: 0.5rem; border-bottom: 1px dashed #cbd5e1;">
              <span style="color: #64748b;">Enquiry Reference:</span>
              <strong style="color: #2563eb; font-family: monospace; font-size: 1.05rem;">#${assignedRef}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">Housing Society:</span>
              <strong>${formData.societyName} (${formData.flats} Flats)</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">Location / DISCOM:</span>
              <strong>${formData.city} • ${formData.discom}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">Recommended Solar:</span>
              <strong style="color: #0284c7;">${activeCalc.systemKw || '50 kWp'}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.45rem;">
              <span style="color: #64748b;">PM Surya Ghar GHS CFA:</span>
              <strong style="color: #16a34a;">${activeCalc.cfaAmount ? formatCurr(activeCalc.cfaAmount) : '₹9,00,000'} Direct</strong>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: #64748b;">Monthly Common Bill:</span>
              <strong style="color: #16a34a;">₹${Number(formData.monthlyBill).toLocaleString('en-IN')}</strong>
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

      societyForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '⚡ GET MY FREE SOCIETY SOLAR ASSESSMENT →';
      }
    });
  }

  // Initial Calculation Run
  updateHousingCalculations();
  updateEvCalc();

  // Scroll animations trigger
  if (window.initScrollAnimations) {
    window.initScrollAnimations();
  }
};

// Filter blogs by category
window.filterBlogs = function(cat, btn) {
  document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const cards = document.querySelectorAll('#blogsPageGrid .blog-card');
  cards.forEach(card => {
    if (cat === 'all' || card.getAttribute('data-category') === cat) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

// View blog article modal details
window.readBlog = function(blogId) {
  const blog = BLOGS_DATA.find(b => b.id === blogId);
  if (!blog || !window.appModal) return;

  const content = `
    <div>
      <div style="width:100%; height:230px; border-radius:12px; overflow:hidden; margin-bottom:1.25rem; position:relative;">
        <img src="${blog.image}" alt="${blog.title}" style="width:100%; height:100%; object-fit:cover; display:block;">
        <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(7,21,48,0.1) 0%, rgba(7,21,48,0.55) 100%);"></div>
      </div>
      <div style="margin-bottom: 1rem;">
        <span class="section-tag section-tag-gold" style="margin-bottom:0.5rem;">${blog.category}</span>
        <h3 style="font-size: 1.45rem; color: #071530; margin-bottom: 0.5rem; line-height:1.35; font-weight:800;">${blog.title}</h3>
        <div style="color:#64748b; font-size:0.85rem; font-weight:600;">Published ${blog.date} • ${blog.readTime}</div>
      </div>
      <div style="border-top:1px solid #e2e8f0; padding-top:1.25rem; color:#334155; line-height:1.75; font-size:0.95rem; margin-bottom:1.75rem; max-height:420px; overflow-y:auto; padding-right:0.5rem;">
        <p style="margin-bottom:1.25rem; font-weight:600; color:#0f172a; font-size:1.02rem; background:#f8fafc; padding:0.85rem 1rem; border-left:4px solid #2563eb; border-radius:4px;">${blog.summary}</p>
        <div style="white-space:pre-line; color:#334155;">${blog.content}</div>
      </div>
      <div style="display:flex; gap:0.75rem;">
        <a href="/quotation" class="btn btn-primary" style="flex:1; text-align:center; text-decoration:none;" onclick="window.appModal.close()">Get Solar Quotation →</a>
        <button class="btn btn-secondary" style="flex:0 0 auto;" onclick="window.appModal.close()">Close</button>
      </div>
    </div>
  `;

  window.appModal.open(content);
};

// Scroll animation trigger
window.initScrollAnimations = function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));
};

// Interactive Logic for Design & Technical Consulting Page
window.initDesignConsultingPage = function() {
  // 1. Before/After Split-Screen Interactive Slider
  const baContainer = document.getElementById('dcBaContainer');
  const baAfterWrap = document.getElementById('dcBaAfterWrap');
  const baAfterImg = document.getElementById('dcBaAfterImg');
  const baHandle = document.getElementById('dcBaHandle');
  const stagePills = document.querySelectorAll('.dc-ba-stage-pill');

  if (baContainer && baAfterWrap && baHandle) {
    let isDragging = false;

    function syncImgWidth() {
      if (baAfterImg && baContainer) {
        baAfterImg.style.width = baContainer.offsetWidth + 'px';
      }
    }
    syncImgWidth();
    window.addEventListener('resize', syncImgWidth);

    function updateSlider(clientX) {
      const rect = baContainer.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      let percentage = (offsetX / rect.width) * 100;
      percentage = Math.max(2, Math.min(98, percentage));

      baAfterWrap.style.width = percentage + '%';
      baHandle.style.left = percentage + '%';

      // Update stage pills
      if (stagePills.length >= 3) {
        stagePills.forEach(p => p.classList.remove('active'));
        if (percentage < 35) {
          stagePills[0].classList.add('active');
        } else if (percentage < 65) {
          stagePills[0].classList.add('active');
          stagePills[1].classList.add('active');
        } else {
          stagePills[0].classList.add('active');
          stagePills[1].classList.add('active');
          stagePills[2].classList.add('active');
        }
      }
    }

    baContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Support
    baContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches && e.touches[0]) updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || !e.touches || !e.touches[0]) return;
      updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  // 2. Interactive 3D Solar Hotspots
  const hotspotPins = document.querySelectorAll('.dc-hotspot-pin');
  const hotspotTitle = document.getElementById('dcHotspotTitle');
  const hotspotDesc = document.getElementById('dcHotspotDesc');

  hotspotPins.forEach(pin => {
    function activatePin() {
      hotspotPins.forEach(p => p.classList.remove('active'));
      pin.classList.add('active');

      const title = pin.getAttribute('data-title');
      const desc = pin.getAttribute('data-desc');

      if (hotspotTitle && title) {
        hotspotTitle.style.opacity = '0';
        setTimeout(() => {
          hotspotTitle.textContent = title;
          hotspotTitle.style.opacity = '1';
        }, 120);
      }
      if (hotspotDesc && desc) {
        hotspotDesc.style.opacity = '0';
        setTimeout(() => {
          hotspotDesc.textContent = desc;
          hotspotDesc.style.opacity = '1';
        }, 120);
      }
    }

    pin.addEventListener('click', activatePin);
    pin.addEventListener('mouseenter', activatePin);
  });
};

// Structural Design Tabs Switcher & Zoom Handlers
window.switchDcStructural = function(type, btn) {
  const container = btn.closest('.dc-service-visual-wrap') || document;
  const img = document.getElementById('dcStructuralImg');
  const label = document.getElementById('dcStructuralLabel');
  const tabs = container.querySelectorAll('.dc-struct-tab');
  tabs.forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  if (!img) return;
  img.style.opacity = '0.3';
  img.style.transform = 'scale(0.98)';
  setTimeout(() => {
    if (type === 'groundmount') {
      img.src = 'assets/dc-structural-groundmount.jpg';
      img.alt = 'Split 3D Ground Mount solar structure and 2D CAD engineering foundation drawing';
      if (label) label.textContent = 'GROUND MOUNT: 3D STRUCTURE + 2D DRAWING';
    } else {
      img.src = 'assets/dc-structural-split.jpg';
      img.alt = 'Split 3D RCC solar mounting structure and CAD mechanical engineering drawing';
      if (label) label.textContent = 'RCC ROOF: 3D STRUCTURE + 2D DRAWING';
    }
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
  }, 150);
};

window.zoomDcStructural = function() {
  if (!window.appModal) return;
  const img = document.getElementById('dcStructuralImg');
  const currentSrc = (img && img.src) ? img.src : 'assets/dc-structural-groundmount.jpg';
  const isGroundMount = currentSrc.includes('groundmount');
  const title = isGroundMount 
    ? 'Ground Mount Solar Structure & Foundation 2D Engineering Drawing'
    : 'RCC Rooftop Solar Structure & Anchor Bolt 2D Engineering Drawing';
  const badge = isGroundMount ? 'GROUND MOUNT & FOUNDATION' : 'RCC ROOF & WIND LOAD';

  window.appModal.openModal(`
    <div style="padding:0.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
        <h3 style="margin:0; font-size:1.2rem; color:#0f172a; font-weight:800;">\${title}</h3>
        <span style="font-size:0.8rem; background:#0284c7; color:#fff; padding:0.25rem 0.6rem; border-radius:4px; font-weight:700;">\${badge}</span>
      </div>
      <img src="\${currentSrc}" style="width:100%; height:auto; border-radius:8px; display:block; box-shadow:0 10px 25px rgba(0,0,0,0.15);" alt="Structural Engineering Drawing">
    </div>
  `);
};

// --------------------------------------------------------------------------
// APPLICATION INITIALIZATION
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Modal System
  window.appModal = new ModalManager();

  // Initialize Navigation
  window.appNavigation = new Navigation();

  // Define All Routes
  const routes = {
    '/': renderHomeView,
    '/solar-for-homes': renderSolarForHomesView,
    '/solar-for-housing-societies': renderSolarForHousingSocietiesView,
    '/solar-for-commercial-institutions': typeof renderSolarForCommercialInstitutionsView === 'function' ? renderSolarForCommercialInstitutionsView : renderCommercialIndustrialView,
    '/solar-for-industrial-factories': typeof renderSolarForIndustrialFactoriesView === 'function' ? renderSolarForIndustrialFactoriesView : renderCommercialIndustrialView,
    '/solar-ground-mount': typeof renderSolarGroundMountView === 'function' ? renderSolarGroundMountView : renderGroundMountView,
    '/offerings': renderOfferingsView,
    '/offerings/homes': renderSolarForHomesView,
    '/offerings/housing-societies': renderSolarForHousingSocietiesView,
    '/offerings/commercial-industrial': typeof renderSolarForCommercialInstitutionsView === 'function' ? renderSolarForCommercialInstitutionsView : renderCommercialIndustrialView,
    '/offerings/ground-mount': typeof renderSolarGroundMountView === 'function' ? renderSolarGroundMountView : renderGroundMountView,
    '/solutions': renderSolutionsView,
    '/solutions/on-grid': renderOnGridView,
    '/offerings/on-grid': renderOnGridView,
    '/on-grid': renderOnGridView,
    '/solutions/off-grid': renderOffGridView,
    '/offerings/off-grid': renderOffGridView,
    '/off-grid': renderOffGridView,
    '/solutions/hybrid': renderHybridView,
    '/offerings/hybrid': renderHybridView,
    '/hybrid': renderHybridView,
    '/roi-capacity-finder': renderRoiCapacityFinderView,
    '/torrent-calculator': renderRoiCapacityFinderView,
    '/projects': renderProjectsView,
    '/projects/dhanjibhai-vaniya': () => renderProjectDetailSubpage('dhanjibhai-vaniya'),
    '/projects/santoshbhai': () => renderProjectDetailSubpage('santoshbhai'),
    '/projects/lagarbhai-ladumor': () => renderProjectDetailSubpage('lagarbhai-ladumor'),
    '/projects/nagjibhai-patel': () => renderProjectDetailSubpage('nagjibhai-patel'),
    '/projects/balbirsingh': () => renderProjectDetailSubpage('balbirsingh'),
    '/project/dhanjibhai-vaniya': () => renderProjectDetailSubpage('dhanjibhai-vaniya'),
    '/project/santoshbhai': () => renderProjectDetailSubpage('santoshbhai'),
    '/project/lagarbhai-ladumor': () => renderProjectDetailSubpage('lagarbhai-ladumor'),
    '/project/nagjibhai-patel': () => renderProjectDetailSubpage('nagjibhai-patel'),
    '/project/balbirsingh': () => renderProjectDetailSubpage('balbirsingh'),
    '/design-consulting': renderDesignConsultingView,
    '/blogs': renderBlogsView,
    '/quotation': renderQuotationView,
    '/contact': renderContactView,
    '/contact-us': renderContactView
  };

  // Expose subpage renderer globally for dynamic routing
  window.renderProjectDetailSubpage = renderProjectDetailSubpage;

  // Initialize Router
  window.appRouter = new AppRouter(routes);
});

