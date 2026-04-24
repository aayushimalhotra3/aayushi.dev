'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] } },
}

function ContactLink({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ElementType
  href: string
  label: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        'flex',
        alignItems:     'center',
        gap:            '10px',
        fontFamily:     '"DM Sans", system-ui, sans-serif',
        fontSize:       '15px',
        fontWeight:     500,
        color:          hovered ? '#ffffff' : 'rgba(242,236,228,0.85)',
        textDecoration: 'none',
        transition:     'color 200ms, transform 200ms',
        transform:      hovered ? 'translateX(4px)' : 'translateX(0)',
      }}
    >
      <Icon size={18} />
      {label}
    </a>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-plum"
      style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      <div className="container-inner">
        <div className="flex flex-col items-center text-center" style={{ maxWidth: '560px', margin: '0 auto' }}>

          {/* Kicker */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            style={{ marginBottom: '1.5rem' }}
          >
            <span
              style={{
                fontFamily:    '"JetBrains Mono", monospace',
                fontSize:      '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:         'rgba(242,236,228,0.6)',
              }}
            >
              05 &mdash; Contact
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            style={{
              fontFamily:   '"Instrument Serif", Georgia, serif',
              fontWeight:   400,
              fontSize:     'clamp(2.5rem, 6vw, 3.5rem)',
              color:        '#F2ECE4',
              lineHeight:   1.1,
              marginBottom: '1.25rem',
            }}
          >
            Let&apos;s <em style={{ fontStyle: 'italic' }}>connect</em>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            style={{
              fontFamily:   '"DM Sans", system-ui, sans-serif',
              fontSize:     '16px',
              lineHeight:   1.7,
              color:        'rgba(242,236,228,0.8)',
              marginBottom: '2.5rem',
            }}
          >
            Open to full-time SWE, backend, and data engineering roles starting May 2026.
          </motion.p>

          {/* Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: 0.1 }}
            style={{
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'flex-start',
              gap:            '16px',
              marginBottom:   '3rem',
              alignSelf:      'center',
            }}
          >
            <motion.div variants={fadeUp}>
              <ContactLink icon={MdEmail}    href="mailto:aayushim33@gmail.com"                     label="aayushim33@gmail.com" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <ContactLink icon={FaLinkedin} href="https://www.linkedin.com/in/aayushimalhotraa"    label="linkedin.com/in/aayushimalhotraa" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <ContactLink icon={SiGithub}   href="https://github.com/aayushimalhotra3"             label="github.com/aayushimalhotra3" />
            </motion.div>
          </motion.div>

          {/* Resume download button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <a
              href="/Aayushi_Malhotra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily:      '"DM Sans", system-ui, sans-serif',
                fontSize:        '14px',
                fontWeight:      500,
                color:           '#8B5C7A',
                backgroundColor: '#F2ECE4',
                borderRadius:    '24px',
                padding:         '12px 32px',
                textDecoration:  'none',
                display:         'inline-block',
                transition:      'background 220ms, transform 220ms',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#ffffff'
                e.currentTarget.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#F2ECE4'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              Download Resume &#8599;
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
