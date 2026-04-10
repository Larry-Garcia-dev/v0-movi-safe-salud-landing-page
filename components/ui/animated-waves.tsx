"use client"

import { motion } from "framer-motion"

export function AnimatedWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1A1A1A]">
      {/* Wave 1 - Cream/Gold (slowest, back) */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200%] h-[70%]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ x: 0 }}
        animate={{ x: [0, -720, 0] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path
          fill="rgba(212, 175, 55, 0.04)"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </motion.svg>

      {/* Wave 2 - Gold medium */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200%] h-[55%]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ x: -720 }}
        animate={{ x: [-720, 0, -720] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path
          fill="rgba(212, 175, 55, 0.06)"
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,181.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </motion.svg>

      {/* Wave 3 - Cream accent */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200%] h-[45%]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ x: -360 }}
        animate={{ x: [-360, -1080, -360] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path
          fill="rgba(245, 245, 236, 0.03)"
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,176C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </motion.svg>

      {/* Wave 4 - Gold (fastest, front) */}
      <motion.svg
        className="absolute bottom-0 left-0 w-[200%] h-[35%]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ x: 0 }}
        animate={{ x: [0, -720, 0] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path
          fill="rgba(212, 175, 55, 0.08)"
          d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </motion.svg>

      {/* Top waves - subtle cream movement */}
      <motion.svg
        className="absolute top-0 left-0 w-[200%] h-[35%] rotate-180"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ x: -720 }}
        animate={{ x: [-720, 0, -720] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path
          fill="rgba(245, 245, 236, 0.02)"
          d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </motion.svg>

      {/* Side waves - left */}
      <motion.svg
        className="absolute left-0 top-0 w-[40%] h-[200%]"
        viewBox="0 0 320 1440"
        preserveAspectRatio="none"
        initial={{ y: 0 }}
        animate={{ y: [0, -720, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path
          fill="rgba(212, 175, 55, 0.03)"
          d="M0,0L0,48C0,96,0,192,21.3,288C43,384,85,480,106.7,576C128,672,128,768,106.7,864C85,960,43,1056,53.3,1152C64,1248,107,1344,128,1392L149,1440L0,1440L0,1392C0,1344,0,1248,0,1152C0,1056,0,960,0,864C0,768,0,672,0,576C0,480,0,384,0,288C0,192,0,96,0,48L0,0Z"
        />
      </motion.svg>

      {/* Side waves - right */}
      <motion.svg
        className="absolute right-0 top-0 w-[40%] h-[200%] rotate-180"
        viewBox="0 0 320 1440"
        preserveAspectRatio="none"
        initial={{ y: -720 }}
        animate={{ y: [-720, 0, -720] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path
          fill="rgba(245, 245, 236, 0.02)"
          d="M0,0L0,48C0,96,0,192,21.3,288C43,384,85,480,106.7,576C128,672,128,768,106.7,864C85,960,43,1056,53.3,1152C64,1248,107,1344,128,1392L149,1440L0,1440L0,1392C0,1344,0,1248,0,1152C0,1056,0,960,0,864C0,768,0,672,0,576C0,480,0,384,0,288C0,192,0,96,0,48L0,0Z"
        />
      </motion.svg>
    </div>
  )
}
