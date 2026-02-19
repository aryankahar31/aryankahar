import React, { useState, useEffect } from 'react';
import BrutalistBackground from './components/BrutalistBackground';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import CylinderCarousel from './components/CylinderCarousel';
import { PROFILE, PROJECTS, SKILLS, EXPERIENCES } from './constants';
import { ArrowUpRight, Loader2, Globe, Plus, Cpu, ShieldCheck, Database, Layout, Code, Terminal, ChevronUp, Smartphone } from 'lucide-react';

const App: React.FC = () => {
  const [activePreview, setActivePreview] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    const handleScroll = () => {
      if (timeoutId) window.cancelAnimationFrame(timeoutId);
      timeoutId = window.requestAnimationFrame(() => {
        setShowScrollTop(window.scrollY > 1000);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PROFILE.email);
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#E6FF00] text-[#111111] px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] z-[100] animate-bounce font-mono shadow-2xl border border-black/10';
    toast.innerText = 'DATA_COPIED_TO_CLIPBOARD';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  };

  const getSkillIcon = (category: string) => {
    if (category.includes('Frontend')) return <Layout size={18} />;
    if (category.includes('Backend')) return <Database size={18} />;
    if (category.includes('System')) return <Terminal size={18} />;
    if (category.includes('AI')) return <Cpu size={18} />;
    return <Code size={18} />;
  };

  const togglePreview = (idx: number) => {
    if (activePreview === idx) setActivePreview(null);
    else setActivePreview(idx);
  };

  return (
    <div className="relative min-h-screen selection:bg-[#E6FF00] selection:text-[#111111] overflow-x-hidden bg-[#F2F2F2]">
      <CustomCursor />
      <BrutalistBackground />
      <Navigation />

      {/* 01 Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col justify-center px-6 md:px-12 bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111111] pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none z-10"></div>
        <div className="scanline"></div>
        <CylinderCarousel />

        <div className="max-w-screen-2xl mx-auto w-full relative z-20 pointer-events-none">
          <div className="hidden md:flex absolute -top-40 left-0 items-center gap-6 opacity-30">
            <Plus size={14} className="text-white" />
            <span className="text-[9px] font-black text-white tracking-[1em] uppercase font-mono">SYS_INITIALIZE_0x25</span>
          </div>

          <h1 className="text-[14vw] md:text-[14vw] font-heavy text-white uppercase tracking-tighter leading-[0.78] mix-blend-difference drop-shadow-2xl">
            EXPERT<br/>
            DIGITAL<br/>
            <span className="text-[#E6FF00]">PRODUCTION</span>
          </h1>
          
          <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end pointer-events-auto">
            <div className="md:col-span-7">
              <div className="flex items-start gap-4 md:gap-8">
                 <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#E6FF00] animate-ping shadow-[0_0_10px_#E6FF00]"></div>
                 </div>
                 <div>
                    <p className="text-lg md:text-2xl font-medium text-white/80 max-w-xl leading-snug tracking-tight mb-4">
                      {PROFILE.title} at {PROFILE.location}. Engineering high-performance digital logic through AI & Systems Architecture.
                    </p>
                    <div className="flex gap-4 opacity-40">
                       <div className="flex items-center gap-2 text-[9px] text-white font-mono uppercase tracking-widest"><Cpu size={10}/> Buffer: 256mb</div>
                       <div className="flex items-center gap-2 text-[9px] text-white font-mono uppercase tracking-widest"><ShieldCheck size={10}/> Relay: Active</div>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="md:col-span-5 flex flex-col items-start md:items-end gap-6 md:gap-12">
               <div className="flex flex-col gap-4 w-full md:w-auto">
                 <button 
                    onClick={copyToClipboard}
                    className="group relative px-6 md:px-10 py-3 md:py-4 bg-[#E6FF00] text-[#111111] overflow-hidden w-full md:w-auto outline-none transition-transform active:scale-95 shadow-xl"
                 >
                    <span className="relative z-10 text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase font-mono">COPY EMAIL</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <div className="absolute -right-4 -top-4 w-8 h-8 border-b-2 border-l-2 border-[#111111]/10 group-hover:rotate-90 transition-transform duration-700"></div>
                 </button>
                 <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative px-6 md:px-10 py-3 md:py-4 border-2 border-white/30 text-white/90 overflow-hidden w-full md:w-auto outline-none transition-transform active:scale-95 shadow-xl hover:border-[#E6FF00] hover:text-[#E6FF00]"
                 >
                    <span className="relative z-10 text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase font-mono">VIEW PROJECTS</span>
                    <div className="absolute inset-0 bg-[#E6FF00]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                 </button>
               </div>
               
               <div className="text-left md:text-right w-full">
                  <p className="text-[9px] md:text-[10px] font-black text-white/50 uppercase tracking-[0.6em] mb-2 font-mono">COORD / {PROFILE.location}</p>
                  <p className="text-[9px] md:text-[10px] font-black text-white/50 uppercase tracking-[0.6em] font-mono">LAT: 19.076° N / LONG: 72.877° E</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Strip */}
      <section className="relative py-8 md:py-10 px-6 md:px-12 bg-[#E6FF00] text-[#111111] border-y-2 border-black/10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.6em] font-mono opacity-80">WHAT_I_DO</p>
          <p className="text-lg md:text-2xl font-black tracking-tight uppercase">
            AI systems, real-time backends, cinematic frontends.
          </p>
        </div>
      </section>

      {/* 02 About Section */}
      <section id="about" className="relative py-24 md:py-48 px-6 md:px-12 bg-[#F2F2F2]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="md:col-span-5">
              <h2 className="text-5xl md:text-[6vw] font-heavy uppercase leading-[0.85] mb-8 md:mb-12 tracking-tighter">ENGINEERING<br/>THE NEXT<br/>STANDARD</h2>
              <div className="h-2 w-24 md:w-32 bg-[#E6FF00] mb-8 md:mb-12"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#111111]/40 mb-6 font-mono">LOG_ENTRY_CORE</p>
              <div className="flex flex-wrap gap-3">
                 <span className="px-4 py-2 bg-[#111111] text-white text-[9px] md:text-[10px] font-black tracking-widest font-mono">AI_ARCH</span>
                 <span className="px-4 py-2 bg-[#111111] text-white text-[9px] md:text-[10px] font-black tracking-widest font-mono">STACK_DEV</span>
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="text-3xl md:text-6xl font-medium tracking-tighter text-[#111111] mb-12 md:mb-20 leading-tight md:leading-[0.95]">
                {PROFILE.summary}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-[#111111]/10 pt-12 md:pt-20">
                 <div>
                    <p className="text-[10px] md:text-[11px] font-black uppercase opacity-50 mb-6 md:mb-8 tracking-widest font-mono">METHODOLOGY</p>
                    <p className="text-xl md:text-2xl font-light leading-snug tracking-tight">Our approach sits where creativity and technical imagination meet. We help brands turn complex tech into clear, purposeful experiences.</p>
                 </div>
                 <div className="flex flex-col gap-6 md:gap-8 items-start justify-end">
                    <button 
                       onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                       className="text-[11px] md:text-[12px] font-black border-b-4 md:border-b-8 border-[#E6FF00] hover:bg-[#E6FF00] transition-all px-2 py-1 uppercase tracking-widest font-mono"
                    >
                      EXPLORE ARCHIVE →
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Project Grid - Optimized for Performance and Mobile UX */}
      <section id="projects" className="relative py-24 md:py-48 px-6 md:px-12 bg-[#111111] text-white z-30">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-40 border-b border-white/10 pb-12 md:pb-20">
            <h2 className="text-6xl md:text-[10vw] font-heavy uppercase leading-[0.8] tracking-tighter mb-8 md:mb-0">INDEXED<br/>SYSTEMS</h2>
            <div className="text-left md:text-right">
              <p className="text-[10px] md:text-[11px] font-black tracking-[0.8em] uppercase opacity-50 mb-2 md:mb-4 font-mono">FILE_RESOURCES</p>
              <p className="text-4xl md:text-6xl font-black italic text-[#E6FF00]">0{PROJECTS.length}_NODES</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-24 md:gap-60">
            {PROJECTS.map((project, idx) => (
              <div 
                key={idx} 
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-20 items-start"
              >
                {/* Image/Iframe Container with strictly enforced Aspect Ratio */}
                <div 
                  className="lg:col-span-7 relative aspect-video bg-[#1A1A1A] overflow-hidden border border-white/5 ring-1 ring-white/10 cursor-pointer will-change-transform"
                  onMouseEnter={() => window.innerWidth > 768 && setActivePreview(idx)}
                  onMouseLeave={() => window.innerWidth > 768 && setActivePreview(null)}
                  onClick={() => window.innerWidth <= 768 && togglePreview(idx)}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111] z-0">
                    <Loader2 className="animate-spin text-[#E6FF00] opacity-20 mb-6" size={40} />
                  </div>
                  
                  {activePreview === idx ? (
                    <iframe
                      src={project.link}
                      className="w-full h-full border-none opacity-0 transition-opacity duration-700 relative z-10 scale-[1.01]"
                      title={project.title}
                      loading="lazy"
                      onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                    />
                  ) : (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#111111] text-white transition-opacity duration-700">
                      <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                         <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
                         <div className="absolute inset-2 border border-[#E6FF00]/10 rounded-full animate-[spin_6s_linear_infinite_reverse]"></div>
                         <Globe size={24} className="opacity-10 group-hover:opacity-40 transition-opacity duration-500" />
                      </div>
                      <div className="mt-8 text-center px-6">
                        <p className="text-[8px] md:text-[10px] font-black tracking-[1.2em] uppercase opacity-40 mb-4 font-mono">STANDBY_MODE</p>
                        <div className="md:hidden flex items-center justify-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-[#E6FF00] font-mono py-2 px-4 border border-[#E6FF00]/20 bg-[#E6FF00]/5">
                          <Smartphone size={10} /> TAP TO CONNECT
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute top-4 md:top-10 left-4 md:left-10 z-30 flex items-center gap-4 md:gap-6 pointer-events-none">
                     <div className={`w-2 md:w-3 h-2 md:h-3 bg-[#E6FF00] shadow-[0_0_15px_#E6FF00] transition-all duration-500 ${activePreview === idx ? 'scale-150 animate-pulse' : 'scale-100'}`}></div>
                     <p className="text-[9px] md:text-[11px] font-black tracking-[0.4em] uppercase font-mono bg-[#111111]/80 backdrop-blur-sm px-2 py-1 border border-white/5">REF: NODE_0{idx + 1}</p>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col pt-4 md:pt-8">
                  <div className="flex items-center gap-4 mb-6 md:mb-10">
                     <div className="h-[2px] w-8 md:w-16 bg-[#E6FF00] transition-all duration-700 group-hover:w-24"></div>
                     <span className="text-[10px] md:text-[12px] font-black tracking-[0.5em] text-white/40 font-mono uppercase">PROJECT_LOG</span>
                  </div>
                  <h3 className="text-4xl md:text-7xl font-heavy uppercase leading-[0.85] mb-6 md:mb-12 tracking-tighter group-hover:text-[#E6FF00] transition-all duration-700">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-2xl font-light leading-snug mb-8 md:mb-16 opacity-50 border-l-2 border-[#E6FF00]/40 pl-4 md:pl-10 italic">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 mb-8 md:mb-12">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-white/70 font-mono">IMPACT</span>
                    <span className="text-sm md:text-lg font-black text-[#E6FF00] uppercase tracking-widest">{project.metric}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-4 mb-10 md:mb-20">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="text-[8px] md:text-[10px] font-black uppercase py-2 md:py-3 px-3 md:px-5 bg-white/5 border border-white/10 group-hover:border-[#E6FF00]/50 transition-all duration-700 font-mono">
                        {h}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-between p-6 md:p-10 border border-white/10 hover:border-[#E6FF00] transition-all bg-white/5 group/btn relative overflow-hidden active:scale-95 shadow-xl"
                  >
                    <span className="relative z-10 text-[10px] md:text-[13px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase font-mono">EXECUTE_LIVE_VIEW</span>
                    <ArrowUpRight size={24} className="relative z-10 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-500 text-[#E6FF00]" />
                    <div className="absolute inset-0 bg-[#E6FF00] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 opacity-5"></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Skills Capability Matrix */}
      <section id="skills" className="relative py-24 md:py-48 px-6 md:px-12 bg-[#F2F2F2]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 md:mb-40">
             <h2 className="text-5xl md:text-[8vw] font-heavy uppercase leading-[0.8] tracking-tighter mb-8 md:mb-0">CAPABILITY<br/>MATRIX</h2>
             <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] opacity-50 font-mono">RESOURCE_ALLOCATION_V25</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx} className="bg-white border border-[#111111]/5 p-8 md:p-12 hover:border-[#E6FF00] transition-all duration-500 group relative shadow-sm hover:shadow-2xl">
                <div className="flex items-center justify-between mb-12">
                   <div className="text-[#111111]/20 group-hover:text-[#E6FF00] transition-colors">{getSkillIcon(skillGroup.category)}</div>
                   <span className="text-[10px] font-black opacity-10 font-mono">MOD_0{idx + 1}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-heavy uppercase mb-8 tracking-tighter">{skillGroup.category}</h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest font-mono">
                      <span className="opacity-40">{skill}</span>
                      <div className="w-1.5 h-1.5 bg-[#E6FF00] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#E6FF00] group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Experience Legacy Logs */}
      <section id="experience" className="relative py-24 md:py-48 px-6 md:px-12 bg-[#111111] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E6FF00] opacity-[0.02] -skew-x-12 translate-x-20 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto relative z-10">
           <div className="mb-20 md:mb-40 border-l-8 border-[#E6FF00] pl-8 md:pl-20">
              <p className="text-[10px] md:text-[12px] font-black tracking-[0.6em] uppercase opacity-50 mb-4 font-mono">EXECUTION_HISTORY</p>
              <h2 className="text-5xl md:text-[10vw] font-heavy uppercase leading-[0.8] tracking-tighter">PROFESSIONAL<br/>LEGACY</h2>
           </div>

           <div className="space-y-24 md:space-y-32">
             {EXPERIENCES.map((exp, idx) => (
               <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 border-b border-white/5 pb-16 md:pb-20 group">
                  <div className="lg:col-span-3">
                     <p className="text-2xl md:text-3xl font-black text-[#E6FF00] mb-2 md:mb-4 font-mono">{exp.period}</p>
                     <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#E6FF00] animate-pulse"></div>
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 font-mono">NODE_STATUS: STABLE</p>
                     </div>
                  </div>
                  <div className="lg:col-span-4">
                     <h3 className="text-3xl md:text-5xl font-heavy uppercase mb-2 md:mb-4 tracking-tighter group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">{exp.role}</h3>
                     <p className="text-lg md:text-2xl font-light opacity-50 uppercase tracking-widest">{exp.company}</p>
                  </div>
                  <div className="lg:col-span-5">
                    <ul className="space-y-4 md:space-y-6">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-4 md:gap-6 items-start group/li">
                          <Plus size={14} className="mt-1 text-[#E6FF00] shrink-0 group-hover/li:rotate-90 transition-transform" />
                          <p className="text-base md:text-xl font-light leading-snug opacity-80">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-[100] w-14 h-14 md:w-20 md:h-20 bg-[#E6FF00] text-[#111111] flex items-center justify-center transition-all duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0 scale-50'} hover:scale-110 active:scale-90 border border-black/5`}
        aria-label="Back to top"
      >
        <ChevronUp size={28} className="animate-bounce" />
      </button>

      {/* Footer Branding */}
      <footer className="relative pt-24 md:pt-60 pb-16 md:pb-24 px-6 md:px-12 bg-white border-t-[10px] md:border-t-[40px] border-[#E6FF00] z-40">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20 md:mb-40">
             <p className="text-[12px] md:text-[14px] font-black tracking-[1em] md:tracking-[1.5em] uppercase opacity-40 mb-8 md:mb-12 font-mono">PROTOCOL_EXIT</p>
             <h2 className="text-[16vw] md:text-[15vw] font-heavy uppercase leading-[0.7] tracking-tighter text-[#111111]">
                LET'S<br/>
                <span className="bg-[#E6FF00] px-4 md:px-8 -ml-4 md:-ml-8 inline-block mt-4">BUILD</span>
             </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-end pb-20 md:pb-40 border-b-2 border-[#111111]/5">
            <div className="md:col-span-8">
               <div className="flex flex-col gap-4 md:gap-6">
                  <p className="text-[10px] md:text-[12px] font-black opacity-50 uppercase tracking-[0.6em] font-mono">DIRECT_COMM_LINE</p>
                  <a href={`mailto:${PROFILE.email}`} className="text-xl md:text-8xl font-heavy hover:text-[#E6FF00] transition-all hover:tracking-widest duration-1000 break-all leading-none" aria-label={`Email ${PROFILE.email}`}>{PROFILE.email}</a>
               </div>
            </div>
            <div className="md:col-span-4 flex flex-col items-start md:items-end gap-12 md:gap-16">
               <div className="flex flex-wrap md:flex-col gap-x-12 gap-y-6 md:gap-8 items-start md:items-end">
                  <a href={`https://${PROFILE.github}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-start md:items-end outline-none" aria-label="GitHub profile">
                    <span className="text-[10px] md:text-[12px] font-black opacity-40 mb-1 tracking-widest font-mono">01</span>
                    <span className="text-xl md:text-2xl font-heavy border-b-2 md:border-b-4 border-transparent hover:border-[#111111] transition-all uppercase">GITHUB</span>
                  </a>
                  <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-start md:items-end outline-none" aria-label="LinkedIn profile">
                    <span className="text-[10px] md:text-[12px] font-black opacity-40 mb-1 tracking-widest font-mono">02</span>
                    <span className="text-xl md:text-2xl font-heavy border-b-2 md:border-b-4 border-transparent hover:border-[#111111] transition-all uppercase">LINKEDIN</span>
                  </a>
                  <a href={`https://${PROFILE.instagram}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-start md:items-end outline-none" aria-label="Instagram profile">
                    <span className="text-[10px] md:text-[12px] font-black opacity-40 mb-1 tracking-widest font-mono">03</span>
                    <span className="text-xl md:text-2xl font-heavy border-b-2 md:border-b-4 border-transparent hover:border-[#111111] transition-all uppercase">INSTAGRAM</span>
                  </a>
                  <a href={`https://${PROFILE.twitter}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-start md:items-end outline-none" aria-label="X profile">
                    <span className="text-[10px] md:text-[12px] font-black opacity-40 mb-1 tracking-widest font-mono">04</span>
                    <span className="text-xl md:text-2xl font-heavy border-b-2 md:border-b-4 border-transparent hover:border-[#111111] transition-all uppercase">X / TWITTER</span>
                  </a>
               </div>
               <div className="text-left md:text-right">
                  <p className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.8em] leading-loose opacity-50 font-mono uppercase">
                    {PROFILE.location} / LOG_NODE
                  </p>
               </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-20 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[11px] font-black tracking-[0.6em] md:tracking-[1em] uppercase opacity-20 gap-6 font-mono">
            <p>© {new Date().getFullYear()} {PROFILE.name} — SECURE_ACCESS</p>
            <div className="flex gap-8 md:gap-16">
               <div className="flex items-center gap-2"><div className="w-1 h-1 bg-black rounded-full"></div> SYS_V2.5</div>
               <div className="flex items-center gap-2"><div className="w-1 h-1 bg-black rounded-full"></div> ALIENXCODE_PROD</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
