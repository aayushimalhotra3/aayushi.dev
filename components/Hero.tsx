'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { heroPhrases, resumeHref } from '@/lib/portfolio-data'

const ease = [0.22, 1, 0.36, 1] as const

const Hero = () => {
  const [activePhrase, setActivePhrase] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhrase((current) => (current + 1) % heroPhrases.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg-primary pb-16 pt-24 md:pb-20 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_18%,rgba(110,59,91,0.18),transparent_62%)]" />

      <div className="container relative">
        <div className="border-b border-border-subtle pb-12 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="flex flex-col gap-3 border-y border-border-subtle py-4 md:flex-row md:items-center md:justify-between"
          >
            <span className="type-utility text-[0.7rem] uppercase tracking-[0.28em] text-text-tertiary">
              Software Engineer
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <span className="type-utility text-[0.68rem] uppercase tracking-[0.22em] text-text-tertiary">
                5 internships, 3 countries
              </span>
              <span className="type-utility text-[0.68rem] uppercase tracking-[0.22em] text-text-tertiary">
                Open to full-time · May 2026
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease }}
            className="type-hero-display mt-10 text-[clamp(3.6rem,9vw,7.2rem)] leading-[0.88] tracking-[-0.065em] text-text-primary md:mt-12"
          >
            <span className="block">Aayushi</span>
            <span className="mt-2 block italic">Malhotra</span>
          </motion.h1>

          <div className="mt-7 h-px w-24 bg-[color:var(--accent-plum)] opacity-60 md:mt-8" />

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
              className="lg:col-span-7"
            >
              <div className="min-h-[3.5rem] overflow-hidden text-[1.02rem] leading-[1.85] text-text-secondary md:text-[1.1rem]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={heroPhrases[activePhrase]}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.42, ease }}
                    className="max-w-[38rem] tracking-[-0.01em]"
                  >
                    {heroPhrases[activePhrase]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              className="lg:col-span-5"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                  className="btn inline-flex w-full items-center justify-center bg-[color:var(--accent-plum)] px-6 py-3 text-sm font-medium tracking-[-0.01em] text-text-primary shadow-button hover:bg-[color:var(--accent-plum-light)]"
                >
                  Get in touch
                </a>

                <a
                  href={resumeHref}
                  download
                  className="btn inline-flex w-full items-center justify-center gap-2 border border-border-subtle bg-[rgba(245,241,234,0.02)] px-6 py-3 text-sm font-medium tracking-[-0.01em] text-text-primary transition-colors hover:border-border-medium hover:bg-[rgba(245,241,234,0.03)]"
                >
                  Resume <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-12 md:mt-14"
        >
          <div className="relative overflow-hidden rounded-[18px] border border-border-subtle bg-bg-card shadow-card">
            <Image
              src="/profile.jpeg"
              alt="Aayushi Malhotra"
              width={1400}
              height={940}
              priority
              className="h-[420px] w-full object-cover object-[50%_30%] md:h-[520px] [filter:saturate(0.92)_contrast(1.05)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,12,0.16)_0%,rgba(11,10,12,0)_42%,rgba(11,10,12,0.42)_100%)]" />
          </div>

          <figcaption className="mt-6 grid gap-4 border-t border-border-subtle pt-5 md:grid-cols-2 md:gap-10">
            <span className="type-utility text-[0.68rem] uppercase tracking-[0.22em] text-text-tertiary">
              Portfolio · 2026
            </span>
            <span className="type-utility text-[0.68rem] uppercase tracking-[0.22em] text-text-tertiary md:text-right">
              Data pipelines · Backend APIs · Cloud infrastructure
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}

export default Hero
