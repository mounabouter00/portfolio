import { motion } from "motion/react"
import { projects } from "../data/projects"
import novexImg from "../assets/NOVEX.png"
import stageflowImg from "../assets/STAGEFLOW.png"

const images = {
  novex: novexImg,
  stageflow: stageflowImg,
}

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-background overflow-hidden">
      <h2 className="font-display text-xl md:text-2xl text-center text-primary mb-12 tracking-widest">
        PROJECTS
      </h2>

      <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 max-w-5xl mx-auto pb-4 [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="flex flex-col w-[380px] shrink-0 snap-center bg-white/[0.03] border border-white/10 hover:border-primary/50 backdrop-blur-md overflow-hidden transition-colors duration-300 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative w-full h-32 shrink-0 overflow-hidden">
              {images[project.image] ? (
                <img
                  src={images[project.image]}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/40 via-surface to-secondary/30" />
              )}
              <div className="absolute inset-0 bg-background/60" />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[9px] border border-primary/40 text-primary font-display whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="font-headline text-sm text-primary mb-1.5">
                {project.name}
              </h3>

              <p className="text-xs text-on-surface-variant line-clamp-3">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects