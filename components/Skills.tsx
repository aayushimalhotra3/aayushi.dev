import React from 'react'
import { useState } from 'react'
import NeuralNetworkBackground from './NeuralNetworkBackground'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Programming Languages')

  const additionalSkills = [
    'REST APIs', 'Grafana', 'Apache Airflow', 'ETL Processes', 'Data Visualization',
    'Statistical Analysis', 'Predictive Modeling', 'Deep Learning',
    'Machine Learning', 'Cloud Computing', 'Data Engineering',
    'Cybersecurity', 'Anomaly Detection', 'NLP', 'Computer Vision',
    'Microservices Architecture', 'Data Pipelines', 'Real-time Analytics',
    'Sentiment Analysis', 'Fashion APIs', 'Color Theory', 'Mentoring',
    'Leadership', 'Community Building', 'Technical Writing'
  ]

  const getFileIcon = (extension) => {
    const icons = {
      'py': '🐍',
      'js': '📜',
      'jsx': '⚛️',
      'java': '☕',
      'cpp': '⚙️',
      'sql': '🗃️',
      'r': '📊',
      'sh': '💻',
      'm': '🔢',
      'yaml': '📋',
      'yml': '📋',
      'tf': '🏗️',
      'json': '📄',
      'docker': '🐳',
      'css': '🎨',
      'keras': '🧠',
      'sklearn': '🔬',
      'spacy': '📝',
      'nltk': '💬',
      'cv': '👁️',
      'pd': '🐼',
      'np': '🔢',
      'spark': '⚡',
      'beam': '🔆',
      'tb': '📚',
      'gcp': '☁️',
      'aws': '☁️',
      'azure': '☁️',
      'k8s': '🚢',
      'flow': '🌊',
      'iam': '🔑',
      'flask': '🧪',
      'streamlit': '📊',
      'django': '🦄',
      'node': '📦',
      'html': '🌐',
      'git': '📂',
      'cloud': '☁️',
      'web': '🌐'
    }
    return icons[extension] || '📄'
  }

  // Define skillCategories with SVG logos
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '',
      skills: [
        { 
          name: 'SQL', 
          level: 92, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#336791" rx="10"/>
              <text x="50" y="60" fontSize="24" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">SQL</text>
            </svg>
          )
        },
        { 
          name: 'Java', 
          level: 89, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#ED8B00" rx="10"/>
              <path d="M30 70 Q35 60 40 70 Q45 60 50 70 Q55 60 60 70" stroke="white" strokeWidth="3" fill="none"/>
              <ellipse cx="50" cy="40" rx="15" ry="8" fill="white"/>
              <text x="50" y="45" fontSize="10" fill="#ED8B00" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">JAVA</text>
            </svg>
          )
        },
        { 
          name: 'C++', 
          level: 88, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#00599C" rx="10"/>
              <text x="50" y="55" fontSize="16" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">C++</text>
            </svg>
          )
        },
        { 
          name: 'JavaScript', 
          level: 90, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#F7DF1E" rx="10"/>
              <text x="50" y="60" fontSize="20" fill="#323330" textAnchor="middle" fontFamily="monospace" fontWeight="bold">JS</text>
            </svg>
          )
        },
        { 
          name: 'PHP', 
          level: 85, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#777BB4" rx="10"/>
              <text x="50" y="60" fontSize="16" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">PHP</text>
            </svg>
          )
        },
        { 
          name: 'R', 
          level: 84, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#276DC3" rx="10"/>
              <text x="50" y="60" fontSize="28" fill="white" textAnchor="middle" fontFamily="serif" fontWeight="bold">R</text>
            </svg>
          )
        },
        { 
          name: 'Bash', 
          level: 88, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#4EAA25" rx="10"/>
              <text x="50" y="45" fontSize="12" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">BASH</text>
              <text x="50" y="65" fontSize="16" fill="white" textAnchor="middle" fontFamily="monospace">$</text>
            </svg>
          )
        },
        { 
          name: 'MATLAB', 
          level: 80, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#0076A8" rx="10"/>
              <path d="M20 70 L30 50 L40 60 L50 40 L60 55 L70 35 L80 50" stroke="white" strokeWidth="3" fill="none"/>
              <text x="50" y="85" fontSize="8" fill="white" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">MATLAB</text>
            </svg>
          )
        },
        { 
          name: 'Python', 
          level: 95, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#3776AB" rx="10"/>
              <path d="M30 30 Q30 20 40 20 L60 20 Q70 20 70 30 L70 45 Q70 50 65 50 L35 50 Q30 50 30 45 Z" fill="#FFD43B"/>
              <path d="M70 70 Q70 80 60 80 L40 80 Q30 80 30 70 L30 55 Q30 50 35 50 L65 50 Q70 50 70 55 Z" fill="#3776AB"/>
              <circle cx="40" cy="35" r="3" fill="white"/>
              <circle cx="60" cy="65" r="3" fill="#FFD43B"/>
            </svg>
          )
        },
        { 
          name: 'TypeScript', 
          level: 82, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#3178C6" rx="10"/>
              <text x="50" y="60" fontSize="18" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">TS</text>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Machine Learning & Data Science',
      icon: '',
      skills: [
        { 
          name: 'TensorFlow', 
          level: 92, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#FF6F00" rx="10"/>
              <polygon points="50,20 30,35 30,65 50,80 70,65 70,35" fill="white"/>
              <text x="50" y="55" fontSize="8" fill="#FF6F00" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">TF</text>
            </svg>
          )
        },
        { 
          name: 'Keras', 
          level: 90, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#D00000" rx="10"/>
              <circle cx="50" cy="50" r="20" fill="white"/>
              <text x="50" y="55" fontSize="10" fill="#D00000" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">K</text>
            </svg>
          )
        },
        { 
          name: 'Scikit-Learn', 
          level: 94, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#F7931E" rx="10"/>
              <circle cx="30" cy="30" r="6" fill="white"/>
              <circle cx="70" cy="30" r="6" fill="white"/>
              <circle cx="50" cy="50" r="6" fill="white"/>
              <circle cx="30" cy="70" r="6" fill="white"/>
              <circle cx="70" cy="70" r="6" fill="white"/>
              <line x1="30" y1="30" x2="50" y2="50" stroke="white" strokeWidth="2"/>
              <line x1="70" y1="30" x2="50" y2="50" stroke="white" strokeWidth="2"/>
              <line x1="50" y1="50" x2="30" y2="70" stroke="white" strokeWidth="2"/>
              <line x1="50" y1="50" x2="70" y2="70" stroke="white" strokeWidth="2"/>
            </svg>
          )
        },
        { 
          name: 'spaCy', 
          level: 87, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#09A3D5" rx="10"/>
              <text x="50" y="60" fontSize="12" fill="white" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">spaCy</text>
            </svg>
          )
        },
        { 
          name: 'NLTK', 
          level: 85, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#154F3C" rx="10"/>
              <text x="50" y="60" fontSize="12" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">NLTK</text>
            </svg>
          )
        },
        { 
          name: 'OpenCV', 
          level: 88, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#5C3EE8" rx="10"/>
              <circle cx="35" cy="40" r="8" fill="white"/>
              <circle cx="65" cy="40" r="8" fill="white"/>
              <path d="M30 65 Q50 75 70 65" stroke="white" strokeWidth="3" fill="none"/>
            </svg>
          )
        },
        { 
          name: 'Pandas', 
          level: 94, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#150458" rx="10"/>
              <circle cx="30" cy="30" r="8" fill="white"/>
              <circle cx="70" cy="30" r="8" fill="white"/>
              <circle cx="30" cy="70" r="8" fill="white"/>
              <circle cx="70" cy="70" r="8" fill="white"/>
              <rect x="25" y="45" width="10" height="20" fill="white"/>
              <rect x="65" y="45" width="10" height="20" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'NumPy', 
          level: 93, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#013243" rx="10"/>
              <polygon points="20,20 50,35 80,20 80,80 50,65 20,80" fill="#4DABCF"/>
              <polygon points="20,20 50,35 50,65 20,80" fill="#4D77CF"/>
            </svg>
          )
        },
        { 
          name: 'Apache Spark', 
          level: 89, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#E25A1C" rx="10"/>
              <path d="M30 70 L40 50 L50 60 L60 40 L70 55" stroke="white" strokeWidth="3" fill="none"/>
              <circle cx="35" cy="65" r="3" fill="#FFA500"/>
              <circle cx="55" cy="45" r="3" fill="#FFA500"/>
              <circle cx="65" cy="60" r="3" fill="#FFA500"/>
            </svg>
          )
        },
        { 
          name: 'Apache Beam', 
          level: 88, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#FF6B35" rx="10"/>
              <path d="M20 50 L40 30 L60 50 L80 30" stroke="white" strokeWidth="3" fill="none"/>
              <path d="M20 70 L40 50 L60 70 L80 50" stroke="white" strokeWidth="3" fill="none"/>
            </svg>
          )
        },
        { 
          name: 'TextBlob', 
          level: 85, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#2E8B57" rx="10"/>
              <ellipse cx="50" cy="50" rx="25" ry="15" fill="white"/>
              <text x="50" y="55" fontSize="8" fill="#2E8B57" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">TEXT</text>
            </svg>
          )
        },
        { 
          name: 'PyTorch', 
          level: 78, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#EE4C2C" rx="10"/>
              <path d="M50 20 Q60 25 65 35 Q60 45 50 50 Q40 45 35 35 Q40 25 50 20" fill="white"/>
              <circle cx="50" cy="65" r="8" fill="white"/>
              <text x="50" y="85" fontSize="8" fill="white" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">PyTorch</text>
            </svg>
          )
        },
        { 
          name: 'Matplotlib', 
          level: 85, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#11557C" rx="10"/>
              <path d="M20 70 Q30 50 40 60 Q50 40 60 55 Q70 35 80 50" stroke="white" strokeWidth="3" fill="none"/>
              <circle cx="30" cy="60" r="2" fill="#FF6B6B"/>
              <circle cx="50" cy="47" r="2" fill="#4ECDC4"/>
              <circle cx="70" cy="42" r="2" fill="#45B7D1"/>
            </svg>
          )
        },
        { 
          name: 'Seaborn', 
          level: 80, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#4C72B0" rx="10"/>
              <rect x="25" y="60" width="8" height="20" fill="white"/>
              <rect x="38" y="45" width="8" height="35" fill="white"/>
              <rect x="51" y="35" width="8" height="45" fill="white"/>
              <rect x="64" y="50" width="8" height="30" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'Jupyter', 
          level: 88, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#F37626" rx="10"/>
              <circle cx="35" cy="35" r="8" fill="#9E9E9E"/>
              <circle cx="65" cy="35" r="8" fill="#F37626"/>
              <circle cx="50" cy="65" r="8" fill="#4CAF50"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '',
      skills: [
        { 
          name: 'Google Cloud Platform', 
          level: 92, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#4285F4" rx="10"/>
              <path d="M30 40 Q50 25 70 40 Q75 50 70 60 Q50 75 30 60 Q25 50 30 40" fill="white"/>
              <text x="50" y="55" fontSize="8" fill="#4285F4" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">GCP</text>
            </svg>
          )
        },
        { 
          name: 'AWS', 
          level: 88, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#232F3E" rx="10"/>
              <path d="M20 60 Q30 50 40 60 Q50 50 60 60 Q70 50 80 60" stroke="#FF9900" strokeWidth="3" fill="none"/>
              <text x="50" y="40" fontSize="12" fill="#FF9900" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">AWS</text>
            </svg>
          )
        },
        { 
          name: 'Microsoft Azure', 
          level: 85, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#0078D4" rx="10"/>
              <polygon points="30,30 70,30 60,50 40,50" fill="white"/>
              <polygon points="40,50 60,50 70,70 30,70" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'Kubernetes', 
          level: 88, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#326CE5" rx="10"/>
              <polygon points="50,20 65,35 65,65 50,80 35,65 35,35" fill="white"/>
              <circle cx="50" cy="50" r="8" fill="#326CE5"/>
            </svg>
          )
        },
        { 
          name: 'Docker', 
          level: 90, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#2496ED" rx="10"/>
              <rect x="20" y="45" width="12" height="10" fill="white"/>
              <rect x="35" y="45" width="12" height="10" fill="white"/>
              <rect x="50" y="45" width="12" height="10" fill="white"/>
              <rect x="65" y="45" width="12" height="10" fill="white"/>
              <rect x="35" y="32" width="12" height="10" fill="white"/>
              <rect x="50" y="32" width="12" height="10" fill="white"/>
              <rect x="50" y="19" width="12" height="10" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'Google Cloud Dataflow', 
          level: 86, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#4285F4" rx="10"/>
              <path d="M20 50 L35 35 L50 50 L65 35 L80 50" stroke="white" strokeWidth="3" fill="none"/>
              <path d="M20 50 L35 65 L50 50 L65 65 L80 50" stroke="white" strokeWidth="3" fill="none"/>
            </svg>
          )
        },
        { 
          name: 'Google Cloud IAM', 
          level: 85, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#4285F4" rx="10"/>
              <circle cx="50" cy="35" r="12" fill="white"/>
              <path d="M30 65 Q50 55 70 65 L70 75 Q50 85 30 75 Z" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'Terraform', 
          level: 75, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#623CE4" rx="10"/>
              <polygon points="30,25 50,35 50,65 30,55" fill="white"/>
              <polygon points="55,25 75,35 75,65 55,55" fill="white"/>
              <polygon points="55,10 75,20 75,50 55,40" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'Jenkins', 
          level: 76, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#D33833" rx="10"/>
              <circle cx="50" cy="40" r="15" fill="white"/>
              <rect x="40" y="55" width="20" height="25" fill="white"/>
              <circle cx="45" cy="35" r="2" fill="#D33833"/>
              <circle cx="55" cy="35" r="2" fill="#D33833"/>
              <path d="M42 45 Q50 50 58 45" stroke="#D33833" strokeWidth="2" fill="none"/>
            </svg>
          )
        },
        { 
          name: 'MongoDB', 
          level: 78, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#47A248" rx="10"/>
              <path d="M50 20 Q60 30 55 50 Q50 70 50 80 Q50 70 45 50 Q40 30 50 20" fill="white"/>
              <ellipse cx="50" cy="75" rx="8" ry="3" fill="white"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Web Development & Frameworks',
      icon: '',
      skills: [
        { 
          name: 'React', 
          level: 92, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#61DAFB" rx="10"/>
              <circle cx="50" cy="50" r="8" fill="#20232A"/>
              <ellipse cx="50" cy="50" rx="25" ry="10" stroke="#20232A" strokeWidth="2" fill="none"/>
              <ellipse cx="50" cy="50" rx="25" ry="10" stroke="#20232A" strokeWidth="2" fill="none" transform="rotate(60 50 50)"/>
              <ellipse cx="50" cy="50" rx="25" ry="10" stroke="#20232A" strokeWidth="2" fill="none" transform="rotate(120 50 50)"/>
            </svg>
          )
        },
        { 
          name: 'Flask', 
          level: 90, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#000000" rx="10"/>
              <path d="M40 20 L40 40 L25 70 L75 70 L60 40 L60 20" stroke="white" strokeWidth="3" fill="none"/>
              <circle cx="50" cy="60" r="3" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'Streamlit', 
          level: 85, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#FF4B4B" rx="10"/>
              <path d="M30 70 L50 30 L70 70" stroke="white" strokeWidth="4" fill="none"/>
              <circle cx="50" cy="50" r="4" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'Django', 
          level: 89, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#092E20" rx="10"/>
              <rect x="35" y="25" width="8" height="50" fill="white"/>
              <rect x="50" y="25" width="8" height="35" fill="white"/>
              <circle cx="54" cy="68" r="4" fill="white"/>
            </svg>
          )
        },
        { 
          name: 'Node.js', 
          level: 90, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#339933" rx="10"/>
              <path d="M50 20 L70 35 L70 65 L50 80 L30 65 L30 35 Z" fill="white"/>
              <text x="50" y="55" fontSize="8" fill="#339933" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">NODE</text>
            </svg>
          )
        },
        { 
          name: 'HTML/CSS', 
          level: 94, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#E34F26" rx="10"/>
              <polygon points="25,25 75,25 70,75 50,80 30,75" fill="white"/>
              <text x="50" y="55" fontSize="8" fill="#E34F26" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">HTML</text>
            </svg>
          )
        },
        { 
          name: 'Git', 
          level: 91, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#F05032" rx="10"/>
              <circle cx="30" cy="50" r="8" fill="white"/>
              <circle cx="70" cy="50" r="8" fill="white"/>
              <line x1="38" y1="50" x2="62" y2="50" stroke="white" strokeWidth="3"/>
              <circle cx="50" cy="30" r="6" fill="white"/>
              <line x1="50" y1="36" x2="50" y2="44" stroke="white" strokeWidth="2"/>
            </svg>
          )
        },
        { 
          name: 'Next.js', 
          level: 85, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#000000" rx="10"/>
              <circle cx="50" cy="50" r="25" fill="white"/>
              <path d="M35 35 L65 65 M65 35 L35 65" stroke="black" strokeWidth="3"/>
              <text x="50" y="80" fontSize="8" fill="white" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">NEXT</text>
            </svg>
          )
        },
        { 
          name: 'Express.js', 
          level: 80, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#000000" rx="10"/>
              <path d="M20 40 L80 40 M20 50 L80 50 M20 60 L80 60" stroke="white" strokeWidth="2"/>
              <text x="50" y="80" fontSize="8" fill="white" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">EXPRESS</text>
            </svg>
          )
        },
        { 
          name: 'PostgreSQL', 
          level: 78, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#336791" rx="10"/>
              <path d="M30 30 Q50 20 70 30 Q75 50 70 70 Q50 80 30 70 Q25 50 30 30" fill="white"/>
              <circle cx="45" cy="40" r="3" fill="#336791"/>
              <circle cx="55" cy="40" r="3" fill="#336791"/>
              <path d="M40 55 Q50 60 60 55" stroke="#336791" strokeWidth="2" fill="none"/>
            </svg>
          )
        },
        { 
          name: 'Tailwind CSS', 
          level: 88, 
          logo: (
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#06B6D4" rx="10"/>
              <path d="M25 40 Q35 30 50 40 Q65 30 75 40 Q65 50 50 40 Q35 50 25 40" fill="white"/>
              <path d="M25 60 Q35 50 50 60 Q65 50 75 60 Q65 70 50 60 Q35 70 25 60" fill="white"/>
            </svg>
          )
        }
      ]
    }
  ]

  return (
    <section id="skills" className="relative py-16 bg-offwhite dark:bg-bg-section overflow-visible">
      <NeuralNetworkBackground />
      <div className="container-max section-padding relative z-10">
        <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-text-light mb-8 text-center" data-aos="fade-up">
            Skills & Technologies
          </h2>
        </div>
        
        {/* Category Navigation */}
        <div className="max-w-4xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="50">
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.title)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-center ${
                  activeCategory === category.title
                    ? 'bg-bg-card text-text-light shadow-lg transform scale-105 border-2 border-accent-blue'
                    : 'bg-bg-card text-text-muted hover:bg-bg-section hover:text-text-light hover:scale-105 border border-border-dark'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="text-sm sm:text-base">{category.title}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skillCategories.find(cat => cat.title === activeCategory)?.skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-bg-card rounded-xl p-4 hover:bg-bg-section transition-all duration-300 hover:scale-105 hover:shadow-xl border border-border-dark hover:border-accent-green animate-fade-in"
                data-aos="fade-up"
                data-aos-delay={`${150 + index * 20}`}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      {skill.logo}
                    </div>
                    <h3 className="text-text-light font-bold text-base">{skill.name}</h3>
                  </div>
                  <span 
                    className="text-sm px-3 py-1 rounded-full font-semibold bg-bg-section text-accent-yellow"
                  >
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-text-muted">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="relative bg-bg-section rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, #FF69B4 0%, #9966CC 100%)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Skills */}
        <div className="mt-16 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent to-accent-green flex-1"></div>
              <h3 className="text-2xl font-bold text-text-light px-4">Additional Technologies & Tools</h3>
              <div className="h-px bg-gradient-to-l from-transparent to-accent-lilac flex-1"></div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => {
              // Use website theme colors instead of random hues
              const colors = [
                { bg: 'bg-bg-card', text: 'text-accent-blue', border: 'border-accent-blue' },
                { bg: 'bg-bg-card', text: 'text-accent-green', border: 'border-accent-green' },
                { bg: 'bg-bg-card', text: 'text-accent-yellow', border: 'border-accent-yellow' },
                { bg: 'bg-bg-card', text: 'text-accent-lilac', border: 'border-accent-lilac' },
                { bg: 'bg-bg-card', text: 'text-accent-teal', border: 'border-accent-teal' },
                { bg: 'bg-bg-card', text: 'text-accent-orange', border: 'border-accent-orange' }
              ];
              
              const colorIndex = index % colors.length;
              
              return (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default border ${colors[colorIndex].bg} ${colors[colorIndex].text} ${colors[colorIndex].border}`}
                >
                  {skill}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills