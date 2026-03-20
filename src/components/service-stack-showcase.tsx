"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

type ServiceStackItem = {
  name: string;
  icon: ReactNode;
  iconClass: string;
  eyebrow: string;
  summary: string;
};

type ServiceStackShowcaseProps = {
  items: ServiceStackItem[];
  activeItem: ServiceStackItem;
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function ServiceStackShowcase({
  items,
  activeItem,
  activeIndex,
  onSelect,
}: ServiceStackShowcaseProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const rail = railRef.current;

    if (!rail) return;

    const amount = Math.max(rail.clientWidth * 0.72, 240);

    rail.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="reveal mt-8 px-2 md:mt-10 md:px-4">
      <div className="overflow-hidden">
        <div className="flex items-end justify-between gap-6 px-5 pb-2 pt-5 md:px-8 md:pb-3 md:pt-6">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-[var(--color-muted)]">
              TOOLS AND SERVICES
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] md:text-2xl">
              The stack I use to build.
            </h2>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              aria-label="Scroll services left"
              className="stack-nav-btn"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              aria-label="Scroll services right"
              className="stack-nav-btn"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="stack-rail flex gap-2 overflow-x-auto px-4 pb-5 pt-3 md:gap-3 md:px-6 md:pb-6"
        >
          {items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => onSelect(index)}
              className={`stack-card ${index === activeIndex ? "stack-card-active" : ""}`}
              aria-pressed={index === activeIndex}
            >
              <span className={`stack-icon-glyph ${item.iconClass}`} aria-hidden="true">
                {item.icon}
              </span>
              <span className="mt-3 text-base font-medium tracking-[-0.02em]">{item.name}</span>
              <span
                className={`stack-active-dot ${index === activeIndex ? "stack-active-dot-visible" : ""}`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>

        <div className="border-t border-[var(--color-line)]/75 px-5 py-4 md:px-8 md:py-5">
          <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-[var(--color-muted)]">{activeItem.eyebrow}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                {activeItem.name}
              </h3>
            </div>
            <p className="max-w-3xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
              {activeItem.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
