"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { type Activity, ActivityCalendar } from "react-activity-calendar";
import OpenSource from "./opensource";

export default function GitHubGraph() {
  const [fullData, setFullData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://github-contributions-api.jogruber.de/v4/Rajeshpatel07?y=last",
        );
        const json = await response.json();
        if (json.contributions) {
          setFullData(json.contributions);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch github data", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Ensure scroll container starts scrolled to the right (most recent)
  useEffect(() => {
    if (!loading && scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, [loading]);

  return (
    <section className="relative border-b border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <OpenSource />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-full mt-12 md:mt-20 transition-all duration-500"
        >
          {loading ? (
            <div className="flex items-center justify-center h-[160px] w-full text-sm text-white/10 font-bold tracking-widest uppercase animate-pulse">
              Syncing contributions...
            </div>
          ) : (
            <div 
              ref={scrollContainerRef}
              className="opacity-100 transition-opacity duration-700 w-full overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
            >
              <div className="min-w-max px-2 flex justify-start">
                <ActivityCalendar
                  data={fullData}
                  blockSize={14}
                  blockMargin={4}
                  fontSize={14}
                  //@ts-expect-error
                  hideTotalCount={true}
                  colorScheme="dark"
                  theme={{
                    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                  }}
                  style={{
                    maxWidth: "100%",
                    width: "fit-content",
                    backgroundColor: "transparent",
                  }}
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
