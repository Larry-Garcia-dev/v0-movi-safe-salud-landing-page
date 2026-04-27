"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Target, Eye, Award, X, ArrowRight } from "lucide-react"
import Image from "next/image"

const cards = [
  {
    id: "mission",
    icon: Target,
    title: "Misión",
    content:
      "Transformamos la Seguridad y Salud en el Trabajo para que deje de ser un trámite y se convierta en una cultura de bienestar y eficiencia.",
    fullContent: {
      subtitle: "Nuestra razón de ser",
      paragraphs: [
        "En MoviSafe Salud, transformamos la Seguridad y Salud en el Trabajo para que deje de ser un trámite y se convierta en una cultura de bienestar y eficiencia.",
        "Nuestra misión es brindar un acompañamiento genuino, cercano y experto, eliminando la complejidad administrativa para convertir el cumplimiento legal en una ventaja estratégica.",
        "Trabajamos mano a mano con las empresas como su aliado de confianza, facilitando procesos fluidos que protegen el talento humano y aseguran la continuidad operativa.",
        "En MoviSafe Salud, garantizamos que la prevención sea el motor de productividad de cada empresa, que fundamental se vuelve sencillo, permitiendo que las organizaciones se muevan con total seguridad hacia su crecimiento."
      ],
      highlights: [
        "Asesoría técnica personalizada",
        "Acompañamiento continuo",
        "Ambientes de trabajo seguros",
        "Cultura de prevención"
      ]
    },
    color: "petrol",
    accentColor: "orange",
    image: "/images/mission.jpg",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Visión",
    content:
      "Seremos reconocidos por convertir la complejidad en simplicidad, logrando que cada organización en la que intervenimos deje de evadir la norma para abrazar el bienestar como su mayor activo",
    fullContent: {
      subtitle: "Hacia dónde vamos",
      paragraphs: [
        "Buscamos que para el 2030, MoviSafe Salud sea sinónimo de tranquilidad administrativa y eficiencia operativa, logrando que la prevención sea una elección consciente y entusiasta para las organizaciones.",
        "Consolidarnos como el referente líder en la transformación de la cultura preventiva en las organizaciones. Aspiramos a ser el aliado estratégico que logre la adherencia total de las empresas hacia la Seguridad y Salud en el Trabajo, posicionándola no como un requisito denso, sino como un pilar fundamental, ágil y natural del éxito empresarial.",
        "En MoviSafe Salud, seremos reconocidos por convertir la complejidad en simplicidad, logrando que cada organización en la que intervenimos deje de evadir la norma para abrazar el bienestar como su mayor activo."
      ],
      highlights: [
        "Liderazgo en el sector SST",
        "Innovación tecnológica",
        "Expansión nacional",
        "Soluciones digitales"
      ]
    },
    color: "orange",
    accentColor: "petrol",
    image: "/images/vision.jpg",
  },
  {
    id: "values",
    icon: Award,
    title: "Valores",
    content:
      "En MoviSafe Salud, nuestra ética de trabajo se resume en una promesa: hacer que lo fundamental sea sencillo. No solo cumplimos con la norma, transformamos tu empresa a través de cinco pilares estratégicos", fullContent: {
        subtitle: "Lo que nos define",
        paragraphs: [
          "Simplicidad Resolutiva: Creemos firmemente que la seguridad no tiene por qué ser compleja para ser efectiva. Nuestra capacidad radica en traducir normativas densas y procesos técnicos en soluciones claras, ágiles y fáciles de ejecutar, eliminando cualquier barrera administrativa que detenga la operatividad de nuestros clientes",
          "Acompañamiento Genuino: Somos un aliado que camina mano a mano con la organización. Nos involucramos en la realidad de cada empresa para ofrecer un respaldo cercano y humano, asegurando que los líderes nunca se sientan solos frente a sus responsabilidades legales y preventivas.",
          "Rigor Técnico con Sentido: Aplicamos la norma con excelencia y precisión técnica, pero siempre bajo una mirada estratégica. Cada recomendación y proceso que lideramos tiene un propósito claro: proteger la vida del trabajador y garantizar la rentabilidad y continuidad del negocio, convirtiendo la ley en un activo de valor.",
          "Innovación Preventiva: Nos anticipamos a los riesgos mediante enfoques modernos y creativos que integran la seguridad en el ADN de la empresa, logrando que la prevención sea percibida como una herramienta de modernización y no como una imposición.",
          "Empoderamiento Cultural: Trabajamos para que la Seguridad y Salud en el Trabajo sea un lenguaje común y entusiasta en todos los niveles de la organización. Nuestro objetivo es inspirar una adherencia natural donde el cuidado mutuo sea una elección consciente, transformando la obligación en convicción"
        ],
        highlights: [
          "Integridad y transparencia",
          "Compromiso total",
          "Innovación constante",
          "Excelencia en el servicio"
        ]
      },
    color: "petrol",
    accentColor: "orange",
    image: "/images/values.jpg",
  },
]

export function StackedCardsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalCard, setModalCard] = useState<typeof cards[0] | null>(null)
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

  const openModal = (card: typeof cards[0]) => {
    setModalCard(card)
    setModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => setModalCard(null), 300)
    document.body.style.overflow = "unset"
  }

  // Autoplay effect - pauses when modal is open
  useEffect(() => {
    if (modalOpen) return

    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % cards.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [modalOpen])

  return (
    <>
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
              <span className="text-petrol">Misión</span>,{" "}
              <span className="text-orange">Visión</span>,{" "}
              <span className="text-petrol">Valores</span> 

            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xl text-pretty">
              Haz clic en los indicadores o desliza para explorar nuestra identidad.
            </p>
          </motion.div>

          <div ref={ref} className="relative">
            {/* Carousel Container */}
            <div className="relative h-[500px] md:h-[400px] overflow-hidden rounded-3xl">
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
                          className={`absolute inset-0 ${card.color === "petrol"
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
                              className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mb-6"
                            >
                              {card.content}
                            </motion.p>

                            {/* Ver más Button */}
                            <motion.button
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                              onClick={() => openModal(card)}
                              className="group inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
                            >
                              <span>Ver más</span>
                              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
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
                className={`relative h-3 rounded-full transition-all duration-500 overflow-hidden ${index === activeIndex ? "w-12" : "w-3"
                  } ${index === activeIndex
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
                className={`text-sm md:text-base font-medium transition-all duration-300 ${index === activeIndex
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

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && modalCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.5
              }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl ${modalCard.color === "petrol" ? "bg-petrol-dark" : "bg-orange"
                }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={modalCard.image}
                  alt={modalCard.title}
                  fill
                  className="object-cover opacity-20"
                />
                <div className={`absolute inset-0 ${modalCard.color === "petrol"
                  ? "bg-gradient-to-br from-petrol-dark via-petrol-dark/95 to-petrol/90"
                  : "bg-gradient-to-br from-orange via-orange/95 to-orange-light/90"
                  }`} />
              </div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3 }}
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                aria-label="Cerrar"
              >
                <X size={24} />
              </motion.button>

              {/* Content */}
              <div className="relative overflow-y-auto max-h-[90vh] p-8 md:p-12">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-6 mb-8"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <modalCard.icon size={40} className="text-white md:w-12 md:h-12" />
                  </div>
                  <div>
                    <span className="text-white/70 text-sm md:text-base font-medium">
                      {modalCard.fullContent.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      {modalCard.title}
                    </h2>
                  </div>
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="h-1 bg-white/30 rounded-full mb-8 origin-left"
                />

                {/* Paragraphs */}
                <div className="space-y-6 mb-10">
                  {modalCard.fullContent.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-white/90 text-lg md:text-xl leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {modalCard.fullContent.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                    >
                      <span className="text-white font-medium text-sm md:text-base">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Bottom Decorative */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex justify-center mt-10"
                >
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <div className="w-8 h-[1px] bg-white/30" />
                    <span>MoviSafe Salud</span>
                    <div className="w-8 h-[1px] bg-white/30" />
                  </div>
                </motion.div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 rounded-tl-2xl border-white/20 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 rounded-br-2xl border-white/20 pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
