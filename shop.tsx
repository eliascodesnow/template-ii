import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

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

export const defaultShop: ShopConfig = {
  name: "Kilimani Blade Co.",
  tagline: "Westlands, Nairobi",
  whatsapp: "254712345678",
  phone: "+254 712 345 678",
  address: "12 Waiyaki Way, Westlands",
  city: "Nairobi, Kenya",
  landmark: "Opposite Two Rivers, behind the old Roxy Cinema",
  openHour: 9,
  closeHour: 19,
  closedDays: [0],
  est: "2017",
};

const KEY = "blade.shop.v1";

export function normalizeWa(raw: string): string {
  let d = (raw || "").replace(/\D/g, "");
  if (d.startsWith("0") && d.length === 10) d = "254" + d.slice(1);
  else if (d.startsWith("7") && d.length === 9) d = "254" + d;
  return d;
}

type Ctx = {
  shop: ShopConfig;
  update: (p: Partial<ShopConfig>) => void;
  reset: () => void;
  waLink: (text: string) => string;
  openNow: boolean;
  mapsUrl: string;
};

const ShopCtx = createContext<Ctx | null>(null);

function load(): ShopConfig {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...defaultShop, ...(JSON.parse(raw) as Partial<ShopConfig>) };
  } catch {
    /* ignore */
  }
  return defaultShop;
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [shop, setShop] = useState<ShopConfig>(load);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setTick((n) => n + 1), 60_000);
    return () => window.clearInterval(t);
  }, []);

  const value = useMemo<Ctx>(() => {
    void tick;
    const now = new Date();
    const h = now.getHours() + now.getMinutes() / 60;
    const openNow = !shop.closedDays.includes(now.getDay()) && h >= shop.openHour && h < shop.closeHour;
    return {
      shop,
      update: (p) =>
        setShop((s) => {
          const next = { ...s, ...p };
          try {
            localStorage.setItem(KEY, JSON.stringify(next));
          } catch {
            /* ignore */
          }
          return next;
        }),
      reset: () => {
        try {
          localStorage.removeItem(KEY);
        } catch {
          /* ignore */
        }
        setShop(defaultShop);
      },
      waLink: (text) => `https://wa.me/${normalizeWa(shop.whatsapp)}?text=${encodeURIComponent(text)}`,
      openNow,
      mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${shop.address}, ${shop.city}`)}`,
    };
  }, [shop, tick]);

  return <ShopCtx.Provider value={value}>{children}</ShopCtx.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopCtx);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}

export function hoursLabel(open: number, close: number) {
  return `${String(open).padStart(2, "0")}:00 – ${String(close).padStart(2, "0")}:00`;
}
