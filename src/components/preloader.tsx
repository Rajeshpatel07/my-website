"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
const TARGET_TEXT = "RAJESH POTHARAM";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    // Initial scramble state
    setText(TARGET_TEXT.replace(/./g, () => CHARS[Math.floor(Math.random() * CHARS.length)]));
    
    document.body.style.overflow = "hidden";

    // Decoder logic
    let iteration = 0;
    const maxIterations = 40; // Total scramble frames
    
    const decodeInterval = setInterval(() => {
      setText(prev => 
        prev.split("").map((char, idx) => {
          if (TARGET_TEXT[idx] === " ") return " ";
          // Gradually lock in the correct characters from left to right
          if (idx < (iteration / maxIterations) * TARGET_TEXT.length) {
            return TARGET_TEXT[idx];
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      
      if (iteration >= maxIterations) {
        clearInterval(decodeInterval);
        
        // Wait briefly after decoding is complete, then trigger exit
        setTimeout(() => {
          setIsLoading(false);
          // Restore scrolling after exit animation finishes
          setTimeout(() => {
            document.body.style.overflow = "";
          }, 700);
        }, 700);
      }
      
      iteration += 1;
    }, 50);

    return () => {
      clearInterval(decodeInterval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          <div className="flex flex-col items-center space-y-8 z-10">
            
            {/* Cinematic Profile Image Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(255,255,255,0.02)]"
            >
              <Image
                src="/profile.png"
                alt="Rajesh Potharam"
                fill
                className="object-cover object-top grayscale"
                priority
              />
              {/* Subtle sweep effect over image */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent"
              />
            </motion.div>

            {/* Decoded Text */}
            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-white/90 text-sm md:text-lg font-semibold tracking-[0.4em] uppercase font-mono text-center"
              >
                {text}
              </motion.h1>
            </div>

            {/* Loading Indicator Line */}
            <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-white/80 origin-left"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
