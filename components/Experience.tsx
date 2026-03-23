import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'IDX Exchange LLC',
    location: 'Remote',
    period: 'Oct 2025 \u2013 Present',
    bullets: [
      'Built Python + SQL ingestion checks for listing feeds (schema validation, dedupe, null thresholds, idempotent loads), reducing bad records by ~35%.',
      'Implemented feed health KPIs and dashboards (freshness, reject reasons, coverage, deltas), cutting ad hoc investigations by 2\u20133 hours/week.',
      'Tuned MySQL schemas and query plans for high-traffic filters (index design, EXPLAIN profiling, query rewrites), lowering median latency ~30%.',
    ],
  },
  {
    title: 'Cloud Engineering Intern',
    company: 'Ericsson',
    location: 'Remote',
    period: 'May 2024 \u2013 Jul 2024',
    bullets: [
      'Refactored Apache Beam pipelines on GCP Dataflow (windowing, combiner efficiency, IO tuning), improving end-to-end processing time ~30%.',
      'Added validation probes, structured logs, and rollout checks; reduced time to isolate data regressions by ~25%.',
    ],
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'MSU College of Social Science',
    location: 'East Lansing, MI',
    period: 'Mar 2024 \u2013 Feb 2025',
    bullets: [
      'Built analysis-ready datasets from public APIs using Python (pandas) with schema guards and deduping.',
      'Trained baseline models with error analysis and reproducible reporting artifacts.',
    ],
  },
  {
    title: 'Data Analytics Intern',
    company: 'Innefu Labs',
    location: 'Gurgaon, India',
    period: 'May 2023 \u2013 Jul 2023',
    bullets: [
      'Standardized PySpark ingestion for high-volume security telemetry (partitioning, caching, vectorized transforms), reducing batch processing time ~25%.',
      'Delivered Streamlit dashboards and scheduled reports, cutting manual reporting effort ~30%.',
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'ByteBlanket',
    location: 'Dubai, UAE',
    period: 'May 2022 \u2013 Jul 2022',
    bullets: [
      'Built an NLP sentiment classifier (spaCy, scikit-learn) with evaluation and data checks; automated 50%+ of support triage.',
    ],
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

const Experience = () => {
  return (
    <section id="experience" className="py-32 md:py-40">
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
            Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-serif text-display-md text-cream italic"
          >
            Five internships, three countries,<br className="hidden md:block" /> one obsession with reliability
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[7px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[4px] top-2 w-[7px] h-[7px] rounded-full bg-accent/60 ring-4 ring-surface" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-cream font-medium text-base">{exp.title}</h3>
                    <p className="text-accent text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-3 text-cream-dim text-sm sm:text-right shrink-0">
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-cream-dim text-xs mb-4">
                  <MapPin size={11} />
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-cream-muted text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-px before:bg-border-hover"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-12 mt-16 pt-8 border-t border-border"
          >
            <div className="absolute left-0 md:left-[4px] top-10 w-[7px] h-[7px] rounded-full bg-cream-dim/40 ring-4 ring-surface" />
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="text-cream font-medium text-base">Michigan State University</h3>
                <p className="text-cream-muted text-sm">B.S. Computer Science &middot; Cognitive Science Minor</p>
              </div>
              <span className="text-cream-dim text-sm shrink-0">Expected May 2026</span>
            </div>
            <div className="flex items-center gap-1.5 text-cream-dim text-xs mt-2">
              <MapPin size={11} />
              <span>East Lansing, MI</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
