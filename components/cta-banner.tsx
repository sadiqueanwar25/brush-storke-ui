import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
      <div className="rounded-[2.2rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,_rgba(169,133,104,0.12),_rgba(255,255,255,0.2))] p-8 sm:p-10 lg:p-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">Start your project</p>
            <h2 className="mt-3 max-w-xl font-display text-5xl leading-tight text-[var(--color-graphite)]">
              Bring your next space to life with a more considered design journey.
            </h2>
          </div>
          <Link
            href="/start-project"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-graphite)] px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-ivory)] transition hover:bg-[var(--color-umber)]"
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
