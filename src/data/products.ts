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
    name: "Giallo · Personalised",
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
    name: "Blanc · Personalised",
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
    name: "Himalayan Crocodile",
    origin: "The Rarest Crust",
    blurb:
      "An unbleached natural crocodile hide, hand-finished to its signature snow-and-smoke marbling. No two are alike.",
  },
  {
    name: "Glazed Alligator",
    origin: "Louisiana",
    blurb:
      "Hand-glazed to a deep mirror shine that catches the light with every tile of the skin.",
  },
  {
    name: "Natural Python",
    origin: "Southeast Asia",
    blurb:
      "Supple, light-shifting scales — from matte black mamba to full iridescent aurora.",
  },
  {
    name: "Ostrich & Exotics",
    origin: "Karoo",
    blurb:
      "Quill-marked ostrich, ostrich-leg, and lizard for those who want texture you can feel.",
  },
  {
    name: "Box & French Calf",
    origin: "Tannerie, France",
    blurb:
      "Vegetable-tanned full-grain calf in any colour we can mix — the canvas for true bespoke.",
  },
  {
    name: "Hair-On Hide",
    origin: "Selected Ranches",
    blurb:
      "Cowhide and pony with the hair left on — for cases with real character and warmth.",
  },
];

export interface Step {
  index: string;
  title: string;
  body: string;
}

export const processSteps: Step[] = [
  {
    index: "I",
    title: "Send Us Your Key",
    body: "Tell us your exact make, model and key fob — or simply send a photo. We pattern every case to the millimetre so your buttons stay flush and clickable.",
  },
  {
    index: "II",
    title: "Choose Your Skin",
    body: "Select from Himalayan crocodile, alligator, python, ostrich or fine French calf in any colour. Mix bodies, edges and stitching to your taste.",
  },
  {
    index: "III",
    title: "Make It Yours",
    body: "Add your name, initials or a date in foil or embroidery. Match your car's paint, add a flag, a crest, a lucky number — anything is possible.",
  },
  {
    index: "IV",
    title: "Hand-Built To Order",
    body: "A single artisan cuts, skives, saddle-stitches and burnishes your piece by hand over several days. Then it is inspected, boxed and shipped worldwide.",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Can you make a case for my exact key?",
    a: "Yes. We pattern cases for virtually every marque — supercar, luxury, classic or daily. If we have not built yours before, send a photo of the key and we will create a fresh pattern at no extra cost.",
  },
  {
    q: "What can I personalise?",
    a: "Effectively everything: the leather type and colour, the thread and edge-paint colour, foil or embroidered names and initials, flags, crests, lucky numbers, lanyard style and hardware finish. Send us a photo of your car and we will match the leather to your paint.",
  },
  {
    q: "How long does a bespoke piece take?",
    a: "Most commissions are hand-built and shipped within 2–4 weeks. Rare exotic skins such as Himalayan crocodile may take a little longer while we source the perfect hide.",
  },
  {
    q: "Do you ship worldwide?",
    a: "Yes — every order is shipped fully insured and tracked, presented in a signature LEECUE box. Customs and duties vary by destination.",
  },
  {
    q: "Are the leathers genuine?",
    a: "Always. We work only with genuine, ethically sourced hides from established tanneries, with documentation available for exotic skins where required.",
  },
  {
    q: "How do I care for my piece?",
    a: "Each commission arrives with a care card. Keep exotics away from prolonged moisture and direct heat; a soft dry cloth and the occasional conditioning is all most pieces ever need.",
  },
];
