import React from "react";
import SectionHeader from "../SectionHeader";
import { start } from "../../assets/Ambassador";
import { howToStart } from "../../constant";
import { motion } from "framer-motion";

const APPLY_MAIL =
  "mailto:info@afropanda.com?subject=AfroPanda%20ambassador%20program";

const HowToStart: React.FC = () => {
  return (
    <section
      className="border-t border-white/5 bg-[#14121c] py-20 md:py-28"
      id="how-to-start"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subSectionHeader="Fit check"
          sectionHeader="You might already qualify"
          headerDescription="No vanity metrics required—just curiosity, care for community, and willingness to show up when we run something worth sharing."
        />

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl ring-1 ring-white/10"
          >
            <img
              src={start}
              alt="AfroPanda ambassador community"
              className="aspect-[4/5] w-full object-cover md:max-h-[480px] md:min-h-[360px]"
            />
          </motion.div>

          <div className="flex flex-col">
            <div className="divide-y divide-white/10">
              {howToStart.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex gap-5 py-6 first:pt-0"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#CC5500]" />
                  <p className="font-maitree text-sm leading-relaxed text-copy/80 md:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-12 md:pt-16">
              <motion.a
                href={APPLY_MAIL}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="inline-flex items-center justify-center rounded-full bg-[#CC5500] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#CC5500]/20 ring-2 ring-[#CC5500]/70 ring-offset-2 ring-offset-[#14121c] transition hover:bg-[#d96214] hover:ring-[#CC5500] hover:shadow-xl hover:shadow-[#CC5500]/25 active:scale-[0.98]"
              >
                Apply now
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
