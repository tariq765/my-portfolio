'use client';

import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${smoothX}px ${smoothY}px,
      rgba(34, 211, 238, 0.15),
      transparent 80%
    )
  `;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`relative glass p-8 rounded-[2rem] overflow-hidden group border-2 border-white/5 hover:border-primary/20 transition-colors ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
