import React from 'react';

const patients = [
  { icon: 'neurology', label: 'Mózgowe porażenie dziecięce (MPD)', bgClass: 'bg-primary/10', textClass: 'text-primary' },
  { icon: 'genetics', label: 'Wady genetyczne', bgClass: 'bg-primary/10', textClass: 'text-primary' },
  { icon: 'pediatrics', label: 'Wcześniactwo', bgClass: 'bg-emerald-400/10', textClass: 'text-emerald-400' },
  { icon: 'accessibility_new', label: 'Zaburzenia napięcia mięśniowego', bgClass: 'bg-emerald-400/10', textClass: 'text-emerald-400' },
  { icon: 'directions_walk', label: 'Trudności w rozwoju ruchowym', bgClass: 'bg-yellow-500/10', textClass: 'text-yellow-500' },
  { icon: 'psychology', label: 'Zaburzenia integracji sensorycznej', bgClass: 'bg-yellow-500/10', textClass: 'text-yellow-500' },
  { icon: 'emoji_people', label: 'Spektrum autyzmu (ASD)', bgClass: 'bg-primary/10', textClass: 'text-primary' },
  { icon: 'straighten', label: 'Wady postawy', bgClass: 'bg-emerald-400/10', textClass: 'text-emerald-400' },
];

const Patients: React.FC = () => {
  return (
    <section id="komu-pomagam" className="py-40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-pastel-mint/15 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-pastel-yellow/15 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-6 block">Komu pomagam</span>
          <h2 className="text-7xl font-display font-bold leading-none mb-8">
            Każde dziecko <br />
            <span className="text-outline">jest wyjątkowe.</span>
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Pracuję z dziećmi, które potrzebują indywidualnego wsparcia w rozwoju. Bez schematów — z uwzględnieniem potencjału, możliwości i tempa każdego malucha.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {patients.map((patient, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 scribble-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 rounded-2xl ${patient.bgClass} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <span className={`material-symbols-outlined text-2xl ${patient.textClass}`}>{patient.icon}</span>
                </div>
                <p className="text-slate-700 font-medium leading-snug pt-2">{patient.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patients;
