// Oskar Photography Portfolio Dataset
// Fine Art, Editorial & Documentary Photography by Oskar (Copenhagen & Worldwide)

export const ARTIST_INFO = {
  name: "Oskar",
  fullName: "Oskar Lindqvist",
  brand: "oskar photography",
  title: "Photographer & Visual Artist",
  location: "Copenhagen, Denmark",
  bioHeadline: "THOMAS OSKAR, A PHOTOGRAPHER FROM COPENHAGEN, IS CELEBRATED FOR CAPTURING MOVEMENT, ARCHITECTURAL FORM, AND TRANSIENT URBAN LIGHT.",
  bioParagraph: "CITIES HAVE SO MANY THINGS IN MOTION THAT HE’S TAKEN A PICTURE OF, SUCH AS METROS, ESCALATORS, PEDESTRIANS, SKATEBOARDERS AND TROLLEYS. OF COURSE, HE ALSO TAKES A LOT OF BICYCLE PICTURES, AS CYCLING IS ONE OF THE MAIN METHODS OF TRANSPORTATION IN COPENHAGEN. ON TOP OF THE THINGS ACTUALLY MOVING, OSKAR MAKES GREAT USE OF LINES IN THE SURROUNDINGS, THEREBY ADDING EVEN MORE DYNAMIC TO HIS PICTURES.",
  statementExtended: "Working across medium-format film and high-resolution digital cameras, Oskar's work balances deliberate tension with quiet Scandinavian restraint. His compositions explore how human scale exists within brutalist geometry and rapid metropolitan flux.",
  exhibitions: [
    { year: "2026", title: "Le Voyage & The Moving City", gallery: "Galleri Tom Christoffersen, Copenhagen", type: "Solo" },
    { year: "2025", title: "Nordic Monochromes", gallery: "Fotografiska Stockholm", type: "Group" },
    { year: "2025", title: "Shadows in Motion", gallery: "Rencontres d'Arles, France", type: "Featured" },
    { year: "2024", title: "Urban Geometry & Human Trace", gallery: "Københavns Museum", type: "Solo" },
    { year: "2023", title: "Altered Carbon: Still Life Studies", gallery: "Danish Architecture Center", type: "Group" },
  ],
  awards: [
    { year: "2025", honor: "Danish Fine Art Photography Laureate", organization: "Danish Arts Foundation" },
    { year: "2024", honor: "Sony World Photography Awards — Architecture Finalist", organization: "WPO" },
    { year: "2023", honor: "Editorial Book of the Year — 'Lines in Motion'", organization: "Nordic Photo Awards" }
  ],
  representation: {
    scandinavia: "Vanguard Artists Copenhagen (rep@vanguardcph.dk)",
    international: "Atelier Noire Paris & London (inquiries@ateliernoire.com)"
  }
};

// Spreads directly matching the reference layouts
export const SPREADS = {
  heroSpread: {
    title: "LE VOYAGE",
    subtitle: "SERIES 01 // SELECTED WORKS 2024–2026",
    images: [
      {
        id: "hero-01",
        number: "01",
        title: "Stone Monolith in Forest",
        caption: "MONOLITHIC STUDY NO. 4",
        year: "2025",
        // Moody brutalist sculpture / stone monolith in nature (Black & White)
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=85&w=1200",
        aspect: "portrait",
        exif: { camera: "Hasselblad 907X", lens: "XCD 45mm f/4 P", iso: "100", shutter: "1/125s", aperture: "f/5.6" }
      },
      {
        id: "hero-02",
        number: "—",
        title: "Lychee / Red Berries on Plate",
        caption: "OSKAR, ALTERED CARBON 2026",
        year: "2026",
        // Selective crimson still life plate (matching the circular plate with vibrant berries in reference)
        url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=85&w=900",
        aspect: "square",
        exif: { camera: "Leica M11-P", lens: "Summilux-M 50mm f/1.4", iso: "200", shutter: "1/60s", aperture: "f/2.8" }
      },
      {
        id: "hero-03",
        number: "02",
        title: "Reflective Light Vortex",
        caption: "FLUID MOTION STUDY II",
        year: "2025",
        // Textured fluid movement / glass reflection (matching the vertical glass/texture in reference)
        url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=85&w=900",
        aspect: "portrait-tall",
        exif: { camera: "Leica SL2", lens: "Apo-Summicron 35mm", iso: "400", shutter: "1/30s", aperture: "f/4.0" }
      }
    ]
  },
  statementSpread: {
    images: [
      {
        id: "stmt-01",
        number: "01",
        title: "Rainy Urban Fence & Vehicle Reflection",
        caption: "OSKAR, URBAN REFLECTION 2026",
        year: "2026",
        // Urban wire fence with rain / car mirror perspective (matching left image in ref bottom)
        url: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&q=85&w=1000",
        aspect: "landscape",
        exif: { camera: "Leica M11", lens: "Summicron-M 28mm f/2", iso: "800", shutter: "1/250s", aperture: "f/2.0" }
      },
      {
        id: "stmt-02",
        number: "02",
        title: "Diagonal Crosswalk & Striding Shadow",
        caption: "CROSSWALK GEOMETRY NO. 7",
        year: "2025",
        // Diagonal crosswalk stripes with dramatic shadow (matching middle image in ref bottom)
        url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=85&w=900",
        aspect: "portrait",
        exif: { camera: "Hasselblad 500C/M", lens: "Carl Zeiss Planar 80mm", iso: "400", shutter: "1/500s", aperture: "f/8.0" }
      },
      {
        id: "stmt-03",
        number: "03",
        title: "Skateboarder Silhouette with Long Shadow",
        caption: "VELOCITY & PAVEMENT SILHOUETTE",
        year: "2025",
        // Skater with elongated vertical shadow on sunlit pavement (matching right image in ref bottom)
        url: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&q=85&w=900",
        aspect: "portrait-tall",
        exif: { camera: "Leica M6", lens: "Elmarit-M 28mm", film: "Kodak Tri-X 400", iso: "400", shutter: "1/1000s", aperture: "f/5.6" }
      }
    ]
  }
};

// Full Monograph Projects
export const PROJECTS = [
  {
    id: "le-voyage",
    title: "Le Voyage",
    year: "2025–2026",
    subtitle: "A meditation on natural forms, geological stillness, and selective color interventions.",
    count: "14 Works",
    leadImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=85&w=1200",
    images: [
      {
        id: "lv-1",
        title: "Monolithic Resonances",
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=85&w=1200",
        aspect: "portrait",
        caption: "Sculptural granite against pine canopies",
        exif: "Hasselblad 907X • 45mm • f/5.6 • 1/125s"
      },
      {
        id: "lv-2",
        title: "Altered Carbon",
        url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=85&w=900",
        aspect: "square",
        caption: "Organic crimson berries on porcelain plate",
        exif: "Leica M11-P • 50mm Summilux • f/2.8 • 1/60s"
      },
      {
        id: "lv-3",
        title: "Vortex & Glass",
        url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=85&w=900",
        aspect: "portrait",
        caption: "Distorted fluid reflections",
        exif: "Leica SL2 • 35mm Apo • f/4 • 1/30s"
      },
      {
        id: "lv-4",
        title: "Silent Horizon",
        url: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&q=85&w=1200",
        aspect: "landscape",
        caption: "Coastal fog and Nordic water",
        exif: "Leica M11 • 28mm Summicron • f/8 • 1/250s"
      }
    ]
  },
  {
    id: "urban-movement",
    title: "Urban Movement",
    year: "2024–2026",
    subtitle: "Copenhagen streets, velocity, cyclist silhouettes, and the rhythmic pulse of transit.",
    count: "22 Works",
    leadImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=85&w=1200",
    images: [
      {
        id: "um-1",
        title: "Crosswalk Diagonals",
        url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=85&w=1000",
        aspect: "portrait",
        caption: "Striped geometry and solitary stride",
        exif: "Hasselblad 500C/M • 80mm • f/8 • 1/500s"
      },
      {
        id: "um-2",
        title: "Skater's Shadow",
        url: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&q=85&w=1000",
        aspect: "portrait",
        caption: "Afternoon kinetic tension",
        exif: "Leica M6 • Tri-X 400 • 28mm • f/5.6"
      },
      {
        id: "um-3",
        title: "Copenhagen Cyclists at Dusk",
        url: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=85&w=1200",
        aspect: "landscape",
        caption: "Bicycle rush hour along Dronning Louises Bro",
        exif: "Leica M11 • 35mm • f/2.8 • 1/500s"
      },
      {
        id: "um-4",
        title: "Subway Platform Cadence",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=85&w=1200",
        aspect: "landscape",
        caption: "Metro escalator light and human velocity",
        exif: "Leica SL2 • 24-90mm • f/4 • 1/60s"
      }
    ]
  },
  {
    id: "nordic-geometry",
    title: "Nordic Brutalism",
    year: "2023–2025",
    subtitle: "Architectural intersections, concrete cantilevers, and stark Danish winter illumination.",
    count: "18 Works",
    leadImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=1200",
    images: [
      {
        id: "nb-1",
        title: "Concrete Cantilever",
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=1200",
        aspect: "landscape",
        caption: "Minimalist concrete intersection and cast shadow",
        exif: "Hasselblad 907X • 45mm • f/11 • 1/125s"
      },
      {
        id: "nb-2",
        title: "Spire & Void",
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=85&w=1000",
        aspect: "portrait",
        caption: "Glass and steel reflection in Ørestad",
        exif: "Leica M11 • 21mm Super-Elmar • f/8"
      },
      {
        id: "nb-3",
        title: "Curves in Shadow",
        url: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=85&w=1000",
        aspect: "portrait",
        caption: "Spiral architectural staircase",
        exif: "Leica M11 • 28mm • f/4 • 1/125s"
      }
    ]
  }
];

// Comprehensive Archive / Catalog (for art directors, curators, and collectors)
export const ARCHIVE_CATALOG = [
  {
    id: "ARC-001",
    index: "01",
    title: "Le Voyage: Stone Monolith",
    series: "Le Voyage",
    year: "2025",
    medium: "Silver Gelatin Print",
    dimensions: "120 × 90 cm",
    edition: "Edition of 5 + 2 AP",
    location: "Bornholm, Denmark",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=85&w=800",
    status: "Available"
  },
  {
    id: "ARC-002",
    index: "02",
    title: "Altered Carbon: Lychee Composition",
    series: "Still Life Studies",
    year: "2026",
    medium: "Archival Pigment Print",
    dimensions: "80 × 80 cm",
    edition: "Edition of 7 + 1 AP",
    location: "Copenhagen Studio",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=85&w=800",
    status: "Available"
  },
  {
    id: "ARC-003",
    index: "03",
    title: "Fluid Motion Study II",
    series: "Le Voyage",
    year: "2025",
    medium: "Silver Gelatin Print",
    dimensions: "100 × 75 cm",
    edition: "Edition of 3",
    location: "Aarhus, Denmark",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=85&w=800",
    status: "Reserved"
  },
  {
    id: "ARC-004",
    index: "04",
    title: "Urban Reflection & Car Mirror",
    series: "Urban Movement",
    year: "2026",
    medium: "Silver Gelatin Print",
    dimensions: "90 × 120 cm",
    edition: "Edition of 5",
    location: "Nørrebro, Copenhagen",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&q=85&w=800",
    status: "Available"
  },
  {
    id: "ARC-005",
    index: "05",
    title: "Crosswalk Diagonals No. 7",
    series: "Urban Movement",
    year: "2025",
    medium: "Silver Gelatin Print",
    dimensions: "110 × 80 cm",
    edition: "Edition of 5",
    location: "Vesterbro, Copenhagen",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=85&w=800",
    status: "Available"
  },
  {
    id: "ARC-006",
    index: "06",
    title: "Velocity & Skater's Shadow",
    series: "Urban Movement",
    year: "2025",
    medium: "Hand-printed Fiber Silver Gelatin",
    dimensions: "100 × 70 cm",
    edition: "Edition of 3 + 1 AP",
    location: "Copenhagen Harbour",
    image: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&q=85&w=800",
    status: "Private Collection"
  },
  {
    id: "ARC-007",
    index: "07",
    title: "Bicycle Cadence at Dusk",
    series: "Urban Movement",
    year: "2024",
    medium: "Archival Pigment Print",
    dimensions: "80 × 120 cm",
    edition: "Edition of 7",
    location: "Dronning Louises Bro",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=85&w=800",
    status: "Available"
  },
  {
    id: "ARC-008",
    index: "08",
    title: "Cantilever in Winter Frost",
    series: "Nordic Brutalism",
    year: "2024",
    medium: "Platinum Palladium Print",
    dimensions: "120 × 90 cm",
    edition: "Edition of 3",
    location: "Ørestad, Copenhagen",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=800",
    status: "Available"
  }
];
