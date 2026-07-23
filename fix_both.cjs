const fs = require('fs');
let codeHero = fs.readFileSync('src/components/Hero.tsx', 'utf8');

codeHero = codeHero.replace(/<\/motion\.div>\s*<\/div>\s*<\/motion\.div>\s*<\/div>\s*<\/motion\.div>\s*<\/div>/g, 
  `</motion.div>\n          </div>\n        </motion.div>\n      </div>`);

fs.writeFileSync('src/components/Hero.tsx', codeHero);

let codeFeat = fs.readFileSync('src/components/FeaturedModels.tsx', 'utf8');
codeFeat = codeFeat.replace(/<\/div>\s*\{\/\* Secondary Curated Cards \*\/\}/g, 
  `</motion.div>\n\n            {/* Secondary Curated Cards */}`);
fs.writeFileSync('src/components/FeaturedModels.tsx', codeFeat);
