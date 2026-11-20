import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3.5 pb-2 transition-all duration-500 ${
        scrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-8 pointer-events-none'
      }`}
    >
      <nav className="flex items-center justify-between gap-6 px-6 py-3 transition-all duration-300 border bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-xl shadow-slate-200/50 max-w-5xl w-full rounded-2xl">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 to-sky-600 text-white font-bold text-xs flex items-center justify-center font-mono shadow-md">
            GF
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 group-hover:text-sky-600 transition-colors">
              George Fady
            </span>
            <span className="text-[10px] text-sky-700 font-mono tracking-widest uppercase font-semibold">
              Creative 3D Dev
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-600">
          <a href="#projects" className="hover:text-sky-600 transition-colors">3D Projects</a>
          <a href="#offer" className="hover:text-rose-600 transition-colors">Zero-Risk Model</a>
          <a href="#experience" className="hover:text-sky-600 transition-colors">Security & Cloud</a>
          <a href="#skills" className="hover:text-sky-600 transition-colors">Stack</a>
        </div>

        <a
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md hover:scale-105"
        >
          <span>Get In Touch</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </nav>
    </header>
  );
};
export default Navbar;