import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { BackgroundGrid } from "./BackgroundGrid";
import { TECH_MARQUEE } from "@/lib/portfolio-data";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-10 overflow-hidden">
      <BackgroundGrid intense />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.3em] uppercase text-lime/80 mb-6"
          >
            // Full Stack MVP Developer
          </motion.p>
          <h1 className="font-display font-extrabold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl">
            <motion.span initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0)" }} transition={{ duration: 0.6, delay: 0.05 }} className="block text-white">
              Deploying
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0)" }} transition={{ duration: 0.6, delay: 0.2 }} className="block text-lime text-glow">
              MVPs
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0)" }} transition={{ duration: 0.6, delay: 0.35 }} className="block text-white">
              within Weeks
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-mist max-w-xl text-base sm:text-lg leading-relaxed"
          >
            Turning ideas into production-ready products within weeks
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-lime text-black px-7 py-4 font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(170,255,69,0.55)]"
            >
              View My Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white text-white px-7 py-4 font-semibold transition-all duration-200 hover:bg-lime hover:text-black hover:border-lime"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: 15, s: "+", l: "MVPs Deployed" },
              { n: 3, s: "+", l: "Years Building" },
              { n: 10, s: "+", l: "Happy Clients" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-extrabold text-3xl text-lime">
                  <CountUp to={s.n} suffix={s.s} />
                </div>
                <div className="text-xs text-mist mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - 3D rotating monogram */}
        <div className="relative h-[420px] lg:h-[520px] flex items-center justify-center" style={{ perspective: 1000 }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full blob" style={{
              background: "radial-gradient(circle, rgba(170,255,69,0.35), transparent 70%)",
              filter: "blur(40px)",
            }} />
          </div>
          <div className="float-mesh">
            <div className="spin-mesh">
              <div
                className="font-display font-extrabold text-[8rem] sm:text-[10rem] text-lime text-glow select-none"
                style={{ textShadow: "0 0 40px rgba(170,255,69,0.7), 0 0 80px rgba(170,255,69,0.4)" }}
              >
                {"<FQ/>"}
              </div>
            </div>
          </div>
          {/* floating code cards */}
          <div className="absolute top-4 right-4 hidden md:block rotate-6 bg-[#111] border border-[#1e1e1e] rounded-lg p-3 font-mono text-[10px] text-mist shadow-2xl">
            <div className="text-lime">const ship = async ()</div>
            <div>{`  await deploy('mvp')`}</div>
          </div>
          <div className="absolute bottom-8 left-2 hidden md:block -rotate-6 bg-[#111] border border-[#1e1e1e] rounded-lg p-3 font-mono text-[10px] text-mist shadow-2xl">
            <div className="text-lime">{`{ status: 'deployed' }`}</div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-[#1e1e1e] py-5">
        <div className="flex marquee-track gap-16 whitespace-nowrap">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((t, i) => (
            <span
              key={i}
              className="font-display font-bold text-2xl text-white/30 hover:text-lime transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}