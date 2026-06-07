'use client';

import Button from '@/app/components/Button';
import { Mail, Github, Linkedin, MessageCircle, Send, MapPin, Phone } from 'lucide-react';
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
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: <Mail className="text-primary" />, label: 'Email', value: socials.email, href: `mailto:${socials.email}` },
    { icon: <MessageCircle className="text-secondary" />, label: 'WhatsApp', value: '+92 340 2053859', href: socials.whatsapp },
    { icon: <MapPin className="text-accent" />, label: 'Location', value: 'Karachi, Pakistan', href: '#' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="contact">
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-4 p-3 rounded-2xl bg-white/5 border border-white/10"
        >
          <Send size={24} className="text-primary animate-pulse" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-gray-400 max-w-2xl font-medium">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-6 p-6 glass rounded-3xl hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{info.label}</p>
                <p className="text-lg font-bold text-gray-200">{info.value}</p>
              </div>
            </motion.a>
          ))}

          <div className="pt-8 flex gap-4">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all">
              <Github size={20} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          className="lg:col-span-7 glass p-8 md:p-10 rounded-[2.5rem] border-2 border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Your Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl glass-input text-white outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="How can I help?"
                  className="w-full px-6 py-4 rounded-2xl glass-input text-white outline-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 ml-1">Message</label>
              <textarea
                placeholder="Write your message here..."
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl glass-input text-white outline-none resize-none"
              />
            </div>

            <Button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-5 bg-gradient-to-r from-primary via-secondary to-accent text-white font-black text-lg shadow-[0_10px_30px_rgba(34,211,238,0.2)] rounded-2xl flex items-center justify-center gap-3"
            >
              {status === 'loading' ? 'Sending Magic...' : (
                <>Send Message <Send size={20} /></>
              )}
            </Button>
            
            {status === 'success' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center font-bold"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-center font-bold"
              >
                ✕ Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
