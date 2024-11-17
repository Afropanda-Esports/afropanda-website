interface SectionHeaderProps {
  sectionHeader: string;
  subSectionHeader: string;
  headerDescription?: string;
}

export default function SectionHeader({
  sectionHeader,
  subSectionHeader,
  headerDescription,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <p className="text-sm text-[#CC5500]  mb-2">
        {subSectionHeader}
      </p>
      <h2 className="text-4xl font-bold text-white mb-4">{sectionHeader}</h2>
      <div className="w-16 h-1 bg-[#CC5500] mx-auto mb-6"></div>
      <p className="text-[#a5a5ac] max-w-2xl mx-auto">{headerDescription}</p>
    </div>
  );
}
