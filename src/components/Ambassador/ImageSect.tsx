import { Am1, Am2, Am3, Am4, Am5 } from "../../assets/Ambassador";

export default function ImageSect() {
  const images = [
    { id: 1, src: Am1, alt: "Ambassador at an AfroPanda event" },
    { id: 2, src: Am2, alt: "Players competing" },
    { id: 3, src: Am3, alt: "Team in a casual setting" },
    { id: 4, src: Am4, alt: "Community gaming moment" },
    { id: 5, src: Am5, alt: "Behind the scenes" },
  ];

  return (
    <section aria-label="Ambassador moments" className="bg-[var(--surface)] py-24 md:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Field Notes
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">
            Ambassador <span className="text-brand-orange">Moments</span>
          </h2>
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-4 md:hidden">
          {images.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-2xl ring-1 ring-neutral-100">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Desktop: balanced gallery */}
        <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl ring-1 ring-neutral-100">
            <img src={Am1} alt="Ambassador at an AfroPanda event" className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl ring-1 ring-neutral-100">
            <img src={Am2} alt="Players competing" className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl ring-1 ring-neutral-100">
            <img src={Am3} alt="Team in a casual setting" className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl ring-1 ring-neutral-100">
            <img src={Am4} alt="Community gaming moment" className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl ring-1 ring-neutral-100">
            <img src={Am5} alt="Behind the scenes" className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
