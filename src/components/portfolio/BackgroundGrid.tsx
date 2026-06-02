export function BackgroundGrid({ intense = false }: { intense?: boolean }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${intense ? "bg-grid-intense opacity-100" : "bg-grid opacity-40"}`}
      style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 85%)" }}
    />
  );
}