import { motion } from "framer-motion";
import { Code, VideoIcon, PenTool, ChartBar, Users, Globe } from "lucide-react";
import SectionHeader from "../SectionHeader";

const internshipRoles = [
  {
    icon: Code,
    title: "Software development",
    description:
      "Platforms, tooling, and the glue between players and broadcasts—React, TypeScript, and whatever keeps the stack honest.",
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
    <section className="border-t border-white/5 bg-[#191825] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          subSectionHeader="Open tracks"
          sectionHeader="Where you plug in"
          headerDescription="Pick a lane that matches how you already play—then stretch it with real briefs and real deadlines."
        />

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {internshipRoles.map((role, index) => (
            <motion.article
              key={role.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="flex flex-col gap-5 py-10 md:flex-row md:items-start md:gap-10 md:py-12"
            >
              <role.icon
                className="h-9 w-9 shrink-0 text-[#CC5500]/90"
                strokeWidth={1.25}
              />
              <div className="min-w-0 flex-1 space-y-3">
                <h3 className="text-xl font-medium tracking-tight text-copy md:text-2xl">
                  {role.title}
                </h3>
                <p className="font-maitree text-base leading-relaxed text-copy/75">
                  {role.description}
                </p>
                <p className="text-sm text-copy/45">
                  {role.skills.join(" · ")}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
