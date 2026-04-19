import FadeReveal from "./FadeReveal";

interface SectionHeaderProps {
  sectionHeader?: string;
  subSectionHeader?: string;
  headerDescription?: string;
}

export default function SectionHeader({
  sectionHeader,
  subSectionHeader,
  headerDescription,
}: SectionHeaderProps) {
  return (
    <FadeReveal className="mb-12 text-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
        {subSectionHeader ? (
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#CC5500]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copy">
              {subSectionHeader}
            </p>
            <span className="h-px w-8 bg-[#CC5500]" />
          </div>
        ) : null}

        {sectionHeader ? (
          <h2 className="text-4xl font-semibold text-copy md:text-5xl">
            {sectionHeader}
          </h2>
        ) : null}

        {headerDescription ? (
          <p className="max-w-2xl text-base leading-8 text-copy">
            {headerDescription}
          </p>
        ) : null}
      </div>
    </FadeReveal>
  );
}
