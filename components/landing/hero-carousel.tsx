"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedWaves } from "@/components/ui/animated-waves"

export function HeroCarousel() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Waves Background */}
      <AnimatedWaves />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Micro-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-[#F5F5EC]/60 font-sans mb-8"
        >
          Un Enfoque Integral
        </motion.p>

        {/* Main Slogan */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight text-balance"
        >
          <span className="block text-[#F5F5EC]">
            <span className="font-sans font-extralight tracking-wide">Prevención en</span>{" "}
            <span className="relative inline-block">
              <span className="font-serif font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E6A3] to-[#D4AF37]">
                ACCIÓN
              </span>
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
          </span>
          <span className="block text-[#F5F5EC] mt-2 sm:mt-4">
            <span className="font-sans font-extralight tracking-wide">Salud en el</span>{" "}
            <span className="relative inline-block">
              <span className="font-serif font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E6A3] to-[#D4AF37]">
                MOVIMIENTO
              </span>
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              />
            </span>
          </span>
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mt-10 mb-10"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-[#F5F5EC]/70 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
        >
          Transformamos la normativa legal en una cultura de bienestar.
          <br className="hidden sm:block" />
          <span className="text-[#D4AF37]/80">Seguridad inteligente para empresas que miran al futuro.</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group bg-transparent border-[#D4AF37]/60 hover:border-[#D4AF37] text-[#F5F5EC] hover:bg-[#D4AF37]/10 font-sans text-sm tracking-[0.15em] uppercase px-10 py-6 rounded-none transition-all duration-500"
          >
            <a href="#servicios" className="flex items-center gap-3">
              Conoce Más
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </Button>
        </motion.div>

        {/* Corner Accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute top-20 left-8 w-16 h-16 border-l border-t border-[#D4AF37]/20"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-20 right-8 w-16 h-16 border-r border-b border-[#D4AF37]/20"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#D4AF37]/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
