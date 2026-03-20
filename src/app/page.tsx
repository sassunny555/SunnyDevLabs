import Image from "next/image";

const services = [
  {
    title: "Web Development",
    description:
      "High-performance marketing sites and SaaS frontends built with Next.js, strong SEO, and robust architecture.",
    image: "/images/services/web-dev.svg",
  },
  {
    title: "UI/UX Design",
    description:
      "Product-first interfaces with clear journeys, accessible systems, and polished micro-interactions.",
    image: "/images/services/ui-ux.svg",
  },
  {
    title: "App Development",
    description:
      "Cross-platform app flows and dashboards connected to Firebase or Supabase with maintainable backend logic.",
    image: "/images/services/app-dev.svg",
  },
  {
    title: "Design Systems",
    description:
      "Scalable visual languages, reusable component libraries, and practical documentation for faster teams.",
    image: "/images/services/design-system.svg",
  },
];

const projects = [
  {
    name: "Creator Commerce Platform",
    type: "Web App",
    summary: "Redesigned checkout flow and shipped a modular Next.js storefront.",
    image: "/images/projects/project-1.svg",
  },
  {
    name: "Health Booking Experience",
    type: "UI/UX",
    summary: "Built a modern appointment journey with clearer conversion-focused UX.",
    image: "/images/projects/project-2.svg",
  },
  {
    name: "Edu Mobile Companion",
    type: "App",
    summary: "Designed and developed a learner-focused mobile product with realtime sync.",
    image: "/images/projects/project-3.svg",
  },
];

const process = [
  "Discovery & strategy",
  "Wireframes and UX mapping",
  "High-fidelity UI design",
  "Development and launch",
];

export default function Home() {
  return (
    <main>
      <header className="section reveal px-6 py-6 md:px-10 md:py-7">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="display text-3xl leading-none">Sunny Alam</p>
            <p className="text-xs tracking-[0.25em] text-[var(--color-muted)]">PORTFOLIO</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
            <span className="chip">Next.js</span>
            <span className="chip">Firebase / Supabase</span>
            <span className="chip">Vercel + Railway</span>
          </div>
        </nav>
      </header>

      <section className="section mt-6 overflow-hidden md:mt-8">
        <div className="grid gap-8 px-6 py-8 md:grid-cols-[0.82fr_1.18fr] md:items-stretch md:gap-5 md:px-8 md:py-8">
        <div className="reveal reveal-delay-1 relative z-10 self-center md:pl-2">
          <p className="glow-line mb-8 text-xs tracking-[0.26em] text-[var(--color-muted)]">WEB DEVELOPER / UI UX DESIGNER / APP DEVELOPER</p>
          <h1 className="display text-5xl leading-[0.92] md:text-7xl">
            I craft digital products that feel premium and perform fast.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
            I design and build modern experiences from concept to deployment. The focus is always clarity, speed, and user delight.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full border border-cyan-300/40 bg-cyan-300/15 px-6 py-3 text-sm font-medium tracking-wide text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/25"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-soft)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-violet-300/45"
            >
              Start a Project
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[#101a31] min-h-[24rem] md:min-h-[42rem]">
          <Image
            src="/images/hero/hero-portrait.svg.png"
            alt="Portrait placeholder for hero image"
            width={1200}
            height={1500}
            className="h-full w-full object-cover object-center md:object-[50%_28%]"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,29,0.64)_4%,rgba(10,15,29,0.28)_48%,rgba(10,15,29,0.35)_100%)]" />
          <div className="absolute -right-12 top-0 h-56 w-56 rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="absolute left-1/3 bottom-0 h-44 w-44 rounded-full bg-violet-400/25 blur-3xl" />
          <div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-3 text-sm md:inset-x-auto md:bottom-6 md:right-6 md:w-[18rem]">
            <div className="rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur">
              <p className="text-[var(--color-muted)]">Projects</p>
              <p className="mt-2 text-2xl font-semibold">25+</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-black/30 p-4 backdrop-blur">
              <p className="text-[var(--color-muted)]">Experience</p>
              <p className="mt-2 text-2xl font-semibold">5 yrs</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="services" className="mt-6 md:mt-8">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="display text-4xl md:text-5xl">Services</h2>
          <p className="text-sm text-[var(--color-muted)]">What I build</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`section reveal p-6 reveal-delay-${(index % 3) + 1}`}
            >
              <Image
                src={service.image}
                alt={`${service.title} icon`}
                width={128}
                height={128}
                className="h-12 w-12 rounded-xl border border-[var(--color-line)] bg-black/30 p-1"
              />
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-[var(--color-muted)]">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mt-10">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="display text-4xl md:text-5xl">Featured Work</h2>
          <p className="text-sm text-[var(--color-muted)]">Selected case studies</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`section reveal min-h-56 p-6 transition hover:-translate-y-1 reveal-delay-${(index % 3) + 1}`}
            >
              <Image
                src={project.image}
                alt={`${project.name} project preview`}
                width={1600}
                height={1000}
                className="mb-4 h-40 w-full rounded-xl border border-[var(--color-line)] object-cover"
              />
              <p className="text-sm text-cyan-200">{project.type}</p>
              <h3 className="mt-3 text-2xl font-semibold">{project.name}</h3>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-[1fr_1fr]">
        <article className="section reveal p-7">
          <h2 className="display text-4xl">My Process</h2>
          <Image
            src="/images/process/process-board.svg"
            alt="Process board placeholder"
            width={1400}
            height={900}
            className="mt-5 h-44 w-full rounded-2xl border border-[var(--color-line)] object-cover"
          />
          <ol className="mt-5 space-y-3 text-[var(--color-muted)]">
            {process.map((step, index) => (
              <li key={step} className="flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-black/15 p-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-400/20 text-sm text-violet-100">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </article>

        <article className="section reveal reveal-delay-2 p-7">
          <p className="text-sm tracking-[0.24em] text-[var(--color-muted)]">TESTIMONIAL</p>
          <h2 className="display mt-2 text-4xl">Client Feedback</h2>
          <div className="mt-5 flex items-center gap-3">
            <Image
              src="/images/testimonials/client-avatar.svg"
              alt="Client avatar placeholder"
              width={240}
              height={240}
              className="h-14 w-14 rounded-full border border-[var(--color-line)] object-cover"
            />
            <Image
              src="/images/testimonials/client-logo.svg"
              alt="Client logo placeholder"
              width={320}
              height={120}
              className="h-10 w-auto rounded-lg border border-[var(--color-line)] object-contain px-2 py-1"
            />
          </div>
          <blockquote className="mt-6 text-lg leading-9 text-[#dce4ff]">
            “Sunny transformed our product UX and rebuilt the frontend with a clean system. We launched faster and our engagement increased within weeks.”
          </blockquote>
          <p className="mt-6 text-sm text-[var(--color-muted)]">Product Lead, SaaS Startup</p>
        </article>
      </section>

      <section id="contact" className="section relative mt-10 overflow-hidden reveal p-8 text-center md:p-12">
        <Image
          src="/images/decor/cta-decor.svg"
          alt="Decorative abstract shape"
          width={1400}
          height={800}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <p className="text-sm tracking-[0.3em] text-[var(--color-muted)]">LET’S BUILD</p>
        <h2 className="display relative mt-3 text-5xl md:text-6xl">Ready for your next digital product?</h2>
        <p className="relative mx-auto mt-5 max-w-2xl leading-8 text-[var(--color-muted)]">
          Available for freelance and long-term collaborations in web, UI/UX, and app development.
        </p>
        <div className="relative mt-8 flex justify-center">
          <a
            href="mailto:hello@sunny.dev"
            className="rounded-full border border-cyan-300/40 bg-cyan-300/15 px-7 py-3 text-sm font-semibold tracking-wide text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/25"
          >
            hello@sunny.dev
          </a>
        </div>
      </section>
    </main>
  );
}
