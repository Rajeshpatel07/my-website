"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github } from "./ui/svgs/github";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-[100] border-b border-white/5 bg-black/50 backdrop-blur-2xl py-5 px-6 md:px-12"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={30}
            className="w-auto h-6 md:h-8"
          />
        </Link>

        <nav className="flex items-center gap-10">
          <Link
            href="https://github.com/Rajeshpatel07"
            target="_blank"
            className="group flex items-center gap-2 text-foreground/40 hover:text-foreground transition-all duration-300"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="hidden md:block text-sm font-bold tracking-widest uppercase">
              Github
            </span>
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
