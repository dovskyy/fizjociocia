import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-slate-100 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2">
            <img
              src="/assets/fizjociocia_logo.webp"
              alt="Fizjociocia"
              className="h-12 md:h-14"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm font-bold uppercase tracking-widest text-slate-400">
            <a href="#hero" className="hover:text-primary transition-colors">Początek</a>
            <a href="#o-mnie" className="hover:text-primary transition-colors">O mnie</a>
            <a href="#komu-pomagam" className="hover:text-primary transition-colors">Pacjenci</a>
            <a href="#doswiadczenie" className="hover:text-primary transition-colors">Metody</a>
            <a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a>
          </div>
        </div>

        <div className="mt-20 text-center text-slate-300 text-xs font-light tracking-[0.2em] leading-loose">
          &copy; 2026 MGR MARCELINA KOCHANOWSKA - FIZJOCIOCIA<br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
