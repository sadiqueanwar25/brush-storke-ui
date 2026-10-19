import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Brushstroke Artspace to discuss residential interiors, commercial spaces, and turnkey project opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">Contact</p>
              <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
                Start the conversation about your next space.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-[var(--color-graphite)]/72">
                Share a little about your project and we’ll reach out to arrange a thoughtful first conversation.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-8 shadow-[var(--shadow-soft)]">
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-mocha)]">Name</label>
                  <input type="text" className="w-full rounded-full border border-[var(--color-line)] bg-white/50 px-4 py-3 text-sm outline-none focus:border-[var(--color-graphite)]" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-mocha)]">Email</label>
                  <input type="email" className="w-full rounded-full border border-[var(--color-line)] bg-white/50 px-4 py-3 text-sm outline-none focus:border-[var(--color-graphite)]" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-mocha)]">Project type</label>
                  <input type="text" className="w-full rounded-full border border-[var(--color-line)] bg-white/50 px-4 py-3 text-sm outline-none focus:border-[var(--color-graphite)]" placeholder="Residential / Commercial / Hospitality" />
                </div>
                <div>
                  <label className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-mocha)]">Message</label>
                  <textarea rows={5} className="w-full rounded-[1.5rem] border border-[var(--color-line)] bg-white/50 px-4 py-3 text-sm outline-none focus:border-[var(--color-graphite)]" placeholder="Tell us about your project goals and timeline." />
                </div>
                <button type="button" className="inline-flex items-center justify-center rounded-full bg-[var(--color-graphite)] px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-ivory)] transition hover:bg-[var(--color-umber)]">
                  Submit inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
