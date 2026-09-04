'use client';

import { projects } from '@/lib/data';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="projects">
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest"
        >
          <Code2 size={14} />
          <span>My Portfolio</span>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
          Featured <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Creations</span>
        </h2>
        <p className="text-gray-400 max-w-2xl font-medium text-lg">
          A showcase of my recent work, blending elegant design with powerful backend logic.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((p, idx) => (
          <Card key={p.title} className="p-0 overflow-hidden flex flex-col h-full">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-4 right-4 flex gap-2">
                {p.tech.slice(0, 2).map((t) => (
                  <span key={t} className="px-3 py-1 glass rounded-lg text-xs font-bold text-white backdrop-blur-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 mb-8 line-clamp-3 font-medium leading-relaxed">
                {p.description}
              </p>
              
              <div className="mt-auto flex gap-4">
                <Button 
                  href={p.demo} 
                  className="flex-1 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                  </svg>
                  <span>Live Demo</span>
                  <ExternalLink size={16} className="opacity-80" />
                </Button>
                <Button 
                  href={p.github} 
                  className="px-5 py-3 glass hover:bg-white/10 text-white rounded-xl border-white/10 flex items-center justify-center gap-2 transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={20} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </motion.div>
    </section>
  );
}
