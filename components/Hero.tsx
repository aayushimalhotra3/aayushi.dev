import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FileText, ArrowDown, Star, Trophy } from 'lucide-react'

const roles = [
  'I build data pipelines.',
  'I ship backend APIs.',
  'I design cloud infrastructure.',
  'I break things at 2 AM and fix them by 3.',
]

const techBadges = ['Python', 'GCP', 'FastAPI', 'Docker', 'PostgreSQL', 'TypeScript', 'AWS']

/* ── Animated counter ── */
function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame: number
    const duration = 1200
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(ease * target))
      if (t < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, target])

  return <span ref={ref}>{val}{suffix}</span>
}

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Gradient orb behind bento grid */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-accent/10 via-accent/[0.04] to-transparent blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 py-24 md:py-0">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-3">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-cream-muted text-sm tracking-wide mb-4"
            >
              Software Engineer &middot; MSU &apos;26
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-hero text-cream"
            >
              Aayushi<br />Malhotra
            </motion.h1>

            {/* Rotating tagline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-5 h-8 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIdx}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="text-accent text-lg font-heading font-medium"
                >
                  {roles[roleIdx]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-6 py-2.5 bg-accent text-surface text-sm font-semibold rounded-lg hover:bg-accent-hover hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 transition-all duration-200"
              >
                Get in touch
              </a>
              <a
                href="/Aayushi_Malhotra_Resume.pdf"
                download
                className="group flex items-center gap-2 px-6 py-2.5 border border-border hover:border-accent/40 text-cream-muted hover:text-cream text-sm font-medium rounded-lg hover:scale-[1.02] transition-all duration-200"
              >
                <FileText size={14} className="text-accent" />
                Resume
              </a>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {techBadges.map(t => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-md bg-surface-card border border-border text-cream-dim hover:text-cream-muted hover:border-border-hover transition-colors duration-200">
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Bento Grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-3">
              {/* Big stat — Internships */}
              <div className="bg-surface-card border border-border rounded-xl p-5 hover:border-accent/30 transition-colors duration-300">
                <p className="font-heading text-4xl font-bold text-accent leading-none">
                  <CountUp target={5} suffix="+" />
                </p>
                <p className="text-cream-dim text-xs mt-2 tracking-wide uppercase">Internships</p>
                <p className="text-cream-dim/60 text-[11px] mt-0.5">US, India, UAE</p>
              </div>

              {/* Countries */}
              <div className="bg-surface-card border border-border rounded-xl p-5 hover:border-accent/30 transition-colors duration-300">
                <p className="font-heading text-4xl font-bold text-cream leading-none">
                  <CountUp target={3} />
                </p>
                <p className="text-cream-dim text-xs mt-2 tracking-wide uppercase">Countries</p>
                <p className="text-cream-dim/60 text-[11px] mt-0.5">worked across</p>
              </div>

              {/* HackDuke — spans full width */}
              <div className="col-span-2 bg-surface-card border border-border rounded-xl p-5 flex items-center gap-4 hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 shrink-0">
                  <Trophy size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-cream font-medium text-sm">HackDuke</p>
                  <p className="text-cream-dim text-xs">Code for Good Winner</p>
                </div>
              </div>

              {/* Repos */}
              <div className="bg-surface-card border border-border rounded-xl p-5 hover:border-accent/30 transition-colors duration-300">
                <p className="font-heading text-4xl font-bold text-cream leading-none">
                  <CountUp target={14} />
                </p>
                <p className="text-cream-dim text-xs mt-2 tracking-wide uppercase">GitHub Repos</p>
              </div>

              {/* Cloud Platforms */}
              <div className="bg-surface-card border border-border rounded-xl p-5 hover:border-accent/30 transition-colors duration-300">
                <p className="font-heading text-4xl font-bold text-cream leading-none">
                  <CountUp target={3} suffix="+" />
                </p>
                <p className="text-cream-dim text-xs mt-2 tracking-wide uppercase">Cloud Platforms</p>
              </div>

              {/* Personality — night owl */}
              <div className="col-span-2 bg-surface-card border border-border rounded-xl p-4 flex items-center gap-3 hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-hover shrink-0">
                  <Star size={16} className="text-accent/70" />
                </div>
                <p className="text-cream-dim text-xs">
                  Night owl — best commits happen between 10 PM and 4 AM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream-dim text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-cream-dim/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
