export const SKILLS = [
  "Next.js", "React", "TypeScript", "JavaScript", "Node.js", "Express",
  "Prisma", "PostgreSQL", "MongoDB", "TailwindCSS", "Figma", "REST APIs",
  "GraphQL", "OpenAI API", "LangChain", "AI Agents", "Vercel", "Docker",
  "Git", "Framer Motion",
];

export const TECH_MARQUEE = [
  "Next.js", "React", "TypeScript", "Node.js", "Figma",
  "OpenAI", "Vercel", "Tailwind", "Prisma",
];

export const VALUES = [
  { icon: "⚡", title: "Fast Delivery", text: "MVPs in weeks, not months." },
  { icon: "🤖", title: "AI-First", text: "Integrating LLMs and AI agents into products." },
  { icon: "🎯", title: "Product Thinking", text: "Not just code, but user-centric solutions." },
  { icon: "🌐", title: "End-to-End", text: "Design, develop, and deploy." },
];

import miskAsset from "@/assets/misk.png.asset.json";
import powerpresentAsset from "@/assets/powerpresent.png.asset.json";
import c2bmAsset from "@/assets/c2bm.png.asset.json";
import legacyAsset from "@/assets/legacy.png.asset.json";
import nextcleanAsset from "@/assets/nextclean.png.asset.json";
import maqsadAsset from "@/assets/maqsad.png.asset.json";

export const PROJECTS = [
  {
    title: "Misk Events Platform",
    desc: "Enterprise events & programs app for the Misk Global Forum — featured sessions, schedules, and interactive venue maps.",
    tags: ["Google Analytics", "Jira", "React"],
    image: miskAsset.url,
  },
  {
    title: "PowerPresent AI",
    desc: "AI-powered presentation tool that turns ideas into scroll-stopping slide decks in seconds.",
    tags: ["Airtable", "Figma", "JavaScript"],
    image: powerpresentAsset.url,
  },
  {
    title: "C2BM Workforce Management",
    desc: "Specialized workforce platform for data centers and industrial infrastructure operations.",
    tags: ["Next.js", "Stripe", "Vercel"],
    image: c2bmAsset.url,
  },
  {
    title: "Legacy Building",
    desc: "Memory-keeping platform that helps people preserve their stories and gift them to loved ones.",
    tags: ["Next.js", "Stripe", "Vercel"],
    image: legacyAsset.url,
  },
  {
    title: "NextClean",
    desc: "Two-sided marketplace connecting customers with vetted independent cleaners — secure payments and dispute support.",
    tags: ["Next.js", "Stripe", "Vercel"],
    image: nextcleanAsset.url,
  },
  {
    title: "Maqsad",
    desc: "Large-scale EdTech mobile application with over 1M+ downloads and 250k+ MAUs.",
    tags: ["Java", "Node.js", "React"],
    image: maqsadAsset.url,
  },
];

/* Replace with real testimonials */
export const TESTIMONIALS = [
  {
    quote:
      "Faarid & team are unicorns in the startup space. They didn't just execute screens — they helped shape the product itself. Polished, dev-ready deliverables. Hoping to work with them on development for this project as well!",
    name: "Hayyan N.",
    role: "Digitorm",
  },
  {
    quote:
      "On my first call with Faarid, all I had was my ideas and a stranger in front of me. Throughout the project, Faarid treated my project as if it was his and gave a genuine care and world class expertise to transform the idea into a product!",
    name: "Ermek Bakyt",
    role: "Founder, Symphonizehire.com",
  },
  {
    quote: "Faarid did his best to give me exactly what I wanted!",
    name: "Shaune Barnes",
    role: "Founder, Traced",
  },
  {
    quote:
      "From start to finish it's been great working with him — great communication and understanding of the product. As the project went on I had new ideas that he implemented free of charge and with a very quick turnaround. Highly recommend him.",
    name: "Chae.M",
    role: "Founder, C2BM Solutions",
  },
];