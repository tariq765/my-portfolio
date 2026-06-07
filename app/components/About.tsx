'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/data';
import { MapPin, Briefcase, Code2, GraduationCap } from 'lucide-react';

export default function About() {
  const infoItems = [
    { icon: <MapPin size={18} className="text-primary" />, label: 'Location', value: 'Karachi, Pakistan' },
    { icon: <Code2 size={18} className="text-secondary" />, label: 'Main Focus', value: 'React / Next.js & FastAPI' },
    { icon: <GraduationCap size={18} className="text-accent" />, label: 'Education', value: 'Governor Sindh IT Course' },
    { icon: <Briefcase size={18} className="text-primary" />, label: 'Availability', value: 'Open for Freelance / Fulltime' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="about">
      {/* Title */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        />
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Quick Stats Cards */}
        <motion.div
          className="lg:col-span-5 flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass p-8 rounded-3xl flex-1 flex flex-col justify-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-2">Quick Overview</h3>
            
            <div className="space-y-5">
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium uppercase tracking-wider">{item.label}</span>
                    <span className="text-base text-gray-200 font-semibold">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative Biography */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-white">
                Designing & Developing the <span className="text-primary">Next‑Gen</span> Web
              </h3>
              <div className="text-lg text-gray-300 leading-relaxed font-light whitespace-pre-line">
                {about}
              </div>
            </div>

            <div className="pt-8 flex items-center gap-6 border-t border-white/5 mt-8">
              <div>
                <span className="text-3xl font-extrabold text-white block">3+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Core Tech Categories</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <span className="text-3xl font-extrabold text-white block">10+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Projects Completed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

