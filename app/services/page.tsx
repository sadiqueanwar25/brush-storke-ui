import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Brushstroke Artspace interior design, turnkey project delivery, and styling services for refined, functional living spaces.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">Services</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
              Design support for hospitality, restaurants, and commercial spaces.
            </h1>
            <p className="mt-5 text-lg text-[var(--color-graphite)]/72">
              We create immersive, effective spaces that blend brand identity, guest experience, and practical performance.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-ivory)] shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-mocha)]">
                    {service.shortTitle}
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-[var(--color-graphite)]">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-graphite)]/72">{service.description}</p>
                  <div className="mt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-mocha)] transition group-hover:text-[var(--color-graphite)]"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-graphite)] p-8 text-[var(--color-ivory)]">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-clay)]">
                Tailored process
              </p>
              <h2 className="mt-4 font-display text-4xl">Aligning design with real life and business goals.</h2>
              <p className="mt-4 text-base leading-7 text-[rgba(251,249,245,0.82)]">
                We structure projects around guest experience, operational efficiency, and a clear visual identity that supports your brand and customer journey.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.3)] p-8">
              <ul className="space-y-5 text-base leading-7 text-[var(--color-graphite)]/72">
                <li><span className="font-semibold text-[var(--color-graphite)]">1.</span> Discovery and site understanding</li>
                <li><span className="font-semibold text-[var(--color-graphite)]">2.</span> Concept and brand-led design direction</li>
                <li><span className="font-semibold text-[var(--color-graphite)]">3.</span> Technical detailing, procurement, and execution</li>
                <li><span className="font-semibold text-[var(--color-graphite)]">4.</span> Final styling and handover</li>
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
