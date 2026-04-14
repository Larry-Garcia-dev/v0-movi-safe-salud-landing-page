"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Eye, Award, ArrowRight } from "lucide-react"
import Image from "next/image"

const cards = [
  {
    id: "mission",
    icon: Target,
    title: "Misión",
    content:
      "Transformamos la SST de una obligación legal a una ventaja estratégica. Brindamos asesoría técnica personalizada y ágil.",
    color: "petrol",
    accentColor: "orange",
    image: "/images/mission.jpg",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Visión",
    content:
      "Para el año 2030, seremos el aliado estratégico referente en consultoría de SST para empresas que buscan una gestión de riesgos humana, digital y eficiente.",
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
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleClick = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length)
  }

  const getCardStyle = (index: number) => {
    const position = (index - activeIndex + cards.length) % cards.length

    if (!isHovered) {
      // Stacked state
      return {
        rotateZ: position * 3 - 3,
        x: position * 8,
        y: position * 4,
        scale: 1 - position * 0.05,
        zIndex: cards.length - position,
      }
    } else {
      // Fan state
      const fanAngle = 15
      const fanSpread = 120
      return {
        rotateZ: (position - 1) * fanAngle,
        x: (position - 1) * fanSpread,
        y: Math.abs(position - 1) * 20,
        scale: 1,
        zIndex: position === 0 ? cards.length : cards.length - position,
      }
    }
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
            Pasa el cursor sobre las tarjetas para desplegarlas o haz clic para rotarlas
          </p>
        </motion.div>

        <div
          ref={ref}
          className="flex justify-center items-center min-h-[500px] cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          <div className="relative w-full max-w-md h-[400px]">
            {cards.map((card, index) => {
              const style = getCardStyle(index)
              const isActive = index === activeIndex

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          ...style,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  style={{ zIndex: style.zIndex }}
                  className="absolute inset-0"
                >
                  <div
                    className={`h-full rounded-3xl border-2 shadow-xl transition-shadow duration-300 overflow-hidden relative
                      ${
                        card.color === "petrol"
                          ? "border-petrol/30"
                          : "border-orange/30"
                      }
                      ${isActive && isHovered ? "shadow-2xl" : ""}
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
                          ? "bg-gradient-to-t from-petrol-dark/95 via-petrol-dark/70 to-petrol-dark/40"
                          : "bg-gradient-to-t from-orange/95 via-orange/70 to-orange/40"
                      }`}
                    />
                    
                    <div className="relative h-full flex flex-col p-8">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm"
                      >
                        <card.icon
                          size={32}
                          className="text-white"
                        />
                      </div>

                      <h3
                        className="text-2xl font-bold mb-4 text-white"
                      >
                        {card.title}
                      </h3>

                      <p className="text-white/90 leading-relaxed flex-grow">
                        {card.content}
                      </p>

                      <div className="flex items-center gap-2 mt-6 text-sm text-white/70">
                        <span>Clic para ver siguiente</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div
                      className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 rounded-tr-xl border-white/30"
                    />
                    <div
                      className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 rounded-bl-xl border-white/30"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={(e) => {
                e.stopPropagation()
                setActiveIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? card.color === "petrol"
                    ? "bg-petrol w-8"
                    : "bg-orange w-8"
                  : "bg-border hover:bg-muted-foreground/30"
              }`}
              aria-label={`View ${card.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
