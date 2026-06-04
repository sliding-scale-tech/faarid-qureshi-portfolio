import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Overview" },
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Let's Connect", cta: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = ["about", "work", "skills", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive("#" + id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#0a0a0a]/70 border-b border-[rgba(170,255,69,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-extrabold text-lime text-xl tracking-[0.15em]">
          Faarid Qureshi
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href;
            if (l.cta) {
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="ml-2 inline-flex items-center rounded-full bg-lime px-4 py-2 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(170,255,69,0.55)]"
                  >
                    {l.label}
                  </a>
                </li>
              );
            }
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-lime" : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-3 right-3 bottom-1 h-[2px] bg-lime transition-transform origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#1e1e1e] bg-[#0a0a0a]/95 backdrop-blur-md">
          <ul className="flex flex-col py-4 px-6 gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                className={
                  l.cta
                    ? "mt-2 inline-block rounded-full bg-lime px-4 py-2 text-sm font-semibold text-black"
                    : "block py-2 text-white/80 hover:text-lime"
                }
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}