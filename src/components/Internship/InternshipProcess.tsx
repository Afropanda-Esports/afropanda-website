import React from "react";
import { motion } from "framer-motion";
import { DecorativeElement } from "../Design";
import { brand } from "../../assets";
import SectionHeader from "../SectionHeader";

const internshipSteps = [
  {
    id: 1,
    text: "Online Application: Complete our detailed online application form showcasing your skills, passion, and potential.",
  },
  {
    id: 2,
    text: "Initial Screening: Our recruitment team reviews applications and selects candidates based on qualifications and alignment with AfroPanda's values.",
  },
  {
    id: 3,
    text: "Technical Assessment: Shortlisted candidates complete a role-specific challenge to demonstrate their skills and creativity.",
  },
  {
    id: 4,
    text: "Interview Process: Engage in virtual interviews with team leads to discuss your background, aspirations, and fit for the internship.",
  },
  {
    id: 5,
    text: "Final Selection: Successful candidates receive an offer and are welcomed to the AfroPanda internship program.",
  },
];

const InternshipProcess: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden" id="internship-process">
      <DecorativeElement />

      {/* Decorative Animated Borders */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 rotate-45 border-4 border-[#CC5500] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rotate-12 border-4 border-[#CC5500] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader sectionHeader="Our Internship Selection Process" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Internship Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <img
              src={brand}
              alt="AfroPanda Internship"
              className="rounded-lg w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Internship Process Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-6"
            >
              Your Journey to AfroPanda Starts Here
            </motion.h3>

            <motion.div variants={containerVariants} className="space-y-4 font-maitree">
              {internshipSteps.map((step) => (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-4 h-4 bg-[#CC5500] rounded-full flex-shrink-0 group-hover:animate-pulse"></span>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center justify-center
                px-6 py-3
                text-white
                bg-[#CC5500]
                rounded-lg
                hover:bg-[#A64400]
                transition-colors
                duration-300
              "
            >
              Start Your Application
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InternshipProcess;
