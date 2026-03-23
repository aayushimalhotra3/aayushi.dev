import React from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'SQL', 'Bash', 'Go'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['FastAPI', 'React', 'Next.js', 'Flask', 'PySpark', 'Apache Beam', 'Streamlit', 'Node.js'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    label: 'Cloud & Infrastructure',
    skills: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'GCP Dataflow'],
  },
  {
    label: 'Tools & Practices',
    skills: ['Git', 'ETL Pipelines', 'Data Modeling', 'CI/CD', 'Prometheus'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-accent text-sm tracking-[0.2em] uppercase mb-4"
          >
            Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-serif text-display-md text-cream italic"
          >
            Tools of the trade
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-12"
        >
          {categories.map((cat, catIndex) => (
            <motion.div key={cat.label} variants={fadeUp} custom={catIndex}>
              <h3 className="text-cream-dim text-xs tracking-[0.15em] uppercase mb-5">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm text-cream-muted bg-surface-card border border-border hover:border-accent/30 hover:text-cream transition-all duration-200 cursor-default"
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
}

export default Skills
