"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MessageCircle, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react"

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "310 756 8927",
    href: "https://wa.me/573107568927",
    color: "hover:text-green-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@movisafesalud",
    href: "https://instagram.com/movisafesalud",
    color: "hover:text-pink-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admin.mafesanchez@movisafesalud.com",
    href: "mailto:admin.mafesanchez@movisafesalud.com",
    color: "hover:text-orange",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-petrol-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(234,122,35,0.1),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                <Image
                  src="/images/logo.jpeg"
                  alt="MoviSafe Salud Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold">
                MoviSafe <span className="font-normal opacity-80">SALUD</span>
              </span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 text-pretty">
              Consultoría especializada en Seguridad y Salud en el Trabajo.
              Transformamos la normativa legal en una ventaja estratégica para tu empresa.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <MapPin size={16} />
              <span>Colombia</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Navegación</h3>
            <nav className="flex flex-col gap-3">
              {[
                  { name: "Inicio", href: "#inicio" },
                  { name: "Servicios", href: "#servicios" },
                  { name: "Nosotros", href: "#nosotros" },
                  { name: "Misión y Visión", href: "#mision" },
                ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contáctanos</h3>
            <div className="space-y-4">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 text-white/70 transition-colors group ${contact.color}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <contact.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">{contact.label}</p>
                    <p className="font-medium">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} MoviSafe Salud. Todos los derechos reservados.
            </p>
            <p className="text-white/50 text-sm flex items-center gap-1">
              Hecho con <Heart size={14} className="text-orange fill-orange" /> en Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
