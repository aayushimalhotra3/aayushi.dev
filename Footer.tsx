import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1a] border-t border-[#2c2838] py-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Name + year */}
        <p className="text-[#7a7680] text-sm">
          Designed &amp; built by{' '}
          <span className="text-[#c4a0b4] font-medium">Aayushi Malhotra</span>
          {' '}· 2026
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/aayushimalhotra3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7a7680] hover:text-[#f0ece8] transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/aayushimalhotraa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7a7680] hover:text-[#f0ece8] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="mailto:aayushim33@gmail.com"
            className="text-[#7a7680] hover:text-[#f0ece8] transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
