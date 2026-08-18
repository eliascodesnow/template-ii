import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "./cn";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "figure" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}

export function SectionHead({
  kicker,
  title,
  sub,
  right,
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
  right?: ReactNode;
}) {
  return (
    <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-brass">
          <span className="h-px w-10 bg-brass" aria-hidden="true" />
          {kicker}
        </p>
        <h2 className="font-display text-5xl leading-[0.92] tracking-wide text-bone sm:text-6xl md:text-7xl">{title}</h2>
        {sub && <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-sand">{sub}</p>}
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </Reveal>
  );
}

export function MaskLine({ children, d = 0, className }: { children: ReactNode; d?: number; className?: string }) {
  return (
    <span className={cn("mask-line", className)}>
      <span style={{ "--d": `${d}ms` } as CSSProperties}>{children}</span>
    </span>
  );
}
