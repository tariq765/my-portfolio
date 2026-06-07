import { socials } from '@/lib/data';
import { Github, Linkedin, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 border-t border-white/5 bg-dark-bg/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Tariq.dev
          </span>
          <p className="text-gray-500 text-sm font-medium">
            Building the next generation of web & AI solutions.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <MessageCircle size={20} />
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-gray-400 text-sm font-medium flex items-center gap-1.5">
            Designed & Built with <Heart size={14} className="text-accent fill-accent" /> by Tariq
          </p>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
