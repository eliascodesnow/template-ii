export type Service = {
  id: string;
  name: string;
  desc: string;
  price: number;
  duration: string;
};

export const services: Service[] = [
  { id: "skin-fade", name: "Skin Fade", desc: "Tapered to the skin with a razor-sharp line-up.", price: 800, duration: "40 min" },
  { id: "crop", name: "Textured Crop", desc: "Choppy top, tight fade, styled out the chair.", price: 750, duration: "40 min" },
  { id: "buzz", name: "Buzz & Tidy", desc: "All-over buzz with a crisp neck and edges.", price: 500, duration: "25 min" },
  { id: "beard", name: "Beard Sculpt", desc: "Shape, edge work and a hot towel finish.", price: 600, duration: "30 min" },
  { id: "shave", name: "Hot Towel Shave", desc: "Classic straight razor shave with steam and oil.", price: 1000, duration: "45 min" },
  { id: "combo", name: "The Full Combo", desc: "Cut + beard sculpt + hot towel. The works.", price: 1300, duration: "60 min" },
  { id: "junior", name: "Junior Cut (u/12)", desc: "Patience guaranteed. Sticker on exit.", price: 400, duration: "25 min" },
  { id: "treatment", name: "Wash & Treatment", desc: "Deep-conditioning wash, scalp massage, style.", price: 900, duration: "45 min" },
];

export type Barber = {
  id: string;
  name: string;
  role: string;
  years: string;
  tags: string[];
  img: string;
};

export const barbers: Omit<Barber, "img">[] = [
  { id: "moe", name: "Moses “Moe” Kariuki", role: "Master Barber", years: "9 yrs at the chair", tags: ["Skin fades", "Tapers"] },
  { id: "sam", name: "Samuel Otieno", role: "Beard & Shave Artist", years: "7 yrs at the chair", tags: ["Hot towel", "Razor work"] },
  { id: "brian", name: "Brian Njoroge", role: "Crops & Styles", years: "5 yrs at the chair", tags: ["Textured crops", "Curls"] },
];

export type Testimonial = {
  quote: string;
  name: string;
  area: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Walked in with a mess, walked out a different man. Moe’s skin fade is the sharpest I’ve seen in Nairobi, safi sana.",
    name: "Baraka Otieno",
    area: "Kilimani",
    service: "Skin fade",
  },
  {
    quote:
      "My two boys have been cutting with Brian since 2022. He handles them with so much patience and the crops come out every time.",
    name: "Wanjiku Muthoni",
    area: "Westlands",
    service: "Junior cuts",
  },
  {
    quote:
      "The hot towel shave before my wedding was worth every shilling. Booked on WhatsApp at 9am, sat in the chair by 4pm. Zero stress.",
    name: "Kevin Omondi",
    area: "Lavington",
    service: "Full combo",
  },
  {
    quote:
      "I drive from South C every two weeks. The lines stay sharp longer than anywhere else I’ve tried in town.",
    name: "Brian Kiptoo",
    area: "South C",
    service: "Taper & beard",
  },
];

export const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export const marqueeItems = [
  "Fresh fades",
  "Hot towel shaves",
  "Beard sculpts",
  "Same-day bookings",
  "M-Pesa & card",
  "Westlands · Nairobi",
];

export function ksh(n: number) {
  return `KSh ${n.toLocaleString("en-KE")}`;
}
