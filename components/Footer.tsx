import React from 'react'

const Footer = () => (
  <footer className="py-6 border-t border-border">
    <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
      <span className="text-cream-dim text-xs">
        &copy; {new Date().getFullYear()} Aayushi Malhotra
      </span>
      <span className="font-heading text-cream-dim text-sm font-bold tracking-tight">AM</span>
    </div>
  </footer>
)

export default Footer
