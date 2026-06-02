import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="work" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white mb-14"
        >
          Recent <span className="text-lime">Projects</span>
          <span className="text-lime">.</span>
        </motion.h2>

        {/* Replace with real project data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative bg-[#111] border border-[#1e1e1e] rounded-[10px] overflow-hidden transition-all duration-300 hover:border-[rgba(170,255,69,0.4)] hover:shadow-[0_0_40px_rgba(170,255,69,0.15)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <div className="relative h-[220px] overflow-hidden bg-[#0d0d0d]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
                <div className="absolute bottom-3 left-4 font-mono text-xs text-lime/90">
                  0{i + 1} / 0{PROJECTS.length}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-white text-base">{p.title}</h3>
                    <p className="text-mist text-[13px] mt-1">{p.desc}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-lime opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2 py-1 bg-[#1a1a1a] text-mist rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <a
            href="https://contra.com/faarid_qureshi_oc408zpd/work?r=ruhan_ahmed_c9ymo98o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-lime text-lime px-7 py-3 font-semibold transition-all hover:bg-lime hover:text-black"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}