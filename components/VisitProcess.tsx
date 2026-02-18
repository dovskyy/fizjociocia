import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Konsultacja',
    description: 'Szczegółowy wywiad i analiza historii rozwoju maluszka.',
    icon: 'forum',
    color: 'bg-primary/20',
    text: 'text-primary-600',
    border: 'border-primary/20'
  },
  {
    number: '02',
    title: 'Ocena',
    description: 'Badanie napięcia i wzorców ruchowych w formie zabawy.',
    icon: 'search',
    color: 'bg-emerald-100',
    text: 'text-emerald-600',
    border: 'border-emerald-200'
  },
  {
    number: '03',
    title: 'Plan',
    description: 'Ustalenie celów i instruktaż pielęgnacyjny dla rodziców.',
    icon: 'edit_note',
    color: 'bg-amber-100',
    text: 'text-amber-600',
    border: 'border-amber-200'
  },
  {
    number: '04',
    title: 'Terapia',
    description: 'Regularna praca i dostosowywanie ćwiczeń do postępów.',
    icon: 'favorite',
    color: 'bg-sky-100',
    text: 'text-sky-600',
    border: 'border-sky-200'
  },
];

const VisitProcess: React.FC = () => {
  return (
    <section id="wizyta" className="py-24 bg-soft-beige/50 relative overflow-hidden paper-texture">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-4 shadow-sm">
            Proces współpracy
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6">
            Twoja ścieżka do <span className="text-primary italic relative">spokoju</span>
          </h2>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
            Uporządkowany plan działania, który daje poczucie bezpieczeństwa.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">

                {/* Number Badge (The "Station") */}
                <div className={`
                  w-24 h-24 rounded-full bg-white border-4 ${step.border}
                  flex items-center justify-center mb-8 relative
                  shadow-sm group-hover:scale-110 transition-transform duration-300
                  z-10
                `}>
                   <div className={`
                     w-20 h-20 rounded-full ${step.color}
                     flex items-center justify-center
                   `}>
                      <span className={`font-handwritten text-3xl font-bold ${step.text}`}>
                        {step.number}
                      </span>
                   </div>

                   {/* Tiny dot connector to line */}
                   <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-4 w-4 h-0.5 bg-slate-200 -z-20"></div>
                   <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-4 w-4 h-0.5 bg-slate-200 -z-20"></div>
                </div>

                {/* Content Card */}
                <div className="
                  bg-white p-6 rounded-3xl border border-slate-100 shadow-sm
                  w-full h-full hover:shadow-md transition-shadow duration-300
                  flex flex-col items-center
                ">
                  <span className={`material-symbols-outlined text-4xl mb-4 ${step.text} opacity-80`}>
                    {step.icon}
                  </span>
                  <h3 className="text-xl font-display font-bold text-slate-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
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

export default VisitProcess;
