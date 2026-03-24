import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, FileText, ArrowUpRight, Mail } from 'lucide-react'

const Contact = () => (
  <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
    {/* Subtle accent glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-6xl mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent/50 font-mono text-xs font-medium">05</span>
          <span className="h-px w-8 bg-accent/30" />
          <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">Contact</span>
        </div>
        <h2 className="font-heading text-display-lg text-cream mb-4">
          Let&apos;s connect
        </h2>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-cream text-sm font-medium">
            Open to full-time roles &middot; May 2026
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-2"
      >
        <a
          href="mailto:aayushim33@gmail.com"
          className="inline-flex items-center gap-3 font-heading text-3xl md:text-4xl lg:text-5xl text-cream hover:text-accent transition-colors duration-200 font-semibold group"
        >
          <Mail size={28} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
          aayushim33@gmail.com
        </a>

        <div className="flex flex-wrap items-center gap-3 mt-10 pt-8 border-t border-border">
          <a
            href="https://github.com/aayushimalhotra3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-surface-card border border-border rounded-lg text-cream-dim hover:text-cream hover:border-border-hover text-sm transition-all duration-200"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aayushimalhotraa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-surface-card border border-border rounded-lg text-cream-dim hover:text-cream hover:border-border-hover text-sm transition-all duration-200"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a
            href="/Aayushi_Malhotra_Resume.pdf"
            download
            className="group flex items-center gap-2 px-5 py-2 bg-accent text-surface rounded-lg text-sm font-semibold hover:bg-accent-hover hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 transition-all duration-200 ml-auto"
          >
            <FileText size={15} />
            Download Resume
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
)

export default Contact
