"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechIcon from "./tech-icon";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
  inPorcess: boolean;
  technologies: string[];
}

export default function ProjectCard({
  project,
}: {
  project: ProjectCardProps;
}) {
  return (
    <article className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-3xl p-3 transition-all duration-500 hover:bg-white/[0.04]">
      <Link
        href={project.link}
        target="_blank"
        className="block relative aspect-[16/10] overflow-hidden rounded-2xl bg-black"
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

        {project.inPorcess && (
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            <p className="text-white/80 text-[10px] font-semibold uppercase tracking-widest">
              In Progress
            </p>
          </div>
        )}
      </Link>

      <div className="pt-6 pb-2 px-2 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <Link href={project.link} target="_blank" className="flex-1">
            <h2 className="text-2xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-500 flex items-center gap-2">
              {project.name}
              <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
            </h2>
          </Link>
        </div>

        <p className="mt-4 text-white/40 leading-relaxed font-plex text-base line-clamp-3 transition-colors duration-500 flex-1">
          {project.description}
        </p>

        <div className="pt-8 mt-auto">
          <div className="flex flex-wrap gap-4 items-center">
            {project.technologies.map((techName) => (
              <div
                key={techName}
                className="flex items-center justify-center transition-all duration-300"
                title={techName}
              >
                <TechIcon
                  name={techName}
                  className="w-7 h-7 text-white/30 group-hover:text-white/80 transition-colors duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
