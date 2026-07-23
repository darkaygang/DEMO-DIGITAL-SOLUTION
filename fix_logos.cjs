const fs = require('fs');

const logosCode = `import React from 'react';

export const ZelleLogo = ({ className = "w-16 h-auto" }) => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Zelle_logo.svg" alt="Zelle" className={className} />
);

export const BinanceLogo = ({ className = "w-6 h-6" }) => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png" alt="Binance" className={className} />
);

export const CasheaLogo = ({ className = "w-16 h-auto" }) => (
  <img src="https://cdn.prod.website-files.com/632db6924fcc7661685adfa8/664776c9b680e021178d3a07_Logo_Cashea.png" alt="Cashea" className={className} />
);

export const KreceLogo = ({ className = "w-16 h-auto" }) => (
  <img src="https://play-lh.googleusercontent.com/2sCg_bMGa9uUTi8YYbiw9sU_X7PTJugrrwOGkfIPtIwjIpq62XjHP7Q4QpwsZtBOemcv09SSDw4NKkAaYn8-ig=w240-h480-rw" alt="Krece" className={className} />
);

export const BdvLogo = ({ className = "w-12 h-auto" }) => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Banco_de_Venezuela_logo.svg" alt="Banco de Venezuela" className={className} />
);

export const MrwLogo = ({ className = "w-12 h-auto" }) => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/MRW_logo.svg" alt="MRW" className={className} />
);

export const ZoomLogo = ({ className = "w-14 h-auto" }) => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Grupo_ZOOM_logo.png" alt="Grupo ZOOM" className={className} />
);

export const TealcaLogo = ({ className = "w-16 h-auto" }) => (
  <img src="https://www.tealca.com/wp-content/uploads/2021/06/001_LOGO_HEADER.svg" alt="Tealca" className={className} />
);
`;

fs.writeFileSync('src/components/ui/Logos.tsx', logosCode);
