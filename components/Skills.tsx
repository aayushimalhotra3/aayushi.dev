'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const SKILLS = [
  'Python', 'TypeScript', 'Go', 'Java', 'C++', 'SQL', 'Bash',
  'FastAPI', 'React', 'Next.js', 'Flask', 'PySpark', 'Streamlit',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
  'GCP', 'AWS', 'Docker', 'Kubernetes', 'Terraform',
  'Git', 'CI/CD', 'Prometheus', 'Pandas', 'Jupyter', 'Linux',
  'Apache Beam', 'GCP Dataflow',
] as const

/* Fibonacci sphere — evenly distributes N points on a unit sphere */
function fibSphere(n: number): ReadonlyArray<readonly [number, number, number]> {
  const φ = (1 + Math.sqrt(5)) / 2
  return Array.from({ length: n }, (_, i) => {
    const θ = (2 * Math.PI * i) / φ
    const ψ = Math.acos(1 - (2 * (i + 0.5)) / n)
    return [
      Math.sin(ψ) * Math.cos(θ),
      Math.sin(ψ) * Math.sin(θ),
      Math.cos(ψ),
    ] as const
  })
}

const BASE = fibSphere(SKILLS.length)

/* Rotate a point around Y then X */
function rotate(
  x: number, y: number, z: number,
  rx: number, ry: number,
): readonly [number, number, number] {
  const cY = Math.cos(ry), sY = Math.sin(ry)
  const x1 = x * cY + z * sY
  const z1 = -x * sY + z * cY
  const cX = Math.cos(rx), sX = Math.sin(rx)
  const y2 = y * cX - z1 * sX
  const z2 = y * sX + z1 * cX
  return [x1, y2, z2]
}

export default function Skills() {
  const wrapRef   = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<SVGEllipseElement>(null)
  const mouse     = useRef({ x: 0, y: 0, inside: false })
  const rot       = useRef({ x: 0.35, y: 0 })
  const vel       = useRef({ x: 0, y: 0.004 })
  const ringAngle = useRef(0)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    const spans = Array.from(wrap.querySelectorAll<HTMLElement>('[data-skill]'))
    const R = (wrap as HTMLDivElement).offsetWidth < 520 ? 115 : 155
    let raf: number

    function tick() {
      /* ── velocity update ── */
      if (mouse.current.inside && wrap) {
        const rect = wrap.getBoundingClientRect()
        const mx = (mouse.current.x - rect.left  - rect.width  / 2) / rect.width
        const my = (mouse.current.y - rect.top   - rect.height / 2) / rect.height
        vel.current.y = vel.current.y * 0.94 + mx * 0.007
        vel.current.x = vel.current.x * 0.94 + my * 0.004
        /* hard cap */
        vel.current.y = Math.max(-0.010, Math.min(0.010, vel.current.y))
        vel.current.x = Math.max(-0.007, Math.min(0.007, vel.current.x))
      } else {
        /* gentle auto-rotation */
        vel.current.y = vel.current.y * 0.98 + 0.0025 * 0.02
        vel.current.x *= 0.98
      }

      rot.current.x += vel.current.x
      rot.current.y += vel.current.y
      ringAngle.current += 0.006

      /* ── update orbit ring ── */
      if (ringRef.current) {
        ringRef.current.setAttribute(
          'transform',
          `rotate(${(ringAngle.current * 180) / Math.PI} 50 50)`,
        )
      }

      /* ── update skill spans ── */
      spans.forEach((el, i) => {
        const [px, py, pz] = BASE[i]
        const [rx, ry, rz] = rotate(px, py, pz, rot.current.x, rot.current.y)

        const scale   = (rz + 2) / 3                       // 0.33 → 1.0
        const opacity = Math.max(0.08, (rz + 1.35) / 2.35) // 0.08 → 1.0
        const tx      = rx * R
        const ty      = ry * R

        el.style.transform  = `translate(-50%,-50%) translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px)`
        el.style.opacity    = opacity.toFixed(3)
        el.style.fontSize   = `${(0.58 + scale * 0.6).toFixed(3)}rem`
        el.style.fontWeight = rz > 0.35 ? '600' : '400'
        el.style.color      = rz > 0.55 ? '#c9a0a0'
                            : rz > 0.05 ? '#f5f1ea'
                            : '#9b928a'
        el.style.zIndex     = String(Math.round(rz * 100 + 100))
        el.style.textShadow = rz > 0.5
          ? '0 0 18px rgba(201,160,160,0.35)'
          : 'none'
      })

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    const onMove  = (e: MouseEvent) => { mouse.current.x = e.clientX; mouse.current.y = e.clientY }
    const onEnter = () => { mouse.current.inside = true  }
    const onLeave = () => { mouse.current.inside = false }

    wrap.addEventListener('mousemove',  onMove)
    wrap.addEventListener('mouseenter', onEnter)
    wrap.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      wrap.removeEventListener('mousemove',  onMove)
      wrap.removeEventListener('mouseenter', onEnter)
      wrap.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section id="skills" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center">

          {/* ── Left: header ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">04 &mdash; Skills</p>
            <h2
              className="font-display text-display-lg mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              What I<br />build with
            </h2>
            <p
              className="font-sans leading-relaxed mb-8"
              style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '28ch' }}
            >
              Languages, frameworks, infra, and tools I reach for day-to-day.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.8 }}
              aria-hidden
              className="font-mono"
              style={{ fontSize: '0.56rem', letterSpacing: '0.22em', color: 'var(--text-tertiary)', opacity: 0.55 }}
            >
              [ drag to rotate ]
            </motion.p>
          </motion.div>

          {/* ── Right: sphere ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Plum radial glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 65% 60% at 50% 50%, rgba(110,59,91,0.18) 0%, transparent 70%)',
              }}
            />

            {/* Orbit ring */}
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
            >
              <ellipse
                ref={ringRef}
                cx="50" cy="50"
                rx="38" ry="11"
                stroke="rgba(201,160,160,0.1)"
                strokeWidth="0.4"
                strokeDasharray="2 3"
              />
            </svg>

            {/* Sphere */}
            <div
              ref={wrapRef}
              className="relative mx-auto cursor-move"
              style={{ height: '360px' }}
            >
              {SKILLS.map((skill, i) => (
                <span
                  key={skill}
                  data-skill={i}
                  className="absolute font-sans pointer-events-none whitespace-nowrap"
                  style={{
                    left:          '50%',
                    top:           '50%',
                    transform:     'translate(-50%,-50%)',
                    fontSize:      '0.85rem',
                    color:         '#f5f1ea',
                    opacity:       0,
                    letterSpacing: '0.015em',
                    willChange:    'transform, opacity, font-size',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
