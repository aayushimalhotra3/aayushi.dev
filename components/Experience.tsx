'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    company:  'IDX Exchange',
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

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function TimelineEntry({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(exp.current ?? false)

  return (
    <div
      style={{
        display:       'grid',
        gridTemplateColumns: '1px 1fr',
        gap:           '0 24px',
        paddingBottom: '2rem',
        position:      'relative',
      }}
    >
      {/* Gold vertical line */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position:        'absolute',
            left:            0,
            top:             0,
            bottom:          0,
            width:           '1px',
            backgroundColor: index < experiences.length - 1 ? '#C4A86B' : 'transparent',
            opacity:         0.3,
          }}
        />
        {/* Gold dot */}
        <div
          style={{
            position:        'absolute',
            left:            '-4px',
            top:             '4px',
            width:           '9px',
            height:          '9px',
            borderRadius:    '50%',
            backgroundColor: exp.current ? '#C4A86B' : '#8B5C7A',
            border:          '2px solid #F2ECE4',
            zIndex:          1,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
      >
        {/* Role label */}
        <p
          style={{
            fontFamily:    '"JetBrains Mono", monospace',
            fontSize:      '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color:         exp.current ? '#8B5C7A' : '#7A6F63',
            marginBottom:  '4px',
          }}
        >
          {exp.title}
          {exp.current && (
            <span
              style={{
                marginLeft:      '8px',
                display:         'inline-flex',
                alignItems:      'center',
                gap:             '4px',
                color:           '#8B5C7A',
              }}
            >
              <span className="relative flex" style={{ width: '6px', height: '6px' }}>
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                  style={{ backgroundColor: '#8B5C7A' }}
                />
                <span
                  className="relative inline-flex rounded-full"
                  style={{ width: '6px', height: '6px', backgroundColor: '#8B5C7A' }}
                />
              </span>
              Current
            </span>
          )}
        </p>

        {/* Company + toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            background:     'none',
            border:         'none',
            padding:        0,
            cursor:         'pointer',
            textAlign:      'left',
            width:          '100%',
            display:        'flex',
            alignItems:     'baseline',
            justifyContent: 'space-between',
            gap:            '12px',
            marginBottom:   '6px',
          }}
        >
          <span
            style={{
              fontFamily:    '"Instrument Serif", Georgia, serif',
              fontWeight:    400,
              fontSize:      'clamp(1.4rem, 3.5vw, 2rem)',
              color:         open ? '#8B5C7A' : '#1A1411',
              lineHeight:    1.1,
              transition:    'color 200ms',
            }}
          >
            {exp.company}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize:   '1.1rem',
              color:      open ? '#8B5C7A' : '#7A6F63',
              lineHeight: 1,
              display:    'inline-block',
              userSelect: 'none',
              flexShrink: 0,
            }}
          >
            +
          </motion.span>
        </button>

        {/* Meta */}
        <div
          style={{
            display:    'flex',
            alignItems: 'center',
            flexWrap:   'wrap',
            gap:        '6px 8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#7A6F63' }}>
            <MapPin size={10} />
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '0.04em' }}>
              {exp.location}
            </span>
          </div>
          <span style={{ color: '#D4CCC2', fontSize: '8px' }}>&#9670;</span>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#7A6F63', letterSpacing: '0.04em' }}>
            {exp.period}
          </span>
        </div>

        {/* Expanded bullets */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              style={{ overflow: 'hidden' }}
            >
              <div
                style={{
                  marginTop:   '14px',
                  paddingTop:  '14px',
                  borderTop:   '1px solid #D4CCC2',
                }}
              >
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
                  {exp.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 + j * 0.06, ease: EASE }}
                      style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#1A1411', lineHeight: 1.65 }}
                    >
                      <span style={{ color: '#8B5C7A', fontFamily: '"JetBrains Mono", monospace', flexShrink: 0 }}>—</span>
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-warm"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div className="container-inner">

        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span
            style={{
              fontFamily:    '"JetBrains Mono", monospace',
              fontSize:      '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         '#7A6F63',
              display:       'inline-flex',
              alignItems:    'center',
              gap:           '8px',
            }}
          >
            <span style={{ color: '#C4A86B' }}>03</span>
            <span style={{ width: '32px', height: '1px', backgroundColor: '#C4A86B', display: 'inline-block' }} />
            Experience
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily:   '"Instrument Serif", Georgia, serif',
            fontWeight:   400,
            fontSize:     'clamp(2.25rem, 5vw, 3.25rem)',
            color:        '#1A1411',
            marginBottom: '3.5rem',
            lineHeight:   1.1,
          }}
        >
          Where I&apos;ve <em style={{ fontStyle: 'italic' }}>worked</em>
        </motion.h2>

        {/* Timeline */}
        <div style={{ paddingLeft: '16px' }}>
          {experiences.map((exp, i) => (
            <TimelineEntry key={exp.company} exp={exp} index={i} />
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          style={{
            backgroundColor: '#E8E0D4',
            border:          '1px solid #D4CCC2',
            borderRadius:    '12px',
            padding:         '20px 24px',
            display:         'flex',
            flexDirection:   'column',
            gap:             '8px',
            marginTop:       '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <GraduationCap size={17} style={{ color: '#8B5C7A', flexShrink: 0, marginTop: '2px' }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <h3 style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontSize: '1.1rem', color: '#1A1411', fontWeight: 400 }}>
                    Michigan State University
                  </h3>
                  <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '13px', color: '#7A6F63', marginTop: '2px' }}>
                    B.S. Computer Science &middot; Cognitive Science Minor
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', color: '#7A6F63' }}>
                    <MapPin size={10} />
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px' }}>East Lansing, MI</span>
                  </div>
                </div>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#7A6F63', letterSpacing: '0.08em', flexShrink: 0 }}>
                  2022 – 2026
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
