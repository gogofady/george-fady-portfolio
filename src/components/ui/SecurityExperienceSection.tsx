import React, { useRef, useState, useEffect } from 'react';
import { EXPERIENCES, CERTIFICATIONS, PARTNER_LOGOS } from '../../data/portfolioData';
import { ShieldCheck, GraduationCap, Building2 } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const SecurityExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hoveredExpIdx, setHoveredExpIdx] = useState<number | null>(null);
  const [hoveredCertIdx, setHoveredCertIdx] = useState<number | null>(null);
  const [hoveredBrandIdx, setHoveredBrandIdx] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -140px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-20 overflow-hidden">
      
      <div
        className={`text-left space-y-3 transition-all duration-[1300ms] ease-out ${
          inView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-12'
        }`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-widest font-bold">
          <ShieldCheck className="w-4 h-4 text-rose-600" />
          <span>[ Enterprise Infrastructure & Zero Trust ]</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
          Cloud Security & Enterprise Architecture
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal">
          Hands-on virtualization engineering, hyper-converged clusters, next-gen firewalls, and production infrastructure.
        </p>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5"
        onMouseLeave={() => setHoveredBrandIdx(null)}
      >
        {PARTNER_LOGOS.map((brand, i) => {
          const isHovered = hoveredBrandIdx === i;
          const hasHover = hoveredBrandIdx !== null;
          const brandScale = hasHover
            ? isHovered
              ? 'scale-105 z-20 shadow-xl border-sky-400 bg-white opacity-100'
              : 'scale-[0.94] z-10 opacity-50'
            : 'scale-100 opacity-100';

          return (
            <TiltCard
              key={i}
              maxTilt={isHovered ? 6 : 0}
              onMouseEnter={() => setHoveredBrandIdx(i)}
              className={`p-5 rounded-2xl bg-white/90 border border-slate-200/80 transition-all duration-300 ease-out shadow-sm cursor-pointer flex flex-col items-start justify-center text-left space-y-1.5 ${brandScale}`}
              style={{
                transform: inView ? undefined : 'translateY(40px)',
                opacity: inView ? undefined : 0,
                transitionDelay: inView ? undefined : `${i * 90}ms`
              }}
            >
              <div className="text-sm font-bold text-slate-900 tracking-tight">
                {brand.name}
              </div>
              <div className="text-[11px] text-sky-700 font-mono font-medium">
                {brand.role}
              </div>
            </TiltCard>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <div
          className="lg:col-span-7 space-y-6 text-left transition-all duration-[1400ms] ease-out"
          style={{
            transform: inView ? 'translateX(0px)' : 'translateX(-90px)',
            opacity: inView ? 1 : 0
          }}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-wider font-bold">
              <Building2 className="w-4 h-4 text-rose-600" />
              <span>Career Milestones</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Professional Career History
            </h3>
          </div>

          <div
            className="space-y-6"
            onMouseLeave={() => setHoveredExpIdx(null)}
          >
            {EXPERIENCES.map((exp, idx) => {
              const isHovered = hoveredExpIdx === idx;
              const hasHover = hoveredExpIdx !== null;
              const scaleClass = hasHover
                ? isHovered
                  ? 'scale-[1.03] z-20 shadow-2xl border-sky-400 bg-white ring-2 ring-sky-300/40 opacity-100'
                  : 'scale-[0.97] z-10 opacity-50 blur-[0.2px]'
                : 'scale-100 opacity-100';

              return (
                <TiltCard
                  key={idx}
                  maxTilt={isHovered ? 6 : 0}
                  onMouseEnter={() => setHoveredExpIdx(idx)}
                  className={`p-6 sm:p-8 rounded-2xl bg-white/85 border border-slate-200/80 transition-all duration-300 ease-out space-y-4 shadow-lg shadow-slate-200/40 cursor-pointer ${scaleClass}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{exp.role}</h4>
                      <div className="text-sm sm:text-base text-sky-700 font-semibold">{exp.company}</div>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs text-slate-500 font-mono">
                    📍 {exp.location}
                  </div>

                  <div className="space-y-2 pt-2">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80 text-slate-700 text-[11px] font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        <div
          className="lg:col-span-5 space-y-6 text-left transition-all duration-[1400ms] ease-out delay-150"
          style={{
            transform: inView ? 'translateX(0px)' : 'translateX(90px)',
            opacity: inView ? 1 : 0
          }}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-600 uppercase tracking-wider font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Accreditations & Credentials</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Verified Certifications
            </h3>
          </div>

          <div
            className="space-y-4"
            onMouseLeave={() => setHoveredCertIdx(null)}
          >
            {CERTIFICATIONS.map((cert, idx) => {
              const isHovered = hoveredCertIdx === idx;
              const hasHover = hoveredCertIdx !== null;
              const certScale = hasHover
                ? isHovered
                  ? 'scale-[1.03] z-20 shadow-2xl border-rose-400 bg-white ring-2 ring-rose-200/50 opacity-100'
                  : 'scale-[0.97] z-10 opacity-55'
                : 'scale-100 opacity-100';

              return (
                <TiltCard
                  key={idx}
                  maxTilt={isHovered ? 6 : 0}
                  onMouseEnter={() => setHoveredCertIdx(idx)}
                  className={`p-6 rounded-2xl bg-white/85 border border-slate-200/80 transition-all duration-300 ease-out space-y-2.5 shadow-lg shadow-slate-200/40 cursor-pointer ${certScale}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-rose-600 uppercase tracking-widest font-bold">
                      {cert.issuer}
                    </span>
                    {cert.year && (
                      <span className="text-xs font-mono text-slate-500 font-medium">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {cert.name}
                  </h4>

                  {cert.level && (
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-[11px] font-mono font-medium">
                      {cert.level}
                    </div>
                  )}
                </TiltCard>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
};
export default SecurityExperienceSection;