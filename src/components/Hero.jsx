import { motion } from "motion/react"
import Shuffle from "./Shuffle"
import robot1 from "../assets/robot-1.png"
import robot2 from "../assets/robot-2.png"

function Hero() {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-background">
      {/* Lueur centrale en fond */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(157,78,221,0.25)_0%,_transparent_60%)]" />

      {/* Robot en haut à droite - balancement en boucle */}
      <motion.img
        src={robot1}
        alt="Robot mascotte"
        className="absolute top-24 right-6 md:right-20 w-24 md:w-36"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          y: { duration: 0.8, delay: 0.3 },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      />

      {/* Robot en bas à gauche - balancement en boucle */}
      <motion.img
        src={robot2}
        alt="Robot mascotte"
        className="absolute bottom-12 left-6 md:left-20 w-24 md:w-36"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: [0, -8, 8, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.5 },
          y: { duration: 0.8, delay: 0.5 },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
      />

      {/* Texte centré */}
      <div className="relative z-10 text-center max-w-2xl">
<h1 className="title-dynamic font-display text-2xl md:text-4xl uppercase mb-6 leading-relaxed">
  <Shuffle text="Welcome to my universe" />
</h1>
        <motion.p
          className="text-on-surface-variant text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Développeuse en formation, passionnée par la création
          d'applications web modernes et l'apprentissage des architectures
          cloud. Ce portfolio est lui-même un terrain d'expérimentation —
          React, Docker, déploiement.
        </motion.p>

        <motion.button
          onClick={scrollToNext}
          className="px-8 py-3 rounded-full border border-primary text-primary font-headline tracking-wide uppercase text-sm"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            type: "spring",
            bounce: 0.5,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(224,182,255,0.6)",
          }}
        >
          Découvrez plus
        </motion.button>
      </div>
    </section>
  )
}

export default Hero