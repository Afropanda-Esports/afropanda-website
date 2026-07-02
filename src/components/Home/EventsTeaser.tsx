import { Link } from "react-router-dom";
import FadeReveal from "../FadeReveal";
import { ArrowRight } from "lucide-react";

export default function EventsTeaser() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-alt)] py-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,107,1,0.5) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto flex max-w-8xl flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <FadeReveal className="max-w-xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--n50)] px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Our Tournaments
            </p>
          </div>
          <h2 className="heading-md text-[var(--text-primary)]">
            From brackets to ambassador cohorts
          </h2>
          <p className="mt-3 text-base text-[var(--text-secondary)] font-body">
            Explore past tournaments and programs in one place.
          </p>
        </FadeReveal>
        <FadeReveal delay={0.06}>
          <Link
            to="/events"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-brand-orange px-7 text-sm font-semibold text-white transition-all hover:shadow-glow active:scale-[0.98]"
          >
            View all events
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeReveal>
      </div>
    </section>
  );
}
