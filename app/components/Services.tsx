'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Figma, 
  Rocket, 
  Zap,
  Layers
} from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building high-performance, interactive user interfaces with React and Next.js.',
    icon: <Code2 size={28} />,
    color: 'text-primary'
  },
  {
    title: 'Responsive Web Design',
    description: 'Ensuring your website looks perfect on every device, from mobile to desktop.',
    icon: <Smartphone size={28} />,
    color: 'text-secondary'
  },
  {
    title: 'Next.js Solutions',
    description: 'Leveraging Server Components and App Router for SEO-friendly, fast applications.',
    icon: <Globe size={28} />,
    color: 'text-accent'
  },
  {
    title: 'Figma to Code',
    description: 'Pixel-perfect conversion of your design files into clean, maintainable Tailwind CSS.',
    icon: <Figma size={28} />,
    color: 'text-primary'
  },
  {
    title: 'Modern Landing Pages',
    description: 'Creating high-conversion landing pages that capture attention and drive results.',
    icon: <Rocket size={28} />,
    color: 'text-secondary'
  },
  {
    title: 'Performance Optimization',
    description: 'Optimizing web applications for maximum speed and excellent Core Web Vitals.',
    icon: <Zap size={28} />,
    color: 'text-accent'
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="services">
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-4 p-3 rounded-2xl bg-white/5 border border-white/10"
        >
          <Layers size={24} className="text-accent animate-pulse" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          What I <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Deliver</span>
        </h2>
        <p className="text-gray-400 max-w-2xl font-medium">
          Comprehensive development services tailored to your specific needs and goals.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glass p-8 rounded-[2rem] border-2 border-white/5 hover:border-primary/20 transition-all group flex flex-col h-full"
          >
            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed font-medium flex-1">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
