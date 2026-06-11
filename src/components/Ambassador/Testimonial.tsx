import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "../SectionHeader";

const ambassadorTestimonials = [
  {
    id: 1,
    name: "Emeka Okafor",
    role: "Ambassador · Lagos",
    initials: "EO",
    testimonial:
      "Being part of AfroPanda gave me a platform I didn't know existed. I went from posting clips to hosting watch parties with 50+ people. The community here actually shows up.",
  },
  {
    id: 2,
    name: "Aisha Kamara",
    role: "Ambassador · Accra",
    initials: "AK",
    testimonial:
      "I joined not knowing what to expect. Three months later I'm running Discord events, and the team actually listens to what the community wants. That's rare.",
  },
  {
    id: 3,
    name: "Tunde Adeyemi",
    role: "Ambassador · Abuja",
    initials: "TA",
    testimonial:
      "The brand perks are nice, but the real value is the network. I've connected with players, creators, and operators I'd never have met otherwise.",
  },
  {
    id: 4,
    name: "Nadia Mensah",
    role: "Ambassador · Nairobi",
    initials: "NM",
    testimonial:
      "AfroPanda is serious about African esports in a way other orgs aren't. Being an ambassador feels like you're part of something that will still matter in five years.",
  },
];

export default function Testimonial() {
  return (
    <section className="border-t border-white/5 bg-[#111017] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          subSectionHeader="Community voices"
          sectionHeader="Straight from the roster"
          headerDescription="Ambassadors who are already in the mix—on what it actually feels like."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {ambassadorTestimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-[#CC5500]/25 hover:bg-white/[0.05]"
            >
              <Quote
                className="h-5 w-5 shrink-0 text-[#CC5500]/70"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="flex-1 font-maitree text-base leading-relaxed text-copy/85">
                {item.testimonial}
              </p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CC5500]/15 text-xs font-semibold text-[#CC5500]">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-copy">{item.name}</p>
                  <p className="text-xs text-copy/50">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}