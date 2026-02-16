import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-soft-beige/90 shadow-sm backdrop-blur-md' : 'bg-soft-beige/50 backdrop-blur-md border-b border-white/20'
    } mix-blend-multiply`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
        <a href="#hero" className="group">
          <span className="text-3xl md:text-4xl font-handwritten font-bold flex items-center tracking-tighter text-slate-900">
            Fizjoc<span className="relative">i<span className="balloon-dot bg-pastel-mint"></span></span>ocia
          </span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12 text-sm font-bold uppercase tracking-[0.2em] text-slate-600">
          <a href="#o-mnie" className="hover:text-primary transition-all relative group/link">
            Rozdział I
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full"></span>
          </a>
          <a href="#doswiadczenie" className="hover:text-primary transition-all relative group/link">
            Wiedza
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full"></span>
          </a>
          <a href="#historie" className="hover:text-primary transition-all relative group/link">
            Opowieści
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full"></span>
          </a>
          <a href="#kontakt" className="bg-white border border-slate-200 shadow-sm px-8 py-3 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            Rozpocznij Podróż
          </a>
        </div>

        {/* Mobile Menu Icon (Simple placeholder) */}
        <button className="lg:hidden text-slate-800 p-2">
            <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;