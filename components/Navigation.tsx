import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop floating pill nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: scrolled ? 0 : -100, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-surface-raised/80 backdrop-blur-xl border border-border"
      >
        {navLinks.map(link => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            className="px-4 py-1.5 rounded-full text-sm text-cream-muted hover:text-cream hover:bg-surface-hover transition-all duration-200"
          >
            {link.label}
          </button>
        ))}
        <a
          href="/Aayushi_Malhotra_Resume.pdf"
          download
          className="px-4 py-1.5 rounded-full text-sm text-accent hover:bg-accent-subtle transition-all duration-200"
        >
          Resume
        </a>
      </motion.nav>

      {/* Mobile nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled ? 'bg-surface/90 backdrop-blur-xl border-b border-border' : ''
        }`}>
          <span className="font-serif text-lg text-cream italic">AM</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-cream-muted p-1"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-surface/95 backdrop-blur-xl border-b border-border overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                {navLinks.map(link => (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-cream-muted hover:text-cream text-sm py-1 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="/Aayushi_Malhotra_Resume.pdf"
                  download
                  className="text-accent text-sm py-1"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navigation
