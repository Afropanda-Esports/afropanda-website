import { aboutItems, stats } from "../../../constant";
import { AboutItemCard } from "./AboutItemCard";
import FadeReveal from "../../FadeReveal";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#111017] py-12">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-last grid grid-cols-1 items-stretch gap-6 md:order-none md:grid-cols-2">
            {aboutItems.map((item, index) => (
              <FadeReveal key={index} delay={index * 0.06} className="h-full">
                <AboutItemCard item={item} />
              </FadeReveal>
            ))}
          </div>

          <div className="space-y-8">
            <FadeReveal>
              <div className="flex items-center gap-3">
                <span className="inline-block h-px w-10 bg-[#CC5500]" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copy">
                  Who we are
                </p>
              </div>
            </FadeReveal>

            <FadeReveal>
              <h2 className="text-4xl font-semibold text-copy md:text-5xl">
                Level up the African gaming ecosystem with us.
              </h2>
            </FadeReveal>

            <FadeReveal delay={0.08}>
              <p className="text-lg leading-8 text-copy">
                AfroPanda Esports is committed to developing esports in Africa,
                nurturing world-class talents, and promoting gaming as a respected
                profession.
              </p>
            </FadeReveal>

            <FadeReveal delay={0.12}>
              <p className="leading-8 text-copy">
                Our mission is to create opportunities for African gamers to
                compete at the highest levels while building a sustainable esports
                ecosystem.
              </p>
            </FadeReveal>

            <FadeReveal delay={0.18} className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <h3 className="text-2xl font-semibold text-copy">{stat.number}</h3>
                  <p className="mt-2 text-sm text-copy">{stat.label}</p>
                </div>
              ))}
            </FadeReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
