import React from 'react';

const About: React.FC = () => {
  return (
    <section id="o-mnie" className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      <div
        className="absolute inset-0 -z-[5] opacity-[0.2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/fizjociocia_bg.webp')" }}
      ></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-4 items-center">

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative z-10 scribble-border overflow-hidden aspect-square border-[12px] border-white shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxOu7UsM58a7V_R8x1hI6798ODZxHdmbObnjHWfI9Efdf5bQa2IVQMdQfs0EfQVogvMv0nf7gAnFjg1cLBPapgJwp2sGhfvVaAor1JLVImCpblohFuzhvdgnPYVFy9EBX3kez0bpyJjI8z-kvrRYMArvjBT3sccbUhLYS_vHklHjFIg06hJSVnQ50K52iz5KB0gLmLFu0KT-RoujOWg-iDLXHbFP04QIy1yKQupMS542TNrxjec3QC4wOkjG1zv1ITUCICEw7CGiY"
                alt="Marcelina Kochanowska - fizjoterapeutka pediatryczna"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pastel-blue/40 scribble-border -z-10 floating-slow"></div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-8 mt-20 lg:mt-0">
            <h2 className="text-6xl font-display font-bold mb-10 leading-tight">
              <span className="text-primary italic">Przewodniczka</span> <br />
              małych odkrywców.
            </h2>
            <div className="space-y-8 text-lg text-slate-600 font-light">
              <p>
                  Wspieram małych odkrywców w ich codziennych wyzwaniach.
                  Pomagam wszystkim dzieciom, również tym z trudnościami rozwojowymi i neurologicznymi - rozwijać sprawność, samodzielność i pewność siebie.
                  Łączę wiedzę medyczną z uważnością i indywidualnym podejściem, bo każde dziecko zasługuje na opiekę dostosowaną do jego potrzeb.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-12 flex flex-col gap-6">
              <div className="flex items-center gap-5 group">
                <div className="shrink-0 w-5 h-5 rounded-full bg-pastel-blue ring-2 ring-pastel-blue ring-offset-4 ring-offset-white shadow-sm transition-transform group-hover:scale-110"></div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Wykształcenie</h4>
                  <p className="text-slate-500 italic">Magister Fizjoterapii — AWF Poznań</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="shrink-0 w-5 h-5 rounded-full bg-primary ring-2 ring-primary ring-offset-4 ring-offset-white shadow-sm transition-transform group-hover:scale-110"></div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Certyfikacja</h4>
                  <p className="text-slate-500 italic">Terapeuta NDT-Bobath</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="shrink-0 w-5 h-5 rounded-full bg-pastel-mint ring-2 ring-pastel-mint ring-offset-4 ring-offset-white shadow-sm transition-transform group-hover:scale-110"></div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Specjalizacja</h4>
                  <p className="text-slate-500 italic">Terapeuta Integracji Sensorycznej (SI)</p>
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
