import React from 'react';

const equipment = [
  {
    name: 'C-MILL',
    description: 'Interaktywna bieżnia do treningu chodu z elementami gry — motywuje dzieci do ćwiczeń przez zabawę.',
    icon: 'directions_run',
  },
  {
    name: 'Rezonans stochastyczny',
    description: 'Terapia wibracyjna wspomagająca układ nerwowy, poprawiająca odczuwanie ciała w przestrzeni.',
    icon: 'vibration',
  },
  {
    name: 'Platforma Galileo',
    description: 'Trening wibracyjny wspierający siłę mięśni, równowagę i koordynację ruchową.',
    icon: 'fitness_center',
  },
];

const Equipment: React.FC = () => {
  return (
    <section id="sprzet" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          {/* Left: heading */}
          <div className="lg:w-1/3 lg:sticky lg:top-40">
            <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-6 block">Nowoczesny sprzęt</span>
            <h2 className="text-6xl font-display font-bold leading-tight mb-8">
              Technologia <br />
              <span className="text-outline">w służbie</span> <br />
              rozwoju.
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Korzystam ze sprzętu specjalistycznego, który wspiera terapię i zwiększa motywację najmłodszych pacjentów.
            </p>
          </div>

          {/* Right: equipment cards */}
          <div className="lg:w-2/3 space-y-8">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row gap-8 items-start bg-white p-10 scribble-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-3">{item.name}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{item.description}</p>
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
