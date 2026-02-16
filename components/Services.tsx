import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="doswiadczenie" className="py-24 bg-white/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-[0.3em] text-slate-800 uppercase mb-4 block">Metody terapii</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7">
            <h2 className="text-5xl lg:text-6xl font-display font-bold leading-none">
              Narzędzia <span className="text-outline">Wsparcia.</span>
            </h2>
            <p className="max-w-sm text-slate-600 text-base border-l-2 border-primary pl-6 py-1 italic">
              Nieustanna nauka to mój sposób na zapewnienie Twojemu dziecku bezpieczeństwa, na jakie zasługuje.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

          {/* NDT-Bobath */}
          <div className="group relative hover:-translate-y-1 transition-all duration-300">
            <span className="absolute -top-6 left-5 font-handwritten text-6xl text-primary/40 leading-none select-none z-20">01</span>
            <div className="relative bg-white p-10 pt-14 scribble-border shadow-sm group-hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-display font-bold mb-2">NDT-Bobath</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Uznana na świecie metoda terapii dzieci z zaburzeniami neurologicznymi. Normalizacja napięcia, poprawa kontroli posturalnej i nauka prawidłowych wzorców ruchowych.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Obrót, siad, czworakowanie, chód
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Praca nad jakością ruchu
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Wspieranie samodzielności
                </li>
              </ul>
            </div>
          </div>

          {/* Integracja Sensoryczna */}
          <div className="group relative hover:-translate-y-1 transition-all duration-300">
            <span className="absolute -top-6 left-5 font-handwritten text-6xl text-emerald-500/40 leading-none select-none z-20">02</span>
            <div className="relative bg-white p-10 pt-14 scribble-border shadow-sm group-hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-display font-bold mb-2">Integracja Sensoryczna</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Diagnoza i terapia SI w oparciu o Polskie Standaryzowane Testy (PSTIS) oraz system KATIS dla młodszych dzieci.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                  Trudności z koncentracją
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                  Nad- i podwrażliwość na bodźce
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                  Wybiórczość pokarmowa
                </li>
              </ul>
            </div>
          </div>

          {/* Fizjoterapia Funkcjonalna */}
          <div className="group relative hover:-translate-y-1 transition-all duration-300">
            <span className="absolute -top-6 left-5 font-handwritten text-6xl text-yellow-600/40 leading-none select-none z-20">03</span>
            <div className="relative bg-white p-10 pt-14 scribble-border shadow-sm group-hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-display font-bold mb-2">Fizjoterapia Funkcjonalna</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Kompleksowa ocena i terapia stawów — od stopy po obręcz barkową. Korekcja wad postawy i instruktaż dla rodziców.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-yellow-500"></span>
                  Korekcja wad postawy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-yellow-500"></span>
                  Instruktaż pielęgnacyjny
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-yellow-500"></span>
                  Program ćwiczeń domowych
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
