'use client';

import Card from '@/app/components/Card';
import { skills } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800/60 glass mx-4 md:mx-16 rounded-2xl">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-primary mb-10 text-center"
          whileHover={{ scale: 1.02 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <Card>
            <h3 className="text-xl font-semibold text-primary mb-3">Frontend</h3>
            <ul className="space-y-2 text-gray-200">
              {skills.frontend.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>

          {/* Backend & Database */}
          <Card>
            <h3 className="text-xl font-semibold text-primary mb-3">Backend</h3>
            <ul className="space-y-2 text-gray-200">
              {skills.backend.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>

          {/* AI & Agents */}
          <Card>
            <h3 className="text-xl font-semibold text-primary mb-3">AI & Agents</h3>
            <ul className="space-y-2 text-gray-200">
              {skills.ai.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>

          {/* Tools & Platforms */}
          <Card>
            <h3 className="text-xl font-semibold text-primary mb-3">Tools</h3>
            <ul className="space-y-2 text-gray-200">
              {skills.tools.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
