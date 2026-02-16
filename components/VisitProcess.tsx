import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Konsultacja wstępna',
    description: 'Szczegółowy wywiad z rodzicem dotyczący przebiegu ciąży, porodu, rozwoju dziecka oraz aktualnych trudności.',
    icon: 'forum',
    numberClass: 'text-primary/30',
    bgClass: 'bg-primary/10',
    iconClass: 'text-primary',
  },
  {
    number: '02',
    title: 'Ocena funkcjonalna',
    description: 'Ocena napięcia mięśniowego, analiza wzorców ruchowych, kontrola posturalna oraz badanie integracji sensorycznej.',
    icon: 'search',
    numberClass: 'text-emerald-400/30',
    bgClass: 'bg-emerald-400/10',
    iconClass: 'text-emerald-400',
  },
  {
    number: '03',
    title: 'Plan terapii',
    description: 'Indywidualny program dopasowany do wieku, poziomu rozwoju, potrzeb funkcjonalnych i celów rodziny.',
    icon: 'edit_note',
    numberClass: 'text-yellow-500/30',
    bgClass: 'bg-yellow-500/10',
    iconClass: 'text-yellow-500',
  },
  {
    number: '04',
    title: 'Terapia i monitorowanie',
    description: 'Regularna ocena efektów oraz modyfikacja programu w zależności od postępów dziecka.',
    icon: 'trending_up',
    numberClass: 'text-primary/30',
    bgClass: 'bg-primary/10',
    iconClass: 'text-primary',
  },
];

const VisitProcess: React.FC = () => {
  return (
    <section id="wizyta" className="py-40 bg-white/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs font-bold tracking-[0.3em] text-emerald-500 uppercase mb-6 block">Przebieg wizyty</span>
          <h2 className="text-7xl font-display font-bold leading-none mb-8">
            Jak <span className="italic text-primary">pracuję?</span>
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            Każda terapia zaczyna się od zrozumienia. Nie szukam skrótów — buduję bezpieczną, przemyślaną ścieżkę rozwoju.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white p-10 scribble-border shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <span className={`font-handwritten text-5xl ${step.numberClass} block mb-4`}>{step.number}</span>
                <div className={`w-14 h-14 rounded-2xl ${step.bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className={`material-symbols-outlined text-2xl ${step.iconClass}`}>{step.icon}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitProcess;
