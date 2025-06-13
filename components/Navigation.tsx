import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Force dark mode permanently
    document.documentElement.classList.add('dark')
  }, [])







  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-bg-section/95 backdrop-blur-md border-b border-pink-200 dark:border-border-dark shadow-md z-50">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center space-x-2 text-lg font-bold text-charcoal dark:text-text-light hover:text-soft-pink dark:hover:text-accent-teal transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/laptop.png"
              alt="Laptop"
              width={24}
              height={24}
              className="transition-all duration-300 hover:scale-110"
            />
            <span className="text-charcoal dark:text-text-light">aayushi.dev</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-600 dark:text-text-muted hover:text-soft-pink dark:hover:text-accent-teal font-semibold text-sm transition-all duration-300 hover:scale-110 group flex items-center space-x-2"
              >
                {item.name === 'About' && (
                  <Image
                    src="/diary.png"
                    alt="Diary"
                    width={16}
                    height={16}
                    className="transition-all duration-300 hover:scale-110"
                  />
                )}
                {item.name === 'Projects' && (
                  <Image
                    src="/website.png"
                    alt="Website"
                    width={16}
                    height={16}
                    className="transition-all duration-300 hover:scale-110"
                  />
                )}
                {item.name === 'Experience' && (
                  <Image
                    src="/suit.png"
                    alt="Suit"
                    width={16}
                    height={16}
                    className="transition-all duration-300 hover:scale-110"
                  />
                )}
                {item.name === 'Skills' && (
                  <Image
                    src="/crown.png"
                    alt="Crown"
                    width={16}
                    height={16}
                    className="transition-all duration-300 hover:scale-110"
                  />
                )}
                {item.name === 'Contact' && (
                  <Image
                    src="/mail.png"
                    alt="Mail"
                    width={16}
                    height={16}
                    className="transition-all duration-300 hover:scale-110"
                  />
                )}
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-soft-pink/10 dark:bg-accent-teal/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-soft-pink to-pink-400 dark:from-accent-teal dark:to-accent-pink group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
            

            

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-text-muted hover:text-soft-pink dark:hover:text-accent-teal transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-pink-200 dark:border-border-dark bg-white/95 dark:bg-bg-section/95 backdrop-blur-md">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left py-3 px-4 text-gray-600 dark:text-text-muted hover:text-soft-pink dark:hover:text-accent-teal font-semibold text-base transition-all duration-300 hover:bg-soft-pink/10 dark:hover:bg-accent-teal/10 rounded-lg mx-2 my-1 hover:scale-105 flex items-center space-x-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name === 'About' && (
                  <Image
                    src="/diary.png"
                    alt="Diary"
                    width={18}
                    height={18}
                    className="transition-all duration-300 hover:scale-110"
                  />
                )}
                {item.name === 'Projects' && (
                  <Image
                    src="/website.png"
                    alt="Website"
                    width={18}
                    height={18}
                    className="transition-all duration-300 hover:scale-110"
                  />
                )}
                {item.name === 'Experience' && (
                  <Image
                    src="/suit.png"
                    alt="Suit"
                    width={18}
                    height={18}
                    className="transition-all duration-300 hover:scale-110"
                  />
                )}
                {item.name === 'Skills' && (
                  <Image
                    src="/crown.png"
                    alt="Crown"
                    width={18}
                    height={18}
                    className="transition-all duration-300 hover:scale-110"
                  />
                )}
                {item.name === 'Contact' && (
                  <Image
                    src="/mail.png"
                    alt="Mail"
                    width={18}
                    height={18}
                    className="transition-all duration-300 hover:scale-110"
                  />
                )}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      

    </nav>
  )
}

export default Navigation