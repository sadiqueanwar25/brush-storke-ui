export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  image: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  metrics: { label: string; value: string }[];
};

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
};

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const services: Service[] = [
  {
    slug: "restaurant-interior-design",
    title: "Restaurant Interior Design",
    shortTitle: "Restaurant Design",
    description:
      "Concept-driven restaurant interiors that balance guest flow, atmosphere, material richness, and memorable brand storytelling.",
    features: [
      "Guest journey planning",
      "Brand-aligned spatial design",
      "Material palette and lighting direction",
    ],
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "bar-and-nightclub-design",
    title: "Bar and Nightclub Design",
    shortTitle: "Bar & Nightclub",
    description:
      "High-impact hospitality spaces designed around mood, acoustics, social flow, and immersive experiences that encourage return visits.",
    features: [
      "Experience-led planning",
      "Lighting and ambience strategy",
      "Custom bar and lounge detailing",
    ],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cafe-and-lounge-interiors",
    title: "Cafe and Lounge Interiors",
    shortTitle: "Cafe & Lounge",
    description:
      "Warm, inviting cafe and lounge environments with layered textures, comfortable seating, and a clear sense of identity.",
    features: [
      "Mood-led concept development",
      "Furniture and zoning layout",
      "Comfort-focused finishing details",
    ],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "hotel-and-hospitality-interiors",
    title: "Hotel and Hospitality Interiors",
    shortTitle: "Hospitality Interiors",
    description:
      "Refined guest experiences shaped by tactile luxury, intuitive circulation, and elegant spatial storytelling across hospitality spaces.",
    features: [
      "Guest experience design",
      "Lobby and public area planning",
      "Luxury material and finish curation",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "commercial-space-planning",
    title: "Commercial Space Planning",
    shortTitle: "Commercial Planning",
    description:
      "Functional and efficient commercial layouts that improve workflow, brand expression, and everyday usability without sacrificing style.",
    features: [
      "Operational space planning",
      "Circulation and zoning strategy",
      "Business-ready workplace layouts",
    ],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "3d-visualization-and-rendering",
    title: "3D Visualization and Rendering",
    shortTitle: "3D Visualization",
    description:
      "Immersive design presentations that communicate ideas clearly, help clients visualize outcomes, and support project approval and execution.",
    features: [
      "Interior walkthroughs",
      "Material and lighting previews",
      "Client presentation visuals",
    ],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "custom-furniture-and-fabrication",
    title: "Custom Furniture and Fabrication",
    shortTitle: "Custom Furniture",
    description:
      "Bespoke pieces and fabricated elements tailored to the specific proportions, textures, and performance demands of each environment.",
    features: [
      "Custom joinery design",
      "Bespoke furniture concepts",
      "Fabrication coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "lighting-design",
    title: "Lighting Design",
    shortTitle: "Lighting Design",
    description:
      "Layered lighting schemes that shape mood, accent architectural features, and improve comfort and functionality across every setting.",
    features: [
      "Mood and task lighting plans",
      "Fixture selection and placement",
      "Energy-conscious lighting direction",
    ],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "renovation-and-interior-execution",
    title: "Renovation and Interior Execution",
    shortTitle: "Renovation & Execution",
    description:
      "Precise renovation and execution management that transforms existing spaces into refined, functional, and beautifully resolved environments.",
    features: [
      "On-site execution oversight",
      "Vendor coordination and scheduling",
      "Detail-driven finishing supervision",
    ],
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "complete-turnkey-projects",
    title: "Complete Turnkey Projects",
    shortTitle: "Turnkey Projects",
    description:
      "Fully managed project delivery from concept through finishing, ensuring a seamless experience and a comprehensive, high-standard result.",
    features: [
      "End-to-end project coordination",
      "Procurement and installation management",
      "Final styling and handover",
    ],
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
];

export const projectList: Project[] = [
  {
    slug: "cedar-courtyard",
    title: "The Cedar Courtyard",
    category: "Private Residence",
    summary:
      "A layered family home shaped around natural light, warm oak finishes, and a tactile palette of stone, linen, and bronze.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Scope", value: "Full Home" },
      { label: "Timeline", value: "8 Months" },
      { label: "Style", value: "Modern Organic" },
    ],
  },
  {
    slug: "harbor-house-studio",
    title: "Harbor House Studio",
    category: "Boutique Living",
    summary:
      "An airy creative residence with sculptural silhouettes, open-plan flow, and a refined mix of custom millwork and artful objects.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Scope", value: "Renovation" },
      { label: "Timeline", value: "6 Months" },
      { label: "Style", value: "Coastal Minimal" },
    ],
  },
  {
    slug: "amberline-office",
    title: "Amberline Office",
    category: "Workspace",
    summary:
      "A hospitality-inspired office concept built around warm materials, acoustic comfort, and a welcoming client experience.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Scope", value: "Workspace" },
      { label: "Timeline", value: "5 Months" },
      { label: "Style", value: "Warm Modern" },
    ],
  },
  {
    slug: "atelier-loft",
    title: "Atelier Loft",
    category: "Urban Residence",
    summary:
      "A compact loft transformed through built-ins, palette clarity, and considered layering to create a calm city sanctuary.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Scope", value: "Apartment" },
      { label: "Timeline", value: "4 Months" },
      { label: "Style", value: "Refined Minimal" },
    ],
  },
];

export const blogPosts: Insight[] = [
  {
    slug: "lived-in-minimalism",
    title: "Creating a lived-in minimalism that still feels elevated",
    excerpt:
      "A look at how natural textures, tonal layering, and intentional furniture placement can keep minimal interiors warm and personal.",
    category: "Design Notes",
    date: "October 2026",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "materials-that-age-well",
    title: "Materials that age beautifully in everyday interiors",
    excerpt:
      "Choosing finishes that improve with use can help create spaces that feel grounded, durable, and quietly luxurious over time.",
    category: "Materials",
    date: "September 2026",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "turnkey-simplified",
    title: "Why a turnkey approach brings clarity to complex renovations",
    excerpt:
      "The best projects feel calm because the coordination, procurement, and finishing details are handled as one cohesive process.",
    category: "Project Advice",
    date: "August 2026",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
];

export const processSteps = [
  "Discovery & brief",
  "Concept direction",
  "Design development",
  "Execution & styling",
];
