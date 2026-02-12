import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-8 bg-bg-dark border-t border-border-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-dim text-xs">
          Built by Aayushi Malhotra
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/aayushimalhotra3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-text-muted transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/aayushimalhotraa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim hover:text-text-muted transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:aayushim33@gmail.com"
            className="text-text-dim hover:text-text-muted transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
