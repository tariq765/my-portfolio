'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function BackgroundGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  // Additional parallax effect for blobs
  const parallaxX = useTransform(glowX, (value) => value * 0.05);
  const parallaxY = useTransform(glowY, (value) => value * 0.05);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* Primary Mouse-Follow Glow */}
      <motion.div
        className="hidden md:block absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/10 blur-[100px]"
        style={{
          x: glowX,
          y: glowY,
        }}
      />

      {/* Ambient Floating Blobs */}
      <motion.div 
        className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] max-w-[700px] rounded-full bg-primary/10 blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ x: parallaxX, y: parallaxY }}
      />
      
      <motion.div 
        className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-secondary/10 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div 
        className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-accent/5 blur-[100px]"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Grid Pattern overlay with refined mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      
      {/* Radial Gradient for center depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#030712_80%)]" />
    </div>
  );
}
