import React, { useState, useEffect } from 'react';

const IMAGES_TIER_1 = [
  'https://i.pinimg.com/736x/80/f2/69/80f269c5b35adba4ee26ead0151a77b8.jpg',
  'https://i.pinimg.com/1200x/da/f4/4c/daf44c2681a428637e78434011397a9e.jpg',
  'https://i.pinimg.com/736x/03/27/38/0327387772fa2a4c8d89d4d41b726194.jpg',
  'https://i.pinimg.com/1200x/6b/fb/e5/6bfbe5a2ee07439f25f53bf823842277.jpg',
  'https://i.pinimg.com/736x/ba/4a/b8/ba4ab8f50865484b36a1d9bf15e96635.jpg',
  'https://i.pinimg.com/736x/99/6c/17/996c17b2636141f88a5d0a0163cdd3c6.jpg',
  'https://i.pinimg.com/736x/50/ff/bd/50ffbd1d2d9b33310a159f17b6649996.jpg',
];

const IMAGES_TIER_2 = [
  'https://i.pinimg.com/736x/80/f2/69/80f269c5b35adba4ee26ead0151a77b8.jpg',
  'https://i.pinimg.com/1200x/da/f4/4c/daf44c2681a428637e78434011397a9e.jpg',
  'https://i.pinimg.com/736x/03/27/38/0327387772fa2a4c8d89d4d41b726194.jpg',
  'https://i.pinimg.com/1200x/6b/fb/e5/6bfbe5a2ee07439f25f53bf823842277.jpg',
  'https://i.pinimg.com/736x/ba/4a/b8/ba4ab8f50865484b36a1d9bf15e96635.jpg',
  'https://i.pinimg.com/736x/99/6c/17/996c17b2636141f88a5d0a0163cdd3c6.jpg',
  'https://i.pinimg.com/736x/50/ff/bd/50ffbd1d2d9b33310a159f17b6649996.jpg',
];

const CylinderCarousel: React.FC = () => {
  const angleStep = 360 / IMAGES_TIER_1.length;
  const [rotation, setRotation] = useState({ x: -12, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (timeoutId) window.cancelAnimationFrame(timeoutId);
      timeoutId = window.requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 30; // Slightly reduced range for stability
        const y = (e.clientY / innerHeight - 0.5) * -15;
        setRotation({ x: -12 + y, y: x });
      });
    };

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => {
      if (timeoutId) window.cancelAnimationFrame(timeoutId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none perspective-[2500px]">
      <div 
        className="relative w-full h-full flex items-center justify-center will-change-transform transition-transform duration-1000 ease-out"
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translate3d(0,0,0)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          className="relative w-[180px] md:w-[350px] h-[400px] md:h-[700px] preserve-3d animate-spin-cylinder"
          style={{ 
            animationPlayState: isHovering ? 'paused' : 'running'
          }}
        >
          {/* Tier 1 (Upper) */}
          {IMAGES_TIER_1.map((src, i) => (
            <div
              key={`t1-${i}`}
              className="absolute inset-x-0 top-0 h-[190px] md:h-[340px] backface-hidden border border-white/10 bg-[#111111] overflow-hidden shadow-2xl group pointer-events-auto cursor-none transition-all duration-500"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                transform: `rotateY(${i * angleStep}deg) translateZ(var(--cyl-radius)) translate3d(0,0,0)`,
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
              }}
            >
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open carousel image ${i + 1}`}
                className="absolute inset-0 block"
              >
                <img 
                  src={src} 
                  alt={`art-t1-${i}`} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-125"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E6FF00]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="absolute top-4 left-4 flex flex-col items-start gap-1">
                  <span className="bg-white/10 backdrop-blur-md text-white text-[8px] font-black px-2 py-1 uppercase tracking-[0.2em] border border-white/20 font-mono">
                    NODE_0{i}
                  </span>
                  <div className="w-1 h-8 bg-[#E6FF00] opacity-0 group-hover:opacity-100 transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100"></div>
                </div>
              </a>
            </div>
          ))}

          {/* Tier 2 (Lower) */}
          {IMAGES_TIER_2.map((src, i) => (
            <div
              key={`t2-${i}`}
              className="absolute inset-x-0 bottom-0 h-[190px] md:h-[340px] backface-hidden border border-white/10 bg-[#111111] overflow-hidden shadow-2xl group pointer-events-auto cursor-none transition-all duration-500"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                transform: `rotateY(${i * angleStep + (angleStep/2)}deg) translateZ(var(--cyl-radius)) translate3d(0,0,0)`,
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
              }}
            >
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open carousel image ${i + 1 + IMAGES_TIER_1.length}`}
                className="absolute inset-0 block"
              >
                <img 
                  src={src} 
                  alt={`art-t2-${i}`} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-125"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E6FF00]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1">
                  <div className="w-1 h-8 bg-[#E6FF00] opacity-0 group-hover:opacity-100 transition-all duration-500 origin-bottom scale-y-0 group-hover:scale-y-100"></div>
                  <span className="bg-[#E6FF00] text-[#111111] text-[8px] font-black px-2 py-1 uppercase tracking-[0.2em] font-mono shadow-[0_0_15px_#E6FF00]">
                    CORE_0{i}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin-cylinder {
          from { transform: rotateY(0deg) translate3d(0,0,0); }
          to { transform: rotateY(360deg) translate3d(0,0,0); }
        }
        .animate-spin-cylinder {
          animation: spin-cylinder 120s linear infinite;
          will-change: transform;
          transform-style: preserve-3d;
        }
        @media (max-width: 768px) {
           .animate-spin-cylinder {
              animation-duration: 80s;
           }
        }
      `}</style>
    </div>
  );
};

export default CylinderCarousel;
