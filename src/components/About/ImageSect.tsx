import { Ab1, Ab2, Ab3, Ab4, Ab5, Ab6, Ab7, Ab8 } from "../../assets/About";
import FadeReveal from "../FadeReveal";

const images = [
  { id: 1, src: Ab1, alt: "Gamer at tournament", span: "md:col-span-1 md:row-span-2" },
  { id: 2, src: Ab2, alt: "Players competing", span: "md:col-span-2 md:row-span-2" },
  { id: 3, src: Ab3, alt: "Team in a casual setting", span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: Ab4, alt: "Community gaming moment", span: "md:col-span-1 md:row-span-1" },
  { id: 5, src: Ab5, alt: "Team member working", span: "md:col-span-1 md:row-span-1" },
  { id: 6, src: Ab6, alt: "Team members sharing a moment", span: "md:col-span-1 md:row-span-1" },
  { id: 7, src: Ab7, alt: "Team member in casual setting", span: "md:col-span-1 md:row-span-1" },
  { id: 8, src: Ab8, alt: "Team member working", span: "md:col-span-1 md:row-span-1" },
];

export default function ImageSect() {
  return (
    <section className="relative py-16 md:py-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <FadeReveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-3 md:gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className={`${image.span} relative overflow-hidden rounded-2xl ring-1 ring-neutral-100`}
              >
                <div className="aspect-[4/3] md:h-full md:w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeReveal>
      </div>
    </section>
  );
}
