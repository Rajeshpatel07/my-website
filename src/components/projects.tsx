"use client";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import ProjectCard from "./ui/projectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-b border-white/5 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <p className="text-foreground/40 max-w-2xl font-plex text-lg md:text-xl leading-relaxed">
            A selection of my recent work, ranging from high-performance
            low-level systems to complex full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
