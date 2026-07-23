const fs = require('fs');
let code = fs.readFileSync('src/components/DeliverySection.tsx', 'utf8');

if (!code.includes('MrwLogo')) {
    code = code.replace("import { Truck, MapPin, Map, Navigation, ShieldCheck, Clock, Package } from 'lucide-react';", 
    "import { Truck, MapPin, Map, Navigation, ShieldCheck, Clock, Package } from 'lucide-react';\nimport { MrwLogo, ZoomLogo, TealcaLogo } from './ui/Logos';");
}

code = code.replace(/<span className="inline-flex items-center gap-1\.5 px-2\.5 py-1 rounded bg-white\/5 border border-white\/10 text-\[10px\] font-semibold tracking-wider text-white\/80">\s*<Package className="w-3 h-3 text-white\/60" \/> MRW\s*<\/span>/, 
  `<span className="inline-flex items-center px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/80 h-7">\n                  <MrwLogo className="h-3 w-auto opacity-80" />\n                </span>`);

code = code.replace(/<span className="inline-flex items-center gap-1\.5 px-2\.5 py-1 rounded bg-white\/5 border border-white\/10 text-\[10px\] font-semibold tracking-wider text-white\/80">\s*<Package className="w-3 h-3 text-white\/60" \/> ZOOM\s*<\/span>/, 
  `<span className="inline-flex items-center px-2 py-1 rounded-md bg-[#F25A2A]/10 border border-[#F25A2A]/20 text-white/80 h-7">\n                  <ZoomLogo className="h-3.5 w-auto" />\n                </span>`);

code = code.replace(/<span className="inline-flex items-center gap-1\.5 px-2\.5 py-1 rounded bg-white\/5 border border-white\/10 text-\[10px\] font-semibold tracking-wider text-white\/80">\s*<Package className="w-3 h-3 text-white\/60" \/> TEALCA\s*<\/span>/, 
  `<span className="inline-flex items-center px-2 py-1 rounded-md bg-[#00529b]/10 border border-[#00529b]/30 text-white/80 h-7">\n                  <TealcaLogo className="h-4 w-auto" />\n                </span>`);

fs.writeFileSync('src/components/DeliverySection.tsx', code);
