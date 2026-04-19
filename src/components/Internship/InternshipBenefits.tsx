import { motion } from "framer-motion";
import { Award, Book, Network, Rocket, Users, Trophy } from "lucide-react";
import SectionHeader from "../SectionHeader";

const benefitsData = [
  {
    icon: Book,
    title: "Mentorship that shows up",
    description:
      "Weekly touchpoints, workshops, and direct feedback from people who ship for a living—not slideshows for the sake of it.",
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
      "Certificates, shout-outs, and—when you earn it—gear, stipends, and stage time.",
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
    <section className="bg-[#191825] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          subSectionHeader="Why us"
          sectionHeader="More than a line on a résumé"
          headerDescription="We optimize for growth you can feel—skills, relationships, and stories you will still be telling years from now."
        />

        <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group flex gap-5 border-l border-white/10 pl-6"
            >
              <benefit.icon
                className="mt-0.5 h-5 w-5 shrink-0 text-[#CC5500]/80 transition group-hover:text-[#CC5500]"
                strokeWidth={1.5}
              />
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-copy">
                  {benefit.title}
                </h3>
                <p className="font-maitree text-sm leading-relaxed text-copy/70 md:text-base">
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
          className="mx-auto mt-20 max-w-2xl text-center font-maitree text-base leading-relaxed text-copy/60 md:text-lg"
        >
          If you want a predictable internship brochure, we are probably not
          your fit. If you want receipts from building something people feel—we
          should talk.
        </motion.p>
      </div>
    </section>
  );
}
