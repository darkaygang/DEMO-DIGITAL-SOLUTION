import React from 'react';
import cashea from '../assets/logos/cashea.png';
import krece from '../assets/logos/krece.png';
import mrw from '../assets/logos/mrw.svg';
import zoom from '../assets/logos/zoom.png';
import tealca from '../assets/logos/tealca.svg';
import './local-brands.css';
const payments=[['Cashea',cashea],['Krece',krece]],shipping=[['MRW',mrw],['ZOOM',zoom],['Tealca',tealca]];
export default function LocalBrands({type='all',compact=false}){const items=type==='payments'?payments:type==='shipping'?shipping:[...payments,...shipping];return <div className={'local-brands'+(compact?' is-compact':'')}><div className="local-brands-list">{items.map(([name,src])=><span className={'local-brand local-brand-'+name.toLowerCase()} key={name}><img src={src} alt={name} width="112" height="38" loading="lazy"/></span>)}</div>{!compact&&<p>Ejemplos configurables de pagos y envíos. Cada tienda muestra solo los servicios que realmente ofrece.</p>}</div>}
