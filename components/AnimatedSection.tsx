import { type FC, type ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

// Reusable scroll-reveal wrapper dla całych sekcji
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export const AnimatedSection: FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
}) => {
  const initial = {
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
};

// Staggered container — dzieci animują się po kolei
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

const containerVariants = (stagger: number, initial: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: initial },
  },
});

export const itemVariants = (direction: 'up' | 'left' | 'right' = 'up'): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 35 : 0,
    x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

export const StaggerContainer: FC<StaggerContainerProps> = ({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={containerVariants(staggerDelay, initialDelay)}
  >
    {children}
  </motion.div>
);

// Pojedynczy item do użycia wewnątrz StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

export const StaggerItem: FC<StaggerItemProps> = ({ children, className, direction = 'up' }) => (
  <motion.div className={className} variants={itemVariants(direction)}>
    {children}
  </motion.div>
);
