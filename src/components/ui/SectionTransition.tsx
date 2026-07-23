import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface Props {
  children: React.ReactNode;
  delay?: number;
  type?: 'fade-up' | 'clip-path' | 'gallery-shelf' | 'none';
  className?: string;
  staggerChildren?: number;
}

export const RevealTransition: React.FC<Props> = ({
  children,
  delay = 0,
  type = 'fade-up',
  className = '',
  staggerChildren,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: () => {
      if (prefersReducedMotion) return { opacity: 0 };
      if (type === 'clip-path') return { opacity: 0, clipPath: 'inset(100% 0 0 0)' };
      if (type === 'gallery-shelf') return { opacity: 0, y: 30, scale: 0.95 };
      if (type === 'fade-up') return { opacity: 0, y: 40 };
      return { opacity: 0 };
    },
    visible: () => {
      if (prefersReducedMotion) return { opacity: 1 };
      if (type === 'clip-path') return { opacity: 1, clipPath: 'inset(0% 0 0 0)' };
      if (type === 'gallery-shelf') return { opacity: 1, y: 0, scale: 1 };
      if (type === 'fade-up') return { opacity: 1, y: 0 };
      return { opacity: 1 };
    }
  };

  const transitionConfig = {
    duration: prefersReducedMotion ? 0.3 : 0.8,
    delay: prefersReducedMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1],
    staggerChildren: prefersReducedMotion ? 0 : staggerChildren,
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transitionConfig}
      className={className}
    >
      {children}
    </motion.div>
  );
};
