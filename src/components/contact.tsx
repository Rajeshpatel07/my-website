"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent border-t border-white/5 py-12 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center space-y-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 pt-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/20">
                Location
              </p>
              <p className="text-lg md:text-2xl font-normal text-white/70">
                Hyderabad, India
              </p>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/10" />

            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/20">
                Email
              </p>
              <Link
                href="mailto:rajeshcode07@gmail.com"
                className="text-lg md:text-2xl font-normal text-white/70 hover:text-white transition-colors duration-300 block"
              >
                rajeshcode07@gmail.com
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
