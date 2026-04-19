import { Link } from "react-router-dom";
import { Briefcase, Sparkles } from "lucide-react";
import FadeReveal from "../FadeReveal";

const pathways = [
  {
    to: "/internship",
    icon: Briefcase,
    kicker: "Internship",
    title: "Build the stack behind the stage",
    description:
      "Hybrid tracks across product, content, community, and ops—real deadlines, real mentors, proof you can show later.",
    cta: "View open tracks",
  },
  {
    to: "/ambassador",
    icon: Sparkles,
    kicker: "Ambassadors",
    title: "Carry the energy into every lobby",
    description:
      "Lead watch parties, grow your corner of the scene, and earn perks for how you already show up for African esports.",
    cta: "See how to join",
  },
] as const;

export default function JoinPathways() {
  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-[#191825] py-16 md:py-24"
      aria-labelledby="join-pathways-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(204,85,0,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(204,85,0,0.9)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeReveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-block h-px w-10 bg-[#CC5500]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copy/80">
              Get involved
            </p>
            <span className="inline-block h-px w-10 bg-[#CC5500]" />
          </div>
          <h2
            id="join-pathways-heading"
            className="mt-4 text-3xl font-semibold leading-tight text-copy md:text-4xl md:leading-tight"
          >
            Two doors in—
            <span className="text-copy/45"> pick the one that fits your grind.</span>
          </h2>
          <p className="mt-4 font-maitree text-base leading-relaxed text-copy/70 md:text-lg">
            Whether you want to ship work with us or rally players where you
            already spend time, start here.
          </p>
        </FadeReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {pathways.map((item, index) => (
            <FadeReveal key={item.to} delay={index * 0.08} className="h-full">
              <Link
                to={item.to}
                className="group flex h-full min-h-[280px] flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-[#CC5500]/45 hover:bg-white/[0.05] md:min-h-[300px] md:p-10"
              >
                <item.icon
                  className="h-9 w-9 text-[#CC5500]/90 transition group-hover:scale-105"
                  strokeWidth={1.35}
                  aria-hidden
                />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#CC5500]">
                  {item.kicker}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug text-copy md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 font-maitree text-sm leading-relaxed text-copy/75 md:text-base">
                  {item.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#CC5500] transition group-hover:gap-3">
                  {item.cta}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </FadeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
