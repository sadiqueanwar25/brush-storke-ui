import type { Metadata } from "next";
import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projectList } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse featured residential and commercial interiors by Brushstroke Artspace, showcasing warm, thoughtful design execution.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">
              Projects
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
              Recent work shaped by atmosphere, texture, and everyday ease.
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {projectList.map((project) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-ivory)] shadow-[var(--shadow-soft)]"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-mocha)]">
                    {project.category}
                  </p>
                  <h2 className="mt-3 font-display text-4xl text-[var(--color-graphite)]">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-[var(--color-graphite)]/72">
                    {project.summary}
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-[1rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.25)] p-3"
                      >
                        <p className="text-[0.62rem] uppercase tracking-[0.18em] text-[var(--color-mocha)]">
                          {metric.label}
                        </p>
                        <p className="mt-2 font-display text-2xl text-[var(--color-graphite)]">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
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
