'use client';

import { motion } from 'framer-motion';
import { hero } from '@/lib/data';
import Button from '@/app/components/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center p-8">
      <div className="max-w-2xl space-y-6">
        <motion.div
          className="relative w-40 h-40 mx-auto mb-8 rounded-full border-4 border-primary/50 overflow-hidden shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/183754760?s=400&v=4"
            alt={hero.name}
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-extrabold text-primary md:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {hero.name}
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {hero.title}
        </motion.p>
        <motion.p
          className="text-lg text-gray-400 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {hero.intro}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Button href="#contact" className="bg-primary/20 border-primary/30">
            Hire Me <ArrowRight size={16} className="ml-1 inline" />
          </Button>
          <Button href="#projects">View Projects</Button>
        </motion.div>
      </div>
    </section>
  );
}
