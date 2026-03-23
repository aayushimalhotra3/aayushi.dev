import React from 'react'
import { GraduationCap, Briefcase, MapPin, FlaskConical } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: <Briefcase size={18} className="text-[#c4a0b4]" />,
    label: '3 Internships',
    detail: 'Ericsson · Innefu Labs · IDX Exchange',
  },
  {
    icon: <GraduationCap size={18} className="text-[#c4a0b4]" />,
    label: 'B.S. Computer Science',
    detail: 'Michigan State University · Class of 2026',
  },
  {
    icon: <FlaskConical size={18} className="text-[#c4a0b4]" />,
    label: 'M.S. Data Science',
    detail: 'Admitted · MSU · Starting Fall 2026',
  },
  {
    icon: <MapPin size={18} className="text-[#c4a0b4]" />,
    label: 'Global Background',
    detail: 'India · Dominican Republic · Dubai · USA',
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-[#141421] relative"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2c2838] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Section label + title */}
        <div className="mb-14" data-aos="fade-up">
          <span className="text-[#c4a0b4] text-xs font-medium tracking-[0.2em] uppercase">Background</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#f0ece8] mt-2">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-14 items-start">

          {/* Bio */}
          <div data-aos="fade-up" data-aos-delay="80">
            <div className="space-y-5 text-[#c0bbb8] text-base leading-relaxed">
              <p>
                I'm a Computer Science senior at Michigan State University (graduating May 2026) with a
                Cognitive Science minor, and I've been admitted to MSU's Master of Data Science program
                for Fall 2026. My technical focus is backend engineering, data pipelines, and AI/ML
                infrastructure — the parts of the stack that make intelligent systems actually run reliably at scale.
              </p>
              <p>
                Across three internships — at Ericsson, Innefu Labs, and IDX Exchange — I've built and
                shipped production data pipelines, RAG-based AI systems, FastAPI backends, and ML models
                for anomaly detection. I've also done undergraduate research at MSU's College of Social
                Science, applying predictive modeling to socioeconomic datasets. I care deeply about
                systems that are observable, maintainable, and genuinely useful.
              </p>
              <p>
                I grew up across three continents — India, the Dominican Republic, and Dubai — before coming
                to Michigan for college. That background gives me a perspective I carry into every team I'm
                part of: that the best engineering happens when different kinds of thinkers work together.
              </p>
            </div>

            {/* Currently looking for note */}
            <div className="mt-8 p-4 rounded-lg border border-[#2c2838] bg-[#1c1c2e]">
              <p className="text-sm text-[#c0bbb8]">
                <span className="text-[#c4a0b4] font-medium">Currently:</span> Seeking full-time Software Engineering
                and AI/Data Engineering roles starting Summer 2026. Open to backend, data platform, and ML
                infrastructure teams.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
            data-aos="fade-left"
            data-aos-delay="120"
          >
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#1c1c2e] border border-[#2c2838] hover:border-[#3c3848] transition-colors duration-200"
              >
                <div className="mt-0.5 flex-shrink-0">{h.icon}</div>
                <div>
                  <p className="text-[#f0ece8] text-sm font-medium mb-0.5">{h.label}</p>
                  <p className="text-[#7a7680] text-xs leading-relaxed">{h.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
