import React from 'react';

const Stories: React.FC = () => {
  return (
    <section id="historie" className="py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-handwritten text-8xl text-primary/40 mb-20">Bajki, które stały się prawdą</h2>
        
        <div className="relative">
          
          {/* Story 1: Filip */}
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-40">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-pastel-mint scribble-border translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPBjfF_AKx6-k2OunDzsN9-VJzT2D1tG10AuEme3TKZ-UKGwv-8kAw3fHabWNyRmK3yEiWUxQmyuaHVWyrgwyu-5MA3Rt3csHB2jg3kOMaDbDGcDKJQ-TNuDS-JU4Mmxm5G-Qe1dYBqMEYcR9cgeBWwlEVUxfYw9DwZ_kM5ed4CuX2HLUOoBgnHfoXVRBLfCq3BF6Y1VUfV0grrzfXrFYtxCwmX_Wc-J22HhT9_Qn2G4i5NWxWUPAenp1DEkRhz0KX_2dQ-hqNFFA" 
                alt="Filip" 
                className="w-full aspect-[4/3] object-cover scribble-border border-[8px] border-white shadow-2xl" 
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-full shadow-lg floating-slow">
                <span className="material-symbols-outlined text-5xl text-primary">favorite</span>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 max-w-xl">
              <span className="text-xs font-bold tracking-[0.3em] text-emerald-500 uppercase mb-4 block">Historia Filipa</span>
              <h4 className="text-5xl font-display font-bold mb-8 italic">Odwaga w każdym kroku</h4>
              <p className="text-2xl font-light italic text-slate-500 leading-relaxed border-l-4 border-pastel-mint pl-8">
                "Filip bał się samodzielnego poruszania. Dzięki zabawie i cierpliwości Pani Marceliny, dzisiaj biega po całym placu zabaw. Każda wizyta była dla niego wielką przygodą, a nie obowiązkiem."
              </p>
            </div>
          </div>

          {/* Story 2: Zosia */}
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-pastel-yellow scribble-border -translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc72uqNnu27qaTxiHkJxEUHy51ousM4TXpHpk93L4p4N9I5x0tsAuPgg1jGKj-WtGvM2slV5kxp2-hee_sSTk-C_H8sHQw3vsxUeLruZt5nlIDP4yNwMnZ0dZ8vUsHkEnUJ0QWkz1Eau5RqWUkI5NJaNnNQ5fuHu2ZE4rn8kGFN2csy-mCSJU8diWx1_GrwfAIUlpIsIV3tNbyhV9dsicUa2ZHX9osgVAvEqvdFuaCENzAvoQeq0XjZGBh5wuZgqDULzo1QgO3VR4" 
                alt="Zosia" 
                className="w-full aspect-[4/3] object-cover scribble-border border-[8px] border-white shadow-2xl" 
              />
              <div className="absolute -top-10 -left-10 bg-white p-8 rounded-full shadow-lg floating-slow" style={{ animationDelay: '-2s' }}>
                <span className="material-symbols-outlined text-5xl text-pastel-blue">water_drop</span>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 max-w-xl lg:text-right">
              <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Historia Zosi</span>
              <h4 className="text-5xl font-display font-bold mb-8 italic">Spokojny start w życie</h4>
              <p className="text-2xl font-light italic text-slate-500 leading-relaxed lg:border-r-4 border-primary lg:pr-8">
                "Asymetria ułożeniowa Zosi spędzała nam sen z powiek. Marcelina nie tylko pomogła córeczce, ale i nam - rodzicom - dając bezcenne wskazówki dotyczące codziennej pielęgnacji i noszenia."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stories;