import React, { useState } from 'react'
import { Mail, Phone, MapPin, Download, Send, Github, Linkedin } from 'lucide-react'
import NeuralNetworkBackground from './NeuralNetworkBackground'

const Contact = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const { name, email, subject, message } = formData
      
      // Form submission logic would go here
      // Currently simulating the submission process
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Clear form on successful submission
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitStatus('success')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      className="relative overflow-visible bg-offwhite dark:bg-bg-section px-8 py-8 scroll-snap-align-start"
    >
      {/* Neural network background */}
      <NeuralNetworkBackground />

      {/* 2) Your actual content */}
      <div className="container-max section-padding relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-text-light mb-8 text-center" data-aos="fade-up">
           Get In Touch
         </h2>
        
        <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto grid lg:grid-cols-2 gap-4">
          {/* Contact Information */}
          <div className="bg-white/80 dark:bg-bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-pink-200 dark:border-border-dark space-y-3" data-aos="fade-right" data-aos-delay="50">
            <div>
              <h3 className="text-lg font-semibold text-charcoal dark:text-text-light mb-3">
                Let's Connect
              </h3>
              <p className="text-sm text-charcoal dark:text-text-muted mb-3 leading-relaxed">
                I'm passionate about exploring new opportunities in cloud computing, machine learning, and data science. 
                Whether you want to discuss internship opportunities, collaborate on innovative projects, or connect about 
                women in tech initiatives, I'd love to hear from you!
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="bg-soft-pink/20 dark:bg-accent-pink/20 p-2 rounded-lg">
                  <Mail className="text-soft-pink dark:text-accent-teal" size={20} />
                </div>
                <div>
                  <p className="font-medium text-charcoal dark:text-text-light">Email</p>
                  <a href="mailto:aayushim33@gmail.com" className="text-soft-pink dark:text-accent-pink hover:text-pink-700 dark:hover:text-accent-teal">
                    aayushim33@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-soft-pink/20 dark:bg-accent-pink/20 p-2 rounded-lg">
                  <Phone className="text-soft-pink dark:text-accent-teal" size={20} />
                </div>
                <div>
                  <p className="font-medium text-charcoal dark:text-text-light">Phone</p>
                  <a href="tel:+15179744605" className="text-soft-pink dark:text-accent-pink hover:text-pink-700 dark:hover:text-accent-teal">
                    +1 (517) 974-4605
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-soft-pink/20 dark:bg-accent-pink/20 p-2 rounded-lg">
                  <MapPin className="text-soft-pink dark:text-accent-teal" size={20} />
                </div>
                <div>
                  <p className="font-medium text-charcoal dark:text-text-light">Location</p>
                  <p className="text-gray-600 dark:text-text-muted">East Lansing, Michigan</p>
                </div>
              </div>
            </div>
            
            {/* Resume Download */}
            <div className="bg-butter-yellow/20 dark:bg-bg-card rounded-lg p-3 border border-butter-yellow/30 dark:border-border-dark">
              <h4 className="text-sm font-semibold text-charcoal dark:text-text-light mb-2">
                Download My Resume
              </h4>
              <p className="text-xs text-gray-600 dark:text-text-muted mb-3">
                Get a detailed overview of my experience, skills, and education.
              </p>
              <a
                href="/Malhotra, Aayushi Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-base font-semibold text-charcoal dark:text-text-light mb-3">
                Connect With Me
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/aayushimalhotra3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-bg-card hover:bg-gray-200 dark:hover:bg-border-dark p-2 rounded-lg transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} className="text-gray-700 dark:text-text-muted" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aayushimalhotraa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-bg-card hover:bg-gray-200 dark:hover:bg-border-dark p-3 rounded-lg transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} className="text-gray-700 dark:text-text-muted" />
                </a>
                <a
                  href="mailto:aayushim33@gmail.com"
                  className="bg-gray-100 dark:bg-bg-card hover:bg-gray-200 dark:hover:bg-border-dark p-3 rounded-lg transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail size={20} className="text-gray-700 dark:text-text-muted" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-pink-200 dark:border-border-dark" data-aos="fade-left" data-aos-delay="100">
            <h3 className="text-lg font-semibold text-charcoal dark:text-text-light mb-4">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-text-muted mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-pink-200 dark:border-border-dark rounded-lg bg-white dark:bg-bg-dark text-charcoal dark:text-text-light focus:ring-2 focus:ring-soft-pink dark:focus:ring-accent-teal focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-text-muted mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-border-dark rounded-lg bg-white dark:bg-bg-dark text-charcoal dark:text-text-light focus:ring-2 focus:ring-soft-pink dark:focus:ring-accent-teal focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-text-muted mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-border-dark rounded-lg bg-white dark:bg-bg-dark text-charcoal dark:text-text-light focus:ring-2 focus:ring-soft-pink dark:focus:ring-accent-teal focus:border-transparent transition-colors"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-text-muted mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-pink-200 dark:border-border-dark rounded-lg bg-white dark:bg-bg-dark text-charcoal dark:text-text-light focus:ring-2 focus:ring-soft-pink dark:focus:ring-accent-teal focus:border-transparent transition-colors resize-vertical"
                  placeholder="Share your thoughts, ideas, or just say hi!"
                    style={{minHeight: '80px'}}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 bg-soft-pink dark:bg-accent-pink text-charcoal dark:text-bg-dark hover:bg-pink-300 dark:hover:bg-accent-teal disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-600 rounded-lg p-4">
                  <p className="text-green-800 dark:text-green-300 font-medium">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-600 rounded-lg p-4">
                  <p className="text-red-800 dark:text-red-300 font-medium">
                    ❌ Failed to send message. Please try again or contact me directly at aayushim33@gmail.com
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact