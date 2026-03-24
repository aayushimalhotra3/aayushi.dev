import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'IDX Exchange LLC',
    location: 'Remote',
    period: 'Oct 2025 \u2013 Present',
    color: 'bg-blue-400',
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
    color: 'bg-violet-400',
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
    color: 'bg-emerald-400',
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
    color: 'bg-amber-400',
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
    color: 'bg-rose-400',
    bullets: [
      'Built an NLP sentiment classifier (spaCy, scikit-learn) with evaluation and data checks; automated 50%+ of support triage.',
    ],
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

const Experience = () => (
  <section id="experience" className="py-20 md:py-28 bg-surface-raised/60">
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="mb-12"
      >
        <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
          <span className="text-accent/50 font-mono text-xs font-medium">02</span>
          <span className="h-px w-8 bg-accent/30" />
          <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">Experience</span>
        </motion.div>
        <motion.h2 variants={fadeUp} custom={1} className="font-heading text-display-lg text-cream">
          Where I&apos;ve worked
        </motion.h2>
      </motion.div>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="group bg-surface-card border border-border rounded-xl p-5 md:p-6 hover:border-accent/20 hover:bg-surface-hover/30 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div className="flex items-start gap-3">
                <span className={`mt-1.5 w-2.5 h-2.5 rounded-full ${exp.color} shrink-0`} />
                <div>
                  <h3 className="font-heading text-cream font-semibold text-lg leading-tight">{exp.company}</h3>
                  <p className="text-cream-muted text-sm">{exp.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-cream-dim text-sm shrink-0 sm:text-right ml-5 sm:ml-0">
                <span>{exp.period}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-cream-dim text-xs mb-3 ml-5 sm:ml-[22px]">
              <MapPin size={11} />
              <span>{exp.location}</span>
            </div>

            <ul className="space-y-1.5 ml-5 sm:ml-[22px]">
              {exp.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="text-cream-muted text-sm leading-relaxed pl-3 relative before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-px before:bg-accent/30"
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45 }}
        className="mt-6 bg-surface-card border border-border rounded-xl p-5 md:p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cream-dim/40 shrink-0" />
            <div>
              <h3 className="font-heading text-cream font-semibold text-lg leading-tight">Michigan State University</h3>
              <p className="text-cream-muted text-sm">B.S. Computer Science &middot; Cognitive Science Minor</p>
            </div>
          </div>
          <span className="text-cream-dim text-sm shrink-0 ml-5 sm:ml-0">Expected May 2026</span>
        </div>
        <div className="flex items-center gap-1.5 text-cream-dim text-xs mt-2 ml-[22px]">
          <MapPin size={11} />
          <span>East Lansing, MI</span>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Experience
