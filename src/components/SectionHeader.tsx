import FadeReveal from "./FadeReveal";

interface SectionHeaderProps {
  sectionHeader?: string;
  subSectionHeader?: string;
  headerDescription?: string;
  light?: boolean;
}

export default function SectionHeader({
  sectionHeader,
  subSectionHeader,
  headerDescription,
  light,
}: SectionHeaderProps) {
  const textColor = light ? "text-white" : "text-neutral-900";
  const mutedColor = light ? "text-white/60" : "text-neutral-500";
  const descColor = light ? "text-white/70" : "text-neutral-600";

  return (
    <FadeReveal className="mb-14 text-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
        {subSectionHeader ? (
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${mutedColor}`}>
              {subSectionHeader}
            </p>
          </div>
        ) : null}

        {sectionHeader ? (
          <h2 className={`heading-lg ${textColor}`}>
            {sectionHeader}
          </h2>
        ) : null}

        {headerDescription ? (
          <p className={`max-w-2xl text-base leading-7 ${descColor} font-body`}>
            {headerDescription}
          </p>
        ) : null}
      </div>
    </FadeReveal>
  );
}
