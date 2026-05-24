'use client';

import { motion } from 'framer-motion';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Button({ children, className = '', href, ...rest }: Props) {
  const base = `px-6 py-3 rounded-xl font-medium transition-colors border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm`;

  const content = (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} {...rest as any}>
        {content}
      </a>
    );
  }

  return (
    <button {...rest}>
      {content}
    </button>
  );
}
