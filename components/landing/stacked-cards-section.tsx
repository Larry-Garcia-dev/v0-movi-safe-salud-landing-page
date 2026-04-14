"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Target, Eye, Award } from "lucide-react"
import Image from "next/image"

const cards = [
  {
    id: "mission",
    icon: Target,
    title: "Misión",
    content:
      "Transformamos la SST de una obligación legal en una ventaja estratégica. Brindamos asesoría técnica personalizada y ágil.",
    color: "petrol",
    accentColor: "orange",
    image: "/images/mission.jpg",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Visión",
    content:
      "Para el año 2030, seremos el aliado estratégico de referencia en consultoría de SST para empresas que buscan una gestión de riesgos humana, digital y eficiente.",
    color: "orange",
    accentColor: "petrol",
    image: "/images/vision.jpg",
  },
  {
    id: "values",
    icon: Award,
    title: "Valores",
    content:
      "Integridad, compromiso, innovación y excelencia guían cada una de nuestras acciones para entregar resultados excepcionales.",
    color: "petrol",
    accentColor: "orange",
    image: "/images/values.jpg",
  },
]

export function StackedCardsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setActiveIndex((prev) => (prev + newDirection + cards.length) % cards.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  return (
    <section id="mision" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(234,122,35,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-orange/10 rounded-full text-orange text-base md:text-lg font-medium mb-4">
            Nuestra Identidad
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            <span className="text-petrol">Misión</span> y{" "}
            <span className="text-orange">Visión</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl text-pretty">
            Haz clic en los indicadores o desliza para explorar nuestra identidad.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Carousel Container */}
          <div className="relative h-[450px] md:h-[350px] overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                {(() => {
                  const card = cards[activeIndex]
                  return (
                    <div
                      className={`h-full rounded-3xl border-2 shadow-2xl overflow-hidden relative
                        ${card.color === "petrol" ? "border-petrol/30" : "border-orange/30"}
                      `}
                    >
                      {/* Background Image */}
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                      
                      {/* Overlay */}
                      <div 
                        className={`absolute inset-0 ${
                          card.color === "petrol"
                            ? "bg-gradient-to-r from-petrol-dark/95 via-petrol-dark/80 to-petrol-dark/60"
                            : "bg-gradient-to-r from-orange/95 via-orange/80 to-orange/60"
                        }`}
                      />
                      
                      <div className="relative h-full flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
                        {/* Icon */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center bg-white/20 backdrop-blur-sm shrink-0"
                        >
                          <card.icon size={48} className="text-white md:w-16 md:h-16" />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
                          >
                            {card.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl"
                          >
                            {card.content}
                          </motion.p>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 rounded-tr-2xl border-white/20" />
                      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 rounded-bl-2xl border-white/20" />
                    </div>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center gap-4 mt-8">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => goToSlide(index)}
              className={`relative h-3 rounded-full transition-all duration-500 overflow-hidden ${
                index === activeIndex ? "w-12" : "w-3"
              } ${
                index === activeIndex
                  ? card.color === "petrol"
                    ? "bg-petrol"
                    : "bg-orange"
                  : "bg-border hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ver ${card.title}`}
            >
              {index === activeIndex && (
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Card Labels */}
        <div className="flex justify-center gap-8 mt-6">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => goToSlide(index)}
              className={`text-sm md:text-base font-medium transition-all duration-300 ${
                index === activeIndex
                  ? card.color === "petrol"
                    ? "text-petrol scale-110"
                    : "text-orange scale-110"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {card.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
