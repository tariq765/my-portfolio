'use client';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className={`glass p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
