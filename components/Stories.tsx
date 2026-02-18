import React from 'react';

const Stories: React.FC = () => {
  return (
    <section id="historie" className="py-24 relative overflow-hidden bg-soft-beige">
      {/* Background decoration - messy desk vibes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pastel-mint/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 relative">
          <span className="inline-block px-4 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 shadow-sm rotate-[-2deg]">
            Pamiętnik Sukcesów
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-800">
            Małe kroki,<br/>
            <span className="text-primary italic">wielkie zmiany.</span>
          </h2>
          {/* Decorative scribble arrow pointing down */}
          <svg className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-12 h-12 text-slate-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50 0 C60 20 40 40 50 60 C60 80 40 80 50 100" />
            <path d="M40 90 L50 100 L60 90" />
          </svg>
        </div>

        {/* Scrapbook Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 lg:gap-8 pt-10">
          
          {/* Story 1: Filip (Polaroid + Note) */}
          <div className="relative group perspective-1000">
            {/* Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/80 shadow-sm rotate-[-3deg] z-20 backdrop-blur-sm"></div>
            
            {/* Polaroid */}
            <div className="bg-white p-4 pb-16 shadow-lg rotate-[-2deg] transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:shadow-2xl max-w-sm">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 mb-4 border border-slate-100 relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPBjfF_AKx6-k2OunDzsN9-VJzT2D1tG10AuEme3TKZ-UKGwv-8kAw3fHabWNyRmK3yEiWUxQmyuaHVWyrgwyu-5MA3Rt3csHB2jg3kOMaDbDGcDKJQ-TNuDS-JU4Mmxm5G-Qe1dYBqMEYcR9cgeBWwlEVUxfYw9DwZ_kM5ed4CuX2HLUOoBgnHfoXVRBLfCq3BF6Y1VUfV0grrzfXrFYtxCwmX_Wc-J22HhT9_Qn2G4i5NWxWUPAenp1DEkRhz0KX_2dQ-hqNFFA"
                  alt="Filip"
                  className="w-full h-full object-cover filter sepia-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="text-center font-handwritten text-3xl text-slate-700 -rotate-1">
                Filip, 3 lata
              </div>
            </div>

            {/* Handwritten Note pinned next to it */}
            <div className="lg:absolute lg:top-20 lg:-right-48 w-64 bg-pastel-yellow p-6 shadow-md rotate-[3deg] lg:rotate-[5deg] mt-8 lg:mt-0 relative">
               {/* Pin */}
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-400 shadow-sm border border-red-500 z-10"></div>
               <p className="font-handwritten text-xl leading-relaxed text-slate-700">
                 "Bał się chodzić sam. Dziś biega po całym placu zabaw! Nasza mała-wielka przygoda."
               </p>
               <div className="mt-4 text-right text-xs font-sans font-bold text-slate-400 tracking-widest uppercase">
                 Efekt: Samodzielność
               </div>
            </div>
          </div>

          {/* Spacer/Connector for desktop flow */}
          <div className="hidden lg:block w-32 h-1"></div>

          {/* Story 2: Zosia (Polaroid + Note) */}
          <div className="relative group perspective-1000 lg:mt-32">
             {/* Tape */}
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-100/80 shadow-sm rotate-[2deg] z-20 backdrop-blur-sm"></div>

            {/* Polaroid */}
            <div className="bg-white p-4 pb-16 shadow-lg rotate-[3deg] transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:shadow-2xl max-w-sm">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 mb-4 border border-slate-100 relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc72uqNnu27qaTxiHkJxEUHy51ousM4TXpHpk93L4p4N9I5x0tsAuPgg1jGKj-WtGvM2slV5kxp2-hee_sSTk-C_H8sHQw3vsxUeLruZt5nlIDP4yNwMnZ0dZ8vUsHkEnUJ0QWkz1Eau5RqWUkI5NJaNnNQ5fuHu2ZE4rn8kGFN2csy-mCSJU8diWx1_GrwfAIUlpIsIV3tNbyhV9dsicUa2ZHX9osgVAvEqvdFuaCENzAvoQeq0XjZGBh5wuZgqDULzo1QgO3VR4"
                  alt="Zosia"
                  className="w-full h-full object-cover filter sepia-[0.2]"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="text-center font-handwritten text-3xl text-slate-700 rotate-1">
                Zosia, 5 miesięcy
              </div>
            </div>

             {/* Handwritten Note pinned next to it */}
             <div className="lg:absolute lg:bottom-20 lg:-left-56 w-64 bg-pastel-blue/30 p-6 shadow-md rotate-[-2deg] lg:rotate-[-4deg] mt-8 lg:mt-0 relative border border-white/50 backdrop-blur-sm">
               {/* Pin */}
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 shadow-sm border border-emerald-500 z-10"></div>
               <p className="font-handwritten text-xl leading-relaxed text-slate-700">
                 "Asymetria spędzała nam sen z powiek. Teraz Zosia śpi spokojnie, a my wiemy, jak ją nosić."
               </p>
               <div className="mt-4 text-right text-xs font-sans font-bold text-slate-400 tracking-widest uppercase">
                 Efekt: Spokój Rodziców
               </div>
            </div>
          </div>

        </div>
        
        <div className="text-center mt-24">
             <p className="font-handwritten text-2xl text-slate-400 rotate-[-1deg]">
                ...i wiele innych historii pisanych codziennie.
             </p>
        </div>

      </div>
    </section>
  );
};

export default Stories;