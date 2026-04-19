import {
  Am1,
  Am2,
  Am3,
  Am4,
  Am5,
} from "../../assets/Ambassador";

export default function ImageSect() {
  const strip = [
    { id: 1, src: Am1, alt: "Ambassador at an AfroPanda event" },
    { id: 2, src: Am2, alt: "Players competing" },
    { id: 3, src: Am4, alt: "Community gaming moment" },
    { id: 4, src: Am3, alt: "Team in a casual setting" },
    { id: 5, src: Am5, alt: "Behind the scenes" },
  ];

  return (
    <section
      aria-label="Ambassador moments"
      className="border-t border-white/5 bg-[#191825] py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-copy/50">
          Field notes
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:gap-3 md:overflow-visible">
          {strip.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[3/4] w-[42vw] shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10 md:aspect-[4/5] md:w-auto"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
