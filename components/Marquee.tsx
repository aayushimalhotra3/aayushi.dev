import React from 'react'

const techs = [
  'Python', 'FastAPI', 'GCP', 'Docker', 'PostgreSQL', 'React',
  'TypeScript', 'Kubernetes', 'Apache Beam', 'AWS', 'PySpark',
  'Go', 'Terraform', 'SQL', 'Next.js',
]

const Marquee = () => {
  const items = [...techs, ...techs]

  return (
    <div
      className="relative overflow-hidden border-y py-4"
      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
        style={{ background: 'linear-gradient(to right, var(--bg-secondary), transparent)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
        style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }} />

      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-3 font-ibm text-[10px] tracking-[0.18em] uppercase"
            style={{ color: 'var(--text-tertiary)' }}
          >
            <span style={{ color: '#c9a0a0', opacity: 0.5, fontSize: '8px' }}>◆</span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
