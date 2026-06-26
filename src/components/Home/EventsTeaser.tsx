import { Link } from "react-router-dom";
import FadeReveal from "../FadeReveal";

export default function EventsTeaser() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#111017] py-10">
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <FadeReveal className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-[#CC5500]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copy">
              Our tournaments
            </p>
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-copy md:text-3xl">
            From brackets to ambassador cohorts
          </h2>
          <p className="mt-2 text-sm text-copy md:text-base">
            Explore past tournaments and programs in one place.
          </p>
        </FadeReveal>
        <FadeReveal delay={0.06}>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 rounded-full border border-[#CC5500]/50 bg-[#CC5500]/10 px-6 py-3 text-sm font-semibold tracking-wide text-copy transition-colors hover:border-[#CC5500] hover:bg-[#CC5500]/20 hover:text-[#CC5500]"
          >
            View all events
            <span aria-hidden>→</span>
          </Link>
        </FadeReveal>
      </div>
    </section>
  );
}
