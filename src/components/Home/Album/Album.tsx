import SectionHeader from "../../SectionHeader";
import { imageGallery } from ".";
import Carousel from "../../Carousel/Carousel";

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
            <img src={src.src} alt="" className="w-full h-full object-cover" />
          ))}
        />
      </div>
    </section>
  );
}
