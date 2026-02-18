import React from 'react';

const equipment = [
  {
    id: '01',
    name: 'C-MILL',
    subtitle: 'Wirtualny Spacer',
    spec: 'Biofeedback',
    description: 'Bieżnia, która zamienia żmudną naukę chodzenia w grę wideo. Projektujemy na podłodze przeszkody i cele, a dziecko, goniąc smoki lub zbierając punkty, nieświadomie trenuje chód.',
    icon: 'directions_walk',
    accent: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  {
    id: '02',
    name: 'Rezonans',
    subtitle: 'Dobre Wibracje',
    spec: 'Neuromodulacja',
    description: 'Stochastyczne wibracje to masaż dla układu nerwowego. Losowe drgania "budzą" uśpione połączenia nerwowe, poprawiając stabilność tam, gdzie jej brakuje.',
    icon: 'waves',
    accent: 'text-violet-500',
    bg: 'bg-violet-50'
  },
  {
    id: '03',
    name: 'Galileo',
    subtitle: 'Trening Kosmonauty',
    spec: 'Wibroterapia',
    description: 'System używany pierwotnie przez astronautów. Wibracje o określonej częstotliwości zmuszają mięśnie do pracy, wzmacniając je szybciej niż tradycyjne ćwiczenia.',
    icon: 'accessibility_new',
    accent: 'text-amber-500',
    bg: 'bg-amber-50'
  },
];

const Equipment: React.FC = () => {
  return (
    <section id="sprzet" className="py-24 relative">
      {/* PRESERVED BACKGROUND */}
      <div className="absolute inset-0 bg-soft-beige/40 -z-10"></div>
      <div 
        className="absolute inset-0 -z-[5] opacity-[0.25] bg-cover bg-no-repeat pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: "url('/assets/fizjociocia_bg_3.webp')",
          backgroundPosition: 'center right' 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Header Column (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200 backdrop-blur-sm mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Zaplecze Technologiczne</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Technologia <br />
              <span className="text-primary font-serif italic text-4xl lg:text-6xl opacity-90">w służbie natury.</span>
            </h2>
            
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 border-l-2 border-primary/30 pl-6">
              To nie są tylko maszyny. To nasi <span className="font-medium text-slate-800">asystenci do zadań specjalnych</span>. 
              Pozwalają nam zajrzeć tam, gdzie wzrok nie sięga i wzmocnić to, co wymaga wsparcia.
            </p>

            {/* Decorative Tech Grid */}
            <div className="w-32 h-32 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '8px 8px' }}>
            </div>
          </div>

          {/* Equipment List Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {equipment.map((item, index) => (
              <div 
                key={item.id}
                className="group relative bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 ${item.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700`}></div>

                <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                  
                  {/* Icon Box */}
                  <div className={`w-16 h-16 rounded-xl ${item.bg} flex items-center justify-center shrink-0 border border-white shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                    <span className={`material-symbols-outlined text-3xl ${item.accent}`}>
                      {item.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-2xl font-display font-bold text-slate-800 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      {/* Tech Badge */}
                      <span className="px-3 py-1 rounded-md bg-slate-100/80 border border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {item.spec}
                      </span>
                    </div>
                    
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {item.subtitle}
                    </p>

                    <p className="text-base text-slate-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom decorative bar */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-${item.accent.split('-')[1]}-200 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Equipment;
