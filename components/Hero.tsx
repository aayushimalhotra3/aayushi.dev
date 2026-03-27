import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Moon, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const techs = [
  'Python', 'FastAPI', 'GCP', 'Docker', 'PostgreSQL', 'React',
  'TypeScript', 'Kubernetes', 'Apache Beam', 'AWS', 'PySpark',
  'Go', 'Terraform', 'SQL',
]

const CardWrapper = ({
  children,
  className = '',
  accent = false,
}: {
  children: React.ReactNode
  className?: string
  accent?: boolean
}) => (
  <motion.div
    variants={cardVariant}
    className={`rounded-card transition-all duration-200 ${
      accent
        ? 'bg-accent text-white'
        : 'bg-card shadow-card hover:shadow-card-glow hover:-translate-y-0.5'
    } ${className}`}
  >
    {children}
  </motion.div>
)

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-6xl mx-auto w-full px-6 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Card A — Intro (2 cols, 2 rows) */}
          <CardWrapper className="sm:col-span-2 sm:row-span-2 p-8 md:p-10 flex flex-col justify-center">
            <h1 className="font-display text-hero leading-[1.05]">
              Hi, I&apos;m{' '}
              <span className="text-accent">Aayushi</span>
            </h1>
            <p className="mt-4 text-muted text-base md:text-lg leading-relaxed max-w-md">
              Software Engineer. I build data pipelines, backend APIs, and cloud infra.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-accent text-sm font-medium w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Open to full-time roles &middot; May 2026
            </div>
          </CardWrapper>

          {/* Card B — Profile photo */}
          <CardWrapper className="p-0 overflow-hidden aspect-square flex items-center justify-center">
            <Image
              src="/profile.jpeg"
              alt="Aayushi Malhotra"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </CardWrapper>

          {/* Card C — Location */}
          <CardWrapper className="p-6 flex flex-col justify-center">
            <MapPin size={20} className="text-accent mb-3" />
            <p className="font-display font-bold text-lg text-primary">
              East Lansing, MI
            </p>
            <p className="text-muted text-sm mt-1">
              From India &middot; Lived in Dominican Republic
            </p>
          </CardWrapper>

          {/* Card D — Tech marquee (2 cols) */}
          <CardWrapper className="sm:col-span-2 p-0 overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
            <div className="py-5 overflow-hidden">
              <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
                {[...techs, ...techs].map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="font-mono text-sm text-muted flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </CardWrapper>

          {/* Card E — Stats */}
          <CardWrapper className="p-6 flex flex-col justify-center">
            <p className="font-display text-4xl font-extrabold text-accent leading-none">
              5+
            </p>
            <p className="text-primary font-medium text-sm mt-2">
              internships across
            </p>
            <p className="text-muted text-sm">3 countries</p>
          </CardWrapper>

          {/* Card F — Current role */}
          <CardWrapper className="p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-muted text-xs font-mono uppercase tracking-wider">
                Currently
              </span>
            </div>
            <p className="font-display font-bold text-lg text-primary leading-tight">
              @ IDX Exchange
            </p>
            <p className="text-muted text-sm mt-1">
              Cloud &middot; Data &middot; Backend
            </p>
          </CardWrapper>

          {/* Card G — Personality */}
          <CardWrapper className="p-6 flex flex-col justify-center relative overflow-hidden">
            {/* Subtle stars */}
            <div className="absolute top-3 right-3 text-accent/20">
              <Moon size={40} />
            </div>
            <p className="font-display font-bold text-base text-primary leading-snug relative z-10">
              Night owl &mdash; best commits at 2 AM
            </p>
            <p className="text-muted text-xs mt-2 relative z-10">
              Fueled by curiosity and cold brew
            </p>
          </CardWrapper>

          {/* Card H — CTA */}
          <CardWrapper accent className="p-6 flex items-center justify-between cursor-pointer group">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex items-center justify-between w-full"
            >
              <span className="font-display font-bold text-xl">
                Let&apos;s talk
              </span>
              <ArrowRight
                size={24}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </CardWrapper>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
