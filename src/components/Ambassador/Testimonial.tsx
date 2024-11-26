import { DecorativeElement, GlowingCorners } from "../Design";

export default function Testimonial() {
  return (
    <section className="relative bg-[#191825] py-20 overflow-hidden">
      <GlowingCorners />
      <DecorativeElement />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 rotate-45 border-4 border-[#CC5500] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rotate-12 border-4 border-[#CC5500] animate-pulse" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex"></div>
      </div>
    </section>
  );
}
