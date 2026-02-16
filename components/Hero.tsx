import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[110vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-pastel-yellow/20 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-1/2 w-[60vw] h-[60vw] bg-pastel-mint/20 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000 transform -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">

          {/* Text Content */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative z-20 pt-10 lg:pt-0">
            <div className="relative">


              <h1 className="text-[13vw] lg:text-[7.5vw] font-display font-bold leading-[0.85] tracking-tighter text-slate-900 mb-8 relative z-10">
                Wspólny <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-pastel-yellow font-normal pr-4">
                  Taniec
                </span> <br />
                Rozwoju
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed text-slate-600 font-light mb-12 max-w-md relative z-10">
                W świecie Fizjocioci nie mierzymy postępów w centymetrach, lecz w pewności siebie i uśmiechu. Tworzymy przestrzeń, gdzie nauka ruchu staje się przygodą.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center relative z-10">
                <a href="#kontakt" className="group relative py-5 px-10 inline-block">
                  <span className="absolute inset-0 bg-slate-900 scribble-border transform rotate-2 group-hover:rotate-1 transition-transform duration-300 shadow-lg group-hover:shadow-primary/50"></span>
                  <span className="relative font-bold text-lg text-white group-hover:text-primary-50 transition-colors">
                    Napiszmy ten rozdział
                  </span>
                </a>
                <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-slate-500">
                  <span className="w-8 h-px bg-slate-300"></span>
                  NDT Bobath
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative h-full flex justify-center items-center">
            <div className="relative w-full max-w-[600px] lg:max-w-[750px] aspect-[4/5] lg:aspect-square">
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-full h-full border-[3px] border-slate-900/10 scribble-border-rev transform rotate-3 scale-95 z-0 floating-slow"></div>
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-pastel-yellow rounded-full blur-2xl opacity-60 z-0"></div>
              <div className="absolute bottom-10 right-0 w-48 h-48 bg-pastel-mint rounded-full blur-3xl opacity-50 z-0"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full z-10 group">
                <div className="absolute inset-0 bg-white scribble-border transform -rotate-2 scale-[1.02] shadow-2xl z-0 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.03]"></div>
                <div className="absolute inset-2 overflow-hidden scribble-border z-10 bg-gray-100">
                  <img
                    src="/assets/fizjociocia_hero_3.webp"
                    alt="Marcelina Kochanowska - Fizjociocia"
                    className="w-full h-full object-cover object-center shadow-inner transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                {/* Floating Badge */}


                {/* Hand-drawn arrow SVG */}
                <div className="absolute -top-12 -right-12 z-20 pointer-events-none hidden lg:block">
                  <svg className="w-40 h-40 text-slate-800 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40,160 Q80,60 160,40" strokeLinecap="round" strokeWidth="2"></path>
                    <path d="M150,50 L160,40 L155,60" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}

    </section>
  );
};

export default Hero;