'use client';

import Card from '@/app/components/Card';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  'Frontend Development',
  'Full Responsive Website Design',
  'Next.js Development',
  'UI Conversion from Figma',
  'Modern Landing Pages',
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-800/60 glass mx-4 md:mx-16 rounded-2xl">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-primary mb-8 text-center"
          whileHover={{ scale: 1.02 }}
        >Services</motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Card key={s}>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-primary" />
                <span className="text-lg text-gray-200">{s}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
