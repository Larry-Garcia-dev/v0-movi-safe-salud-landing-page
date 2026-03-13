"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Phone, Brain, User } from "lucide-react"

const highlights = [
  {
    icon: Check,
    title: "Compromiso Total",
    description: "Cada proyecto recibe dedicación completa hasta lograr los resultados.",
  },
  {
    icon: Phone,
    title: "Sin Intermediarios",
    description: "Respuestas inmediatas. Comunicación directa con la especialista.",
  },
  {
    icon: Brain,
    title: "Conocimiento Profundo",
    description: "Años de experiencia en el sector de seguridad y salud ocupacional.",
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
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Profile Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-petrol/20 to-orange/10 rounded-3xl transform rotate-3" />
              
              {/* Photo Frame */}
              <div className="relative h-full bg-card rounded-3xl border border-border shadow-2xl overflow-hidden">
                {/* Placeholder for Photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full bg-petrol/10 flex items-center justify-center mb-6">
                    <User size={64} className="text-petrol" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Maria Fernanda Sanchez Trujillo
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Fisioterapeuta
                    </p>
                    <span className="inline-block px-4 py-2 bg-petrol/10 rounded-full text-petrol text-sm font-medium">
                      Especialista en Seguridad y Salud
                    </span>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-orange/50 rounded-tl-2xl" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-petrol/50 rounded-br-2xl" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-orange/10 rounded-full text-orange text-sm font-medium mb-4">
              ¿Por qué MoviSafe Salud?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Al contactarme, <span className="text-petrol">no hablas con un vendedor</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              Hablas con la{" "}
              <strong className="text-foreground">especialista que ejecutará tu proyecto</strong>.
              Soy María Fernanda Sánchez Trujillo, Fisioterapeuta y Especialista en Seguridad
              y Salud en el Trabajo. Me involucro personalmente en cada fase de tu proyecto
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
