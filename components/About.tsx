import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="o-mnie" className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      <div
        className="absolute inset-0 -z-[5] opacity-[0.2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/fizjociocia_bg.webp')" }}
      ></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 lg:gap-4 items-center">

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5 relative"
          >
            <div className="relative z-10 scribble-border overflow-hidden aspect-square border-[12px] border-white shadow-xl">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxOu7UsM58a7V_R8x1hI6798ODZxHdmbObnjHWfI9Efdf5bQa2IVQMdQfs0EfQVogvMv0nf7gAnFjg1cLBPapgJwp2sGhfvVaAor1JLVImCpblohFuzhvdgnPYVFy9EBX3kez0bpyJjI8z-kvrRYMArvjBT3sccbUhLYS_vHklHjFIg06hJSVnQ50K52iz5KB0gLmLFu0KT-RoujOWg-iDLXHbFP04QIy1yKQupMS542TNrxjec3QC4wOkjG1zv1ITUCICEw7CGiY"
                alt="Marcelina Kochanowska - fizjoterapeutka pediatryczna"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-48 h-48 bg-pastel-blue/40 scribble-border -z-10"
            ></motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="col-span-12 lg:col-span-6 lg:col-start-8 mt-12 lg:mt-0"
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-6xl font-display font-bold mb-10 leading-tight">
              <span className="text-primary italic">Przewodniczka</span> <br />
              małych odkrywców.
            </motion.h2>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-8 text-lg text-slate-600 font-light">
              <p>
                  Wspieram małych odkrywców w ich codziennych wyzwaniach.
                  Pomagam wszystkim dzieciom, również tym z trudnościami rozwojowymi i neurologicznymi - rozwijać sprawność, samodzielność i pewność siebie.
                  Łączę wiedzę medyczną z uważnością i indywidualnym podejściem, bo każde dziecko zasługuje na opiekę dostosowaną do jego potrzeb.
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mt-12 flex flex-col gap-6">
              {[
                  { color: "bg-pastel-blue", ring: "ring-pastel-blue", title: "Wykształcenie", desc: "Magister Fizjoterapii — AWF Poznań" },
                  { color: "bg-primary", ring: "ring-primary", title: "Certyfikacja", desc: "Terapeuta NDT-Bobath" },
                  { color: "bg-pastel-mint", ring: "ring-pastel-mint", title: "Specjalizacja", desc: "Terapeuta Integracji Sensorycznej (SI)" }
              ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-center gap-5 group"
                  >
                    <div className={`shrink-0 w-5 h-5 rounded-full ${item.color} ring-2 ${item.ring} ring-offset-4 ring-offset-white shadow-sm transition-transform group-hover:scale-125 duration-300`}></div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-xs mb-1">{item.title}</h4>
                      <p className="text-slate-500 italic">{item.desc}</p>
                    </div>
                  </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
