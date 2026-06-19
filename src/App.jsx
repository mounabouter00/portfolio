
import './App.css'

import { motion } from "motion/react"

function App() {
  return (
    <motion.h1
      className="text-4xl font-bold text-purple-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Framer Motion fonctionne !
    </motion.h1>
  )
}

export default App