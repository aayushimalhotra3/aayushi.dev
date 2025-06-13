import React, { useState } from 'react'
import { ExternalLink, Github, Calendar, Users, Award, ChevronDown, ChevronUp } from 'lucide-react'
import NeuralNetworkBackground from './NeuralNetworkBackground'

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())

  const projects = [
    {
      title: 'AI-Powered Fashion Recommendation Engine',
      problem: 'Fashion enthusiasts struggled with outfit coordination and lacked personalized styling advice based on their existing wardrobe.',
      approach: [
        'Built comprehensive fashion advisor using Python, TensorFlow, and React',
        'Integrated OpenCV for wardrobe image processing and fashion APIs with color theory'
      ],
      impact: 'Processed 1000+ wardrobe images and delivered personalized styling advice, improving user outfit satisfaction by 40%',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'OpenCV', 'Fashion APIs'],
      category: 'Machine Learning',
      complexity: {
        algorithm: 'O(n²)',
        payload: 'TensorFlow 45MB',
        scale: '1K+ images'
      },
      liveUrl: '',
      githubUrl: '',
      image: '/website.png'
    },
    {
      title: 'Real-time Cybersecurity Dashboard',
      problem: 'Security teams lacked visibility into live network threats and struggled with slow incident response times.',
      approach: [
        'Built Python + Streamlit dashboard consuming real-time streaming data',
        'Designed custom alerts for anomaly detection using ML models and Apache Spark'
      ],
      impact: 'Reduced incident response time by 40% and increased threat detection accuracy by 20%',
      technologies: ['Python', 'Streamlit', 'TensorFlow', 'Apache Spark', 'Data Visualization'],
      category: 'Data Science',
      complexity: {
        algorithm: 'O(n)',
        payload: 'Spark 85MB',
        scale: 'Real-time'
      },
      liveUrl: '',
      githubUrl: '',
      image: '/laptop.png'
    },
    {
      title: 'Cloud Infrastructure Optimization',
      problem: 'Legacy systems faced scalability bottlenecks and inefficient data processing workflows in production environments.',
      approach: [
        'Implemented Kubernetes-based microservices architecture on Google Cloud Platform',
        'Optimized data pipelines using Apache Beam and integrated comprehensive security with IAM'
      ],
      impact: 'Achieved 25% increase in system scalability and 30% improvement in data processing speed while reducing infrastructure costs',
      technologies: ['Kubernetes', 'Google Cloud Platform', 'Apache Beam', 'Google Cloud Dataflow', 'IAM'],
      category: 'Cloud Computing',
      complexity: {
        algorithm: 'O(log n)',
        payload: 'K8s 200MB',
        scale: '100+ pods'
      },
      liveUrl: '',
      githubUrl: '',
      image: '/crown.png'
    },
    {
      title: 'Sentiment Analysis Bot',
      problem: 'Customer service teams needed automated emotional intelligence to better understand and respond to user feedback.',
      approach: [
        'Developed AI-driven chatbot with Flask backend and responsive web interface',
        'Integrated NLTK and TextBlob for real-time sentiment processing and personalized responses'
      ],
      impact: 'Processed over 1,500 user interactions with 85% accuracy in emotional feedback classification',
      technologies: ['Python', 'Flask', 'NLTK', 'TextBlob', 'Web Interface'],
      category: 'Machine Learning',
      complexity: {
        algorithm: 'O(n log n)',
        payload: 'NLTK 12MB',
        scale: '1.5K interactions'
      },
      liveUrl: '',
      githubUrl: '',
      image: '/diary.png'
    },
    {
      title: 'ETL Pipeline Automation',
      problem: 'Manual ticket processing workflows created bottlenecks and delayed resolution times for IT support teams.',
      approach: [
        'Built automated Python ETL pipelines extracting TeamDynamix data via REST APIs',
        'Implemented PostgreSQL data warehouse with Grafana dashboards and Airflow orchestration'
      ],
      impact: 'Cut mean resolution time by 25% and automated processing of 10K+ tickets monthly',
      technologies: ['Python', 'PostgreSQL', 'REST APIs', 'Grafana', 'Apache Airflow'],
      category: 'Data Engineering',
      complexity: {
        algorithm: 'O(n log n)',
        payload: 'Airflow 35MB',
        scale: '10K+ tickets'
      },
      liveUrl: '',
      githubUrl: '',
      image: '/pixelfloppy.png'
    },
    {
      title: 'Deep Learning Research Models',
      problem: 'Social science researchers needed advanced analytical tools to extract insights from complex, high-dimensional datasets.',
      approach: [
        'Developed Python deep-learning models using TensorFlow for multi-dimensional analysis',
        'Created custom neural network architectures optimized for interdisciplinary research applications'
      ],
      impact: 'Generated actionable insights for 5+ interdisciplinary studies, improving research efficiency by 35%',
      technologies: ['Python', 'TensorFlow', 'Deep Learning', 'High-dimensional Data', 'Research'],
      category: 'Research',
      complexity: {
        algorithm: 'O(n³)',
        payload: 'TensorFlow 60MB',
        scale: 'Multi-dimensional'
      },
      liveUrl: '',
      githubUrl: '',
      image: '/suit.png'
    }
  ]

  // Extract all unique skills from projects
  const allSkills = Array.from(new Set(projects.flatMap(project => project.technologies))).sort()
  const skillFilters = ['All', ...allSkills]

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(selectedFilter))

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedProjects(newExpanded)
  }

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const isExpanded = expandedProjects.has(index)
    const shouldShowReadMore = project.approach && project.approach.length > 0 // Show read more if there are approach details
    
    return (
      <div className="project-card group">
        
        <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-3">
          {project.title}
        </h3>
        
        {/* Problem Statement */}
        <div className="mb-3">
          <p className="text-red-600 dark:text-red-400 text-sm leading-relaxed">
            <span className="text-red-500 dark:text-red-400 font-semibold">Problem Statement:</span> {project.problem}
          </p>
        </div>
        
        {/* Solution/Approach */}
        {project.approach && (
          <div className="mb-3">
            <div className={isExpanded ? '' : 'line-clamp-2'}>
              {project.approach.map((item: string, idx: number) => (
                <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                  • {item}
                </p>
              ))}
            </div>
            {shouldShowReadMore && (
              <button
                onClick={() => toggleExpanded(index)}
                className="text-soft-pink dark:text-accent-green hover:text-pink-700 dark:hover:text-accent-blue text-sm font-medium mt-1 transition-colors"
              >
                {isExpanded ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>
        )}
      
        {/* Impact */}
        <div className="bg-butter-yellow/20 dark:bg-accent-yellow/20 border border-butter-yellow/40 dark:border-accent-yellow/40 rounded-lg p-3 mb-4">
          <p className="text-charcoal dark:text-white text-sm font-semibold leading-relaxed">
            {project.impact}
          </p>
        </div>
      
        {/* Tech Tags & Metrics */}
        <div className="space-y-3">
          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech: string, index: number) => (
              <span key={index} className="skill-tag text-xs">
                {tech}
              </span>
            ))}
          </div>
          
          {/* Complexity/Performance Metrics */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
              {project.complexity.algorithm}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
              {project.complexity.payload}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700">
              {project.complexity.scale}
            </span>
          </div>
        </div>
        
        {/* Links */}
        <div className="flex items-center gap-4 mt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-soft-pink dark:text-accent-blue hover:text-pink-700 dark:hover:text-accent-green font-medium transition-colors text-sm w-fit"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="relative py-16 bg-offwhite dark:bg-bg-section overflow-visible">
      <NeuralNetworkBackground />
      <div className="container-max section-padding relative z-10">
        <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-text-light mb-8 text-center" data-aos="fade-up">
          Featured Projects
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8" data-aos="fade-up" data-aos-delay="50">
          {skillFilters.map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedFilter(skill)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedFilter === skill
                  ? 'bg-soft-pink dark:bg-accent-pink text-charcoal dark:text-bg-dark shadow-md'
                  : 'bg-gray-100 dark:bg-bg-card text-gray-700 dark:text-text-muted hover:bg-gray-200 dark:hover:bg-border-dark hover:shadow-sm'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} data-aos="fade-up"
             data-aos-delay={`${100 + index * 30}`}>
                  <ProjectCard project={project} />
                </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-text-muted text-lg">
              No projects found with the selected skill.
            </p>
          </div>
        )}
        </div>
      </div>
    </section>
  )
}

export default Projects