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
    updateScrollProgress() // Initial calculation

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 dark:bg-gray-800 z-[9999] shadow-sm">
      <div
          className="h-full bg-green-200 transition-all duration-300 ease-out shadow-md"
          style={{ width: `${scrollProgress}%` }}
        />
    </div>
  )
}

export default ScrollProgressIndicator