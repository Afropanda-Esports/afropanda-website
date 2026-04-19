import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import EventCard from "../components/Home/Upcoming/EventCard";
import FadeReveal from "../components/FadeReveal";
import { getEvents } from "../content";

export default function EventsPage() {
  const events = getEvents();

  return (
    <div className="pt-24 pb-20">
      <section className="relative overflow-hidden bg-[#111017] py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeReveal className="mb-10">
            <SectionHeader sectionHeader="Past events" subSectionHeader="Tournaments & programs" />
          </FadeReveal>
          <p className="mb-10 max-w-2xl text-copy">
            Highlights from our competitive showcases and ambassador initiatives. For the latest
            announcements, follow us on socials.
          </p>
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
          <div className="mt-10">
            <Link
              to="/"
              className="text-sm font-medium tracking-wide text-copy transition-colors hover:text-[#CC5500]"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
