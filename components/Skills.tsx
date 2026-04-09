import React from 'react'
import { motion } from 'framer-motion'
import {
  SiPython, SiTypescript, SiGo, SiCplusplus, SiGnubash,
  SiFastapi, SiReact, SiNextdotjs, SiFlask, SiStreamlit, SiApachespark,
  SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiGooglecloud, SiDocker, SiKubernetes, SiTerraform,
  SiGit, SiPrometheus, SiJupyter, SiLinux, SiPandas,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'
import { TbSql } from 'react-icons/tb'
import { VscTerminalBash } from 'react-icons/vsc'
import type { IconType } from 'react-icons'

type Skill = {
  name: string
  Icon: IconType
  color: string
}

type Category = {
  label: string
  accent: string
  skills: readonly Skill[]
}

const CATEGORIES: readonly Category[] = [
  {
    label: 'Languages',
    accent: '#c9a0a0',
    skills: [
      { name: 'Python',     Icon: SiPython,     color: '#3776ab' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
      { name: 'Go',         Icon: SiGo,         color: '#00add8' },
      { name: 'Java',       Icon: FaJava,       color: '#e76f00' },
      { name: 'C++',        Icon: SiCplusplus,  color: '#659bd3' },
      { name: 'SQL',        Icon: TbSql,        color: '#c9a0a0' },
      { name: 'Bash',       Icon: SiGnubash,    color: '#4eaa25' },
    ],
  },
  {
    label: 'Frameworks',
    accent: '#c9a96e',
    skills: [
      { name: 'FastAPI',      Icon: SiFastapi,      color: '#009688' },
      { name: 'React',        Icon: SiReact,        color: '#61dafb' },
      { name: 'Next.js',      Icon: SiNextdotjs,    color: '#e8e8e8' },
      { name: 'Flask',        Icon: SiFlask,        color: '#d8d8d8' },
      { name: 'PySpark',      Icon: SiApachespark,  color: '#e25a1c' },
      { name: 'Streamlit',    Icon: SiStreamlit,    color: '#ff4b4b' },
    ],
  },
  {
    label: 'Databases',
    accent: '#8aad9a',
    skills: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
      { name: 'MySQL',      Icon: SiMysql,      color: '#4479a1' },
      { name: 'MongoDB',    Icon: SiMongodb,    color: '#47a248' },
      { name: 'Redis',      Icon: SiRedis,      color: '#d82c20' },
    ],
  },
  {
    label: 'Cloud & Infra',
    accent: '#9a7a7a',
    skills: [
      { name: 'GCP',        Icon: SiGooglecloud, color: '#4285f4' },
      { name: 'AWS',        Icon: FaAws,         color: '#ff9900' },
      { name: 'Docker',     Icon: SiDocker,      color: '#2496ed' },
      { name: 'Kubernetes', Icon: SiKubernetes,  color: '#326ce5' },
      { name: 'Terraform',  Icon: SiTerraform,   color: '#7b42bc' },
    ],
  },
  {
    label: 'Tools',
    accent: '#9b928a',
    skills: [
      { name: 'Git',        Icon: SiGit,        color: '#f05032' },
      { name: 'CI/CD',      Icon: VscTerminalBash,       color: '#c9a0a0' },
      { name: 'Prometheus', Icon: SiPrometheus, color: '#e6522c' },
      { name: 'Pandas',     Icon: SiPandas,     color: '#150458' },
      { name: 'Jupyter',    Icon: SiJupyter,    color: '#f37626' },
      { name: 'Linux',      Icon: SiLinux,      color: '#fcc624' },
    ],
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

function SkillIcon({ skill }: { skill: Skill }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
      }}
      whileHover={{ y: -3, transition: { duration: 0.18 } }}
      className="flex flex-col items-center gap-2 cursor-default group"
    >
      {/* Icon box */}
      <div
        className="relative flex items-center justify-center rounded-xl transition-all duration-250"
        style={{
          width: '52px',
          height: '52px',
          background: 'rgba(245,241,234,0.04)',
          border: '1px solid rgba(245,241,234,0.08)',
        }}
      >
        <skill.Icon
          size={26}
          style={{ color: skill.color, opacity: 0.75, transition: 'opacity 0.2s, color 0.2s' }}
          className="group-hover:opacity-100"
        />
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-250"
          style={{ background: `radial-gradient(circle at center, ${skill.color}18 0%, transparent 70%)` }}
        />
      </div>
      {/* Name */}
      <span
        className="font-sans text-[11px] font-medium text-center leading-tight tracking-wide transition-colors duration-200"
        style={{ color: 'var(--text-tertiary)', maxWidth: '72px' }}
      >
        <span className="group-hover:text-[var(--text-primary)] transition-colors duration-200">
          {skill.name}
        </span>
      </span>
    </motion.div>
  )
}

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

const Skills = () => (
  <section id="skills" className="py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-6 md:px-8">

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.1 }}
        className="mb-16"
      >
        <motion.p variants={fadeUp} className="section-label mb-4">
          04 &mdash; Skills
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-display-lg"
          style={{ color: 'var(--text-primary)' }}
        >
          What I build with
        </motion.h2>
      </motion.div>

      {/* Categories */}
      <div className="space-y-14">
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: ci * 0.05, ease: EASE }}
          >
            {/* Category label */}
            <div className="flex items-center gap-2.5 mb-6">
              <span
                className="block w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: cat.accent }}
              />
              <p
                className="font-mono text-[10px] tracking-[0.28em] uppercase"
                style={{ color: cat.accent }}
              >
                {cat.label}
              </p>
            </div>

            {/* Icon grid */}
            <motion.div
              className="flex flex-wrap gap-4 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
            >
              {cat.skills.map(skill => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </motion.div>

            {/* Thin separator */}
            {ci < CATEGORIES.length - 1 && (
              <div
                className="mt-12 h-px"
                style={{ background: 'rgba(245,241,234,0.05)' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
