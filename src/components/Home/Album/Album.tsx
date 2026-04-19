import SectionHeader from "../../SectionHeader";
import { imageGallery } from ".";
import Carousel from "../../Carousel/Carousel";
import FadeReveal from "../../FadeReveal";

export default function Album() {
  return (
    <section id="album" className="bg-[#111017] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeReveal>
          <SectionHeader
            sectionHeader="Moments Captured"
            subSectionHeader="Gallery"
          />
        </FadeReveal>

        <FadeReveal delay={0.08}>
          <Carousel
            items={imageGallery.map((src) => (
              <div
                key={src.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={src.src}
                  alt={src.alt}
                  className="h-[500px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
            className="rounded-xl p-3"
            breakpoints={{
              1024: 3,
              640: 2,
              0: 1,
            }}
            autoPlay={false}
            autoPlayInterval={4000}
          />
        </FadeReveal>
      </div>
    </section>
  );
}
