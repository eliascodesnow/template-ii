import { useState } from "react";
import { ShopProvider, useShop } from "./shop";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Gallery } from "./Gallery";
import { Team } from "./Team";
import { Testimonials } from "./Testimonials";
import { Visit } from "./Visit";
import { Cta } from "./Cta";
import { Footer } from "./Footer";
import { BookingModal, type Prefill } from "./BookingModal";
import { WhatsAppIcon } from "./Icons";

function WaFloat({ hidden }: { hidden: boolean }) {
  const { shop, waLink } = useShop();
  return (
    <a
      href={waLink(`Habari ${shop.name}! ✂️ I'd like to book a service. What's the next free slot?`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      className={
        "group fixed bottom-5 right-5 z-40 flex items-center gap-3 transition-all duration-300 " +
        (hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100")
      }
    >
      <span className="hidden border border-line bg-ink px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-bone shadow-lg transition-colors group-hover:border-brass group-hover:text-brass sm:block">
        Book on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-transform duration-300 group-hover:scale-110">
        <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-wa/60" aria-hidden="true" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  );
}

function Shell() {
  const [booking, setBooking] = useState<{ open: boolean; prefill: Prefill }>({ open: false, prefill: {} });

  const openBooking = (prefill?: Prefill) => setBooking({ open: true, prefill: prefill ?? {} });

  return (
    <div className="relative">
      <Navbar onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking()} />
        <Services onBook={(serviceId) => openBooking(serviceId ? { serviceId } : undefined)} />
        <Gallery />
        <Team onBook={(barber) => openBooking({ barber })} />
        <Testimonials />
        <Visit />
        <Cta onBook={() => openBooking()} />
      </main>
      <Footer onBook={() => openBooking()} />
      <WaFloat hidden={booking.open} />

      {booking.open && <BookingModal prefill={booking.prefill} onClose={() => setBooking((b) => ({ ...b, open: false }))} />}
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <Shell />
    </ShopProvider>
  );
}