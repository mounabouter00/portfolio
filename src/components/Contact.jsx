import { motion } from "motion/react"

const EMAIL = "bouter.mouna004@gmail.com"
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`
const GITHUB = "https://github.com/mounabouter00"
const LINKEDIN = "https://www.linkedin.com/in/mouna-bouter" // à confirmer/ajuster

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-background"
    >
      {/* Lueur centrale, cohérente avec le Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(157,78,221,0.2)_0%,_transparent_60%)]" />

      <motion.div
        className="relative z-10 text-center max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="title-dynamic font-display text-2xl md:text-4xl uppercase mb-6">
          LET'S_CONNECT
        </h2>

        <p className="text-on-surface-variant text-sm md:text-base mb-10">
          &gt; Ouverte aux opportunités, collaborations, et discussions tech.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-primary/40 text-on-surface-variant font-headline text-sm tracking-wide uppercase transition-colors"
            whileHover={{
              backgroundColor: "#e0b6ff",
              color: "#0b0b0f",
              scale: 1.05,
              boxShadow: "0 0 25px rgba(224,182,255,0.7)",
            }}
          >
            Email me
          </motion.a>

          <motion.a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-primary/40 text-on-surface-variant font-headline text-sm tracking-wide uppercase transition-colors"
            whileHover={{
              backgroundColor: "#e0b6ff",
              color: "#0b0b0f",
              scale: 1.05,
              boxShadow: "0 0 25px rgba(224,182,255,0.7)",
            }}
          >
            LinkedIn
          </motion.a>

          <motion.a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-primary/40 text-on-surface-variant font-headline text-sm tracking-wide uppercase transition-colors"
            whileHover={{
              backgroundColor: "#e0b6ff",
              color: "#0b0b0f",
              scale: 1.05,
              boxShadow: "0 0 25px rgba(224,182,255,0.7)",
            }}
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact