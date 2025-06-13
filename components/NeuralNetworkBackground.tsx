'use client'
import React, { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  opacity: number
}

interface Connection {
  from: Particle
  to: Particle
  opacity: number
}

interface NeuralNetworkBackgroundProps {
  opacity?: number
}

const NeuralNetworkBackground: React.FC<NeuralNetworkBackgroundProps> = ({ opacity }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseTrail = useRef<{ x: number; y: number; age: number }[]>([])
  const lastMousePos = useRef<{ x: number; y: number } | null>(null)

  // Detect dark mode
  const [isDark, setIsDark] = useState(false)
  
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])
  
  // Neon-pastel colors for both light and dark mode
  const colors = ['#FF69B4', '#FFD700', '#C8A2C8'] // hot pink, gold, lilac

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
    const parent = canvas.parentElement || document.body
    canvas.width = parent.clientWidth
    canvas.height = parent.clientHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000))
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          size: Math.random() * 3 + 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.4 + 0.2
        })
      }
      particlesRef.current = particles
    }

    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Enhanced mouse interaction with attraction and repulsion
        const dx = mousePos.x - particle.x
        const dy = mousePos.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 300) {
          const force = (300 - distance) / 300
          
          // Close range: strong repulsion effect
          if (distance < 80) {
            particle.vx -= (dx / distance) * force * 0.25
            particle.vy -= (dy / distance) * force * 0.25
          } else if (distance < 150) {
            // Medium range: attraction effect
            particle.vx += (dx / distance) * force * 0.15
            particle.vy += (dy / distance) * force * 0.15
          } else {
            // Far range: subtle attraction
            particle.vx += (dx / distance) * force * 0.05
            particle.vy += (dy / distance) * force * 0.05
          }
        }
        
        // Mouse trail interaction effects
        mouseTrail.current.forEach((trailPoint, index) => {
          const tdx = trailPoint.x - particle.x
          const tdy = trailPoint.y - particle.y
          const tdistance = Math.sqrt(tdx * tdx + tdy * tdy)
          const trailForce = (1 - trailPoint.age / 30) * 0.08
          
          if (tdistance < 150 && tdistance > 0) {
            particle.vx += (tdx / tdistance) * trailForce
            particle.vy += (tdy / tdistance) * trailForce
          }
        })
        
        // Floating animation with wave patterns
        const time = Date.now() * 0.001
        particle.vx += Math.sin(time + particle.x * 0.01) * 0.015
        particle.vy += Math.cos(time + particle.y * 0.01) * 0.015
        particle.vx += Math.sin(time * 0.5 + particle.y * 0.005) * 0.01
        particle.vy += Math.cos(time * 0.7 + particle.x * 0.008) * 0.01

        // Apply velocity with adaptive damping
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        const dampingFactor = speed > 3 ? 0.95 : 0.98
        particle.vx *= dampingFactor
        particle.vy *= dampingFactor
      })
    }

    const getConnections = (): Connection[] => {
      const connections: Connection[] = []
      const maxDistance = 120
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15
            connections.push({ from: p1, to: p2, opacity })
          }
        }
      }
      return connections
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections
      const connections = getConnections()
      connections.forEach(connection => {
        ctx.beginPath()
        ctx.moveTo(connection.from.x, connection.from.y)
        ctx.lineTo(connection.to.x, connection.to.y)
        // Use hot pink for connections with higher opacity in dark mode
        const connectionOpacity = isDark ? Math.min(connection.opacity * 6, 0.8) : Math.min(connection.opacity * 4, 0.6)
        ctx.strokeStyle = `rgba(255, 105, 180, ${connectionOpacity})`
        ctx.lineWidth = 1.5
        ctx.shadowColor = `rgba(255, 105, 180, ${isDark ? 0.5 : 0.3})`
        ctx.shadowBlur = 2
        ctx.stroke()
      })
      
      // Mouse trail rendering
      mouseTrail.current = mouseTrail.current.map(point => ({ ...point, age: point.age + 1 })).filter(point => point.age < 30)
      
      // Render trail points
      mouseTrail.current.forEach((point, index) => {
        const alpha = (1 - point.age / 30) * 0.3
        const size = (1 - point.age / 30) * 8
        
        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 105, 180, ${alpha})`
        ctx.fill()
      })
      
      // Draw particles
      particlesRef.current.forEach(particle => {
        ctx.beginPath()
        
        // Dynamic particle size based on mouse proximity
        let dynamicSize = particle.size
        const dx = mousePos.x - particle.x
        const dy = mousePos.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          dynamicSize = particle.size * (1 + (100 - distance) / 100)
        }
        
        ctx.arc(particle.x, particle.y, dynamicSize, 0, Math.PI * 2)
        
        // Convert hex to rgba
        const hex = particle.color.replace('#', '')
        const r = parseInt(hex.substr(0, 2), 16)
        const g = parseInt(hex.substr(2, 2), 16)
        const b = parseInt(hex.substr(4, 2), 16)
        
        // Enhanced particle opacity and glow
        const baseOpacity = Math.min(particle.opacity * 3, 1)
        const glowIntensity = Math.max(0, 1 - distance / 150)
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(baseOpacity + glowIntensity * 0.5, 1)})`
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${0.5 + glowIntensity * 0.3})`
        ctx.shadowBlur = 3 + glowIntensity * 5
        ctx.fill()
        ctx.shadowBlur = 0
      })
    }

    const animate = () => {
      updateParticles()
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const newMousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
      
      // Track mouse movement
      if (lastMousePos.current) {
        const dx = newMousePos.x - lastMousePos.current.x
        const dy = newMousePos.y - lastMousePos.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Add point if movement is significant
        if (distance > 2) {
          mouseTrail.current.push({ ...newMousePos, age: 0 })
          if (mouseTrail.current.length > 25) {
            mouseTrail.current.shift()
          }
        }
      }
      
      setMousePos(newMousePos)
      lastMousePos.current = newMousePos
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ 
          opacity: opacity !== undefined ? opacity : (isDark ? 0.8 : 0.6), 
          pointerEvents: 'auto',
          mixBlendMode: isDark ? 'normal' : 'multiply'
        }}
      />
  )
}

export default NeuralNetworkBackground