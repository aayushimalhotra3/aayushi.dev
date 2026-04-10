'use client'

import React, { useRef, useState, useEffect } from 'react'
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
    location: 'Chicago, IL · Remote',
    period:   'Mar 2026 – May 2026',
    current:  true,
    bullets: [
      'Upskilling on Red Hat OpenShift, IBM Cloud, and IBM watsonx.data as part of a structured cloud integration track focused on enterprise deployments.',
      'Preparing for and completing cloud platform certification exams sponsored by DataHub, with hands-on work in client consulting and presentations.',
    ],
  },
  {
    title:    'Software Engineering Intern',
    company:  'IDX Exchange LLC',
    location: 'Remote',
    period:   'Oct 2025 – Jan 2026',
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
    company:  'MSU Social Science',
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

/* ── Individual card with 3‑D parallax tilt ─────────────────────────── */
function ExpCard({
  exp,
  index,
  dragging,
}: {
  exp:      Experience
  index:    number
  dragging: boolean
}) {
  const el   = useRef<HTMLDivElement>(null)
  const raf  = useRef<number>(0)
  const tilt = useRef({ x: 0, y: 0 })
  const [tiltState, setTiltState] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging || !el.current) return
    const r  = el.current.getBoundingClientRect()
    const nx = (e.clientX - r.left)  / r.width  - 0.5   // –0.5 → +0.5
    const ny = (e.clientY - r.top)   / r.height - 0.5
    tilt.current = { x: ny * -9, y: nx * 9 }
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => setTiltState({ ...tilt.current }))
  }

  const onLeave = () => {
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => setTiltState({ x: 0, y: 0 }))
  }

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  const isWide = exp.current

  return (
    <div
      ref={el}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        flexShrink:      0,
        width:           isWide ? '360px' : '300px',
        scrollSnapAlign: 'start',
        perspective:     '1000px',
      }}
    >
      <motion.div
        animate={{ rotateX: tiltState.x, rotateY: tiltState.y, scale: tiltState.x !== 0 || tiltState.y !== 0 ? 1.025 : 1 }}
        transition={{ type: 'spring', stiffness: 220, damping: 28 }}
        style={{
          height:          '100%',
          display:         'flex',
          background:      'var(--bg-card)',
          borderRadius:    '16px',
          overflow:        'hidden',
          transformStyle:  'preserve-3d',
          border:          exp.current
                             ? '1px solid rgba(216,163,181,0.28)'
                             : '1px solid var(--border-subtle)',
          borderTop:       exp.current
                             ? '2px solid var(--accent-blush)'
                             : '1px solid var(--border-subtle)',
          boxShadow:       tiltState.x !== 0 || tiltState.y !== 0
                             ? '0 28px 70px rgba(0,0,0,0.55), 0 1px 0 rgba(245,241,234,0.06)'
                             : '0 4px 24px rgba(0,0,0,0.28)',
          transition:      'box-shadow 0.25s ease, border-color 0.25s ease',
        }}
      >
        {/* ── Spine: vertical company name ─────────────────────── */}
        <div
          style={{
            width:           '40px',
            flexShrink:      0,
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            background:      'rgba(245,241,234,0.018)',
            borderRight:     '1px solid var(--border-subtle)',
            overflow:        'hidden',
            position:        'relative',
          }}
        >
          <span
            style={{
              position:      'absolute',
              transform:     'rotate(-90deg)',
              whiteSpace:    'nowrap',
              fontFamily:    'var(--font-display)',
              fontSize:      '0.6rem',
              fontWeight:    700,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color:         exp.current ? 'rgba(216,163,181,0.55)' : 'rgba(245,241,234,0.2)',
              userSelect:    'none',
            }}
          >
            {exp.company}
          </span>
        </div>

        {/* ── Card body ─────────────────────────────────────────── */}
        <div
          style={{
            flex:           1,
            padding:        '22px 18px',
            display:        'flex',
            flexDirection:  'column',
            minWidth:       0,
            minHeight:      0,
          }}
        >
          {/* index + period row */}
          <div
            style={{
              display:         'flex',
              justifyContent:  'space-between',
              alignItems:      'center',
              marginBottom:    '18px',
            }}
          >
            <span
              className="font-mono"
              style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--accent-blush)', opacity: 0.65 }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              {exp.current && (
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ background: 'var(--accent-blush)' }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-1.5 w-1.5"
                    style={{ background: 'var(--accent-blush)' }}
                  />
                </span>
              )}
              <span
                className="font-mono"
                style={{ fontSize: '0.58rem', color: 'var(--text-tertiary)', letterSpacing: '0.06em' }}
              >
                {exp.period}
              </span>
            </div>
          </div>

          {/* Company */}
          <h3
            className="font-display"
            style={{
              fontSize:      'clamp(0.95rem, 2vw, 1.15rem)',
              fontWeight:    700,
              color:         'var(--text-primary)',
              lineHeight:    1.15,
              marginBottom:  '5px',
            }}
          >
            {exp.company}
          </h3>

          {/* Role */}
          <p
            className="font-sans"
            style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px' }}
          >
            {exp.title}
          </p>

          {/* Location */}
          <div
            style={{
              display:        'flex',
              alignItems:     'center',
              gap:            '4px',
              color:          'var(--text-tertiary)',
              fontSize:       '0.68rem',
              marginBottom:   '16px',
            }}
          >
            <MapPin size={10} />
            <span className="font-mono" style={{ letterSpacing: '0.05em' }}>{exp.location}</span>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'var(--border-subtle)', marginBottom: '14px' }} />

          {/* Bullets */}
          <ul
            style={{
              flex:          1,
              overflowY:     'hidden',
              display:       'flex',
              flexDirection: 'column',
              gap:           '8px',
            }}
          >
            {exp.bullets.map((b, j) => (
              <li
                key={j}
                style={{
                  display:    'flex',
                  gap:        '8px',
                  fontSize:   '0.74rem',
                  color:      'var(--text-secondary)',
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    width:        '3px',
                    height:       '3px',
                    borderRadius: '50%',
                    background:   'var(--accent-plum)',
                    flexShrink:   0,
                    marginTop:    '0.53em',
                    display:      'block',
                  }}
                />
                {b}
              </li>
            ))}
          </ul>

          {exp.current && (
            <div style={{ paddingTop: '14px' }}>
              <span
                className="font-mono"
                style={{
                  fontSize:      '0.56rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding:       '0.18rem 0.48rem',
                  borderRadius:  '4px',
                  background:    'rgba(110,59,91,0.18)',
                  color:         'var(--accent-blush)',
                  border:        '1px solid rgba(216,163,181,0.22)',
                }}
              >
                current
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

/* ── Main section ────────────────────────────────────────────────────── */
export default function Experience() {
  const trackRef   = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const origin     = useRef({ x: 0, scroll: 0 })
  const [hint, setHint] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setHint(false), 3800)
    return () => clearTimeout(t)
  }, [])

  const startDrag = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    setDragging(true)
    origin.current = { x: e.pageX, scroll: trackRef.current.scrollLeft }
  }
  const onDrag = (e: React.MouseEvent) => {
    if (!dragging || !trackRef.current) return
    e.preventDefault()
    trackRef.current.scrollLeft = origin.current.scroll - (e.pageX - origin.current.x)
  }
  const stopDrag = () => setDragging(false)

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-4">03 &mdash; Experience</p>
            <h2 className="font-display text-display-lg" style={{ color: 'var(--text-primary)' }}>
              Where I&apos;ve worked
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: hint ? 0.45 : 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono hidden sm:block select-none"
            style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}
          >
            drag to explore &nbsp;→
          </motion.p>
        </div>

        {/* Track wrapper — right-edge fade hint */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ position: 'relative' }}
        >
          <div
            style={{
              position:      'absolute',
              right:         0,
              top:           0,
              bottom:        0,
              width:         '72px',
              background:    'linear-gradient(to right, transparent, var(--bg-primary))',
              pointerEvents: 'none',
              zIndex:        2,
            }}
          />

          <div
            ref={trackRef}
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            style={{
              display:                  'flex',
              gap:                      '12px',
              overflowX:                'auto',
              scrollSnapType:           'x mandatory',
              cursor:                   dragging ? 'grabbing' : 'grab',
              userSelect:               'none',
              scrollbarWidth:           'none',
              WebkitOverflowScrolling:  'touch',
              paddingBottom:            '6px',
            }}
          >
            {experiences.map((exp, i) => (
              <ExpCard key={exp.company} exp={exp} index={i} dragging={dragging} />
            ))}
            {/* Spacer so last card doesn't sit under fade */}
            <div style={{ flexShrink: 0, width: '48px' }} />
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{
            background:   'var(--bg-card)',
            border:       '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding:      '18px 22px',
          }}
        >
          <div className="flex items-start gap-3">
            <GraduationCap size={17} className="shrink-0 mt-0.5" style={{ color: 'var(--accent-blush)' }} />
            <div>
              <h3 className="font-display font-bold" style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                Michigan State University
              </h3>
              <p className="font-sans mt-0.5" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                B.S. Computer Science &middot; Cognitive Science Minor
              </p>
              <div className="flex items-center gap-1 mt-1" style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                <MapPin size={10} /><span>East Lansing, MI</span>
              </div>
            </div>
          </div>
          <span className="font-mono shrink-0 sm:ml-4" style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}>
            2022 – 2026
          </span>
        </motion.div>

      </div>
    </section>
  )
}
