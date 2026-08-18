/**
 * SERVICES CONFIGURATION
 * Update this file with your business services and pricing
 */

export type Service = {
  id: string;
  name: string;
  desc: string;
  price: number;
  duration: string;
};

export const services: Service[] = [
  {
    id: "service-1",
    name: "Service Name 1",
    desc: "Service description here",
    price: 500,
    duration: "30 min",
  },
  {
    id: "service-2",
    name: "Service Name 2",
    desc: "Service description here",
    price: 750,
    duration: "45 min",
  },
  {
    id: "service-3",
    name: "Service Name 3",
    desc: "Service description here",
    price: 1000,
    duration: "60 min",
  },
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
  {
    id: "staff-1",
    name: "Staff Member Name",
    role: "Position/Title",
    years: "X years in industry",
    tags: ["Specialty 1", "Specialty 2"],
  },
  {
    id: "staff-2",
    name: "Staff Member Name",
    role: "Position/Title",
    years: "X years in industry",
    tags: ["Specialty 1", "Specialty 2"],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  area: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Add customer testimonial here",
    name: "Customer Name",
    area: "Area/Location",
    service: "Service purchased",
  },
  {
    quote: "Add customer testimonial here",
    name: "Customer Name",
    area: "Area/Location",
    service: "Service purchased",
  },
];

export const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export const marqueeItems = [
  "Your Tagline",
  "Service Name",
  "Service Name",
  "Quick Tagline",
  "Payment Methods",
  "Location Info",
];

export function ksh(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}
