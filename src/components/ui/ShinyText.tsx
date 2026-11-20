import React from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
  shimmerWidth?: number;
  speed?: number;
  gradient?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  className = '',
  shimmerWidth = 100,
  speed = 4,
  gradient = 'linear-gradient(110deg, #0f172a 32%, #0284c7 48%, #e11d48 55%, #0f172a 68%)',
}) => {
  return (
    <span
      className={`inline-block relative text-transparent bg-clip-text select-none ${className}`}
      style={{
        backgroundImage: gradient,
        backgroundSize: '250% 100%',
        animation: `shiny-sweep ${speed}s linear infinite`,
      }}
    >
      {text}
      <style>{`
        @keyframes shiny-sweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </span>
  );
};

export default ShinyText;