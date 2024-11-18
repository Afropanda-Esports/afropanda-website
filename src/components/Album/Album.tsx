import SectionHeader from "../SectionHeader";
import { imageGallery } from ".";
import AlbumCard from "./AlbumCard";

export default function Album() {
  return (
    <section id="album" className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}

        <SectionHeader
          sectionHeader="Moments Captured"
          subSectionHeader="Gallery"
        />

        {/* Album Grid */}

        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
            {imageGallery.map((image, index) => (
                <AlbumCard image={image} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
}
