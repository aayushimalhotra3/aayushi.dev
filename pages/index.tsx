import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import CurrentlyWorkingOn from '@/components/CurrentlyWorkingOn'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aayushi Malhotra - Software Engineer & CS Major</title>
        <meta 
          name="description" 
          content="Computer Science Major and aspiring Software Engineer passionate about cloud computing, machine learning, and building innovative tech solutions. View my portfolio, projects, and experience." 
        />
        <meta name="keywords" content="software engineer, computer science, cloud computing, machine learning, data science, python, react, portfolio" />
        <meta name="author" content="Aayushi Malhotra" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="Aayushi Malhotra - Software Engineer & CS Major" />
        <meta property="og:description" content="Computer Science Major and aspiring Software Engineer passionate about cloud computing, machine learning, and building innovative tech solutions." />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="Aayushi Malhotra - Software Engineer & CS Major" />
        <meta property="twitter:description" content="Computer Science Major and aspiring Software Engineer passionate about cloud computing, machine learning, and building innovative tech solutions." />
        <meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aayushi Malhotra",
              "jobTitle": "Software Engineer",
              "description": "Computer Science Major and aspiring Software Engineer",
              "url": "https://yourwebsite.com",
              "sameAs": [
                "https://github.com/username",
                "https://linkedin.com/in/username"
              ],
              "knowsAbout": [
                "Cloud Computing",
                "Machine Learning",
                "Data Science",
                "Python",
                "React",
                "Google Cloud Platform",
                "TensorFlow",
                "Apache Spark"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen">
        <ScrollProgressIndicator />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <CurrentlyWorkingOn />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}