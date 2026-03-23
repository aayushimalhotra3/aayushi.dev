import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aayushi Malhotra &mdash; Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer graduating May 2026. Building data pipelines, backend systems, and cloud infrastructure. Open to full-time roles."
        />
        <meta name="keywords" content="software engineer, data engineering, cloud infrastructure, python, react, portfolio, aayushi malhotra" />
        <meta name="author" content="Aayushi Malhotra" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aayushidev.vercel.app/" />
        <meta property="og:title" content="Aayushi Malhotra &mdash; Software Engineer" />
        <meta property="og:description" content="Software Engineer graduating May 2026. Building data pipelines, backend systems, and cloud infrastructure." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://aayushidev.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grain">
        <Navigation />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}
