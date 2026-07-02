import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CarouselProps = {
  items: ReactNode[];
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  itemClassName?: string;
  breakpoints?: {
    [key: number]: number;
  };
};

const Carousel = ({
  items,
  className = '',
  showDots = true,
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  itemClassName = '',
  breakpoints = {
    1024: 3,
    640: 2,
    0: 1,
  },
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const maxIndex = Math.max(0, items.length - itemsPerView);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      const breakpointWidths = Object.keys(breakpoints)
        .map(Number)
        .sort((a, b) => b - a);

      for (const breakpointWidth of breakpointWidths) {
        if (width >= breakpointWidth) {
          setItemsPerView(breakpoints[breakpointWidth]);
          break;
        }
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [breakpoints]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <div className={className}>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 px-2 ${
                  itemClassName
                } ${
                  itemsPerView === 3 ? 'lg:w-1/3' : 
                  itemsPerView === 2 ? 'sm:w-1/2' : 
                  'w-full'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {showArrows && items.length > itemsPerView && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border border-neutral-100 bg-[var(--surface)] p-2 text-neutral-500 shadow-soft transition hover:border-brand-orange/30 hover:text-brand-orange"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border border-neutral-100 bg-[var(--surface)] p-2 text-neutral-500 shadow-soft transition hover:border-brand-orange/30 hover:text-brand-orange"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {showDots && items.length > itemsPerView && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-brand-orange"
                    : "w-1.5 bg-neutral-200 hover:bg-neutral-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
