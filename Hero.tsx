import React from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#0f0f1a] overflow-hidden"
    >
      {/* Radial glow — subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 65% 45%, rgba(196,160,180,0.06) 0%, transparent 65%)',
        }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4a0b4]/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-14 lg:gap-20">

          {/* ── Left: Text ─────────────────────────────── */}
          <div className="flex-1 flex flex-col items-start">

            {/* Availability badge */}
            <div
              className="flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-[#2c2838] bg-[#1c1c2e]"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <span className="w-2 h-2 rounded-full bg-[#c4a0b4]" style={{ boxShadow: '0 0 6px #c4a0b4' }} />
              <span className="text-[#c4a0b4] text-xs md:text-sm font-medium tracking-wide">
                Seeking full-time SWE &amp; AI/Data Engineering roles · Starting Summer 2026
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-serif text-5xl md:text-6xl xl:text-7xl font-semibold text-[#f0ece8] leading-[1.08] mb-5"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              Aayushi<br />Malhotra
            </h1>

            {/* Title */}
            <p
              className="text-[#d4c5a9] text-xl md:text-2xl font-medium mb-5 tracking-wide"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Software Engineer
            </p>

            {/* Tagline */}
            <p
              className="text-[#c0bbb8] text-base md:text-lg leading-relaxed max-w-[520px] mb-10"
              data-aos="fade-up"
              data-aos-delay="140"
            >
              I build data-intensive backend systems and AI pipelines — FastAPI, cloud
              infrastructure, and the glue that makes ML models actually ship to production.
            </p>

            {/* Social icons */}
            <div
              className="flex items-center gap-5 mb-10"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              <a
                href="https://github.com/aayushimalhotra3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7a7680] hover:text-[#f0ece8] transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aayushimalhotraa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7a7680] hover:text-[#f0ece8] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:aayushim33@gmail.com"
                className="text-[#7a7680] hover:text-[#f0ece8] transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3"
              data-aos="fade-up"
              data-aos-delay="220"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium
                           bg-[#c4a0b4] text-[#0f0f1a] hover:bg-[#b08fa0]
                           transition-all duration-200"
              >
                View My Work
                <ArrowDown size={15} />
              </button>

              <a
                href="/Malhotra, Aayushi Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium
                           border border-[#2c2838] text-[#f0ece8] hover:border-[#c4a0b4] hover:text-[#c4a0b4]
                           transition-all duration-200"
              >
                <Download size={15} />
                Download Resume
              </a>
            </div>
          </div>

          {/* ── Right: Photo ──────────────────────────── */}
          <div
            className="flex-shrink-0 flex items-center justify-center"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <div className="relative">
              {/* Soft glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-25 scale-125 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #c4a0b4 0%, transparent 70%)' }}
              />
              {/* Photo circle */}
              <div
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-[#2c2838]"
                style={{ boxShadow: '0 0 0 8px rgba(196,160,180,0.07), 0 0 0 1px rgba(196,160,180,0.18)' }}
              >
                <Image
                  src="/cutout.png"
                  alt="Aayushi Malhotra"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[#7a7680] opacity-50">
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
