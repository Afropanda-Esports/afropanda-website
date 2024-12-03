import { motion } from "framer-motion"
import SectionHeader from "../SectionHeader"
import { Trophy, Target, Users, Star, Shield, Zap } from 'lucide-react';

 const values = [
  {
    icon: <Trophy />,
    title: "Excellence",
    description: "Striving for the highest standards in everything we do"
  },
  {
    icon: <Target />,
    title: "Innovation",
    description: "Pioneering new approaches in African esports"
  },
  {
    icon: <Users />,
    title: "Community",
    description: "Building a supportive and inclusive gaming environment"
  },
  {
    icon: <Star />,
    title: "Talent Development",
    description: "Nurturing the next generation of esports stars"
  },
  {
    icon: <Shield />,
    title: "Integrity",
    description: "Maintaining the highest ethical standards"
  },
  {
    icon: <Zap />,
    title: "Impact",
    description: "Creating meaningful change in African gaming"
  }
];


export const Values = () => {
    return (
        <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            sectionHeader="Our Values"
            subSectionHeader="What Drives Us"
            headerDescription="The core principles that guide our mission and shape our culture"
          />
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-[#222035]/25 p-6 rounded-xl hover:bg-[#CC5500]/10 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 }
                  }
                }}
              >
                <div className="text-[#CC5500] mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-[#a5a5ac] font-maitree">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    )
}