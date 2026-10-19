import type { Metadata } from "next";
import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Brushstroke Artspace, our design philosophy, and the way we create calm, expressive interiors.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">About the studio</p>
              <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
                Interior design that feels gathered, warm, and unmistakably yours.
              </h1>
              <p className="mt-5 max-w-lg text-lg text-[var(--color-graphite)]/72">
                Brushstroke Artspace creates residential and boutique commercial interiors with care, clarity, and architectural sensitivity.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-3 shadow-[var(--shadow-soft)]">
              <div className="relative h-[560px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                  alt="A warm modern room with soft layered textures"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-7">
              <p className="font-display text-4xl text-[var(--color-graphite)]">12 yrs</p>
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-mocha)]">Practice</p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-graphite)]/72">A grounded studio practice shaped by a deep understanding of materials, flow, and lived-in comfort.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-7">
              <p className="font-display text-4xl text-[var(--color-graphite)]">120+</p>
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-mocha)]">Spaces delivered</p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-graphite)]/72">From private homes to hospitality moments, every project is designed to feel considered and enduring.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-7">
              <p className="font-display text-4xl text-[var(--color-graphite)]">96%</p>
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-mocha)]">Repeat clients</p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-graphite)]/72">Clients return for the calm process, clear communication, and highly personal design outcomes.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.3)] p-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">Our approach</p>
              <h2 className="mt-4 font-display text-4xl text-[var(--color-graphite)]">Refined by intention, not excess.</h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-graphite)]/72">
                We work closely with clients to understand the rhythm of their daily life, then layer design decisions around comfort, clarity, and lasting value.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-graphite)] p-8 text-[var(--color-ivory)]">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-clay)]">What we value</p>
              <ul className="mt-5 space-y-4 text-base leading-7 text-[rgba(251,249,245,0.82)]">
                <li>• Sensory comfort and practical living</li>
                <li>• Honesty in materiality and craft</li>
                <li>• Thoughtful transitions between rooms</li>
                <li>• Long-term relevance over temporary trends</li>
              </ul>
            </div>
          </div>
        </section>
        <CtaBanner />
      </main>
      <SiteFooter />
    </>
  );
}
