# Demo Digital Solution Cellphone

Tres vitrinas de celulares para Venezuela: PULSO, ÓRBITA y NEXO.

Incluye modo claro/oscuro, catálogo móvil, comparador de dos equipos, robot FAQ Sol, logos de pagos/envíos y consultas preparadas para WhatsApp.

La personalización pública es temporal y solo afecta al visitante. No existe escritura remota ni publicación de cambios desde el demo. Los precios y configuraciones son ilustrativos.

## Desarrollo y publicación

Node.js 22 o superior. Ejecutar `npm ci` y `npm run build`. Publicar `dist/` como sitio estático. En Vercel usar la raíz `cellphone`, comando `npm run build` y salida `dist`.

## Datos y fuentes

Especificaciones y fuentes primarias en `src/specifications.js`. Imágenes y logos con atribución de origen en `assets/logos/fuentes.json`. Los campos no documentados se muestran como “Por confirmar”. Los modelos y modalidades dependen de cada tienda.

Cashea y Krece se muestran como opciones informativas, no como integración de cobro ni aprobación. El robot usa respuestas predefinidas y no ejecuta transacciones.

## Diseño

React + Motion, fotografías WebP y recursos incluidos en el HTML. La aplicación se abre desde un único `index.html` y utiliza rutas de demostración con hash.
