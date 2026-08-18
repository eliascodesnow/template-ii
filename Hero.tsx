import heroImg from "@/assets/hero.jpg";
import { useShop } from "@/lib/shop";
import { marqueeItems } from "@/data";
import { ArrowIcon, DiamondIcon, StarIcon, WhatsAppIcon } from "./Icons";
import { MaskLine, Reveal } from "./ui";

const stats = [
  { n: "9+", l: "Years at the chair" },
  { n: "14K", l: "Fades & crops done" },
  { n: "4.9", l: "Google rating", star: true },
  { n: "12s", l: "Avg. WhatsApp reply" },
];

export function Hero({ onBook }: { onBook: () => void }) {
  const { shop, openNow } = useShop();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-brass/10 blur-[140px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-brass/5 blur-[130px]" aria-hidden="true" />

      <div className="container-x grid items-center gap-12 pb-16 pt-28 md:pt-36 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* copy */}
        <div className="lg:col-span-7">
          <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-[0.28em]">
            <span className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                {openNow && <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-wa" />}
                <span className={openNow ? "relative inline-flex h-2.5 w-2.5 rounded-full bg-wa" : "relative inline-flex h-2.5 w-2.5 rounded-full bg-sand"} />
              </span>
              <span className={openNow ? "text-wa" : "text-sand"}>
                {openNow ? `Open now — till ${String(shop.closeHour).padStart(2, "0")}:00` : "Closed — see hours below"}
              </span>
            </span>
            <span className="hidden h-px w-8 bg-line sm:block" aria-hidden="true" />
            <span className="text-sand">
              Est. {shop.est} · {shop.tagline}
            </span>
          </div>

          <h1 className="font-display text-[clamp(4.2rem,13vw,9.5rem)] leading-[0.86] tracking-[0.01em] text-bone">
            <MaskLine d={80}>Sharp lines.</MaskLine>
            <MaskLine d={220}>
              Bold crops. <span className="font-accent text-[0.42em] italic tracking-normal text-brass">every single time</span>
            </MaskLine>
            <MaskLine d={360} className="text-brass">
              Zero mess.
            </MaskLine>
          </h1>

          <Reveal delay={500} className="mt-7 max-w-md">
            <p className="text-[15px] leading-relaxed text-sand md:text-base">
              Premium cuts, hot towel shaves and beard work in the heart of {shop.tagline.split(",")[0]}. No apps, no
              waiting lists — your chair is booked straight on the shop's WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={640} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={onBook}
              className="group inline-flex items-center gap-3 bg-brass px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-brass-soft"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book on WhatsApp
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 border border-line px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:border-brass hover:text-brass"
            >
              Browse the menu
            </a>
          </Reveal>

          <Reveal delay={760} className="mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-line pt-7 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="flex items-baseline gap-1 font-display text-4xl tracking-wide text-bone">
                  {s.n}
                  {s.star && <StarIcon className="h-4 w-4 translate-y-[-2px] text-brass" />}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-sand">{s.l}</p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* image */}
        <div className="lg:col-span-5">
          <Reveal delay={200} className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-brass/40" aria-hidden="true" />
            <div className="relative overflow-hidden">
              <img
                src={heroImg}
                alt="Kenyan barber giving a skin fade at Kilimani Blade Co. in Westlands, Nairobi"
                className="kb aspect-[4/5] w-full object-cover"
                width={900}
                height={1125}
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-5 pt-16">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-bone/85">
                  Chair 02 — Moe working
                  <br />
                  <span className="text-brass">a skin fade</span>
                </p>
                <span className="blink mb-0.5 h-2 w-2 rounded-full bg-brass" aria-hidden="true" />
              </div>
            </div>
            <div className="absolute -right-2 -top-4 border border-line bg-ink px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-sand shadow-lg sm:right-6">
              M-Pesa · Card · Cash
            </div>
          </Reveal>
        </div>
      </div>

      {/* marquee */}
      <div className="border-y border-line bg-coal py-4" aria-hidden="true">
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max items-center">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {marqueeItems.map((m) => (
                  <span key={`${copy}-${m}`} className="flex items-center">
                    <span className="font-display text-2xl tracking-[0.14em] text-bone/55 md:text-3xl">{m.toUpperCase()}</span>
                    <DiamondIcon className="mx-7 h-3 w-3 shrink-0 text-brass/80 md:mx-10" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
