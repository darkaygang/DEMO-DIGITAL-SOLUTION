const fs = require('fs');
let code = fs.readFileSync('src/components/ui/SectionTransition.tsx', 'utf8');

const regex = /let hidden = \{\};(.|\n)*?<\/motion\.div>/;

const replacement = `
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
`;

code = code.replace(regex, replacement.trim());
fs.writeFileSync('src/components/ui/SectionTransition.tsx', code);
