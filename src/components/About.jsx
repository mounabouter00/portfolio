import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "motion/react"

const LINES = [
  "ETUDES: Master en Software Engineering",
  "FOCUS: Développement web, architectures cloud, DevOps",
  "STATUS: À la recherche de nouveaux défis numériques",
]

function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [typedLines, setTypedLines] = useState(["", "", ""])
  const [currentLine, setCurrentLine] = useState(0)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true

    let lineIndex = 0
    let charIndex = 0
    let timeoutId

    const typeChar = () => {
      if (lineIndex >= LINES.length) return

      const currentText = LINES[lineIndex]
      if (!currentText) return

      setTypedLines((prev) => {
        const updated = [...prev]
        updated[lineIndex] = currentText.slice(0, charIndex + 1)
        return updated
      })

      charIndex++

      if (charIndex >= currentText.length) {
        lineIndex++
        setCurrentLine(lineIndex)
        charIndex = 0
        if (lineIndex < LINES.length) {
          timeoutId = setTimeout(typeChar, 200)
        }
      } else {
        timeoutId = setTimeout(typeChar, 25)
      }
    }

    typeChar()

    return () => clearTimeout(timeoutId)
  }, [isInView])

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="relative p-8 bg-white/5 border border-primary/30 backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary animate-pulse" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary animate-pulse" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary animate-pulse" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary animate-pulse" />

          <p className="font-display text-[10px] text-secondary tracking-widest mb-2">
            &gt; USER_ID:
          </p>
        <h2 className="font-display text-xl md:text-2xl text-primary mb-6 tracking-wide uppercase">
  MOUNA BOUTER
</h2>

          <div className="space-y-3 font-display text-xs md:text-sm text-on-surface-variant leading-relaxed min-h-[90px]">
            {LINES.map((_, index) => (
              <p key={index}>
                {typedLines[index] && <span className="text-primary">&gt; </span>}
                {typedLines[index]}
                {currentLine === index && typedLines[index].length < LINES[index].length && (
                  <span className="inline-block w-2 h-3 bg-secondary ml-1 animate-pulse" />
                )}
              </p>
            ))}
          </div>

          <motion.a
            href="/CV_Mouna.pdf"
            download
            className="inline-block mt-8 px-6 py-3 rounded-full border border-primary text-primary font-headline text-sm tracking-wide uppercase"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(224,182,255,0.6)",
            }}
          >
            Télécharger mon CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default About