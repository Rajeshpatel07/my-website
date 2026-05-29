"use client";
import { socials } from "@/data/socials";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Badge from "./ui/badge";
import TechIcon from "./ui/tech-icon";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-40 lg:py-56 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Profile Image - Now visible on mobile and placed top on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative lg:order-2"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 xl:w-[28rem] xl:h-[28rem] mx-auto group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full" />
            <div className="relative rounded-[2rem] border border-white/10 overflow-hidden aspect-square glow-subtle transition-transform duration-700 ease-out shadow-2xl">
              <Image
                src="/profile.png"
                alt="Rajesh Potharam"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-[1.2] space-y-8 text-center lg:text-left lg:order-1"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2]"
          >
            <span className="text-white/40">Hi, I'm </span>
            <span className="text-white">Rajesh</span>
            <span className="text-white/40"> - </span>
            <br className="hidden md:block" />
            <span className="text-white/40">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-plex"
          >
            I specialize in building high-performance applications with
            <span className="inline-flex items-baseline mx-1 align-middle">
              <Badge>
                <TechIcon
                  name="Typescript"
                  className="w-4 h-4 mr-2 inline-flex"
                />
                TypeScript
              </Badge>
            </span>
            ,
            <span className="inline-flex items-baseline mx-1 align-middle">
              <Badge>
                <TechIcon name="React" className="w-4 h-4 mr-2 inline-flex" />
                React
              </Badge>
            </span>
            and
            <span className="inline-flex items-baseline mx-1 align-middle">
              <Badge>
                <TechIcon name="Nextjs" className="w-4 h-4 mr-2 inline-flex" />
                Next.js
              </Badge>
            </span>
            . Currently building low-level systems in
            <span className="inline-flex items-baseline mx-1 align-middle">
              <Badge>
                <TechIcon name="Cpp" className="w-4 h-4 mr-2 inline-flex" />
                C++
              </Badge>
            </span>
            .
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col items-center lg:items-start gap-8 pt-4"
          >
            <Link
              href="https://drive.google.com/file/d/1ZGRLI3l3KvhszWKbXr2GFUUoMfUjRl14/view?usp=sharing"
              target="_blank"
              className="group relative overflow-hidden px-10 py-4 rounded-full border border-white/10 font-bold transition-all duration-500 hover:border-white/30 w-fit"
            >
              <div className="relative z-10 flex items-center gap-3">
                <FileText className="w-5 h-5 group-hover:text-white transition-colors duration-500" />
                <div className="relative overflow-hidden h-6">
                  <span className="block transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                    Resume
                  </span>
                  <span className="absolute top-0 left-0 block transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white">
                    Resume
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            
            <ul className="flex items-center gap-8">
              {socials.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.url}
                    target="_blank"
                    className="text-white/30 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <social.logo className="w-6 h-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
