import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Magnetic Button Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    // Drastically reduced movement range (dividing by 5)
    const x = (clientX - (left + width / 2)) / 5;
    const y = (clientY - (top + height / 2)) / 5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const xButton = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const yButton = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

  return (
    <section ref={ref} id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Animated Blobs - Parallax & Organic Motion */}
      <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-pastel-yellow/20 mix-blend-multiply blur-[80px]"
          />
          <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0],
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/15 mix-blend-multiply blur-[90px]"
          />
          <motion.div 
             animate={{ 
                scale: [1, 1.1, 0.9, 1],
                borderRadius: ["50% 50% 50% 50% / 50% 50% 50% 50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 50% 50% / 50% 50% 50% 50%"]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-20 left-1/2 w-[50vw] h-[50vw] bg-pastel-mint/15 mix-blend-multiply blur-[100px] transform -translate-x-1/2"
          />
      </motion.div>


      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Text Content - Staggered Reveal */}
          <motion.div 
            style={{ y: yText }}
            className="order-2 lg:order-1 relative z-20"
          >
            <div className="relative">
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                  }
                }}
                className="font-display font-bold leading-[0.9] tracking-tight text-slate-900 mb-8 relative z-10"
              >
                  <motion.span variants={{ hidden: { y: 20, opacity: 0, filter: "blur(10px)" }, visible: { y: 0, opacity: 1, filter: "blur(0px)" } }} className="block mt-3 text-[7vw] lg:text-[2.5vw] italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-primary to-pastel-yellow pb-2">
                    Fizjociocia
                  </motion.span>
                  <motion.span variants={{ hidden: { y: 40, opacity: 0, filter: "blur(10px)" }, visible: { y: 0, opacity: 1, filter: "blur(0px)" } }} className="block text-[11vw] lg:text-[4.2vw] font-extrabold text-slate-800">Marcelina</motion.span>
                  <motion.span variants={{ hidden: { y: 40, opacity: 0, filter: "blur(10px)" }, visible: { y: 0, opacity: 1, filter: "blur(0px)" } }} className="block text-[11vw] lg:text-[4.2vw] font-extrabold text-slate-800">Kochanowska</motion.span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-base lg:text-lg leading-relaxed text-slate-600 font-light mb-10 max-w-md relative z-10"
              >
                Fizjoterapia pediatryczna oparta na metodzie NDT-Bobath i terapii integracji sensorycznej. Pomagam dzieciom odkrywać radość z ruchu — w ich własnym tempie.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-8 items-start sm:items-center relative z-10"
              >
                <motion.a 
                  href="#o-mnie" 
                  className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-base text-white bg-slate-900 rounded-full shadow-lg hover:bg-slate-800 hover:shadow-primary/40 transition-all duration-300"
                  style={{ x: xButton, y: yButton }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">
                    Przejdź dalej
                  </span>
                </motion.a>

                <div className="flex flex-col gap-2 text-xs font-bold tracking-widest uppercase text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-slate-300"></span>
                    mgr fizjoterapii
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-slate-300"></span>
                    NDT-Bobath
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual Content - Parallax Image & Morphing Shape */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center perspective-1000">
            <motion.div 
                style={{ y: yImage }}
                className="relative w-[320px] h-[380px] sm:w-[380px] sm:h-[440px] lg:w-[420px] lg:h-[480px]"
            >
              {/* Animated floating border - REVERTED to CSS animation */}
              <div className="absolute top-8 right-8 w-full h-full border-[3px] border-slate-900/10 scribble-border-rev transform rotate-3 scale-95 z-0 floating-slow"></div>

              {/* Decorative blobs - REVERTED to CSS animation */}
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-pastel-yellow rounded-full blur-2xl opacity-60 z-0 floating-fast"></div>
              <div className="absolute bottom-10 -right-5 w-36 h-36 bg-pastel-mint rounded-full blur-3xl opacity-50 z-0 floating-slow"></div>

              {/* Main Image Container - REVERTED structure but kept Entrance Animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-full h-full z-10 group"
              >
                <div className="absolute inset-0 bg-white scribble-border scale-[1.04] shadow-2xl z-0 transition-transform duration-700 group-hover:scale-[1.05] group-hover:rotate-1"></div>
                <div className="relative w-full h-full scribble-border overflow-hidden z-10 bg-gray-100">
                  <img
                    src="/assets/fizjociocia_hero_3.webp"
                    alt="Marcelina Kochanowska - Fizjociocia"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
