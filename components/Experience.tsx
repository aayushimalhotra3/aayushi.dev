import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap } from 'lucide-react'

type Experience = {
  title:    string
  company:  string
  location: string
  period:   string
  current?: boolean
  bullets:  string[]
}

const experiences: Experience[] = [
  {
    title:    'Cloud Integration Intern',
    company:  'DataHub LLC',
    location: 'Chicago, IL (Remote)',
    period:   'Mar 2026 – May 2026',
    current:  true,
    bullets: [
      'Upskilling on Red Hat OpenShift, IBM Cloud, and IBM watsonx.data as part of a structured cloud integration track focused on enterprise deployments.',
      'Preparing for and completing cloud platform certification exams sponsored by DataHub, with hands-on work in client consulting and presentations.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'IDX Exchange LLC',
    location: 'Remote',
    period: 'Oct 2025 – Jan 2026',
    bullets: [
      'Built Python + SQL ingestion checks for listing feeds (schema validation, dedupe, null thresholds, idempotent loads), reducing bad records by ~35%.',
      'Implemented feed health KPIs and dashboards (freshness, reject reasons, coverage, deltas), cutting ad hoc investigations by 2–3 hours/week.',
      'Tuned MySQL schemas and query plans for high-traffic filters (index design, EXPLAIN profiling, query rewrites), lowering median latency ~30%.',
    ],
  },
  {
    title: 'Cloud Engineering Intern',
    company: 'Ericsson',
    location: 'Remote',
    period: 'May 2024 – Jul 2024',
    bullets: [
      'Refactored Apache Beam pipelines on GCP Dataflow (windowing, combiner efficiency, IO tuning), improving end-to-end processing time ~30%.',
      'Added validation probes, structured logs, and rollout checks; reduced time to isolate data regressions by ~25%.',
    ],
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'MSU College of Social Science',
    location: 'East Lansing, MI',
    period: 'Mar 2024 – Feb 2025',
    bullets: [
      'Built analysis-ready datasets from public APIs using Python (pandas) with schema guards and deduping.',
      'Trained baseline models with error analysis and reproducible reporting artifacts.',
    ],
  },
  {
    title: 'Data Analytics Intern',
    company: 'Innefu Labs',
    location: 'Gurgaon, India',
    period: 'May 2023 – Jul 2023',
    bullets: [
      'Standardized PySpark ingestion for high-volume security telemetry (partitioning, caching, vectorized transforms), reducing batch processing time ~25%.',
      'Delivered Streamlit dashboards and scheduled reports, cutting manual reporting effort ~30%.',
    ],
  },
  {
    title: 'Student Analyst',
    company: 'MSU IT Services',
    location: 'East Lansing, MI',
    period: 'Sep 2022 – May 2023',
    bullets: [
      'Provided technical support for university systems, resolving 200+ tickets across network, software, and access issues.',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const Experience = () => (
  <section id="experience" className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.1 }}
        className="mb-12"
      >
        <motion.p variants={fadeUp} className="section-label mb-4">
          03 &mdash; Experience
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-display-lg text-primary"
        >
          Where I&apos;ve worked
        </motion.h2>
      </motion.div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="group bg-card rounded-card shadow-card border-l-[3px] border-accent p-6 md:p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-display text-primary font-bold text-lg leading-tight">
                    {exp.company}
                  </h3>
                  {exp.current && (
                    <span
                      className="font-mono text-[10px] tracking-[0.14em] uppercase px-2 py-0.5 rounded-sm"
                      style={{
                        background: 'rgba(110,59,91,0.18)',
                        color:      'var(--accent-blush)',
                        border:     '1px solid rgba(201,160,160,0.22)',
                      }}
                    >
                      current
                    </span>
                  )}
                </div>
                <p className="text-muted text-sm mt-0.5">{exp.title}</p>
              </div>
              <span className="text-muted text-sm shrink-0 font-mono">
                {exp.period}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-muted text-xs mb-3">
              <MapPin size={12} />
              <span>{exp.location}</span>
            </div>

            <ul className="space-y-1.5">
              {exp.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="text-muted text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-2 before:h-px before:bg-accent/40"
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
        className="mt-6 bg-card rounded-card shadow-card p-6 md:p-7 border-l-[3px] border-muted/30"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-start gap-3">
            <GraduationCap size={20} className="text-accent mt-0.5 shrink-0" />
            <div>
              <h3 className="font-display text-primary font-bold text-lg leading-tight">
                Michigan State University
              </h3>
              <p className="text-muted text-sm">
                B.S. Computer Science &middot; Cognitive Science Minor
              </p>
            </div>
          </div>
          <span className="text-muted text-sm shrink-0 font-mono ml-8 sm:ml-0">
            2022 – 2026
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-muted text-xs mt-2 ml-8">
          <MapPin size={12} />
          <span>East Lansing, MI</span>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Experience
