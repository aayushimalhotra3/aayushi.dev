import React from 'react'
import { motion } from 'framer-motion'
import { Globe, GraduationCap, Moon, BookOpen, Gamepad2 } from 'lucide-react'

const facts = [
  { icon: Globe,         label: '3 countries',    detail: 'US, India & UAE — five internships' },
  { icon: GraduationCap, label: 'Michigan State',  detail: 'CS + Cognitive Science Minor, May 2026' },
  { icon: Moon,          label: 'Night owl',       detail: 'Best commits: 10pm – 4am' },
  { icon: BookOpen,      label: 'Always reading',  detail: 'Sci-fi, Dune on repeat, fantasy binge' },
  { icon: Gamepad2,      label: 'Animal Crossing', detail: 'New Horizons — my island is thriving' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.p variants={fadeUp} className="section-label mb-4">
          01 &mdash; About
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-display-lg text-primary mb-10"
        >
          About me
        </motion.h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <p className="text-muted text-base leading-relaxed mb-4">
            Hi! I&apos;m Aayushi ✨ CS senior at Michigan State with a Cognitive
            Science minor, graduating May 2026. I&apos;ve interned in three different
            countries and I still can&apos;t fix my sleep schedule.
          </p>
          <p className="text-muted text-base leading-relaxed mb-4">
            When I&apos;m not coding, I&apos;m probably on my Animal Crossing island,
            reading something I picked up at 1 AM, or on a walk pretending
            I&apos;m in a music video. 🎵 Always looking for song recs and book
            recs — don&apos;t be shy!
          </p>
          <p className="text-muted text-base leading-relaxed">
            <a
              href="#contact"
              style={{ color: 'var(--accent-blush)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
            >
              Say hi anytime →
            </a>
          </p>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}
          className="lg:col-span-2"
        >
          <motion.p
            variants={fadeUp}
            className="text-muted text-xs tracking-[0.15em] uppercase mb-5 font-medium font-mono"
          >
            Quick facts
          </motion.p>
          <div className="space-y-3">
            {facts.map((f) => (
              <motion.div
                key={f.label}
                variants={fadeUp}
                className="group bg-card rounded-2xl px-4 py-3.5 shadow-card border-l-[3px] border-accent hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <f.icon size={16} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-primary text-sm font-semibold">
                      {f.label}
                    </p>
                    <p className="text-muted text-xs mt-0.5">{f.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
