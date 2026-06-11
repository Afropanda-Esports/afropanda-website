import { Calendar, Clock, MapPin } from "lucide-react";
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
    <div className="group flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:border-[#CC5500]/20 hover:bg-white/[0.05]">
      {/* Event Image */}
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute right-4 top-4 rounded-full bg-[#CC5500] px-3 py-1 text-xs font-semibold text-white shadow">
          {event.category}
        </span>
      </div>

      {/* Event Details */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-lg font-semibold leading-snug text-copy">{event.title}</h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-copy/70">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-[#CC5500]/80" aria-hidden />
            <span className="text-xs">{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center gap-2 text-copy/70">
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#CC5500]/80" aria-hidden />
              <span className="text-xs">{event.time}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-copy/70">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#CC5500]/80" aria-hidden />
            <span className="text-xs">{event.location}</span>
          </div>
        </div>

        <p className="text-sm leading-6 text-copy/70 line-clamp-2">{event.description}</p>

        {event.link && (
          <div className="mt-auto pt-2">
            <Link
              to={event.link}
              className="inline-flex items-center justify-center rounded-full bg-[#CC5500] px-5 py-2.5 text-xs font-semibold text-white shadow-sm shadow-[#CC5500]/25 transition hover:bg-[#d96214]"
            >
              {event.btnText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
