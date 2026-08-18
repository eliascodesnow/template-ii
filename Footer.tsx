import { hoursLabel, useShop } from "./shop";
import { GearIcon, ScissorsIcon, WhatsAppIcon } from "./Icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#barbers", label: "Barbers" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit us" },
];

export function Footer({ onBook, onSettings }: { onBook: () => void; onSettings: () => void }) {
  const { shop } = useShop();

  return (
    <footer className="border-t border-line bg-[#0e0b06]">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-brass/70 bg-brass/10 text-brass">
              <ScissorsIcon className="h-5 w-5" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[22px] tracking-[0.08em] text-bone">{shop.name}</span>
              <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.28em] text-sand">{shop.tagline}</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-sand">
            Sharp lines, bold crops, zero mess — since {shop.est}. Cuts, shaves and beard work for the whole family, from
            Westlands to the wider Nairobi.
          </p>
          <div className="mt-5 flex gap-2">
            {["M-Pesa", "Visa", "Mastercard", "Cash"].map((p) => (
              <span key={p} className="border border-line px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-sand">
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brass">Explore</p>
          <ul className="space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[13px] font-semibold text-bone/70 transition-colors hover:text-brass">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brass">Hours & location</p>
          <p className="text-[13px] leading-relaxed text-bone/70">
            Mon – Sat: {hoursLabel(shop.openHour, shop.closeHour)}
            <br />
            Sunday: Closed
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-sand">
            {shop.address}
            <br />
            {shop.city}
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brass">Book</p>
          <button
            onClick={onBook}
            className="flex w-full items-center justify-center gap-2 bg-brass px-4 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-brass-soft"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp us
          </button>
          <button
            onClick={onSettings}
            className="mt-3 flex w-full items-center justify-center gap-2 border border-line px-4 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-sand transition-colors hover:border-brass hover:text-brass"
          >
            <GearIcon className="h-4 w-4" />
            Shop settings
          </button>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-[11px] tracking-wide text-sand/70">
            © 2026 {shop.name} — {shop.city}. All lines sharp.
          </p>
          <p className="text-[11px] tracking-wide text-sand/50">
            Multi-shop demo template · switch details in <button onClick={onSettings} className="text-brass underline-offset-2 hover:underline">settings</button>
          </p>
        </div>
      </div>
    </footer>
  );
}
