import { ksh, services } from "@/data";
import { ArrowIcon, WhatsAppIcon } from "./Icons";
import { Reveal, SectionHead } from "./ui";

export function Services({ onBook }: { onBook: (serviceId?: string) => void }) {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          kicker="The menu"
          title={
            <>
              Cuts <span className="text-brass">&amp;</span> prices
            </>
          }
          sub="Straight prices in Kenyan shillings — no app, no deposit. Tap any service and the booking opens on WhatsApp with everything pre-filled."
          right={
            <button
              onClick={() => onBook()}
              className="group hidden items-center gap-3 border border-line px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:border-brass hover:text-brass md:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book any service
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          }
        />

        <div className="border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i * 60, 240)}>
              <button
                onClick={() => onBook(s.id)}
                className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-x-3 gap-y-1 border-b border-line px-2 py-5 text-left transition-colors duration-300 hover:bg-coal/70 md:grid-cols-[3.5rem_1.4fr_1fr_auto_auto] md:gap-x-6 md:px-4 md:py-6"
              >
                <span className="font-display text-lg text-brass/60 transition-colors group-hover:text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="font-display text-3xl tracking-wide text-bone transition-colors duration-300 group-hover:text-brass md:text-4xl">
                    {s.name}
                  </span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-sand md:hidden">{s.desc}</span>
                </span>
                <span className="hidden text-[12px] leading-relaxed text-sand md:block">
                  {s.desc}
                  <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-sand/60">{s.duration}</span>
                </span>
                <span className="justify-self-end font-display text-2xl tracking-wide text-bone/90 md:text-3xl">{ksh(s.price)}</span>
                <span className="hidden h-10 w-10 items-center justify-center border border-line text-sand opacity-0 transition-all duration-300 group-hover:border-brass group-hover:text-brass group-hover:opacity-100 lg:flex">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] leading-relaxed text-sand">
            <span className="font-bold uppercase tracking-[0.18em] text-brass">Add-ons —</span> hot towel +KSh 200 · deep
            treatment +KSh 900 · razor line-up included with every cut.
          </p>
          <button
            onClick={() => onBook()}
            className="group inline-flex items-center gap-2 self-start text-[13px] font-bold uppercase tracking-[0.16em] text-brass transition-colors hover:text-brass-soft sm:self-auto"
          >
            Book on WhatsApp
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
