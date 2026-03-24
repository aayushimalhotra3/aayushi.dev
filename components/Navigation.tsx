import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText } from 'lucide-react'

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
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-0.5 px-1.5 py-1.5 rounded-xl bg-surface-card/90 backdrop-blur-xl border border-border shadow-lg shadow-black/30"
        style={{ borderBottom: '1px solid rgba(201,168,124,0.15)' }}
      >
        {navLinks.map(link => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            className="px-3 py-1.5 rounded-lg text-[13px] text-cream-muted hover:text-cream hover:bg-surface-hover transition-all duration-200"
          >
            {link.label}
          </button>
        ))}
        <span className="w-px h-4 bg-border mx-1" />
        <a
          href="/Aayushi_Malhotra_Resume.pdf"
          download
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] bg-accent/10 text-accent hover:bg-accent/20 transition-all duration-200 font-medium"
        >
          <FileText size={12} />
          Resume
        </a>
      </motion.nav>

      {/* Mobile nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled ? 'bg-surface-card/90 backdrop-blur-xl border-b border-border' : ''
        }`}>
          <span className="font-heading text-lg text-cream font-bold tracking-tight">AM</span>
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
              className="bg-surface-card/95 backdrop-blur-xl border-b border-border overflow-hidden"
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
                  className="flex items-center gap-2 text-accent text-sm py-1 font-medium"
                >
                  <FileText size={14} />
                  Download Resume
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
