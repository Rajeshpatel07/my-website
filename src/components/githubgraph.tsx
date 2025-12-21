"use client";
import { useEffect, useState } from "react";
import { type Activity, ActivityCalendar } from "react-activity-calendar";
import OpenSource from "./opensource";

export default function GitHubGraph() {
  const [fullData, setFullData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const [daysToRender, setDaysToRender] = useState(365);
  const [blockSize, setBlockSize] = useState(12);
  const [blockMargin, setBlockMargin] = useState(4);
  const [fontSize, setFontSize] = useState(14);

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
      } catch (error) {
        console.error("Failed to fetch github data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // MOBILE SETTINGS:
        setDaysToRender(180);
        setBlockSize(11);
        setBlockMargin(2);
        // 4. Smaller text
        setFontSize(12);
      } else if (width < 1024) {
        setDaysToRender(220); // ~7 months
        setBlockSize(12);
        setBlockMargin(3);
        setFontSize(14);
      } else {
        setDaysToRender(365); // Full year
        setBlockSize(12);
        setBlockMargin(4);
        setFontSize(14);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleData = () => {
    if (fullData.length === 0) return [];
    return fullData.slice(-daysToRender);
  };

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
            data={getVisibleData()}
            blockSize={blockSize}
            blockMargin={blockMargin}
            fontSize={fontSize}
            //@ts-expect-error
            hideTotalCount={true} // Hiding total count saves space
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
