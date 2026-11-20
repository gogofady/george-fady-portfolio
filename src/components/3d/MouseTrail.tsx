import React, { useEffect, useState } from 'react';

export const MouseTrail: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest('a, button, input, [role="button"]');
        setIsPointer(!!isClickable);
      }
    };

    let animationFrameId: number;
    const animate = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrail({ x: currentX, y: currentY });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          opacity: pos.x < 0 ? 0 : 0.9
        }}
      />
      <div
        className={`fixed rounded-full border border-white/30 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out backdrop-blur-[1px] ${
          isPointer
            ? 'w-12 h-12 border-cyan-400/80 bg-cyan-400/5 scale-110'
            : 'w-8 h-8 scale-100'
        }`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          opacity: trail.x < 0 ? 0 : 0.6
        }}
      />
    </div>
  );
};
export default MouseTrail;