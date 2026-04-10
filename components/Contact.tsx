'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const BORDER_IDLE  = 'var(--border-subtle)'
const BORDER_FOCUS = 'var(--border-medium)'
const FOCUS_GLOW   = '0 0 0 3px rgba(110,59,91,0.18)'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}

const fieldBase: React.CSSProperties = {
  width:        '100%',
  background:   'var(--bg-card)',
  borderRadius: '10px',
  padding:      '14px 16px',
  fontFamily:   'var(--font-body)',
  fontSize:     '14px',
  color:        'var(--text-primary)',
  outline:      'none',
  transition:   'border-color 0.2s ease, box-shadow 0.2s ease',
  display:      'block',
  boxSizing:    'border-box',
}

function useField() {
  const [focused, setFocused] = useState(false)
  return { focused, onFocus: () => setFocused(true), onBlur: () => setFocused(false) }
}

function focusStyle(focused: boolean): React.CSSProperties {
  return {
    border:    `1px solid ${focused ? BORDER_FOCUS : BORDER_IDLE}`,
    boxShadow: focused ? FOCUS_GLOW : 'none',
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
        color:      hovered ? 'var(--accent-blush)' : 'var(--text-tertiary)',
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
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left ── */}
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
              className="font-display text-display-lg mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Let&apos;s connect! 💌
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans leading-relaxed mb-10"
              style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}
            >
              Whether it&apos;s a role, a collab, or just a hello —<br />
              my inbox is always open.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', gap: '20px', marginBottom: '48px' }}
            >
              <SocialIcon Icon={SiGithub}   href="https://github.com/aayushimalhotra3" />
              <SocialIcon Icon={FaLinkedin} href="https://www.linkedin.com/in/aayushimalhotraa" />
              <SocialIcon Icon={MdEmail}    href="mailto:aayushim33@gmail.com" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-mono"
              style={{ fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.06em' }}
            >
              designed &amp; built by aayushi malhotra · 2026
            </motion.p>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
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
                width:        '100%',
                background:   btnHover ? 'var(--accent-plum-light)' : 'var(--accent-plum)',
                color:        'var(--text-primary)',
                border:       'none',
                borderRadius: '10px',
                padding:      '14px',
                fontFamily:   'var(--font-mono)',
                fontSize:     '13px',
                letterSpacing: '0.06em',
                cursor:       'pointer',
                transition:   'background 0.2s ease, transform 0.2s ease',
                transform:    btnHover ? 'translateY(-1px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
            >
              send it ✨
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
