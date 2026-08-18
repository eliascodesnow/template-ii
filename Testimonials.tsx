import { testimonials } from "./data";
import { StarIcon } from "./Icons";
import { cn } from "./cn";
import { Reveal, SectionHead } from "./ui";

export function Testimonials() {
  return (
    <section id="reviews" className="border-t border-line bg-coal/40 py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          kicker="Word on the streets"
          title={
            <>
              What <span className="font-accent italic tracking-normal text-brass">Nairobi</span> says
            </>
          }
          sub="Reviews straight from Google Maps and the WhatsApp status — from Kilimani to Lavington."
          right={
            <div className="border border-line bg-ink px-6 py-5">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl leading-none tracking-wide text-bone">4.9</span>
                <div className="flex gap-0.5 pb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-brass" />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-sand">320+ Google reviews</p>
            </div>
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 110}
              className={cn("flex h-full flex-col", i % 2 === 1 && "md:translate-y-10")}
            >
              <figure className="flex h-full flex-col gap-5 border border-line bg-ink p-7 transition-colors duration-300 hover:border-brass/50">
                <div className="flex items-center justify-between">
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <StarIcon key={j} className="h-3.5 w-3.5 text-brass" />
                    ))}
                  </span>
                  <span className="font-accent text-5xl italic leading-none text-brass/30" aria-hidden="true">
                    “
                  </span>
                </div>
                <blockquote className="flex-1 text-[15px] leading-relaxed text-bone/85">{t.quote}</blockquote>
                <figcaption className="border-t border-line pt-4">
                  <p className="text-sm font-bold text-bone">{t.name}</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-sand">
                    {t.area} · {t.service}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
