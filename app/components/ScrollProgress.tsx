'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handle = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setScroll((window.scrollY / max) * 100);
    };
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-primary/70 w-full pointer-events-none">
      <div
        className="h-full bg-primary"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
