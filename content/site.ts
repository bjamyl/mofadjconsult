// Single source of truth for NAP (Name, Address, Phone) and other site-wide facts.
// Keep this in sync with the Google Business Profile listing.
export const site = {
  name: "Mofad-J Consult",
  legalName: "Mofad-J Consult",
  url: "https://www.mofadjconsult.com",
  description:
    "Project management consulting, procurement & logistics, quantity surveying, and Microsoft Project / Primavera P6 training in Accra, Ghana.",
  email: "mofad@mofadjconsult.com",
  phone: "+233552515269",
  phoneDisplay: "+233 552 515 269",
  whatsapp: "https://wa.me/233552515269?text=Hello%20I%20have%20a%20question",
  address: {
    streetAddress: "Salem Estate, Estate High St, Adjiringanor",
    addressLocality: "Accra",
    addressCountry: "GH",
    plusCode: "MV9H+M79",
  },
  areaServed: "GH",
  sameAs: [] as string[], // add real, permission-granted profile URLs here
} as const;
