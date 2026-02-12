import React from 'react'

const About = () => {
  const funFacts = [
    { label: 'Obsessed with pink', detail: 'keyboards, mugs, even my debugging logs' },
    { label: 'Lived in the DR', detail: '3 years of vibrant Dominican culture' },
    { label: 'Movie gasps counter', detail: 'Oppenheimer and Parasite are top scorers' },
    { label: '3 cups before first commit', detail: 'coffee is a core dependency' },
    { label: 'Multilingual', detail: 'English, Hindi, German, conversational Spanish' },
    { label: 'Night owl coder', detail: 'best ideas arrive between 10 PM and 4 AM' },
  ]

  return (
    <section id="about" className="py-24 bg-bg-section">
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-bold text-text-light mb-12">
          About Me
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main bio */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-text-muted text-base leading-relaxed">
              I've been tinkering with tech for as long as I can remember &mdash; my dad's workbench was always
              strewn with Raspberry Pis and spare server motherboards, and I'd sneak in to wire up
              blinking LEDs and write Python scripts before I could even tie my own shoes.
            </p>

            <p className="text-text-muted text-base leading-relaxed">
              When I'm off the clock, you'll catch me buried in a sci-fi novel on a trail run,
              ice-skating under the night sky, or planning my next trek. As an international student
              from India, I also volunteer with MSU's diversity-focused coding workshops, helping
              learners from all backgrounds collaborate and grow.
            </p>

            <p className="text-text-muted text-base leading-relaxed">
              What drives me? Making technology accessible and impactful &mdash; from crafting intuitive
              front-end experiences and building robust back-end APIs, to deploying data-driven AI
              services and automating infrastructure at scale. Every line of code should translate
              complex challenges into seamless experiences.
            </p>

            <div className="pt-2">
              <p className="text-sm text-text-dim">
                Computer Science Major &middot; Cognitive Science Minor &middot; Michigan State University &middot; Class of 2026
              </p>
            </div>
          </div>

          {/* Fun facts sidebar */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-text-dim uppercase tracking-wide mb-4">
              Quick facts
            </h3>
            {funFacts.map((fact, i) => (
              <div
                key={i}
                className="border-l-2 border-accent-pink/30 pl-4 py-1.5 hover:border-accent-pink transition-colors duration-200"
              >
                <p className="text-text-light text-sm font-medium">{fact.label}</p>
                <p className="text-text-dim text-xs">{fact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
