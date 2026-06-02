import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { VALUES } from "@/lib/portfolio-data";

const BIO = "Hi, I'm Faarid. A full stack developer obsessed with shipping MVPs fast. I help founders go from idea → deployed product in weeks, not months. Specialties: AI-powered apps, SaaS dashboards, e-commerce, and automation.";

function Terminal() {
  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        setStarted(true);
        let i = 0;
        const id = setInterval(() => {
          i++;
          setText(BIO.slice(0, i));
          if (i >= BIO.length) clearInterval(id);
        }, 18);
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  return (
    <div ref={ref} className="bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e1e1e] bg-[#111]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-lime" />
        <span className="ml-3 font-mono text-xs text-mist">faarid@portfolio ~ %</span>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed min-h-[260px]">
        <div className="text-lime mb-2">$ cat about.txt</div>
        <div className="text-white/90">
          {text}
          <span className="inline-block w-2 h-4 bg-lime ml-1 align-middle cursor-blink" />
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <Terminal />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#141414] p-6 rounded-lg border-l-2 border-transparent hover:border-lime hover:bg-[#181818] transition-all duration-300"
            >
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{v.title}</h3>
              <p className="text-mist text-sm leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}