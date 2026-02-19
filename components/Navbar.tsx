import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'O mnie', href: '#o-mnie' },
  { label: 'Pacjenci', href: '#komu-pomagam' },
  { label: 'Doświadczenie', href: '#doswiadczenie' },
  { label: 'Wizyta', href: '#wizyta' },
  { label: 'Historie', href: '#historie' },
  { label: 'Kontakt', href: '#kontakt' },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [],
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-[0_2px_20px_rgba(255,204,203,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick('#hero'); }}
            className="relative z-10 shrink-0"
          >
            <img
              src="/assets/fizjociocia_logo.webp"
              alt="Fizjociocia"
              className={`transition-all duration-500 ${scrolled ? 'h-8 md:h-9' : 'h-9 md:h-10'}`}
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleClick(href); }}
                    className="group relative px-4 py-2 text-[13px] font-semibold tracking-wide uppercase text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {label}
                    {/* Organic scribble underline */}
                    <span
                      className={`absolute left-2 right-2 -bottom-0.5 h-[3px] rounded-full bg-primary origin-left transition-transform duration-300 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%' }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Hamburger — custom drawn lines for that hand-made feel */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center -mr-2"
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-[2.5px] rounded-full bg-slate-800 transition-all duration-300 origin-center ${
                  mobileOpen ? 'translate-y-[9px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[2.5px] rounded-full bg-slate-800 transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-[2.5px] rounded-full bg-slate-800 transition-all duration-300 origin-center ${
                  mobileOpen ? '-translate-y-[9px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-soft-beige/95 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            {/* Decorative blobs in background */}
            <div className="absolute top-10 right-10 w-48 h-48 bg-pastel-yellow/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-56 h-56 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pastel-mint/20 rounded-full blur-3xl" />

            <nav className="relative z-10">
              <ul className="flex flex-col items-center gap-6">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); handleClick(href); }}
                      className="text-2xl font-display font-bold text-slate-800 hover:text-primary transition-colors tracking-tight"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Subtle bottom tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 text-xs tracking-[0.25em] uppercase text-slate-400 font-body"
            >
              Fizjoterapia pediatryczna
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
