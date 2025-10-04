'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgressWrapper() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    updateScrollProgress();

    window.addEventListener('scroll', updateScrollProgress);

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Border Frame */}
      <div className="fixed top-0 bottom-0 left-0 right-0 pt-4 pr-4 pl-4 h-full w-full pointer-events-none">
        <div className="border-t border-l border-r border-accent-soft rounded-t-md h-full w-full flex items-end">
          {/* Progress Bar */}
          <div className="h-1 w-full bg-accent-soft">
            <div 
              className="h-full bg-accent transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}