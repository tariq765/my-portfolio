'use client';

import Card from '@/app/components/Card';
import Image from 'next/image';
import Button from '@/app/components/Button';
import { projects } from '@/lib/data';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900/80 glass mx-4 md:mx-16 rounded-2xl">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-primary mb-10 text-center"
          whileHover={{ scale: 1.02 }}
        >Projects</motion.h2>

        <div className="space-y-12">
          {/* Featured Project */}
          {projects.slice(0, 1).map((p) => (
            <div key={p.title} className="glass p-8 rounded-2xl overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl bg-gray-800/50 shadow-2xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    priority
                    unoptimized
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    Featured Project
                  </div>
                  <h3 className="text-4xl font-bold text-white">{p.title}</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-200"
                      >{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button href={p.github} className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold">
                      <Github size={20} /> View Source
                    </Button>
                    <Button href={p.demo} className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/5">
                      <ExternalLink size={20} /> Live Preview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(1).map((p) => (
              <Card key={p.title}>
                <div className="relative h-56 w-full mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-3">{p.title}</h3>
                <p className="text-gray-300 mb-5 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                    >{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button href={p.github} className="flex items-center gap-2 text-sm">
                    <Github size={16} /> Code
                  </Button>
                  <Button href={p.demo} className="flex items-center gap-2 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
