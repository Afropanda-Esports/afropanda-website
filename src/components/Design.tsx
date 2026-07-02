export const SectionGlow = () => (
  <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-brand-orange/5 blur-3xl" aria-hidden />
);

export const CornerGlow = () => (
  <>
    <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-orange/5 blur-3xl" aria-hidden />
    <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-brand-orange/5 blur-3xl" aria-hidden />
  </>
);

export const Divider = ({ light }: { light?: boolean }) => (
  <div className={`h-px w-full ${light ? "bg-white/10" : "bg-neutral-100"}`} />
);

export const OrangeAccent = ({ className = "" }: { className?: string }) => (
  <span className={`inline-block h-1 w-12 rounded-full bg-brand-orange ${className}`} />
);
