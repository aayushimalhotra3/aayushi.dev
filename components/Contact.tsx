import React, { useState } from 'react'
import { Mail, MapPin, Download, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitStatus('success')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-bg-dark">
      <div className="container-max">
        <h2 className="text-2xl md:text-3xl font-bold text-text-light mb-4">
          Get In Touch
        </h2>
        <p className="text-text-muted text-sm mb-12">
          I'd love to hear about opportunities, collaborations, or just chat about tech.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent-pink flex-shrink-0" />
                <a
                  href="mailto:aayushim33@gmail.com"
                  className="text-text-muted hover:text-text-light text-sm transition-colors"
                >
                  aayushim33@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent-pink flex-shrink-0" />
                <span className="text-text-muted text-sm">East Lansing, Michigan</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/aayushimalhotra3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-text-light transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/aayushimalhotraa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-text-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            <div className="pt-4 border-t border-border-dark">
              <a
                href="/Malhotra, Aayushi Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-text-dim mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border border-border-dark rounded-lg bg-bg-card text-text-light text-sm focus:outline-none focus:border-accent-pink transition-colors placeholder:text-text-dim"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-text-dim mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border border-border-dark rounded-lg bg-bg-card text-text-light text-sm focus:outline-none focus:border-accent-pink transition-colors placeholder:text-text-dim"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-text-dim mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 border border-border-dark rounded-lg bg-bg-card text-text-light text-sm focus:outline-none focus:border-accent-pink transition-colors placeholder:text-text-dim"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-text-dim mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 border border-border-dark rounded-lg bg-bg-card text-text-light text-sm focus:outline-none focus:border-accent-pink transition-colors resize-none placeholder:text-text-dim"
                  placeholder="Tell me about your project, idea, or just say hi..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-accent-cool text-sm">
                  Message sent! I'll get back to you soon.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm">
                  Failed to send. Try emailing me directly at aayushim33@gmail.com
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
