import { User } from "lucide-react";
import { testimonials } from "../../constant";
import { GlowingCorners } from "../Design";

export default function Testimonial() {
  return (
    <section className="relative bg-[#191825] py-20 overflow-hidden">
      <GlowingCorners />
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(to right, #CC5500 1px, transparent 1px),
                                 linear-gradient(to bottom, #CC5500 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white">
              Play a role in shaping the gaming industry
            </h2>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`rounded-lg p-6 shadow-lg space-y-8 ${
                  index % 2 === 0 ? "bg-[#1B2432]" : "bg-[#2C3E50]"
                }`}
              >
                <p className="text-gray-300 text-lg">
                  {testimonial.testimonial}
                </p>

                <div className="flex items-center">
                  <User className="text-white" />
                  <h3 className="text-white font-semibold">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
