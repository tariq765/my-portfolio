'use client';

import Card from '@/app/components/Card';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-20 bg-gray-900/80 glass mx-4 md:mx-16 rounded-2xl">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-primary mb-8 text-center"
          whileHover={{ scale: 1.02 }}
        >Experience / Learning Journey</motion.h2>

        <Card>
          <h3 className="text-xl font-semibold text-primary mb-2">Governor Sindh IT Course Student</h3>
          <p className="text-gray-300 mb-2">Learning web development and AI, building real‑world projects, expanding from frontend into backend and AI engineering.</p>
          <span className="text-sm text-gray-400">2023 – Present</span>
        </Card>
      </div>
    </section>
  );
}
