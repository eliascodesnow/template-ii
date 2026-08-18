import moeImg from "@/assets/barber-moe.jpg";
import samImg from "@/assets/barber-sam.jpg";
import brianImg from "@/assets/barber-brian.jpg";
import { barbers } from "@/data";
import { ArrowIcon } from "./Icons";
import { Reveal, SectionHead } from "./ui";

const imgs: Record<string, string> = { moe: moeImg, sam: samImg, brian: brianImg };
const short: Record<string, string> = { moe: "Moe", sam: "Sam", brian: "Brian" };

export function Team({ onBook }: { onBook: (barber: string) => void }) {
  return (
    <section id="barbers" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          kicker="The barbers"
          title={
            <>
              Three chairs, <span className="text-brass">zero ego</span>
            </>
          }
          sub="Nairobi-born, Westlands-based. They remember your name, your fade height and exactly how short you like the sides."
        />

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((b, i) => (
            <Reveal key={b.id} delay={i * 130}>
              <article className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={imgs[b.id]}
                    alt={`${b.name}, ${b.role} at Kilimani Blade Co.`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute left-4 top-4 border border-line bg-ink/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-bone/85">
                    Chair 0{i + 1}
                  </div>
                </div>
                <div className="mt-5 border-l-2 border-brass pl-4">
                  <h3 className="font-display text-3xl tracking-wide text-bone">{b.name}</h3>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.24em] text-brass">{b.role}</p>
                  <p className="mt-1 text-[13px] text-sand">{b.years}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {b.tags.map((t) => (
                      <span key={t} className="border border-line px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-sand">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onBook(short[b.id])}
                    className="group/btn mt-5 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] text-bone transition-colors hover:text-brass"
                  >
                    Book with {short[b.id]}
                    <ArrowIcon className="h-4 w-4 text-brass transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
