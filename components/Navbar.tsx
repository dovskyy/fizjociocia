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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${isScrolled
      ? 'bg-soft-beige/95 shadow-md py-4'
      : 'bg-soft-beige/50 backdrop-blur-md border-b border-white/20 py-4 md:py-6 mix-blend-multiply'
      }`}>
      <div className={`mx-auto px-6 md:px-8 flex justify-between items-center transition-all duration-500 ease-in-out ${isScrolled ? 'max-w-[1200px]' : 'max-w-[1800px]'
        }`}>
        <a href="#hero" className="group flex items-center">
          <img
            src="/assets/fizjociocia_logo.webp"
            alt="Fizjociocia"
            className={`transition-all duration-500 ease-in-out ${
              isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
            }`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12 text-sm font-bold uppercase tracking-[0.2em] text-slate-600">
          <a href="#o-mnie" className="hover:text-primary transition-all relative group/link">
            O mnie
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full"></span>
          </a>
          <a href="#komu-pomagam" className="hover:text-primary transition-all relative group/link">
            Pacjenci
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full"></span>
          </a>
          <a href="#doswiadczenie" className="hover:text-primary transition-all relative group/link">
            Metody
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full"></span>
          </a>
          <a href="#historie" className="hover:text-primary transition-all relative group/link">
            Opowieści
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full"></span>
          </a>
          <a href="#kontakt" className="bg-white border border-slate-200 shadow-sm px-8 py-3 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            Umów wizytę
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-slate-800 p-2">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
