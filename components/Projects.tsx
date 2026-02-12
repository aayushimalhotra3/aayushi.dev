import React from 'react'
import { ExternalLink, Github, BookMarked } from 'lucide-react'

const Projects = () => {
  const pinnedRepos = [
    {
      name: 'replayCI',
      description: 'PR-native regression tests for tool-using AI agents with deterministic replay, behavior diffs, and cost/safety gates.',
      language: 'Python',
      languageColor: '#3572A5',
      url: 'https://github.com/aayushimalhotra3/replayCI',
    },
    {
      name: 'launchscope',
      description: 'Feature flag and A/B experiment analytics platform built with FastAPI, Postgres, and React.',
      language: 'Python',
      languageColor: '#3572A5',
      url: 'https://github.com/aayushimalhotra3/launchscope',
    },
    {
      name: 'flakewatch',
      description: 'CI flakiness and test failure analytics, tracking flaky tests and failure clusters over time with FastAPI and React.',
      language: 'Python',
      languageColor: '#3572A5',
      url: 'https://github.com/aayushimalhotra3/flakewatch',
    },
    {
      name: 'infratrack',
      description: 'Multi-tenant usage-based billing backend with FastAPI, Postgres, Stripe, quotas, analytics, and API keys.',
      language: 'Python',
      languageColor: '#3572A5',
      url: 'https://github.com/aayushimalhotra3/infratrack',
    },
    {
      name: 'urlshortener-app',
      description: 'Production-ready Go microservice for URL shortening with Prometheus metrics, structured logging, Docker, CI/CD, and tests.',
      language: 'Go',
      languageColor: '#00ADD8',
      url: 'https://github.com/aayushimalhotra3/urlshortener-app',
    },
    {
      name: 'meterstack',
      description: 'Multi-tenant SaaS billing and usage analytics backend with subscriptions, entitlements, quota checks, and a React dashboard.',
      language: 'Python',
      languageColor: '#3572A5',
      url: 'https://github.com/aayushimalhotra3/meterstack',
    },
  ]

  return (
    <section id="projects" className="py-24 bg-bg-dark">
      <div className="container-max">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-light mb-1">
              Pinned Projects
            </h2>
            <p className="text-text-muted text-sm">
              Highlights from my GitHub &mdash; things I've built and shipped.
            </p>
          </div>
          <a
            href="https://github.com/aayushimalhotra3?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-text-dim hover:text-text-light text-sm transition-colors"
          >
            View all repos <ExternalLink size={14} />
          </a>
        </div>

        {/* Repo cards - GitHub pinned style */}
        <div className="grid md:grid-cols-2 gap-4">
          {pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-bg-card border border-border-dark rounded-xl p-5 hover:border-border-hover transition-all duration-200 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <BookMarked size={16} className="text-text-dim flex-shrink-0" />
                <span className="text-accent-pink font-semibold text-sm group-hover:underline">
                  {repo.name}
                </span>
              </div>

              <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                {repo.description}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-text-dim text-xs">{repo.language}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile link */}
        <div className="sm:hidden mt-6 text-center">
          <a
            href="https://github.com/aayushimalhotra3?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-text-light text-sm transition-colors inline-flex items-center gap-1.5"
          >
            View all repositories <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
