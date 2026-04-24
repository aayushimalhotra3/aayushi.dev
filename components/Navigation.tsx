'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Work',       href: '#work'        },
  { label: 'Experience', href: '#experience'  },
  { label: 'Contact',    href: '#contact'     },
]

const Navigation = () => {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60)
    handle()
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el instanceof HTMLElement) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Desktop nav */}
      <nav
        className="fixed inset-x-0 top-0 z-50 hidden md:block transition-all duration-500"
        style={{
          backdropFilter:  scrolled ? 'blur(12px)' : 'none',
          backgroundColor: scrolled ? 'rgba(15,11,10,0.85)' : 'transparent',
          borderBottom:    scrolled ? '1px solid #2E241D' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              fontFamily:    '"JetBrains Mono", monospace',
              fontSize:      '14px',
              letterSpacing: '0.12em',
              color:         '#C4A86B',
              background:    'none',
              border:        'none',
              cursor:        'pointer',
            }}
          >
            AM
          </button>

          {/* Links */}
          <div className="flex items-center gap-1">
            {links.map(link => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollTo(link.href)}
                style={{
                  fontFamily:    '"JetBrains Mono", monospace',
                  fontSize:      '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:         'rgba(242,236,228,0.55)',
                  background:    'none',
                  border:        'none',
                  cursor:        'pointer',
                  padding:       '6px 14px',
                  transition:    'color 200ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F2ECE4')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(242,236,228,0.55)')}
              >
                {link.label}
              </button>
            ))}

            {/* Resume button */}
            <a
              href="/Aayushi_Malhotra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily:    '"JetBrains Mono", monospace',
                fontSize:      '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         '#8B5C7A',
                border:        '1px solid #8B5C7A',
                borderRadius:  '20px',
                padding:       '6px 16px',
                marginLeft:    '8px',
                textDecoration: 'none',
                transition:    'background 200ms, color 200ms',
                display:       'inline-block',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = '#8B5C7A'
                el.style.color = '#F2ECE4'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = 'transparent'
                el.style.color = '#8B5C7A'
              }}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden fixed inset-x-0 top-0 z-50">
        <div
          className="flex items-center justify-between px-6 py-4 transition-all duration-300"
          style={{
            backdropFilter:  scrolled || mobileOpen ? 'blur(12px)' : 'none',
            backgroundColor: scrolled || mobileOpen ? 'rgba(15,11,10,0.92)' : 'transparent',
            borderBottom:    scrolled || mobileOpen ? '1px solid #2E241D' : '1px solid transparent',
          }}
        >
          <span
            style={{
              fontFamily:    '"JetBrains Mono", monospace',
              fontSize:      '14px',
              letterSpacing: '0.12em',
              color:         '#C4A86B',
            }}
          >
            AM
          </span>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1"
            style={{ color: 'rgba(242,236,228,0.6)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className="block h-px bg-current transition-all duration-300"
                style={{ transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none' }}
              />
              <span
                className="block h-px bg-current transition-all duration-300"
                style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                backgroundColor: 'rgba(15,11,10,0.97)',
                backdropFilter:  'blur(12px)',
                borderBottom:    '1px solid #2E241D',
                overflow:        'hidden',
              }}
            >
              <div className="px-6 py-8 flex flex-col items-center gap-6">
                {links.map(link => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    style={{
                      fontFamily:    '"JetBrains Mono", monospace',
                      fontSize:      '13px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color:         'rgba(242,236,228,0.7)',
                      background:    'none',
                      border:        'none',
                      cursor:        'pointer',
                    }}
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="/Aayushi_Malhotra_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily:    '"JetBrains Mono", monospace',
                    fontSize:      '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color:         '#8B5C7A',
                    border:        '1px solid #8B5C7A',
                    borderRadius:  '20px',
                    padding:       '8px 20px',
                    textDecoration: 'none',
                    marginTop:     '4px',
                  }}
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
