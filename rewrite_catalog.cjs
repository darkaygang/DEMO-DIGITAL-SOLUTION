const fs = require('fs');
let code = fs.readFileSync('src/components/Catalog.tsx', 'utf8');

code = code.replace(/bg-\[#080808\]/g, 'bg-[#0A0E17]');
// SectionHeading is in a RevealTransition. We need a mask reveal vertical
// <RevealTransition type="clip-path">
code = code.replace(/<RevealTransition type="fade-up" staggerChildren=\{0\.1\}>/g, '<RevealTransition type="clip-path">');

// Stagger logic for cards.
// We want first time 70ms stagger, afterwards max 200ms duration
// The popLayout AnimatePresence handles it. 
// We just need to change the duration to 0.16 -> 0.2
code = code.replace(/transition=\{\{ duration: 0\.16 \}\}/g, 'transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}');

// Remove `<Reveal delay={0.3} y={12} duration={0.6}>` wrapper around CategoryFilters since we handled it inside the component.
code = code.replace(/<Reveal delay=\{0\.3\} y=\{12\} duration=\{0\.6\}>\s*(<CategoryFilters[\s\S]*?\/>)\s*<\/Reveal>/, '$1');

fs.writeFileSync('src/components/Catalog.tsx', code);
