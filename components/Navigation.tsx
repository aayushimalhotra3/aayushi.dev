'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, resumeHref } from '@/lib/portfolio-data'

const ease = [0.22, 1, 0.36, 1] as const

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#top')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionSelectors = ['#top', ...navLinks.map((link) => link.href)]
    const targets = sectionSelectors
      .map((selector) => document.querySelector(selector))
      .filter((node): node is HTMLElement => node instanceof HTMLElement)

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting && entry.target instanceof HTMLElement)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const top = visible[0]?.target
        if (top instanceof HTMLElement) {
          setActiveHref(`#${top.id}`)
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.12, 0.22, 0.32],
      },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    setActiveHref(href)
    const target = document.querySelector(href)
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navClasses = `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
    scrolled || mobileOpen
      ? 'border-b border-border-subtle bg-[color:var(--bg-nav)] backdrop-blur-sm'
      : 'bg-transparent'
  }`

  return (
    <>
      <nav className={navClasses}>
        <div className="container flex h-14 items-center justify-between">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false)
              setActiveHref('#top')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="group relative type-utility text-[0.74rem] uppercase tracking-[0.34em] text-text-secondary transition-colors hover:text-text-primary"
          >
            AM
            <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full scale-x-0 bg-[color:var(--border-medium)] transition-transform duration-300 group-hover:scale-x-100" />
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeHref === link.href

                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className={`group relative px-1 py-2 type-utility text-[0.66rem] uppercase tracking-[0.24em] transition-colors ${
                      isActive
                        ? 'text-text-primary'
                        : 'text-text-tertiary hover:text-text-secondary'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`pointer-events-none absolute left-1/2 top-full mt-2 h-px w-6 -translate-x-1/2 bg-[color:var(--accent-plum)] transition-all duration-300 ${
                        isActive
                          ? 'opacity-70'
                          : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-45'
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            <a
              href={resumeHref}
              download
              className="btn type-utility inline-flex items-center border border-border-subtle bg-[rgba(245,241,234,0.02)] px-4 py-2 text-[0.66rem] uppercase tracking-[0.26em] text-text-primary shadow-[inset_0_1px_0_rgba(245,241,234,0.08)] transition-colors hover:border-border-medium hover:bg-[rgba(110,59,91,0.1)]"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
            className="btn inline-flex h-10 w-10 items-center justify-center border border-border-subtle bg-transparent text-text-primary transition-colors hover:border-border-medium hover:bg-[rgba(245,241,234,0.03)] lg:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease }}
            className="fixed inset-0 z-40 bg-[color:var(--bg-overlay)] px-6 pb-12 pt-28 lg:hidden"
          >
            <motion.div
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.42, ease }}
              className="flex h-full flex-col items-center justify-center gap-7 text-center"
            >
              {navLinks.map((link) => {
                const isActive = activeHref === link.href

                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className={`group relative type-hero-display text-[2.65rem] leading-[0.98] transition-colors sm:text-[3rem] ${
                      isActive ? 'italic text-text-primary' : 'text-text-primary hover:text-accent-plum'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`pointer-events-none absolute left-1/2 top-full mt-4 h-px w-10 -translate-x-1/2 bg-[color:var(--accent-plum)] transition-all duration-300 ${
                        isActive
                          ? 'opacity-70'
                          : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'
                      }`}
                    />
                  </button>
                )
              })}

              <a
                href={resumeHref}
                download
                onClick={() => setMobileOpen(false)}
                className="btn type-utility mt-6 inline-flex border border-border-subtle bg-[rgba(245,241,234,0.02)] px-6 py-3 text-[0.7rem] uppercase tracking-[0.24em] text-text-primary shadow-[inset_0_1px_0_rgba(245,241,234,0.08)] transition-colors hover:border-border-medium hover:bg-[rgba(110,59,91,0.1)]"
              >
                Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
