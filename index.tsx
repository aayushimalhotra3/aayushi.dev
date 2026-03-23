import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aayushi Malhotra — Software Engineer</title>
        <meta
          name="description"
          content="Software engineer specializing in backend systems, data engineering, and AI/ML pipelines. Michigan State University CS '26, seeking full-time roles starting Summer 2026."
        />
        <meta
          name="keywords"
          content="software engineer, data engineering, AI pipelines, backend, FastAPI, Python, cloud, GCP, AWS, Michigan State University"
        />
        <meta name="author" content="Aayushi Malhotra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph — critical for LinkedIn shares */}
        <meta property="og:url"         content="https://aayushidev.vercel.app/" />
        <meta property="og:title"       content="Aayushi Malhotra — Software Engineer" />
        <meta property="og:description" content="Software engineer specializing in backend systems, data engineering, and AI/ML pipelines. Michigan State University CS '26." />
        <meta property="og:image"       content="https://aayushidev.vercel.app/cutout.png" />

        {/* Twitter */}
        <meta name="twitter:url"         content="https://aayushidev.vercel.app/" />
        <meta name="twitter:title"       content="Aayushi Malhotra — Software Engineer" />
        <meta name="twitter:description" content="Software engineer specializing in backend systems, data engineering, and AI/ML pipelines. Michigan State University CS '26." />
        <meta name="twitter:image"       content="https://aayushidev.vercel.app/cutout.png" />

        <link rel="canonical" href="https://aayushidev.vercel.app/" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Aayushi Malhotra',
              jobTitle: 'Software Engineer',
              description:
                'Software engineer specializing in backend systems, data engineering, and AI/ML pipelines. Michigan State University CS \'26.',
              url: 'https://aayushidev.vercel.app',
              sameAs: [
                'https://github.com/aayushimalhotra3',
                'https://www.linkedin.com/in/aayushimalhotraa',
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Michigan State University',
              },
              knowsAbout: [
                'Backend Engineering',
                'Data Engineering',
                'AI/ML Pipelines',
                'FastAPI',
                'Python',
                'Google Cloud Platform',
                'AWS',
                'Apache Spark',
                'TensorFlow',
                'RAG Pipelines',
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-base text-mist">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
