import React from 'react'
import Image from 'next/image'
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
import NeuralNetworkBackground from './NeuralNetworkBackground'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-offwhite to-white dark:from-bg-dark dark:to-bg-section relative overflow-hidden">
      <NeuralNetworkBackground opacity={0.3} />
      
      <div className="w-full h-full px-6 md:px-12 lg:px-24 relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Left: Text content */}
        <div className="w-full lg:w-1/2 space-y-4 text-left mt-36 md:mt-40 lg:mt-44 ml-4 md:ml-6 lg:ml-8" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal dark:text-text-light mb-6">
            {/* Force greeting + name on one line */}
            <span className="block whitespace-nowrap">
              Hi, I'm <span className="text-soft-pink dark:text-accent-pink">Aayushi Malhotra</span>
            </span>
            {/* New line for the role, aligned under greeting */}
            <span className="block">
              — <span className="text-butter-yellow dark:text-butter-yellow">
                <Typewriter
                  words={[
                    'Software Engineer',
                    'Backend Engineer',
                    'Frontend Engineer',
                    'Full-Stack Developer',
                    'Cloud Engineer',
                    'DevOps Engineer',
                    'Data Engineer',
                    'ML Engineer',
                    'Security Engineer',
                    'Platform Engineer'
                  ]}
                  loop={true}
                  cursor={true}
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-700 dark:text-text-muted mb-4 leading-relaxed">
            Crafting scalable, cloud-powered applications with Python and React, I turn complex challenges into impactful solutions through collaboration. Let's work together to build a smarter, more inclusive future.
          </p>
          
          <p className="text-sm md:text-base text-soft-pink dark:text-accent-blue mb-6 font-medium">
            Currently open to Summer 2025 SWE internships & full-time opportunities.
          </p>
          
          {/* Tech Logo Bar */}
          <div className="flex items-center justify-start gap-6 mb-8" data-aos="fade-up" data-aos-delay="50">
            <div className="flex items-center gap-4">
              {/* Python Logo */}
              <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#3776AB" rx="10"/>
                  <path d="M30 30 Q30 20 40 20 L60 20 Q70 20 70 30 L70 45 Q70 50 65 50 L35 50 Q30 50 30 45 Z" fill="#FFD43B"/>
                  <path d="M70 70 Q70 80 60 80 L40 80 Q30 80 30 70 L30 55 Q30 50 35 50 L65 50 Q70 50 70 55 Z" fill="#3776AB"/>
                  <circle cx="40" cy="35" r="3" fill="white"/>
                  <circle cx="60" cy="65" r="3" fill="#FFD43B"/>
                </svg>
              </div>
              
              {/* GCP Logo */}
              <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#4285F4" rx="10"/>
                  <path d="M30 40 Q50 25 70 40 Q75 50 70 60 Q50 75 30 60 Q25 50 30 40" fill="white"/>
                  <text x="50" y="55" fontSize="8" fill="#4285F4" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">GCP</text>
                </svg>
              </div>
              
              {/* TensorFlow Logo */}
              <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#FF6F00" rx="10"/>
                  <polygon points="50,20 30,35 30,65 50,80 70,65 70,35" fill="white"/>
                  <text x="50" y="55" fontSize="8" fill="#FF6F00" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">TF</text>
                </svg>
              </div>
              
              {/* React Logo */}
              <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#61DAFB" rx="10"/>
                  <circle cx="50" cy="50" r="8" fill="#20232A"/>
                  <ellipse cx="50" cy="50" rx="25" ry="10" stroke="#20232A" strokeWidth="2" fill="none"/>
                  <ellipse cx="50" cy="50" rx="25" ry="10" stroke="#20232A" strokeWidth="2" fill="none" transform="rotate(60 50 50)"/>
                  <ellipse cx="50" cy="50" rx="25" ry="10" stroke="#20232A" strokeWidth="2" fill="none" transform="rotate(120 50 50)"/>
                </svg>
              </div>
              
              {/* Docker Logo */}
              <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#2496ED" rx="10"/>
                  <rect x="20" y="45" width="12" height="10" fill="white"/>
                  <rect x="35" y="45" width="12" height="10" fill="white"/>
                  <rect x="50" y="45" width="12" height="10" fill="white"/>
                  <rect x="65" y="45" width="12" height="10" fill="white"/>
                  <rect x="35" y="32" width="12" height="10" fill="white"/>
                  <rect x="50" y="32" width="12" height="10" fill="white"/>
                  <rect x="50" y="19" width="12" height="10" fill="white"/>
                </svg>
              </div>
              
              {/* Git/GitHub Logo */}
              <div className="transform hover:scale-110 transition-transform duration-200 cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#181717" rx="10"/>
                  <path d="M50 15 C30 15 15 30 15 50 C15 66 25 79 39 84 C41 84 42 83 42 81 L42 75 C35 77 33 72 33 72 C31 70 29 69 29 69 C26 67 29 67 29 67 C32 67 34 70 34 70 C37 75 42 73 42 73 C43 72 44 70 44 70 C44 67 42 65 39 64 C32 63 25 60 25 50 C25 47 26 45 28 43 C28 42 27 39 29 35 C29 35 32 34 42 40 C44 39 47 39 50 39 C53 39 56 39 58 40 C68 34 71 35 71 35 C73 39 72 42 72 43 C74 45 75 47 75 50 C75 60 68 63 61 64 C64 66 66 70 66 75 L66 81 C66 83 67 84 69 84 C75 79 85 66 85 50 C85 30 70 15 50 15 Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
          
          <h2 className="text-xl md:text-2xl text-white dark:text-white mb-8 font-medium" data-aos="fade-up" data-aos-delay="100">
            Computer Science Major & Cognitive Science Minor
          </h2>
          
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-6" data-aos="fade-up" data-aos-delay="150">
            <button 
              onClick={scrollToAbout}
              className="bg-accent-blue text-charcoal hover:bg-blue-400 dark:bg-accent-blue dark:text-bg-dark hover:dark:bg-blue-300 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5"
            >
              Learn More About Me
              <ArrowDown size={15} />
            </button>
            
            <a 
              href="#contact" 
              className="bg-accent-blue text-charcoal hover:bg-blue-400 dark:bg-accent-blue dark:text-bg-dark hover:dark:bg-blue-300 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5 relative z-20"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Get In Touch
              <Mail size={15} />
            </a>
            
            <a 
              href="/Malhotra, Aayushi Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-blue text-charcoal hover:bg-blue-400 dark:bg-accent-blue dark:text-bg-dark hover:dark:bg-blue-300 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5"
            >
              📄 Download Resume
            </a>
          </div>
          

        </div>
        
        {/* Right: Magazine‐style cutout image */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 relative z-10 h-full" data-aos="fade-left" data-aos-delay="100">
          <div 
            className="
              absolute
              bottom-[-30px]
              lg:bottom-[-25px]
              right-2
              lg:right-4
              z-10
              w-auto
            "
          >
            <Image
              src="/cutout.png"
              alt="Aayushi Malhotra"
              width={700}
              height={950}
              className="cutout-shadow max-w-[95%] lg:max-w-[90%]"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          
          {/* Social Media Icons - Vertical Stack on Right */}
          <div className="absolute -right-20 top-3/4 transform -translate-y-2/1 flex flex-col gap-4 z-20" data-aos="fade-up" data-aos-delay="200">
            <a 
              href="https://github.com/aayushimalhotra3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-text-muted hover:text-soft-pink dark:hover:text-accent-teal transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={28} />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/aayushimalhotraa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-text-muted hover:text-soft-pink dark:hover:text-accent-teal transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} />
            </a>
            
            <a 
              href="mailto:aayushim33@gmail.com"
              className="text-gray-600 dark:text-text-muted hover:text-soft-pink dark:hover:text-accent-teal transition-colors"
              aria-label="Email Contact"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero