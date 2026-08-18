import { useShop } from "./shop";
import { ArrowIcon, WhatsAppIcon } from "./Icons";
import { Reveal } from "./ui";

const steps = [
  { n: "01", t: "Pick your cut", d: "From the menu — or just tell us the look and trust the chair." },
  { n: "02", t: "Choose day & time", d: "Any slot across the next 7 days. Same-day when you're quick." },
  { n: "03", t: "Confirm on WhatsApp", d: "Your booking lands straight in the shop's WhatsApp. We reply in minutes." },
];

export function Cta({ onBook }: { onBook: () => void }) {
  const { shop, waLink } = useShop();

  return (
    <section id="book" className="relative overflow-hidden border-t border-line py-24 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass/10 blur-[150px]" aria-hidden="true" />

      <div className="container-x relative">
        <div className="mb-16 grid gap-8 sm:grid-cols-3 md:mb-20">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="border-l border-line pl-5">
              <p className="font-display text-lg tracking-widest text-brass">{s.n}</p>
              <p className="mt-2 text-[15px] font-bold text-bone">{s.t}</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-sand">{s.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.32em] text-brass">No apps · No waiting lists</p>
          <h2 className="font-display text-[clamp(3.6rem,11vw,8.5rem)] leading-[0.88] tracking-[0.01em] text-bone">
            Your chair is <span className="text-brass">waiting.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-sand">
            Average reply time on {shop.name.split(" ")[0]} WhatsApp: twelve seconds. The clippers are warm.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button
            onClick={onBook}
            className="group inline-flex items-center gap-3 bg-brass px-9 py-5 text-sm font-bold uppercase tracking-[0.16em] text-ink transition-all hover:bg-brass-soft hover:shadow-[0_0_40px_rgba(210,168,62,0.35)]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Book your cut now
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
          <a
            href={waLink(`Habari ${shop.name}! ✂️ I'd like to book a haircut. What's the next free slot?`)}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-sand transition-colors hover:text-wa"
          >
            <WhatsAppIcon className="h-4.5 w-4.5" />
            or just say habari on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
