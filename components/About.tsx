import React from 'react'
import { motion } from 'framer-motion'
import { Globe, GraduationCap, Moon, BookOpen, Gamepad2 } from 'lucide-react'

const facts = [
  { icon: Globe,         label: 'International',  detail: 'Interned in the US, India & UAE' },
  { icon: Globe,         label: 'Multilingual',   detail: 'English, Hindi & learning more' },
  { icon: GraduationCap, label: 'Michigan State', detail: 'CS + Cognitive Science Minor, May 2026' },
  { icon: Moon,          label: 'Night owl',      detail: 'Best commits land between 10pm – 4am' },
  { icon: BookOpen,      label: 'Sci-fi reader',  detail: 'Dune on repeat, fantasy binge mode' },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] } },
}

const About = () => (
  <section
    id="about"
    className="section-warm"
    style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
  >
    <div className="container-inner">

      {/* Kicker */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
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
          <span style={{ color: '#C4A86B' }}>01</span>
          <span style={{ width: '32px', height: '1px', backgroundColor: '#C4A86B', display: 'inline-block' }} />
          About
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontWeight: 400,
          fontSize:   'clamp(2.25rem, 5vw, 3.25rem)',
          color:      '#1A1411',
          marginBottom: '3rem',
          lineHeight: 1.1,
        }}
      >
        About <em style={{ fontStyle: 'italic' }}>me</em>
      </motion.h2>

      <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16">

        {/* Bio */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.12 }}
        >
          {[
            'Computer Science senior at Michigan State with a Cognitive Science minor, graduating May 2026. Five internships spanning the US, India, and the UAE.',
            'I specialize in data pipelines, backend APIs, and cloud infrastructure — the invisible architecture that everything else depends on. Currently a software engineering intern at IDX Exchange, building Python + SQL ingestion checks and tuning MySQL for high-traffic feeds.',
            'Previously at Ericsson refactoring Apache Beam pipelines on GCP Dataflow. I care about systems that are reliable, observable, and built to last.',
          ].map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              style={{
                fontFamily:  '"DM Sans", system-ui, sans-serif',
                fontSize:    '16px',
                lineHeight:  1.8,
                color:       '#1A1411',
                marginBottom: '1.25rem',
              }}
            >
              {para}
            </motion.p>
          ))}
          <motion.div variants={fadeUp}>
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                fontFamily:    '"DM Sans", system-ui, sans-serif',
                fontSize:      '14px',
                fontWeight:    500,
                color:         '#8B5C7A',
                textDecoration: 'none',
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '4px',
                marginTop:     '0.5rem',
                position:      'relative',
              }}
              className="hover-underline"
            >
              Say hi anytime &#8594;
            </a>
          </motion.div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily:    '"JetBrains Mono", monospace',
              fontSize:      '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         '#7A6F63',
              marginBottom:  '1.25rem',
            }}
          >
            Quick facts
          </motion.p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {facts.map(f => (
              <motion.div
                key={f.label}
                variants={fadeUp}
                style={{
                  backgroundColor: '#E8E0D4',
                  borderRadius:    '10px',
                  padding:         '14px 16px',
                  borderLeft:      '3px solid #8B5C7A',
                  display:         'flex',
                  alignItems:      'flex-start',
                  gap:             '12px',
                  transition:      'transform 200ms, border-color 200ms',
                  cursor:          'default',
                }}
                whileHover={{ x: 3 }}
              >
                <f.icon size={15} style={{ color: '#8B5C7A', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1A1411' }}>
                    {f.label}
                  </p>
                  <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '12px', color: '#7A6F63', marginTop: '2px' }}>
                    {f.detail}
                  </p>
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
