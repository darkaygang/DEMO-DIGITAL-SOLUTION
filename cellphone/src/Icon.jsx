import React from 'react';
import './icons.css';

const paths = {
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5',
  moon: 'M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z',
  northeast: 'M5 19 19 5M5 5h14v14',
  southeast: 'M5 5l14 14M5 19h14V5',
  right: 'M4 12h16m-7-7 7 7-7 7',
  left: 'M20 12H4m7-7-7 7 7 7',
  up: 'M12 20V4m-7 7 7-7 7 7',
  down: 'M12 4v16m-7-7 7 7 7-7',
  close: 'm6 6 12 12M6 18 18 6',
  plus: 'M12 5v14M5 12h14',
  check: 'm5 12 4 4L19 6',
  search: 'M10.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M16 16l5 5',
  sparkle: 'M12 2v20M2 12h20M5 5l14 14M5 19 19 5',
  orbit: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8',
  dot: 'M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4',
  dash: 'M3 12h18',
};

export default function Icon({name, className = ''}) {
  return <svg className={'ds-icon ' + className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={paths[name] || paths.northeast}/></svg>;
}

// Text stays readable by assistive technology; decorative icons never depend on a font.
const names = {'\u2600':'sun','\u263c':'sun','\u263e':'moon','\u25d0':'moon','\u25c9':'orbit','\u2733':'sparkle','\u2197':'northeast','\u2198':'southeast','\u2192':'right','\u2190':'left','\u2191':'up','\u2193':'down','\u2315':'search','\uff0b':'plus','\u00d7':'close','\u2713':'check','\u25cf':'dot','\u254c':'dash','+':'plus'};
export function iconText(value) {
  return String(value).split(/([\u2600\u263c\u263e\u25d0\u25c9\u2733\u2197\u2198\u2192\u2190\u2191\u2193\u2315\uff0b\u00d7\u2713\u25cf\u254c+])/).map((part,index) => names[part] ? <Icon key={index} name={names[part]}/> : part);
}
