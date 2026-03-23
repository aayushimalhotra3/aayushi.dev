import React from 'react'
import { Mail, Github, Linkedin, Download, ExternalLink } from 'lucide-react'

const LINKS = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'aayushim33@gmail.com',
    href: 'mailto:aayushim33@gmail.com',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'aayushimalhotraa',
    href: 'https://www.linkedin.com/in/aayushimalhotraa',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'aayushimalhotra3',
    href: 'https://github.com/aayushimalhotra3',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-[#141421] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2c2838] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-14" data-aos="fade-up">
          <span className="text-[#c4a0b4] text-xs font-medium tracking-[0.2em] uppercase">Say hello</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#f0ece8] mt-2">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left — message + links */}
          <div data-aos="fade-up" data-aos-delay="60">
            <p className="text-[#c0bbb8] text-base leading-relaxed mb-8">
              I'd love to chat about opportunities in software engineering, data engineering, or AI
              infrastructure. Whether you're a recruiter with a role that fits, an engineer who wants to
              collaborate, or just someone who wants to talk shop — reach out.
            </p>

            <div className="space-y-4">
              {LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#1c1c2e] border border-[#2c2838]
                             hover:border-[#c4a0b4]/40 hover:shadow-[0_0_20px_-8px_rgba(196,160,180,0.15)]
                             transition-all duration-200 group"
                >
                  <span className="text-[#c4a0b4] flex-shrink-0">{link.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#7a7680] text-xs mb-0.5">{link.label}</p>
                    <p className="text-[#f0ece8] text-sm font-medium truncate group-hover:text-[#c4a0b4] transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <ExternalLink size={14} className="text-[#3c3848] group-hover:text-[#c4a0b4] transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — resume card */}
          <div data-aos="fade-left" data-aos-delay="100">
            <div
              className="rounded-2xl border border-[#2c2838] bg-[#1c1c2e] p-8 flex flex-col items-start gap-5"
              style={{ boxShadow: 'inset 0 0 60px -20px rgba(196,160,180,0.05)' }}
            >
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#f0ece8] mb-2">My Resume</h3>
                <p className="text-[#7a7680] text-sm leading-relaxed">
                  A full overview of my experience, education, and technical skills.
                  Available as a PDF — updated for Spring 2026.
                </p>
              </div>

              <a
                href="/Malhotra, Aayushi Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium
                           bg-[#c4a0b4] text-[#0f0f1a] hover:bg-[#b08fa0]
                           transition-all duration-200"
              >
                <Download size={15} />
                Download Resume (PDF)
              </a>

              <div className="pt-2 border-t border-[#2c2838] w-full">
                <p className="text-[#7a7680] text-xs">
                  Graduating May 2026 · Available full-time from Summer 2026 · Open to relocation
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
