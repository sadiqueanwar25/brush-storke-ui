import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ivory)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <p className="font-display text-3xl tracking-[0.12em] text-[var(--color-graphite)]">BRUSHSTROKE</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-graphite)]/70">
            Interior design and turnkey project studio creating warm, articulate living spaces with modern sensibility.
          </p>
        </div>
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-mocha)]">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-graphite)]/80">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-mocha)]">Visit</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-graphite)]/80">
            <li>24 Mercer Lane</li>
            <li>New York, NY</li>
            <li>hello@brushstrokeartspace.com</li>
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-mocha)]">Legal</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-graphite)]/80">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
