// PLACEHOLDER DATA — replace names, prices, capacity and descriptions with real values.
// Images are served from the shared Google Drive folder for now; move them to /public/images later.
const img = (id: string, w = 1600) => `https://lh3.googleusercontent.com/d/${id}=w${w}`;

export const destinations = ["Madrid", "Sevilla", "Amsterdam"];

export const brand = {
  name: "NEBO Apartments",
  city: "Madrid", // placeholder destination
  whatsapp: "", // e.g. "34600000000"
  email: "",
  heroVideo: "/video/hero.mp4",
  heroPoster: img("14tAYCZ6AkNrrIbl3Fl2WDr4mQqonb7wS", 2000),
};

export type Apartment = {
  slug: string;
  name: string;
  city: string;
  guests: number;
  bedrooms: number;
  baths: number;
  price: number; // EUR per night
  images: string[];
  description: Record<string, string>;
  amenities: string[];
};

// PLACEHOLDER copy reused by the extra apartments below.
const descriptions: Record<string, Record<string, string>> = {
  bright: {
    es: "Apartamento luminoso y elegante, con todo lo necesario para una estancia cómoda.",
    en: "A bright, elegant apartment with everything you need for a comfortable stay.",
    fr: "Un appartement lumineux et élégant, avec tout le nécessaire pour un séjour confortable.",
    it: "Un appartamento luminoso ed elegante, con tutto il necessario per un soggiorno confortevole.",
    de: "Ein helles, elegantes Apartment mit allem, was Sie für einen komfortablen Aufenthalt brauchen.",
    ko: "편안한 숙박에 필요한 모든 것을 갖춘 밝고 우아한 아파트먼트입니다.",
  },
  family: {
    es: "Espacioso apartamento ideal para familias y grupos, con zonas de descanso cómodas.",
    en: "A spacious apartment ideal for families and groups, with comfortable rest areas.",
    fr: "Un appartement spacieux idéal pour les familles et les groupes, avec des espaces de repos confortables.",
    it: "Un appartamento spazioso ideale per famiglie e gruppi, con comode zone relax.",
    de: "Ein geräumiges Apartment, ideal für Familien und Gruppen, mit gemütlichen Ruhebereichen.",
    ko: "가족과 단체에 알맞은 넓은 아파트먼트로, 편안한 휴식 공간을 갖추고 있습니다.",
  },
  cosy: {
    es: "Un rincón acogedor y práctico, perfecto para escapadas y viajes de trabajo.",
    en: "A cosy, practical retreat, perfect for getaways and business trips.",
    fr: "Un cocon chaleureux et pratique, parfait pour les escapades et les déplacements professionnels.",
    it: "Un angolo accogliente e pratico, perfetto per fughe brevi e viaggi di lavoro.",
    de: "Ein gemütlicher, praktischer Rückzugsort, perfekt für Kurztrips und Geschäftsreisen.",
    ko: "여행과 출장에 모두 알맞은 아늑하고 실용적인 공간입니다.",
  },
};

export const apartments: Apartment[] = [
  {
    slug: "nebo-ap1",
    name: "NEBO AP1",
    city: brand.city,
    guests: 4,
    bedrooms: 2,
    baths: 1,
    price: 110,
    images: [
      "14tAYCZ6AkNrrIbl3Fl2WDr4mQqonb7wS", "14F-_pUVbWabameNLejisaVLcJQeLD62c", "1k-5LR_2RNgOJvb5cQFc-HjDO3bLKtb4E",
      "14HgKmHgINVESzF_0kJVSpbFg7njvl7GO", "1g4Y16cALD1_VyqW81se7-jruOK7OfdfB", "1zKJodqqy7BiLF_0FsS1t8zJNaiTnhBmi",
    ].map((id) => img(id)),
    description: {
      es: "Apartamento luminoso y con diseño cuidado, pensado para disfrutar de la ciudad con todas las comodidades.",
      en: "A bright, carefully designed apartment made for enjoying the city with every comfort.",
      fr: "Un appartement lumineux et soigneusement conçu pour profiter de la ville en tout confort.",
      it: "Un appartamento luminoso e curato nei dettagli, pensato per vivere la città con ogni comfort.",
      de: "Ein helles, sorgfältig gestaltetes Apartment, um die Stadt mit allem Komfort zu genießen.",
      ko: "도시를 편안하게 즐길 수 있도록 세심하게 디자인된 밝은 아파트먼트입니다.",
    },
    amenities: ["Wi-Fi", "A/C", "Cocina equipada", "Smart TV", "Lavadora", "Check-in autónomo"],
  },
  {
    slug: "nebo-ap6",
    name: "NEBO AP6",
    city: brand.city,
    guests: 2,
    bedrooms: 1,
    baths: 1,
    price: 85,
    images: [
      "1iYfhCEKbN0rpgnuVrAIPcYq545_bUuWK", "1drnxxdsEf2qrp6mNpLmOad3JTElmhGaC", "1iiTqM-_FCB7F9_REIwZe7CYdwKp8v3Kq",
      "1j0uS0_iJt3Izs4QtnEqxdVxE4vwXuxx1", "1zLOqvomxlXRzKRGHN9V5hgmuhHdUQLjR", "1Bu_-KA4UIuF2pRoNZR4PicJ7fTZLh-xE",
    ].map((id) => img(id)),
    description: {
      es: "Un espacio acogedor y funcional, ideal para escapadas y estancias de trabajo.",
      en: "A cosy, functional space, ideal for getaways and work stays.",
      fr: "Un espace chaleureux et fonctionnel, idéal pour les escapades et les séjours professionnels.",
      it: "Uno spazio accogliente e funzionale, ideale per fughe brevi e soggiorni di lavoro.",
      de: "Ein gemütlicher, funktionaler Raum, ideal für Kurztrips und Arbeitsaufenthalte.",
      ko: "여행과 업무 출장 모두에 알맞은 아늑하고 실용적인 공간입니다.",
    },
    amenities: ["Wi-Fi", "A/C", "Cocina equipada", "Smart TV", "Escritorio", "Check-in autónomo"],
  },
  ...([
    { n: 2, guests: 3, bedrooms: 1, baths: 1, price: 95, d: "bright", ids: ["1QQCqO7qQqpk3fzRUso0rDnC2f5WyGd2f", "17tvU1qoS1AzAl5B3GNuJepB_Vm8iW5O6", "1gUhzwvsda-xYvJ4GckG8iLRQqwtnLEvj", "1xuUtUUgKnm7tE5ZUVwJS7xxaEQ5025wD", "1xq4vx368QkoMkuQOOJk1TPb2zbFr2Ozr", "1_AZqT4waDbUqmWXW__uQIuC_z26sj9g9"] },
    { n: 3, guests: 4, bedrooms: 2, baths: 1, price: 120, d: "family", ids: ["1xgV6XgNfZQpVe0wYOssReoax_hFsm48s", "1MS1oMnQKtzVogG-yM4QIZDjNsF6ma-O0", "1lj7VM-PXEdMdxCwYFqX1qRBHLUsgr9XS", "1uubJZyXrATDAmDWe2cQc3fa8JGRCHxsJ", "1oH4Yb0e0nXVyPQ0MbvZaYazDvdRx9Wzu", "1jyyAt-2q-oodQK9fKALBSSh5hpAodptp"] },
    { n: 4, guests: 2, bedrooms: 1, baths: 1, price: 80, d: "cosy", ids: ["1m3Dz-qRno8ESGmJeEk99y3Hl8RRB0uNO", "1P4mLE2a7YVaKWTRNG-eJKEjhgD5i70lR", "1KZM2Eq_3kkYNhkHhY-FCOAsZeEi3pDP2", "1oCrPAf2mCyJn5OT9fS0NO3oVbrq6dfjK", "1fuZRlwfwzoa0x-ecLl5XoAh9yU9THyR4", "1V4LUbqaxjZzD1pnnuwWV-pTjdd-ITCc9"] },
    { n: 5, guests: 5, bedrooms: 2, baths: 2, price: 145, d: "family", ids: ["1Tm0CbwfRkLXS5y7_0AaP4OBtT-q8q74x", "1I2Be4i7gN_z5GLpRfLxSc0RMsFoIaFPC", "1NkUI_CkT-31sQEGU-PqwIFwiUzWfwqjH", "1Cm2_Vw_LglV9R6psxge4k5TU4YKiURls", "1FRUo4LfiX2sPt6A4e4sfVNPVCTe6Fseb", "1DGcStWHTSHiC0kH4I98Do0ILK_HtK9iJ"] },
    { n: 7, guests: 2, bedrooms: 1, baths: 1, price: 100, d: "bright", ids: ["1xjCbw3Rt3Ujkbsg8_CcPvEqvgh0xb9ye", "18Tz84J8bjys-yAl-vmVXLukQbwONraLh", "1j20yRlCWiT4qn-jxIyPiX2995Z6RAp4y", "189_uZDV_aGkcsWIACSFT1wT82N8dspWI", "1fJ5FdtzUYMa_ihOAonwtVAbMMu7QUUdt", "1J5Y3gqTadB3kelDu_YDhLG4-Sbq8aoVu"] },
  ] as const).map((a): Apartment => ({
    slug: `nebo-ap${a.n}`,
    name: `NEBO AP${a.n}`,
    city: brand.city,
    guests: a.guests,
    bedrooms: a.bedrooms,
    baths: a.baths,
    price: a.price,
    images: a.ids.map((id) => img(id)),
    description: descriptions[a.d],
    amenities: ["Wi-Fi", "A/C", "Cocina equipada", "Smart TV", "Check-in autónomo"],
  })),
];

export const spaceImages = ["1XCWPmWw01HJyLiynl4DAYwrD2v4d3T9M", "1GXoh3NZWEftwhP0fK1RHXpgX1JQbJI62", "1XP3XUrqulexb8XV9sgolADY2_E6D8u_c"].map((id) => img(id, 1200));

// Destination card photos (Google Drive file ids for now).
export const destinationImages: Record<string, string> = {
  Madrid: spaceImages[0],
  Sevilla: img("1ZdGObmy1Z4WHBuJuW_6yT1OLTsZjt4dL", 1200),
  Amsterdam: img("1RAyC74l41DQy1tUm_Zvwq4oyo7D7hpA2", 1200),
};

export const getApartment = (slug: string) => apartments.find((a) => a.slug === slug);
