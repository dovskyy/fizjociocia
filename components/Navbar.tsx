import { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const NAV_LINKS = [
  { label: 'O mnie', href: '#o-mnie' },
  { label: 'Pacjenci', href: '#komu-pomagam' },
  { label: 'Doświadczenie', href: '#doswiadczenie' },
  { label: 'Wizyta', href: '#wizyta' },
  { label: 'Historie', href: '#historie' },
  { label: 'Kontakt', href: '#kontakt' },
] as const;

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', onChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, [breakpoint]);

  return isMobile;
};

const Navbar = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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

  if (isMobile) return null;

  const handleClick = useCallback(
    (href: string) => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [],
  );

  return (
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 animate-navbar-slide-in ${
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
          <ul className="flex items-center gap-1">
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

        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pastel-blue via-primary to-pastel-yellow origin-left"
          style={{ scaleX }}
        />
      </nav>
  );
};

export default Navbar;
