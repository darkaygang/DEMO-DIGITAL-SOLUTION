const fs = require('fs');
let code = fs.readFileSync('src/components/FeaturedModels.tsx', 'utf8');

code = code.replace(/<\/motion\.div>\n\s*<\/RevealTransition>/, `</div>\n        </RevealTransition>`);
code = code.replace(/<\/div>\n\s*\{\/\* Secondary Curated Cards \*\/\}/, `</motion.div>\n\n            {/* Secondary Curated Cards */}`);

if (!code.includes("import { motion }")) {
    code = code.replace("import React from 'react';", "import React from 'react';\nimport { motion } from 'motion/react';");
}

fs.writeFileSync('src/components/FeaturedModels.tsx', code);
