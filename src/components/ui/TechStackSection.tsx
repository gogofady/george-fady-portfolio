import React, { useRef, useState, useEffect } from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Cpu } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const TechStackSection: React.FC = () => {
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
      { threshold: 0.18, rootMargin: '0px 0px -140px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categoryBorders = [
    'from-white/95 to-sky-50/40 border-sky-200/80 hover:border-sky-400',
    'from-white/95 to-rose-50/40 border-rose-200/80 hover:border-rose-400',
    'from-white/95 to-blue-50/40 border-blue-200/80 hover:border-blue-400',
    'from-white/95 to-amber-50/40 border-amber-200/80 hover:border-amber-400'
  ];

  const barGradients = [
    'from-sky-500 to-blue-500',
    'from-rose-500 to-pink-500',
    'from-blue-500 to-indigo-500',
    'from-amber-500 to-rose-500'
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 overflow-hidden">
      <div
        className={`text-left space-y-3 transition-all duration-[1200ms] ease-out ${
          inView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-12'
        }`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-widest font-bold">
          <Cpu className="w-3.5 h-3.5 text-rose-600" />
          <span>[ Engineering Matrix & Mastery ]</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
          Tools, Frameworks & Infrastructure
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal">
          Mastered technologies applied across interactive client frontends and enterprise cloud infrastructure.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        onMouseLeave={() => setHoveredIdx(null)}
      >
        {SKILL_CATEGORIES.map((cat, idx) => {
          const isHovered = hoveredIdx === idx;
          const hasHover = hoveredIdx !== null;
          const scaleClass = hasHover
            ? isHovered
              ? 'scale-105 z-20 shadow-2xl border-sky-400 bg-white ring-2 ring-sky-300/40 opacity-100'
              : 'scale-[0.93] z-10 opacity-50 blur-[0.2px]'
            : 'scale-100 opacity-100';

          return (
            <TiltCard
              key={idx}
              maxTilt={isHovered ? 8 : 0}
              onMouseEnter={() => setHoveredIdx(idx)}
              className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-br ${categoryBorders[idx]} border backdrop-blur-xl transition-all duration-300 ease-out space-y-6 flex flex-col justify-between shadow-xl shadow-slate-200/50 cursor-pointer ${scaleClass}`}
              style={{
                transform: inView ? undefined : 'translateY(60px)',
                opacity: inView ? undefined : 0,
                transitionDelay: inView ? undefined : `${idx * 160}ms`
              }}
            >
              <div>
                <div className="text-xs font-mono text-sky-700 font-bold mb-2">CAT-0{idx + 1} //</div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-4 pt-2">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-700 font-semibold">{skill.name}</span>
                      <span className="text-sky-700 font-mono text-xs font-bold">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${barGradients[idx]} transition-all duration-[1600ms] ease-out`}
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${idx * 150 + sIdx * 80}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
};
export default TechStackSection;