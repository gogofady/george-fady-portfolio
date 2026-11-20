import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { InteractiveHeadScene } from '../3d/InteractiveHeadScene';
import { MessageSquare, ArrowUpRight, ShieldCheck, Award, Sparkles, ChevronDown } from 'lucide-react';
import { BorderBeam } from './BorderBeam';
import { NumberTicker } from './NumberTicker';
import { ShinyText } from './ShinyText';

export const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(Math.max(scrollY / 450, 0), 1);
  const georgeOpacity = Math.min(progress * 1.5, 1);
  const georgeTranslateY = (1 - progress) * 120;
  const leftOpacity = Math.min(progress * 1.4, 1);
  const leftTranslateX = (1 - progress) * -90;
  const leftTranslateY = (1 - progress) * 40;
  const rightOpacity = Math.min(progress * 1.4, 1);
  const rightTranslateX = (1 - progress) * 90;
  const rightTranslateY = (1 - progress) * 40;
  const titleScale = 1.0 - progress * 0.18;
  const titleTranslateY = -progress * 25;

  return (
    <section id="hero" className="relative min-h-[112vh] pt-14 pb-20 flex flex-col justify-start items-center px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-rose-200/40 via-pink-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-bl from-sky-200/40 via-cyan-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[900px] h-72 bg-gradient-to-t from-slate-200/40 via-rose-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div
        className="hero-title w-full min-h-[32vh] flex flex-col justify-center items-center text-center pt-8 sm:pt-14 pb-4 z-20 select-none"
        style={{
          transform: `translateY(${titleTranslateY}px) scale(${titleScale})`
        }}
      >
        <h1 data-enter className="text-[13vw] sm:text-[13.5vw] font-black tracking-[0.05em] uppercase leading-none drop-shadow-[0_15px_30px_rgba(15,23,42,0.12)] select-none">
          <ShinyText text="PORTFOLIO" speed={4.5} />
        </h1>

        <div data-enter className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-5 text-xs sm:text-sm font-mono uppercase tracking-[0.35em] font-semibold">
          <span className="text-rose-600 font-bold">Creative 3D WebGL</span>
          <span className="text-slate-400">•</span>
          <span className="text-sky-600 font-bold">Zero-Trust Infrastructure</span>
        </div>
      </div>

      <div
        className="hero-scroll-cue mt-4 sm:mt-6 flex flex-col items-center gap-2 pointer-events-none z-20"
        style={{
          opacity: Math.max(0, 1 - progress * 3.5),
          transform: `translateY(${progress * -30}px)`
        }}
      >
        <div className="px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-[11px] font-mono uppercase tracking-[0.3em] text-slate-700 font-semibold shadow-md shadow-slate-200/50">
          Scroll down to reveal
        </div>
        <ChevronDown className="w-5 h-5 text-rose-500 animate-bounce" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10 mt-6 sm:mt-10">
        
        <div
          className="lg:col-span-4 flex flex-col items-start space-y-6 text-left order-2 lg:order-1"
          style={{
            transform: `translate(${leftTranslateX}px, ${leftTranslateY}px)`,
            opacity: leftOpacity,
            pointerEvents: leftOpacity > 0.3 ? 'auto' : 'none'
          }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200 text-xs font-mono text-sky-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="tracking-wider uppercase font-semibold">Senior 3D Creative Engineer</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              George Fady<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-600 to-sky-600 block text-3xl sm:text-4xl lg:text-5xl font-light">Mikhail</span>
            </h2>
            <p className="text-xs text-sky-700 font-mono tracking-widest font-bold">
              جورج فادي ميخائيل
            </p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed font-normal">
            Merging <strong className="text-sky-700 font-semibold">120 FPS Three.js & WebGL</strong> spatial interactions with battle-hardened <strong className="text-rose-600 font-semibold">Sangfor HCI & NGAF</strong> zero-trust network infrastructure.
          </p>

          <div className="flex flex-col gap-2.5 pt-1 w-full">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-rose-200 text-xs text-rose-900 shadow-sm shadow-rose-100/50">
              <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
              <span className="font-semibold">Sangfor Certified HCI-P & NGAF-P</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 border border-sky-200 text-xs text-sky-900 shadow-sm shadow-sky-100/50">
              <Award className="w-4 h-4 text-sky-600 shrink-0" />
              <span className="font-semibold">CompTIA Security+ & Cisco CCNA</span>
            </div>
          </div>
        </div>

        <div
          className="lg:col-span-4 relative flex items-center justify-center order-1 lg:order-2"
          style={{
            transform: `translateY(${georgeTranslateY}px)`,
            opacity: georgeOpacity,
            pointerEvents: georgeOpacity > 0.2 ? 'auto' : 'none'
          }}
        >
          <div className="w-full relative z-10">
            <InteractiveHeadScene />
          </div>
        </div>

        <div
          className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-6 text-left lg:text-right order-3"
          style={{
            transform: `translate(${rightTranslateX}px, ${rightTranslateY}px)`,
            opacity: rightOpacity,
            pointerEvents: rightOpacity > 0.3 ? 'auto' : 'none'
          }}
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-700 uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Zero-Risk Prototype Model</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              "See your 3D website come to life before committing."
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              I build an exclusive interactive 3D prototype for your brand first. If you are stunned by its beauty and performance — you buy it. 100% Risk-Free.
            </p>
          </div>

          <div className="pt-2 w-full lg:w-auto relative">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-600 via-red-600 to-sky-600 hover:from-rose-500 hover:to-sky-500 text-white font-bold text-sm transition-all duration-200 shadow-xl shadow-rose-600/25 hover:scale-105 w-full sm:w-auto border border-white/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <BorderBeam size={100} duration={6} colorFrom="#f43f5e" colorTo="#0284c7" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5 pt-3 w-full text-left lg:text-right">
            <div>
              <div className="text-2xl font-extrabold text-sky-700">
                <NumberTicker value={10} suffix="+" />
              </div>
              <div className="text-[11px] text-slate-500 font-mono font-medium">Production Sites</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-rose-600">
                <NumberTicker value={120} suffix=" FPS" />
              </div>
              <div className="text-[11px] text-slate-500 font-mono font-medium">WebGL Engine</div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
export default HeroSection;