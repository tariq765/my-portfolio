'use client';

import Card from '@/app/components/Card';
import Button from '@/app/components/Button';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { socials } from '@/lib/data';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-gray-800/60 glass mx-4 md:mx-16 rounded-2xl" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-primary mb-8 text-center"
          whileHover={{ scale: 1.02 }}
        >Get in Touch</motion.h2>

        <Card>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700/50 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4 py-2 rounded bg-gray-700/50 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button 
              type="submit" 
              className="self-start"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
            
            {status === 'success' && (
              <p className="text-green-400 text-sm">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}
          </form>

          <div className="mt-6 flex gap-4 justify-center">
            <a href={`mailto:${socials.email}`} className="text-gray-300 hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
