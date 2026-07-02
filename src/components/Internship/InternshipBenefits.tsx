import { motion } from "framer-motion";
import { Award, Book, Network, Rocket, Users, Trophy } from "lucide-react";

const benefitsData = [
  {
    icon: Book,
    title: "Mentorship that shows up",
    description:
      "Weekly touchpoints, workshops, and direct feedback from people who ship for a living not slideshows for the sake of it.",
  },
  {
    icon: Network,
    title: "A network you can use",
    description:
      "Introductions to operators, creators, and founders who care about the same patch of the map you do.",
  },
  {
    icon: Rocket,
    title: "Momentum toward hire",
    description:
      "Strong interns often stay; we design the work so your trajectory is visible early.",
  },
  {
    icon: Trophy,
    title: "Recognition that travels",
    description:
      "Certificates, shout-outs, and when you earn it gear, stipends, and stage time.",
  },
  {
    icon: Users,
    title: "Culture over hierarchy",
    description:
      "Small teams, loud ideas, and room to fail forward as long as you learn out loud.",
  },
  {
    icon: Award,
    title: "Proof for the next door",
    description:
      "Letters and portfolio-worthy work you can point to when someone asks what you actually did.",
  },
];

export default function InternshipBenefits() {
  return (
    <section className="bg-neutral-50 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-8xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Why Us
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">More than a line on a résumé</h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 font-body">
            We optimize for growth you can feel skills, relationships, and stories
            you will still be telling years from now.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group flex gap-6 border-l-2 border-neutral-100 pl-6 transition-all hover:border-brand-orange"
            >
              <benefit.icon
                className="mt-1 h-5 w-5 shrink-0 text-brand-orange/60 transition-all group-hover:text-brand-orange group-hover:scale-110"
                strokeWidth={1.5}
              />
              <div className="space-y-2">
                <h3 className="heading-sm !text-lg text-[var(--text-primary)]">{benefit.title}</h3>
                <p className="text-sm leading-7 text-neutral-500 font-body md:text-base">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-20 max-w-2xl text-center text-base leading-7 text-neutral-400 font-body md:text-lg"
        >
          If you want a predictable internship brochure, we are probably not
          your fit. If you want receipts from building something people feel we
          should talk.
        </motion.p>
      </div>
    </section>
  );
}
