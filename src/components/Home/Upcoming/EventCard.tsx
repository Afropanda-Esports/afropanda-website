import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  image: string;
  link?: string;
  category: string;
  btnText?: string;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-[var(--surface)] shadow-soft transition-all duration-300 hover:shadow-card hover:border-brand-orange/20">
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full bg-brand-orange px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
          {event.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-base font-semibold leading-snug text-[var(--text-primary)]">{event.title}</h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-neutral-500">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-brand-orange/70" aria-hidden />
            <span className="text-xs">{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center gap-2 text-neutral-500">
              <Clock className="h-3.5 w-3.5 shrink-0 text-brand-orange/70" aria-hidden />
              <span className="text-xs">{event.time}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-neutral-500">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-orange/70" aria-hidden />
            <span className="text-xs">{event.location}</span>
          </div>
        </div>

        <p className="text-sm leading-6 text-neutral-500 line-clamp-2 font-body">{event.description}</p>

        {event.link && (
          <div className="mt-auto pt-2">
            <Link
              to={event.link}
              className="group/btn inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-semibold text-white transition-all hover:shadow-glow active:scale-[0.98]"
            >
              {event.btnText || "View details"}
              <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
