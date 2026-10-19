import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/data/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">{service.shortTitle}</p>
              <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-[var(--color-graphite)]/72">{service.description}</p>
              <div className="mt-8">
                <Link href="/start-project" className="inline-flex items-center justify-center rounded-full bg-[var(--color-graphite)] px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-ivory)] transition hover:bg-[var(--color-umber)]">
                  Start a project
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-3 shadow-[var(--shadow-soft)]">
              <div className="relative h-[520px] overflow-hidden rounded-[1.5rem]">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {service.features.map((feature) => (
              <div key={feature} className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-7">
                <p className="font-display text-3xl text-[var(--color-graphite)]">{feature}</p>
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
