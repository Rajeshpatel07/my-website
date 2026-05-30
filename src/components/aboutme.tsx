"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/data/skills";
import TechIcon from "./ui/tech-icon";

export default function Aboutme() {
  return (
    <section
      id="about"
      className="relative border-b border-white/5 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-40">
        <div className="flex flex-col lg:flex-row gap-20 lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-5/12"
          >
            <div className="relative aspect-square max-w-lg mx-auto group">
              <div className="absolute inset-0 bg-purple-500/5 blur-[100px] rounded-full" />
              <div className="relative rounded-3xl border border-white/10 overflow-hidden aspect-square glow-subtle shadow-2xl transition-all duration-700">
                <Image
                  src="/profile.png"
                  alt="Rajesh Potharam"
                  fill
                  className="object-cover object-top scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="w-full lg:w-7/12 space-y-12"
          >
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-semibold uppercase tracking-[0.2em]">
                Background
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                Rajesh Potharam
              </h2>
              <p className="text-white/40 leading-relaxed font-plex text-lg md:text-xl">
                I build software where efficiency is priority, whether working
                on low-level components or managing high-volume traffic. My
                passion lies in solving complex technical challenges and
                building performant systems that scale.
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/20 text-center lg:text-left">
                Technical Arsenal
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8">
                {skills.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="flex items-center justify-center transition-all duration-300 hover:scale-125"
                    title={item.name}
                  >
                    <TechIcon
                      name={item.name}
                      className="w-8 h-8 text-white/40 hover:text-white transition-colors duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
