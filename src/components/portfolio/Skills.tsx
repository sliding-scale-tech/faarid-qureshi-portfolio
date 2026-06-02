import { motion } from "framer-motion";
import { SKILLS } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 lg:px-10 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 blob"
        style={{ background: "radial-gradient(circle, rgba(170,255,69,0.18), transparent 60%)", filter: "blur(80px)" }}
      />
      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-12"
        >
          Tech Stack & Skills<span className="text-lime">.</span>
        </motion.h2>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="font-mono text-sm px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-white/80 hover:border-lime hover:text-lime hover:shadow-[0_0_20px_rgba(170,255,69,0.25)] transition-all cursor-default"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}