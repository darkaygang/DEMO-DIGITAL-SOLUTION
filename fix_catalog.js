const fs = require('fs');
let code = fs.readFileSync('src/components/Catalog.tsx', 'utf8');
code = code.replace(/\{\/\* 3\. Curtain Transition from Featured Products \*\/\}(.|\n)*?style=\{\{ zIndex: -1 \}\}\n\s*\/>\n\s*<div className="pt-20 sm:pt-28"><\/div>/, '');
fs.writeFileSync('src/components/Catalog.tsx', code);
