import React, { useState } from 'react'
import { Calendar, MapPin, GraduationCap, Briefcase, ChevronDown, ChevronUp } from 'lucide-react'

type ItemType = 'work' | 'education'

interface TimelineItem {
  type: ItemType
  title: string
  organization: string
  location: string
  period: string
  sortDate: string
  bullets: string[]
}

const TIMELINE: TimelineItem[] = [
  // ── Education (sorted to top by date when combined) ───────────────
  {
    type: 'education' as ItemType,
    title: 'M.S. Data Science — Admitted',
    organization: 'Michigan State University',
    location: 'East Lansing, MI',
    period: 'Starting Fall 2026',
    sortDate: '2026-08',
    bullets: [
      'Admitted to MSU\'s Master of Data Science program; planning to focus on ML systems and data engineering at scale.',
    ],
  },
  // ── Work ──────────────────────────────────────────────────────────
  {
    type: 'work' as ItemType,
    title: 'AI & Data Engineering Intern',
    organization: 'IDX Exchange',
    location: 'Remote',
    period: 'Jan 2025 – Present',
    sortDate: '2025-01',
    bullets: [
      'Built and deployed RAG-based AI pipelines using FastAPI and LangChain, enabling natural-language querying over structured exchange datasets.',
      'Designed RESTful API endpoints serving ML model inferences with sub-200 ms p95 latency under concurrent load.',
      'Provisioned and managed cloud infrastructure on GCP (Cloud Run, BigQuery, Cloud Storage), cutting compute costs by 30% through right-sizing and autoscaling.',
      'Authored data ingestion jobs in Python that pull, validate, and normalize high-frequency market data into a centralized warehouse.',
    ],
  },
  {
    type: 'work' as ItemType,
    title: 'Student Analyst — IT Support',
    organization: 'Michigan State University IT',
    location: 'East Lansing, MI',
    period: 'Feb 2025 – Present',
    sortDate: '2025-02',
    bullets: [
      'Built automated Python ETL pipelines extracting TeamDynamix ticket data via REST APIs, loading into PostgreSQL, and surfacing KPIs in Grafana — cutting mean resolution time by 25%.',
      'Diagnosed and resolved network issues (Ethernet, WiFi, VPN, DHCP) for a 50,000+ user campus environment using ITIL-aligned incident management.',
      'Administered Genesys Cloud telephony configuration, reducing call-routing errors by implementing updated IVR flows.',
      'Identified and escalated phishing and unauthorized-access incidents, maintaining zero security breaches on monitored accounts.',
    ],
  },
  {
    type: 'work' as ItemType,
    title: 'Undergraduate Research Assistant',
    organization: 'College of Social Science, MSU',
    location: 'East Lansing, MI',
    period: 'Mar 2024 – Feb 2025',
    sortDate: '2024-03',
    bullets: [
      'Extracted and cleaned structured datasets from U.S. Census Bureau APIs and social media streams to study economic sentiment trends.',
      'Trained regression and classification models (Random Forest, XGBoost) to forecast economic shifts, evaluated with R², MAE, and RMSE.',
      'Built interactive Streamlit dashboards surfacing socioeconomic findings to research stakeholders and faculty.',
      'Applied VADER and BERT-based sentiment analysis to 500K+ social media posts, correlating public sentiment with economic policy indicators.',
    ],
  },
  {
    type: 'work' as ItemType,
    title: 'Data Science Intern',
    organization: 'Innefu Labs Pvt. Ltd.',
    location: 'India (Remote)',
    period: 'May 2024 – Aug 2024',
    sortDate: '2024-05',
    bullets: [
      'Trained TensorFlow anomaly-detection models on network telemetry data, improving threat identification accuracy by 20% over the prior rule-based system.',
      'Rebuilt data ingestion and preprocessing pipelines with Apache Spark, handling 50 GB+ daily cybersecurity log volumes and reducing processing time by 25%.',
      'Shipped real-time Streamlit dashboards presenting anomaly scores and alert timelines to non-technical stakeholders, cutting decision lag by 30%.',
    ],
  },
  {
    type: 'work' as ItemType,
    title: 'Software Engineer Intern',
    organization: 'Ericsson',
    location: 'Remote',
    period: 'Jun 2023 – Dec 2023',
    sortDate: '2023-06',
    bullets: [
      'Contributed to backend microservices powering Ericsson\'s 5G network management platform using Java and Spring Boot.',
      'Wrote integration tests covering 15+ API endpoints, catching three regression bugs before production releases.',
      'Proposed a Redis caching layer that reduced average API response time by 18%, presented at an architecture review.',
    ],
  },
  {
    type: 'work' as ItemType,
    title: 'Computer Science Intern',
    organization: 'ByteBlanket',
    location: 'Dubai, UAE',
    period: 'Mar 2022 – Aug 2022',
    sortDate: '2022-03',
    bullets: [
      'Developed and shipped feature modules for a B2B SaaS product using React and Node.js, reducing onboarding friction for enterprise clients.',
      'Automated repetitive QA workflows with Python scripts, saving ~4 hours per sprint cycle.',
    ],
  },
  {
    type: 'work' as ItemType,
    title: 'Data Analyst Intern',
    organization: 'GirlUp Entrepreneurs',
    location: 'Remote',
    period: 'Nov 2021 – Feb 2022',
    sortDate: '2021-11',
    bullets: [
      'Automated donor contribution analysis using Python and Pandas, producing monthly impact reports that informed campaign targeting decisions.',
      'Designed and maintained a SQL database tracking 500+ donor records, replacing a manual spreadsheet workflow and eliminating data-entry errors.',
    ],
  },
  // ── Education ─────────────────────────────────────────────────────
  {
    type: 'education' as ItemType,
    title: 'B.S. Computer Science · Cognitive Science Minor',
    organization: 'Michigan State University',
    location: 'East Lansing, MI',
    period: '2022 – May 2026',
    sortDate: '2022-08',
    bullets: [
      'Relevant coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Machine Learning, Computer Networks, Software Engineering.',
      'Senior Capstone (CSE 482): Agentic AI IT Support System for WK Kellogg Co. — production-grade RAG pipeline built with a corporate partner.',
      'Resident Assistant (2024–Present) · Diversity & Inclusion Coding Workshop Mentor (2023–Present).',
    ],
  },
].sort((a, b) => b.sortDate.localeCompare(a.sortDate))

const FILTERS = [
  { key: 'all',       label: 'All'        },
  { key: 'work',      label: 'Experience' },
  { key: 'education', label: 'Education'  },
] as const

type Filter = typeof FILTERS[number]['key']

const TimelineCard = ({
  item,
  isLast,
}: {
  item: TimelineItem
  isLast: boolean
}) => {
  const [expanded, setExpanded] = useState(false)
  const hasMore = item.bullets.length > 3

  return (
    <div className="relative flex gap-6">
      {/* Dot + vertical line */}
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full border-2 border-[#c4a0b4] bg-[#141421] mt-1.5 z-10 flex-shrink-0" />
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-[#c4a0b4]/30 to-[#2c2838]/40 mt-1" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-8">
        <div className="bg-[#1c1c2e] border border-[#2c2838] rounded-xl p-5 hover:border-[#3c3848] transition-colors duration-200">

          {/* Type badge */}
          <div className="flex items-center gap-2 mb-3">
            {item.type === 'education'
              ? <GraduationCap size={14} className="text-[#c4a0b4]" />
              : <Briefcase size={14} className="text-[#c4a0b4]" />
            }
            <span className="text-[#c4a0b4] text-xs font-medium tracking-widest uppercase">
              {item.type === 'education' ? 'Education' : 'Experience'}
            </span>
          </div>

          {/* Title + org */}
          <h3 className="font-serif text-base font-semibold text-[#f0ece8] mb-0.5 leading-snug">
            {item.title}
          </h3>
          <p className="text-[#c4a0b4] text-sm font-medium mb-3">{item.organization}</p>

          {/* Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-[#7a7680] text-xs mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {item.period}
            </span>
            <span className="hidden sm:block">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {item.location}
            </span>
          </div>

          {/* Bullets */}
          <ul className="space-y-2">
            {(expanded ? item.bullets : item.bullets.slice(0, 3)).map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[#c0bbb8] text-sm leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-[#c4a0b4] mt-2 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-[#7a7680] hover:text-[#c4a0b4] mt-3 transition-colors"
            >
              {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
              {expanded ? 'Show less' : `+${item.bullets.length - 3} more`}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const Experience = () => {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'all'
    ? TIMELINE
    : TIMELINE.filter(i => i.type === filter)

  return (
    <section id="experience" className="py-28 bg-[#141421] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2c2838] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-12" data-aos="fade-up">
          <span className="text-[#c4a0b4] text-xs font-medium tracking-[0.2em] uppercase">History</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#f0ece8] mt-2">
            Experience &amp; Education
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 mb-10 flex-wrap" data-aos="fade-up" data-aos-delay="60">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key as Filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f.key
                  ? 'bg-[#c4a0b4] text-[#0f0f1a]'
                  : 'border border-[#2c2838] text-[#7a7680] hover:border-[#c4a0b4] hover:text-[#c4a0b4]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-2xl">
          {filtered.map((item, i) => (
            <div key={`${item.type}-${i}`} data-aos="fade-up" data-aos-delay={`${Math.min(i * 50, 300)}`}>
              <TimelineCard item={item} isLast={i === filtered.length - 1} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
