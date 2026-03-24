import React from 'react'

const techs = [
  'Python', 'TypeScript', 'Go', 'SQL', 'FastAPI', 'React', 'Next.js', 'PySpark',
  'Apache Beam', 'PostgreSQL', 'MySQL', 'MongoDB', 'GCP', 'AWS', 'Docker',
  'Kubernetes', 'Terraform', 'Git', 'CI/CD', 'ETL Pipelines', 'Data Modeling',
]

const TechMarquee = () => {
  const items = [...techs, ...techs] // duplicate for seamless loop
  return (
    <div className="py-6 border-y border-border overflow-hidden relative">
      {/* Left/right fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="marquee-track flex items-center gap-8 whitespace-nowrap w-max">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="flex items-center gap-2 text-cream-dim text-sm">
            <span className="w-1 h-1 rounded-full bg-accent/40" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechMarquee
