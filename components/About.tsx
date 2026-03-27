import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Languages, GraduationCap, Moon, BookOpen } from 'lucide-react'

const facts = [
  { icon: Globe, label: 'International', detail: 'From India, lived in Dominican Republic' },
  { icon: Languages, label: 'Multilingual', detail: 'English, Hindi, German, Spanish' },
  { icon: GraduationCap, label: 'Education', detail: 'B.S. CS + Cognitive Science Minor, MSU' },
  { icon: Moon, label: 'Night owl coder', detail: 'Best work happens after midnight' },
  { icon: BookOpen, label: 'Sci-fi reader', detail: 'Dune and Asimov on repeat' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.p variants={fadeUp} className="section-label mb-4">
          01 &mdash; About
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-display-lg text-primary mb-10"
        >
          About me
        </motion.h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <p className="text-muted text-base leading-relaxed mb-4">
            Computer Science senior at Michigan State with five internships
            spanning the US, India, and the UAE. I specialize in data pipelines,
            backend APIs, and cloud infrastructure.
          </p>
          <p className="text-muted text-base leading-relaxed mb-4">
            Currently working as a software engineering intern at IDX Exchange,
            building Python + SQL ingestion systems and tuning MySQL for
            high-traffic feeds. Previously at Ericsson refactoring Apache Beam
            pipelines on GCP Dataflow.
          </p>
          <p className="text-muted text-base leading-relaxed">
            I care about systems that are reliable, observable, and built to
            last.
          </p>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}
          className="lg:col-span-2"
        >
          <motion.p
            variants={fadeUp}
            className="text-muted text-xs tracking-[0.15em] uppercase mb-5 font-medium font-mono"
          >
            Quick facts
          </motion.p>
          <div className="space-y-3">
            {facts.map((f) => (
              <motion.div
                key={f.label}
                variants={fadeUp}
                className="group bg-card rounded-2xl px-4 py-3.5 shadow-card border-l-[3px] border-accent hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <f.icon size={16} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-primary text-sm font-semibold">
                      {f.label}
                    </p>
                    <p className="text-muted text-xs mt-0.5">{f.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
