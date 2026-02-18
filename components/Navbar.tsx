import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const NAV_LINKS = [
  { label: 'O mnie',    href: '#o-mnie',        sectionId: 'o-mnie' },
  { label: 'Pacjenci',  href: '#komu-pomagam',  sectionId: 'komu-pomagam' },
  { label: 'Metody',    href: '#doswiadczenie',  sectionId: 'doswiadczenie' },
  { label: 'Opowieści', href: '#historie',       sectionId: 'historie' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver — śledzi aktywną sekcję
  useEffect(() => {
    const allSectionIds = [...NAV_LINKS.map(l => l.sectionId), 'kontakt'];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Bierzemy sekcję z największym intersectionRatio
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.4], rootMargin: '-10% 0px -60% 0px' }
    );

    allSectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-500 ease-in-out ${
        isScrolled ? 'bg-soft-beige/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className={`mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500 ease-in-out ${
        isScrolled ? 'max-w-7xl' : 'max-w-[1920px]'
      }`}>
        <motion.a
          href="#hero"
          className="group flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/assets/fizjociocia_logo.webp"
            alt="Fizjociocia"
            className={`transition-all duration-500 ease-in-out ${isScrolled ? 'h-9 md:h-11' : 'h-12 md:h-14'}`}
          />
        </motion.a>

        {/* Desktop Menu */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.15em] text-slate-600"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                className={`relative group/link py-2 transition-colors ${isActive ? 'text-slate-900' : 'hover:text-primary'}`}
              >
                {item.label}
                {/* Active indicator — animowany pasek */}
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-primary rounded-full"
                  initial={false}
                  animate={{ width: isActive ? '100%' : '0%', opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
                {/* Hover underline dla nieaktywnych */}
                {!isActive && (
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary/50 transition-all duration-300 group-hover/link:w-full rounded-full" />
                )}
              </motion.a>
            );
          })}

          <motion.a
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#kontakt"
            className={`px-7 py-3 rounded-full border shadow-sm transition-colors duration-300 ml-4 ${
              activeSection === 'kontakt'
                ? 'bg-primary text-slate-800 border-primary'
                : 'bg-white border-slate-200 hover:bg-primary hover:text-white hover:border-primary'
            }`}
          >
            Kontakt
          </motion.a>
        </motion.div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-slate-800 p-2">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pastel-blue via-primary to-pastel-yellow origin-left"
        style={{ scaleX }}
      />
    </motion.nav>
  );
};

export default Navbar;
