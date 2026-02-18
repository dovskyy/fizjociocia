import React from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const Stories: React.FC = () => {
  return (
    <section id="historie" className="py-16 md:py-24 relative overflow-hidden bg-soft-beige">
      <div className="absolute top-10 left-10 w-64 h-64 bg-pastel-mint/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-10 md:mb-20 relative">
          <span className="inline-block px-4 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 shadow-sm rotate-[-2deg]">
            Pamiętnik Sukcesów
          </span>
          <h2 className="text-3xl md:text-6xl font-display font-bold text-slate-800 relative">
            Małe kroki,
            <div className="absolute -top-[-2rem] -right-16 lg:right-[15rem] pointer-events-none select-none" style={{ transform: 'scaleX(-1)' }}>
              <img
                src="/assets/baloons_teddybear.webp"
                alt=""
                aria-hidden="true"
                className="w-36 lg:w-[19rem] opacity-60 floating-slow"
              />
            </div>
            <br/>
            <span className="text-sky-300 italic">wielkie zmiany.</span>
          </h2>
        </AnimatedSection>

        {/* Scrapbook Layout */}
        <StaggerContainer
          className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-8 pt-10"
          staggerDelay={0.2}
          initialDelay={0.1}
        >

          {/* Story 1: Filip */}
          <StaggerItem direction="left">
            <div className="relative group perspective-1000">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/80 shadow-sm rotate-[-3deg] z-20 backdrop-blur-sm"></div>
              <div className="bg-white p-4 pb-16 shadow-lg rotate-[-2deg] transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:shadow-2xl max-w-sm">
                <div className="aspect-[4/5] overflow-hidden bg-slate-100 mb-4 border border-slate-100 relative">
                  <img
                    src="/assets/fizjociocia_kid_3.webp"
                    alt="Filip"
                    className="w-full h-full object-cover filter sepia-[0.2]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="text-center font-handwritten text-3xl text-slate-700 -rotate-1">
                  Filip, 4 lata
                </div>
              </div>
              <div className="lg:absolute lg:top-20 lg:-right-48 w-64 bg-pastel-yellow p-6 shadow-md rotate-[3deg] lg:rotate-[5deg] mt-8 lg:mt-0 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-400 shadow-sm border border-red-500 z-10"></div>
                <p className="font-handwritten text-xl leading-relaxed text-slate-700">
                  "Nie siadał samodzielnie. Po kilku sesjach siedzi pewnie i próbuje wstawać. To było dla nas wszystkich ogromne święto!"
                </p>
                <div className="mt-4 text-right text-xs font-sans font-bold text-slate-400 tracking-widest uppercase">
                  Efekt: Rozwój motoryczny
                </div>
              </div>
            </div>
          </StaggerItem>

          <div className="hidden lg:block w-32 h-1"></div>

          {/* Story 2: Zosia */}
          <StaggerItem direction="right">
            <div className="relative group perspective-1000 lg:mt-32">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-100/80 shadow-sm rotate-[2deg] z-20 backdrop-blur-sm"></div>
              <div className="bg-white p-4 pb-16 shadow-lg rotate-[3deg] transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:shadow-2xl max-w-sm">
                <div className="aspect-[4/5] overflow-hidden bg-slate-100 mb-4 border border-slate-100 relative">
                  <img
                    src="/assets/fizjociocia_kid.webp"
                    alt="Zosia"
                    className="w-full h-full object-cover filter sepia-[0.2] scale-x-[-1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="text-center font-handwritten text-3xl text-slate-700 rotate-1">
                  Zosia, 7 lat
                </div>
              </div>
              <div className="lg:absolute lg:bottom-20 lg:-left-56 w-64 bg-pastel-blue/30 p-6 shadow-md rotate-[-2deg] lg:rotate-[-4deg] mt-8 lg:mt-0 relative border border-white/50 backdrop-blur-sm">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 shadow-sm border border-emerald-500 z-10"></div>
                <p className="font-handwritten text-xl leading-relaxed text-slate-700">
                  "Zosia kulała i unikała biegania. Dziś orteza to przeszłość — wygrywa wyścigi z całą klasą!"
                </p>
                <div className="mt-4 text-right text-xs font-sans font-bold text-slate-400 tracking-widest uppercase">
                  Efekt: Sprawność ruchu
                </div>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>

        <AnimatedSection className="text-center mt-12 md:mt-24" delay={0.2}>
          <p className="font-handwritten text-2xl text-slate-400 rotate-[-1deg]">
            ...i wiele innych historii pisanych codziennie.
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Stories;
