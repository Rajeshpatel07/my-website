"use client";
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
    <section className="border-b border-[--border] box-border py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-20 lg:px-20 xl:py-40 xl:px-40">
      <OpenSource />

      <div className="flex w-full mt-12 justify-center lg:justify-start overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-[140px] w-full text-sm text-gray-500 bg-gray-50/50 rounded-lg animate-pulse">
            Loading contribution graph...
          </div>
        ) : (
          <ActivityCalendar
            data={visibleData}
            blockSize={config.blockSize}
            blockMargin={config.blockMargin}
            fontSize={config.fontSize}
            //@ts-expect-error
            hideTotalCount={true}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            style={{
              maxWidth: "100%",
              width: "fit-content",
            }}
          />
        )}
      </div>
    </section>
  );
}
