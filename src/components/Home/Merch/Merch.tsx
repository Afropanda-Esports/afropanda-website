import { ShoppingBag } from "lucide-react";
import MerchCard from "./MerchCard";
import Carousel from "../../Carousel/Carousel";
import { getMerchProducts } from "../../../content";
import FadeReveal from "../../FadeReveal";
import SectionHeader from "../../SectionHeader";

const MerchShopSection = () => {
  const products = getMerchProducts();
  const merchCards = products.map((product) => (
    <MerchCard key={product.id} product={product} />
  ));

  return (
    <section id="merch" className="border-t border-white/10 bg-[#191825] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeReveal className="mb-12 flex items-end justify-between gap-4">
          <div>
            <SectionHeader
              subSectionHeader="Black & Orange"
              sectionHeader="Gear up"
              headerDescription="Official AfroPanda apparel and accessories. Rep the continent."
            />
          </div>
          <a
            href="mailto:admin@afropandaesports.com?subject=Merch%20order"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-[#CC5500]/50 bg-[#CC5500]/10 px-5 py-2.5 text-sm font-semibold tracking-wide text-copy transition hover:border-[#CC5500] hover:bg-[#CC5500]/20 hover:text-[#CC5500] md:inline-flex"
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
            className="inline-flex items-center gap-2 rounded-full border border-[#CC5500]/50 bg-[#CC5500]/10 px-6 py-3 text-sm font-semibold tracking-wide text-copy transition hover:border-[#CC5500] hover:bg-[#CC5500]/20 hover:text-[#CC5500]"
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
