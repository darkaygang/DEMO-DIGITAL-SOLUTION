import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import './faq-robot.css';

function RobotFace({ small = false }) {
  return <svg className={'faq-robot-face' + (small ? ' is-small' : '')} viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M32 8V3M28 3h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M11 24H6v15h5m42-15h5v15h-5" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><rect x="12" y="12" width="40" height="40" rx="13" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="2"/><rect x="17" y="23" width="30" height="17" rx="7" fill="currentColor"/><g className="faq-robot-eyes" fill="var(--faq-visor)"><rect x="23" y="28" width="5" height="7" rx="2.5"/><rect x="36" y="28" width="5" height="7" rx="2.5"/></g><path d="M26 46h12M23 55v5m18-5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
}

export default function FaqRobot({ store = {}, products = [], design, isLanding = false }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('consulta');
  const launcher = useRef(null), panel = useRef(null), closeButton = useRef(null), answerRef = useRef(null), topicsRef = useRef(null);
  const panelId = useId(), answerId = useId();
  const visibleCount = products.filter(p => p.availability !== 'hidden').length;
  const number = /^\d{10,15}$/.test(store.agencyWhatsapp || '') ? store.agencyWhatsapp : '573215885381';
  const topics = useMemo(() => [
    { id: 'consulta', label: '¿Cómo consulto un equipo?', title: isLanding ? 'El cliente elige antes de escribirte.' : 'Lleva el modelo elegido a WhatsApp.', answer: isLanding ? 'En cualquiera de los tres demos, el visitante explora equipos, filtra por presupuesto y abre una ficha. Elige modalidad de pago y entrega; la vitrina prepara una consulta con esos datos. Tu tienda confirma disponibilidad y condiciones antes de cobrar.' : 'Abre la ficha de un equipo y elige forma de pago, entrega y ciudad. El botón prepara el mensaje para WhatsApp. En esta demostración no hay un número de tienda conectado: tú eliges el destinatario y decides si envías el mensaje.' },
    { id: 'comparar', label: '¿Puedo comparar teléfonos?', title: 'Dos equipos. Una decisión más clara.', answer: 'Pulsa Comparar en dos equipos para ver sus precios y características uno junto al otro. Puedes revisar las diferencias y cambiar la selección. Los datos no disponibles se indican como «Por confirmar»; la comparación no promete que un modelo sea mejor para todo el mundo.' },
    { id: 'cashea', label: '¿Cómo aparece Cashea?', title: 'Una modalidad con sus propias condiciones.', answer: 'Esta vitrina puede mostrar Cashea en los equipos que tu comercio ofrezca con esa modalidad. La inicial, la línea disponible y las cuotas dependen del perfil, el producto y el aliado. El demo no aprueba crédito ni procesa pagos: el plan final se confirma en los canales oficiales.' },
    { id: 'krece', label: '¿Y las cuotas con Krece?', title: 'Krece y Cashea tienen planes distintos.', answer: 'La financiación de celulares de Krece se presenta en equipos Android elegibles, no automáticamente en iPhone. Precio financiado, inicial, cuotas y cargos se confirman con la plataforma y la tienda. Activar una etiqueta en el demo no conecta el sistema de cobro.' },
    { id: 'pagos', label: '¿Qué medios de pago muestra?', title: 'Los medios que maneje tu negocio.', answer: store.payments || 'Tu tienda puede indicar sus métodos reales: por ejemplo, Pago Móvil, transferencia o efectivo. Se configuran las opciones y condiciones que correspondan a tu negocio; el demo no realiza cobros.' },
    { id: 'envios', label: '¿Incluye envíos nacionales?', title: 'Deja clara la entrega antes del chat.', answer: store.shipping || 'Puedes mostrar retiro en tienda, delivery local y envíos nacionales según las condiciones de tu negocio. Cobertura, transportista, costo y tiempo deben confirmarse. Los logos son ejemplos configurables, no una promesa de envío gratis ni una alianza de esta tienda ficticia.' },
    { id: 'garantia', label: '¿Qué pasa con la garantía?', title: 'El respaldo lo define tu tienda.', answer: store.warranty || 'La vitrina puede explicar garantía, condición del equipo y políticas de cambio que ofrezca tu negocio. Cada ficha debe contener información real y actualizada. Esta demostración no ofrece una garantía comercial.' },
    { id: 'personalizar', label: '¿Puedo poner mi marca?', title: 'Cualquiera de los diseños puede llevar tu identidad.', answer: 'Pulsa «Prueba tu marca» para experimentar con nombre, logo, colores, fotos, precios y especificaciones. En este demo los cambios son temporales. La instalación de tu tienda puede tener su propio editor privado y sus condiciones de publicación acordadas con Digital Solution.' },
    { id: 'servicio', label: '¿Qué puede incluir mi vitrina?', title: 'Un catálogo conectado con tu forma de vender.', answer: 'Esta propuesta muestra identidad visual, catálogo de equipos, filtros, comparación, preguntas frecuentes, opciones de pago y entrega, modo claro/oscuro y consultas preparadas para WhatsApp. La cantidad de equipos, edición privada, publicación y mantenimiento se definen al contratar. Consulta el alcance y precio con Digital Solution.' },
    { id: 'demo', label: '¿Puedo dañar el demo?', title: 'Puedes probar sin cambiar lo que ven los demás.', answer: 'La personalización de esta demostración solo cambia tu vista durante la visita. No publica ni modifica el catálogo compartido. «Restablecer demo» recupera el ejemplo; recargar también devuelve el contenido original. El tema claro/oscuro puede recordar tu preferencia en este navegador.' }
  ], [store.payments, store.shipping, store.warranty, isLanding]);
  const current = topics.find(item => item.id === active) || topics[0];

  useEffect(() => { setOpen(false); setActive('consulta'); }, [design, isLanding]);
  useEffect(() => {
    if (!open) return;
    const originalFocus = document.activeElement;
    const raf = requestAnimationFrame(() => closeButton.current?.focus());
    const onKey = event => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
      if (event.key !== 'Tab' || !panel.current) return;
      const focusables = [...panel.current.querySelectorAll('button:not([disabled]),a[href],input,select,textarea,[tabindex="0"]')].filter(node => !node.hidden);
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && (document.activeElement === first || !panel.current.contains(document.activeElement))) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || !panel.current.contains(document.activeElement))) { event.preventDefault(); first?.focus(); }
    };
    const observer = new MutationObserver(() => { if (document.querySelector('dialog[open]')) setOpen(false); });
    observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open'] });
    document.addEventListener('keydown', onKey);
    return () => { cancelAnimationFrame(raf); observer.disconnect(); document.removeEventListener('keydown', onKey); if (!document.querySelector('dialog[open]')) (launcher.current || originalFocus)?.focus?.(); };
  }, [open]);

  const waMessage = `Hola, vi el demo ${design ? design.toUpperCase() : 'Digital Solution'} y quiero información sobre una vitrina para mi tienda de celulares.`;
  const scrollTo = ref => requestAnimationFrame(() => ref.current?.scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
  return <div className={'faq-robot' + (open ? ' is-open' : '')}>
    {open && <><button className="faq-robot-scrim" tabIndex={-1} aria-label="Cerrar preguntas frecuentes" onClick={() => setOpen(false)} /><section className="faq-robot-panel" ref={panel} role="dialog" aria-modal="true" aria-labelledby={panelId}>
      <header className="faq-robot-header"><span className="faq-robot-avatar"><RobotFace small /></span><div><h2 id={panelId}>Sol · tu guía</h2><p>Respuestas rápidas del catálogo</p></div><button className="faq-robot-close" ref={closeButton} aria-label="Cerrar guía Sol" onClick={() => setOpen(false)}>×</button></header>
      <div className="faq-robot-scroll"><p className="faq-robot-welcome">{isLanding ? 'Imagina estas respuestas con la información de tu tienda.' : 'Elige una pregunta. Te explico cómo funciona esta vitrina.'}</p><div className="faq-robot-topics" ref={topicsRef} aria-label="Preguntas frecuentes">{topics.map(item => <button key={item.id} type="button" aria-expanded={active === item.id} aria-controls={answerId} className={active === item.id ? 'is-active' : ''} onClick={() => { setActive(item.id); scrollTo(answerRef); }}>{item.label}<span aria-hidden="true">↗</span></button>)}</div><article className="faq-robot-answer" ref={answerRef} id={answerId} aria-live="polite"><span className="faq-robot-answer-label">SOL / RESPUESTA RÁPIDA</span><h3>{current.title}</h3><p>{current.answer}</p><button className="faq-robot-more" type="button" onClick={() => scrollTo(topicsRef)}>Ver otras preguntas ↑</button></article><p className="faq-robot-note">Guía con respuestas predefinidas. {visibleCount ? `${visibleCount} equipos de ejemplo en esta vitrina. ` : ''}La disponibilidad y las condiciones comerciales se confirman con la tienda.</p></div>
      <footer className="faq-robot-footer"><a href={'https://wa.me/' + number + '?text=' + encodeURIComponent(waMessage)} target="_blank" rel="noopener noreferrer">Quiero una vitrina así <span aria-hidden="true">↗</span></a><small>Abre WhatsApp. Tú decides si envías el mensaje.</small></footer>
    </section></>}
    <button className="faq-robot-launcher" ref={launcher} type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-label={open ? 'Cerrar preguntas de Sol' : 'Abrir preguntas frecuentes con Sol'}><RobotFace /><span><strong>Sol · tu guía</strong><small>¿Te ayudo?</small></span><i aria-hidden="true" /></button>
  </div>;
}
