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
    const R = (wrap as HTMLDivElement).offsetWidth < 520 ? 120 : 185
    let raf: number

    function tick() {
      /* ── velocity update ── */
      if (mouse.current.inside && wrap) {
        const rect = wrap.getBoundingClientRect()
        const mx = (mouse.current.x - rect.left  - rect.width  / 2) / rect.width
        const my = (mouse.current.y - rect.top   - rect.height / 2) / rect.height
        vel.current.y = vel.current.y * 0.72 + mx * 0.12
        vel.current.x = vel.current.x * 0.72 + my * 0.07
      } else {
        vel.current.y = vel.current.y * 0.96 + 0.004 * 0.04
        vel.current.x *= 0.96
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
    <section id="skills" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-10 md:mb-14"
        >
          <p className="section-label mb-4">04 &mdash; Skills</p>
          <h2 className="font-display text-display-lg" style={{ color: 'var(--text-primary)' }}>
            What I build with
          </h2>
        </motion.div>

        {/* Sphere wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
          style={{ maxWidth: '700px' }}
        >

          {/* Plum radial glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(110,59,91,0.18) 0%, transparent 68%)',
            }}
          />

          {/* Orbit ring SVG */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
          >
            <ellipse
              ref={ringRef}
              cx="50" cy="50"
              rx="36" ry="10"
              stroke="rgba(201,160,160,0.12)"
              strokeWidth="0.4"
              strokeDasharray="2 3"
            />
          </svg>

          {/* Sphere */}
          <div
            ref={wrapRef}
            className="relative mx-auto cursor-move"
            style={{ height: '440px' }}
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

          {/* Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 1 }}
            aria-hidden
            className="text-center font-mono"
            style={{
              fontSize:      '0.58rem',
              letterSpacing: '0.24em',
              color:         'var(--text-tertiary)',
              opacity:       0.5,
              marginTop:     '-0.5rem',
            }}
          >
            [ move cursor to rotate ]
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
