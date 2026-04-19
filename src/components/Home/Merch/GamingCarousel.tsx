import img1 from "../../assets/Album/1.png";
import img2 from "../../assets/Album/2.png";
import img3 from "../../assets/Album/3.png";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GamingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Update items per view based on window width
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    // Initial setup
    updateItemsPerView();

    // Add resize listener
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const products = [
    {
      id: 1,
      name: "FNATIC X LAMZU MAYA 8K",
      description: "Wireless 8K Gaming Mouse",
      price: 103.99,
      originalPrice: 129.99,
      image: img1,
    },
    {
      id: 2,
      name: "ARTISAN KEYCARD, LAVA",
      description: "Custom artisanal keycard",
      price: 24.49,
      originalPrice: 34.99,
      image: img2,
    },
    {
      id: 3,
      name: "ARTISAN KEYCARD, ICE",
      description: "Custom artisanal keycard",
      price: 24.49,
      originalPrice: 34.99,
      image: img3,
    },
    {
      id: 4,
      name: "PRO GAMING HEADSET",
      description: "Premium Gaming Headphones",
      price: 159.99,
      originalPrice: 199.99,
      image: img1,
    },
    {
      id: 5,
      name: "MECHANICAL KEYBOARD",
      description: "RGB Mechanical Gaming Keyboard",
      price: 129.99,
      originalPrice: 149.99,
      image: img2,
    },
  ];

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <div className="">
      <div className="relative">
        {/* Main carousel container */}
        <div className="overflow-hidden rounded-xl bg-[#191825] p-6">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
              >
                <div className="bg-[#191825] rounded-lg overflow-hidden group">
                  {/* Product image */}
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Product info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-copy mb-1 truncate">
                      {product.name}
                    </h3>
                    <p className="text-copy mb-3 text-sm truncate">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-copy font-bold text-lg">
                        €{product.price}
                      </span>
                      <span className="text-copy line-through text-sm opacity-70">
                        €{product.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#CC5500] text-white p-2 rounded-full hover:bg-[#191825] transition-colors duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#CC5500] text-white p-2 rounded-full hover:bg-[#191825] transition-colors duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots indicator - now showing only actual possible positions */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-[#CC5500]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingCarousel;
