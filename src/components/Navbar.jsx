import { useState, useEffect } from "react"
import { motion } from "motion/react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  const links = [
    { label: "ABOUT", num: "01" },
    { label: "SKILLS", num: "02" },
    { label: "PROJECTS", num: "03" },
    { label: "CONTACT", num: "04" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 500)
    return () => clearInterval(blink)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "bg-surface/70 border-primary/40"
          : "bg-surface/30 border-primary/20"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-display text-xs text-primary">
            &gt; PORTFOLIO_{cursorVisible ? "_" : "\u00A0"}
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-xs text-secondary font-headline shrink-0">
          <motion.span
            className="w-2 h-2 rounded-full bg-secondary"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          ONLINE
        </div>

        <div className="flex gap-4 md:gap-8">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.label.toLowerCase())}
              className="group relative font-headline text-xs md:text-sm tracking-widest text-on-surface-variant overflow-hidden"
            >
              <span className="text-primary/60 mr-1">[{link.num}]</span>
              <span className="group-hover:text-primary transition-colors duration-200">
                {link.label}
              </span>
              <span className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden">
                <span className="absolute left-0 w-full h-[2px] bg-secondary opacity-0 group-hover:opacity-80 group-hover:animate-[scan_0.5s_linear]" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar