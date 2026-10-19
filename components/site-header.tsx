"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/data/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(245,241,234,0.82)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Brushstroke Artspace home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-graphite)]/15 bg-[var(--color-ivory)] text-lg font-semibold tracking-[0.2em]">
            B
          </div>
          <div>
            <p className="font-display text-2xl leading-none tracking-[0.12em]">BRUSHSTROKE</p>
            <p className="text-[0.58rem] uppercase tracking-[0.32em] text-[var(--color-umber)]">artspace</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-graphite)]/80 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "text-[var(--color-mocha)]" : "transition hover:text-[var(--color-mocha)]"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/start-project"
            className="inline-flex items-center rounded-full border border-[var(--color-graphite)] px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-graphite)] transition hover:bg-[var(--color-graphite)] hover:text-[var(--color-ivory)]"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-graphite)]/15 bg-[var(--color-ivory)] md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-[var(--color-graphite)]" />
            <span className="block h-px w-4 bg-[var(--color-graphite)]" />
            <span className="block h-px w-4 bg-[var(--color-graphite)]" />
          </span>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-[var(--color-line)] bg-[var(--color-sand)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-graphite)]/80">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/start-project" onClick={() => setIsOpen(false)} className="mt-2 w-fit rounded-full border border-[var(--color-graphite)] px-4 py-2">
              Start a project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
