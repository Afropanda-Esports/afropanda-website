import { ShoppingBag } from "lucide-react";
import MerchCard from "./MerchCard";
import Carousel from "../../Carousel/Carousel";
import { getMerchProducts } from "../../../content";
import FadeReveal from "../../FadeReveal";

const MerchShopSection = () => {
  const products = getMerchProducts();
  const merchCards = products.map((product) => (
    <MerchCard key={product.id} product={product} />
  ));

  return (
    <section id="merch" className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <FadeReveal className="mb-14 flex items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Black & Orange
              </p>
            </div>
            <h2 className="heading-lg text-[var(--text-primary)]">
              Gear <span className="text-brand-orange">Up</span>
            </h2>
            <p className="mt-3 text-base text-neutral-600 font-body">
              Official AfroPanda apparel and accessories. Rep the continent.
            </p>
          </div>
          <a
            href="mailto:admin@afropandaesports.com?subject=Merch%20order"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-brand-black px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-[0.98] md:inline-flex"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden />
            Order now
          </a>
        </FadeReveal>

        <FadeReveal delay={0.08}>
          <Carousel
            items={merchCards}
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

        <FadeReveal delay={0.1} className="mt-8 flex md:hidden">
          <a
            href="mailto:admin@afropandaesports.com?subject=Merch%20order"
            className="inline-flex items-center gap-2 rounded-full bg-brand-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden />
            Order now
          </a>
        </FadeReveal>
      </div>
    </section>
  );
};

export default MerchShopSection;
