import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";
import { BackgroundGrid } from "./BackgroundGrid";

const GithubIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 18} height={p.size ?? 18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = (p: { size?: number }) => (
  <svg width={p.size ?? 18} height={p.size ?? 18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

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
              { icon: GithubIcon, href: "#", label: "GitHub" },
              { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
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