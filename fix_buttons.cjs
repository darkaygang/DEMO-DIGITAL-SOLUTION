const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCard.tsx', 'utf8');

code = code.replace(/active:scale-\[0\.98\]/g, "active:scale-[0.98] hover:scale-[1.03]");

fs.writeFileSync('src/components/ProductCard.tsx', code);

let codeFeat = fs.readFileSync('src/components/FeaturedModels.tsx', 'utf8');
codeFeat = codeFeat.replace(/active:scale-\[0\.98\]/g, "active:scale-[0.98] hover:scale-[1.03]");
fs.writeFileSync('src/components/FeaturedModels.tsx', codeFeat);
