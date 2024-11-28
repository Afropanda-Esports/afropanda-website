import { motion } from "framer-motion";
import { Award, Book, Network, Rocket, Users, Trophy } from "lucide-react";
import SectionHeader from "../SectionHeader";

const benefitsData = [
  {
    icon: Book,
    title: "Comprehensive Learning",
    description:
      "Structured mentorship program with weekly learning sessions, workshops, and direct guidance from industry professionals in esports and technology.",
    color: "text-blue-400",
  },
  {
    icon: Network,
    title: "Professional Networking",
    description:
      "Connect with leading esports professionals, entrepreneurs, and tech innovators. Attend exclusive AfroPanda events and industry meetups.",
    color: "text-green-400",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description:
      "Transform your internship into a potential full-time opportunity. Our track record shows 60% of interns transition to permanent roles.",
    color: "text-purple-400",
  },
  {
    icon: Trophy,
    title: "Performance Rewards",
    description:
      "Outstanding interns can win scholarships, tech equipment, cash bonuses, and opportunities to represent AfroPanda in international esports events.",
    color: "text-yellow-400",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work in a dynamic, inclusive environment that values creativity, innovation, and personal growth. Be part of a passionate team revolutionizing African esports.",
    color: "text-red-400",
  },
  {
    icon: Award,
    title: "Certificate & Recognition",
    description:
      "Receive an official AfroPanda internship certificate. Top performers get recommendation letters and public recognition in our professional network.",
    color: "text-indigo-400",
  },
];

export default function InternshipBenefits() {
  return (
    <section className="bg-[#191825] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader sectionHeader="Why Choose AfroPanda Internship" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#262339] rounded-lg p-6 hover:bg-[#2C2A41] transition-colors group"
            >
              <div className="flex items-center mb-4">
                <benefit.icon
                  className={`mr-4 ${benefit.color} group-hover:scale-110 transition-transform`}
                  size={38}
                />
                <h3 className="text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At AfroPanda, we believe in nurturing talent and providing
            real-world experiences that go beyond traditional internships. Join
            us and transform your passion into a professional journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}