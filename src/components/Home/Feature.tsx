import { Link } from "react-router-dom";
import { features } from "../../constant";
import SectionHeader from "../SectionHeader";
import FadeReveal from "../FadeReveal";

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
  <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111017] via-[#111017]/40 to-transparent" />
    <img
      src={image}
      alt={title}
      className="h-[520px] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
      loading="lazy"
    />

    <div className="absolute inset-0 z-20 flex flex-col justify-between p-8">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-copy">{subtitle}</p>
        <h2 className="mt-3 text-2xl font-semibold text-copy">{title}</h2>
      </div>

      <Link to="/#services">
        <p className="inline-block w-fit rounded-full border border-white/20 bg-white px-6 py-2.5 font-medium text-copy transition-colors duration-300 hover:bg-[#f0e8e2] hover:text-[#CC5500]">
          {buttonText}
        </p>
      </Link>
    </div>
  </div>
);

export default function FeaturedCards() {
  return (
    <section className="relative overflow-hidden bg-[#111017] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeReveal className="mb-8">
          <SectionHeader sectionHeader="WE ARE AFROPANDA" />
        </FadeReveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <FadeReveal key={index} delay={index * 0.08}>
              <FeatureCard
                title={feature.title}
                subtitle={feature.subtitle}
                image={feature.image}
                buttonText={feature.buttonText}
              />
            </FadeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
