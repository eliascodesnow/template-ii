import { useEffect, useMemo, useState } from "react";
import { ksh, services, timeSlots } from "./data";
import { useShop } from "./shop";
import { cn } from "./cn";
import { CheckIcon, WhatsAppIcon, XIcon } from "./Icons";

export type Prefill = { serviceId?: string; barber?: string };

const barberOptions = ["Any barber", "Moe", "Sam", "Brian"];

const chip = (active: boolean) =>
  cn(
    "border px-3 py-2.5 text-left text-[13px] font-semibold transition-colors duration-200",
    active ? "border-brass bg-brass text-ink" : "border-line text-bone/80 hover:border-brass/60 hover:text-bone",
  );

export function BookingModal({ prefill, onClose }: { prefill: Prefill; onClose: () => void }) {
  const { shop, waLink } = useShop();
  const [serviceId, setServiceId] = useState(prefill.serviceId ?? "skin-fade");
  const [barber, setBarber] = useState(prefill.barber ?? "Any barber");
  const [dayIdx, setDayIdx] = useState(0);
  const [time, setTime] = useState("14:00");
  const [name, setName] = useState("");

  const days = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return d;
      }),
    [],
  );

  const service = services.find((s) => s.id === serviceId) ?? services[0];
  const day = days[dayIdx];
  const dayFull = day.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
  const ready = name.trim().length >= 2;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const send = () => {
    const msg = [
      `Habari ${shop.name}! ✂️`,
      "I'd like to book a slot.",
      "",
      `• Service: ${service.name} — ${ksh(service.price)}`,
      `• Barber: ${barber}`,
      `• Day: ${dayFull}`,
      `• Time: ${time}`,
      `• Name: ${name.trim()}`,
      "",
      "Please confirm my booking. Asante!",
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Book a haircut on WhatsApp">
      <div className="fade-in absolute inset-0 bg-ink/85 backdrop-blur-sm" onClick={onClose} />

      <div className="sheet-in absolute inset-x-0 bottom-0 max-h-[94dvh] overflow-y-auto border-t border-brass/40 bg-coal sm:inset-0 sm:m-auto sm:max-h-[88dvh] sm:max-w-2xl sm:border">
        {/* header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-coal/95 p-5 backdrop-blur-sm md:p-6">
          <div>
            <h3 className="font-display text-3xl tracking-wide text-bone">Book your chair</h3>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.26em] text-sand">
              {shop.name} · {shop.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking"
            className="flex h-10 w-10 items-center justify-center border border-line text-bone transition-colors hover:border-brass hover:text-brass"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-7 p-5 md:p-6">
          {/* service */}
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-brass">01 · Service</p>
            <div className="grid grid-cols-2 gap-2">
              {services.map((s) => (
                <button key={s.id} onClick={() => setServiceId(s.id)} className={chip(serviceId === s.id)}>
                  <span className="block truncate">{s.name}</span>
                  <span className={cn("text-[11px] font-medium", serviceId === s.id ? "text-ink/70" : "text-sand")}>
                    {ksh(s.price)} · {s.duration}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* barber */}
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-brass">02 · Barber</p>
            <div className="flex flex-wrap gap-2">
              {barberOptions.map((b) => (
                <button key={b} onClick={() => setBarber(b)} className={chip(barber === b)}>
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* day */}
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-brass">03 · Day</p>
            <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {days.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setDayIdx(i)}
                  className={cn(chip(dayIdx === i), "min-w-[74px] shrink-0 text-center")}
                >
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] opacity-70">
                    {i === 0 ? "Today" : d.toLocaleDateString("en-GB", { weekday: "short" })}
                  </span>
                  <span className="font-display text-2xl leading-tight tracking-wide">
                    {d.getDate()} <span className="text-sm opacity-70">{d.toLocaleDateString("en-GB", { month: "short" })}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* time */}
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-brass">04 · Time</p>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
              {timeSlots.map((t) => (
                <button key={t} onClick={() => setTime(t)} className={cn(chip(time === t), "text-center font-display text-xl tracking-widest")}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* name */}
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-brass">05 · Your name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Baraka Otieno"
              className="field"
              autoFocus
            />
          </div>

          {/* summary */}
          <div className="flex items-center justify-between gap-4 border border-line bg-ink px-4 py-3.5">
            <p className="text-[13px] leading-snug text-sand">
              <span className="font-bold text-bone">{service.name}</span> · {dayFull} · {time}
            </p>
            <p className="shrink-0 font-display text-2xl tracking-wide text-brass">{ksh(service.price)}</p>
          </div>

          <div>
            <button
              onClick={send}
              disabled={!ready}
              className={cn(
                "flex w-full items-center justify-center gap-3 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] transition-all",
                ready
                  ? "bg-brass text-ink hover:bg-brass-soft hover:shadow-[0_0_36px_rgba(210,168,62,0.35)]"
                  : "cursor-not-allowed bg-soot text-sand/50",
              )}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Send booking to WhatsApp
            </button>
            <p className="mt-3 flex items-start gap-2 text-[12px] leading-relaxed text-sand">
              <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-wa" />
              Opens WhatsApp with your booking pre-filled — hit send and the shop confirms in minutes. No payment until
              you're in the chair.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
