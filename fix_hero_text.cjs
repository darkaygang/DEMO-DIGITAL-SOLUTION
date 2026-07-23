const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

code = code.replace(/<p className="text-xs text-white\/40 italic font-sans font-normal pt-1">\s*Demo creada por Digital Solution para mostrar cómo podría verse tu propio catálogo\.\s*<\/p>/, 
  `<p className="text-xs text-black/80 font-medium italic font-sans relative z-40 pt-2 drop-shadow-sm">\n            Demo creada por Digital Solution para mostrar cómo podría verse tu propio catálogo.\n          </p>`);

fs.writeFileSync('src/components/Hero.tsx', code);
