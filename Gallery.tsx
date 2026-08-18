import fadeImg from "./gallery-fade.jpg";
import shaveImg from "./gallery-shave.jpg";
import chairImg from "./gallery-chair.jpg";
import styleImg from "./gallery-style.jpg";
import { Reveal, SectionHead } from "./ui";

const shots = [
  { src: fadeImg, alt: "Crisp skin fade being finished with trimmers", title: "Skin fade, zero gap", tag: "Chair 02 · Friday" },
  { src: chairImg, alt: "The Westlands barbershop floor with leather chair and brass mirrors", title: "The Westlands floor", tag: `Est. 2017` },
  { src: shaveImg, alt: "Hot towel straight razor shave with steam", title: "Hot towel, straight razor", tag: "Chair 01 · Saturday" },
  { src: styleImg, alt: "Client admiring a fresh textured crop in the mirror", title: "Out the chair, Westlands", tag: "Friday 4pm rush" },
];

export function Gallery() {
  return (
    <section id="gallery" className="border-y border-line bg-[#171309] py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          kicker="Off the chair"
          title={
            <>
              Fresh work, <span className="text-brass">no filters</span>
            </>
          }
          sub="Real cuts from this week on the floor — from skin fades and hot towel shaves to textured crops for the curl gang."
        />

        <div className="columns-1 gap-5 sm:columns-2 [&>figure]:mb-5 [&>figure]:break-inside-avoid">
          {shots.map((s, i) => (
            <Reveal key={s.title} as="figure" delay={i * 90} className="group relative overflow-hidden">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent p-5 pt-20">
                <div>
                  <p className="font-display text-2xl tracking-wide text-bone">{s.title}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-brass">{s.tag}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
