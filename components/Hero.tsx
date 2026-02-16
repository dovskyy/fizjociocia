import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[75vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-pastel-yellow/15 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-primary/15 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-[50vw] h-[50vw] bg-pastel-mint/15 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000 transform -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 relative z-20">
            <div className="relative">
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-primary/70 mb-4">
                Fizjoterapia dziecięca
              </p>

              <h1 className="font-display font-bold leading-[0.9] tracking-tight text-slate-900 mb-6 relative z-10">
                <span className="block text-[10vw] lg:text-[3.8vw] font-extrabold">Marcelina</span>
                <span className="block text-[10vw] lg:text-[3.8vw] font-extrabold">Kochanowska</span>
                <span className="block mt-3 text-[8vw] lg:text-[3vw] italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-primary to-pastel-yellow pb-3">
                  Fizjociocia
                </span>
              </h1>

              <p className="text-base lg:text-lg leading-relaxed text-slate-600 font-light mb-10 max-w-md relative z-10">
                Fizjoterapia pediatryczna oparta na metodzie NDT-Bobath i terapii integracji sensorycznej. Pomagam dzieciom odkrywać radość z ruchu — w ich własnym tempie.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center relative z-10">
                <a href="#o-mnie" className="group relative py-4 px-9 inline-block">
                  <span className="absolute inset-0 bg-slate-900 scribble-border transform rotate-2 group-hover:rotate-1 transition-transform duration-300 shadow-lg group-hover:shadow-primary/50"></span>
                  <span className="relative font-bold text-base text-white group-hover:text-primary-50 transition-colors">
                    Przejdź dalej
                  </span>
                </a>
                <div className="flex flex-col gap-1 text-xs font-bold tracking-widest uppercase text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-slate-300"></span>
                    mgr fizjoterapii
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-primary/50"></span>
                    <span className="text-primary/80">NDT-Bobath</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content - round organic shape with animated effects */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            <div className="relative w-[320px] h-[380px] sm:w-[380px] sm:h-[440px] lg:w-[420px] lg:h-[480px]">
              {/* Animated floating border */}
              <div className="absolute top-8 right-8 w-full h-full border-[3px] border-slate-900/10 scribble-border-rev transform rotate-3 scale-95 z-0 floating-slow"></div>

              {/* Decorative blobs */}
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-pastel-yellow rounded-full blur-2xl opacity-60 z-0 floating-fast"></div>
              <div className="absolute bottom-10 -right-5 w-36 h-36 bg-pastel-mint rounded-full blur-3xl opacity-50 z-0 floating-slow"></div>

              {/* Main Image Container with hover */}
              <div className="relative w-full h-full z-10 group">
                <div className="absolute inset-0 bg-white scribble-border scale-[1.04] shadow-2xl z-0 transition-transform duration-700 group-hover:scale-[1.05] group-hover:rotate-1"></div>
                <div className="relative w-full h-full scribble-border overflow-hidden z-10 bg-gray-100">
                  <img
                    src="/assets/fizjociocia_hero_3.webp"
                    alt="Marcelina Kochanowska - Fizjociocia"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
