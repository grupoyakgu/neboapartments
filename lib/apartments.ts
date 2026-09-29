// PLACEHOLDER DATA — replace names, prices, capacity and descriptions with real values.
// Images are served from the shared Google Drive folder for now; move them to /public/images later.
const img = (id: string, w = 1600) => `https://lh3.googleusercontent.com/d/${id}=w${w}`;

export const brand = {
  name: "NEBO Apartments",
  city: "Madrid", // placeholder destination
  whatsapp: "", // e.g. "34600000000"
  email: "",
  heroVideo: "/hero.mp4",
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
];

export const spaceImages = ["1XCWPmWw01HJyLiynl4DAYwrD2v4d3T9M", "1GXoh3NZWEftwhP0fK1RHXpgX1JQbJI62", "1XP3XUrqulexb8XV9sgolADY2_E6D8u_c"].map((id) => img(id, 1200));

export const getApartment = (slug: string) => apartments.find((a) => a.slug === slug);
