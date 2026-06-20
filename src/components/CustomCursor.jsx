import { useEffect, useState } from "react"
import { motion } from "motion/react"

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) setIsHovering(true)
    }

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) setIsHovering(false)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full border-2 border-primary pointer-events-none z-[9999]"
      style={{
        boxShadow: "0 0 10px #e0b6ff",
      }}
      animate={{
        x: position.x - (isHovering ? 20 : 10),
        y: position.y - (isHovering ? 20 : 10),
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
        borderColor: isHovering ? "#c7fff0" : "#e0b6ff",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  )
}

export default CustomCursor