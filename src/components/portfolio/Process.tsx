import { motion } from "framer-motion";
import { Search, LayoutDashboard, Rocket, ShieldCheck, LifeBuoy } from "lucide-react";

const STEPS = [
  {
    title: "Clarity Engine",
    desc: "1-on-1 product discovery with a global product builder.",
    Icon: Search,
  },
  {
    title: "Conversion First-UX",
    desc: "High-performance design built for real users.",
    Icon: LayoutDashboard,
  },
  {
    title: "Rocket Launch",
    desc: "Structured, high-velocity product model execution to take your product from idea to a scalable system.",
    Icon: Rocket,
  },
  {
    title: "Bulletproof QA",
    desc: "Rigorous pre-launch testing, edge-case handling.",
    Icon: ShieldCheck,
  },
  {
    title: "Momentum Support",
    desc: "Active maintenance and Go-live support.",
    Icon: LifeBuoy,
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 px-6 lg:px-10 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] blob"
        style={{ background: "radial-gradient(circle, rgba(170,255,69,0.12), transparent 60%)", filter: "blur(90px)" }}
      />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-lime mb-3">// How I Work</p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white">
            Development Process<span className="text-lime">.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Center vertical line */}
          <div
            aria-hidden
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-lime/40 to-transparent"
          />
          {/* Mobile left line */}
          <div
            aria-hidden
            className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lime/40 to-transparent"
          />

          <div className="space-y-12 md:space-y-20">
            {STEPS.map((s, i) => {
              const isLeft = i % 2 === 0;
              const { Icon } = s;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  {/* Center node (desktop) */}
                  <div
                    aria-hidden
                    className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <div className="relative w-4 h-4 rounded-full bg-lime shadow-[0_0_24px_rgba(170,255,69,0.7)]">
                      <div className="absolute inset-0 rounded-full bg-lime/40 animate-ping" />
                    </div>
                  </div>

                  {/* Mobile node */}
                  <div
                    aria-hidden
                    className="md:hidden absolute left-6 top-8 -translate-x-1/2 z-10"
                  >
                    <div className="w-3 h-3 rounded-full bg-lime shadow-[0_0_18px_rgba(170,255,69,0.7)]" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`pl-14 md:pl-0 ${
                      isLeft ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div
                      className={`group relative inline-block max-w-md p-6 bg-[#111111] border border-[#2a2a2a] rounded-xl hover:border-lime/60 hover:shadow-[0_0_30px_rgba(170,255,69,0.15)] transition-all ${
                        isLeft ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-lime/10 border border-lime/30 text-lime group-hover:bg-lime/20 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs text-lime/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                        {s.title}
                      </h3>
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}