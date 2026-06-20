import { motion } from "motion/react"
import { skills } from "../data/skills"

const colorClasses = {
  primary: { text: "text-primary", bg: "bg-primary" },
  secondary: { text: "text-secondary", bg: "bg-secondary" },
}

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-surface-container-lowest">
      <h2 className="font-display text-xl md:text-2xl text-center text-primary mb-12 tracking-widest">
        TECH_STACK
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => {
          const colors = colorClasses[skill.color] || colorClasses.primary

          return (
            <motion.div
              key={skill.name}
              className="group relative bg-white/[0.03] border border-white/10 hover:border-primary/50 backdrop-blur-md p-6 flex flex-col items-center gap-3 transition-colors duration-300 overflow-hidden"
              initial={{ opacity: 0, scale: 1.3, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
            >
              <span className={`material-symbols-outlined text-4xl ${colors.text}`}>
                {skill.icon}
              </span>

              <span className={`font-headline text-sm ${colors.text}`}>
                {skill.name}
              </span>

              <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${colors.bg}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.08 + 0.3 }}
                />
              </div>

              <p className="text-[10px] text-on-surface-variant text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
                {skill.detail}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills