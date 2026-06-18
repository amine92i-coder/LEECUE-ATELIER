export type Category = "Key Cases" | "Phone Cases" | "Charms & Lanyards";

export interface Product {
  id: string;
  name: string;
  marque: string;
  category: Category;
  leather: string;
  image: string;
  note?: string;
  bespoke?: boolean;
}

export const products: Product[] = [
  {
    id: "ferrari-rosso",
    name: "Rosso Corsa",
    marque: "Ferrari",
    category: "Key Cases",
    leather: "Glazed Crocodile",
    image: "/products/ferrari-rosso-croc.jpg",
    note: "Enamel cloisonné crest, hand-burnished gold edges.",
  },
  {
    id: "maybach-himalayan",
    name: "Himalaya",
    marque: "Maybach",
    category: "Key Cases",
    leather: "Himalayan Crocodile",
    image: "/products/maybach-himalayan.jpg",
    note: "The rarest of skins, hand-painted to a marbled finish.",
  },
  {
    id: "rolls-royce-tiffany",
    name: "Spirit",
    marque: "Rolls-Royce",
    category: "Key Cases",
    leather: "Tiffany Crocodile",
    image: "/products/rolls-royce-tiffany-croc.jpg",
    note: "Sterling badge inlay on hand-dyed turquoise.",
  },
  {
    id: "lamborghini-fiona",
    name: "Giallo",
    marque: "Lamborghini",
    category: "Key Cases",
    leather: "Full-Grain Calf",
    image: "/products/lamborghini-fiona.jpg",
    note: "Engraved with the owner's name — ‘Fiona’.",
    bespoke: true,
  },
  {
    id: "audi-cognac",
    name: "Cognac",
    marque: "Audi",
    category: "Key Cases",
    leather: "Crocodile",
    image: "/products/audi-cognac-croc.jpg",
    note: "Tonal saddle-stitch with national-flag accents.",
  },
  {
    id: "mercedes-iridescent",
    name: "Aurora",
    marque: "Mercedes-Benz",
    category: "Key Cases",
    leather: "Iridescent Python",
    image: "/products/mercedes-iridescent-python.jpg",
    note: "Light-shifting python, mirror-debossed star.",
  },
  {
    id: "aston-racing-green",
    name: "Racing Green",
    marque: "Aston Martin",
    category: "Key Cases",
    leather: "Pebbled Calf",
    image: "/products/aston-martin-racing-green.jpg",
    note: "British racing green with contrast canary stitch.",
  },
  {
    id: "toyota-black-croc",
    name: "Nero",
    marque: "Toyota",
    category: "Key Cases",
    leather: "Matte Crocodile",
    image: "/products/toyota-black-croc.jpg",
    note: "Six-button architecture, blind-debossed marque.",
  },
  {
    id: "cadillac-himalayan",
    name: "Blanc",
    marque: "Cadillac",
    category: "Key Cases",
    leather: "Himalayan Crocodile",
    image: "/products/cadillac-himalayan-lym.jpg",
    note: "Gold-foil monogram ‘lym’ on natural crust.",
    bespoke: true,
  },
  {
    id: "lexus-pair",
    name: "Noir & Flame",
    marque: "Lexus",
    category: "Key Cases",
    leather: "French Calf",
    image: "/products/lexus-noir-orange.jpg",
    note: "A his-and-hers pair with mirrored edge paint.",
  },
  {
    id: "srt-himalayan",
    name: "Viper",
    marque: "SRT",
    category: "Key Cases",
    leather: "Himalayan Crocodile",
    image: "/products/srt-himalayan.jpg",
    note: "Hand-knotted paracord lanyard, embroidered mark.",
  },
  {
    id: "lamborghini-giallo",
    name: "Giallo Aventador",
    marque: "Lamborghini",
    category: "Key Cases",
    leather: "Full-Grain Calf",
    image: "/products/lamborghini-giallo.jpg",
    note: "Sculpted to the silhouette of the key itself.",
  },
  {
    id: "marque-collection",
    name: "The Marque Quartet",
    marque: "Atelier Selection",
    category: "Key Cases",
    leather: "Mixed Exotics",
    image: "/products/marque-collection.jpg",
    note: "Audi, Mercedes, Rolls-Royce & BMW M, side by side.",
  },
  {
    id: "rr-bmw-closeup",
    name: "Atelier Study",
    marque: "Rolls-Royce · BMW M",
    category: "Key Cases",
    leather: "Crocodile & Calf",
    image: "/products/rr-bmw-closeup.jpg",
    note: "A close study of skin, stitch and hardware.",
  },
  {
    id: "python-phone",
    name: "Black Mamba",
    marque: "Phone Atelier",
    category: "Phone Cases",
    leather: "Natural Python",
    image: "/products/python-phone-case.jpg",
    note: "Wrapped in matte python with a precision camera shroud.",
  },
  {
    id: "phone-lineup",
    name: "The Skin Library",
    marque: "Phone Atelier",
    category: "Phone Cases",
    leather: "Himalayan · Ostrich · Giraffe · Croc",
    image: "/products/phone-case-lineup.jpg",
    note: "One silhouette, an endless wardrobe of skins.",
  },
  {
    id: "amg-tank-charms",
    name: "AMG & TANK",
    marque: "Charm Atelier",
    category: "Charms & Lanyards",
    leather: "Embossed Silicone · Silk Knot",
    image: "/products/amg-tank-charms.jpg",
    note: "Hand-tied Chinese silk knots in lacquer red.",
  },
  {
    id: "collection-grid",
    name: "Selected Works",
    marque: "Atelier Archive",
    category: "Charms & Lanyards",
    leather: "Mixed",
    image: "/products/collection-grid.jpg",
    note: "Porsche, Aston 007, Harley, Genesis & more.",
  },
];

export const categories: Array<Category | "All"> = [
  "All",
  "Key Cases",
  "Phone Cases",
  "Charms & Lanyards",
];

export interface Leather {
  name: string;
  origin: string;
  blurb: string;
}

export const leathers: Leather[] = [
  {
    name: "Sully Goatskin",
    origin: "Tannerie Sully · France",
    blurb:
      "The fine French chèvre that Hermès builds its small leather goods upon — tight-grained, feather-light and quietly luxurious.",
  },
  {
    name: "Pomari Calfskin",
    origin: "Pomari · Italy",
    blurb:
      "Italian box calf with a deep, glassy finish and a structure that holds a crisp, knife-clean edge for a lifetime.",
  },
  {
    name: "Bonaudo Suede Calf",
    origin: "Bonaudo · Italy",
    blurb:
      "A reverse-velvet calfskin from Milan's Bonaudo — matte, tactile and warm the moment you lift your key.",
  },
  {
    name: "Bonaudo Deerskin",
    origin: "Bonaudo · Italy",
    blurb:
      "Supple Italian deerskin with a soft pebbled hand that only grows more beautiful the more it is carried.",
  },
  {
    name: "HCP Lizard",
    origin: "HCP · France",
    blurb:
      "French-tanned lizard — including our glow and electroplated finishes — small scales with extraordinary presence.",
  },
  {
    name: "ILW Python",
    origin: "ILW · Indonesia",
    blurb:
      "Light-shifting python, from matte black to full iridescence — supple, scaled and alive in the hand.",
  },
  {
    name: "HCP Crocodile",
    origin: "HCP · France",
    blurb:
      "Pure water-dyed French crocodile, finished without coating so the skin breathes and the colour runs true to the hide.",
  },
  {
    name: "Klein Karoo Ostrich",
    origin: "Klein Karoo · South Africa",
    blurb:
      "South African quill ostrich — three to five times the tensile strength of cowhide, raised in its signature follicles.",
  },
];

export interface Swatch {
  name: string;
  hex: string;
}

/**
 * A curated extract of the atelier's standing palette — over one hundred
 * leather colours can be matched, mixed or paint-matched to order.
 */
export const leatherColours: Swatch[] = [
  { name: "Ivory Crust", hex: "#ece3d0" },
  { name: "Champagne", hex: "#d8c39a" },
  { name: "Sully Gold", hex: "#c79a52" },
  { name: "Camel", hex: "#b0814e" },
  { name: "Cognac", hex: "#9a5a2b" },
  { name: "Tobacco", hex: "#6b4423" },
  { name: "Espresso", hex: "#3a2414" },
  { name: "Arancio", hex: "#d2601a" },
  { name: "Saffron", hex: "#d99a2b" },
  { name: "Giallo", hex: "#e6b800" },
  { name: "Rosso Corsa", hex: "#b11a1a" },
  { name: "Cherry", hex: "#8a1f2a" },
  { name: "Bordeaux", hex: "#5a1f25" },
  { name: "Oxblood", hex: "#4a1c1c" },
  { name: "Sakura Rose", hex: "#e3a6ad" },
  { name: "Blush", hex: "#e6c2b8" },
  { name: "Fuchsia", hex: "#a83a6a" },
  { name: "Imperial Purple", hex: "#4a2a52" },
  { name: "Royal Navy", hex: "#1f2a44" },
  { name: "Cobalt", hex: "#2a4a8a" },
  { name: "French Blue Jean", hex: "#4a6a8a" },
  { name: "Powder Blue", hex: "#a7c4cf" },
  { name: "Tiffany", hex: "#4fb6ac" },
  { name: "Petrol", hex: "#1f4a4a" },
  { name: "Emerald", hex: "#1f6a4a" },
  { name: "Cyprus", hex: "#2f4a3c" },
  { name: "Olive", hex: "#6b6a3a" },
  { name: "Slate", hex: "#4a525a" },
  { name: "Pearl Grey", hex: "#b8b4ac" },
  { name: "Graphite", hex: "#3a3a3c" },
  { name: "Noir", hex: "#14110f" },
];

export interface Step {
  index: string;
  title: string;
  body: string;
}

export const processSteps: Step[] = [
  {
    index: "I",
    title: "Reserve Your Commission",
    body: "Every piece is made to order — nothing is kept in stock, so your place is booked first. Send us your exact make, model and key fob, or simply a photo, and we pattern the case to the millimetre.",
  },
  {
    index: "II",
    title: "Compose Every Detail",
    body: "Choose your skin, colour family, stitch colour, edge paint and hardware finish, the name or initials, even the strap and keyring leather — plus any personal request. Nine decisions, each one yours: add a flag, a crest, a lucky number.",
  },
  {
    index: "III",
    title: "Watch It Take Shape",
    body: "A single artisan cuts, skives, saddle-stitches and burnishes your piece by hand over several days. We share progress films and livestreams as it grows — every detail locks the moment cutting begins.",
  },
  {
    index: "IV",
    title: "Sealed & Shipped Worldwide",
    body: "Finished with four gold seals and presented in a signature LEECUE box, then dispatched fully tracked by SF Express — to 200+ cities across China and to collectors on five continents.",
  },
];

export interface TierPrice {
  skin: string;
  price: string;
}

export interface Tier {
  name: string;
  origin: string;
  from: string;
  blurb: string;
  features: string[];
  prices: TierPrice[];
  featured?: boolean;
}

export const tiers: Tier[] = [
  {
    name: "Minimalist",
    origin: "The Entry to Bespoke",
    from: "$132.9",
    blurb:
      "One skin, cleanly cut and hand-finished — the purest expression of the craft, with nothing to distract from the leather itself.",
    features: [
      "A single skin, cleanly cut",
      "Hand saddle-stitched & burnished",
      "Edge paint in your colour",
      "Hardware in gold or palladium",
    ],
    prices: [
      { skin: "Calf · Goatskin", price: "$132.9" },
      { skin: "Lizard · Python · Deer", price: "$288.2" },
      { skin: "Crocodile · Ostrich", price: "$510.1" },
    ],
  },
  {
    name: "Personalised",
    origin: "Most Commissioned",
    from: "$199.5",
    blurb:
      "Your name, your colours, your car. Everything from the Minimalist, made unmistakably yours with foil, embroidery and paint-matched detail.",
    features: [
      "Everything in Minimalist",
      "Foil or embroidered name",
      "Paint-matched to your car",
      "Flag, crest or lucky number",
      "Contrast thread & edge paint",
    ],
    prices: [
      { skin: "Calf · Goat · Suede", price: "$199.5" },
      { skin: "Lizard · Python · Deer", price: "$354.8" },
      { skin: "Crocodile · Ostrich", price: "$576.7" },
    ],
    featured: true,
  },
  {
    name: "Needle-Painting Art",
    origin: "The Painted Pinnacle",
    from: "$266.1",
    blurb:
      "A hand needle-painted artwork worked directly into the skin — a portrait, a marque, a motif. A wearable miniature painting, signed by the artisan.",
    features: [
      "Everything in Personalised",
      "Hand needle-painted artwork",
      "Portraits, marques or motifs",
      "A wearable miniature painting",
      "Signed by the artisan",
    ],
    prices: [
      { skin: "Calf · Goat · Suede", price: "$266.1" },
      { skin: "Lizard · Python · Deer", price: "$421.4" },
      { skin: "Crocodile · Ostrich", price: "$643.3" },
    ],
  },
];

export interface Showcase {
  name: string;
  origin: string;
  from: string;
  blurb: string;
  prices?: TierPrice[];
}

export const limitedEdition: Showcase = {
  name: "Limited Edition",
  origin: "Numbered Series",
  from: "$377.0",
  blurb:
    "Released in small, numbered runs — a single theme interpreted across our skins, then retired once the series is complete.",
  prices: [
    { skin: "Calf · Goat · Suede", price: "$377.0" },
    { skin: "Lizard · Python · Deer", price: "$532.3" },
    { skin: "Crocodile · Ostrich", price: "$754.2" },
  ],
};

export const oneOfOne: Showcase = {
  name: "One of One",
  origin: "Showpiece Commissions",
  from: "$1,109.5",
  blurb:
    "Singular art objects — AVALON, PAMDEM, the GT SHOW 2025 series — conceived once, built once, and never repeated.",
};

export interface Collaboration {
  name: string;
  marque: string;
}

export const collaborations: Collaboration[] = [
  { name: "ICE · Yang Changqing", marque: "Lamborghini" },
  { name: "AMCC Muscle-Car Club", marque: "Corvette C8 Z06 · GT Show 2025" },
  { name: "Mercedes-Maybach", marque: "Private commission" },
  { name: "Bentley", marque: "Private commission" },
];

export interface PriceLine {
  name: string;
  price: string;
  note?: string;
}

export const accessories: PriceLine[] = [
  {
    name: "Phone Case",
    price: "$354.8",
    note: "Wrapped in the skin of your choice",
  },
  {
    name: "Silk Knot Lanyard",
    price: "from $35.1",
    note: "Grab cord $63.9 · set $86.1",
  },
  {
    name: "Car Charm",
    price: "from $22.0",
    note: "Hanging charm · set $50.6",
  },
];

export interface JointCreation {
  eyebrow: string;
  title: string;
  emphasis: string;
  body: string;
  certification: string;
  pieces: PriceLine[];
}

export const jointCreation: JointCreation = {
  eyebrow: "Joint Creations · 联名创作",
  title: "Lacquer & leather,",
  emphasis: "two living heritages.",
  body: "In rare partnership with a master of Chinese lacquer — 漆器, itself recognised as National Intangible Cultural Heritage — we craft 祥瑞 auspicious amulets and co-branded car emblems. Cinnabar and black lacquer, built and polished over many coats, then finished by hand in gold.",
  certification: "National Intangible Cultural Heritage · 国家级非物质文化遗产",
  pieces: [
    {
      name: "Lacquer Amulet Pendant",
      price: "$110.7",
      note: "祥瑞护身符 — an auspicious protective charm",
    },
    {
      name: "Lacquer Good-Luck Knot",
      price: "$28.4",
      note: "Hand-lacquered Chinese knot",
    },
    {
      name: "Lacquer Car Emblem",
      price: "from $443.8",
      note: "Co-branded marque badge",
    },
  ],
};

export const credentials: { label: string; detail: string }[] = [
  {
    label: "District Intangible Cultural Heritage",
    detail: "Declared by the Jiang'an District Government, December 2019",
  },
  {
    label: "Wuhan Arts & Crafts Association",
    detail: "Recognised member atelier",
  },
  {
    label: "Third-Generation Inheritor",
    detail: "Of Wuhan leather moulding & carving",
  },
  {
    label: "Trained under Master Lu Yonggang",
    detail: "District ICH inheritor, Jiang'an",
  },
];

export const practice: string[] = [
  "Bespoke design & development",
  "Restyling & restoration",
  "Masterclasses & training",
  "DIY atelier experiences",
  "Cultural exhibitions",
  "Brand collaborations",
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "How do I commission a piece?",
    a: "Everything is made to order — we hold no stock, so a commission begins by reserving your place. Tell us your make, model and key fob, or send a photo, and we create a fresh pattern at no extra cost.",
  },
  {
    q: "What can I personalise?",
    a: "Nine things, at least: the skin, the colour family, the stitch colour, the edge paint, the hardware finish, a foil or embroidered name, the strap leather and the keyring leather — plus any personal request, from a flag or crest to a hand-painted portrait or lucky number.",
  },
  {
    q: "Which leathers do you use?",
    a: "Only the houses that supply the great maisons — French Sully goatskin (Hermès's own), Italian Pomari and Bonaudo calf, French HCP lizard and pure water-dyed crocodile, Indonesian ILW python and South African Klein Karoo ostrich.",
  },
  {
    q: "How long does it take, and do you ship worldwide?",
    a: "Each piece is hand-built over several days once your commission is booked. We ship fully tracked by SF Express across 200+ Chinese cities and worldwide — the USA, Canada, the UK, Germany, Spain, the UAE, Australia, New Zealand, Japan, Korea, Singapore, Malaysia and Thailand. A rush service is available for +30%.",
  },
  {
    q: "What if my piece isn't right?",
    a: "No deposit is taken until you have approved your design and quote, so nothing is finalised before you are certain. Pieces dispatch by SF Express on an air-freight, pay-on-delivery basis. In the rare event a finished piece isn't right after full consultation, return it unused and in resale condition and we will remake it for you — bespoke work is otherwise non-returnable.",
  },
  {
    q: "Is each piece authenticated?",
    a: "Yes. Every commission carries four gold seals — maker, year, China Intangible Cultural Heritage and studio — and arrives in a signature box. You also receive progress films from the bench as your piece is made.",
  },
  {
    q: "Who makes my piece?",
    a: "Leon — Li Qin — founder of LEECUE ATELIER since 2015 and a third-generation inheritor of Wuhan leather moulding and carving, recognised as Intangible Cultural Heritage in 2019. One pair of hands, from first cut to final seal.",
  },
];
