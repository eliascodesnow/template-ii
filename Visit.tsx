import { hoursLabel, useShop } from "./shop";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "./Icons";
import { cn } from "./cn";
import { Reveal, SectionHead } from "./ui";

const dayOrder = [1, 2, 3, 4, 5, 6, 0];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function Visit() {
  const { shop, openNow, mapsUrl } = useShop();
  const today = new Date().getDay();

  return (
    <section id="visit" className="border-t border-line py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <SectionHead
            kicker="Find the shop"
            title={
              <>
                Walk in. <span className="text-brass">Or book first.</span>
              </>
            }
            sub="We're tucked into the heart of the neighbourhood — parking out front, chairs out of the sun."
          />

          <Reveal delay={120} className="space-y-6">
            <div className="flex gap-4">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-line text-brass">
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[15px] font-bold text-bone">{shop.address}</p>
                <p className="mt-1 text-[13px] text-sand">{shop.city}</p>
                <p className="mt-1 text-[12px] italic text-sand/70">{shop.landmark}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-line text-brass">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <a href={`tel:${shop.phone.replace(/\s+/g, "")}`} className="text-[15px] font-bold text-bone transition-colors hover:text-brass">
                  {shop.phone}
                </a>
                <p className="mt-1 text-[13px] text-sand">Walk-ins welcome when the chairs allow.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220} className="mt-9 flex flex-wrap gap-4">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-brass px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-brass-soft"
            >
              <PinIcon className="h-4.5 w-4.5" />
              Get directions
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href={`tel:${shop.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-3 border border-line px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:border-brass hover:text-brass"
            >
              <PhoneIcon className="h-4.5 w-4.5" />
              Call the shop
            </a>
          </Reveal>

          <Reveal delay={300} className="mt-10">
            <div
              className="relative h-44 overflow-hidden border border-line"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(241,233,216,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(241,233,216,0.05) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
              aria-hidden="true"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-10 w-10 items-center justify-center">
                  <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-brass/40" />
                  <PinIcon className="relative h-7 w-7 text-brass" />
                </span>
              </span>
              <span className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-[0.24em] text-bone/70">
                {shop.address}
              </span>
              <span className="absolute right-4 top-3 text-[10px] font-bold uppercase tracking-[0.24em] text-sand/60">
                {shop.city}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="border border-line bg-coal">
            <div className="flex items-center justify-between border-b border-line p-6">
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-sand">
                <ClockIcon className="h-4 w-4 text-brass" />
                Opening hours
              </p>
              <span
                className={cn(
                  "flex items-center gap-2 border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]",
                  openNow ? "border-wa/40 text-wa" : "border-line text-sand",
                )}
              >
                <span className={cn("h-1.5 w-1.5 rounded-full", openNow ? "bg-wa" : "bg-sand")} />
                {openNow ? "Open now" : "Closed now"}
              </span>
            </div>
            <ul className="p-3">
              {dayOrder.map((d) => {
                const closed = shop.closedDays.includes(d);
                const isToday = today === d;
                return (
                  <li
                    key={d}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 text-[14px] transition-colors",
                      isToday ? "bg-brass/10 font-bold text-bone" : "text-sand",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      {dayNames[d]}
                      {isToday && (
                        <span className="bg-brass px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-ink">
                          Today
                        </span>
                      )}
                    </span>
                    <span className={cn("font-display text-lg tracking-wider", closed && "text-sand/50")}>
                      {closed ? "Closed" : hoursLabel(shop.openHour, shop.closeHour)}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="border-t border-line p-6 text-[12px] leading-relaxed text-sand">
              Last booking is 30 minutes before close. Weekends fill up fast — Saturday is the{" "}
              <span className="text-brass">crowded chair</span> around us. M-Pesa, Visa, Mastercard and cash all okay.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
