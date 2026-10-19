import type { Metadata } from "next";
import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPosts } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Insights",
  description: "Read design notes and project insights from Brushstroke Artspace on materials, atmosphere, and beautiful living spaces.",
};

export default function InsightsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">Insights</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
              Notes on atmosphere, materials, and useful living.
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-ivory)] shadow-[var(--shadow-soft)]">
                <div className="relative h-64 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-mocha)]">{post.category}</p>
                  <h2 className="mt-3 font-display text-3xl text-[var(--color-graphite)]">{post.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-graphite)]/72">{post.excerpt}</p>
                  <p className="mt-5 text-[0.66rem] uppercase tracking-[0.18em] text-[var(--color-graphite)]/60">{post.date}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <CtaBanner />
      </main>
      <SiteFooter />
    </>
  );
}
