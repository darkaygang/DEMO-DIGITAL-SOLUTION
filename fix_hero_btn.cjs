const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

code = code.replace(/className="inline-flex items-center justify-center gap-2\.5 px-7 py-3\.5 rounded-full liquid-glass-strong hover:bg-white\/10 text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-\[1\.01\] active:scale-\[0\.98\] border border-white\/20"/g, 
  `className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full liquid-glass-strong hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] border border-white/20 animate-pulse-glow"`);

fs.writeFileSync('src/components/Hero.tsx', code);
