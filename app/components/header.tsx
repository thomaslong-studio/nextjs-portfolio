"use client";

import Link from 'next/link';
import AnimatedLogoType from './animated-logo-type';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 pt-4 pl-4 pr-4 z-20">
      <div className={`flex justify-between items-center p-4 transition-all duration-200 border ${isScrolled ? 'bg-[#1e1e1e99] rounded-md border-accent-soft backdrop-blur-lg' : 'bg-transparent border-transparent'}`}>
        <Link 
        href="/"
        className="flex isolate">
          <AnimatedLogoType />
        </Link>
        <Link
          href="#contact"
          className="flex text-xl items-center px-6 py-2 text-link-green border border-link-green bg-transparent hover:bg-link-green/[0.08] font-heading cursor-pointer transition-transform duration-200 ease-out transform shadow-[0_0_0_rgba(0,0,0,0)] hover:-translate-y-0.5 hover:shadow-[0_8px_14px_theme(colors.link-green/0.16)]"
        >
          say hello
        </Link>
      </div>
    </header>
  );
}