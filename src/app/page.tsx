import { statSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import LogoMarquee from "@/components/logo-marquee";
import ServiceStackSection from "@/components/service-stack-section";
import SiteHeader from "@/components/site-header";
import VisualGallery from "@/components/visual-gallery";

const placeholderBase = "/images/placeholders";

const services = [
  {
    title: "Web Development",
    description:
      "Modern websites and web apps built with clean code, responsive layouts, and performance-first thinking.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "UI/UX Design",
    description:
      "User-focused interface design that turns ideas into clear, usable, and visually polished digital experiences.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "App Development",
    description:
      "Mobile and cross-platform app development for products that need smooth user flows and reliable backend integration.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Design Systems",
    description:
      "Scalable design systems and reusable components that keep products consistent as they grow.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=80",
  },
];

const projects = [
  {
    name: "E-Commerce Website",
    type: "Web Development",
    summary: "Designed and developed a modern storefront focused on speed, trust, and a smoother customer journey.",
    image: `${placeholderBase}/projects/project-showcase-01.jpg`,
  },
  {
    name: "Booking Platform Redesign",
    type: "UI/UX Design",
    summary: "Improved the user experience of a booking product with clearer flows, better hierarchy, and simpler interactions.",
    image: `${placeholderBase}/projects/project-showcase-02.jpg`,
  },
  {
    name: "Mobile App Experience",
    type: "App Development",
    summary: "Built an app experience designed for everyday usability, clean navigation, and strong product consistency.",
    image: `${placeholderBase}/projects/project-showcase-03.jpg`,
  },
];

const gallery = [
  `${placeholderBase}/gallery/gallery-landscape-01.jpg`,
  `${placeholderBase}/gallery/gallery-landscape-02.jpg`,
  `${placeholderBase}/gallery/gallery-landscape-03.jpg`,
  `${placeholderBase}/gallery/gallery-landscape-04.jpg`,
  `${placeholderBase}/gallery/gallery-landscape-05.jpg`,
  `${placeholderBase}/gallery/gallery-landscape-06.jpg`,
  `${placeholderBase}/gallery/gallery-card-01.jpg`,
  `${placeholderBase}/gallery/gallery-card-02.jpg`,
  `${placeholderBase}/gallery/gallery-card-03.jpg`,
  `${placeholderBase}/gallery/gallery-card-04.jpg`,
  `${placeholderBase}/gallery/gallery-card-05.jpg`,
  `${placeholderBase}/gallery/gallery-card-06.jpg`,
];

const clientLogos = [
  `${placeholderBase}/logos/logo-01.png`,
  `${placeholderBase}/logos/logo-02.png`,
  `${placeholderBase}/logos/logo-03.png`,
  `${placeholderBase}/logos/logo-04.png`,
  `${placeholderBase}/logos/logo-05.png`,
  `${placeholderBase}/logos/logo-06.png`,
  `${placeholderBase}/logos/logo-07.png`,
  `${placeholderBase}/logos/logo-08.png`,
  `${placeholderBase}/logos/logo-09.png`,
  `${placeholderBase}/logos/logo-10.png`,
  `${placeholderBase}/logos/logo-11.png`,
  `${placeholderBase}/logos/logo-12.png`,
  `${placeholderBase}/logos/logo-13.png`,
  `${placeholderBase}/logos/logo-14.png`,
  `${placeholderBase}/logos/logo-15.png`,
];

const processSteps = [
  "Understand the goals, audience, and product requirements",
  "Plan the structure, user flow, and design direction",
  "Design and develop the product with attention to detail",
  "Test, refine, and prepare everything for launch",
];

function getHeroPortraitVersion() {
  try {
    const heroPath = path.join(
      process.cwd(),
      "public/images/hero/hero-portrait.svg.png",
    );

    return String(statSync(heroPath).mtimeMs);
  } catch {
    return "1";
  }
}

const heroPortraitVersion = getHeroPortraitVersion();

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="mt-5 overflow-hidden px-2 py-8 md:mt-7 md:px-4 md:py-12">
        <div className="reveal grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium tracking-[0.18em] text-[var(--color-muted)]">WEB DEVELOPER • APP DEVELOPER • UI/UX DESIGNER</p>
            <h1 className="display mt-4 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.055em] [text-wrap:balance] md:text-[5.6rem]">
              <span className="block">Build products</span>
              <span className="block text-[var(--color-muted)]">that feel as</span>
              <span className="block">premium as they perform.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] md:mx-0 md:text-lg">
              I design and engineer modern digital experiences across web, mobile, and UI/UX,
              helping brands and products look better, work better, and feel more intentional.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="#work" className="accent-btn rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:translate-y-[-1px]">
                View Work
              </a>
              <a href="#services" className="secondary-btn rounded-full px-7 py-3 text-sm font-semibold transition hover:opacity-90">
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[18rem] md:max-w-[28rem]">
            <div className="hero-aura absolute left-[8%] top-[10%] h-28 w-28 rounded-full bg-cyan-300/45 blur-3xl md:h-44 md:w-44" />
            <div className="hero-aura hero-aura-delay absolute right-[10%] top-[8%] h-24 w-24 rounded-full bg-indigo-300/35 blur-3xl md:h-40 md:w-40" />
            <div className="hero-orbit absolute inset-[8%] rounded-full border border-white/35 opacity-70" />
            <div className="hero-orbit hero-orbit-delay absolute inset-[18%] rounded-full border border-sky-200/45 opacity-55" />
            <div className="absolute inset-x-[14%] top-[18%] bottom-[16%] rounded-[46%] bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.9)_0%,rgba(232,242,255,0.7)_34%,rgba(188,221,255,0.18)_70%,rgba(188,221,255,0)_100%)] blur-xl" />
            <div className="absolute inset-x-[18%] bottom-4 h-10 rounded-full bg-[#7cb7ff]/15 blur-2xl md:bottom-8 md:h-16" />
            <Image
              src={`/images/hero/hero-portrait.svg.png?v=${heroPortraitVersion}`}
              alt="Sunny hero portrait"
              width={1400}
              height={1600}
              priority
              className="hero-image hero-portrait relative z-10 mx-auto h-auto w-full object-contain"
            />
          </div>
        </div>

      </section>
      <section className="reveal reveal-delay-1 mt-7 overflow-hidden px-2 md:mt-9 md:px-4">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line)]">
          <Image
            src={`${placeholderBase}/banners/feature-panorama-01.jpg`}
            alt="Panoramic product visual"
            width={6016}
            height={1160}
            className="h-44 w-full object-cover md:h-64"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(6,9,15,0.3)_0%,rgba(6,9,15,0.12)_42%,rgba(6,9,15,0.22)_68%,rgba(6,9,15,0.34)_100%)]" />
          <div className="absolute left-5 top-5 md:left-8 md:top-8">
            <p className="text-xs tracking-[0.2em] text-white/80">ABOUT MY WORK</p>
            <h2 className="mt-2 max-w-md text-2xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
              I focus on products that look clean, feel intuitive, and perform reliably.
            </h2>
          </div>
        </div>
      </section>

      <section id="services" className="mt-7 md:mt-9">
        <div className="reveal mb-4 px-1 md:mb-6">
          <p className="text-sm tracking-[0.18em] text-[var(--color-muted)]">OUR SERVICES</p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`service-card card-lift reveal group relative overflow-hidden rounded-[1.4rem] border border-[var(--color-line)]/45 reveal-delay-${(index % 3) + 1}`}
            >
              <Image
                src={service.image}
                alt={`${service.title} showcase`}
                width={1400}
                height={900}
                className="service-media-image h-full min-h-[14rem] w-full object-cover md:min-h-[15rem]"
              />
              <div className="service-overlay absolute inset-0" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_52%)]" />

              <div className="absolute inset-x-0 bottom-0 z-[4] p-3 md:p-4">
                <div className="service-text-block px-2 py-2 text-white md:px-2 md:py-2">
                  <h3 className="service-text-title text-xl font-semibold tracking-[-0.02em] text-white [text-shadow:0_3px_10px_rgba(0,0,0,0.75)]">{service.title}</h3>
                  <p className="service-text-body mt-2 max-w-xl text-sm leading-6 text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.72)]">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="dark-surface mt-7 px-6 py-10 md:mt-9 md:px-10 md:py-12">
        <div className="reveal text-center">
          <p className="text-sm tracking-[0.2em] text-white/70">SELECTED PROJECTS</p>
          <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">A few examples of the kind of work I build and design.</h2>
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`card-lift overflow-hidden rounded-3xl border border-white/15 bg-white/5 reveal reveal-delay-${(index % 3) + 1}`}
            >
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                width={1250}
                height={668}
                className="h-48 w-full object-cover md:h-56"
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{project.type}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em]">{project.name}</h3>
                <p className="mt-3 leading-7 text-white/75">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal mt-7 overflow-hidden px-2 md:mt-9 md:px-4">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line)]">
          <Image
            src={`${placeholderBase}/banners/feature-panorama-02.jpg`}
            alt="Wide product showcase"
            width={6016}
            height={1160}
            className="h-44 w-full object-cover md:h-60"
          />
          <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(255,255,255,0)_0%,rgba(20,26,38,0.14)_55%,rgba(20,26,38,0.3)_100%)]" />
          <div className="absolute right-5 top-5 text-right md:right-8 md:top-8">
            <p className="text-xs tracking-[0.2em] text-white/80">APP AND PRODUCT THINKING</p>
            <h3 className="mt-2 max-w-md text-2xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
              From interface design to development, I build products with clarity and purpose.
            </h3>
          </div>
        </div>
      </section>

      <VisualGallery images={gallery} />
      <LogoMarquee logos={clientLogos} />
      <ServiceStackSection />

      <section id="process" className="mt-7 grid gap-4 md:mt-9 md:grid-cols-[1.1fr_0.9fr]">
        <article className="reveal px-2 py-2 md:px-4">
          <h2 className="display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">How I Build</h2>
          <Image
            src={`${placeholderBase}/banners/feature-panorama-03.jpg`}
            alt="Process board"
            width={6016}
            height={1160}
            className="mt-6 h-48 w-full rounded-2xl border border-[var(--color-line)] object-cover md:h-56"
          />
          <ol className="mt-6 space-y-3">
            {processSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-3 rounded-xl border-b border-[var(--color-line)]/60 px-2 py-3 text-[var(--color-muted)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-accent)]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </article>

        <article className="reveal reveal-delay-2 px-2 py-2 md:px-4">
          <p className="text-sm tracking-[0.18em] text-[var(--color-muted)]">TESTIMONIALS</p>
          <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">What Clients Value</h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 rounded-xl border-b border-[var(--color-line)]/60 p-2">
              <Image
                src={`${placeholderBase}/avatars/avatar-01.jpg`}
                alt="Client profile 1"
                width={226}
                height={226}
                className="h-12 w-12 rounded-full object-cover"
              />
              <p className="text-sm text-[var(--color-muted)]">
                &quot;Sunny translated our ideas into a polished product with a clean and professional interface.&quot;
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border-b border-[var(--color-line)]/60 p-2">
              <Image
                src={`${placeholderBase}/avatars/avatar-02.jpg`}
                alt="Client profile 2"
                width={226}
                height={226}
                className="h-12 w-12 rounded-full object-cover"
              />
              <p className="text-sm text-[var(--color-muted)]">
                &quot;The final result felt more modern, easier to use, and much better aligned with our brand.&quot;
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border-b border-[var(--color-line)]/60 p-2">
              <Image
                src={`${placeholderBase}/avatars/avatar-03.jpg`}
                alt="Client profile 3"
                width={226}
                height={226}
                className="h-12 w-12 rounded-full object-cover"
              />
              <p className="text-sm text-[var(--color-muted)]">
                &quot;From design decisions to development details, the process was smooth and well thought out.&quot;
              </p>
            </div>
          </div>
        </article>
      </section>

      <section id="contact" className="reveal mt-7 overflow-hidden px-2 py-8 text-center md:mt-9 md:px-4 md:py-12">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line)]">
          <Image
            src={`${placeholderBase}/banners/feature-panorama-03.jpg`}
            alt="Contact section background"
            width={6016}
            height={1160}
            className="h-52 w-full object-cover md:h-72"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,16,0.08)_0%,rgba(5,8,16,0.34)_56%,rgba(5,8,16,0.52)_100%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <p className="text-sm tracking-[0.2em] text-white/78">LET&apos;S WORK TOGETHER</p>
            <h2 className="display mt-3 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Need a website, app,
              <br />
              or better product design?
            </h2>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
          I&apos;m available for freelance projects and collaborations in web development,
          app development, and UI/UX design.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:hello@sunny.dev" className="accent-btn rounded-full px-8 py-3 text-sm font-semibold transition hover:translate-y-[-1px]">
            hello@sunny.dev
          </a>
          <a href="#work" className="secondary-btn rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90">
            View Recent Work
          </a>
        </div>
      </section>
    </main>
  );
}
