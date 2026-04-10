'use client'

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
    title:   'Software Engineering Intern',
    company: 'IDX Exchange LLC',
    location: 'Remote',
    period:  'Oct 2025 – Jan 2026',
    bullets: [
      'Built Python + SQL ingestion checks for listing feeds (schema validation, dedupe, null thresholds, idempotent loads), reducing bad records by ~35%.',
      'Implemented feed health KPIs and dashboards (freshness, reject reasons, coverage, deltas), cutting ad hoc investigations by 2–3 hours/week.',
      'Tuned MySQL schemas and query plans for high-traffic filters (index design, EXPLAIN profiling, query rewrites), lowering median latency ~30%.',
    ],
  },
  {
    title:    'Cloud Engineering Intern',
    company:  'Ericsson',
    location: 'Remote',
    period:   'May 2024 – Jul 2024',
    bullets: [
      'Refactored Apache Beam pipelines on GCP Dataflow (windowing, combiner efficiency, IO tuning), improving end-to-end processing time ~30%.',
      'Added validation probes, structured logs, and rollout checks; reduced time to isolate data regressions by ~25%.',
    ],
  },
  {
    title:    'Undergraduate Research Assistant',
    company:  'MSU College of Social Science',
    location: 'East Lansing, MI',
    period:   'Mar 2024 – Feb 2025',
    bullets: [
      'Built analysis-ready datasets from public APIs using Python (pandas) with schema guards and deduping.',
      'Trained baseline models with error analysis and reproducible reporting artifacts.',
    ],
  },
  {
    title:    'Data Analytics Intern',
    company:  'Innefu Labs',
    location: 'Gurgaon, India',
    period:   'May 2023 – Jul 2023',
    bullets: [
      'Standardized PySpark ingestion for high-volume security telemetry (partitioning, caching, vectorized transforms), reducing batch processing time ~25%.',
      'Delivered Streamlit dashboards and scheduled reports, cutting manual reporting effort ~30%.',
    ],
  },
  {
    title:    'Student Analyst',
    company:  'MSU IT Services',
    location: 'East Lansing, MI',
    period:   'Sep 2022 – May 2023',
    bullets: [
      'Provided technical support for university systems, resolving 200+ tickets across network, software, and access issues.',
    ],
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

function TimelineDot({ current }: { current?: boolean }) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
      style={{ top: '1.75rem', zIndex: 10 }}
    >
      {current ? (
        <>
          <span
            className="absolute rounded-full animate-ping"
            style={{ width: '18px', height: '18px', background: 'var(--accent-blush)', opacity: 0.3 }}
          />
          <span
            className="relative rounded-full"
            style={{ width: '10px', height: '10px', background: 'var(--accent-blush)', boxShadow: '0 0 10px rgba(216,163,181,0.5)' }}
          />
        </>
      ) : (
        <span
          className="rounded-full"
          style={{ width: '8px', height: '8px', background: 'var(--accent-plum)', border: '2px solid var(--bg-primary)', display: 'block' }}
        />
      )}
    </div>
  )
}

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const isRight = index % 2 !== 0

  return (
    /* Outer row — used for centering the dot; cards sit in their half */
    <div className="relative hidden lg:flex items-start mb-10">
      <TimelineDot current={exp.current} />

      <motion.div
        className={`w-[46%] ${isRight ? 'ml-auto pl-10' : 'mr-auto pr-10'}`}
        initial={{ opacity: 0, x: isRight ? 36 : -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <Card exp={exp} />
      </motion.div>
    </div>
  )
}

/* Mobile card — left-side dot + connector line */
function MobileCard({ exp, index, isLast }: { exp: Experience; index: number; isLast: boolean }) {
  return (
    <div className="lg:hidden relative flex gap-4 mb-6">
      {/* Dot + line */}
      <div className="relative flex flex-col items-center" style={{ width: '16px', flexShrink: 0 }}>
        <div
          className="rounded-full mt-6 shrink-0"
          style={{
            width:      '8px',
            height:     '8px',
            background: exp.current ? 'var(--accent-blush)' : 'var(--accent-plum)',
            boxShadow:  exp.current ? '0 0 8px rgba(216,163,181,0.5)' : 'none',
          }}
        />
        {!isLast && (
          <div className="flex-1 mt-1" style={{ width: '1px', background: 'var(--border-subtle)' }} />
        )}
      </div>

      <motion.div
        className="flex-1 pb-2"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.45, delay: index * 0.05, ease: EASE }}
      >
        <Card exp={exp} />
      </motion.div>
    </div>
  )
}

function Card({ exp }: { exp: Experience }) {
  return (
    <div
      style={{
        background:   'var(--bg-card)',
        border:       '1px solid var(--border-subtle)',
        borderRadius: '14px',
        padding:      '20px 22px',
        transition:   'border-color 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--border-medium)'
        el.style.boxShadow   = '0 12px 40px rgba(0,0,0,0.45)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--border-subtle)'
        el.style.boxShadow   = 'none'
      }}
    >
      {/* Period */}
      <p
        className="font-mono mb-2"
        style={{ fontSize: '0.62rem', letterSpacing: '0.16em', color: 'var(--text-tertiary)' }}
      >
        {exp.period}
      </p>

      {/* Company + badge */}
      <div className="flex items-center gap-2 flex-wrap mb-1">
        <h3
          className="font-display font-bold"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-primary)', lineHeight: 1.2 }}
        >
          {exp.company}
        </h3>
        {exp.current && (
          <span
            className="font-mono"
            style={{
              fontSize:    '0.58rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding:     '0.18rem 0.5rem',
              borderRadius: '5px',
              background:  'rgba(110,59,91,0.18)',
              color:       'var(--accent-blush)',
              border:      '1px solid rgba(216,163,181,0.22)',
            }}
          >
            current
          </span>
        )}
      </div>

      {/* Role */}
      <p className="font-sans mb-2" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        {exp.title}
      </p>

      {/* Location */}
      <div
        className="flex items-center gap-1 mb-3"
        style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}
      >
        <MapPin size={11} />
        <span>{exp.location}</span>
      </div>

      {/* Bullets */}
      <ul className="space-y-1.5">
        {exp.bullets.map((b, j) => (
          <li
            key={j}
            className="font-sans pl-3 relative"
            style={{
              fontSize:    '0.78rem',
              color:       'var(--text-secondary)',
              lineHeight:  1.55,
            }}
          >
            <span
              className="absolute left-0 top-[0.45em]"
              style={{ width: '5px', height: '1px', background: 'var(--accent-plum)', display: 'block' }}
            />
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-20"
        >
          <p className="section-label mb-4">03 &mdash; Experience</p>
          <h2 className="font-display text-display-lg" style={{ color: 'var(--text-primary)' }}>
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Animated center line — desktop only */}
          <motion.div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px origin-top"
            style={{
              background: 'linear-gradient(to bottom, var(--accent-plum) 0%, var(--border-subtle) 60%, transparent 100%)',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Desktop alternating cards */}
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}

          {/* Mobile cards */}
          {experiences.map((exp, i) => (
            <MobileCard key={`m-${exp.company}`} exp={exp} index={i} isLast={i === experiences.length - 1} />
          ))}

        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-12"
          style={{
            background:   'var(--bg-card)',
            border:       '1px solid var(--border-subtle)',
            borderRadius: '14px',
            padding:      '20px 22px',
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-start gap-3">
              <GraduationCap size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--accent-blush)' }} />
              <div>
                <h3 className="font-display font-bold" style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Michigan State University
                </h3>
                <p className="font-sans" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  B.S. Computer Science &middot; Cognitive Science Minor
                </p>
              </div>
            </div>
            <span className="font-mono ml-8 sm:ml-0" style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', letterSpacing: '0.1em', flexShrink: 0 }}>
              2022 – 2026
            </span>
          </div>
          <div className="flex items-center gap-1 mt-2 ml-[calc(18px+12px)]" style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
            <MapPin size={11} />
            <span>East Lansing, MI</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
