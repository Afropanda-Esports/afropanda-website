import { getEvents } from "../../../content";
import FadeReveal from "../../FadeReveal";
import EventCard from "./EventCard";

export default function Events() {
  const events = getEvents();
  return (
    <section id="events" className="relative overflow-hidden bg-neutral-50 py-24 md:py-32">
      <div className="relative mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <FadeReveal className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Stay Ahead
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">
            What's <span className="text-brand-orange">Happening</span>
          </h2>
        </FadeReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <FadeReveal key={event.id} delay={index * 0.08}>
              <div className="transition-transform duration-300 hover:-translate-y-1">
                <EventCard event={event} />
              </div>
            </FadeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
