import { Link } from "react-router-dom";
import { features } from "../../constant";
import FadeReveal from "../FadeReveal";
import { ArrowRight } from "lucide-react";

const featureLinks = ["/#services", "/ambassador", "/events"] as const;
const accentColors = [
  "from-brand-orange/20 via-brand-orange/5",
  "from-brand-orange/15 via-brand-orange/5",
  "from-brand-orange/10 via-brand-orange/5",
];

export default function FeaturedCards() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)] py-24 md:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <FadeReveal className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Identity
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">
            We Are <span className="text-brand-orange">AfroPanda</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 font-body">
            Competition, community, and culture   all built for Africa.
          </p>
        </FadeReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FadeReveal key={index} delay={index * 0.08} className="h-full">
              <Link
                to={featureLinks[index]}
                className="group relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-3xl bg-neutral-50 border border-neutral-100 transition-all duration-500 hover:shadow-cardhover"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Orange accent line */}
                <div className={`absolute inset-0 bg-gradient-to-br ${accentColors[index]} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 mt-auto p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    {feature.subtitle}
                  </p>
                  <h3 className="mt-2 heading-md text-white">
                    {feature.title}
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-all group-hover:text-brand-orange group-hover:gap-3">
                    {feature.buttonText}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
