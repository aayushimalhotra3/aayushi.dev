import React, { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Languages')

  const categories = [
    {
      key: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'R', 'PHP', 'Bash', 'MATLAB'],
    },
    {
      key: 'ML & Data',
      skills: [
        'TensorFlow', 'PyTorch', 'Keras', 'Scikit-Learn', 'Pandas', 'NumPy',
        'Apache Spark', 'Apache Beam', 'OpenCV', 'NLTK', 'spaCy', 'TextBlob',
        'Matplotlib', 'Seaborn', 'Jupyter',
      ],
    },
    {
      key: 'Cloud & DevOps',
      skills: [
        'Google Cloud Platform', 'AWS', 'Azure', 'Kubernetes', 'Docker',
        'Terraform', 'Jenkins', 'Dataflow', 'IAM', 'MongoDB',
      ],
    },
    {
      key: 'Web & Frameworks',
      skills: [
        'React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Django',
        'Streamlit', 'Tailwind CSS', 'HTML/CSS', 'Git', 'PostgreSQL',
      ],
    },
  ]

  const additionalSkills = [
    'REST APIs', 'Grafana', 'Apache Airflow', 'ETL Processes',
    'Data Visualization', 'Statistical Analysis', 'Deep Learning',
    'Microservices', 'NLP', 'Computer Vision', 'Real-time Analytics',
    'Predictive Modeling', 'Data Pipelines', 'Cybersecurity',
  ]

  const activeSkills = categories.find((c) => c.key === activeCategory)?.skills || []

  return (
    <section id="skills" className="py-24 bg-bg-section">
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-bold text-text-light mb-4">
          Skills & Technologies
        </h2>
        <p className="text-text-muted text-sm mb-10">
          Tools and technologies I work with regularly.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? 'bg-accent-pink text-white'
                  : 'bg-bg-card text-text-muted border border-border-dark hover:border-border-hover'
              }`}
            >
              {cat.key}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-2 mb-16">
          {activeSkills.map((skill, i) => (
            <span
              key={i}
              className="bg-bg-card border border-border-dark text-text-light px-4 py-2 rounded-lg text-sm font-medium hover:border-accent-pink/40 hover:text-accent-pink transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Additional skills */}
        <div>
          <h3 className="text-sm font-medium text-text-dim uppercase tracking-wide mb-4">
            Also experienced with
          </h3>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill, i) => (
              <span
                key={i}
                className="text-text-dim text-xs border border-border-dark rounded-md px-3 py-1.5 hover:text-text-muted hover:border-border-hover transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
