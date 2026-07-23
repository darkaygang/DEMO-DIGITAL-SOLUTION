const fs = require('fs');

// --- Hero.tsx ---
let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Eyebrow
hero = hero.replace(/CATÁLOGO WEB PARA WHATSAPP/, 'CATÁLOGO WEB PARA WHATSAPP');
hero = hero.replace(/DEMO ILUSTRATIVA/, 'DEMO PARA TIENDAS DE TECNOLOGÍA');

// H1
hero = hero.replace(
  /<h1 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-\[0\.98\] font-serif-editorial drop-shadow-sm">[\s\S]*?<\/h1>/,
  `<h1 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[0.98] font-serif-editorial drop-shadow-sm">
            ¿Cuántas ventas pierdes
            <br />
            cuando <span className="font-serif-italic font-normal text-white/90">respondes demasiado tarde</span>
          </h1>`
);

// Subheading & Description
hero = hero.replace(
  /Modelos, cuotas y garantía en un solo lugar\./,
  'Si el cliente no consigue precio, cuotas o disponibilidad rápido, probablemente pregunta en otra tienda.'
);
hero = hero.replace(
  /Encuentra el equipo que buscas y escribe por WhatsApp con el modelo y la forma de pago ya seleccionados\./,
  'Este catálogo reúne tus equipos y condiciones en un solo enlace para que cada persona llegue a WhatsApp sabiendo mejor qué quiere consultar.'
);

// Primary hero button
hero = hero.replace(/<span>Ver equipos<\/span>/g, '<span>Ver cómo comprarían tus clientes</span>');

// Secondary hero button
hero = hero.replace(/<span>Consultar por WhatsApp<\/span>/, '<span>Quiero uno para mi tienda</span>');

// Microcopy
hero = hero.replace(
  /Demo creada por Digital Solution para mostrar cómo podría verse tu propio catálogo\./,
  'Creado por Digital Solution para tiendas que venden por Instagram y WhatsApp.'
);

fs.writeFileSync('src/components/Hero.tsx', hero);

// --- Header.tsx ---
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');

header = header.replace(
  /<span className="font-semibold text-xs tracking-tight">WhatsApp<\/span>/,
  `<span className="hidden sm:inline-block font-semibold text-xs tracking-tight">Quiero este catálogo</span>
            <span className="sm:hidden font-semibold text-xs tracking-tight">Quiero el mío</span>`
);

fs.writeFileSync('src/components/Header.tsx', header);

// --- PaymentCards.tsx ---
let pay = fs.readFileSync('src/components/PaymentCards.tsx', 'utf8');

pay = pay.replace(/Binance/g, 'USDT'); // Replace any leftovers, but wait
pay = pay.replace(
  /'Transferencia', 'Pago Móvil', 'Zelle', 'Efectivo', 'USDT'/,
  "'Transferencia', 'Pago Móvil', 'Zelle', 'Efectivo', 'USDT'"
);

pay = pay.replace(
  /Muestra los métodos que ya manejas: Zelle, USDT, Pago Móvil, Bancos Nacionales y efectivo\./,
  'Muestra los métodos que realmente manejas: transferencia, Pago Móvil, Zelle, efectivo o USDT.'
);
// just in case they are different strings:
pay = pay.replace(
  /Muestra los métodos que ya manejas: [^\.]+\./,
  'Muestra los métodos que realmente manejas: transferencia, Pago Móvil, Zelle, efectivo o USDT.'
);

// We need to double check the note in PaymentCards.tsx for cashNote, installmentNote, etc.

fs.writeFileSync('src/components/PaymentCards.tsx', pay);

// --- DeliverySection.tsx ---
let dev = fs.readFileSync('src/components/DeliverySection.tsx', 'utf8');

dev = dev.replace(
  /Visítanos en nuestra ubicación física para retirar tu equipo personalmente\./,
  'Muestra la sede, referencia y horario que maneja tu negocio.'
);

dev = dev.replace(/envíos nacionales asegurados/g, 'envíos nacionales');
dev = dev.replace(/encomiendas de confianza/g, 'empresas de envío');
dev = dev.replace(/delivery garantizado/g, 'delivery');

fs.writeFileSync('src/components/DeliverySection.tsx', dev);

