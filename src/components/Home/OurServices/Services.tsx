import { Search, Trophy, Users, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeReveal from "../../FadeReveal";

const services = [
  {
    id: 1,
    icon: Trophy,
    title: "Competition & Events",
    description:
      "From qualifiers to finals-night electricity we shape brackets, stages, and storylines where rivalries breathe and upsets feel inevitable.",
    features: ["Multi-title ladders", "Show-ready broadcasts", "Prize arcs that land"],
    link: "/events",
  },
  {
    id: 2,
    icon: Users,
    title: "Squad Building",
    description:
      "More than rosters on a page rhythm in practice rooms, sponsor-ready polish, and the long-game energy crews need to level together.",
    features: ["Skill reps that stick", "Brand-ready squads", "Career runway"],
    link: "/ambassador",
  },
  {
    id: 3,
    icon: Video,
    title: "Live Streams",
    description:
      "Turn scrims and grudge matches into watch parties crisp overlays, voices that hype the moment, and a flow chat actually wants to spam.",
    features: ["Casters who get it", "Every screen covered", "Runs that don't choke"],
    link: "/events",
  },
  {
    id: 4,
    icon: Search,
    title: "Talent Radar",
    description:
      "Chasing the names you will swear you spotted first instinct, film, and real conversations with players quietly rewriting the meta.",
    features: ["Grassroots sightings", "Gut-check evals", "Mentor loops"],
    link: "/ambassador",
  },
];

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[var(--surface)] py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-brand-orange/[0.04] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-brand-orange/[0.03] blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <FadeReveal className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              How We Show Up
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">
            What We <span className="text-brand-orange">Actually Build</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 font-body">
            We dream up brackets, broadcasts, and culture beats where African
            players get their shine moments you rewind, argue about, and queue for again.
          </p>
        </FadeReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeReveal key={service.id} delay={index * 0.06} className="h-full">
                <Link
                  to={service.link}
                  className="group relative flex h-full flex-col rounded-3xl border border-neutral-100 bg-[var(--surface)] p-8 shadow-soft transition-all duration-300 hover:shadow-card hover:border-brand-orange/20"
                >
                  {/* Number accent */}
                  <span className="absolute right-6 top-6 text-[clamp(3rem,8vw,5rem)] font-bold leading-none text-neutral-100 transition-colors duration-300 group-hover:text-brand-orange/10" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-orange/20 bg-brand-orange/5 text-brand-orange transition-all duration-300 group-hover:bg-brand-orange/10 group-hover:scale-105 group-hover:shadow-glow">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  <h3 className="heading-sm !text-2xl text-[var(--text-primary)] relative">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-600 font-body relative">
                    {service.description}
                  </p>

                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-100 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors group-hover:border-brand-orange/20 group-hover:bg-brand-orange/5"
                      >
                        <span className="h-1 w-1 rounded-full bg-brand-orange" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-6 pt-4 border-t border-neutral-100">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-400 transition-colors group-hover:text-brand-orange">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </FadeReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Services };
