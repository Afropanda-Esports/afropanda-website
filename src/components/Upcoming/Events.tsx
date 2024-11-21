// import { upcomingEvents } from "../../constant";
// import SectionHeader from "../SectionHeader";
// import EventCard from "./EventCard";

// export default function Events() {
//   return (
//     <section id="events" className=" py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}

//         <SectionHeader
//           sectionHeader="Upcoming Events"
//           subSectionHeader="What's Coming Up"
//         />

//         {/* Events Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {upcomingEvents.map((event, index) => (
//             <EventCard event={event} key={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { upcomingEvents } from "../../constant";
import SectionHeader from "../SectionHeader";
import EventCard from "./EventCard";
import { Gamepad2 } from "lucide-react";

export default function Events() {
  return (
    <section
      id="events"
      className="relative py-20 bg-[#191825] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 rotate-45 border-4 border-[#CC5500] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rotate-12 border-4 border-[#CC5500] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Gaming-themed section header with gamepad icons */}
        <div className="flex items-center justify-center mb-12">
          <Gamepad2 className="w-8 h-8 text-[#CC5500] mr-4 animate-bounce" />
          <SectionHeader
            sectionHeader="Upcoming Events"
            subSectionHeader="What's Coming Up"
          />
          <Gamepad2 className="w-8 h-8 text-[#CC5500] ml-4 animate-bounce" />
        </div>

        {/* Container with glowing border effect */}
        <div className="relative group">
          {/* Animated glow effect */}
          <div className="absolute -inset-0.5 bg-[#CC5500] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

          {/* Main content container */}
          <div className="relative bg-[#191825] rounded-lg p-8 ring-1 ring-[#CC5500]/20">
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-300 hover:scale-105 hover:-rotate-1"
                >
                  {/* Card container with gradient border */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CC5500] to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative">
                      <EventCard event={event} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#CC5500] rounded-full animate-pulse opacity-70" />
      </div>

      {/* Diagonal decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-10 top-1/4 w-32 h-px bg-gradient-to-r from-transparent via-[#CC5500] to-transparent transform rotate-45 opacity-20" />
        <div className="absolute -right-10 top-3/4 w-32 h-px bg-gradient-to-r from-transparent via-[#CC5500] to-transparent transform -rotate-45 opacity-20" />
      </div>
    </section>
  );
}
