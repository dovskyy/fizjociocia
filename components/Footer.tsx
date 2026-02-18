import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="py-20 border-t border-slate-100 bg-white/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div 
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="flex items-center gap-2"
          >
            <img
              src="/assets/fizjociocia_logo.webp"
              alt="Fizjociocia"
              className="h-12 md:h-14"
            />
          </motion.div>

          <motion.div 
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm font-bold uppercase tracking-widest text-slate-400"
          >
            {['Początek', 'O mnie', 'Pacjenci', 'Metody', 'Kontakt'].map((item, i) => {
                 const href = ['#hero', '#o-mnie', '#komu-pomagam', '#doswiadczenie', '#kontakt'][i];
                 return (
                    <motion.a 
                        key={item}
                        whileHover={{ scale: 1.1, color: "#ffcccb" }}
                        href={href} 
                        className="transition-colors"
                    >
                        {item}
                    </motion.a>
                 )
            })}
          </motion.div>
        </div>

        <motion.div 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center text-slate-300 text-xs font-light tracking-[0.2em] leading-loose"
        >
          &copy; 2026 MGR MARCELINA KOCHANOWSKA - FIZJOCIOCIA<br />
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
