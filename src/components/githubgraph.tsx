"use client";
import { motion } from "framer-motion";
import { useEffect, useReducer, useState } from "react";
import { type Activity, ActivityCalendar } from "react-activity-calendar";
import OpenSource from "./opensource";

type ResponsiveConfig = {
  daysToRender: number;
  blockSize: number;
  blockMargin: number;
  fontSize: number;
};

type ConfigAction =
  | { type: "SET_MOBILE" }
  | { type: "SET_TABLET" }
  | { type: "SET_DESKTOP" };

const mobileConfig: ResponsiveConfig = {
  daysToRender: 180,
  blockSize: 11,
  blockMargin: 2,
  fontSize: 12,
};

const tabletConfig: ResponsiveConfig = {
  daysToRender: 220,
  blockSize: 12,
  blockMargin: 3,
  fontSize: 14,
};

const desktopConfig: ResponsiveConfig = {
  daysToRender: 365,
  blockSize: 12,
  blockMargin: 4,
  fontSize: 14,
};

function configReducer(
  _state: ResponsiveConfig,
  action: ConfigAction,
): ResponsiveConfig {
  switch (action.type) {
    case "SET_MOBILE":
      return mobileConfig;
    case "SET_TABLET":
      return tabletConfig;
    case "SET_DESKTOP":
      return desktopConfig;
  }
}

function getConfigForWidth(width: number): ConfigAction["type"] {
  if (width < 640) return "SET_MOBILE";
  if (width < 1024) return "SET_TABLET";
  return "SET_DESKTOP";
}

export default function GitHubGraph() {
  const [fullData, setFullData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [config, dispatch] = useReducer(configReducer, desktopConfig);

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

  useEffect(() => {
    function handleResize() {
      dispatch({ type: getConfigForWidth(window.innerWidth) });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleData =
    fullData.length === 0 ? [] : fullData.slice(-config.daysToRender);

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
          className="flex w-full mt-20 justify-center lg:justify-start overflow-hidden bg-black border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl group transition-all duration-500"
        >
          {loading ? (
            <div className="flex items-center justify-center h-[160px] w-full text-sm text-white/10 font-bold tracking-widest uppercase animate-pulse">
              Syncing contributions...
            </div>
          ) : (
            <div className="opacity-100 transition-opacity duration-700">
              <ActivityCalendar
                data={visibleData}
                blockSize={config.blockSize}
                blockMargin={config.blockMargin}
                fontSize={config.fontSize}
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
          )}
        </motion.div>
      </div>
    </section>
  );
}
