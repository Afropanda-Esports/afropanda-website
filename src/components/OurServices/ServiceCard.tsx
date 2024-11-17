import { ReactNode } from "react";

interface TalentScouting {
  id: number;
  icon: ReactNode; // Represents the JSX element for the icon
  title: string;
  description: string;
  features: string[]; // Array of strings for features
}

interface ServiceCardProp {
  service: TalentScouting;
}

export default function ServiceCard({ service }: ServiceCardProp) {
  return (
    <div key={service.id} className="bg-[#222035] rounded-lg p-6 ">
      {/* Icon */}
      <div className="mb-6">
        <div
          className="w-12 h-12 rounded-full bg-[#191825] flex items-center 
                  justify-center group-hover:bg-[#865DFF] transition-colors duration-300 
                  text-[#CC5500] group-hover:text-white"
        >
          {service.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>

      {/* Description */}
      <p className="text-[#a5a5ac] mb-6 text-sm">{service.description}</p>

      {/* Features List */}
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-[#a5a5ac]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#CC5500] mr-2"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
