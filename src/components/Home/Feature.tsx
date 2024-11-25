import { Link } from "react-router-dom";
import { features } from "../../constant";
import SectionHeader from "../SectionHeader";
import { Gamepad2, Gamepad } from "lucide-react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
}

const FeatureCard = ({
  title,
  subtitle,
  image,
  buttonText,
}: FeatureCardProps) => (
  <div className="relative overflow-hidden rounded-2xl group">
    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-[600px] object-cover object-center transform "
    />

    {/* Content overlay */}
    <div className="absolute inset-0 flex flex-col justify-between p-8 z-20">
      <div>
        <p className="text-gray-200 text-sm">{subtitle}</p>
        <h2 className="text-white text-xl font-bold">{title}</h2>
      </div>

      <Link to="/about">
        <p
          className="inline-block w-fit bg-white text-black px-6 py-2 rounded-full font-medium 
                 hover:bg-gray-100 transition-colors duration-300"
        >
          {buttonText}
        </p>
      </Link>
    </div>
  </div>
);

export default function FeaturedCards() {
  return (
    <section className="relative bg-[#191825] py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 rotate-45 border-4 border-[#CC5500] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rotate-12 border-4 border-[#CC5500] animate-pulse" />
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Gamepad className="w-8 h-8 text-[#CC5500] mr-4 animate-pulse" />
          <SectionHeader
            sectionHeader="WE ARE AFROPANDA"
            // subSectionHeader="What's Coming Up"
          />
          <Gamepad2 className="w-8 h-8 text-[#CC5500] ml-4 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              image={feature.image}
              buttonText={feature.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
