import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, FileText } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const Contact = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.p variants={fadeUp} className="section-label mb-4">
          05 &mdash; Contact
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-display-lg text-primary mb-4"
        >
          Let&apos;s connect
        </motion.h2>
        <motion.p variants={fadeUp} className="text-muted text-base max-w-lg mb-10">
          Open to full-time SWE, backend, and data engineering roles starting
          May 2026.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="mailto:aayushim33@gmail.com"
            className="group flex items-center gap-2.5 px-5 py-3 bg-card rounded-card shadow-card border border-border hover:border-accent/40 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            <Mail size={18} className="text-accent" />
            <span className="text-primary text-sm font-medium group-hover:text-accent transition-colors">
              aayushim33@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/aayushimalhotraa"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-5 py-3 bg-card rounded-card shadow-card border border-border hover:border-accent/40 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            <Linkedin size={18} className="text-accent" />
            <span className="text-primary text-sm font-medium group-hover:text-accent transition-colors">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/aayushimalhotra3"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-5 py-3 bg-card rounded-card shadow-card border border-border hover:border-accent/40 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            <Github size={18} className="text-accent" />
            <span className="text-primary text-sm font-medium group-hover:text-accent transition-colors">
              GitHub
            </span>
          </a>

          <a
            href="/Aayushi_Malhotra_Resume.pdf"
            download
            className="flex items-center gap-2.5 px-5 py-3 border-2 border-accent text-accent rounded-card hover:bg-accent hover:text-white transition-all duration-200 font-medium text-sm"
          >
            <FileText size={18} />
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default Contact
