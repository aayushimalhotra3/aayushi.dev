import React from 'react'

const CurrentlyWorkingOn = () => {
  const currentProjects = [
    {
      title: 'Real-Time Anomaly Detection Service',
      description: 'A streaming-based TensorFlow model on GCP Dataflow that ingests network logs and flags anomalies within seconds. Targeting 60% reduction in security incident response time.',
      technologies: ['Python', 'Apache Beam', 'TensorFlow', 'GCP'],
      status: 'In Development',
      progress: 70,
    },
    {
      title: 'Multi-Cloud Infrastructure Orchestrator',
      description: 'Terraform + Pulumi pipeline that provisions identical Kubernetes clusters across AWS and GCP with automated CI/CD testing. Eliminating 80% of deployment errors.',
      technologies: ['Terraform', 'Pulumi', 'Kubernetes', 'Docker'],
      status: 'In Development',
      progress: 45,
    },
    {
      title: 'Edge-AI Microclimate Monitor v2.0',
      description: 'Arduino mesh network of soil sensors with TinyML on-device predictions for offline watering needs. Targeting 90% accuracy with 35% water waste reduction.',
      technologies: ['C++', 'TensorFlow Lite', 'React Native', 'MQTT'],
      status: 'Planning',
      progress: 30,
    },
  ]

  return (
    <section className="py-24 bg-bg-section">
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-bold text-text-light mb-4">
          Currently Working On
        </h2>
        <p className="text-text-muted text-sm mb-10">
          Projects in progress and things I'm exploring.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                  project.status === 'In Development'
                    ? 'bg-accent-cool/10 text-accent-cool'
                    : 'bg-accent-warm/10 text-accent-warm'
                }`}>
                  {project.status}
                </span>
                <span className="text-xs text-text-dim">{project.progress}%</span>
              </div>

              <h3 className="text-base font-semibold text-text-light mb-3">
                {project.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="w-full bg-bg-dark rounded-full h-1">
                  <div
                    className="h-full rounded-full bg-accent-pink transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="skill-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentlyWorkingOn
