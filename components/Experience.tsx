import React, { useState } from 'react'
import { Calendar, MapPin, GraduationCap, Briefcase, ChevronDown, ChevronUp, Users } from 'lucide-react'
import NeuralNetworkBackground from './NeuralNetworkBackground'

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
  // Combined timeline data with chronological sorting
  const timelineData = [
    {
      type: 'extracurricular',
      title: 'Resident Assistant',
      organization: 'Michigan State University',
      location: 'East Lansing, Michigan',
      period: 'Aug 2024 - Present',
      sortDate: '2024-08',
      achievements: [
        'Community Development: Organizing events, fostering relationships, and promoting an inclusive residential experience to enhance student engagement',
        'Conflict Resolution & Mediation: Addressing and resolving resident concerns while promoting a positive and respectful living environment',
        'Crisis Management & Incident Response: Acting as a first responder to emergencies and incidents, ensuring student safety and well-being'
      ]
    },
    {
      type: 'extracurricular',
      title: 'Diversity & Inclusion Coding Workshop Mentor',
      organization: 'Michigan State University',
      location: 'East Lansing, Michigan',
      period: 'Sep 2023 - Present',
      sortDate: '2023-09',
      achievements: [
        'Mentored 50+ students from underrepresented backgrounds in computer science fundamentals',
        'Designed and delivered interactive coding workshops focusing on Python, web development, and problem-solving',
        'Created inclusive learning environments that fostered collaboration and peer support',
        'Developed curriculum materials and resources to support diverse learning styles',
        'Collaborated with faculty and staff to expand diversity initiatives in STEM education'
      ]
    },
    {
      type: 'extracurricular',
      title: 'Women in Computing Society Member',
      organization: 'Michigan State University',
      location: 'East Lansing, Michigan',
      period: 'Aug 2022 - Present',
      sortDate: '2022-08-15',
      achievements: [
        'Active participant in professional development workshops and networking events',
        'Contributed to initiatives promoting gender diversity in technology fields',
        'Engaged in mentorship programs supporting women pursuing computer science careers',
        'Participated in hackathons and coding competitions to build technical skills'
      ]
    },
    {
      type: 'work',
      title: 'Student Analyst',
      organization: 'Michigan State University Information Technology',
      location: 'East Lansing, Michigan, United States',
      period: 'Feb 2025 - Present',
      sortDate: '2025-02',
      achievements: [
        'Incident Management & Response: Identifying, analyzing, and resolving IT service requests and incidents to maintain system uptime and efficiency',
        'Network Troubleshooting: Diagnosing and resolving issues related to Ethernet, WiFi, VPN, and IP networking (TCP/IP, DHCP) to ensure smooth connectivity',
        'Remote & On-Site Support: Assisting users via remote desktop solutions and in-person troubleshooting to resolve hardware, software, and authentication issues',
        'ITIL Process Implementation: Applying ITIL best practices to enhance service management and workflow efficiency',
        'Genesys Cloud Support: Managing Genesys Framework & Genesys Cloud environments, optimizing communication systems for university operations',
        'Cybersecurity Awareness: Identifying and mitigating security threats, such as phishing and unauthorized access, while promoting best security practices among users'
      ]
    },
    {
      type: 'work',
      title: 'Resident Assistant',
      organization: 'Michigan State University',
      location: 'East Lansing, Michigan',
      period: 'Aug 2024 - Present',
      sortDate: '2024-08',
      achievements: [
        'Community Development: Organizing events, fostering relationships, and promoting an inclusive residential experience to enhance student engagement',
        'Conflict Resolution & Mediation: Addressing and resolving resident concerns while promoting a positive and respectful living environment',
        'Crisis Management & Incident Response: Acting as a first responder to emergencies and incidents, ensuring student safety and well-being',
        'Policy Enforcement & Student Conduct: Upholding university policies and addressing violations through proper documentation and intervention',
        'Leadership & Mentorship: Serving as a mentor and resource for residents by providing guidance on academic, personal, and social matters',
        'Administrative Duties: Managing resident check-ins, reporting incidents, and facilitating room changes as needed'
      ]
    },
    {
      type: 'work',
      title: 'Data Science Intern',
      organization: 'Innefu Labs Pvt. Ltd.',
      location: 'India',
      period: 'May 2024 - Feb 2025',
      sortDate: '2024-05-15',
      achievements: [
        'Assisted in developing machine learning models using TensorFlow for anomaly detection, improving threat identification accuracy by 20%',
        'Streamlined data ingestion and preprocessing pipelines using Apache Spark, handling large volumes of cybersecurity data and reducing processing time by 25%',
        'Developed real-time dashboards using Python and Streamlit, providing actionable insights to stakeholders and reducing decision-making time by 30%'
      ]
    },
    {
      type: 'work',
      title: 'Software Engineer Intern',
      organization: 'Ericsson',
      location: 'Remote',
      period: 'May 2024 – Feb 2025',
      sortDate: '2024-05',
      achievements: [
        'Currently working as a Software Engineer Intern at Ericsson, a leading telecommunications company',
        'Developing and implementing software solutions for telecommunications infrastructure',
        'Collaborating with cross-functional teams on innovative technology projects',
        'Gaining hands-on experience with enterprise-level software development practices'
      ]
    },
    {
      type: 'work',
      title: 'Undergraduate Research Assistant',
      organization: 'College of Social Science at Michigan State University',
      location: 'East Lansing, Michigan, United States',
      period: 'Mar 2024 - Feb 2025',
      sortDate: '2024-03',
      achievements: [
        'Data Collection & Cleaning: Extracting structured datasets from U.S. Census Bureau APIs and government sources, and scraping social media data to track public discourse on economic conditions',
        'Data Integration & Feature Engineering: Merging census data with social sentiment trends and engineering features such as economic sentiment scores, geographic clustering, and income disparity trends',
        'Exploratory Data Analysis (EDA): Performing statistical analysis using Pandas, NumPy, and Seaborn to uncover hidden relationships and visualizing trends through heatmaps, time-series plots, and correlation matrices',
        'Predictive Modeling: Training regression and classification models (Linear Regression, Random Forest, XGBoost) to forecast economic shifts and evaluating model performance using R-squared, Mean Absolute Error (MAE), and RMSE',
        'Data Visualization & Reporting: Building an interactive dashboard (Tableau, Power BI, Streamlit) to showcase socioeconomic trends and presenting findings to stakeholders for policy insights',
        'Natural Language Processing (NLP): Analyzing social media discussions using sentiment analysis (VADER, BERT) to measure public perception of economic policies',
        'Ethical AI & Bias Mitigation: Ensuring fair and unbiased AI by addressing data imbalances and following ethical guidelines for data privacy and responsible AI use in social science research'
      ]
    },
    {
      type: 'work',
      title: 'Residence Halls Association Representative - Women\'s Council',
      organization: 'Michigan State University',
      location: 'East Lansing, Michigan',
      period: 'Aug 2023 – May 2024',
      sortDate: '2023-08',
      achievements: [
        'Served as delegate to the Residential Hall Association (RHA) representing student interests in university housing',
        'Actively participated in women\'s council within the RHA General Assembly',
        'Engaged in crafting and advocating for policies that directly influenced residential experience',
        'Contributed to initiatives improving well-being of all on-campus residents'
      ]
    },
    {
      type: 'work',
      title: 'Computer Science Intern',
      organization: 'ByteBlanket',
      location: 'Dubai, United Arab Emirates',
      period: 'Mar 2022 – Aug 2022',
      sortDate: '2022-03',
      achievements: [
        'Worked as a Computer Science Intern at ByteBlanket, gaining international work experience',
        'Developed technical skills in software development and programming',
        'Collaborated with international team members on various technology projects',
        'Applied computer science concepts to real-world business solutions'
      ]
    },
    {
      type: 'work',
      title: 'Computer Science Intern',
      organization: 'GirlUp Entrepreneurs',
      location: 'Remote',
      period: 'Nov 2021 - Feb 2022',
      sortDate: '2021-11',
      achievements: [
        'Automated data analysis with Python and Pandas, enhancing decision-making for Girl Up campaigns by providing actionable insights',
        'Created a database system with SQL for tracking donor contributions, streamlining financial management at Girl Up\'s nonprofit organization'
      ]
    },
    {
      type: 'education',
      title: 'Michigan State University',
      organization: 'Bachelor of Science - Computer Science Major, Cognitive Science Minor',
      location: 'East Lansing, MI',
      period: '2022 - 2026 (Expected)',
      sortDate: '2022-08',
      achievements: [
        'Junior at Michigan State University pursuing Computer Science with Cognitive Science minor',
        'Actively seeking summer 2025 internship opportunities in software engineering',
        'Committed to continuous learning and professional development in technology',
        'Building strong foundation in computer science principles and cognitive science applications'
      ]
    },
    {
       type: 'education',
       title: 'JBCN International School',
       organization: 'IGCSE & A Levels',
       location: 'International',
       period: '2018 - 2022',
       sortDate: '2018-01',
       achievements: [
         'Completed International General Certificate of Secondary Education (IGCSE) from 2018-2020',
         'Pursued A Levels from 2020-2022, building advanced academic foundation',
         'Built strong academic foundation in mathematics and sciences',
         'Developed international perspective through diverse curriculum',
         'Prepared for higher education in computer science and technology'
       ]
     }
  ].sort((a, b) => b.sortDate.localeCompare(a.sortDate)) // Sort by most recent first

  // Filter timeline data based on active filter
  const filteredTimelineData = activeFilter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.type === activeFilter)

  const filterOptions = [
    { key: 'all', label: 'All', icon: null },
    { key: 'work', label: 'Experience', icon: <Briefcase size={16} /> },
    { key: 'education', label: 'Education', icon: <GraduationCap size={16} /> },
    { key: 'extracurricular', label: 'Extracurriculars', icon: <Users size={16} /> }
  ]

  const ExperienceCard = ({ item }: { item: any }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-600">
      <div className="flex items-start gap-4">
        <div className="text-primary-600 mt-1">
          {item.type === 'education' ? <GraduationCap size={24} /> : <Briefcase size={24} />}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>
          
          <div className="text-primary-600 font-medium mb-2">
            {item.organization}
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span className="text-sm">{item.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span className="text-sm">{item.location}</span>
            </div>
          </div>
          
          <ul className="space-y-2">
            {item.achievements.map((achievement: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  const TimelineCard = ({ item, index, isLast }: { item: any; index: number; isLast: boolean }) => {
    const isExpanded = expandedCards.has(index)
    const hasMoreAchievements = item.achievements.length > 3
    
    return (
      <div className="relative flex mb-6 group">
        {/* Timeline line and dot */}
        <div className="flex flex-col items-center mr-6 relative">
          <div className="w-2.5 h-2.5 bg-soft-pink dark:bg-accent-blue rounded-full border-2 border-white dark:border-bg-dark shadow-sm z-10 relative group-hover:bg-pink-300 dark:group-hover:bg-accent-green transition-colors duration-300">
          </div>
          {!isLast && (
            <div className="w-px bg-pink-200 dark:bg-accent-green/50 absolute top-3 h-full"></div>
          )}
        </div>
        
        {/* Content card */}
        <div className="flex-1 relative">
          <div className="bg-white/80 dark:bg-bg-card/80 backdrop-blur-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-300 border border-pink-200 dark:border-border-dark">
            {/* Header with icon and badge */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-1.5 bg-butter-yellow/20 dark:bg-bg-dark rounded-lg">
                {item.type === 'education' ? 
                  <GraduationCap size={16} className="text-soft-pink dark:text-accent-teal" /> : 
                  item.type === 'extracurricular' ?
                  <Users size={16} className="text-soft-pink dark:text-accent-teal" /> :
                  <Briefcase size={16} className="text-soft-pink dark:text-accent-teal" />
                }
              </div>
              <div className="text-xs font-medium text-charcoal dark:text-text-light bg-butter-yellow/20 dark:bg-bg-dark px-2 py-1 rounded-full">
                {item.type === 'education' ? 'EDUCATION' : item.type === 'extracurricular' ? 'EXTRACURRICULAR' : 'EXPERIENCE'}
              </div>
            </div>
            
            {/* Title and organization */}
            <div className="mb-3">
              <h3 className="text-base font-bold text-charcoal dark:text-text-light mb-1 leading-tight">
                {item.title}
              </h3>
              <div className="text-soft-pink dark:text-accent-blue font-semibold text-sm mb-2">
                {item.organization}
              </div>
            </div>
            
            {/* Meta information */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-text-muted mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={14} className="text-soft-pink dark:text-accent-teal" />
                <span className="text-xs">{item.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} className="text-soft-pink dark:text-accent-teal" />
                <span className="text-xs">{item.location}</span>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="space-y-2">
              {(isExpanded ? item.achievements : item.achievements.slice(0, 3)).map((achievement: string, idx: number) => (
                <div key={idx} className="flex items-start gap-1.5 text-gray-700 dark:text-text-muted">
                  <div className="w-1 h-1 bg-soft-pink dark:bg-accent-blue rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-xs leading-relaxed">{achievement}</span>
                </div>
              ))}
              {hasMoreAchievements && (
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center gap-1 text-xs text-soft-pink dark:text-accent-teal hover:text-pink-300 dark:hover:text-accent-pink italic ml-2.5 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-soft-pink dark:focus:ring-accent-teal rounded px-1 py-0.5"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp size={12} />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={12} />
                      +{item.achievements.length - 3} more achievements
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section 
      id="experience" 
      className="relative py-16 bg-offwhite dark:bg-bg-section overflow-visible"
    >
      {/* Neural network background */}
      <NeuralNetworkBackground />

      {/* 2) Your actual content */}
      <div className="container-max section-padding relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-text-light mb-8 text-center" data-aos="fade-up">
           Experience, Education & Extracurriculars
         </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8" data-aos="fade-up" data-aos-delay="50">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === option.key
                  ? 'bg-soft-pink dark:bg-accent-pink text-white shadow-lg transform scale-105'
                  : 'bg-white/80 dark:bg-bg-card/80 text-charcoal dark:text-text-light hover:bg-soft-pink/20 dark:hover:bg-accent-pink/20 border border-pink-200 dark:border-border-dark'
              }`}
            >
              {option.icon}
              <span>{option.label}</span>
              {option.key !== 'all' && (
                <span className="bg-white/30 dark:bg-bg-dark/30 px-2 py-0.5 rounded-full text-xs">
                  {timelineData.filter(item => item.type === option.key).length}
                </span>
              )}
            </button>
          ))}
        </div>
        
        <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto">
          {/* Minimalist Vertical Timeline */}
           <div className="relative py-8 w-full mx-auto">
             <div className="space-y-8">
               {filteredTimelineData.length > 0 ? (
                 filteredTimelineData.map((item, index) => (
                   <div key={`${item.type}-${index}`} data-aos="fade-up" data-aos-delay={`${100 + index * 30}`}>
                     <TimelineCard item={item} index={index} isLast={index === filteredTimelineData.length - 1} />
                   </div>
                 ))
               ) : (
                 <div className="text-center py-8">
                   <p className="text-gray-500 dark:text-text-muted">No items found for the selected filter.</p>
                 </div>
               )}
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Experience