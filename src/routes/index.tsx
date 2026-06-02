import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { ScrollTop } from "@/components/portfolio/ScrollTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Faarid Qureshi — Full Stack Developer · Deploying MVPs in Weeks" },
      { name: "description", content: "Faarid Qureshi is a Full Stack Developer specializing in Next.js, React, TypeScript, Node.js & AI Integration — shipping MVPs in weeks, not months." },
      { property: "og:title", content: "Faarid Qureshi — Full Stack Developer" },
      { property: "og:description", content: "Deploying production-ready MVPs in weeks. Next.js · React · TypeScript · Node.js · AI." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
