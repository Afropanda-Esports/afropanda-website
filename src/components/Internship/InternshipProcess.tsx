import React from "react";
import { motion } from "framer-motion";
import { join } from "../../assets/Internship";
import { ArrowRight } from "lucide-react";

const internshipSteps = [
  {
    id: "01",
    title: "Application",
    body: "Tell us what you have made, broken, or obsessed over CV optional, curiosity required.",
  },
  {
    id: "02",
    title: "Screen",
    body: "We read for fit with how we work: fast, kind, and allergic to busywork.",
  },
  {
    id: "03",
    title: "Challenge",
    body: "A focused task for your track enough to show taste and judgment, not homework for homework's sake.",
  },
  {
    id: "04",
    title: "Conversations",
    body: "Virtual chats with the people you would actually ship beside.",
  },
  {
    id: "05",
    title: "Offer",
    body: "Clear scope, start date, and the first problem we want you to help solve.",
  },
];

const APPLY_MAIL =
  "mailto:admin@afropandaesports.com?subject=AfroPanda%20internship%20application";

const InternshipProcess: React.FC = () => {
  return (
    <section className="bg-[var(--surface-alt)] py-24 md:py-32" id="internship-process">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--n50)] px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Selection
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">Five beats, no maze</h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-secondary)] font-body">
            Transparent steps so you know what signal we are looking for at each gate.
          </p>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl ring-1 ring-[var(--border)] order-2 lg:order-1"
          >
            <img
              src={join}
              alt="AfroPanda team at work"
              className="aspect-[4/5] w-full object-cover md:aspect-auto md:max-h-[560px] md:min-h-[440px]"
            />
          </motion.div>

          <div className="flex flex-col order-1 lg:order-2">
            <div className="divide-y divide-[var(--border)]">
              {internshipSteps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex gap-6 py-8 first:pt-0"
                >
                  <span className="w-12 shrink-0 font-heading text-2xl text-brand-orange">
                    {step.id}
                  </span>
                  <div className="space-y-2">
                    <h3 className="heading-sm !text-lg text-[var(--text-primary)]">{step.title}</h3>
                    <p className="text-sm leading-7 text-[var(--text-secondary)] font-body">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-12 md:pt-16">
              <motion.a
                href={APPLY_MAIL}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-glow active:scale-[0.98]"
              >
                Start your application
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipProcess;
