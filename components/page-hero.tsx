import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  align = "left",
  children,
}: PageHeroProps) {
  const isCentered = align === "center";

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className={isCentered ? "mx-auto text-center" : ""}>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
          {title}
        </h1>
        <p className={`mt-5 max-w-2xl text-lg text-[var(--color-graphite)]/72 ${isCentered ? "mx-auto" : ""}`}>
          {description}
        </p>
        {actionLabel && actionHref && (
          <div className="mt-8">
            <Link
              href={actionHref}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-graphite)] px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-ivory)] transition hover:bg-[var(--color-umber)]"
            >
              {actionLabel}
            </Link>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
