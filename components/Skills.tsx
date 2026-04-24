'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const COLUMNS = [
  {
    header: 'I WRITE',
    skills: [
      { name: 'Python',     size: '1.8rem' },
      { name: 'TypeScript', size: '1.4rem' },
      { name: 'SQL',        size: '1.4rem' },
      { name: 'Go',         size: '1.2rem' },
      { name: 'Java',       size: '1.2rem' },
      { name: 'C++',        size: '1rem'   },
      { name: 'Bash',       size: '0.95rem' },
    ],
  },
  {
    header: 'I BUILD WITH',
    skills: [
      { name: 'FastAPI',      size: '1.8rem' },
      { name: 'React',        size: '1.4rem' },
      { name: 'Next.js',      size: '1.4rem' },
      { name: 'PySpark',      size: '1.2rem' },
      { name: 'Apache Beam',  size: '1.2rem' },
      { name: 'Flask',        size: '1rem'   },
      { name: 'Streamlit',    size: '0.95rem' },
    ],
  },
  {
    header: 'I DEPLOY ON',
    skills: [
      { name: 'GCP',        size: '1.8rem' },
      { name: 'AWS',        size: '1.4rem' },
      { name: 'Docker',     size: '1.4rem' },
      { name: 'Kubernetes', size: '1.2rem' },
      { name: 'PostgreSQL', size: '1.2rem' },
      { name: 'Terraform',  size: '1rem'   },
      { name: 'Redis',      size: '0.95rem' },
    ],
  },
]

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function SkillItem({ name, size, delay }: { name: string; size: string; delay: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: EASE }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        display:       'block',
        fontFamily:    '"Instrument Serif", Georgia, serif',
        fontWeight:    400,
        fontSize:      size,
        lineHeight:    1.3,
        color:         hovered ? '#8B5C7A' : '#F2ECE4',
        transition:    'color 200ms',
        cursor:        'default',
        paddingBottom: '4px',
        borderBottom:  hovered ? '1px solid #8B5C7A' : '1px solid transparent',
      }}
    >
      {name}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-dark"
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
              color:         '#A69B8E',
              display:       'inline-flex',
              alignItems:    'center',
              gap:           '8px',
            }}
          >
            <span style={{ color: '#C4A86B' }}>04</span>
            <span style={{ width: '32px', height: '1px', backgroundColor: '#C4A86B', display: 'inline-block' }} />
            Skills
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
            color:        '#F2ECE4',
            marginBottom: '3.5rem',
            lineHeight:   1.1,
          }}
        >
          Tools of the <em style={{ fontStyle: 'italic' }}>trade</em>
        </motion.h2>

        {/* Three-column magazine layout */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap:                 '0',
            position:            'relative',
          }}
        >
          {COLUMNS.map((col, ci) => (
            <div
              key={col.header}
              style={{
                padding:     '0 2rem',
                borderLeft:  ci === 0 ? 'none' : '1px solid rgba(196,168,107,0.2)',
                paddingLeft: ci === 0 ? '0' : '2rem',
              }}
            >
              {/* Column header */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.1 }}
                style={{
                  fontFamily:    '"JetBrains Mono", monospace',
                  fontSize:      '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color:         '#C4A86B',
                  marginBottom:  '1.5rem',
                }}
              >
                {col.header}
              </motion.p>

              {/* Skills list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {col.skills.map((s, si) => (
                  <SkillItem
                    key={s.name}
                    name={s.name}
                    size={s.size}
                    delay={ci * 0.08 + si * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
