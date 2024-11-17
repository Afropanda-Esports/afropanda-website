interface AboutItemCardProps {
  icon: string;
  title: string;
}

interface AboutItemCardP {
  item: AboutItemCardProps;
}

export default function AboutItemCard({ item }: AboutItemCardP) {
  return (
    <div className="bg-[#222035] flex flex-col items-center text-center justify-center p-6 rounded-xl space-y-6">
      <img src={item.icon} alt="About" />
      <h3 className="text-base text-white mb-2">{item.title}</h3>
    </div>
  );
}
