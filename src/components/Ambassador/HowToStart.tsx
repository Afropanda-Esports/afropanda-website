import React from "react";
import SectionHeader from "../SectionHeader";
import { brand } from "../../assets";
import { DecorativeElement,  } from "../Design";
import { howToStart } from "../../constant";

const HowToStart: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="how-to-start">
      
      <DecorativeElement />

      {/* Decorative Animated Borders */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 rotate-45 border-4 border-[#CC5500] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rotate-12 border-4 border-[#CC5500] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader sectionHeader="All you need to become an Ambassador" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Ambassador Image */}
          <div>
            <img
              src={brand}
              alt="Ambassador"
              className="rounded-lg w-full h-[500px] object-cover"
            />
          </div>

          {/* Ambassador Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Level Up Your Influence in Gaming
            </h2>

            <div className="space-y-4">
              {howToStart.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-[#CC5500] rounded-full flex-shrink-0"></span>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>

            <button
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
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
