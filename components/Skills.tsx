import React from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    label: 'Languages',
    color: 'border-blue-400/40',
    dot: 'bg-blue-400',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'SQL', 'Bash', 'Go'],
  },
  {
    label: 'Frameworks & Libraries',
    color: 'border-violet-400/40',
    dot: 'bg-violet-400',
    skills: ['FastAPI', 'React', 'Next.js', 'Flask', 'PySpark', 'Apache Beam', 'Streamlit', 'Node.js'],
  },
  {
    label: 'Databases',
    color: 'border-emerald-400/40',
    dot: 'bg-emerald-400',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    label: 'Cloud & Infrastructure',
    color: 'border-amber-400/40',
    dot: 'bg-amber-400',
    skills: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'GCP Dataflow'],
  },
  {
    label: 'Tools & Practices',
    color: 'border-rose-400/40',
    dot: 'bg-rose-400',
    skills: ['Git', 'ETL Pipelines', 'Data Modeling', 'CI/CD', 'Prometheus'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: 'easeOut' },
  }),
}

const Skills = () => (
  <section id="skills" className="py-20 md:py-28 bg-surface-raised/60">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="mb-12"
      >
        <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
          <span className="text-accent/50 font-mono text-xs font-medium">04</span>
          <span className="h-px w-8 bg-accent/30" />
          <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">Skills</span>
        </motion.div>
        <motion.h2 variants={fadeUp} custom={1} className="font-heading text-display-lg text-cream">
          Tools of the trade
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="space-y-8"
      >
        {categories.map((cat, ci) => (
          <motion.div key={cat.label} variants={fadeUp} custom={ci}>
            <div className="flex items-center gap-2.5 mb-3">
              <span className={`w-2 h-2 rounded-full ${cat.dot}`} />
              <h3 className="text-cream text-sm font-medium">{cat.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span
                  key={skill}
                  className={`px-3.5 py-2 rounded-lg text-sm bg-surface-card border ${cat.color} text-cream-muted hover:text-cream hover:bg-surface-hover transition-all duration-200 cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

export default Skills
