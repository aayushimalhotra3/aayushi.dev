import React from 'react'
import Image from 'next/image'
import { ArrowDown, Mail, Github, Linkedin, FileText, MapPin, BookOpen } from 'lucide-react'
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

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-20 lg:pt-28 lg:pb-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left sidebar - GitHub profile style */}
          <div className="w-full lg:w-72 flex-shrink-0">
            {/* Avatar */}
            <div className="mb-4">
              <Image
                src="/profile.jpeg"
                alt="Aayushi Malhotra"
                width={260}
                height={260}
                className="rounded-full border-2 border-border-dark w-48 h-48 lg:w-64 lg:h-64 object-cover"
                priority
              />
            </div>

            {/* Name & handle */}
            <div className="mb-3">
              <h1 className="text-2xl font-bold text-text-light leading-tight">
                Aayushi Malhotra
              </h1>
              <p className="text-text-dim text-lg font-light">aayushimalhotra3</p>
            </div>

            {/* Bio */}
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              CS major at Michigan State. I love Python, cloud infra, and the
              occasional 2 AM debugging session.
            </p>

            {/* Meta info */}
            <div className="space-y-1.5 mb-5">
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <MapPin size={14} className="text-text-dim flex-shrink-0" />
                East Lansing, MI
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <BookOpen size={14} className="text-text-dim flex-shrink-0" />
                B.S. Computer Science, Cognitive Science Minor
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-text-dim flex-shrink-0" />
                <a href="mailto:aayushim33@gmail.com" className="text-text-muted hover:text-accent-pink transition-colors">
                  aayushim33@gmail.com
                </a>
              </div>
            </div>

            {/* Status badge */}
            <div className="bg-accent-warm/10 border border-accent-warm/20 rounded-lg px-3 py-2 mb-5">
              <p className="text-accent-warm text-xs font-medium">
                Open to Summer 2025 SWE internships & full-time roles
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-2 mb-5">
              <button
                onClick={scrollToAbout}
                className="btn-primary justify-center w-full"
              >
                About Me
                <ArrowDown size={16} />
              </button>

              <div className="flex gap-2">
                <a
                  href="#contact"
                  className="btn-secondary justify-center flex-1"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Contact
                </a>
                <a
                  href="/Malhotra, Aayushi Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary justify-center flex-1"
                >
                  <FileText size={14} />
                  Resume
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/aayushimalhotra3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-text-light transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/aayushimalhotraa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-text-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right content area */}
          <div className="flex-1 lg:pt-8">
            {/* Greeting with typewriter */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-3">
                Hi there <span className="inline-block animate-pulse">&#128075;</span>
              </h2>
              <div className="text-lg md:text-xl text-text-muted font-light">
                I'm currently{' '}
                <span className="text-accent-pink">
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
                </span>
              </div>
            </div>

            {/* README-style content */}
            <div className="bg-bg-card border border-border-dark rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border-dark">
                <BookOpen size={16} className="text-text-dim" />
                <span className="text-text-muted text-sm font-medium">README.md</span>
              </div>

              <div className="space-y-3 text-text-muted text-sm leading-relaxed">
                <p>
                  Crafting scalable, cloud-powered applications with Python and React.
                  I turn complex challenges into impactful solutions through collaboration
                  and a lot of coffee.
                </p>
                <p>
                  My interests span <span className="text-text-light">cloud computing</span>,{' '}
                  <span className="text-text-light">machine learning</span>,{' '}
                  <span className="text-text-light">data engineering</span>, and{' '}
                  <span className="text-text-light">full-stack development</span>.
                  I'm always looking for the next problem I can solve with code.
                </p>
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-dark">
                {['Python', 'TypeScript', 'Go', 'React', 'FastAPI', 'GCP', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-bg-dark border border-border-dark text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contribution-style stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-bg-card border border-border-dark rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-text-light">14</p>
                <p className="text-xs text-text-dim">repositories</p>
              </div>
              <div className="bg-bg-card border border-border-dark rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-text-light">6+</p>
                <p className="text-xs text-text-dim">languages</p>
              </div>
              <div className="bg-bg-card border border-border-dark rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-text-light">3+</p>
                <p className="text-xs text-text-dim">cloud platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
