import React, { useState, useEffect } from 'react'
import NeuralNetworkBackground from './NeuralNetworkBackground'

const TypewriterTerminal = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isStarted, setIsStarted] = useState(false)

  const lines = [
    'whoami',
    '> Aayushi Malhotra – CS Student @ Michigan State University',
    '> pronouns: she/her/hers',
    '> age: 20 years',
    '> living in: East Lansing, Michigan',
    '> hometown: Mumbai, India',
    '',
    'echo "Let\'s build something amazing together!"'
  ]

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true)
    }, 1000)
    return () => clearTimeout(startTimer)
  }, [])

  useEffect(() => {
    if (!isStarted || currentLineIndex >= lines.length) return
    
    const currentLine = lines[currentLineIndex]
    
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + currentLine[currentCharIndex])
        setCurrentCharIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        // Only add newline if not the last line
        if (currentLineIndex < lines.length - 1) {
          setDisplayText(prev => prev + '\n')
        }
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }, currentLine === '' ? 200 : 800)
      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, currentCharIndex, isStarted])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <div className="font-mono text-xs leading-relaxed">
      <pre className="whitespace-pre-wrap">
        {displayText}
        {showCursor && <span className="text-green-400">█</span>}
      </pre>
    </div>
  )
}

const About = () => {
  return (
    <section id="about" className="relative py-16 bg-offwhite dark:bg-bg-section overflow-visible">
      <NeuralNetworkBackground />
      <div className="container-max section-padding relative z-10">
        <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-text-light mb-8 text-center" data-aos="fade-up">
           About Me
         </h2>
          
          {/* CS Terminal Widget */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="50">
            <div className="bg-gray-900 dark:bg-black rounded-lg p-3 font-mono text-xs shadow-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-gray-400 text-xs">aayushi@portfolio:~$</div>
              </div>
              <div className="text-green-400 min-h-[80px]">
                <TypewriterTerminal />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-start" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white/80 dark:bg-bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-pink-200 dark:border-border-dark space-y-3 h-fit">
              <p className="text-base text-charcoal dark:text-text-muted leading-relaxed">
                I've been tinkering with tech for as long as I can remember - my dad's workbench was always strewn with 
                Raspberry Pis, soldering irons, and spare server motherboards, and I'd sneak in to wire up 
                blinking LEDs and write Python scripts before I could even tie my own shoes. One of my favorite side 
                projects was creating a decentralized microclimate monitor for my neighborhood garden, using a mesh 
                of Arduino sensors, a TensorFlow Lite model to predict watering needs, and a React dashboard so 
                I could check soil moisture from anywhere.
              </p>
              
              <p className="text-base text-charcoal dark:text-text-muted leading-relaxed">
                When I'm off the clock, you'll catch me buried in a sci-fi novel on a trail run, ice-skating 
                under the night sky, or planning my next trek - always on the lookout for the next problem I can solve with 
                code. As an international student from India, I also volunteer with MSU's diversity-focused coding 
                workshops, helping learners from all backgrounds collaborate and grow in a 
                supportive environment.
              </p>
              
              <p className="text-base text-charcoal dark:text-text-muted leading-relaxed">
                What drives me? I'm on a mission to make technology accessible and impactful - from crafting intuitive front-end experiences and building robust back-end APIs, to deploying data-driven AI services and automating infrastructure at scale. Whether I'm architecting serverless pipelines that spring from zero to a million events without missing a beat, designing responsive React interfaces that delight users, or training lightweight ML models to solve real-world problems, I want every line of code to translate complex challenges into seamless, empowering experiences for people everywhere.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-soft-pink/60 to-butter-yellow/60 dark:from-accent-pink/60 dark:to-accent-yellow/60 p-3 rounded-xl shadow-lg h-fit">
              <h3 className="text-charcoal dark:text-text-light font-semibold text-base mb-3 text-center"> Quick Fun Facts About Me</h3>
              <div className="grid gap-1.5">
                <div className="bg-white/20 dark:bg-bg-card/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 dark:hover:bg-bg-card/30 transition-all duration-300">
                  <div className="flex items-start gap-2">
                    <span className="text-base">💗</span>
                    <div>
                      <h4 className="text-charcoal dark:text-text-light font-medium text-sm mb-1">In Love with Pink</h4>
                      <p className="text-gray-700 dark:text-text-muted text-xs">I have an unhealthy amount of pink gear (keyboards, mugs, even my debugging logs!).</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 dark:bg-bg-card/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 dark:hover:bg-bg-card/30 transition-all duration-300">
                  <div className="flex items-start gap-2">
                    <span className="text-base">🇩🇴</span>
                    <div>
                      <h4 className="text-charcoal dark:text-text-light font-medium text-sm mb-1">Three Years in the DR</h4>
                      <p className="text-gray-700 dark:text-text-muted text-xs">Lived in the Dominican Republic for 3 years; some of my favorite memories come from its vibrant culture.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 dark:bg-bg-card/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 dark:hover:bg-bg-card/30 transition-all duration-300">
                  <div className="flex items-start gap-2">
                    <span className="text-base">🎥</span>
                    <div>
                      <h4 className="text-charcoal dark:text-text-light font-medium text-sm mb-1">Movie Gasps</h4>
                      <p className="text-gray-700 dark:text-text-muted text-xs">I rate films by how many times I gasp - my top scores go to Oppenheimer and Parasite.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 dark:bg-bg-card/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 dark:hover:bg-bg-card/30 transition-all duration-300">
                  <div className="flex items-start gap-2">
                    <span className="text-base">☕</span>
                    <div>
                      <h4 className="text-charcoal dark:text-text-light font-medium text-sm mb-1">Coffee Count</h4>
                      <p className="text-gray-700 dark:text-text-muted text-xs">I average 3 cups of coffee before my first commit.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 dark:bg-bg-card/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 dark:hover:bg-bg-card/30 transition-all duration-300">
                  <div className="flex items-start gap-2">
                    <span className="text-base">🗣️</span>
                    <div>
                      <h4 className="text-charcoal dark:text-text-light font-medium text-sm mb-1">Multilingual</h4>
                      <p className="text-gray-700 dark:text-text-muted text-xs">Fluent in English, Hindi, and German; conversational in Spanish (thanks to the DR!).</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 dark:bg-bg-card/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 dark:hover:bg-bg-card/30 transition-all duration-300">
                  <div className="flex items-start gap-2">
                    <span className="text-base">🥾</span>
                    <div>
                      <h4 className="text-charcoal dark:text-text-light font-medium text-sm mb-1">Trail Techie</h4>
                      <p className="text-gray-700 dark:text-text-muted text-xs">I'm equally comfortable coding on a mountain trail - I once squeezed in a PR merge between switchbacks.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 dark:bg-bg-card/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 dark:hover:bg-bg-card/30 transition-all duration-300">
                  <div className="flex items-start gap-2">
                    <span className="text-base">🔍</span>
                    <div>
                      <h4 className="text-charcoal dark:text-text-light font-medium text-sm mb-1">Word-Search Breaks</h4>
                      <p className="text-gray-700 dark:text-text-muted text-xs">I power through a word-search puzzle in under 3 minutes whenever I need a brain break.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 dark:bg-bg-card/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 dark:hover:bg-bg-card/30 transition-all duration-300">
                  <div className="flex items-start gap-2">
                    <span className="text-base">🌙</span>
                    <div>
                      <h4 className="text-charcoal dark:text-text-light font-medium text-sm mb-1">Night Owl</h4>
                      <p className="text-gray-700 dark:text-text-muted text-xs">My best ideas come between 10 PM and 4 AM (no judgment!).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About