import { motion } from "framer-motion";
import { Code, VideoIcon, PenTool, ChartBar, Users, Globe } from "lucide-react";

const internshipRoles = [
  {
    icon: Code,
    title: "Software development",
    description:
      "Platforms, tooling, and the glue between players and broadcasts React, TypeScript, and whatever keeps the stack honest.",
    skills: ["React / Next", "TypeScript", "APIs", "Problem solving"],
  },
  {
    icon: VideoIcon,
    title: "Content creation",
    description:
      "Clips, streams, and stories that make African esports impossible to scroll past.",
    skills: ["Edit", "Social", "Narrative", "Motion & stills"],
  },
  {
    icon: ChartBar,
    title: "Marketing & analytics",
    description:
      "Campaigns, funnels, and the numbers that tell us what actually landed.",
    skills: ["Growth", "Data", "Performance", "Brand"],
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Moderation with warmth, events with edge, and rooms people want to return to.",
    skills: ["Engagement", "Events", "Comms", "Crisis calm"],
  },
  {
    icon: PenTool,
    title: "Design & UX",
    description:
      "Interfaces and identity that feel as intentional as a grand finals stage.",
    skills: ["UI / UX", "Figma", "Systems", "Brand"],
  },
  {
    icon: Globe,
    title: "Esports operations",
    description:
      "Brackets, briefings, and the quiet work that keeps show day from becoming chaos.",
    skills: ["Ops", "Tournaments", "Players", "Logistics"],
  },
];

export default function InternshipOpportunities() {
  return (
    <section className="bg-[var(--surface)] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-8xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Open Tracks
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">Where you plug in</h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 font-body">
            Pick a lane that matches how you already play then stretch it with
            real briefs and real deadlines.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {internshipRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group rounded-2xl border border-neutral-100 bg-[var(--surface)] p-8 shadow-soft transition-all duration-300 hover:shadow-card hover:border-brand-orange/20"
            >
              <role.icon
                className="h-10 w-10 text-brand-orange/80 transition-all duration-300 group-hover:scale-110"
                strokeWidth={1.25}
              />
              <h3 className="mt-6 heading-sm !text-xl text-[var(--text-primary)]">{role.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-500 font-body">
                {role.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-neutral-100 bg-neutral-50 px-3 py-1 text-[11px] font-medium text-neutral-500">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
