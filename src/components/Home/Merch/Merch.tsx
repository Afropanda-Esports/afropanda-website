import { ShoppingBag } from "lucide-react";
import { products } from "../../../constant";
import MerchCard from "./MerchCard";
import Carousel from "../../Carousel/Carousel";

const MerchShopSection = () => {
  const merchCards = products.map((product) => (
    <MerchCard key={product.id} product={product} />
  ));

  return (
    <section id="merch" className="py-20 bg-[#191825]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with gaming style */}
        <div className="text-white mb-12 relative">
          <div className="flex items-center gap-4 mb-2">
            <ShoppingBag className="w-8 h-8 text-[#CC5500]" />
            <h2 className="text-5xl font-bold relative">
              Shop
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-[#CC5500] rounded-full animate-ping" />
            </h2>
          </div>
          <h2 className="text-5xl font-bold relative inline-block">
            Our Merchs
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CC5500] to-transparent opacity-50" />
          </h2>
        </div>

        <Carousel
          items={merchCards}
          className="rounded-xl p-6"
          breakpoints={{
            1024: 3, // 3 items on desktop
            640: 2, // 2 items on tablet
            0: 1, // 1 item on mobile
          }}
          autoPlay={true}
          autoPlayInterval={2000}
        />

        {/* <GamingCarousel /> */}
      </div>
    </section>
  );
};

export default MerchShopSection;
