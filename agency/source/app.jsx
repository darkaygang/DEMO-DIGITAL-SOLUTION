import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {reels, drawReel} from './reel-design.js';
import './app.css';

const phoneDemo = 'https://demo-digital-solution-cellphone.vercel.app/';
const whatsapp = text => 'https://wa.me/573215885381?text=' + encodeURIComponent(text);
const services = [
  ['Vitrinas digitales', 'Muestra productos, precios y opciones de entrega en un enlace. El cliente elige el modelo y te escribe por WhatsApp con su consulta lista.'],
  ['Diseño web', 'Presenta tu negocio, tus servicios y tus trabajos desde una página rápida y cómoda de recorrer en el teléfono.'],
  ['Identidad visual', 'Dale a tu marca una imagen coherente en la web, Instagram y WhatsApp, con colores, tipografía y piezas listas para usar.'],
];
const clothing = [
  {name:'Camiseta de algodón', price:22, sizes:['S','M','L'], color:'Marfil'},
  {name:'Sobrecamisa', price:38, sizes:['M','L','XL'], color:'Grafito'},
];

function Icon({name='arrow'}) {
  const paths = {arrow:'M5 19 19 5M5 5h14v14',sun:'M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',moon:'M20 15A8.5 8.5 0 0 1 9 4a8.5 8.5 0 1 0 11 11Z',close:'m6 6 12 12M6 18 18 6'};
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]}/></svg>;
}

function FashionDemo({dialog}) {
  const [index,setIndex]=useState(0);
  const [size,setSize]=useState('S');
  const item=clothing[index];
  return <dialog ref={dialog} aria-labelledby="ropa-title">
    <header className="dialog-head"><div><p className="eyebrow">CATÁLOGO DE EJEMPLO</p><h2 id="ropa-title">Forma Estudio</h2></div><button className="icon-button" onClick={()=>dialog.current.close()} aria-label="Cerrar catálogo"><Icon name="close"/></button></header>
    <img className="fashion-photo" src="./assets/forma.webp" alt="Camiseta marfil y sobrecamisa grafito en perchas"/>
    <div className="tabs" aria-label="Prendas">{clothing.map((product,i)=><button key={product.name} aria-pressed={i===index} onClick={()=>{setIndex(i);setSize(product.sizes[0]);}}>{product.name}</button>)}</div>
    <div className="purchase"><div><h3>{item.name}</h3><p>{item.color} · ${item.price} USD de ejemplo</p></div><label>Talla<select value={size} onChange={e=>setSize(e.target.value)}>{item.sizes.map(value=><option key={value}>{value}</option>)}</select></label></div>
    <details><summary>Ver la consulta que recibiría la tienda</summary><p>Hola, quisiera consultar disponibilidad de {item.name.toLowerCase()} en color {item.color.toLowerCase()}, talla {size}. ¿Hacen envíos a mi ciudad?</p></details>
    <a className="button" href={whatsapp('Hola, probé Forma Estudio y quiero una vitrina de ropa para mi negocio.')} target="_blank" rel="noopener">Quiero una vitrina así <Icon/></a>
  </dialog>;
}

function Studio() {
  const [selected,setSelected]=useState(0);
  const [brand,setBrand]=useState('');
  const [playing,setPlaying]=useState(false);
  const [recording,setRecording]=useState(false);
  const [status,setStatus]=useState('');
  const [time,setTime]=useState(0);
  const canvas=useRef(null);
  const download=useRef(null);
  const recorder=useRef(null);
  const art=useRef({});
  const current=reels[selected];

  useEffect(()=>{
    const images={};
    let active=true;
    const loaded=Object.entries({phone:'phone.webp',fashion:'forma.webp',agency:'logo.png'}).map(([key,file])=>new Promise(resolve=>{
      const image=new Image();
      image.onload=()=>{images[key]=image;resolve();};
      image.onerror=resolve;
      image.src='./assets/'+file;
    }));
    Promise.all(loaded).then(()=>{if(active){art.current=images;setTime(value=>value===0?0.001:0);}});
    return ()=>{active=false;};
  },[]);

  useEffect(()=>{
    let frame;
    let start;
    const paint=now=>{
      start ??= now-time*1000;
      const seconds=playing?Math.min(12,(now-start)/1000):time;
      drawReel(canvas.current.getContext('2d'),current,seconds,brand,art.current[current.art]);
      if(playing&&seconds<12) frame=requestAnimationFrame(paint);
      if(playing&&seconds>=12){setPlaying(false);setTime(0);if(recorder.current?.state==='recording')recorder.current.stop();}
    };
    frame=requestAnimationFrame(paint);
    return ()=>cancelAnimationFrame(frame);
  },[current,brand,playing,time]);

  useEffect(()=>()=>{if(download.current) URL.revokeObjectURL(download.current);},[]);

  function exportVideo(){
    if(!canvas.current.captureStream||typeof MediaRecorder==='undefined'){
      setStatus('Este navegador no permite exportar el reel personalizado. Puedes descargar el MP4 original.');return;
    }
    const stream=canvas.current.captureStream(30);
    const format=['video/mp4','video/webm;codecs=vp9','video/webm'].find(type=>MediaRecorder.isTypeSupported(type));
    if(!format){stream.getTracks().forEach(track=>track.stop());setStatus('Este navegador no admite un formato de exportación. Descarga el MP4 original.');return;}
    try{
      const chunks=[];
      const video=new MediaRecorder(stream,{mimeType:format,videoBitsPerSecond:4500000});
      recorder.current=video;
      video.ondataavailable=event=>{if(event.data.size)chunks.push(event.data);};
      video.onerror=()=>{stream.getTracks().forEach(track=>track.stop());setRecording(false);setPlaying(false);setStatus('No se pudo exportar. Puedes descargar el MP4 original.');};
      video.onstop=()=>{
        stream.getTracks().forEach(track=>track.stop());
        if(chunks.length){
          if(download.current)URL.revokeObjectURL(download.current);
          download.current=URL.createObjectURL(new Blob(chunks,{type:format}));
          const link=document.createElement('a');
          link.href=download.current;
          link.download=current.id+(format.startsWith('video/mp4')?'.mp4':'.webm');
          link.click();
          setStatus('Exportación lista.');
        }
        setRecording(false);
      };
      setTime(0);setRecording(true);setPlaying(true);setStatus('Exportando el reel de 12 segundos…');video.start();
    }catch{
      stream.getTracks().forEach(track=>track.stop());
      setRecording(false);setStatus('No se pudo exportar. Puedes descargar el MP4 original.');
    }
  }

  return <div className="studio">
    <div className="studio-copy"><h2>Un vistazo que abre conversación.</h2><p>Tres reels verticales para presentar tu trabajo en Instagram. Elige uno, previsualízalo y prueba cómo se vería con el nombre de tu tienda.</p>
      <div className="tabs" aria-label="Elegir reel">{reels.map((item,i)=><button key={item.id} disabled={recording} aria-pressed={i===selected} onClick={()=>{setSelected(i);setPlaying(false);setTime(0);setStatus('');}}>{item.label}</button>)}</div>
      <label>Nombre para la vista previa<input value={brand} maxLength={24} placeholder="Digital Solution" disabled={recording} onChange={e=>setBrand(e.target.value)}/></label>
      <div className="actions"><button className="button" disabled={recording||playing} onClick={()=>{setTime(0);setPlaying(true);}}>Reproducir</button><button className="button outline" disabled={recording||playing} onClick={exportVideo}>Exportar personalizado</button><a className="text-link" href={'./media/'+current.id+'.mp4'} download>Descargar MP4 original <Icon/></a></div>
      <p className="status" role="status">{status}</p>
    </div>
    <canvas className="reel-canvas" ref={canvas} width="1080" height="1920" aria-label={'Vista previa del reel de '+current.label}/>
  </div>;
}

function App(){
  const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('ds-agency-theme')==='light'?'light':'dark';}catch{return 'dark';}});
  const [service,setService]=useState(services[0][0]);
  const dialog=useRef(null);
  useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('ds-agency-theme',theme);}catch{}},[theme]);
  function quote(event){
    event.preventDefault();
    const fields=new FormData(event.currentTarget);
    window.location.href=whatsapp(`Hola, soy de ${fields.get('business').trim()}. Me interesa ${service.toLowerCase()}.\nCiudad: ${fields.get('city').trim()}.\nMe gustaría mejorar: ${fields.get('goal').trim()}\n¿Podemos revisar una propuesta?`);
  }
  return <>
    <a className="skip" href="#inicio">Saltar al contenido</a>
    <header className="site-head wrap"><a href="#inicio" className="logo"><img src="./assets/logo.png" alt="Digital Solution" width="630" height="210"/></a><nav aria-label="Principal"><a href="#trabajo">Demos</a><a href="#servicios">Servicios</a><a href="#reels">Reels</a></nav><div className="head-actions"><button className="icon-button" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label={theme==='dark'?'Activar modo claro':'Activar modo oscuro'}><Icon name={theme==='dark'?'sun':'moon'}/></button><a className="button outline head-quote" href="#cotizar">Cotizar <Icon/></a></div></header>
    <main id="inicio">
      <section className="hero wrap">
        <div className="hero-copy"><p className="eyebrow">ESTUDIO DIGITAL · VENEZUELA</p><h1>Que tu negocio<br/>se vea <em>como<br className="desktop"/> se merece.</em></h1><p>Diseñamos vitrinas y páginas web para que tus clientes vean lo que vendes, elijan con calma y te escriban por WhatsApp con una consulta clara.</p><div className="actions"><a className="button" href="#trabajo">Prueba las vitrinas <Icon/></a><a className="text-link" href="#cotizar">Cuéntanos tu idea <Icon/></a></div></div>
        <div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/><img src="./assets/emblem.webp" alt="" width="610" height="610"/><span>DISEÑO WEB · VITRINAS · IDENTIDAD</span></div>
      </section>
      <section id="trabajo" className="wrap section"><div className="section-title"><div><p className="eyebrow">PORTAFOLIO INTERACTIVO</p><h2>Ábrelas como<br/>lo haría tu cliente.</h2></div><p>Elige un producto, revisa los detalles y descubre qué información puede llegar preparada a WhatsApp.</p></div>
        <div className="projects">
          <article className="project"><div className="project-art phone"><img src="./assets/phone.webp" alt="iPhone naranja con vistas frontal y posterior"/><span>PULSO / ÓRBITA / NEXO</span></div><div className="project-copy"><div><h3>Vitrinas de celulares</h3><p>Compara equipos y explora pagos, cuotas y entregas de ejemplo.</p></div><a className="button outline" href={phoneDemo} target="_blank" rel="noopener">Abrir demo <Icon/></a></div></article>
          <article className="project"><div className="project-art fashion"><img src="./assets/forma.webp" alt="Dos prendas de Forma Estudio en un fondo oscuro" loading="lazy"/><span>FORMA ESTUDIO</span></div><div className="project-copy"><div><h3>Catálogo de ropa</h3><p>Explora prendas, selecciona tu talla y prepara la consulta.</p></div><button className="button outline" onClick={()=>dialog.current.showModal()}>Abrir demo <Icon/></button></div></article>
        </div>
      </section>
      <section id="servicios" className="wrap section"><div className="section-title"><div><p className="eyebrow">SERVICIOS</p><h2>¿Qué quieres mejorar?</h2></div></div><div className="services">{services.map(([name,description],index)=><article key={name}><span aria-hidden="true" className="service-line"/><h3>{name}</h3><p>{description}</p><a href="#cotizar" className="text-link" onClick={()=>setService(name)}>Cotizar <Icon/></a><a className="catalog-link" href={'./media/servicio-'+(index+1)+'.png'} download>Descargar ficha</a></article>)}</div></section>
      <section id="reels" className="wrap section"><p className="eyebrow">ESTUDIO DE REELS</p><Studio/></section>
      <section id="cotizar" className="wrap section"><div className="quote"><div><p className="eyebrow">HABLEMOS DE TU NEGOCIO</p><h2>¿Lo vemos<br/>por WhatsApp?</h2><p>Cuéntanos qué vendes y qué quieres mejorar. Con eso podemos recomendarte por dónde empezar y prepararte una cotización.</p><a className="text-link" href={whatsapp('Hola, quiero conocer los servicios de Digital Solution.')} target="_blank" rel="noopener">+57 321 588 5381 <Icon/></a></div><form onSubmit={quote}><label>Nombre de tu negocio<input name="business" required maxLength={80} placeholder="Ej. Tienda Aurora"/></label><label>Ciudad<input name="city" required maxLength={60} placeholder="Ej. Barquisimeto"/></label><label>Servicio<select value={service} onChange={e=>setService(e.target.value)}>{services.map(([name])=><option key={name}>{name}</option>)}</select></label><label>¿Qué te gustaría mejorar?<textarea name="goal" required maxLength={300} rows={3} placeholder="Ej. Que mis clientes puedan ver los modelos antes de escribirme"/></label><button className="button" type="submit">Abrir mi consulta en WhatsApp <Icon/></button></form></div></section>
    </main>
    <footer className="wrap footer"><a href="#inicio" className="logo"><img src="./assets/logo.png" alt="Digital Solution" width="630" height="210"/></a><p>Barquisimeto · Atención remota en Venezuela</p><a href="#inicio">Volver al inicio</a></footer>
    <FashionDemo dialog={dialog}/>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
