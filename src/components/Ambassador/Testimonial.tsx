import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const ambassadorTestimonials = [
  {
    id: 1,
    name: "Emeka Okafor",
    role: "Ambassador · Lagos",
    initials: "EO",
    testimonial:
      "Being part of AfroPanda gave me a platform I did not know existed. I went from posting clips to hosting watch parties with 50+ people. The community here actually shows up.",
  },
  {
    id: 2,
    name: "Aisha Kamara",
    role: "Ambassador · Accra",
    initials: "AK",
    testimonial:
      "I joined not knowing what to expect. Three months later I am running Discord events, and the team actually listens to what the community wants. That is rare.",
  },
  {
    id: 3,
    name: "Tunde Adeyemi",
    role: "Ambassador · Abuja",
    initials: "TA",
    testimonial:
      "The brand perks are nice, but the real value is the network. I have connected with players, creators, and operators I would never have met otherwise.",
  },
  {
    id: 4,
    name: "Nadia Mensah",
    role: "Ambassador · Nairobi",
    initials: "NM",
    testimonial:
      "AfroPanda is serious about African esports in a way other orgs are not. Being an ambassador feels like you are part of something that will still matter in five years.",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-neutral-50 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-8xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Community Voices
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">Straight from the roster</h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600 font-body">
            Ambassadors who are already in the mix on what it actually feels like.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {ambassadorTestimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group flex flex-col gap-6 rounded-2xl border border-neutral-100 bg-[var(--surface)] p-8 shadow-soft transition-all duration-300 hover:shadow-card"
            >
              <Quote className="h-6 w-6 shrink-0 text-brand-orange/50" strokeWidth={1.5} aria-hidden />
              <p className="flex-1 text-base leading-7 text-neutral-600 font-body">
                {item.testimonial}
              </p>
              <div className="flex items-center gap-3 border-t border-neutral-100 pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-sm font-bold text-brand-orange">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{item.name}</p>
                  <p className="text-xs text-neutral-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
