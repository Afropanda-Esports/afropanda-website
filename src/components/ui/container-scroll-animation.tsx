import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // start animating when top of container hits bottom of viewport,
    // finish when bottom of container hits top of viewport
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animate from tilted/scaled-up → flat/normal as user scrolls through
  const rotate = useTransform(scrollYProgress, [0, 0.6], [18, 0]);
  const scale  = useTransform(
    scrollYProgress,
    [0, 0.6],
    isMobile ? [0.75, 1] : [0.88, 1]
  );
  const translateY = useTransform(scrollYProgress, [0, 0.6], [60, 0]);

  return (
    // This outer div is the scroll target — keep it tall so there's distance to scroll
    <div ref={containerRef} className="relative py-8 md:py-16">
      {/* perspective wrapper */}
      <div style={{ perspective: "1000px" }} className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title floats in above */}
        <motion.div
          style={{ translateY }}
          className="mb-6 text-center"
        >
          {titleComponent}
        </motion.div>

        {/* The 3-D card */}
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            transformOrigin: "center top",
            boxShadow:
              "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a",
          }}
          className="mx-auto h-[22rem] w-full rounded-[24px] border border-white/10 bg-[#14121c] p-2 shadow-2xl md:h-[36rem] md:p-3"
        >
          <div className="h-full w-full overflow-hidden rounded-xl">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Kept as named exports for compatibility
export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => (
  <motion.div style={{ translateY: translate }} className="mx-auto max-w-5xl text-center">
    {titleComponent}
  </motion.div>
);

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => (
  <motion.div
    style={{ rotateX: rotate, scale }}
    className="mx-auto h-[28rem] w-full max-w-5xl rounded-[30px] border border-white/10 bg-[#14121c] p-2 shadow-2xl md:h-[36rem] md:p-4"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl">{children}</div>
  </motion.div>
);
