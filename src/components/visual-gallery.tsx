"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type VisualGalleryProps = {
  images: string[];
};

export default function VisualGallery({ images }: VisualGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className="mt-7 md:mt-9" id="gallery">
      <div className="mb-4 flex items-center justify-between md:mb-5">
        <h2 className="display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Design Highlights</h2>
        <p className="text-sm tracking-[0.16em] text-[var(--color-muted)]">VISUAL DIRECTION</p>
      </div>

      <div className="p-1 md:p-2">
        <div className="relative h-[18rem] overflow-hidden rounded-3xl border border-[var(--color-line)] md:h-[28rem]">
          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Gallery showcase ${index + 1}`}
              width={1250}
              height={668}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                index === activeIndex
                  ? "scale-100 opacity-100"
                  : "scale-[1.03] opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.14)_54%,rgba(0,0,0,0.3)_100%)]" />
          <div className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/25 px-3 py-1 text-xs font-medium tracking-[0.12em] text-white backdrop-blur md:left-6 md:top-6">
            FRAME {String(activeIndex + 1).padStart(2, "0")}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 md:grid-cols-6 md:gap-3">
          {images.slice(0, 12).map((image, index) => (
            <button
              key={`${image}-thumb`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden rounded-xl border transition ${
                index === activeIndex
                  ? "border-[var(--color-accent)] ring-2 ring-[var(--color-accent-soft)]"
                  : "border-[var(--color-line)]"
              }`}
              aria-label={`Show gallery frame ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Gallery thumbnail ${index + 1}`}
                width={469}
                height={264}
                className="h-14 w-full object-cover md:h-16"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
