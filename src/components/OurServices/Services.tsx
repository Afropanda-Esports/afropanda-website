
import { Trophy, Users, Video, Search } from "lucide-react";
import SectionHeader from "../SectionHeader";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    icon: <Trophy className="w-6 h-6" />,
    title: "Esport Competition",
    description:
      "Organizing and hosting professional esports tournaments across Nigeria, featuring multiple game titles with substantial prize pools and professional broadcasting.",
    features: [
      "Multiple Game Titles",
      "Professional Broadcasting",
      "Prize Pools",
      "Structured Leagues",
    ],
  },
  {
    id: 2,
    icon: <Users className="w-6 h-6" />,
    title: "Team Management",
    description:
      "Comprehensive management services for esports teams, including training, sponsorship acquisition, and career development for players.",
    features: [
      "Professional Training",
      "Sponsorship Support",
      "Career Development",
      "Performance Analysis",
    ],
  },
  {
    id: 3,
    icon: <Video className="w-6 h-6" />,
    title: "Live Streaming",
    description:
      "High-quality streaming services for tournaments, team practices, and special events with professional commentary and production.",
    features: [
      "Professional Commentary",
      "HD Quality Streams",
      "Multi-Platform Broadcasting",
      "Interactive Chat",
    ],
  },
  {
    id: 4,
    icon: <Search className="w-6 h-6" />,
    title: "Talent Scouting",
    description:
      "Identifying and nurturing upcoming esports talent through our comprehensive scouting network and development programs.",
    features: [
      "Talent Discovery",
      "Skills Assessment",
      "Development Programs",
      "Professional Guidance",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          sectionHeader="Our Services"
          subSectionHeader="What we Offer"
          headerDescription="Empowering the Nigerian esports community with professional services
        designed to develop and showcase gaming talent."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
