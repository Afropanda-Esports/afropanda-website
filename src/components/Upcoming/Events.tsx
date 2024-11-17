import { upcomingEvents } from "../../constant";
import SectionHeader from "../SectionHeader";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <section id="events" className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}

        <SectionHeader
          sectionHeader="Upcoming Events"
          subSectionHeader="What's Coming Up"
        />

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
