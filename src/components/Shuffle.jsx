import { useEffect, useRef } from "react"
import gsap from "gsap"

function Shuffle({ text, className = "" }) {
  const containerRef = useRef(null)
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  useEffect(() => {
    const spans = containerRef.current.querySelectorAll("span")

    spans.forEach((span, index) => {
      const finalChar = span.dataset.char

      if (finalChar === " ") return

      let iterations = 0
      const maxIterations = 8

      const interval = setInterval(() => {
        if (iterations < maxIterations) {
          span.textContent = letters[Math.floor(Math.random() * letters.length)]
          iterations++
        } else {
          span.textContent = finalChar
          clearInterval(interval)
        }
      }, 40)

      // Décalage progressif entre chaque lettre
      gsap.delayedCall(index * 0.04, () => {
        clearInterval(interval)
        let localIterations = 0
        const localInterval = setInterval(() => {
          if (localIterations < maxIterations) {
            span.textContent = letters[Math.floor(Math.random() * letters.length)]
            localIterations++
          } else {
            span.textContent = finalChar
            clearInterval(localInterval)
          }
        }, 40)
      })

      clearInterval(interval)
    })
  }, [text])

  return (
    <span ref={containerRef} className={className}>
      {text.split("").map((char, index) => (
        <span key={index} data-char={char}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}

export default Shuffle