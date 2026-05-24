'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/data';

export default function About() {
  return (
    <section className="py-20 bg-gray-900/80 backdrop-blur-sm glass mx-4 md:mx-16 rounded-2xl">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-primary mb-6"
          whileHover={{ scale: 1.02 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {about}
        </motion.p>
      </div>
    </section>
  );
}
