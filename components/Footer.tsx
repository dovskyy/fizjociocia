import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';

const Footer = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <footer className="py-8 md:py-12 border-t border-slate-100 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-2">
              <img
                src="/assets/fizjociocia_logo.webp"
                alt="Fizjociocia"
                loading="lazy"
                className="h-10 md:h-12"
              />
            </div>
          </div>
          <div className="mt-6 md:mt-10 text-center text-slate-400 text-xs tracking-[0.2em] leading-loose">
            &copy; 2026 MARCELINA KOCHANOWSKA - FIZJOCIOCIA<br />
            PROJEKT I REALIZACJA: <a href="https://lewcode.pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity font-bold">LEWCODE</a><br />
          </div>
        </div>
      </footer>
    );
  }

  return (
    <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="py-8 md:py-12 border-t border-slate-100 bg-white/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center">
          <motion.div
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="flex items-center gap-2"
          >
            <img
              src="/assets/fizjociocia_logo.webp"
              alt="Fizjociocia"
              loading="lazy"
              className="h-10 md:h-12"
            />
          </motion.div>
        </div>

        <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ delay: 0.5 }}
            className="mt-6 md:mt-10 text-center text-slate-400 text-xs tracking-[0.2em] leading-loose"
        >
          &copy; 2026 MARCELINA KOCHANOWSKA - FIZJOCIOCIA<br />
            PROJEKT I REALIZACJA: <a href="https://lewcode.pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity font-bold">LEWCODE</a><br />
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
