"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedWaves } from "@/components/ui/animated-waves"
import Image from "next/image"

const slides = [
  {
    icon: Shield,
    title: "Protección Integral",
    subtitle: "Blindamos tu operación con sistemas de gestión robustos",
    image: "/images/hero-1.jpg",
  },
  {
    icon: Heart,
    title: "Bienestar Laboral",
    subtitle: "Transformamos la normativa en una cultura de salud",
    image: "/images/hero-2.jpg",
  },
  {
    icon: Users,
    title: "Capital Humano",
    subtitle: "Protegemos tu recurso más valioso: tu equipo",
    image: "/images/hero-3.jpg",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Waves Background */}
      <AnimatedWaves />
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-petrol/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-petrol/10 rounded-full text-petrol text-sm font-medium mb-6"
            >
              <Shield size={16} />
              Consultoría Especializada en SST
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="text-balance">
                <span className="font-light tracking-wide">Prevención en</span>{" "}
                <span className="relative inline-block overflow-visible pr-[0.15em]">
                  <span className="font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-light to-orange drop-shadow-sm pr-[0.1em]">
                    ACCIÓN
                  </span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange/80 to-orange-light rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
                ,{" "}
                <br className="hidden sm:block" />
                <span className="font-light tracking-wide">Salud en el</span>{" "}
                <span className="relative inline-block overflow-visible pr-[0.15em]">
                  <span className="font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-petrol via-petrol-light to-petrol drop-shadow-sm pr-[0.1em]">
                    MOVIMIENTO
                  </span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-petrol/80 to-petrol-light rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                </span>
                .
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty">
              Implementamos soluciones integrales de Seguridad y Salud en el Trabajo,
              para proteger tu capital humano y cumplir con la normatividad. No solo
              diseñamos documentos, <strong className="text-foreground">blindamos tu operación</strong>.
              Transformamos la normativa legal en una cultura de bienestar que reduce
              el ausentismo y aumenta la productividad.{" "}
              <em className="text-petrol">Seguridad inteligente para empresas que miran al futuro.</em>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="group bg-petrol hover:bg-petrol-light text-white font-semibold px-8 py-6 rounded-full shadow-xl hover:shadow-petrol/30 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <a href="#servicios" className="flex items-center gap-2">
                  EXPLORA NUESTROS SERVICIOS
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 relative"
                  >
                    <div
                      className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-border/50 shadow-2xl"
                    >
                      {/* Background Image */}
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-petrol-dark/90 via-petrol-dark/50 to-transparent" />
                      
                      {/* Content */}
                      <motion.div
                        key={selectedIndex}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center"
                      >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <slide.icon size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-white/80">
                          {slide.subtitle}
                        </p>
                      </motion.div>

                      {/* Corner Accents */}
                      <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-orange/60 rounded-tl-lg" />
                      <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-orange/60 rounded-br-lg" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-petrol w-8"
                      : "bg-petrol/30 hover:bg-petrol/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
