import type { CSSProperties } from "react";
import { Search, Trophy, Users, Video } from "lucide-react";
import FadeReveal from "../../FadeReveal";
import SectionHeader from "../../SectionHeader";

const layoutSpan = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
] as const;

function Services() {
  const services = [
    {
      id: 1,
      icon: Trophy,
      title: "Competition & events",
      description:
        "From qualifiers to finals-night electricity—we shape brackets, stages, and storylines where rivalries breathe and upsets feel inevitable.",
      features: ["Multi-title ladders", "Show-ready broadcasts", "Prize arcs that land"],
    },
    {
      id: 2,
      icon: Users,
      title: "Squad building",
      description:
        "More than rosters on a page—rhythm in practice rooms, sponsor-ready polish, and the long-game energy crews need to level together.",
      features: ["Skill reps that stick", "Brand-ready squads", "Career runway"],
    },
    {
      id: 3,
      icon: Video,
      title: "Live streams",
      description:
        "Turn scrims and grudge matches into watch parties—crisp overlays, voices that hype the moment, and a flow chat actually wants to spam.",
      features: ["Casters who get it", "Every screen, covered", "Runs that don’t choke"],
    },
    {
      id: 4,
      icon: Search,
      title: "Talent radar",
      description:
        "Chasing the names you’ll swear you spotted first—instinct, film, and real conversations with players quietly rewriting the meta.",
      features: ["Grassroots sightings", "Gut-check evals", "Mentor loops"],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#111017] py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#CC5500]/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-[#7c3aed]/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(115deg,transparent_40%,rgba(204,85,0,0.15)_50%,transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionHeader="What we actually build"
          subSectionHeader="How we show up"
          headerDescription="We dream up brackets, broadcasts, and culture beats where African players get their shine—moments you rewind, argue about, and queue for again."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const span = layoutSpan[index];
            const accentRotate =
              index === 0 ? "-rotate-1" : index === 3 ? "rotate-1" : "";

            return (
              <FadeReveal
                key={service.id}
                delay={index * 0.08}
                className={`min-h-0 h-full ${span}`}
              >
                <div
                  className={`group relative flex h-full min-h-[280px] flex-col gap-5 overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.055] via-[#16131f]/90 to-[#0c0b11] p-7 shadow-2xl shadow-black/50 transition duration-500 ease-out before:pointer-events-none before:absolute before:inset-0 before:rounded-[2rem] before:bg-[radial-gradient(800px_circle_at_var(--tx,20%)_-10%,rgba(204,85,0,0.14),transparent_55%)] before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100 md:min-h-[300px] md:p-8 ${accentRotate} hover:-translate-y-1 hover:border-[#CC5500]/20 hover:shadow-[#CC5500]/[0.08]`}
                  style={
                    {
                      "--tx": `${20 + index * 22}%`,
                    } as CSSProperties
                  }
                >
                  <span
                    className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-[clamp(4.5rem,14vw,7.5rem)] font-bold leading-none tracking-tighter text-white/[0.04] transition duration-500 group-hover:text-[#CC5500]/[0.07]"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="absolute left-0 top-10 hidden h-20 w-1 rounded-full bg-gradient-to-b from-[#CC5500] to-[#CC5500]/20 md:block"
                    aria-hidden
                  />

                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#CC5500]/25 bg-[#CC5500]/[0.12] text-copy shadow-inner shadow-black/20 transition duration-500 group-hover:scale-105 group-hover:border-[#CC5500]/45 group-hover:shadow-[0_0_24px_rgba(204,85,0,0.15)]">
                    <Icon className="h-6 w-6 transition duration-500 group-hover:-rotate-6" />
                  </div>

                  <div className="relative min-w-0 flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-copy md:text-[1.35rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-copy/90 md:text-[0.9375rem] md:leading-8">
                      {service.description}
                    </p>
                  </div>

                  <ul className="relative mt-auto flex flex-wrap gap-2 pt-1">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-medium text-copy/95 backdrop-blur-sm transition duration-300 group-hover:border-[#CC5500]/20"
                      >
                        <span
                          className="h-1 w-1 shrink-0 rotate-45 bg-[#CC5500]"
                          aria-hidden
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Services };
