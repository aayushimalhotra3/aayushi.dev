import React from 'react'
import { motion } from 'framer-motion'

type Skill = {
  name: string
  size: 'lg' | 'md' | 'sm'
}

const skills: Skill[] = [
  // Large — primary tools
  { name: 'Python', size: 'lg' },
  { name: 'FastAPI', size: 'lg' },
  { name: 'GCP', size: 'lg' },
  { name: 'PostgreSQL', size: 'lg' },
  { name: 'Docker', size: 'lg' },
  // Medium — strong proficiency
  { name: 'TypeScript', size: 'md' },
  { name: 'React', size: 'md' },
  { name: 'Kubernetes', size: 'md' },
  { name: 'Apache Beam', size: 'md' },
  { name: 'AWS', size: 'md' },
  { name: 'PySpark', size: 'md' },
  { name: 'SQL', size: 'md' },
  { name: 'Next.js', size: 'md' },
  // Small — working knowledge
  { name: 'Java', size: 'sm' },
  { name: 'C++', size: 'sm' },
  { name: 'Go', size: 'sm' },
  { name: 'Terraform', size: 'sm' },
  { name: 'MySQL', size: 'sm' },
  { name: 'MongoDB', size: 'sm' },
  { name: 'Prometheus', size: 'sm' },
  { name: 'Git', size: 'sm' },
  { name: 'CI/CD', size: 'sm' },
  { name: 'Bash', size: 'sm' },
  { name: 'Flask', size: 'sm' },
  { name: 'Streamlit', size: 'sm' },
]

const sizeStyles: Record<Skill['size'], string> = {
  lg: 'text-base md:text-lg font-bold px-5 py-2.5 bg-accent text-white hover:bg-accent-hover',
  md: 'text-sm font-medium px-4 py-2 bg-card text-primary border border-border hover:border-accent/40 hover:text-accent',
  sm: 'text-xs px-3 py-1.5 bg-bg text-muted border border-border hover:border-accent/30 hover:text-primary',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const Skills = () => (
  <section id="skills" className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.1 }}
        className="mb-12"
      >
        <motion.p variants={fadeUp} className="section-label mb-4">
          04 &mdash; Skills
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-display-lg text-primary"
        >
          Tools of the trade
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        transition={{ staggerChildren: 0.03, delayChildren: 0.1 }}
        className="flex flex-wrap gap-3 items-center"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill.name}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.35, ease: 'easeOut' },
              },
            }}
            whileHover={{ scale: 1.05 }}
            className={`rounded-full font-mono cursor-default transition-all duration-200 shadow-card ${sizeStyles[skill.size]}`}
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
)

export default Skills
