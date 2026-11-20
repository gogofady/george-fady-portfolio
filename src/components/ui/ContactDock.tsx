import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { MessageSquare, Mail, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

export const ContactDock: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerCelebration = () => {
    confetti({
      particleCount: 55,
      spread: 75,
      origin: { y: 0.9 },
      colors: ['#e11d48', '#0284c7', '#f59e0b', '#10b981']
    });
  };

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-12 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-2 p-2 rounded-full bg-white/80 backdrop-blur-2xl border border-white/80 shadow-2xl shadow-slate-300/60">
        
        <a
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={triggerCelebration}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-emerald-600/30 hover:scale-105 transition-all group"
          title="Direct WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200/80 hover:scale-110 transition-all"
          title="Send Email"
        >
          <Mail className="w-4 h-4" />
        </a>

        <a
          href={`tel:${PERSONAL_INFO.phone}`}
          className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200/80 hover:scale-110 transition-all"
          title="Direct Call (+20 128 177 0085)"
        >
          <Phone className="w-4 h-4" />
        </a>

        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200/80 hover:scale-110 transition-all"
          title="LinkedIn Profile"
        >
          <LinkedinIcon />
        </a>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200/80 hover:scale-110 transition-all"
          title="GitHub Profile"
        >
          <GithubIcon />
        </a>

      </div>
    </div>
  );
};
export default ContactDock;