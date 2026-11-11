import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './app.css';

const phoneDemo = 'https://demo-digital-solution-cellphone.vercel.app/';
const boleta = 'https://boleta-catalog.onrender.com/';
const whatsapp = message => 'https://wa.me/573215885381?text=' + encodeURIComponent(message);
const services = [
  {title:'Catálogo digital', text:'Tus clientes ven modelos, tallas y precios. Tú recibes por WhatsApp la selección que ya hicieron.'},
  {title:'Página web', text:'Un lugar para mostrar qué haces, enseñar tus proyectos y recibir solicitudes de cotización.'},
  {title:'Identidad visual', text:'Una imagen reconocible en tu página, tus redes y las piezas que compartes por WhatsApp.'},
];

function Icon({name='arrow'}) {
  const paths = {
    arrow:'M5 19 19 5M5 5h14v14', down:'M12 4v15m-6-6 6 6 6-6',
    sun:'M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
    moon:'M20 15A8.5 8.5 0 0 1 9 4a8.5 8.5 0 1 0 11 11Z', menu:'M4 8h16M4 16h16',
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]}/></svg>;
}

function Hero(){
  const track=useRef(null);
  useEffect(()=>{
    const node=track.current;
    const preference=matchMedia('(prefers-reduced-motion: reduce)');
    let frame=0;
    function draw(){
      frame=0;
      const range=node.offsetHeight-innerHeight;
      const progress=preference.matches||range<=0?0:Math.max(0,Math.min(1,-node.getBoundingClientRect().top/range));
      node.style.setProperty('--p',progress.toFixed(4));
    }
    function schedule(){if(!frame)frame=requestAnimationFrame(draw);}
    draw();
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule);
    preference.addEventListener('change',schedule);
    return ()=>{
      window.removeEventListener('scroll',schedule);
      window.removeEventListener('resize',schedule);
      preference.removeEventListener('change',schedule);
      cancelAnimationFrame(frame);
    };
  },[]);
  return <section className="hero-track" ref={track} aria-labelledby="hero-title">
    <div className="hero-stage">
      <div className="hero-image" aria-hidden="true"/>
      <div className="hero-veil" aria-hidden="true"/>
      <div className="hero-copy wrap">
        <p className="eyebrow intro">ESTUDIO DIGITAL / BARQUISIMETO</p>
        <h1 id="hero-title"><span><b>Tu negocio.</b></span><span><b>Otra dimensión.</b></span></h1>
        <div className="intro hero-bottom"><p>Catálogos y páginas web que tus clientes pueden explorar antes de escribirte por WhatsApp.</p><a href="#trabajo" className="button primary">Explorar proyectos <Icon name="down"/></a></div>
      </div>
      <div className="scene-caption wrap" aria-hidden="true"><span>TRABAJO SELECCIONADO</span><strong>La experiencia empieza aquí.</strong></div>
      <div className="scene-line" aria-hidden="true"><i/></div>
    </div>
  </section>;
}

function Project({id, category, title, description, href, image, alt, action}){
  return <article className={'project '+id} data-reveal>
    <a className="project-visual" href={href} target="_blank" rel="noopener" aria-label={action+' (abre en otra pestaña)'}>
      <img src={'./assets/'+image} alt={alt} width="1200" height="675" loading="lazy"/>
      <span className="project-arrow"><Icon/></span>
    </a>
    <div className="project-caption"><div><p className="eyebrow">{category}</p><h3>{title}</h3><p>{description}</p></div><a className="text-link" href={href} target="_blank" rel="noopener">{action}<Icon/></a></div>
  </article>;
}

function App(){
  const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('ds-agency-theme')==='light'?'light':'dark';}catch{return 'dark';}});
  const menu=useRef(null);
  useEffect(()=>{
    document.documentElement.dataset.theme=theme;
    try{localStorage.setItem('ds-agency-theme',theme);}catch{}
  },[theme]);
  useEffect(()=>{
    if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}
    }),{threshold:.12});
    document.querySelectorAll('[data-reveal]').forEach(node=>observer.observe(node));
    return ()=>observer.disconnect();
  },[]);
  const contact=whatsapp('Hola, soy de [nombre de tu negocio]. Quiero conversar con Digital Solution sobre mi catálogo o página web.');
  return <>
    <a className="skip" href="#inicio">Saltar al contenido</a>
    <header className="site-head">
      <div className="wrap nav-row">
        <a href="#inicio" className="logo"><img src="./assets/logo.png" alt="Digital Solution" width="630" height="210"/></a>
        <nav aria-label="Principal"><a href="#trabajo">Proyectos</a><a href="#servicios">Servicios</a></nav>
        <div className="head-actions">
          <button className="icon-button" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label={theme==='dark'?'Activar modo claro':'Activar modo oscuro'}><Icon name={theme==='dark'?'sun':'moon'}/></button>
          <a className="button outline head-quote" href="#contacto">Hablemos <Icon/></a>
          <details className="mobile-menu" ref={menu}><summary className="icon-button" aria-label="Menú"><Icon name="menu"/></summary><nav aria-label="Navegación móvil"><a href="#trabajo" onClick={()=>menu.current.open=false}>Proyectos</a><a href="#servicios" onClick={()=>menu.current.open=false}>Servicios</a><a href="#contacto" onClick={()=>menu.current.open=false}>Hablemos</a></nav></details>
        </div>
      </div>
    </header>
    <main id="inicio">
      <Hero/>
      <section id="trabajo" className="section wrap work">
        <div className="section-title" data-reveal><p className="eyebrow">PORTAFOLIO</p><h2>Entra. Toca. Explora.</h2><p>Prueba los proyectos como lo haría tu cliente desde el teléfono.</p></div>
        <div className="projects">
          <Project id="boleta" category="TIENDA EN LÍNEA / MODA" title="Boleta" description="Ropa, objetos y accesorios. Explora el catálogo, arma tu selección y llévala a WhatsApp." href={boleta} image="boleta-case.webp" alt="Portada del catálogo Boleta" action="Abrir Boleta"/>
          <Project id="cellphone" category="DEMO / TECNOLOGÍA" title="Vitrinas de celulares" description="Tres estilos para un mismo negocio. Compara equipos y revisa opciones de pago y entrega." href={phoneDemo} image="phone.webp" alt="iPhone naranja de la vitrina de celulares" action="Probar vitrinas"/>
        </div>
      </section>
      <section id="servicios" className="section wrap">
        <div className="section-title" data-reveal><p className="eyebrow">SERVICIOS</p><h2>Hecho para tu marca.</h2></div>
        <div className="services">{services.map(item=><article key={item.title} data-reveal><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <section id="contacto" className="contact">
        <div className="wrap contact-inner" data-reveal><p className="eyebrow">DIGITAL SOLUTION</p><h2>Cuéntanos<br/>qué vendes.</h2><p>Muéstranos tu negocio y vemos qué tipo de catálogo o página te conviene.</p><a className="button primary" href={contact} target="_blank" rel="noopener">Hablemos por WhatsApp <Icon/></a></div>
      </section>
    </main>
    <footer className="wrap footer"><a href="#inicio" className="logo"><img src="./assets/logo.png" alt="Digital Solution" width="630" height="210"/></a><p>Barquisimeto · Atención remota en Venezuela</p><a href="#inicio">Volver arriba</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
