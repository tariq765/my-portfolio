'use client';

import { motion } from 'framer-motion';
import { hero } from '@/lib/data';
import Button from '@/app/components/Button';
import { ArrowRight, Sparkles, Terminal, Cpu, Blocks, Rocket } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, damping: 15, stiffness: 100 }
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden bg-transparent">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          className="lg:col-span-7 text-left space-y-8 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.div
            variants={itemVariants}
            className="self-start inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-primary backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-accent" />
            </motion.div>
            <span className="tracking-wide">Building the Future of Web & AI</span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.3)] inline-block">
                {hero.name}
              </span>
            </h1>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-400 tracking-tight"
          >
            {hero.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-xl leading-relaxed font-medium"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 pt-4"
          >
            <Button
              href="#contact"
              className="bg-gradient-to-r from-primary via-secondary to-accent text-white border-none shadow-[0_10px_30px_rgba(34,211,238,0.3)] flex items-center gap-3 py-4 px-8 font-bold text-lg rounded-2xl hover:scale-105 transition-transform"
            >
              Let's Talk <Rocket size={20} />
            </Button>
            <Button
              href="#projects"
              className="border-2 border-white/10 hover:border-primary/50 py-4 px-8 font-bold text-lg rounded-2xl bg-white/5 backdrop-blur-md text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all"
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Element */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            className="relative w-80 h-80 sm:w-[450px] sm:h-[450px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.2, bounce: 0.4 }}
          >
            {/* Animated Rings */}
            <motion.div 
              className="absolute inset-0 rounded-full border-[3px] border-dashed border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-8 rounded-full border-[2px] border-dashed border-secondary/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Glow Orbs */}
            <div className="absolute inset-10 rounded-full bg-primary/20 blur-[80px] animate-pulse" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[60px] animate-bounce-subtle" />

            {/* Avatar Image */}
            <motion.div 
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-2 bg-gradient-to-br from-primary via-secondary to-accent shadow-[0_20px_60px_rgba(0,0,0,0.5)] transform-gpu"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-bg border-4 border-dark-bg">
                <Image
                  src="https://avatars.githubusercontent.com/u/183754760?s=400&v=4"
                  alt={hero.name}
                  width={400}
                  height={400}
                  priority
                  className="object-cover w-full h-full rounded-full scale-110 hover:scale-125 transition-transform duration-700 rounded-image"
                />
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-6 -right-10 glass px-4 py-2 rounded-2xl flex items-center gap-3 text-sm font-bold text-white shadow-2xl"
                animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <Blocks size={18} className="text-primary" />
                <span>Next.js</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-12 glass px-4 py-2 rounded-2xl flex items-center gap-3 text-sm font-bold text-white shadow-2xl"
                animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              >
                <Cpu size={18} className="text-accent" />
                <span>Agentic AI</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-10 glass px-4 py-2 rounded-2xl flex items-center gap-3 text-sm font-bold text-white shadow-2xl"
                animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <Terminal size={18} className="text-secondary" />
                <span>FastAPI</span>
              </motion.div>
            </motion.div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
