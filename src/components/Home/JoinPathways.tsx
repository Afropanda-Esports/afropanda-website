import { Link } from "react-router-dom";
import { Briefcase, Sparkles, ArrowRight } from "lucide-react";
import FadeReveal from "../FadeReveal";

const pathways = [
  {
    to: "/internship",
    icon: Briefcase,
    kicker: "Internship",
    title: "Build the stack behind the stage",
    description:
      "Hybrid tracks across product, content, community, and ops real deadlines, real mentors, proof you can show later.",
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
    <section className="relative overflow-hidden bg-[var(--surface-alt)] py-24 md:py-32">
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,107,1,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,1,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <FadeReveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--n50)] px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Get Involved
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">
            Two doors in 
            <span className="text-neutral-400"> pick the one that fits your grind.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)] font-body max-w-xl mx-auto">
            Whether you want to ship work with us or rally players where you
            already spend time, start here.
          </p>
        </FadeReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {pathways.map((item, index) => (
            <FadeReveal key={item.to} delay={index * 0.08} className="h-full">
              <Link
                to={item.to}
                className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--n50)] p-10 transition-all duration-500 hover:border-brand-orange/30 hover:bg-[var(--n100)]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand-orange/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <item.icon className="h-10 w-10 text-brand-orange transition-all duration-300 group-hover:scale-110" strokeWidth={1.35} aria-hidden />

                <div className="mt-auto">
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
                    {item.kicker}
                  </p>
                  <h3 className="mt-3 heading-md text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] font-body max-w-md">
                    {item.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-all group-hover:gap-3">
                    {item.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
