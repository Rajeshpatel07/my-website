"use client";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import OpenSource from "./opensource";

export default function GitHubGraph() {
  const [daysToRender, setDaysToRender] = useState(150);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setDaysToRender(150);
      } else {
        setDaysToRender(365);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="border-b border-(--border) box-border py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-20 lg:px-20 xl:py-40 xl:px-40">
      <OpenSource />
      <div
        id="graph-container"
        className="flex w-full mb-12 justify-center overflow-auto lg:justify-start"
      >
        <GitHubCalendar
          username="Rajeshpatel07"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          transformData={(contributions) => {
            return contributions.slice(-daysToRender);
          }}
          style={{
            maxWidth: "100%",
            overflow: "hidden",
          }}
        />
      </div>
    </section>
  );
}
