import React from 'react';

const About: React.FC = () => {
  return (
    <section id="o-mnie" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-4 items-center">
          
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative z-10 scribble-border overflow-hidden aspect-square border-[12px] border-white shadow-xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxOu7UsM58a7V_R8x1hI6798ODZxHdmbObnjHWfI9Efdf5bQa2IVQMdQfs0EfQVogvMv0nf7gAnFjg1cLBPapgJwp2sGhfvVaAor1JLVImCpblohFuzhvdgnPYVFy9EBX3kez0bpyJjI8z-kvrRYMArvjBT3sccbUhLYS_vHklHjFIg06hJSVnQ50K52iz5KB0gLmLFu0KT-RoujOWg-iDLXHbFP04QIy1yKQupMS542TNrxjec3QC4wOkjG1zv1ITUCICEw7CGiY" 
                alt="Czułość" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pastel-blue/40 scribble-border -z-10 floating-slow"></div>
            <div className="absolute -top-10 -right-10 font-handwritten text-6xl text-pastel-yellow transform -rotate-12 opacity-60">
              Dotyk &amp; Serce
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-8 mt-20 lg:mt-0">
            <h2 className="text-6xl font-display font-bold mb-10 leading-tight">
              Marcelina. <br />
              <span className="text-primary italic">Przewodniczka</span> <br />
              małych odkrywców.
            </h2>
            <div className="space-y-8 text-lg text-slate-600 font-light">
              <p>
                Jako magister fizjoterapii z 6-letnim doświadczeniem, nie patrzę na dziecko jak na zestaw mięśni i stawów. Widzę w nim nieograniczony potencjał, który czasem potrzebuje jedynie delikatnego, fachowego wskazania drogi.
              </p>
              <p className="font-handwritten text-3xl text-slate-800 leading-snug">
                "Moim zadaniem jest szeptanie ciału dziecka, że potrafi rzeczy, o których jeszcze nie śniło."
              </p>
            </div>
            
            <div className="mt-12 flex flex-col gap-6">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-pastel-mint flex items-center justify-center text-emerald-600 transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">child_care</span>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Certyfikacja</h4>
                  <p className="text-slate-500 italic">Specjalistka NDT Bobath Baby</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;