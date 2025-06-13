import React from 'react'
import { ExternalLink, Github, Clock } from 'lucide-react'
import NeuralNetworkBackground from './NeuralNetworkBackground'

const CurrentlyWorkingOn = () => {
  const currentProjects = [
    {
      id: 1,
      title: "Real-Time Anomaly Detection Service",
      problem: "Security teams struggle to catch unusual traffic patterns as they happen.",
      approach: "A streaming-based TensorFlow model (deployed on GCP Dataflow) that ingests network logs and flags anomalies within seconds.",
      impact: "Reducing security incident response time by 60% and improving threat detection accuracy through real-time ML processing.",
      technologies: ["Python", "Apache Beam", "TensorFlow", "GCP Pub/Sub", "Cloud Functions"],
      complexity: {
        algorithm: "O(n log n)",
        payload: "TensorFlow 45MB",
        scale: "Real-time streams"
      },
      status: "In Development",
      eta: "Q2 2024",
      progress: 70
    },
    {
      id: 2,
      title: "Multi-Cloud Infrastructure Orchestrator",
      problem: "Spinning up consistent environments across AWS and GCP is error-prone and manual.",
      approach: "A Terraform-and-Pulumi powered pipeline that automatically provisions identical Kubernetes clusters (with Helm charts) in both clouds and runs CI/CD tests.",
      impact: "Eliminating 80% of deployment errors and reducing environment setup time from hours to minutes across multiple cloud providers.",
      technologies: ["Terraform", "Pulumi", "Kubernetes", "Docker", "GitHub Actions"],
      complexity: {
        algorithm: "O(log n)",
        payload: "K8s 200MB",
        scale: "Multi-cloud"
      },
      status: "In Development",
      eta: "Q3 2024",
      progress: 45
    },
    {
      id: 3,
      title: "Edge-AI Microclimate Monitor v2.0",
      problem: "Farmers need hyper-local watering predictions but face connectivity gaps.",
      approach: "An Arduino-based mesh network of soil sensors feeding a TinyML model on-device (TensorFlow Lite for Microcontrollers) that predicts watering needs offline and syncs when back online.",
      impact: "Enabling precision agriculture with 90% accuracy in offline watering predictions, reducing water waste by 35%.",
      technologies: ["C++ (Arduino)", "TensorFlow Lite", "React Native", "MQTT"],
      complexity: {
        algorithm: "O(n)",
        payload: "TinyML 2MB",
        scale: "Edge devices"
      },
      status: "Planning",
      eta: "Q4 2024",
      progress: 30
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'Planning':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300';
      case 'Research':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300';
      case 'Alpha Release':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300';
    }
  };

  const ProjectCard = ({ project }: { project: any }) => {
    return (
      <div className="project-card group">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-charcoal dark:text-white">
            {project.title}
          </h3>
          <div className="flex flex-col items-end">
             <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(project.status)}`}>
               {project.status}
             </span>
           </div>
        </div>
        
        {/* Problem Statement */}
        <div className="mb-3">
           <p className="text-red-600 dark:text-red-400 text-sm leading-relaxed">
             <span className="text-red-500 dark:text-red-400 font-semibold">Problem Statement:</span> {project.problem}
           </p>
         </div>
        
        {/* Solution/Approach */}
        <div className="mb-3">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            • {project.approach}
          </p>
        </div>
      
        {/* Impact */}
        <div className="bg-butter-yellow/20 dark:bg-accent-yellow/20 border border-butter-yellow/40 dark:border-accent-yellow/40 rounded-lg p-3 mb-4">
          <p className="text-charcoal dark:text-white text-sm font-semibold leading-relaxed">
            {project.impact}
          </p>
        </div>
      
        {/* Progress Bar */}
        {project.progress && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-soft-pink dark:bg-accent-pink h-2 rounded-full transition-all duration-300" 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        )}
      
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
      </div>
    )
  };

  return (
    <section id="currently-working" className="relative py-16 bg-offwhite dark:bg-bg-section overflow-visible">
      <NeuralNetworkBackground />
      <div className="container-max section-padding relative z-10">
        <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-text-light mb-8 text-center" data-aos="fade-up">
                 Currently Working On
               </h2>
         
           {/* Projects Grid */}
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="50">
             {currentProjects.map((project, index) => (
               <div key={index} data-aos="fade-up" data-aos-delay={`${100 + index * 30}`}>
                 <ProjectCard project={project} />
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>
  )
}

export default CurrentlyWorkingOn