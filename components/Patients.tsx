import React from 'react';

const patientGroups = [
  {
    title: "Neurologia i Genetyka",
    description: "Specjalistyczna terapia wspierająca układ nerwowy i rozwój poznawczy.",
    themeColor: "primary",
    items: [
      { icon: 'neurology', label: 'Mózgowe porażenie dziecięce (MPD)', bgClass: 'bg-primary/10', textClass: 'text-primary' },
      { icon: 'genetics', label: 'Wady genetyczne', bgClass: 'bg-primary/10', textClass: 'text-primary' },
      { icon: 'emoji_people', label: 'Spektrum autyzmu (ASD)', bgClass: 'bg-primary/10', textClass: 'text-primary' },
      { icon: 'psychology', label: 'Zaburzenia integracji sensorycznej', bgClass: 'bg-primary/10', textClass: 'text-primary' },
    ]
  },
  {
    title: "Rozwój i Postawa",
    description: "Wsparcie w pokonywaniu barier ruchowych, asymetria i korekcja wad.",
    themeColor: "emerald-500",
    items: [
      { icon: 'pediatrics', label: 'Wcześniactwo', bgClass: 'bg-emerald-500/10', textClass: 'text-emerald-500' },
      { icon: 'accessibility_new', label: 'Zaburzenia napięcia mięśniowego', bgClass: 'bg-emerald-500/10', textClass: 'text-emerald-500' },
      { icon: 'directions_walk', label: 'Trudności w rozwoju ruchowym', bgClass: 'bg-emerald-500/10', textClass: 'text-emerald-500' },
      { icon: 'straighten', label: 'Wady postawy', bgClass: 'bg-emerald-500/10', textClass: 'text-emerald-500' },
    ]
  }
];

const Patients: React.FC = () => {
  return (
    <section id="komu-pomagam" className="py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-pastel-mint/15 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-pastel-yellow/15 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3 block">Komu pomagam</span>
          <h2 className="text-5xl lg:text-6xl font-display font-bold leading-none mb-4">
            Każde dziecko <br />
            <span className="text-outline">jest wyjątkowe.</span>
          </h2>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            Pracuję z dziećmi, które potrzebują indywidualnego wsparcia. Podzieliłam moje obszary działania na dwie główne ścieżki, aby łatwiej było Ci znaleźć pomoc.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {patientGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="relative">
              {/* Column Header */}
              <div className={`mb-8 pl-4 border-l-4 ${group.themeColor === 'primary' ? 'border-primary' : 'border-emerald-500'}`}>
                <h3 className="text-3xl font-display font-bold text-slate-800 mb-2">{group.title}</h3>
                <p className="text-slate-500 text-sm">{group.description}</p>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {group.items.map((patient, index) => (
                  <div
                    key={index}
                    className={`group flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:-translate-x-[-4px] ${group.themeColor === 'primary' ? 'hover:border-primary/30' : 'hover:border-emerald-500/30'}`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${patient.bgClass} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform mr-5`}>
                      <span className={`material-symbols-outlined text-2xl ${patient.textClass}`}>{patient.icon}</span>
                    </div>
                    <p className="text-slate-700 font-medium text-lg leading-snug">{patient.label}</p>
                    
                    {/* Subtle Arrow Indicator on Hover */}
                    <span className={`material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${patient.textClass}`}>
                      arrow_forward
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Patients;
