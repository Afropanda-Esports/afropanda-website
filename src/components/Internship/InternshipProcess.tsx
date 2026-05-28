import React from "react";
import { motion } from "framer-motion";
import { join } from "../../assets/Internship";
import SectionHeader from "../SectionHeader";

const internshipSteps = [
  {
    id: "01",
    title: "Application",
    body: "Tell us what you have made, broken, or obsessed over—CV optional, curiosity required.",
  },
  {
    id: "02",
    title: "Screen",
    body: "We read for fit with how we work: fast, kind, and allergic to busywork.",
  },
  {
    id: "03",
    title: "Challenge",
    body: "A focused task for your track—enough to show taste and judgment, not homework for homework’s sake.",
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
    <section
      className="border-t border-white/5 bg-[#14121c] py-20 md:py-28"
      id="internship-process"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subSectionHeader="Selection"
          sectionHeader="Five beats, no maze"
          headerDescription="Transparent steps so you know what signal we are looking for at each gate."
        />

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl ring-1 ring-white/10"
          >
            <img
              src={join}
              alt="AfroPanda team at work"
              className="aspect-[4/5] w-full object-cover md:aspect-auto md:max-h-[520px] md:min-h-[400px]"
            />
          </motion.div>

          <div className="flex flex-col">
            <div className="divide-y divide-white/10">
              {internshipSteps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex gap-6 py-8 first:pt-0"
                >
                  <span className="w-10 shrink-0 font-mono text-sm text-[#CC5500]">
                    {step.id}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-copy">{step.title}</h3>
                    <p className="font-maitree text-sm leading-relaxed text-copy/70 md:text-base">
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
                className="inline-flex items-center justify-center rounded-full bg-[#CC5500] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#CC5500]/20 ring-2 ring-[#CC5500]/70 ring-offset-2 ring-offset-[#14121c] transition hover:bg-[#d96214] hover:ring-[#CC5500] hover:shadow-xl hover:shadow-[#CC5500]/25 active:scale-[0.98]"
              >
                Start your application
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipProcess;
