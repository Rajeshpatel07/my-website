import Image from "next/image";
import Link from "next/link";
import type { JSX, SVGProps } from "react";
import { Github } from "./svgs/github";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
  inPorcess: boolean;
  technologies: {
    name: string;
    logo: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  }[];
}

export default function ProjectCard({
  project,
}: {
  project: ProjectCardProps;
}) {
  return (
    <article
      className={`border rounded-md overflow-hidden hover:shadow-lg transition-shadow  "border-gray-700 bg-gray-900/20"`}
    >
      <Link href={project.link} target="_blank">
        <div className="relative aspect-[10/6]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-center p-x-2"
          />
          {project.inPorcess && (
            <div className="absolute top-5 left-4 flex items-center gap-2 bg-black/70 px-2 py-1 rounded-md">
              <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
              <p className="text-white text-md font-semibold">In Progress</p>
            </div>
          )}
        </div>
      </Link>
      <div id="details" className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold font-plex text-xl md:text-2xl text-white">
            {project.name}
          </h2>
          <Link
            href={project.link}
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github height="24" width="24" />
          </Link>
        </div>
        <p className="font-plex text-gray-300 leading-relaxed text-sm md:text-lg">
          {project.description}
        </p>
        <div className="py-3">
          <h3 className="font-plex text-lg md:text-xl text-white font-semibold mb-3">
            Technologies
          </h3>
          <div id="logos" className="flex flex-wrap gap-2 ">
            {project.technologies.map((item) => (
              <div className="w-8 h-8" key={item.name}>
                <item.logo />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
