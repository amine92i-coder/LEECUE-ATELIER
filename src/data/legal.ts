// ─────────────────────────────────────────────────────────────────────────────
// Legal entity behind the LEECUE ATELIER shop (German seller of record / Stripe).
// Single source of truth for the Impressum and all legal pages.
//
// ⚠️  BEFORE GOING LIVE — confirm the three fields marked `TODO` below.
//     An Impressum with a wrong/blank e-mail is abmahnbar (legally challengeable).
// ─────────────────────────────────────────────────────────────────────────────

export const company = {
  legalName: "Uneed UG (haftungsbeschränkt)",
  street: "Kyllburger Weg 36",
  postalCity: "13051 Berlin",
  country: "Deutschland / Germany",
  managingDirector: "Arvid Gaus",

  phone: "+49 15679 761533",
  // TODO: confirm this is a monitored mailbox (the source document used it only as an example).
  email: "info@uneed.de",

  registerCourt: "Amtsgericht Charlottenburg (Berlin)",
  registerNumber: "HRB 280372 B",

  // TODO: fill once issued by the Finanzamt. Leave "" to hide the line.
  taxNumber: "",
  // TODO: fill the USt-IdNr. once issued (format DE123456789). Leave "" to hide the line.
  vatId: "",

  // §18 Abs. 2 MStV — person responsible for editorial content.
  contentResponsible: "Arvid Gaus",

  // Trading / brand name shown to customers.
  brand: "LEECUE ATELIER",
} as const;

export const company_full_address = `${company.street}, ${company.postalCity}, ${company.country}`;

// Last meaningful revision of the legal texts (shown on each page).
export const legalLastUpdated = "17. Juni 2026";

// Online dispute resolution (EU) — required reference in the Impressum.
export const odrUrl = "https://ec.europa.eu/consumers/odr";
