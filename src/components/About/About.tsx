import { aboutItems } from "../../constant";
import AboutItemCard from "./AboutItemCard";

export default function About() {
  return (
    <section id="about" className="bg-[#191825] py-20" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[80vh] items-center gap-12">
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 justify-center order-last md:order-none">
            {aboutItems.map((item, index) => (
              <AboutItemCard key={index} item={item} />
            ))}
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-sm text-[#CC5500] ">
              Who we are?
            </p>
            <div className="grid gap-y-4">
              <h2 className="text-4xl font-bold text-white">
                Let's tell you a little about us
              </h2>
              <p className="text-[#a5a5ac] text-lg">
                AfroPanda Esports is committed to developing esports in Nigeria,
                nurturing world-class talents, and promoting gaming as a
                respected profession.
              </p>

              <p className="text-[#a5a5ac] mt-4">
                Our mission is to create opportunities for Nigerian gamers to
                compete at the highest levels while building a sustainable
                esports ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
