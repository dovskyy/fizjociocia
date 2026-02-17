import React from 'react';

const equipment = [
  {
    id: '01',
    name: 'C-MILL',
    tag: 'Trening chodu',
    description: 'To interaktywna bieżnia, która zamienia naukę chodzenia w przygodę. Dzięki wyświetlanym na podłożu grom, dziecko uczy się omijać przeszkody i planować kolejne kroki, co bardzo pomaga w codziennym poruszaniu się.',
    color: 'bg-primary/20',
    icon: 'neurology',
  },
  {
    id: '02',
    name: 'Rezonans Stochastyczny',
    tag: 'Równowaga i stabilizacja',
    description: 'Urządzenie wytwarza delikatne, nieregularne drgania, które pobudzają ciało do reakcji. Pomaga to dziecku lepiej "czuć" swoje mięśnie i stawy, co przekłada się na lepszą stabilność i pewniejszą postawę.',
    color: 'bg-pastel-mint/30',
    icon: 'waves',
  },
  {
    id: '03',
    name: 'Platforma Galileo',
    tag: 'Wzmocnienie mięśni',
    description: 'Platforma wykorzystuje wibracje naśladujące ruchy podczas chodzenia. To świetne wsparcie tradycyjnych ćwiczeń — pomaga wzmocnić siłę mięśni i poprawić koordynację w sposób bezpieczny i efektywny.',
    color: 'bg-pastel-yellow/40',
    icon: 'fitness_center',
  },
];

const Equipment: React.FC = () => {
  return (
    <section id="sprzet" className="py-24 relative overflow-hidden paper-texture">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      <div 
        className="absolute inset-0 -z-[5] opacity-[0.25] bg-cover bg-no-repeat pointer-events-none"
        style={{ 
          backgroundImage: "url('/assets/fizjociocia_bg_3.webp')",
          backgroundPosition: 'calc(50% - 9cm) 50%' 
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Header Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative inline-block mb-4">
              <span className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase">Zaplecze technologiczne</span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30 scribble-border"></div>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 text-slate-900">
              Sprzęt <br />
              <span className="italic font-normal font-handwritten text-primary block mt-1 text-5xl lg:text-7xl">w parze z dotykiem</span>
            </h2>
            
            <p className="text-base text-slate-600 font-light leading-relaxed mb-8 max-w-sm">
              Posiadam doświadczenie w pracy z nowoczesnym sprzętem rehabilitacyjnym, który wspiera rozwój ruchowy dzieci. Każde urządzenie jest narzędziem, które wykorzystuję z myślą o indywidualnych potrzebach każdego małego pacjenta.
            </p>
          </div>

          {/* Equipment Grid Column */}
          <div className="lg:col-span-7 space-y-10">
            {equipment.map((item, index) => (
              <div 
                key={item.id}
                className={`group relative p-8 lg:p-10 transition-all duration-500 ${index % 2 === 0 ? 'ml-0 mr-8' : 'ml-8 mr-0'}`}
              >
                {/* Background Shape - Solid White for visibility */}
                <div className="absolute inset-0 bg-white scribble-border shadow-md transition-transform duration-700 group-hover:scale-[1.03] group-hover:-rotate-1 -z-10"></div>
                
                {/* Secondary Offset Shape - Pastel Color Accent */}
                <div className={`absolute inset-0 ${item.color} opacity-40 scribble-border-rev transition-transform duration-700 group-hover:scale-[1.06] group-hover:rotate-2 -z-20 transform translate-x-2 translate-y-2`}></div>

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-display font-bold text-slate-900">{item.name}</h3>
                    <span className="px-3 py-1 rounded-full bg-slate-50 text-[9px] font-bold uppercase tracking-widest text-slate-500 border border-slate-200">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-base text-slate-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Equipment;
