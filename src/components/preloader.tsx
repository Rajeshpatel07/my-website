"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState(0); // 0: Marquee, 1: Snapped, 2: Exit

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Timing sequence
    const t1 = setTimeout(() => setPhase(1), 1000); // Trigger snap
    const t2 = setTimeout(() => setPhase(2), 2100); // Trigger exit
    const t3 = setTimeout(() => {
      document.body.style.overflow = ""; // Restore scroll
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, []);

  const MarqueeRow = ({ direction }: { direction: "left" | "right" }) => (
    <motion.div
      initial={{ x: direction === "left" ? "0%" : "-50%" }}
      animate={{ x: direction === "left" ? "-50%" : "0%" }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      className="flex w-fit whitespace-nowrap text-[4rem] sm:text-[6rem] md:text-[10rem] font-oswald font-semibold uppercase leading-none"
    >
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex items-center">
          <span
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.15)",
              color: "transparent",
            }}
            className="mx-4 md:mx-8"
          >
            RAJESH POTHARAM
          </span>
          <span className="text-white/10 mx-4 md:mx-8 text-2xl md:text-5xl">
            ✦
          </span>
        </div>
      ))}
    </motion.div>
  );

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          key="preloader"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.7, 0, 0.1, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Phase 0: Infinite Scrolling Marquee */}
          <AnimatePresence>
            {phase === 0 && (
              <motion.div
                key="marquee-container"
                exit={{
                  opacity: 0,
                  scale: 1.2,
                  filter: "blur(20px)",
                  transition: { duration: 0.6, ease: "easeIn" },
                }}
                className="absolute flex flex-col justify-center gap-4 md:gap-8 -rotate-6 scale-110 w-[200vw]"
              >
                <MarqueeRow direction="left" />
                <MarqueeRow direction="right" />
                <MarqueeRow direction="left" />
                <MarqueeRow direction="right" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 1: Massive Snapped Name */}
          <AnimatePresence>
            {phase === 1 && (
              <motion.div
                key="snapped-text"
                initial={{ scale: 1.5, opacity: 0, filter: "blur(20px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <h1 className="text-6xl sm:text-8xl md:text-[12rem] font-oswald font-semibold text-white uppercase tracking-tighter drop-shadow-2xl">
                  RAJESH
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
