import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">404</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
            This page has wandered off.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--color-graphite)]/72">
            The page you are looking for may have moved, but our design studio is still here and ready to help.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-[var(--color-graphite)] px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-ivory)] transition hover:bg-[var(--color-umber)]">
              Return home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
