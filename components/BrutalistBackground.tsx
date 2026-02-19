import React from 'react';

const BrutalistBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-[#F2F2F2] will-change-contents">
      {/* Neon Gradient bottom rise */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] opacity-30 bg-gradient-to-t from-[#E6FF00] to-transparent"></div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Editorial Grid Overlay - Reduced columns on mobile for performance */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-12 px-4 md:px-12">
        {Array.from({ length: 13 }).map((_, i) => (
          <div key={i} className={`h-full border-r border-[#111111]/5 last:border-r-0 relative ${i > 4 ? 'hidden md:block' : ''}`}>
            <div className="absolute top-1/4 left-full -translate-x-1/2 crosshair opacity-20 md:opacity-100"></div>
            <div className="absolute top-3/4 left-full -translate-x-1/2 crosshair opacity-20 md:opacity-100"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrutalistBackground;