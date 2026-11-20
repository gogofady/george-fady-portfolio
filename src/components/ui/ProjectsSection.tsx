import React, { useRef, useState, useEffect } from 'react';
import { JewelryModelViewer } from '../3d/JewelryModelViewer';
import { ArrowUpRight, Video, Box } from 'lucide-react';
import { BorderBeam } from './BorderBeam';

export const ProjectsSection: React.FC = () => {
  const p1Ref = useRef<HTMLDivElement>(null);
  const p2Ref = useRef<HTMLDivElement>(null);
  const [p1InView, setP1InView] = useState(false);
  const [p2InView, setP2InView] = useState(false);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setP1InView(true);
    }, { threshold: 0.18, rootMargin: '0px 0px -140px 0px' });

    const obs2 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setP2InView(true);
    }, { threshold: 0.18, rootMargin: '0px 0px -140px 0px' });

    if (p1Ref.current) obs1.observe(p1Ref.current);
    if (p2Ref.current) obs2.observe(p2Ref.current);

    return () => {
      obs1.disconnect();
      obs2.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-24 overflow-hidden">
      
      <div className="text-left space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-700 uppercase tracking-widest font-bold">
          <Box className="w-3.5 h-3.5 text-rose-600" />
          <span>[ Selected Production Works ]</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
          Commercial 3D & Web Architectures
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal">
          Real client projects deployed with custom Three.js WebGL rendering, physics animations, and resilient cloud architectures.
        </p>
      </div>

      <div
        ref={p1Ref}
        className="rounded-3xl p-6 sm:p-12 bg-white/85 border border-slate-200/80 backdrop-blur-2xl shadow-2xl shadow-slate-200/60 relative overflow-hidden group"
      >
        <BorderBeam size={260} duration={14} colorFrom="#f43f5e" colorTo="#0284c7" />

        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div
            className="lg:col-span-6 space-y-6 text-left transition-all duration-[1400ms] ease-out"
            style={{
              transform: p1InView ? 'translateX(0px)' : 'translateX(-130px)',
              opacity: p1InView ? 1 : 0
            }}
          >
            <div className="flex items-center gap-2 text-xs font-mono text-sky-700">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="font-bold tracking-wider">3D WEBGL E-COMMERCE • MORSEACCESSORY.COM</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Morse Accessory
            </h3>

            <p className="text-base sm:text-lg text-rose-600 font-medium">
              High-vibe luxury personalized jewelry with real-time 3D assembly animation.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Engineered with React 19, Three.js, GSAP, and Lenis smooth scrolling. The chain links, beads, and Morse dashes smoothly assemble and disassemble in 3D space as visitors scroll through the story.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Three.js', 'React 19', 'GSAP ScrollTrigger', 'Lenis Smooth Scroll', 'GLB Models'].map((t, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-200/90 text-slate-700 text-xs font-mono font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <a
                href="https://morseaccessory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm transition-all shadow-xl shadow-rose-600/25 hover:scale-105 border border-white/50"
              >
                <span>Launch morseaccessory.com</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-6 space-y-4 transition-all duration-[1400ms] ease-out delay-150"
            style={{
              transform: p1InView ? 'translateX(0px)' : 'translateX(130px)',
              opacity: p1InView ? 1 : 0
            }}
          >
            <JewelryModelViewer />

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-white/90 border border-rose-200/80 shadow-sm flex items-center gap-3">
                <Video className="w-4 h-4 text-rose-600 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Gold Bracelet 3D Loop</div>
                  <div className="text-[10px] text-slate-500 font-mono">Real-time studio light</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/90 border border-sky-200/80 shadow-sm flex items-center gap-3">
                <Video className="w-4 h-4 text-sky-600 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Silver Necklace 3D Loop</div>
                  <div className="text-[10px] text-slate-500 font-mono">Scroll progression sync</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div
        ref={p2Ref}
        className="rounded-3xl p-6 sm:p-12 bg-white/85 border border-slate-200/80 backdrop-blur-2xl shadow-2xl shadow-slate-200/60 relative overflow-hidden group"
      >
        <BorderBeam size={260} duration={14} colorFrom="#0284c7" colorTo="#e11d48" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div
            className="lg:col-span-6 order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group transition-all duration-[1400ms] ease-out"
            style={{
              transform: p2InView ? 'translateX(0px)' : 'translateX(-130px)',
              opacity: p2InView ? 1 : 0
            }}
          >
            <img
              src="/assets/projects/stg_1.png"
              alt="Saint George Co. Luxury Furniture"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-left">
                <div className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest font-bold">HOSPITALITY FF&E</div>
                <div className="text-lg font-bold text-white">Saint George Furniture Co.</div>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left transition-all duration-[1400ms] ease-out delay-150"
            style={{
              transform: p2InView ? 'translateX(0px)' : 'translateX(130px)',
              opacity: p2InView ? 1 : 0
            }}
          >
            <div className="flex items-center gap-2 text-xs font-mono text-sky-700">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="font-bold tracking-wider">HOSPITALITY & COMMERCIAL • STGFURNITURE.COM</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Saint George Co.
            </h3>

            <p className="text-base sm:text-lg text-sky-700 font-medium">
              Premier commercial FF&E luxury furniture showcase for global hotel chains.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Engineered with a high-performance visual catalog, dynamic project galleries, 3D spatial lighting shaders, automated Python CI/CD deployment workflows, and YouTube hospitality showcases.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Custom JS Engine', '3D Motion Shaders', 'WordPress API', 'Python Automation', 'CI/CD Pipeline'].map((t, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-200/90 text-slate-700 text-xs font-mono font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <a
                href="https://stgfurniture.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-xl shadow-sky-600/25 hover:scale-105 border border-white/50"
              >
                <span>Launch stgfurniture.com</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
export default ProjectsSection;