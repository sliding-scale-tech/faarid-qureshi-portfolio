import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Globe } from "lucide-react";
import { BackgroundGrid } from "./BackgroundGrid";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <BackgroundGrid intense />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" aria-hidden />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05]"
        >
          Let's Build Something<br />
          <span className="text-lime text-glow">Fast.</span>
        </motion.h2>
        <p className="text-mist mt-6 text-lg max-w-xl mx-auto">
          Have an idea? I'll help you ship it. Reach out and let's talk.
        </p>
        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href="mailto:faaridqureshi@gmail.com"
            className="inline-block bg-lime text-black font-bold text-lg px-12 py-4 transition-all hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(170,255,69,0.7)]"
          >
            Send Me a Message
          </a>
          <a
            href="mailto:faaridqureshi@gmail.com"
            className="inline-flex items-center gap-2 text-mist hover:text-lime transition-colors font-mono text-sm"
          >
            <Mail size={16} />
            faaridqureshi@gmail.com
          </a>
          <div className="flex gap-5 mt-2">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Globe, href: "#", label: "Contra" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-11 h-11 rounded-full border border-[#2a2a2a] flex items-center justify-center text-white/70 hover:border-lime hover:text-lime transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}