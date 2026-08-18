/**
 * CONFIGURATION FILE
 * Update these values for each client deployment
 */

export type ShopConfig = {
  name: string;
  tagline: string;
  whatsapp: string; // international digits, e.g. 254712345678
  phone: string; // display phone
  address: string;
  city: string;
  landmark: string;
  openHour: number;
  closeHour: number;
  closedDays: number[]; // 0 = Sunday
  est: string;
};

export const shopConfig: ShopConfig = {
  name: "Your Business Name",
  tagline: "Location, City",
  whatsapp: "254712345678", // Change to actual WhatsApp number
  phone: "+254 712 345 678", // Change to display phone
  address: "123 Your Street, Area",
  city: "Your City, Country",
  landmark: "Landmark or directions hint",
  openHour: 9,
  closeHour: 19,
  closedDays: [0], // 0 = Sunday, adjust as needed
  est: "2024", // Year established
};

export function normalizeWa(raw: string): string {
  let d = (raw || "").replace(/\D/g, "");
  if (d.startsWith("0") && d.length === 10) d = "254" + d.slice(1);
  else if (d.startsWith("7") && d.length === 9) d = "254" + d;
  return d;
}

export function hoursLabel(open: number, close: number) {
  return `${String(open).padStart(2, "0")}:00 – ${String(close).padStart(2, "0")}:00`;
}
