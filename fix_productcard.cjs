const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCard.tsx', 'utf8');

code = code.replace(/import React from 'react';/, "import React from 'react';\nimport { motion } from 'motion/react';");

code = code.replace(/<div\n\s*onClick=\{([^}]+)\}\n\s*className=\{cardClass\}/, 
`<motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
      }}
      onClick={$1}
      className={cardClass}`);
code = code.replace(/<\/div>\n\s*\);\n\};/, `</motion.div>\n  );\n};`);

fs.writeFileSync('src/components/ProductCard.tsx', code);
