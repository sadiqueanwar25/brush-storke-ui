import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/data/site-data";

const projects = [
	{
		name: "The Cedar Courtyard",
		type: "Residence",
		image:
			"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
	},
	{
		name: "Harbor House Studio",
		type: "Boutique Living",
		image:
			"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
	},
	{
		name: "Amberline Office",
		type: "Workspace",
		image:
			"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
	},
];

const process = [
	"Discovery & brief",
	"Concept direction",
	"Design development",
	"Execution & styling",
];

const metrics = [
	{ value: "120+", label: "Projects shaped" },
	{ value: "12 yrs", label: "Design experience" },
	{ value: "96%", label: "Repeat clients" },
];

export default function Home() {
	return (
		<>
			<SiteHeader />
			<main className="bg-[var(--color-sand)] text-[var(--color-graphite)]">
				<section className="relative overflow-hidden">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(167,130,100,0.22),transparent_28%),linear-gradient(120deg,_rgba(31,29,26,0.18),_rgba(245,241,234,0.12)_42%,_transparent_70%)]" />
					<div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
						<div className="relative z-10 flex flex-col justify-center">
							<p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-mocha)] animate-fade-up">
								Interior design studio
							</p>
							<h1 className="max-w-xl animate-fade-up font-display text-5xl leading-[0.95] tracking-[-0.03em] text-[var(--color-graphite)] sm:text-6xl lg:text-7xl">
								We Create Spaces That Move People.
							</h1>
							<p className="mt-6 max-w-lg animate-fade-up text-lg text-[var(--color-graphite)]/72">
								From thoughtful interior concepts to complete turnkey execution,
								Brushstroke Artspace transforms commercial spaces into distinctive
								experiences built around your vision.
							</p>
							<div className="mt-8 flex flex-col gap-4 sm:flex-row animate-fade-up">
								<Link
									href="/start-project"
									className="inline-flex items-center justify-center rounded-full bg-[var(--color-graphite)] px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-ivory)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-umber)]"
								>
									Start Your Project
								</Link>
								<Link
									href="/projects"
									className="inline-flex items-center justify-center rounded-full border border-[var(--color-graphite)]/20 bg-[rgba(255,255,255,0.28)] px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-graphite)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-graphite)]"
								>
									Explore Our Work
								</Link>
							</div>
							<div className="mt-10 grid max-w-xl gap-5 sm:grid-cols-3 animate-fade-up">
								{metrics.map((metric) => (
									<div
										key={metric.label}
										className="border-l border-[var(--color-line)] pl-4 first:border-l-0 first:pl-0"
									>
										<p className="font-display text-4xl text-[var(--color-graphite)]">
											{metric.value}
										</p>
										<p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-graphite)]/65">
											{metric.label}
										</p>
									</div>
								))}
							</div>
						</div>

						<div className="relative z-10">
							<div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-[var(--color-card)] p-3 shadow-[var(--shadow-soft)]">
								<div className="image-float relative h-[620px] overflow-hidden rounded-[1.5rem]">
									<Image
										src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
										alt="Luxury restaurant interior with warm lighting and elegant dining design"
										fill
										priority
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[rgba(31,29,26,0.42)] via-transparent to-[rgba(245,241,234,0.1)]" />
									<div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/20 bg-[rgba(10,9,8,0.28)] p-5 text-[var(--color-ivory)] backdrop-blur-sm">
										<p className="text-[0.68rem] uppercase tracking-[0.2em] text-[rgba(251,249,245,0.8)]">
											Featured hospitality concept
										</p>
										<p className="mt-2 font-display text-3xl">Noir & Ember</p>
										<p className="mt-1 text-sm text-[rgba(251,249,245,0.86)]">
											Restaurant interior design • lighting • material direction
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
					<div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
						<div>
							<p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">
								Our studio
							</p>
							<h2 className="mt-3 font-display text-5xl text-[var(--color-graphite)]">
								Designing Experiences Beyond Spaces
							</h2>
						</div>
						<Link
							href="/about"
							className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-graphite)] transition hover:text-[var(--color-mocha)]"
						>
							Learn more
						</Link>
					</div>

					<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
						<div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-3 shadow-[var(--shadow-soft)]">
							<div className="image-float relative h-[430px] overflow-hidden rounded-[1.5rem]">
								<Image
									src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
									alt="Commercial interior with refined furnishings and layered lighting"
									fill
									className="object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center gap-6">
							<p className="max-w-xl text-lg text-[var(--color-graphite)]/72">
								Thoughtful interior design combines functionality, aesthetics,
								materials, lighting, and spatial planning to create memorable
								environments that feel both elevated and deeply practical.
							</p>
							<div className="grid gap-6 sm:grid-cols-2">
								<div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.3)] p-6">
									<p className="font-display text-4xl text-[var(--color-graphite)]">
										01
									</p>
									<p className="mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-mocha)]">
										Functionality
									</p>
									<p className="mt-2 text-sm leading-6 text-[var(--color-graphite)]/72">
										We design for how people move, gather, and work within a space.
									</p>
								</div>
								<div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.3)] p-6">
									<p className="font-display text-4xl text-[var(--color-graphite)]">
										02
									</p>
									<p className="mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-mocha)]">
										Atmosphere
									</p>
									<p className="mt-2 text-sm leading-6 text-[var(--color-graphite)]/72">
										Material palettes, lighting layers, and forms shape a memorable mood.
									</p>
								</div>
							</div>
							<Link
								href="/about"
								className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-[var(--color-graphite)]/20 bg-[rgba(255,255,255,0.35)] px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-graphite)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-graphite)]"
							>
								About the studio
							</Link>
						</div>
					</div>
				</section>

				<section className="bg-[rgba(255,255,255,0.2)] py-20">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mb-10 flex items-end justify-between gap-4">
							<div>
								<p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">
									Services
								</p>
								<h2 className="mt-3 font-display text-5xl text-[var(--color-graphite)]">
									Designed for unforgettable hospitality and commercial experiences.
								</h2>
							</div>
							<Link
								href="/services"
								className="hidden text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-graphite)] transition hover:text-[var(--color-mocha)] md:inline-flex"
							>
								Explore all services
							</Link>
						</div>

						<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
							{services.slice(0, 6).map((service) => (
								<article
									key={service.slug}
									className="group overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-ivory)] shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1"
								>
									<div className="relative h-56 overflow-hidden">
										<Image
											src={service.image}
											alt={service.title}
											fill
											className="object-cover transition duration-500 group-hover:scale-105"
										/>
									</div>
									<div className="p-6">
										<p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-mocha)]">
											{service.shortTitle}
										</p>
										<h3 className="mt-3 font-display text-3xl text-[var(--color-graphite)]">
											{service.title}
										</h3>
										<p className="mt-3 text-sm leading-6 text-[var(--color-graphite)]/72">
											{service.description}
										</p>
										<Link
											href={`/services/${service.slug}`}
											className="mt-6 inline-flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-mocha)] transition group-hover:text-[var(--color-graphite)]"
										>
											Learn more
										</Link>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
					<div className="mb-10 flex items-end justify-between gap-4">
						<div>
							<p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">
								Featured work
							</p>
							<h2 className="mt-3 font-display text-5xl text-[var(--color-graphite)]">
								Recent interiors with lasting character.
							</h2>
						</div>
						<Link
							href="/projects"
							className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-graphite)] transition hover:text-[var(--color-mocha)]"
						>
							See all projects
						</Link>
					</div>

					<div className="grid gap-6 lg:grid-cols-3">
						{projects.map((project) => (
							<article
								key={project.name}
								className="group overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-ivory)] shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
							>
								<div className="relative h-[420px] overflow-hidden">
									<Image
										src={project.image}
										alt={project.name}
										fill
										className="object-cover transition duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,14,12,0.58)] via-transparent to-transparent" />
								</div>
								<div className="p-6">
									<p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-mocha)]">
										{project.type}
									</p>
									<h3 className="mt-3 font-display text-3xl text-[var(--color-graphite)]">
										{project.name}
									</h3>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="bg-[var(--color-graphite)] py-20 text-[var(--color-ivory)]">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
							<div>
								<p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-clay)]">
									Why choose us
								</p>
								<h2 className="mt-3 font-display text-5xl text-[var(--color-ivory)]">
									Crafted for clarity, comfort, and lasting value.
								</h2>
							</div>
							<div className="grid gap-5 sm:grid-cols-2">
								<div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-6">
									<p className="font-display text-3xl">Tailored vision</p>
									<p className="mt-3 text-sm leading-6 text-[rgba(251,249,245,0.72)]">
										Every project is guided by your lifestyle, aspirations, and the
										way you want to live in the space.
									</p>
								</div>
								<div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-6">
									<p className="font-display text-3xl">Seamless delivery</p>
									<p className="mt-3 text-sm leading-6 text-[rgba(251,249,245,0.72)]">
										We coordinate the full journey with a cohesive team, clear
										milestones, and calm project oversight.
									</p>
								</div>
								<div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-6">
									<p className="font-display text-3xl">Material depth</p>
									<p className="mt-3 text-sm leading-6 text-[rgba(251,249,245,0.72)]">
										Layering natural textures, tonal palettes, and bespoke touches
										gives each interior a memorable sense of place.
									</p>
								</div>
								<div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-6">
									<p className="font-display text-3xl">Long-term thinking</p>
									<p className="mt-3 text-sm leading-6 text-[rgba(251,249,245,0.72)]">
										We design with longevity in mind, creating rooms that feel
										current while standing up to real life.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
					<div className="mb-10 flex items-end justify-between gap-4">
						<div>
							<p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-mocha)]">
								Process
							</p>
							<h2 className="mt-3 font-display text-5xl text-[var(--color-graphite)]">
								A clear path from first idea to final layer.
							</h2>
						</div>
						<Link
							href="/process"
							className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-graphite)] transition hover:text-[var(--color-mocha)]"
						>
							View process
						</Link>
					</div>

					<div className="grid gap-6 md:grid-cols-4">
						{process.map((step, index) => (
							<div
								key={step}
								className="rounded-[1.6rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-6"
							>
								<p className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-mocha)]">
									0{index + 1}
								</p>
								<p className="mt-5 font-display text-3xl text-[var(--color-graphite)]">
									{step}
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
