import {specifications} from './specifications';
import pro from '../assets/optimized/iphone-17-pro.webp';
import iphone from '../assets/optimized/iphone-16.webp';
import samsung from '../assets/optimized/galaxy-a56.webp';
import redmi from '../assets/optimized/redmi-note-15-pro.webp';

import a07 from '../assets/optimized/galaxy-a07.webp';
import r15c from '../assets/optimized/redmi-15c.webp';
export const assets={'iphone-17-pro.png':pro,'iphone-16.png':iphone,'galaxy-a56.jpg':samsung,'redmi-note-15-pro.png':redmi,'galaxy-a07.png':a07,'redmi-15c.png':r15c};
export const asset=name=>assets[name]||'';
export const DESIGNS=['pulso','orbita','nexo'];
export function defaults(design='pulso'){
 const names={pulso:'PULSO',orbita:'ÓRBITA',nexo:'NEXO'};
 return {schemaVersion:1,store:{name:names[design],tagline:'Tecnología a tu ritmo',description:'Explora equipos, compara opciones de pago y consulta con el modelo elegido. Esta es una tienda de demostración.',city:'Barquisimeto',whatsapp:'',instagram:'',logo:'',accent:design==='pulso'?'#dfff5b':design==='orbita'?'#8dd7f7':'#ff824f',heroImage:design==='orbita'?iphone:design==='nexo'?redmi:pro,heroTitle:design==='pulso'?'Más tú. Más power.':design==='orbita'?'Todo gira alrededor de ti.':'Menos vueltas. Más claridad.',heroText:'Encuentra el modelo que va contigo. Consulta precio, modalidades de pago y opciones de entrega en un solo lugar.',payments:'Ejemplo configurable: Pago Móvil, transferencia, efectivo en divisas. Otros métodos se confirman con la tienda.',shipping:'Ejemplo configurable: retiro en Barquisimeto, delivery local y envíos nacionales. Consulta cobertura, empresa y costo antes de pagar.',warranty:'La garantía, condición del equipo y políticas de cambio se confirman con la tienda antes de comprar.',agencyWhatsapp:'573215885381'},products:[
 {id:'iphone-17-pro',name:'iPhone 17 Pro',brand:'Apple',price:1190,capacity:'256 GB',ram:'',color:'Naranja cósmico',condition:'Configuración demo',image:pro,description:'Una opción Pro para comparar dentro de la vitrina. Fotografía oficial; precio ilustrativo.',availability:'Consultar disponibilidad',cashea:true,krece:false,financingNote:'Cashea ilustrativo: condiciones sujetas a nivel, línea de compra, equipo y comercio aliado. Confirma el plan en la app.'},
 {id:'iphone-16',name:'iPhone 16',brand:'Apple',price:690,capacity:'128 GB',ram:'',color:'Ultramarino',condition:'Configuración demo',image:iphone,description:'Una alternativa de Apple para explorar y preparar tu consulta. Precio ilustrativo.',availability:'Consultar disponibilidad',cashea:true,krece:false,financingNote:'Cashea ilustrativo: la inicial y las cuotas dependen de la aprobación y condiciones del aliado.'},
 {id:'galaxy-a56',name:'Galaxy A56 5G',brand:'Samsung',price:340,capacity:'256 GB',ram:'',color:'Gris claro',condition:'Configuración demo',image:samsung,description:'Una alternativa de gama media. Revisa memoria, modalidad de pago y entrega antes de consultar.',availability:'Consultar disponibilidad',cashea:true,krece:true,financingNote:'Modalidades de ejemplo. Cashea y Krece tienen condiciones diferentes. El precio financiado, inicial, cuotas y cargos se confirman con el proveedor.'},
 {id:'redmi-note-15-pro',name:'Redmi Note 15 Pro',brand:'Xiaomi',price:290,capacity:'256 GB',ram:'',color:'Grafito',condition:'Configuración demo',image:redmi,description:'Una alternativa Redmi para comparar dentro de tu presupuesto. Foto oficial y precio ilustrativo.',availability:'Consultar disponibilidad',cashea:true,krece:true,financingNote:'Modalidades de ejemplo para Android. Confirma con la tienda y la app los equipos elegibles y el plan aprobado.'}
 ,{id:'galaxy-a07',name:'Galaxy A07',brand:'Samsung',price:155,capacity:'128 GB',ram:'',color:'Verde',condition:'Configuración demo',image:a07,description:'Una opción de entrada para que tu vitrina también incluya presupuestos accesibles. Modelo 4G; precio ilustrativo.',availability:'consult',cashea:true,krece:true,financingNote:'Opciones ilustrativas sujetas a la oferta del comercio y a la aprobación en la plataforma.'}
 ,{id:'redmi-15c',name:'Redmi 15C',brand:'Xiaomi',price:145,capacity:'128 GB',ram:'',color:'A confirmar',condition:'Configuración demo',image:r15c,description:'Una alternativa accesible para el uso cotidiano. Fotografía oficial de varios colores; opciones a confirmar. Precio ilustrativo.',availability:'consult',cashea:true,krece:true,financingNote:'Opciones ilustrativas para Android. Confirma precio financiado, cargos, inicial y plan aprobado.'}
 ].map(p=>({...p,...(specifications[p.id]||{}),availability:'consult',casheaInitial:p.id==='galaxy-a56'?'205':'',casheaPayments:p.id==='galaxy-a56'?'3':'',casheaQuota:p.id==='galaxy-a56'?'45':'',kreceInitial:'',krecePayments:'',kreceQuota:''}))};
}
const str=(x,max=4000)=>typeof x==='string'?x.slice(0,max):'';
export function safeImage(value){return typeof value==='string'&&(/^(https:\/\/)/i.test(value)||/^data:image\/(png|jpeg|webp);base64,[a-z0-9+/=\s]+$/i.test(value))?value:''}
export function validateData(input){
 if(!input||typeof input!=='object'||!input.store||!Array.isArray(input.products))throw new Error('Este respaldo no contiene una tienda y sus equipos.');
 if(input.products.length>200)throw new Error('El respaldo supera el límite de 200 equipos.');
 const fallback=defaults(),store={};
 for(const key of Object.keys(fallback.store))store[key]=str(input.store[key],key==='heroImage'||key==='logo'?12000000:4000);
 store.logo=safeImage(store.logo);store.heroImage=safeImage(store.heroImage)||pro;
 if(!store.name.trim())throw new Error('Escribe el nombre de la tienda.');
 if(store.whatsapp&&!/^\d{10,15}$/.test(store.whatsapp))throw new Error('WhatsApp debe tener entre 10 y 15 dígitos, con código de país y sin símbolos.');
 if(!/^#[a-f0-9]{6}$/i.test(store.accent))store.accent='#dfff5b';
 const ids=new Set();const products=input.products.map((p,i)=>{
 const price=Number(p.price);if(!p.name||!String(p.name).trim()||!Number.isFinite(price)||price<0)throw new Error('Revisa el nombre y precio del equipo '+(i+1)+'.');
 let id=str(p.id,100)||'equipo-'+i;while(ids.has(id))id+='-copia';ids.add(id);
 const out={id,price,cashea:!!p.cashea,krece:!!p.krece};
 for(const key of ['name','brand','capacity','ram','color','condition','description','availability','financingNote','screen','processor','camera','battery','connectivity','specSource'])out[key]=str(p[key]);
 for(const key of ['casheaInitial','casheaPayments','casheaQuota','kreceInitial','krecePayments','kreceQuota']){const value=p[key];if(value!==undefined&&value!==''&&(!Number.isFinite(Number(value))||Number(value)<0||(/Payments$/.test(key)&&(!Number.isInteger(Number(value))||Number(value)<1||Number(value)>48))))throw new Error('Revisa la inicial y cuotas de '+out.name+'.');out[key]=value===undefined?'':String(value)}
 out.image=safeImage(p.image);if(out.brand.toLowerCase()==='apple'||/iphone/i.test(out.name))out.krece=false;
 return out;
 });return {schemaVersion:1,store,products};
}
