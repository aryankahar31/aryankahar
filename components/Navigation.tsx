import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Power, Activity, Wifi, Battery, ChevronRight, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../constants';

const sections = [
  { id: 'hero', label: '01 INDEX', desc: 'Main terminal entrance' },
  { id: 'about', label: '02 ABOUT', desc: 'Studio philosophy & bio' },
  { id: 'projects', label: '03 WORK', desc: 'Active project archives' },
  { id: 'skills', label: '04 STACK', desc: 'Capability matrix' },
  { id: 'experience', label: '05 LEGACY', desc: 'Career milestones' }
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 500);
  };

  return (
    <>
      {/* Top Left Branding */}
      <div className="fixed top-6 md:top-10 left-6 md:left-10 z-[60] mix-blend-difference text-white flex gap-4 items-start pointer-events-none select-none">
        <div className="w-[1px] h-8 bg-white/40"></div>
        <p className="text-[10px] font-black font-mono tracking-tighter leading-none uppercase">
          ARYAN KAHAR<br/>
          <span className="opacity-50 text-[#E6FF00]">STUDIO V.25</span>
        </p>
      </div>

      {/* Menu Trigger */}
      <div className="fixed top-6 md:top-10 right-6 md:right-10 z-[60] mix-blend-difference">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-4 group outline-none"
          aria-label="Toggle Menu"
        >
          <span className="text-[10px] font-black text-white uppercase tracking-[0.4em] font-mono hidden sm:inline">
            {isOpen ? '[ EXIT ]' : '[ MENU ]'}
          </span>
          <div className={`w-12 h-12 border border-white/20 flex items-center justify-center transition-all duration-500 bg-white/5 backdrop-blur-md shadow-2xl ${isOpen ? 'rotate-90 border-[#E6FF00] scale-110' : 'group-hover:border-[#E6FF00]'}`}>
            {isOpen ? <X size={18} className="text-[#E6FF00]" /> : <div className="w-2 h-2 bg-[#E6FF00] rounded-full animate-pulse shadow-[0_0_12px_#E6FF00]"></div>}
          </div>
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-[#111111] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
        
        <div className="h-full flex flex-col justify-center px-6 md:px-24 overflow-y-auto pt-24 pb-12">
          <div className="max-w-7xl w-full mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                {/* Main Navigation Links */}
                <div className="lg:col-span-8 space-y-4 md:space-y-8">
                  <p className="text-[10px] font-black text-white/20 tracking-[1em] uppercase mb-4 font-mono">SITE_INDEX</p>
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className="group flex items-baseline gap-4 md:gap-8 w-full text-left outline-none py-2"
                    >
                      <span className="text-[9px] md:text-sm font-black text-white/20 tracking-widest font-mono shrink-0">{section.label.split(' ')[0]}</span>
                      <div className="flex-1 border-b border-white/5 pb-4 md:pb-6 group-hover:border-[#E6FF00] transition-all duration-500 relative overflow-hidden">
                        <h2 className="text-3xl sm:text-4xl md:text-8xl font-heavy text-white uppercase group-hover:text-[#E6FF00] group-hover:translate-x-4 transition-all duration-700 leading-none tracking-tighter">
                          {section.label.split(' ')[1]}
                        </h2>
                        <div className="flex items-center gap-2 mt-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity font-mono">
                          <ChevronRight size={10} className="text-[#E6FF00]" />
                          <p className="text-[9px] md:text-xs font-black text-white/40 uppercase tracking-widest">
                            {section.desc}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="text-[#E6FF00] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500 hidden lg:block shrink-0" size={48} />
                    </button>
                  ))}
                </div>
                
                {/* Secondary Sidebar Diagnostics */}
                <div className="lg:col-span-4 flex flex-col justify-between pt-12 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/5 lg:pl-16">
                   <div className="space-y-12">
                     <div className="bg-white/5 p-6 border border-white/10 shadow-2xl">
                       <div className="flex items-center justify-between mb-8">
                         <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em] font-mono">CORE_DIAGNOSTICS</p>
                         <div className="flex gap-4 text-white/20">
                            <Wifi size={14} className="text-[#E6FF00] animate-pulse" />
                            <Battery size={14} className="text-white/40" />
                         </div>
                       </div>
                       <div className="space-y-5">
                          <div className="flex justify-between items-center text-[10px] md:text-xs">
                             <span className="text-white/40 uppercase font-black font-mono">LINK_STATE</span>
                             <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#E6FF00]"></div>
                                <span className="text-[#E6FF00] font-black tracking-widest font-mono uppercase">ESTABLISHED</span>
                             </div>
                          </div>
                          <div className="flex justify-between items-center text-[10px] md:text-xs">
                             <span className="text-white/40 uppercase font-black font-mono">IO_LATENCY</span>
                             <span className="text-white font-black tracking-widest font-mono">12.4MS_SEC</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] md:text-xs">
                             <span className="text-white/40 uppercase font-black font-mono">PROTOCOL</span>
                             <span className="text-white font-black tracking-widest font-mono">RSA_AES_256</span>
                          </div>
                       </div>
                     </div>

                     <div className="space-y-8">
                        <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.5em] font-mono px-2">RELAY_HANDLES</p>
                        <div className="grid grid-cols-2 gap-3">
                           <a href={`https://${PROFILE.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="flex items-center justify-between text-white text-[9px] font-black border border-white/10 px-4 py-4 hover:bg-[#E6FF00] hover:text-[#111111] hover:border-[#E6FF00] transition-all uppercase font-mono tracking-widest active:scale-95 group/link">
                              GITHUB <ArrowUpRight size={12} className="opacity-40 group-hover/link:opacity-100" />
                           </a>
                           <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="flex items-center justify-between text-white text-[9px] font-black border border-white/10 px-4 py-4 hover:bg-[#E6FF00] hover:text-[#111111] hover:border-[#E6FF00] transition-all uppercase font-mono tracking-widest active:scale-95 group/link">
                              LINKEDIN <ArrowUpRight size={12} className="opacity-40 group-hover/link:opacity-100" />
                           </a>
                           <a href={`https://${PROFILE.instagram}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram profile" className="flex items-center justify-between text-white text-[9px] font-black border border-white/10 px-4 py-4 hover:bg-[#E6FF00] hover:text-[#111111] hover:border-[#E6FF00] transition-all uppercase font-mono tracking-widest active:scale-95 group/link">
                              INSTAGRAM <ArrowUpRight size={12} className="opacity-40 group-hover/link:opacity-100" />
                           </a>
                           <a href={`https://${PROFILE.twitter}`} target="_blank" rel="noopener noreferrer" aria-label="X profile" className="flex items-center justify-between text-white text-[9px] font-black border border-white/10 px-4 py-4 hover:bg-[#E6FF00] hover:text-[#111111] hover:border-[#E6FF00] transition-all uppercase font-mono tracking-widest active:scale-95 group/link">
                              X / TWITTER <ArrowUpRight size={12} className="opacity-40 group-hover/link:opacity-100" />
                           </a>
                        </div>
                     </div>
                   </div>
                   
                   <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="relative">
                            <Power size={14} className="text-[#E6FF00] animate-pulse" />
                            <div className="absolute inset-0 bg-[#E6FF00] blur-md opacity-20"></div>
                         </div>
                         <span className="text-[8px] md:text-[9px] font-black tracking-[0.4em] uppercase font-mono text-white/60">SESSION_ACTIVE_00x2</span>
                      </div>
                      <Activity size={14} className="text-white/20" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
