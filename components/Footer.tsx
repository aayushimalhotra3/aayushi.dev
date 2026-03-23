import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <span className="text-cream-dim text-xs">
          &copy; {new Date().getFullYear()} Aayushi Malhotra
        </span>
        <span className="font-serif text-cream-dim text-sm italic">AM</span>
      </div>
    </footer>
  )
}

export default Footer
