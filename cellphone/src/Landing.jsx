import Icon, {iconText} from './Icon';
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import './landing.css';
import { asset } from './data';
import LocalBrands from './LocalBrands';

const directions = [
  { id:'pulso', num:'01', name:'PULSO', tag:'Que tu marca se haga notar.', text:'Energía, contraste y una vitrina con carácter. Para que el dueño vea su Instagram convertido en una experiencia que organiza la próxima consulta.', label:'Cobalto / lima / impacto', image:'iphone-17-pro.png', headline:<>TU MARCA.<br/>OTRO NIVEL.</> },
  { id:'orbita', num:'02', name:'ÓRBITA', tag:'Dale espacio al valor de tus equipos.', text:'Un showroom tecnológico con producto protagonista. Presenta cada equipo, sus opciones de pago y cómo recibirlo con una imagen más cuidada.', label:'Plata / profundidad / precisión', image:'iphone-16.png', headline:<>Todo gira<br/><i>alrededor de ti.</i></> },
  { id:'nexo', num:'03', name:'NEXO', tag:'Conecta el interés con una elección.', text:'Una experiencia comercial que une modelo, presupuesto y modalidad de compra. El cliente explora; tu equipo recibe una conversación con contexto.', label:'Tinta / naranja / conexión', image:'redmi-note-15-pro.png', headline:<>MENOS VUELTAS.<br/>MÁS CLARIDAD.</> },
];

export default function Landing({onSelect, theme, onToggleTheme}) {
  const reduced = useReducedMotion();
  const reveal = { initial:reduced?false:{opacity:0,y:24}, whileInView:{opacity:1,y:0}, viewport:{once:true,amount:.12}, transition:{duration:.65,ease:[.22,1,.36,1]} };
  return <div className="land-page">
    <div className="land-grid-noise" aria-hidden="true"/>
    <header className="land-header land-wrap">
      <a className="land-logo" href="#inicio" aria-label="Digital Solution, inicio"><span className="land-symbol">d<span><Icon name="northeast"/></span></span><span>DIGITAL<br/>SOLUTION</span></a>
      <nav aria-label="Navegación principal"><a href="#solucion">La diferencia</a><a href="#experiencias">Las 3 experiencias</a><a href="#editable">Hazlo tuyo</a></nav>
      <button className="land-theme" onClick={onToggleTheme} aria-label={theme==='dark'?'Activar modo claro':'Activar modo oscuro'}><span aria-hidden="true">{theme==='dark'?iconText("☀"):iconText("☾")}</span><span>{theme==='dark'?'Modo claro':'Modo oscuro'}</span></button>
    </header>
    <main>
      <section className="land-hero land-wrap" id="inicio">
        <motion.div className="land-hero-copy" {...reveal}>
          <div className="land-eyebrow"><span/> PARA TIENDAS QUE VENDEN POR INSTAGRAM Y WHATSAPP</div>
          <h1>¿Cuántas veces<br/>al día respondes<br/><em>lo mismo?</em></h1>
          <p>Precio. Inicial. Memoria. Envíos.<br/>Tu tiempo vale más que volver a empezar<br className="land-desktop-br"/> la misma conversación.</p>
          <a className="land-button land-primary" href="#experiencias">Mira lo que tu tienda podría tener <span><Icon name="northeast"/></span></a>
          <p className="land-demo-hint">Personalización de prueba: tus cambios no modifican el demo que ven otras personas.</p><div className="land-hero-foot"><span>HECHO PARA VENEZUELA</span><i/><span>TU MARCA. TU CATÁLOGO. TU WHATSAPP.</span></div>
        </motion.div>
        <motion.div className="land-hero-art" initial={reduced?false:{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.15}}>
          <div className="land-orbit land-orbit-one"/><div className="land-orbit land-orbit-two"/>
          <div className="land-art-top"><span>EL CHAT DE TODOS LOS DÍAS</span><span><Icon name="dot"/> EN LÍNEA</span></div>
          <motion.div className="land-chat land-chat-one" animate={reduced?{}:{y:[0,-9,0]}} transition={{duration:5,repeat:Infinity}}><span className="land-chat-avatar">M</span><div>Hola, ¿precio?<small>10:24 a. m.</small></div><b>01</b></motion.div>
          <motion.div className="land-chat land-chat-two" animate={reduced?{}:{y:[0,7,0]}} transition={{duration:6,repeat:Infinity}}><span className="land-chat-avatar">A</span><div>¿Aceptan Cashea o Krece?<small>10:25 a. m.</small></div><b>02</b></motion.div>
          <motion.div className="land-chat land-chat-three" animate={reduced?{}:{y:[0,-6,0]}} transition={{duration:4.5,repeat:Infinity}}><span className="land-chat-avatar">J</span><div>¿Hacen envíos a mi ciudad?<small>10:26 a. m.</small></div><b>03</b></motion.div>
          <div className="land-art-product"><img src={asset('iphone-17-pro.png')} alt="iPhone 17 Pro naranja" width="400" height="400" fetchPriority="high"/><span>IMAGINA TODO ESTO<br/>CON TU NOMBRE.</span></div>
          <div className="land-art-bottom"><span className="land-pulse-dot"/><strong>Hay una forma de adelantarte a esas preguntas.</strong><span><Icon name="down"/></span></div>
        </motion.div>
      </section>
      <div className="land-marquee" aria-label="Funciones de la vitrina"><div>CATÁLOGO EDITABLE <i><Icon name="sparkle"/></i> CONTADO / CASHEA / KRECE <i><Icon name="sparkle"/></i> ENVÍOS NACIONALES <i><Icon name="sparkle"/></i> TU IDENTIDAD <i><Icon name="sparkle"/></i> CONSULTA LISTA PARA WHATSAPP <i><Icon name="sparkle"/></i></div></div>
      <section className="land-solution land-wrap" id="solucion">
        <motion.div className="land-section-heading" {...reveal}><span className="land-eyebrow">01 / LA DIFERENCIA SE NOTA EN EL CHAT</span><h2>Que te escriban<br/>con una elección.<br/><em>No desde cero.</em></h2></motion.div>
        <motion.div className="land-after" {...reveal}><div className="land-after-label"><span>ASÍ PODRÍA LLEGAR TU PRÓXIMA CONSULTA</span><span><Icon name="northeast"/></span></div><div className="land-after-message"><span className="land-after-avatar">C</span><div><strong>Hola, ya vi el catálogo.</strong><p>Me interesa el Galaxy A56 de 256 GB.<br/>Quiero consultar la opción con Cashea<br/>y envío a Valencia.</p><small>¿Me confirman disponibilidad y condiciones?</small><span className="land-doublecheck"><Icon name="check"/><Icon name="check"/></span></div></div><p className="land-after-note">Ejemplo ilustrativo. Tu tienda confirma disponibilidad, precio y aprobación de financiamiento.</p><div className="land-after-points"><span><b>01</b> Equipo elegido</span><span><b>02</b> Pago preferido</span><span><b>03</b> Entrega clara</span></div></motion.div>
        <motion.p className="land-solution-copy" {...reveal}>Tu vitrina presenta los equipos, explica tus opciones y prepara el mensaje. Tú entras a la conversación con más contexto para atender y cerrar.</motion.p>
      </section>
      <section className="land-experiences land-wrap" id="experiencias">
        <motion.div className="land-experience-heading" {...reveal}><div><span className="land-eyebrow">02 / ELIGE CÓMO QUIERES QUE TE VEAN</span><h2>Tres experiencias.<br/><em>Una puede ser tuya.</em></h2></div><p>Cualquiera de estas tres puede llevar<br/><strong>tu nombre, tus colores y tu identidad.</strong><br/>Entra, explora y prueba los cambios.</p></motion.div>
        <div className="land-proposals">{directions.map((d,index)=><motion.article className={'land-proposal land-'+d.id} key={d.id} {...reveal} transition={{duration:.6,delay:reduced?0:index*.08}}>
          <button className="land-preview" onClick={()=>onSelect(d.id)} aria-label={'Explorar experiencia '+d.name}><div className="land-preview-header"><strong>{d.name}</strong><span>CELULARES / VENEZUELA</span></div><div className="land-preview-headline">{d.headline}</div><div className="land-preview-grid"/><div className="land-preview-halo"/><img src={asset(d.image)} alt="" width="300" height="330" loading="lazy"/><span className="land-preview-label">{d.label}</span><span className="land-preview-open"><Icon name="northeast"/></span></button>
          <div className="land-proposal-meta"><span>EXPERIENCIA {d.num}</span><span>CLARO + OSCURO</span></div><h3>{d.name}</h3><h4>{d.tag}</h4><p>{d.text}</p><button className="land-proposal-cta" onClick={()=>onSelect(d.id)}>Explorar y personalizar <span><Icon name="northeast"/></span></button>
        </motion.article>)}</div>
      </section>
      <section className="land-editable land-wrap" id="editable">
        <motion.div className="land-editable-visual" {...reveal}><div className="land-editor-mini"><div className="land-editor-mini-top"><span><Icon name="sparkle"/> TU VITRINA, A TU MANERA</span><span><Icon name="dot"/> EDITANDO</span></div><div className="land-mini-product"><img src={asset('galaxy-a56.jpg')} alt="Samsung Galaxy A56" width="200" height="220" loading="lazy"/><div><label>Nombre del equipo</label><span>Galaxy A56 5G <i>✎</i></span><label>Precio de referencia</label><span>$340 <i>✎</i></span><label>Memoria</label><span>256 GB <i>✎</i></span></div></div><div className="land-mini-controls"><span>Cambiar foto <Icon name="northeast"/></span><span className="land-mini-color"/><span className="land-mini-color"/><span className="land-mini-color"/><strong>Tu identidad</strong></div><div className="land-mini-save">Foto + precio + especificaciones <b>LISTO PARA GUARDAR <Icon name="northeast"/></b></div></div><span className="land-editable-caption">VISUALIZA EL CAMBIO ANTES DE DECIDIR.</span></motion.div>
        <motion.div className="land-editable-copy" {...reveal}><span className="land-eyebrow">03 / EL CATÁLOGO CAMBIA CON TU NEGOCIO</span><h2>Desde gama alta<br/>hasta los más<br/><em>accesibles.</em></h2><p>Tu próxima novedad no necesita otra web. Cambia la foto, el precio y las especificaciones. Ajusta las condiciones de venta y guarda tu versión.</p><div className="land-editable-list"><span><b><Icon name="northeast"/></b> Tu logo, tu nombre y tu paleta</span><span><b><Icon name="northeast"/></b> Equipos, fotos, precios y características</span><span><b><Icon name="northeast"/></b> Contacto, pagos y condiciones de entrega</span></div><a className="land-text-link" href="#experiencias">Prueba el editor en cualquiera de los demos <span><Icon name="northeast"/></span></a></motion.div>
      </section>
      <section className="land-brand-proof land-wrap"><p>Los pagos y las empresas de envío que tus clientes ya reconocen.</p><LocalBrands /></section><section className="land-local land-wrap"><motion.div className="land-local-head" {...reveal}><span className="land-eyebrow">PENSADO PARA TU FORMA DE VENDER</span><h2>Las preguntas de aquí.<br/><em>Las respuestas de tu tienda.</em></h2></motion.div><div className="land-local-grid">{[{num:'01',title:'Contado, Cashea y Krece.',text:'Presenta las opciones que realmente ofreces. Inicial, cuotas y condiciones según plataforma, equipo y aprobación.'},{num:'02',title:'De Barquisimeto al país.',text:'Deja claro si hay retiro, delivery local o envío nacional. Tu cliente puede indicar su ciudad antes de escribir.'},{num:'03',title:'Tu WhatsApp sigue siendo tuyo.',text:'El catálogo organiza la elección y prepara la consulta. Tu equipo mantiene el trato y confirma la venta.'}].map(x=><motion.article key={x.num} {...reveal}><span>{x.num} /</span><h3>{x.title}</h3><p>{x.text}</p></motion.article>)}</div></section>
      <motion.section className="land-final land-wrap" {...reveal}><div className="land-eyebrow">TU INSTAGRAM YA DESPIERTA INTERÉS.</div><h2>Ahora dale a tu tienda<br/><em>una vitrina a su altura.</em></h2><a className="land-button land-primary" href="#experiencias">Elige tu experiencia <span><Icon name="northeast"/></span></a><a className="land-final-contact" href="https://wa.me/573215885381?text=Hola%2C%20quiero%20una%20vitrina%20editable%20para%20mi%20tienda%20de%20celulares." target="_blank" rel="noopener noreferrer">Hablar con Digital Solution <Icon name="northeast"/></a></motion.section>
    </main><footer className="land-footer land-wrap"><a className="land-logo" href="#inicio"><span className="land-symbol">d<span><Icon name="northeast"/></span></span><span>DIGITAL<br/>SOLUTION</span></a><p>Diseño con intención comercial.<br/>Para negocios que quieren verse y atender mejor.</p><span>DEMOSTRACIÓN INTERACTIVA · VENEZUELA<br/>Precios y tiendas de ejemplo. Sin inventario real.</span></footer>
  </div>;
}

