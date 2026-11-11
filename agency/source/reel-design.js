export const reels = [
  {id:'vitrina-celulares',label:'Celulares',art:'phone',color:'#8966ff',lines:[
    ['¿Otra vez', '“¿qué modelos','tienen?”'],
    ['Equipos, precios', 'y cuotas.', 'En un enlace.'],
    ['Prueba una', 'vitrina digital.'],
  ]},
  {id:'catalogo-ropa',label:'Ropa',art:'fashion',color:'#bd83df',lines:[
    ['De “¿tienes', 'mi talla?”', 'a elegirla.'],
    ['Prenda, color', 'y talla.', 'Antes del chat.'],
    ['Dale a tu ropa', 'su propio catálogo.'],
  ]},
  {id:'digital-solution',label:'Agencia',art:'agency',color:'#ad88ff',lines:[
    ['Que tu negocio', 'se vea como', 'se merece.'],
    ['Vitrinas digitales.', 'Diseño web.', 'Identidad visual.'],
    ['Cuéntanos', 'qué vendes.'],
  ]},
];

export function drawReel(ctx,reel,time,brand,image) {
  const stage=Math.min(2,Math.floor(time/4));
  const phase=time-stage*4;
  const gradient=ctx.createLinearGradient(0,0,1080,1920);
  gradient.addColorStop(0,'#130d23');gradient.addColorStop(.55,'#291641');gradient.addColorStop(1,'#0b0811');
  ctx.fillStyle=gradient;ctx.fillRect(0,0,1080,1920);
  ctx.strokeStyle='#ffffff32';ctx.lineWidth=2;ctx.strokeRect(78,205,924,1460);
  ctx.fillStyle=reel.color;ctx.font='600 32px Arial';
  ctx.fillText((brand.trim()||'Digital Solution').toUpperCase(),122,285,825);
  ctx.fillStyle='#faf4ff';ctx.font='700 96px Arial';
  reel.lines[stage].forEach((line,index)=>ctx.fillText(line,122,444+104*index,836));
  if(image) {
    const scale=Math.min(790/image.width,565/image.height)*(1+phase*.01);
    const width=image.width*scale,height=image.height*scale;
    ctx.drawImage(image,(1080-width)/2,1060-height/2,width,height);
  }
  ctx.fillStyle=reel.color;ctx.fillRect(122,1440,836,100);
  ctx.fillStyle='#100d18';ctx.font='700 36px Arial';
  ctx.fillText(stage===2?'ESCRÍBENOS POR WHATSAPP':'MIRA CÓMO FUNCIONA',156,1502,767);
  ctx.fillStyle='#e5d5fa';ctx.font='32px Arial';ctx.fillText('+57 321 588 5381',122,1610);
}
