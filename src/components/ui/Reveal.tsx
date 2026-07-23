import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: any;
  staggerChildren?: number;
  clipPathReveal?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 22,
  duration = 0.75,
  className = '',
  as = 'div',
  staggerChildren,
  clipPathReveal = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as as keyof typeof motion] || motion.div;

  const hidden = {
    opacity: 0,
    ...(prefersReducedMotion ? {} : clipPathReveal ? { clipPath: 'inset(100% 0 0 0)' } : { y }),
  };

  const visible = {
    opacity: 1,
    ...(prefersReducedMotion ? {} : clipPathReveal ? { clipPath: 'inset(0 0 0 0)' } : { y: 0 }),
    transition: {
      duration: prefersReducedMotion ? 0.1 : duration,
      delay: prefersReducedMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: prefersReducedMotion ? 0 : staggerChildren,
    },
  };

  return (
    <Component
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      className={className}
    >
      {children}
    </Component>
  );
};
