import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projectList } from "@/data/site-data";

export function generateStaticParams() {
  return projectList.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectList.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">{project.category}</p>
              <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-[var(--color-graphite)]/72">{project.summary}</p>
              <div className="mt-8">
                <Link href="/projects" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-graphite)] transition hover:text-[var(--color-mocha)]">
                  ← Back to projects
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-3 shadow-[var(--shadow-soft)]">
              <div className="relative h-[520px] overflow-hidden rounded-[1.5rem]">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-mocha)]">{metric.label}</p>
                <p className="mt-3 font-display text-4xl text-[var(--color-graphite)]">{metric.value}</p>
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
