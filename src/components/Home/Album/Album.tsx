import { imageGallery } from ".";
import Carousel from "../../Carousel/Carousel";
import FadeReveal from "../../FadeReveal";

export default function Album() {
  return (
    <section id="album" className="bg-[var(--surface)] py-24 md:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <FadeReveal className="mb-14">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Gallery
            </p>
          </div>
          <h2 className="heading-lg text-[var(--text-primary)]">
            Moments <span className="text-brand-orange">Captured</span>
          </h2>
        </FadeReveal>

        <FadeReveal delay={0.08}>
          <Carousel
            items={imageGallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-neutral-100"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-[450px] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
            className="rounded-xl"
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
