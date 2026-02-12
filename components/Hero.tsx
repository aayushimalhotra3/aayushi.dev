import React from 'react'
import Image from 'next/image'
import { ArrowDown, Mail, Github, Linkedin, FileText } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center bg-bg-dark relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-pink/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-cool/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 w-full py-32 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="w-full lg:w-3/5 space-y-6">
            <div className="space-y-3">
              <p className="text-accent-pink text-sm font-medium tracking-wide uppercase">
                Software Engineer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light leading-tight">
                Hi, I'm{' '}
                <span className="text-accent-pink">Aayushi</span>
              </h1>
              <div className="text-xl md:text-2xl text-text-muted font-light h-8">
                <Typewriter
                  words={[
                    'building cloud-native apps',
                    'training ML models',
                    'crafting clean interfaces',
                    'automating everything',
                  ]}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </div>
            </div>

            <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-lg">
              CS major at Michigan State with a knack for turning complex problems into
              elegant solutions. I love Python, cloud infra, and the occasional 2 AM
              debugging session.
            </p>

            <p className="text-accent-warm text-sm font-medium">
              Open to Summer 2025 SWE internships & full-time roles
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToAbout}
                className="btn-primary"
              >
                About Me
                <ArrowDown size={16} />
              </button>

              <a
                href="#contact"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get In Touch
              </a>

              <a
                href="/Malhotra, Aayushi Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/aayushimalhotra3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-text-light transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aayushimalhotraa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-text-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:aayushim33@gmail.com"
                className="text-text-dim hover:text-text-light transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right: Cutout image */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent-pink/10 rounded-2xl blur-2xl" />
              <Image
                src="/cutout.png"
                alt="Aayushi Malhotra"
                width={400}
                height={540}
                className="relative z-10 max-w-[320px] lg:max-w-[400px]"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
