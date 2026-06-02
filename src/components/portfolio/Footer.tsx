const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] py-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display font-extrabold text-lime tracking-[0.15em]">Faarid Qureshi</div>
        <p className="text-mist text-xs text-center">
          © 2025 Faarid Qureshi · Built with Next.js & deployed on Vercel.
        </p>
        <ul className="flex gap-5 text-xs">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-mist hover:text-lime transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}