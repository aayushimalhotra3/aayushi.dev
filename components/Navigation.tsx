'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Work',       href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

const Navigation = () => {
  const [scrolled,   setScrolled]   = useState(false)
  const [activeHref, setActiveHref] = useState('#top')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ids = ['contact', 'experience', 'work', 'about', 'top']
    const onScroll = () => {
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveHref(`#${id}`)
          return
        }
      }
      setActiveHref('#top')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    setActiveHref(href)
    const target = document.querySelector(href)
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Desktop nav */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 hidden md:block transition-all duration-500 ${
          scrolled ? 'border-b border-[rgba(245,241,234,0.06)]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-xl font-bold tracking-tight select-none transition-colors duration-200"
            style={{ color: 'var(--text-primary)' }}
          >
            AM
          </button>

          {/* Links */}
          <div className="flex items-center gap-0.5">
            {links.map(link => {
              const isActive = activeHref === link.href
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 font-ibm text-[10px] tracking-[0.2em] uppercase transition-colors duration-200"
                  style={{ color: isActive ? '#c9a0a0' : 'rgba(245,241,234,0.4)' }}
                >
                  {isActive && (
                    <span
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full opacity-80"
                      style={{ backgroundColor: '#c9a0a0' }}
                    />
                  )}
                  {link.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden fixed inset-x-0 top-0 z-50">
        <div
          className={`flex items-center justify-between px-6 py-4 transition-all duration-300 ${
            scrolled || mobileOpen ? 'border-b border-[rgba(245,241,234,0.06)]' : ''
          }`}
        >
          <span
            className="font-display text-lg font-bold tracking-tight select-none"
            style={{ color: 'var(--text-primary)' }}
          >
            AM
          </span>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1"
            style={{ color: 'rgba(245,241,234,0.5)' }}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                }`}
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
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-b border-[rgba(245,241,234,0.06)]"
              style={{ backgroundColor: 'rgba(14,13,12,0.98)', backdropFilter: 'blur(8px)' }}
            >
              <div className="px-6 py-5 flex flex-col gap-4">
                {links.map(link => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-left font-ibm text-[10px] tracking-[0.2em] uppercase transition-colors py-1"
                    style={{ color: 'rgba(245,241,234,0.4)' }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navigation
