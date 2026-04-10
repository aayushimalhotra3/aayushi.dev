'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const MAUVE              = '#d4a5b5'
const MAUVE_BORDER_IDLE  = 'rgba(212,165,181,0.2)'
const MAUVE_BORDER_FOCUS = 'rgba(212,165,181,0.7)'
const MAUVE_GLOW         = '0 0 0 3px rgba(212,165,181,0.10)'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}

const fieldBase: React.CSSProperties = {
  width:       '100%',
  background:  'var(--bg-card)',
  borderRadius: '10px',
  padding:     '14px 16px',
  fontFamily:  'var(--font-body)',
  fontSize:    '14px',
  color:       'var(--text-primary)',
  outline:     'none',
  transition:  'border-color 0.2s ease, box-shadow 0.2s ease',
  display:     'block',
  boxSizing:   'border-box',
}

function useField() {
  const [focused, setFocused] = useState(false)
  return {
    focused,
    onFocus: () => setFocused(true),
    onBlur:  () => setFocused(false),
  }
}

function focusStyle(focused: boolean): React.CSSProperties {
  return {
    border:    `1px solid ${focused ? MAUVE_BORDER_FOCUS : MAUVE_BORDER_IDLE}`,
    boxShadow: focused ? MAUVE_GLOW : 'none',
  }
}

function SocialIcon({ Icon, href }: { Icon: React.ElementType; href: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color:      hovered ? MAUVE : 'var(--text-secondary)',
        transform:  hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'color 0.2s ease, transform 0.2s ease',
        display:    'inline-flex',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={22} />
    </a>
  )
}

export default function Contact() {
  const name    = useField()
  const email   = useField()
  const message = useField()
  const [btnHover, setBtnHover] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd  = new FormData(e.currentTarget)
    const n   = String(fd.get('name')    ?? '')
    const em  = String(fd.get('email')   ?? '')
    const msg = String(fd.get('message') ?? '')
    window.location.href =
      `mailto:aayushim33@gmail.com` +
      `?subject=${encodeURIComponent(`Hey from ${n}`)}` +
      `&body=${encodeURIComponent(msg)}%0A%0A` +
      `%E2%80%94%20${encodeURIComponent(n)}%20(${encodeURIComponent(em)})`
  }

  return (
    <section id="contact" className="py-20">
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
          style={{ textAlign: 'center' }}
        >

          {/* Section label */}
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}
          >
            <span style={{ display: 'block', width: '28px', height: '1px', background: MAUVE, opacity: 0.55 }} />
            <span
              className="font-mono"
              style={{ fontSize: '0.68rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: MAUVE }}
            >
              Contact
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="font-display"
            style={{
              fontSize:      'clamp(2rem, 5vw, 3rem)',
              fontWeight:    600,
              letterSpacing: '-0.03em',
              color:         'var(--text-primary)',
              marginBottom:  '16px',
            }}
          >
            Let&apos;s connect! 💌
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '0.92rem',
              color:        'var(--text-secondary)',
              lineHeight:   1.7,
              marginBottom: '40px',
            }}
          >
            Whether it&apos;s a role, a collab, or just a hello —<br />
            my inbox is always open.
          </motion.p>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px', textAlign: 'left' }}
          >
            <input
              name="name"
              type="text"
              placeholder="your name"
              required
              style={{ ...fieldBase, ...focusStyle(name.focused) }}
              onFocus={name.onFocus}
              onBlur={name.onBlur}
            />
            <input
              name="email"
              type="email"
              placeholder="your email"
              required
              style={{ ...fieldBase, ...focusStyle(email.focused) }}
              onFocus={email.onFocus}
              onBlur={email.onBlur}
            />
            <textarea
              name="message"
              rows={5}
              placeholder="say something nice :)"
              required
              style={{ ...fieldBase, ...focusStyle(message.focused), resize: 'vertical' }}
              onFocus={message.onFocus}
              onBlur={message.onBlur}
            />
            <button
              type="submit"
              style={{
                width:       '100%',
                background:  MAUVE,
                color:       '#0a0e1a',
                border:      'none',
                borderRadius: '10px',
                padding:     '14px',
                fontFamily:  'var(--font-mono)',
                fontSize:    '14px',
                cursor:      'pointer',
                transition:  'filter 0.2s ease, transform 0.2s ease',
                filter:      btnHover ? 'brightness(1.1)' : 'brightness(1)',
                transform:   btnHover ? 'scale(1.01)' : 'scale(1)',
              }}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
            >
              send it ✨
            </button>
          </motion.form>

          {/* Social icons */}
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px' }}
          >
            <SocialIcon Icon={SiGithub}   href="https://github.com/aayushimalhotra3" />
            <SocialIcon Icon={FaLinkedin} href="https://www.linkedin.com/in/aayushimalhotraa" />
            <SocialIcon Icon={MdEmail}    href="mailto:aayushim33@gmail.com" />
          </motion.div>

          {/* Footer */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '11px',
              color:         'var(--text-tertiary)',
              letterSpacing: '0.06em',
            }}
          >
            designed &amp; built by aayushi malhotra · 2026
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}
