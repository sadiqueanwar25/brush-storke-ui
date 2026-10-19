import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { processSteps } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Process",
  description: "Discover the Brushstroke Artspace design process from discovery and concept direction through execution and final styling.",
};

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">Our process</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
              A calm, structured collaboration from vision to final layer.
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-7 shadow-[var(--shadow-soft)]">
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-mocha)]">0{index + 1}</p>
                <h2 className="mt-4 font-display text-3xl text-[var(--color-graphite)]">{step}</h2>
                <p className="mt-4 text-sm leading-6 text-[var(--color-graphite)]/72">
                  {index === 0 && "We begin by understanding your goals, routines, and the way you want the space to feel every day."}
                  {index === 1 && "From this brief, we shape a concept grounded in materials, proportions, atmosphere, and function."}
                  {index === 2 && "Detailed design development ensures every decision is aligned, coherent, and ready for procurement and execution."}
                  {index === 3 && "Our final styling and project oversight create a seamless handover and a fully resolved environment."}
                </p>
              </div>
            ))}
          </div>
        </section>
        <CtaBanner />
      </main>
      <SiteFooter />
    </>
  );
}
