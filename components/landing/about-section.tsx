"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ChartNoAxesCombined, Network, Brain, FileCheck2 } from "lucide-react"
import Image from "next/image"

const highlights = [
  {
    icon: ChartNoAxesCombined,
    title: "Compromiso Total",
    description: "Cada proyecto recibe dedicación completa hasta lograr los resultados.",
  },
  {
    icon: Network,
    title: "Sin Intermediarios",
    description: "Respuestas inmediatas y soluciones técnicas.",
  },
  {
    icon: Brain,
    title: "Conocimiento Profundo",
    description: "Conocimiento de tu empresa, lo que permite diseñar soluciones que realmente funcionan.",
  },
  {
    icon: FileCheck2,
    title: "Cumplimiento Normativo",
    description: "Documentación con soporte legal y normativo vigente.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-petrol/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image/Profile Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative aspect-[2/3] max-w-sm mx-auto lg:max-w-md lg:aspect-[9/16]">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-petrol/20 to-orange/10 rounded-3xl transform rotate-3" />

              {/* Photo Frame */}
              <div className="relative h-full bg-card rounded-3xl border border-border shadow-2xl overflow-hidden">
                {/* Profile Photo */}
                <Image
                  src="/images/maria-fernanda.jpeg"
                  alt="Maria Fernanda Sanchez Trujillo - Fisioterapeuta y Especialista en Seguridad y Salud"
                  fill
                  className="object-cover object-top"
                />

                {/* Overlay with Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">
                    Maria Fernanda Sanchez Trujillo
                  </h3>
                  <p className="text-white/80 text-sm mb-2">
                    Fisioterapeuta
                  </p>
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    Especialista en Seguridad y Salud
                  </span>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-orange/50 rounded-tl-2xl" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-petrol-light/50 rounded-br-2xl" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-6 py-3 bg-orange/10 rounded-full text-orange text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              ¿Por qué MoviSafe Salud?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Cumplimiento legal, <span className="text-petrol">protección humana</span> y visión estratégica.
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              En MoviSafe Salud, optimizamos los procesos de cumplimiento para que la seguridad
              sea un impulso para tu productividad, no una carga administrativa. Aquí trabajas
              directamente con la líder de la marca;  soy{" "}
              <strong className="text-petrol font-bold">MARIA FERNANDA SANCHEZ TRUJILLO</strong>,
              fisioterapeuta y especialista en Seguridad y Salud en el Trabajo y trabajamos
              para garantizar resultados excepcionales.
            </p>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-petrol/10 flex items-center justify-center group-hover:bg-petrol/20 transition-colors">
                    <item.icon size={24} className="text-petrol" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
