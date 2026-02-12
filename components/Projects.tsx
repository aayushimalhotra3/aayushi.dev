import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const projects = [
    {
      title: 'AI-Powered Fashion Recommendation Engine',
      description: 'Built a comprehensive fashion advisor using Python, TensorFlow, and React. Integrated OpenCV for wardrobe image processing with color theory-based styling. Processed 1000+ wardrobe images, improving outfit satisfaction by 40%.',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'OpenCV'],
      category: 'Machine Learning',
      liveUrl: '',
      githubUrl: '',
    },
    {
      title: 'Real-time Cybersecurity Dashboard',
      description: 'Python + Streamlit dashboard consuming real-time streaming data with custom ML-based anomaly detection alerts. Reduced incident response time by 40% and increased threat detection accuracy by 20%.',
      technologies: ['Python', 'Streamlit', 'TensorFlow', 'Apache Spark'],
      category: 'Data Science',
      liveUrl: '',
      githubUrl: '',
    },
    {
      title: 'Cloud Infrastructure Optimization',
      description: 'Kubernetes-based microservices on GCP with optimized data pipelines using Apache Beam and IAM security. Achieved 25% scalability increase and 30% faster data processing.',
      technologies: ['Kubernetes', 'GCP', 'Apache Beam', 'Dataflow', 'IAM'],
      category: 'Cloud Computing',
      liveUrl: '',
      githubUrl: '',
    },
    {
      title: 'Sentiment Analysis Bot',
      description: 'AI-driven chatbot with Flask backend, using NLTK and TextBlob for real-time sentiment processing. Handled 1,500+ user interactions with 85% accuracy in emotional feedback classification.',
      technologies: ['Python', 'Flask', 'NLTK', 'TextBlob'],
      category: 'Machine Learning',
      liveUrl: '',
      githubUrl: '',
    },
    {
      title: 'ETL Pipeline Automation',
      description: 'Automated Python ETL pipelines extracting data via REST APIs with PostgreSQL warehouse, Grafana dashboards, and Airflow orchestration. Cut resolution time by 25%, processing 10K+ tickets monthly.',
      technologies: ['Python', 'PostgreSQL', 'REST APIs', 'Grafana', 'Airflow'],
      category: 'Data Engineering',
      liveUrl: '',
      githubUrl: '',
    },
    {
      title: 'Deep Learning Research Models',
      description: 'Custom TensorFlow neural network architectures for multi-dimensional social science analysis. Generated actionable insights for 5+ interdisciplinary studies, improving research efficiency by 35%.',
      technologies: ['Python', 'TensorFlow', 'Deep Learning', 'Research'],
      category: 'Research',
      liveUrl: '',
      githubUrl: '',
    },
  ]

  const allTechnologies = Array.from(new Set(projects.flatMap((p) => p.technologies))).sort()
  const filters = ['All', ...allTechnologies]

  const filtered =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.technologies.includes(selectedFilter))

  return (
    <section id="projects" className="py-24 bg-bg-dark">
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-bold text-text-light mb-4">
          Featured Projects
        </h2>
        <p className="text-text-muted text-sm mb-8">
          A selection of things I've built and problems I've solved.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                selectedFilter === f
                  ? 'bg-accent-pink text-white'
                  : 'bg-bg-card text-text-muted border border-border-dark hover:border-border-hover'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <div key={index} className="project-card">
              <div className="mb-3">
                <span className="text-xs text-accent-warm font-medium">{project.category}</span>
              </div>

              <h3 className="text-lg font-semibold text-text-light mb-3">
                {project.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-pink hover:text-accent-pink-hover text-sm font-medium transition-colors inline-flex items-center gap-1"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text-light text-sm font-medium transition-colors"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-12">
            No projects found with that filter.
          </p>
        )}
      </div>
    </section>
  )
}

export default Projects
