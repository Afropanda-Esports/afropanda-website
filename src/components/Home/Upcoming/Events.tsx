import { getEvents } from "../../../content";
import SectionHeader from "../../SectionHeader";
import EventCard from "./EventCard";
import FadeReveal from "../../FadeReveal";

export default function Events() {
  const events = getEvents();
  return (
    <section id="events" className="relative overflow-hidden bg-[#111017] py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeReveal className="mb-12">
          <SectionHeader sectionHeader="What's Happening" subSectionHeader="Stay Ahead" />
        </FadeReveal>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <FadeReveal key={event.id} delay={index * 0.08}>
                <div className="transition-transform duration-300 hover:-translate-y-1">
                  <EventCard event={event} />
                </div>
              </FadeReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
