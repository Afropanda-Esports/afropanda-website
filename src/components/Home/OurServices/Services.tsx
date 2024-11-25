import { Trophy, Users, Video, Search } from "lucide-react";
import SectionHeader from "../../SectionHeader";
import { motion } from "framer-motion";


function Services() {
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
    // ... other services
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#191825]">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full"
               style={{
                 backgroundImage: `linear-gradient(45deg, #CC5500 1px, transparent 1px),
                                 linear-gradient(-45deg, #CC5500 1px, transparent 1px)`,
                 backgroundSize: '60px 60px'
               }} />
        </div>
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionHeader="Our Services"
          subSectionHeader="What we Offer"
          headerDescription="Empowering the Nigerian esports community with professional services
          designed to develop and showcase gaming talent."
        />

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              className="group relative bg-[#222035] rounded-xl p-6 hover:bg-[#2a2842] transition-colors duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-[#CC5500]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-[#CC5500]/20 blur-md rounded-full" />
                <div className="relative z-10 text-[#CC5500] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#CC5500] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-[#CC5500] rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#CC5500]/30 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#CC5500]/30 rounded-bl-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { Services };