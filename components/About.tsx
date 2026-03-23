import React from 'react'
import { motion } from 'framer-motion'

const facts = [
  { label: 'International', detail: 'From India, lived in the Dominican Republic' },
  { label: 'Multilingual', detail: 'English, Hindi, German, Spanish' },
  { label: 'Education', detail: 'B.S. Computer Science + Cognitive Science Minor, MSU' },
  { label: 'Night owl', detail: 'Best commits happen between 10 PM and 4 AM' },
  { label: 'Sci-fi reader', detail: 'Dune and Asimov on repeat' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const About = () => (
  <section id="about" className="py-32 md:py-40">
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
          About
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="font-serif text-display-md text-cream italic"
        >
          Building systems where<br className="hidden md:block" /> correctness isn&apos;t optional
        </motion.h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
        {/* Left column - bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <p className="text-cream-muted text-lg leading-relaxed mb-6">
            Computer Science senior at Michigan State University with five internships
            spanning the US, India, and the UAE. I specialize in data pipelines, backend APIs,
            and cloud infrastructure — the invisible architecture that everything else depends on.
          </p>
          <p className="text-cream-muted text-lg leading-relaxed mb-8">
            Currently a cloud engineering intern at IDX Exchange LLC working with GCP,
            Apache Beam, and production data systems. Previously at Ericsson optimizing
            Dataflow pipelines, and at Innefu Labs building PySpark analytics at scale.
            HackDuke Code for Good winner.
          </p>
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-cream-dim text-sm">
              Open to full-time SWE, backend, and data engineering roles for 2026
            </span>
          </div>
        </motion.div>

        {/* Right column - quick facts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="lg:col-span-2"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-cream-dim text-xs tracking-[0.2em] uppercase mb-8"
          >
            Quick facts
          </motion.p>
          <div className="space-y-5">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                variants={fadeUp}
                custom={i + 1}
                className="group border-l border-border hover:border-accent/50 pl-5 py-1 transition-colors duration-300"
              >
                <p className="text-cream text-sm font-medium mb-0.5">{f.label}</p>
                <p className="text-cream-dim text-sm">{f.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
