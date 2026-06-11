import { Am1, Am2, Am3, Am4, Am5 } from "../../assets/Ambassador";
import { ContainerScroll } from "../ui/container-scroll-animation";

export default function ImageSect() {
  const remaining = [
    { id: 3, src: Am3, alt: "Team in a casual setting" },
    { id: 4, src: Am4, alt: "Community gaming moment" },
    { id: 5, src: Am5, alt: "Behind the scenes" },
  ];

  return (
    <section
      aria-label="Ambassador moments"
      className="border-t border-white/5 bg-[#191825]"
    >
      {/* Kicker */}
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-copy/50">
          Field notes
        </p>
      </div>

      {/* ── Scroll-driven 3-D card with Am1 + Am2 ── */}
      <ContainerScroll
        titleComponent={
          <h2 className="text-2xl font-semibold text-copy md:text-3xl">
            Ambassador{" "}
            <span className="text-[#CC5500]">moments</span>
          </h2>
        }
      >
        <div className="grid h-full w-full grid-cols-2 gap-1.5">
          <div className="overflow-hidden rounded-lg">
            <img
              src={Am1}
              alt="Ambassador at an AfroPanda event"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={Am2}
              alt="Players competing"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </ContainerScroll>

      {/* ── Remaining 3 images ── */}
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-3 md:overflow-visible">
          {remaining.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[3/4] w-[42vw] shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10 md:aspect-[4/5] md:w-auto"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
