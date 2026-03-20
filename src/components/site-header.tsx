"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="reveal fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "border-b border-[var(--color-line)]/60 bg-[var(--color-bg)]/88 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex w-[min(1240px,calc(100%-2.2rem))] items-center justify-between gap-4 px-1 py-3 md:py-4">
          <div className="text-base font-semibold tracking-[-0.02em]">Sunny DevLabs</div>
          <div className="hidden items-center gap-7 text-sm text-[var(--color-muted)] md:flex">
            <a href="#work" className="transition hover:text-[var(--color-text)]">
              Work
            </a>
            <a href="#services" className="transition hover:text-[var(--color-text)]">
              Services
            </a>
            <a href="#gallery" className="transition hover:text-[var(--color-text)]">
              Gallery
            </a>
            <a href="#process" className="transition hover:text-[var(--color-text)]">
              Process
            </a>
            <a href="#contact" className="transition hover:text-[var(--color-text)]">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="nav-cta px-3 py-2 text-sm font-medium transition"
            >
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
