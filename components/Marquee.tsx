import React from 'react'

const techs = [
  'Python', 'FastAPI', 'GCP', 'Docker', 'PostgreSQL', 'Kubernetes',
  'TypeScript', 'Apache Beam', 'AWS', 'PySpark', 'React', 'SQL',
]

const Marquee = () => {
  const items = [...techs, ...techs]

  return (
    <div
      style={{
        backgroundColor: '#8B5C7A',
        paddingTop:      '16px',
        paddingBottom:   '16px',
        overflow:        'hidden',
        position:        'relative',
      }}
    >
      <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            style={{
              fontFamily:    '"JetBrains Mono", monospace',
              fontSize:      '13px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         '#F2ECE4',
              whiteSpace:    'nowrap',
              display:       'flex',
              alignItems:    'center',
              gap:           '1rem',
            }}
          >
            {tech}
            <span style={{ color: 'rgba(242,236,228,0.4)', fontSize: '6px' }}>&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
