'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Word = ({ children, delay }: { children: string; delay: number }) => (
  <motion.span
    className="inline-block"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.span>
)

const Hero = () => (
  <section
    id="top"
    className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    style={{ backgroundColor: '#0e0d0c' }}
  >
    {/* Warm vignette */}
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)',
      }}
    />

    {/* Main content */}
    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-32">

      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.0 }}
        className="font-ibm text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-10 md:mb-12"
        style={{ color: '#9a7a7a' }}
      >
        Software Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Data Engineer
      </motion.p>

      {/* Name masthead */}
      <h1
        className="font-display text-masthead uppercase leading-[0.88] mb-10 md:mb-14 select-none"
        style={{ color: 'var(--text-primary)' }}
        aria-label="Aayushi Malhotra"
      >
        <Word delay={0.1}>Aayushi</Word>
        <br />
        <Word delay={0.25}>Malhotra</Word>
      </h1>

      {/* Hook */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.45 }}
        className="font-ibm text-[12px] md:text-[13px] tracking-[0.06em] max-w-md mb-10 leading-relaxed"
        style={{ color: '#9a7a7a' }}
      >
        Built across 3 countries — US, India, UAE.
        <br />
        Deploys everywhere.
      </motion.p>

      {/* Availability pill */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="inline-flex items-center gap-3"
      >
        <span
          className="font-ibm text-[11px] tracking-[0.15em] rounded-sm px-4 py-1.5"
          style={{ color: '#c9a0a0', border: '1px solid rgba(201,160,160,0.3)' }}
        >
          [ available&nbsp;·&nbsp;may 2026 ]
        </span>
        <span className="relative flex h-1.5 w-1.5">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
            style={{ backgroundColor: '#c9a0a0' }}
          />
          <span
            className="relative inline-flex rounded-full h-1.5 w-1.5"
            style={{ backgroundColor: '#c9a0a0' }}
          />
        </span>
      </motion.div>
    </div>

    {/* Night owl */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="hidden md:block absolute bottom-8 right-8 z-10 font-ibm text-[10px] tracking-[0.12em] select-none"
      style={{ color: 'rgba(245,241,234,0.2)' }}
    >
      [ best commits: 10pm–4am ]
    </motion.p>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
    >
      <span
        className="font-ibm text-[9px] tracking-[0.35em] uppercase"
        style={{ color: 'rgba(245,241,234,0.25)' }}
      >
        scroll
      </span>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
        className="w-px h-10"
        style={{ transformOrigin: 'top', background: 'linear-gradient(to bottom, rgba(245,241,234,0.3), transparent)' }}
      />
    </motion.div>
  </section>
)

export default Hero
