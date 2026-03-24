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
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: 'easeOut' },
  }),
}

const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="mb-12"
      >
        <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
          <span className="text-accent/50 font-mono text-xs font-medium">01</span>
          <span className="h-px w-8 bg-accent/30" />
          <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">About</span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="font-heading text-display-lg text-cream"
        >
          About me
        </motion.h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <p className="text-cream-muted text-base leading-relaxed mb-4">
            I&apos;m a Computer Science senior at Michigan State University who&apos;s racked up
            five internships across three countries before even graduating. I&apos;ve built data
            pipelines at Ericsson, tuned MySQL queries at IDX Exchange, shipped PySpark analytics
            at Innefu Labs in India, and trained NLP models at a startup in Dubai.
          </p>
          <p className="text-cream-muted text-base leading-relaxed mb-4">
            My sweet spot is the backend and data layer — the invisible infrastructure that
            everything else depends on. I care about systems that are correct, observable, and
            don&apos;t page you at 3 AM (even though I&apos;m probably awake anyway).
          </p>
          <p className="text-cream-muted text-base leading-relaxed mb-6">
            Oh, and I won HackDuke&apos;s Code for Good hackathon. Not a bad weekend.
          </p>
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-surface-card border border-border rounded-lg w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-cream-muted text-sm">
              Open to full-time SWE, backend & data engineering roles &middot; 2026
            </span>
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="lg:col-span-2"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-cream-dim text-xs tracking-[0.2em] uppercase mb-5 font-medium"
          >
            Quick facts
          </motion.p>
          <div className="space-y-3">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                variants={fadeUp}
                custom={i + 1}
                className="group bg-surface-card border border-border rounded-lg px-4 py-3 hover:border-accent/30 transition-all duration-200"
              >
                <p className="text-cream text-sm font-medium">{f.label}</p>
                <p className="text-cream-dim text-xs mt-0.5">{f.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
