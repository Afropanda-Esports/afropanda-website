import { Calendar, Clock, MapPin } from "lucide-react";
interface Event {
  id: number; // Unique identifier for the event
  title: string; // Title of the event
  date: string; // Date of the event (can use Date type if parsing it)
  time: string; // Time of the event
  location: string; // Location where the event will be held
  description: string; // Brief description of the event
  image: string; // URL or path to the event image
  category: string; // Category of the event (e.g., Tournament, Meetup, etc.)
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-[#222035] rounded-lg overflow-hidden shadow-lg ">
      {/* Event Image */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div
          className="absolute top-4 right-4 bg-[#CC5500] text-white px-3 py-1 rounded-full 
                  text-sm font-semibold"
        >
          {event.category}
        </div>
      </div>

      {/* Event Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>

        {/* Event Meta */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-[#a5a5ac]">
            <Calendar className="w-4 h-4 mr-2 text-[#CC5500]" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center text-[#a5a5ac]">
            <Clock className="w-4 h-4 mr-2 text-[#CC5500]" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center text-[#a5a5ac]">
            <MapPin className="w-4 h-4 mr-2 text-[#CC5500]" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>

        <p className="text-[#a5a5ac] mb-6 text-sm line-clamp-2">
          {event.description}
        </p>
      </div>
    </div>
  );
}
