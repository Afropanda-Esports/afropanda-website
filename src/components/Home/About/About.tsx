import { aboutItems, stats } from "../../../constant";
import { AboutItemCard } from "./AboutItemCard";
import FadeReveal from "../../FadeReveal";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left - Content */}
          <div className="space-y-8">
            <FadeReveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                  Who We Are
                </p>
              </div>
            </FadeReveal>

            <FadeReveal>
              <h2 className="heading-lg text-[var(--text-primary)]">
                Level up the African <span className="text-brand-orange">gaming ecosystem</span> with us.
              </h2>
            </FadeReveal>

            <FadeReveal delay={0.08}>
              <p className="text-lg leading-8 text-neutral-600 font-body">
                AfroPanda Esports is committed to developing esports in Africa,
                nurturing world-class talents, and promoting gaming as a respected
                profession.
              </p>
            </FadeReveal>

            <FadeReveal delay={0.12}>
              <p className="text-base leading-8 text-neutral-500 font-body">
                Our mission is to create opportunities for African gamers to
                compete at the highest levels while building a sustainable esports
                ecosystem.
              </p>
            </FadeReveal>

            <FadeReveal delay={0.18} className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-neutral-100 bg-[var(--surface)] p-6"
                >
                  <h3 className="heading-sm !text-2xl text-[var(--text-primary)]">{stat.number}</h3>
                  <p className="mt-1 text-sm text-neutral-500 font-body">{stat.label}</p>
                </div>
              ))}
            </FadeReveal>
          </div>

          {/* Right - Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {aboutItems.map((item, index) => (
              <FadeReveal key={index} delay={index * 0.06} className="h-full">
                <AboutItemCard item={item} index={index} />
              </FadeReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
