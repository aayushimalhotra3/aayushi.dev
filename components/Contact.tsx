import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-40 bg-surface-raised">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="font-serif text-display-md text-cream italic mb-6">
            Let&apos;s connect
          </h2>
          <p className="text-cream-muted text-lg leading-relaxed mb-4">
            Currently open to full-time SWE, backend, and data engineering roles for 2026.
            The best way to reach me is email.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <a
            href="mailto:aayushim33@gmail.com"
            className="inline-block font-serif text-2xl md:text-3xl text-cream hover:text-accent transition-colors duration-200 italic"
          >
            aayushim33@gmail.com
          </a>

          <div className="flex items-center gap-5 mt-10 pt-8 border-t border-border">
            <a
              href="https://github.com/aayushimalhotra3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream-dim hover:text-cream text-sm transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aayushimalhotraa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream-dim hover:text-cream text-sm transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="/Aayushi_Malhotra_Resume.pdf"
              download
              className="flex items-center gap-2 text-cream-dim hover:text-accent text-sm transition-colors duration-200 ml-auto"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
