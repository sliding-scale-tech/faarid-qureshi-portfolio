import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/portfolio-data";

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  const initials = t.name
    .split(" ")
    .map((s) => s[0])
    .join("");
  return (
    <div className="shrink-0 w-[340px] sm:w-[380px] bg-[#111] border border-[#1e1e1e] rounded-[12px] p-6 transition-all duration-300 hover:border-[rgba(170,255,69,0.5)] hover:-translate-y-1">
      <div className="font-display text-6xl text-lime leading-none mb-2">“</div>
      <p className="text-mist text-sm leading-[1.7]">{t.quote}</p>
      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[#1e1e1e]">
        <div className="w-10 h-10 rounded-full bg-lime text-black font-display font-extrabold flex items-center justify-center text-sm">
          {initials}
        </div>
        <div>
          <div className="text-white text-sm font-semibold">{t.name}</div>
          <div className="text-mist text-xs">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-12"
        >
          What Clients Say<span className="text-lime">.</span>
        </motion.h2>

        <div
          className="group relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex gap-6 w-max marquee-track group-hover:[animation-play-state:paused]">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <Card key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}