import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">Privacy policy</p>
          <h1 className="mt-4 font-display text-5xl leading-[0.96] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl">
            Your information is handled with care.
          </h1>
          <div className="mt-8 space-y-6 text-base leading-7 text-[var(--color-graphite)]/72">
            <p>This demonstration website is for illustrative purposes only and does not represent an active legal policy for a real studio.</p>
            <p>Information collected through website forms is only used for demonstration and may be stored locally in the browser or otherwise not processed by a backend service.</p>
            <p>We do not knowingly sell or share personal information. Future integrations may include consent-based email communications, project inquiry management, and analytics tooling.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
