import { useEffect } from "react";
import { normalizeWa, useShop } from "./shop";
import { CheckIcon, XIcon } from "./Icons";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.22em] text-sand">{label}</span>
      {children}
    </label>
  );
}

export function SettingsDrawer({ onClose }: { onClose: () => void }) {
  const { shop, update, reset } = useShop();
  const digits = normalizeWa(shop.whatsapp);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Shop settings">
      <div className="fade-in absolute inset-0 bg-ink/85 backdrop-blur-sm" onClick={onClose} />

      <div className="slide-in absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-line bg-coal">
        <div className="flex items-center justify-between border-b border-line p-5">
          <div>
            <h3 className="font-display text-3xl tracking-wide text-bone">Shop settings</h3>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.26em] text-brass">Demo control room</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close settings"
            className="flex h-10 w-10 items-center justify-center border border-line text-bone transition-colors hover:border-brass hover:text-brass"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto p-5">
          <p className="border border-line bg-ink p-4 text-[12px] leading-relaxed text-sand">
            This template serves <span className="text-brass">many barber shops</span>. Change the details below and the
            whole site — including WhatsApp bookings — updates instantly. Saved in this browser only.
          </p>

          <Field label="Shop name">
            <input className="field" value={shop.name} onChange={(e) => update({ name: e.target.value })} />
          </Field>

          <Field label="Tagline / area">
            <input className="field" value={shop.tagline} onChange={(e) => update({ tagline: e.target.value })} />
          </Field>

          <Field label="WhatsApp number (bookings land here)">
            <input
              className="field"
              inputMode="tel"
              placeholder="254712345678 or 0712 345 678"
              value={shop.whatsapp}
              onChange={(e) => update({ whatsapp: e.target.value })}
            />
            <span className="mt-1.5 flex items-center gap-1.5 text-[11px] text-sand/70">
              <CheckIcon className="h-3 w-3 text-wa" />
              Booking link → <span className="font-mono text-brass">wa.me/{digits || "…"}</span>
            </span>
          </Field>

          <Field label="Display phone">
            <input className="field" value={shop.phone} onChange={(e) => update({ phone: e.target.value })} />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Street address">
              <input className="field" value={shop.address} onChange={(e) => update({ address: e.target.value })} />
            </Field>
            <Field label="City">
              <input className="field" value={shop.city} onChange={(e) => update({ city: e.target.value })} />
            </Field>
          </div>

          <Field label="Landmark / directions hint">
            <input className="field" value={shop.landmark} onChange={(e) => update({ landmark: e.target.value })} />
          </Field>

          <div className="grid grid-cols-3 gap-3">
            <Field label="Opens">
              <select className="field" value={shop.openHour} onChange={(e) => update({ openHour: Number(e.target.value) })}>
                {[7, 8, 9, 10, 11].map((h) => (
                  <option key={h} value={h}>{String(h).padStart(2, "0")}:00</option>
                ))}
              </select>
            </Field>
            <Field label="Closes">
              <select className="field" value={shop.closeHour} onChange={(e) => update({ closeHour: Number(e.target.value) })}>
                {[16, 17, 18, 19, 20, 21, 22].map((h) => (
                  <option key={h} value={h}>{String(h).padStart(2, "0")}:00</option>
                ))}
              </select>
            </Field>
            <Field label="Est. year">
              <input className="field" value={shop.est} onChange={(e) => update({ est: e.target.value })} />
            </Field>
          </div>

          <div className="border border-line bg-ink p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brass">Live preview</p>
            <p className="mt-2 font-display text-2xl leading-tight tracking-wide text-bone">{shop.name || "Your shop name"}</p>
            <p className="mt-1 text-[12px] text-sand">
              {shop.address}, {shop.city} · {shop.phone}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-line p-5">
          <button
            onClick={reset}
            className="text-[12px] font-bold uppercase tracking-[0.16em] text-sand transition-colors hover:text-brass"
          >
            Reset demo shop
          </button>
          <button
            onClick={onClose}
            className="bg-brass px-6 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-brass-soft"
          >
            Done — back to the shop
          </button>
        </div>
      </div>
    </div>
  );
}
