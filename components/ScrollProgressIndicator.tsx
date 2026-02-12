'use client'

import { useEffect, useState } from 'react'

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled * 100)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[9999]">
      <div
        className="h-full bg-accent-pink transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgressIndicator
