"use client";

import { useState } from "react";
import {
  SiAndroid,
  SiApple,
  SiFigma,
  SiFirebase,
  SiNextdotjs,
  SiOpenai,
  SiReact,
  SiSupabase,
} from "react-icons/si";
import ServiceStackShowcase from "@/components/service-stack-showcase";

const stackItems = [
  {
    name: "React",
    icon: <SiReact />,
    iconClass: "stack-icon-react",
    eyebrow: "Frontend Development",
    summary:
      "I use React to build fast, scalable interfaces with reusable components, clean structure, and smooth user interactions.",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    iconClass: "stack-icon-firebase",
    eyebrow: "Backend Services",
    summary:
      "Firebase helps me ship realtime features, authentication, storage, and cloud-powered app workflows without unnecessary complexity.",
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
    iconClass: "stack-icon-supabase",
    eyebrow: "Database and Auth",
    summary:
      "For products that need a flexible backend, I use Supabase for database design, authentication, and developer-friendly APIs.",
  },
  {
    name: "AI Workflows",
    icon: <SiOpenai />,
    iconClass: "stack-icon-openai",
    eyebrow: "Automation and Intelligence",
    summary:
      "I design AI-powered experiences and workflow integrations that make products smarter, more useful, and easier to scale.",
  },
  {
    name: "Android Apps",
    icon: <SiAndroid />,
    iconClass: "stack-icon-android",
    eyebrow: "Mobile Development",
    summary:
      "I build Android app experiences with practical user flows, thoughtful UI decisions, and performance that feels dependable.",
  },
  {
    name: "iOS Apps",
    icon: <SiApple />,
    iconClass: "stack-icon-apple",
    eyebrow: "Mobile Development",
    summary:
      "I craft iOS app interfaces that feel polished, intuitive, and aligned with modern product expectations.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    iconClass: "stack-icon-nextjs",
    eyebrow: "Full-Stack Web",
    summary:
      "Next.js is my go-to for modern websites and web apps that need strong performance, SEO, and production-ready architecture.",
  },
  {
    name: "UI/UX Design",
    icon: <SiFigma />,
    iconClass: "stack-icon-figma",
    eyebrow: "Product Design",
    summary:
      "I design interfaces with clarity, hierarchy, and consistency so the final product feels easier to use from the first interaction.",
  },
];

export default function ServiceStackSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ServiceStackShowcase
      items={stackItems}
      activeItem={stackItems[activeIndex]}
      activeIndex={activeIndex}
      onSelect={setActiveIndex}
    />
  );
}
