import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Share your design brief with Brushstroke Artspace and start the conversation about your next residential or commercial interior project.",
};

export default function StartProjectPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">
              Start a project
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
              Share your vision and we’ll shape a thoughtful next step.
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-8 shadow-[var(--shadow-soft)]">
            <form className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-mocha)]">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-full border border-[var(--color-line)] bg-white/50 px-4 py-3 text-sm outline-none focus:border-[var(--color-graphite)]"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-mocha)]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-full border border-[var(--color-line)] bg-white/50 px-4 py-3 text-sm outline-none focus:border-[var(--color-graphite)]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-mocha)]">
                  Property type
                </label>
                <input
                  type="text"
                  className="w-full rounded-full border border-[var(--color-line)] bg-white/50 px-4 py-3 text-sm outline-none focus:border-[var(--color-graphite)]"
                  placeholder="Residence / Office / Hospitality"
                />
              </div>
              <div>
                <label className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-mocha)]">
                  Budget range
                </label>
                <input
                  type="text"
                  className="w-full rounded-full border border-[var(--color-line)] bg-white/50 px-4 py-3 text-sm outline-none focus:border-[var(--color-graphite)]"
                  placeholder="e.g. $100k-$250k"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-mocha)]">
                  Project brief
                </label>
                <textarea
                  rows={6}
                  className="w-full rounded-[1.5rem] border border-[var(--color-line)] bg-white/50 px-4 py-3 text-sm outline-none focus:border-[var(--color-graphite)]"
                  placeholder="Tell us about your timeline, goals, and any design references you have in mind."
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-graphite)] px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-ivory)] transition hover:bg-[var(--color-umber)]"
                >
                  Submit inquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
