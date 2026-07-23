const fs = require('fs');
let code = fs.readFileSync('src/components/FeaturedModels.tsx', 'utf8');

const lines = code.split('\n');
lines[152] = "              </motion.div>";
fs.writeFileSync('src/components/FeaturedModels.tsx', lines.join('\n'));
