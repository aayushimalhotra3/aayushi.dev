import React, { useState, useEffect } from 'react'
import { Menu, X, FileText } from 'lucide-react'

const NAV_ITEMS = [
  { name: 'About',      href: '#about'      },
  { name: 'Projects',   href: '#projects'   },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills',     href: '#skills'     },
  { name: 'Contact',    href: '#contact'    },
]

const Navigation = () => {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* Force dark mode — this site is dark-only */
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  /* Shrink / darken nav on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-[#0f0f1a]/95 backdrop-blur-md border-b border-[#2c2838] shadow-lg shadow-black/30'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        {/* Logo / name */}
        <button
          onClick={() => scrollTo('#hero')}
          className="font-serif text-cream font-semibold text-lg tracking-wide hover:text-mauve transition-colors duration-200"
          aria-label="Back to top"
        >
          Aayushi Malhotra
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className="text-fog hover:text-cream text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-mauve group-hover:w-full transition-all duration-300" />
            </button>
          ))}

          {/* Resume CTA */}
          <a
            href="/Malhotra, Aayushi Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-md border border-mauve text-mauve text-sm font-medium hover:bg-mauve hover:text-[#0f0f1a] transition-all duration-200"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        {/* Mobile: resume + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="/Malhotra, Aayushi Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-mauve text-mauve text-xs font-medium"
          >
            <FileText size={12} />
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-fog hover:text-cream transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-elevated border-t border-[#2c2838]">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="text-left text-mist hover:text-cream py-2.5 text-sm font-medium border-b border-[#2c2838] last:border-0 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
