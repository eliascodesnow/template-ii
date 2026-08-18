import { useEffect, useState } from "react";
import { cn } from "./cn";
import { useShop } from "./shop";
import { MenuIcon, PhoneIcon, ScissorsIcon, WhatsAppIcon, XIcon } from "./Icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#barbers", label: "Team" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

const navLink =
  "relative text-[13px] font-semibold uppercase tracking-[0.18em] text-bone/70 transition-colors hover:text-bone after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brass after:transition-transform after:duration-300 hover:after:scale-x-100";

export function Navbar({ onBook }: { onBook: () => void }) {
  const { shop } = useShop();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "border-b border-line bg-ink/95 py-0 backdrop-blur-md" : "border-b border-transparent py-2",
        )}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 md:h-[76px]">
          {/* brand */}
          <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center border border-brass/70 bg-brass/10 text-brass transition-colors group-hover:bg-brass group-hover:text-ink">
              <ScissorsIcon className="h-5 w-5" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[22px] tracking-[0.08em] text-bone">{shop.name}</span>
              <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.28em] text-sand">{shop.tagline}</span>
            </span>
          </a>

          {/* desktop links */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <a key={l.href} href={l.href} className={navLink}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${shop.phone.replace(/\s+/g, "")}`}
              className="hidden items-center gap-2 text-[13px] font-semibold text-bone/70 transition-colors hover:text-brass xl:flex"
            >
              <PhoneIcon className="h-4 w-4" />
              {shop.phone}
            </a>
            <button
              onClick={onBook}
              className="group hidden items-center gap-2 bg-brass px-5 py-3 text-[13px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-brass-soft sm:flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book now
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center border border-line text-bone transition-colors hover:border-brass hover:text-brass lg:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ink transition-all duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-[76px]">
          <span className="font-display text-[22px] tracking-[0.08em] text-bone">{shop.name}</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center border border-line text-bone transition-colors hover:border-brass hover:text-brass"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <nav className="container-x mt-6 flex flex-1 flex-col gap-1" aria-label="Mobile">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "border-b border-line py-4 font-display text-5xl tracking-wide text-bone transition-all duration-500 hover:pl-3 hover:text-brass",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span className="mr-4 align-middle text-sm text-brass">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="container-x flex items-center justify-between gap-4 pb-8">
          <a href={`tel:${shop.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 text-sm font-semibold text-sand">
            <PhoneIcon className="h-4 w-4" />
            {shop.phone}
          </a>
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="flex items-center gap-2 bg-brass px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-ink"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book now
          </button>
        </div>
      </div>
    </>
  );
}