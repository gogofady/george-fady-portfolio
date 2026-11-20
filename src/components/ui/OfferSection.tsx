import React, { useRef, useState, useEffect } from 'react';
import { VALUE_PROPOSITION, PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUpRight, CheckCircle2, Sparkles, Layers, ShieldCheck, DollarSign, Zap } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const OfferSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -120px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = (idx: number) => {
    if (inView) return undefined;
    switch (idx) {
      case 0:
        return 'translate(-140px, -70px)';
      case 1:
        return 'translate(140px, -70px)';
      case 2:
        return 'translate(-140px, 70px)';
      case 3:
        return 'translate(140px, 70px)';
      default:
        return undefined;
    }
  };

  const featureIcons = [
    <Layers className="w-5 h-5 text-sky-600" />,
    <ShieldCheck className="w-5 h-5 text-rose-600" />,
    <DollarSign className="w-5 h-5 text-amber-600" />,
    <Zap className="w-5 h-5 text-sky-500" />
  ];

  const cardBorders = [
    'from-white/95 to-rose-50/40 border-rose-200/80 hover:border-rose-400',
    'from-white/95 to-sky-50/40 border-sky-200/80 hover:border-sky-400',
    'from-white/95 to-blue-50/40 border-blue-200/80 hover:border-blue-400',
    'from-white/95 to-amber-50/40 border-amber-200/80 hover:border-amber-400'
  ];

  return (
    <section ref={sectionRef} id="offer" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto relative overflow-hidden">
      
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-rose-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />

      <div className="rounded-3xl p-8 sm:p-14 bg-white/85 border border-slate-200/80 backdrop-blur-2xl relative overflow-hidden shadow-2xl shadow-slate-200/60">
        
        <div
          className={`max-w-2xl text-left space-y-4 transition-all duration-[1200ms] ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-widest font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>[ Partnership Framework ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            The Zero-Risk Prototype Guarantee
          </h2>

          <p className="text-lg text-rose-600 font-normal leading-relaxed">
            "{VALUE_PROPOSITION.hook}"
          </p>

          <p className="text-slate-600 text-sm leading-relaxed font-normal">
            {VALUE_PROPOSITION.description}
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {VALUE_PROPOSITION.features.map((feat, idx) => {
            const isHovered = hoveredIdx === idx;
            const hasHover = hoveredIdx !== null;
            const scaleClass = hasHover
              ? isHovered
                ? 'scale-105 z-20 shadow-2xl border-sky-400 bg-white ring-2 ring-sky-300/40 opacity-100'
                : 'scale-[0.95] z-10 opacity-55'
              : 'scale-100 opacity-100';

            return (
              <TiltCard
                key={idx}
                maxTilt={isHovered ? 6 : 0}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`p-7 rounded-2xl bg-gradient-to-br ${cardBorders[idx]} border backdrop-blur-xl transition-all duration-300 ease-out space-y-3 cursor-pointer shadow-lg shadow-slate-200/40 ${scaleClass}`}
                style={{
                  transform: inView ? undefined : getTransform(idx),
                  opacity: inView ? undefined : 0,
                  transitionDelay: inView ? undefined : `${idx * 160}ms`
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-sky-700 font-bold tracking-wider">0{idx + 1} //</div>
                  {featureIcons[idx]}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </TiltCard>
            );
          })}
        </div>

        <div
          className={`mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-[1200ms] ease-out delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center gap-3 text-left">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-xs sm:text-sm text-slate-700 font-semibold">
              No upfront lock-in. Full working 3D prototype delivered before any financial commitment.
            </div>
          </div>

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-600 via-red-600 to-sky-600 hover:from-rose-500 hover:to-sky-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-rose-600/20 transition-all hover:scale-105 border border-white/50"
          >
            <span>Request Prototype on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
export default OfferSection;