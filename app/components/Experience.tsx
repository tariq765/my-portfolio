'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';
import { Briefcase, Calendar, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="experience">
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-4 p-3 rounded-2xl bg-white/5 border border-white/10"
        >
          <Briefcase size={24} className="text-secondary animate-pulse" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="text-gray-400 max-w-2xl font-medium">
          The path I've taken to master modern web technologies and AI engineering.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent transform -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-dark-bg transform -translate-x-1/2 z-10 hidden md:block" />

              {/* Content Card */}
              <div className="w-full md:w-[calc(50%-2rem)]">
                <div className="glass p-8 rounded-[2rem] border-2 border-white/5 hover:border-primary/20 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Calendar size={16} />
                    </div>
                    <span className="text-sm font-bold text-primary/80 uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {exp.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-tighter">
                    <Sparkles size={14} />
                    <span>Continuous Learning & Building</span>
                  </div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
