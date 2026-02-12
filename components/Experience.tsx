import React, { useState } from 'react'
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCards(newExpanded)
  }

  const timelineData = [
    {
      type: 'work',
      title: 'Student Analyst',
      organization: 'Michigan State University IT',
      location: 'East Lansing, MI',
      period: 'Feb 2025 - Present',
      sortDate: '2025-02',
      achievements: [
        'Identifying, analyzing, and resolving IT service requests and incidents to maintain system uptime',
        'Diagnosing and resolving issues related to Ethernet, WiFi, VPN, and IP networking (TCP/IP, DHCP)',
        'Applying ITIL best practices to enhance service management and workflow efficiency',
        'Managing Genesys Cloud environments, optimizing communication systems for university operations',
        'Identifying and mitigating security threats while promoting best security practices',
      ],
    },
    {
      type: 'work',
      title: 'Data Science Intern',
      organization: 'Innefu Labs Pvt. Ltd.',
      location: 'India',
      period: 'May 2024 - Feb 2025',
      sortDate: '2024-05-15',
      achievements: [
        'Developed ML models using TensorFlow for anomaly detection, improving threat identification accuracy by 20%',
        'Streamlined data pipelines using Apache Spark, reducing processing time by 25%',
        'Built real-time dashboards using Python and Streamlit, reducing decision-making time by 30%',
      ],
    },
    {
      type: 'work',
      title: 'Software Engineer Intern',
      organization: 'Ericsson',
      location: 'Remote',
      period: 'May 2024 - Feb 2025',
      sortDate: '2024-05',
      achievements: [
        'Developing software solutions for telecommunications infrastructure',
        'Collaborating with cross-functional teams on innovative technology projects',
        'Gaining hands-on experience with enterprise-level software development practices',
      ],
    },
    {
      type: 'work',
      title: 'Undergraduate Research Assistant',
      organization: 'College of Social Science, MSU',
      location: 'East Lansing, MI',
      period: 'Mar 2024 - Feb 2025',
      sortDate: '2024-03',
      achievements: [
        'Extracting structured datasets from U.S. Census Bureau APIs and scraping social media data',
        'Training regression and classification models (Random Forest, XGBoost) to forecast economic shifts',
        'Building interactive dashboards (Tableau, Streamlit) to showcase socioeconomic trends',
        'Analyzing social media discussions using sentiment analysis (VADER, BERT)',
        'Ensuring fair and unbiased AI by addressing data imbalances and following ethical guidelines',
      ],
    },
    {
      type: 'work',
      title: 'CS Intern',
      organization: 'ByteBlanket',
      location: 'Dubai, UAE',
      period: 'Mar 2022 - Aug 2022',
      sortDate: '2022-03',
      achievements: [
        'Developed technical skills in software development across international projects',
        'Collaborated with international team members on business-critical technology solutions',
      ],
    },
    {
      type: 'work',
      title: 'CS Intern',
      organization: 'GirlUp Entrepreneurs',
      location: 'Remote',
      period: 'Nov 2021 - Feb 2022',
      sortDate: '2021-11',
      achievements: [
        'Automated data analysis with Python and Pandas for Girl Up campaigns',
        'Created a SQL database system for tracking donor contributions',
      ],
    },
    {
      type: 'education',
      title: 'Michigan State University',
      organization: 'B.S. Computer Science, Cognitive Science Minor',
      location: 'East Lansing, MI',
      period: '2022 - 2026',
      sortDate: '2022-08',
      achievements: [
        'Junior pursuing Computer Science with Cognitive Science minor',
        'Active in Women in Computing Society and diversity coding workshops',
        'Resident Assistant fostering inclusive community engagement',
      ],
    },
    {
      type: 'education',
      title: 'JBCN International School',
      organization: 'IGCSE & A Levels',
      location: 'International',
      period: '2018 - 2022',
      sortDate: '2018-01',
      achievements: [
        'Completed IGCSE and A Levels with strong foundation in mathematics and sciences',
        'Developed international perspective through diverse curriculum',
      ],
    },
  ].sort((a, b) => b.sortDate.localeCompare(a.sortDate))

  const filteredData =
    activeFilter === 'all'
      ? timelineData
      : timelineData.filter((item) => item.type === activeFilter)

  const filterOptions = [
    { key: 'all', label: 'All' },
    { key: 'work', label: 'Experience' },
    { key: 'education', label: 'Education' },
  ]

  return (
    <section id="experience" className="py-24 bg-bg-dark">
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-bold text-text-light mb-8">
          Experience & Education
        </h2>

        {/* Filter */}
        <div className="flex gap-2 mb-10">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeFilter === option.key
                  ? 'bg-accent-pink text-white'
                  : 'bg-bg-card text-text-muted border border-border-dark hover:border-border-hover'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl space-y-1">
          {filteredData.map((item, index) => {
            const isExpanded = expandedCards.has(index)
            const hasMore = item.achievements.length > 2

            return (
              <div key={`${item.type}-${index}`} className="relative flex gap-6">
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-accent-pink mt-2.5 flex-shrink-0" />
                  {index < filteredData.length - 1 && (
                    <div className="w-px flex-1 bg-border-dark" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <h3 className="text-base font-semibold text-text-light">
                        {item.title}
                      </h3>
                      <p className="text-accent-pink text-sm">{item.organization}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-md flex-shrink-0 ${
                      item.type === 'education'
                        ? 'bg-accent-cool/10 text-accent-cool'
                        : 'bg-accent-warm/10 text-accent-warm'
                    }`}>
                      {item.type === 'education' ? 'EDU' : 'WORK'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-text-dim text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {item.location}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {(isExpanded ? item.achievements : item.achievements.slice(0, 2)).map(
                      (achievement, i) => (
                        <li
                          key={i}
                          className="text-text-muted text-sm leading-relaxed pl-3 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-text-dim"
                        >
                          {achievement}
                        </li>
                      )
                    )}
                  </ul>

                  {hasMore && (
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="flex items-center gap-1 text-xs text-text-dim hover:text-accent-pink mt-2 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={12} /> Show less
                        </>
                      ) : (
                        <>
                          <ChevronDown size={12} /> +{item.achievements.length - 2} more
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
