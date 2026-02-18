import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Konsultacja',
    description: 'Spokojna rozmowa o historii Twojego dziecka. Bez pośpiechu, przy dobrej kawie.',
    icon: 'forum',
    accent: 'bg-rose-100 text-rose-600',
    rotate: 'rotate-1'
  },
  {
    number: '02',
    title: 'Ocena',
    description: 'Badanie poprzez zabawę. Sprawdzam odruchy i napięcie, gdy maluch czuje się bezpiecznie.',
    icon: 'visibility', // changed from search for softer feel
    accent: 'bg-emerald-100 text-emerald-600',
    rotate: '-rotate-1'
  },
  {
    number: '03',
    title: 'Plan',
    description: 'Konkretne cele i instruktaż dla Ciebie. Wychodzisz z wiedzą, co robić w domu.',
    icon: 'edit_note',
    accent: 'bg-amber-100 text-amber-600',
    rotate: 'rotate-1'
  },
  {
    number: '04',
    title: 'Wsparcie',
    description: 'Jestem tu dla Was. Monitorujemy postępy i świętujemy każdy nowy ruch.',
    icon: 'favorite',
    accent: 'bg-sky-100 text-sky-600',
    rotate: '-rotate-1'
  },
];

const VisitProcess: React.FC = () => {
  return (
    <section id="wizyta" className="py-24 bg-soft-beige relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Clean & Trustworthy */}
        <div className="text-center mb-24 max-w-2xl mx-auto relative">
          <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase mb-4 block">
            Plan Działania
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6">
            Spokojna droga do <span className="text-primary italic">równowagi.</span>
          </h2>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            Stworzyłam przejrzysty proces, abyś od pierwszej chwili czuł się zaopiekowany.
            Tutaj nie ma miejsca na chaos – jest plan dopasowany do rytmu Twojego dziecka.
          </p>
          {/* Glitter balloons decoration */}
          <img
            src="/assets/baloon_3.webp"
            alt=""
            aria-hidden="true"
            className="absolute top-0 -right-24 lg:-right-36 w-28 lg:w-40 opacity-65 floating-slow pointer-events-none select-none"
          />
        </div>

        {/* Process Cards */}
        <div className="relative">
          
          {/* Connecting "Silk" Line (Desktop only) */}
          <svg className="hidden lg:block absolute top-12 left-0 w-full h-24 -z-10 text-slate-200" preserveAspectRatio="none">
             <path d="M 100 50 C 300 100, 500 0, 700 50 S 1100 0, 1300 50" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke"/>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className={`relative group ${index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-12'}`}>
                
                {/* The Card */}
                <div className={`
                  bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] 
                  border border-slate-50 transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
                  relative overflow-hidden
                  ${step.rotate} hover:rotate-0
                `}>
                  
                  {/* Subtle Grain Texture Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

                  {/* Step Number Badge */}
                  <div className={`
                    w-12 h-12 rounded-xl ${step.accent} bg-opacity-20 
                    flex items-center justify-center mb-6 text-sm font-bold
                  `}>
                    {step.number}
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-800 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Icon Watermark */}
                  <span className={`material-symbols-outlined absolute -bottom-4 -right-4 text-8xl opacity-[0.03] ${step.accent.split(' ')[1]}`}>
                    {step.icon}
                  </span>
                </div>
                
                {/* Vertical Line for Mobile Flow */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -translate-x-1/2 -bottom-8 w-px h-8 bg-slate-200"></div>
                )}
              </div>
            ))}
          </div>

        </div>

        <div className="text-center mt-20">
          <a href="#kontakt" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-400 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1 group">
            Kontakt
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default VisitProcess;
