import Image from "next/image";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";
import Typescript from "./ui/technologies/typescript";
import Badge from "./ui/badge";
import Nodejs from "./ui/technologies/nodejs";
import Bun from "./ui/technologies/bun";
import OpenSource from "./opensource";

export default function GitHubGraph() {
  return (
    <section className="border-b border-(--border) box-border py-8 px-5 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-20 lg:px-20 xl:py-40 xl:px-40">
      {/* Open Source Contributions */}
      <OpenSource />
      <div className="pt-12">
        <h1 className="font-bold font-plex text-4xl md:text-5xl text-white mb-8">
          GitHub Activity
        </h1>
        <div id="graph-container" className="w-full overflow-x-auto mb-12">
          <GitHubCalendar
            username="Rajeshpatel07"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </div>
    </section>
  );
}
