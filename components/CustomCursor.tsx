import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovering(!!isClickable);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Smooth lerping for the cursor movement
    let requestRef: number;
    const updatePosition = () => {
      setPosition(prev => ({
        x: prev.x + (targetPos.x - prev.x) * 0.25,
        y: prev.y + (targetPos.y - prev.y) * 0.25
      }));
      requestRef = requestAnimationFrame(updatePosition);
    };
    requestRef = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(requestRef);
    };
  }, [targetPos]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block" ref={cursorRef}>
      {/* Background Crosshair Lines - Very subtle */}
      <div className="absolute inset-0 mix-blend-overlay">
        <div 
          className="absolute top-0 bottom-0 w-[0.5px] bg-white opacity-10"
          style={{ transform: `translateX(${targetPos.x}px)` }}
        />
        <div 
          className="absolute left-0 right-0 h-[0.5px] bg-white opacity-10"
          style={{ transform: `translateY(${targetPos.y}px)` }}
        />
      </div>

      <div 
        className="absolute top-0 left-0 will-change-transform"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          
          {/* Main Reticle */}
          <div className={`relative flex items-center justify-center transition-transform duration-300 ease-out ${isHovering ? 'scale-125' : 'scale-100'} ${isMouseDown ? 'scale-90' : ''}`}>
            
            {/* Inner Glowing Point */}
            <div className={`w-1.5 h-1.5 bg-[#E6FF00] rounded-full shadow-[0_0_10px_#E6FF00] border border-black/50 transition-all duration-300 ${isHovering ? 'w-2.5 h-2.5' : ''}`}></div>
            
            {/* Tactical Brackets */}
            <div className={`absolute inset-[-18px] transition-all duration-500 ease-out ${isHovering ? 'rotate-90 inset-[-24px]' : 'rotate-0'}`}>
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E6FF00] opacity-80"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E6FF00] opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E6FF00] opacity-80"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#E6FF00] opacity-80"></div>
            </div>

            {/* Orbitals - Only visible when hovering */}
            <div className={`absolute w-12 h-12 border border-[#E6FF00]/10 rounded-full transition-all duration-1000 ${isHovering ? 'scale-100 opacity-100 rotate-180' : 'scale-0 opacity-0'}`}></div>
          </div>

          {/* Data Tag */}
          <div 
            className={`absolute top-8 left-8 transition-all duration-500 ${isHovering ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
          >
            <div className="flex flex-col gap-1 items-start">
              <div className="bg-[#E6FF00] text-[#111111] px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.3em] font-mono shadow-xl flex items-center gap-2">
                <span className="w-1 h-1 bg-black rounded-full animate-pulse"></span>
                LINK_STABLE
              </div>
              <div className="bg-black/80 backdrop-blur-md text-white/60 px-2 py-0.5 text-[7px] font-mono tracking-widest uppercase border border-white/10">
                POS: {Math.round(position.x)},{Math.round(position.y)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;