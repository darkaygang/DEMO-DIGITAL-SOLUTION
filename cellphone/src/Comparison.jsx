import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import './comparison.css';

const money = value => '$' + Number(value).toLocaleString('es-VE', { maximumFractionDigits: 2 });
const hasPrice = value => value !== undefined && value !== null && String(value).trim() !== '' && Number.isFinite(Number(value)) && Number(value) >= 0;
const fallback = value => value === undefined || value === null || String(value).trim() === '' ? 'Por confirmar' : String(value);
const stateLabel = value => ({ available: 'Disponible', consult: 'Consultar disponibilidad', preorder: 'Preventa', soldout: 'Agotado', hidden: 'Oculto' })[value] || fallback(value);

export default function Comparison({ products = [], selectedIds = [], onToggle, onClose, onClear, onReplace }) {
  const ref = useRef(null), closeRef = useRef(null), id = useId();
  const [differencesOnly, setDifferencesOnly] = useState(false);
  const choices = products.filter(product => product.availability !== 'hidden');
  const validIds = [...new Set(selectedIds)].filter(key => choices.some(product => product.id === key)).slice(0, 2);
  const selected = validIds.map(key => choices.find(product => product.id === key));
  const pair = [selected[0], selected[1]];

  useEffect(() => {
    const node = ref.current, previous = document.activeElement, oldOverflow = document.body.style.overflow;
    if (!node.open) node.showModal();
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { document.body.style.overflow = oldOverflow; previous?.focus?.({ preventScroll: true }); };
  }, []);

  function choose(slot, nextId) {
    const current = validIds[slot];
    if (nextId === current || (nextId && validIds.includes(nextId))) return;
    if (onReplace) { onReplace(slot, nextId); return; }
    if (current) onToggle?.(current);
    if (nextId) onToggle?.(nextId);
  }

  const rows = useMemo(() => [
    ['Precio de referencia', p => hasPrice(p.price) ? money(p.price) + ' USD' : 'Por confirmar'],
    ['Marca', p => fallback(p.brand)],
    ['Almacenamiento', p => fallback(p.capacity)],
    ['Memoria RAM', p => fallback(p.ram)],
    ['Pantalla', p => fallback(p.screen)],
    ['Procesador', p => fallback(p.processor)],
    ['Cámaras', p => fallback(p.camera)],
    ['Batería', p => fallback(p.battery)],
    ['Conectividad', p => fallback(p.connectivity)],
    ['Color', p => fallback(p.color)],
    ['Condición', p => fallback(p.condition)],
    ['Disponibilidad', p => stateLabel(p.availability)],
    ['Cashea', p => p.cashea ? 'Opción de consulta · sujeta a aprobación' : 'No indicada para este equipo'],
    ['Krece', p => p.krece && !/apple|iphone/i.test(p.brand + ' ' + p.name) ? 'Opción de consulta para Android' : 'No indicada para este equipo'],
    ['Financiación', p => fallback(p.financingNote)],
    ['Descripción', p => fallback(p.description)]
  ], []);
  const visibleRows = rows.map(([label, read]) => ({ label, values: pair.map(product => product ? read(product) : 'Elige un equipo') })).filter(row => !differencesOnly || selected.length < 2 || row.values[0] !== row.values[1]);
  const comparablePrices = selected.length === 2 && selected.every(product => hasPrice(product.price));

  return <dialog ref={ref} className="compare-dialog" aria-labelledby={id + '-title'} onClose={onClose} onClick={event => {
    if (event.target !== ref.current) return;
    const box = ref.current.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) ref.current.close();
  }}>
    <header className="compare-top"><div><span>COMPARADOR / DOS EQUIPOS</span><h2 id={id + '-title'}>Míralos lado a lado.</h2></div><button ref={closeRef} type="button" className="compare-close" aria-label="Cerrar comparador" onClick={() => ref.current.close()}>×</button></header>
    <div className="compare-body">
      <p className="compare-intro">Compara precios y características para decidir qué consultar. Los campos sin datos aparecen como pendientes de confirmar.</p>
      <div className="compare-choices">{pair.map((product, slot) => <section className="compare-choice" key={slot}>
        <label htmlFor={id + '-select-' + slot}>Equipo {slot + 1}<select id={id + '-select-' + slot} value={product?.id || ''} onChange={event => choose(slot, event.target.value)}><option value="">Selecciona un teléfono</option>{choices.map(option => <option key={option.id} value={option.id} disabled={validIds.includes(option.id) && product?.id !== option.id}>{option.name}</option>)}</select></label>
        <div className="compare-photo">{product?.image ? <img src={product.image} alt={product.name} width="260" height="220" /> : <span aria-hidden="true">＋</span>}</div>
        <h3>{product?.name || 'Tu siguiente opción'}</h3><p>{product && hasPrice(product.price) ? money(product.price) + ' USD' : product ? 'Por confirmar' : 'Selecciona un equipo'}</p><small>{product ? 'Precio de referencia' : 'Puedes elegir entre los modelos del catálogo'}</small>
      </section>)}</div>
      <div className="compare-toolbar"><label><input type="checkbox" checked={differencesOnly} disabled={selected.length !== 2} onChange={event => setDifferencesOnly(event.target.checked)} /> Mostrar solo diferencias</label>{onClear && selected.length > 0 ? <button type="button" onClick={onClear}>Limpiar selección</button> : null}</div>
      {comparablePrices ? <p className="compare-difference" role="status"><strong>{money(Math.abs(Number(selected[0].price) - Number(selected[1].price)))}</strong><span>{Number(selected[0].price) === Number(selected[1].price) ? 'Ambos tienen el mismo precio de referencia.' : 'de diferencia entre sus precios de referencia.'}</span></p> : <p className="compare-pending" role="status">Elige dos teléfonos para ver sus diferencias.</p>}
      <div className="compare-table" role="table" aria-label="Características de los dos teléfonos"><div className="compare-table-head" role="row"><span role="columnheader">Característica</span><span role="columnheader">{pair[0]?.name || 'Equipo 1'}</span><span role="columnheader">{pair[1]?.name || 'Equipo 2'}</span></div>{visibleRows.map(row => <div role="row" className="compare-row" key={row.label}><strong role="rowheader">{row.label}</strong>{row.values.map((value, index) => <span role="cell" key={index}>{value}</span>)}</div>)}{!visibleRows.length && <p className="compare-identical">No hay diferencias en los datos disponibles. Puedes desactivar el filtro para revisarlos todos.</p>}</div>
      <p className="compare-note">Demo ilustrativo. Precios, existencias, características y condiciones se confirman con la tienda. Mostrar Cashea o Krece no constituye aprobación ni una cotización de crédito. Un precio menor no determina qué teléfono es mejor para ti.</p>
    </div>
  </dialog>;
}
