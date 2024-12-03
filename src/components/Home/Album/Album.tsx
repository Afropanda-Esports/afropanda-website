import SectionHeader from "../../SectionHeader";
import { imageGallery } from ".";
import Carousel from "../../Carousel/Carousel";
import Fade from "../../Carousel/FadeCarousel";

export default function Album() {
  return (
    <section id="album" className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionHeader="Moments Captured"
          subSectionHeader="Gallery"
        />

        <Carousel
          items={imageGallery.map((src) => (
            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src={src.src}
                alt=""
                className="w-full h-[500px] object-cover"
              />
            </div>
          ))}
          className="rounded-xl p-3 md:hidden"
          breakpoints={{
            1024: 3, // 3 items on desktop
            640: 2, // 2 items on tablet
            0: 1, // 1 item on mobile
          }}
          autoPlay={true}
          autoPlayInterval={2000}
        />

        <Fade className="hidden md:flex" />
      </div>
    </section>
  );
}
