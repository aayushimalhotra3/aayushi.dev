import React from 'react'

const Footer = () => (
  <footer
    style={{
      backgroundColor: '#0F0B0A',
      borderTop:       '1px solid #C4A86B',
      paddingTop:      '2rem',
      paddingBottom:   '2rem',
    }}
  >
    <div
      className="container-inner"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <span
        style={{
          fontFamily:    '"JetBrains Mono", monospace',
          fontSize:      '11px',
          letterSpacing: '0.08em',
          color:         '#A69B8E',
        }}
      >
        &copy; 2026 Aayushi Malhotra
      </span>
      <span
        style={{
          fontFamily:    '"JetBrains Mono", monospace',
          fontSize:      '13px',
          letterSpacing: '0.12em',
          color:         '#C4A86B',
        }}
      >
        AM
      </span>
    </div>
  </footer>
)

export default Footer
