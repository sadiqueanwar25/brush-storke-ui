import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPosts } from "@/data/site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-3 shadow-[var(--shadow-soft)]">
            <div className="relative h-[500px] overflow-hidden rounded-[1.5rem]">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">{post.category}</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-4 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-graphite)]/60">{post.date}</p>
            <p className="mt-6 text-lg leading-8 text-[var(--color-graphite)]/72">{post.excerpt}</p>
            <div className="mt-8">
              <Link href="/insights" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-graphite)] transition hover:text-[var(--color-mocha)]">
                ← Back to insights
              </Link>
            </div>
          </div>
        </section>
        <CtaBanner />
      </main>
      <SiteFooter />
    </>
  );
}
