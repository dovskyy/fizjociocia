import React from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const Services: React.FC = () => {
  return (
    <section id="doswiadczenie" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      <div
        className="absolute inset-0 -z-[5] opacity-[0.2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/fizjociocia_bg_4.webp')" }}
      ></div>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection className="text-center lg:text-left mb-12 md:mb-20">
          <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase block mb-4">
            Metody terapii
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-tight">
              Narzędzia <br/>
              <span className="text-primary italic">wsparcia.</span>
            </h2>
            <p className="max-w-md mx-auto lg:mx-0 text-slate-600 text-lg font-light leading-relaxed lg:border-l-4 lg:border-primary/20 lg:pl-6">
              Nieustanna nauka to mój sposób na zapewnienie Twojemu dziecku bezpieczeństwa i komfortu, na jakie zasługuje.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12" staggerDelay={0.15} initialDelay={0.1}>

          <StaggerItem>
            <div className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-t-4 border-primary h-full">
              <span className="absolute -right-6 -top-10 font-display font-bold text-[8rem] md:text-[12rem] text-primary/10 select-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                01
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  NDT-Bobath
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Uznana na świecie metoda terapii. Normalizacja napięcia, poprawa kontroli posturalnej i nauka prawidłowych wzorców ruchowych.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>Obrót, siad, czworakowanie, chód</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>Praca nad jakością ruchu</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>Wspieranie samodzielności</span>
                  </li>
                </ul>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-t-4 border-emerald-400 h-full">
              <span className="absolute -right-6 -top-10 font-display font-bold text-[8rem] md:text-[12rem] text-emerald-500/10 select-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                02
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-emerald-500 transition-colors">
                  Integracja Sensoryczna
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Diagnoza i terapia SI w oparciu o Polskie Standaryzowane Testy (PSTIS) oraz system KATIS dla młodszych dzieci.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <span className="material-symbols-outlined text-emerald-500 text-lg shrink-0">check_circle</span>
                    <span>Kłopoty z koncentracją</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <span className="material-symbols-outlined text-emerald-500 text-lg shrink-0">check_circle</span>
                    <span>Nadwrażliwość na bodźce</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <span className="material-symbols-outlined text-emerald-500 text-lg shrink-0">check_circle</span>
                    <span>Wybiórczość pokarmowa</span>
                  </li>
                </ul>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-t-4 border-amber-400 h-full">
              <span className="absolute -right-6 -top-10 font-display font-bold text-[8rem] md:text-[12rem] text-amber-500/10 select-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                03
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-amber-500 transition-colors">
                  Terapia Funkcjonalna
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Kompleksowa ocena i terapia stawów — od stopy po obręcz barkową. Korekcja wad postawy i edukacja.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <span className="material-symbols-outlined text-amber-500 text-lg shrink-0">check_circle</span>
                    <span>Korekcja wad postawy</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <span className="material-symbols-outlined text-amber-500 text-lg shrink-0">check_circle</span>
                    <span>Instruktaż pielęgnacyjny</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <span className="material-symbols-outlined text-amber-500 text-lg shrink-0">check_circle</span>
                    <span>Ćwiczenia do domu</span>
                  </li>
                </ul>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;
