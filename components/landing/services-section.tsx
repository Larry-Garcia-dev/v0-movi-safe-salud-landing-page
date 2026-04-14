"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  ClipboardCheck,
  FileText,
  GraduationCap,
  Search,
  Activity,
  AlertTriangle,
} from "lucide-react"

const services = [
  {
    icon: ClipboardCheck,
    title: "Auditorías internas (Pre-Ministerio)",
    description:
      "Simulacro de inspección. Evaluamos tu SG-SST con ojo crítico para detectar fallas antes de que se conviertan en multas.",
    color: "petrol",
  },
  {
    icon: FileText,
    title: "Diseño del SG-SST",
    description:
      "Estructuración desde cero bajo estándares mínimos. No te entregamos una carpeta, te entregamos una hoja de ruta.",
    color: "orange",
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones en SST",
    description:
      "Talleres teórico-prácticos. Capacitamos a tu equipo con metodología dinámica.",
    color: "petrol",
  },
  {
    icon: Search,
    title: "Inspecciones planeadas",
    description:
      "Recorrido técnico. Identificamos el peligro antes de que se convierta en un costo o una tragedia.",
    color: "orange",
  },
  {
    icon: Activity,
    title: "Análisis de puestos de trabajo",
    description:
      "Evaluación ergonómica para reducir el ausentismo laboral y aumentar la productividad.",
    color: "petrol",
  },
  {
    icon: AlertTriangle,
    title: "Reportes de accidentes (AT)",
    description:
      "Gestión ante ARL e investigación. Acompañamiento experto en el momento crítico.",
    color: "orange",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,124,141,0.05),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-petrol/10 rounded-full text-petrol text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Soluciones <span className="text-orange">Integrales</span> en SST
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Ofrecemos un portafolio completo de servicios diseñados para blindar
            tu empresa y cumplir con toda la normatividad vigente.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className={`relative h-full p-6 bg-card rounded-2xl border border-border shadow-sm 
                  transition-all duration-500 
                  hover:-translate-y-2 hover:shadow-xl 
                  ${
                    service.color === "petrol"
                      ? "hover:shadow-petrol/20 hover:border-petrol/30"
                      : "hover:shadow-orange/20 hover:border-orange/30"
                  }`}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                    ${
                      service.color === "petrol"
                        ? "bg-gradient-to-br from-petrol/5 to-transparent"
                        : "bg-gradient-to-br from-orange/5 to-transparent"
                    }`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110
                      ${
                        service.color === "petrol"
                          ? "bg-petrol/10 text-petrol"
                          : "bg-orange/10 text-orange"
                      }`}
                  >
                    <service.icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-petrol transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div
                  className={`absolute bottom-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 
                    ${
                      service.color === "petrol"
                        ? "border-r-2 border-b-2 border-petrol/40"
                        : "border-r-2 border-b-2 border-orange/40"
                    } rounded-br-lg`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
