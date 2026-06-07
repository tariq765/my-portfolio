'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Layout, Server, Brain, Wrench, Sparkle } from 'lucide-react';

const icons = {
  frontend: <Layout size={24} />,
  backend: <Server size={24} />,
  ai: <Brain size={24} />,
  tools: <Wrench size={24} />,
};

const colors = {
  frontend: 'from-cyan-400 to-blue-500',
  backend: 'from-indigo-400 to-purple-500',
  ai: 'from-pink-400 to-rose-500',
  tools: 'from-amber-400 to-orange-500',
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="skills">
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-4 p-3 rounded-2xl bg-white/5 border border-white/10"
        >
          <Sparkle size={24} className="text-primary animate-pulse" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Arsenal</span>
        </h2>
        <p className="text-gray-400 max-w-2xl font-medium">
          A collection of technologies I use to bring complex ideas to life, from frontend polish to AI-driven backends.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Frontend - Large Bento Box */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 md:row-span-2 glass p-8 rounded-[2.5rem] relative overflow-hidden group border-2 border-white/5 hover:border-primary/20"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Layout size={120} className="text-primary" />
          </div>
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.frontend} flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20`}>
            {icons.frontend}
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Frontend Excellence</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((s) => (
              <span key={s} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold hover:bg-white/10 transition-colors">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* AI & Agents - Wide Bento Box */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 glass p-8 rounded-[2.5rem] relative overflow-hidden group border-2 border-white/5 hover:border-accent/20"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Brain size={80} className="text-accent" />
          </div>
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.ai} flex items-center justify-center text-white mb-6 shadow-lg shadow-pink-500/20`}>
            {icons.ai}
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">AI & Agents</h3>
          <div className="flex flex-wrap gap-2">
            {skills.ai.map((s) => (
              <span key={s} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold hover:bg-white/10 transition-colors">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Backend - Small Bento Box */}
        <motion.div 
          variants={itemVariants}
          className="glass p-8 rounded-[2.5rem] relative overflow-hidden group border-2 border-white/5 hover:border-secondary/20"
        >
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.backend} flex items-center justify-center text-white mb-4`}>
            {icons.backend}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Backend</h3>
          <ul className="space-y-2">
            {skills.backend.map((s) => (
              <li key={s} className="text-gray-400 font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> {s}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tools - Small Bento Box */}
        <motion.div 
          variants={itemVariants}
          className="glass p-8 rounded-[2.5rem] relative overflow-hidden group border-2 border-white/5 hover:border-amber-500/20"
        >
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.tools} flex items-center justify-center text-white mb-4`}>
            {icons.tools}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Tools</h3>
          <ul className="space-y-2">
            {skills.tools.map((s) => (
              <li key={s} className="text-gray-400 font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
