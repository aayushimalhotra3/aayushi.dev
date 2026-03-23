import React from 'react'

interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Go', 'SQL', 'Java', 'C++'],
  },
  {
    category: 'Backend & Data',
    icon: '⚙',
    skills: ['FastAPI', 'PostgreSQL', 'MongoDB', 'Apache Spark', 'Redis', 'Celery', 'Apache Airflow', 'Node.js'],
  },
  {
    category: 'AI / ML',
    icon: '◈',
    skills: ['TensorFlow', 'scikit-learn', 'RAG Pipelines', 'LangChain', 'OpenAI API', 'BERT', 'XGBoost', 'Streamlit'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    skills: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana', 'Vercel'],
  },
  {
    category: 'Frontend',
    icon: '▣',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    category: 'Tooling',
    icon: '⌥',
    skills: ['Git', 'REST APIs', 'Postman', 'Linux', 'Jupyter', 'VS Code'],
  },
]

const Pill = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1c1c2e] border border-[#2c2838] text-[#c0bbb8] text-xs font-medium hover:border-[#c4a0b4]/50 hover:text-[#f0ece8] transition-colors duration-150 cursor-default">
    {label}
  </span>
)

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-[#0f0f1a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2c2838] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-14" data-aos="fade-up">
          <span className="text-[#c4a0b4] text-xs font-medium tracking-[0.2em] uppercase">Toolkit</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#f0ece8] mt-2">
            Skills
          </h2>
        </div>

        {/* Grid of category blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.category}
              className="bg-[#1c1c2e] border border-[#2c2838] rounded-xl p-6 hover:border-[#3c3848] transition-colors duration-200"
              data-aos="fade-up"
              data-aos-delay={`${i * 60}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#c4a0b4] text-base font-mono leading-none select-none">
                  {group.icon}
                </span>
                <h3 className="font-serif text-sm font-semibold text-[#f0ece8] tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map(s => <Pill key={s} label={s} />)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
