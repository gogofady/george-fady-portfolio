import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 border-t border-slate-200/90 bg-slate-100/80 text-center relative z-10 pb-28">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-rose-600 flex items-center justify-center font-bold text-xs text-white shadow-md">
            GF
          </div>
          <span className="text-base font-bold text-slate-900 tracking-tight">George Fady Mikhail</span>
        </div>

        <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
          Crafting 120 FPS spatial web experiences, high-conversion landing pages, and hardened network security architecture.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
          <a href="#hero" className="hover:text-sky-600 transition-colors">Home</a>
          <a href="#projects" className="hover:text-sky-600 transition-colors">3D Projects</a>
          <a href="#offer" className="hover:text-rose-600 transition-colors">Zero-Risk Offer</a>
          <a href="#experience" className="hover:text-sky-600 transition-colors">Security Credentials</a>
          <a href="#skills" className="hover:text-sky-600 transition-colors">Tech Matrix</a>
        </div>

        <div className="text-[11px] text-slate-500 pt-4 border-t border-slate-200/80 flex items-center justify-center gap-1">
          <span>© {new Date().getFullYear()} George Fady Mikhail. Designed & Engineered with Three.js, React 19 & GSAP.</span>
        </div>

      </div>
    </footer>
  );
};
export default Footer;