import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">Terms and conditions</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
            A clear and transparent working relationship.
          </h1>
          <div className="mt-8 space-y-6 text-base leading-7 text-[var(--color-graphite)]/72">
            <p>This website is a front-end demonstration of a design studio website and does not include a real contractual relationship or commercial service agreement.</p>
            <p>All content, visuals, and brand direction are presented for portfolio and concept showcase purposes only. Future project delivery and legal terms would be formalized separately in a signed engagement agreement.</p>
            <p>Use of this site is subject to local laws and the website owner&apos;s discretion regarding content updates and future service availability.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
