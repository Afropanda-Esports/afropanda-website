import { motion } from "framer-motion";
import { Code, VideoIcon, PenTool, ChartBar, Users, Globe } from "lucide-react";
import SectionHeader from "../SectionHeader";

const internshipRoles = [
  {
    icon: Code,
    title: "Software Development Intern",
    description:
      "Collaborate with our tech team to develop and maintain esports platforms, gaming websites, and internal tools. Work with modern web technologies and contribute to cutting-edge gaming solutions.",
    skills: [
      "React/Next.js",
      "TypeScript",
      "Backend Technologies",
      "Problem Solving",
    ],
  },
  {
    icon: VideoIcon,
    title: "Content Creation Intern",
    description:
      "Create engaging multimedia content for AfroPanda's social media, streaming platforms, and marketing channels. Help tell the stories of African esports talents and events.",
    skills: [
      "Video Editing",
      "Social Media Management",
      "Creative Storytelling",
      "Graphic Design",
    ],
  },
  {
    icon: ChartBar,
    title: "Marketing & Analytics Intern",
    description:
      "Develop and analyze marketing strategies, track performance metrics, and contribute to growing AfroPanda's brand awareness and community engagement.",
    skills: [
      "Digital Marketing",
      "Data Analysis",
      "Social Media Marketing",
      "Performance Tracking",
    ],
  },
  {
    icon: Users,
    title: "Community Management Intern",
    description:
      "Manage and grow our online communities, moderate discussions, organize events, and create meaningful connections within the African esports ecosystem.",
    skills: [
      "Community Engagement",
      "Event Planning",
      "Communication",
      "Conflict Resolution",
    ],
  },
  {
    icon: PenTool,
    title: "Design & UX Intern",
    description:
      "Create visually stunning designs for our digital platforms, esports branding, and user experience improvements. Transform ideas into compelling visual narratives.",
    skills: ["UI/UX Design", "Adobe Creative Suite", "Figma", "Branding"],
  },
  {
    icon: Globe,
    title: "Esports Operations Intern",
    description:
      "Support tournament management, player relations, and operational logistics. Gain hands-on experience in the backend of professional esports organization management.",
    skills: [
      "Tournament Coordination",
      "Project Management",
      "Player Support",
      "Organizational Skills",
    ],
  },
];

export default function InternshipOpportunities() {
  return (
    <section className="bg-[#191825] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader sectionHeader="Internship Opportunities" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internshipRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#262339] rounded-lg p-6 hover:bg-[#2C2A41] transition-colors group"
            >
              <div className="flex items-center mb-4">
                <role.icon
                  className="mr-4 text-[#CC5500] group-hover:scale-110 transition-transform"
                  size={38}
                />
                <h3 className="text-xl font-semibold text-white">
                  {role.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-4 font-maitree">{role.description}</p>
              <div className="mt-4">
                <h4 className="text-md font-medium text-white mb-2">
                  Key Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#CC5500]/20 text-[#CC5500] px-2 py-1 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}   