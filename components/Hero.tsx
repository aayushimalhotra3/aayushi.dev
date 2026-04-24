'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const ROTATING_LINES = [
  'Building data pipelines that don\u2019t break at 3 AM',
  'Shipping backend APIs that actually scale',
  'Designing cloud infrastructure from scratch',
  'Turning messy data into clean systems',
]

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function RotatingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % ROTATING_LINES.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ height: '28px', overflow: 'hidden', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{   y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize:   '17px',
            color:      '#A69B8E',
            position:   'absolute',
            whiteSpace: 'nowrap',
          }}
        >
          {ROTATING_LINES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

const Hero = () => (
  <section
    id="top"
    className="section-dark relative min-h-screen flex flex-col justify-center overflow-hidden"
    style={{ backgroundColor: '#0F0B0A' }}
  >
    {/* Plum radial glow behind right area */}
    <div
      aria-hidden
      style={{
        position:   'absolute',
        inset:      0,
        background: 'radial-gradient(ellipse 55% 60% at 75% 50%, rgba(139,92,122,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex:     0,
      }}
    />

    <div
      className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12"
      style={{ paddingTop: '7rem', paddingBottom: '6rem' }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

        {/* ── Left 60% ── */}
        <div className="flex-1 lg:max-w-[58%]">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}
          >
            <span style={{ display: 'block', width: '40px', height: '1px', backgroundColor: '#C4A86B' }} />
            <span
              style={{
                fontFamily:    '"JetBrains Mono", monospace',
                fontSize:      '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         '#C4A86B',
              }}
            >
              Software Engineer
            </span>
          </motion.div>

          {/* Name */}
          <h1 aria-label="Aayushi Malhotra" style={{ marginBottom: '1.75rem', lineHeight: 0.9 }}>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
              style={{
                display:    'block',
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontWeight: 400,
                fontSize:   'clamp(4.5rem, 10vw, 7.5rem)',
                color:      '#F2ECE4',
              }}
            >
              Aayushi
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
              style={{
                display:    'block',
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontWeight: 400,
                fontStyle:  'italic',
                fontSize:   'clamp(4.5rem, 10vw, 7.5rem)',
                color:      '#8B5C7A',
              }}
            >
              Malhotra
            </motion.span>
          </h1>

          {/* Rotating text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: EASE }}
            style={{ marginBottom: '2.25rem' }}
          >
            <RotatingText />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease: EASE }}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '2.5rem' }}
          >
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                fontFamily:     '"DM Sans", system-ui, sans-serif',
                fontSize:       '14px',
                fontWeight:     500,
                color:          '#F2ECE4',
                backgroundColor: '#8B5C7A',
                borderRadius:   '24px',
                padding:        '12px 28px',
                textDecoration: 'none',
                transition:     'background 220ms, transform 220ms',
                display:        'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#A87393'
                e.currentTarget.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#8B5C7A'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              Get in touch
            </a>
            <a
              href="/Aayushi_Malhotra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily:     '"DM Sans", system-ui, sans-serif',
                fontSize:       '14px',
                fontWeight:     500,
                color:          '#F2ECE4',
                backgroundColor: 'transparent',
                border:         '1px solid rgba(242,236,228,0.35)',
                borderRadius:   '24px',
                padding:        '12px 28px',
                textDecoration: 'none',
                transition:     'border-color 220ms, transform 220ms',
                display:        'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(242,236,228,0.7)'
                e.currentTarget.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(242,236,228,0.35)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              Resume &#8599;
            </a>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.95, ease: EASE }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <span className="relative flex" style={{ width: '8px', height: '8px' }}>
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ backgroundColor: '#4CAF79' }}
              />
              <span
                className="relative inline-flex rounded-full"
                style={{ width: '8px', height: '8px', backgroundColor: '#4CAF79' }}
              />
            </span>
            <span
              style={{
                fontFamily:    '"JetBrains Mono", monospace',
                fontSize:      '11px',
                letterSpacing: '0.1em',
                color:         '#A69B8E',
              }}
            >
              Open to full-time roles &middot; May 2026
            </span>
          </motion.div>
        </div>

        {/* ── Right 40% — Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="hidden lg:block"
          style={{ position: 'relative', flexShrink: 0, width: '340px' }}
        >
          {/* Decorative gold offset rectangle */}
          <div
            aria-hidden
            style={{
              position:    'absolute',
              top:         '15px',
              left:        '15px',
              width:       '100%',
              height:      '100%',
              border:      '1px solid #C4A86B',
              borderRadius: '12px',
              opacity:     0.4,
              zIndex:      0,
            }}
          />

          {/* Photo */}
          <div
            style={{
              position:     'relative',
              zIndex:       1,
              borderRadius: '12px',
              overflow:     'hidden',
              border:       '1px solid #8B5C7A',
              aspectRatio:  '3/4',
            }}
          >
            <Image
              src="/aayushi/profile.jpeg"
              alt="Aayushi Malhotra"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>

          {/* Badge */}
          <div
            style={{
              position:        'absolute',
              bottom:          '-12px',
              right:           '-12px',
              zIndex:          2,
              backgroundColor: '#1A1411',
              border:          '1px solid #2E241D',
              borderRadius:    '8px',
              padding:         '8px 12px',
            }}
          >
            <span
              style={{
                fontFamily:    '"JetBrains Mono", monospace',
                fontSize:      '10px',
                letterSpacing: '0.08em',
                color:         '#A69B8E',
                whiteSpace:    'nowrap',
              }}
            >
              5+ internships &middot; 3 countries
            </span>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      style={{
        position:  'absolute',
        bottom:    '2rem',
        left:      '50%',
        transform: 'translateX(-50%)',
        display:   'flex',
        flexDirection: 'column',
        alignItems:    'center',
        gap:       '8px',
        zIndex:    10,
      }}
    >
      <span
        style={{
          fontFamily:    '"JetBrains Mono", monospace',
          fontSize:      '9px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color:         '#C4A86B',
          opacity:       0.7,
        }}
      >
        Scroll
      </span>
      <div
        className="animate-bounce-y"
        style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, #C4A86B, transparent)' }}
      />
    </motion.div>
  </section>
)

export default Hero
