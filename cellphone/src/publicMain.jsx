import React,{useState,useEffect,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {AnimatePresence,motion,useReducedMotion} from 'motion/react';
import Landing from './Landing';
import Storefront from './Storefront';
import Editor from './Editor';
import FaqRobot from './FaqRobot';
import {defaults,validateData,DESIGNS} from './data';
import './global.css';
const names={pulso:'PULSO',orbita:'ÓRBITA',nexo:'NEXO'};
const initialDesign=DESIGNS.includes(location.hash.slice(1))?location.hash.slice(1):null;
function initialTheme(){try{return localStorage.getItem('ds-vitrina-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')}catch{return 'dark'}}
function App(){
 const reduced=useReducedMotion(),[theme,setTheme]=useState(initialTheme),[design,setDesign]=useState(initialDesign),[data,setData]=useState(()=>defaults(initialDesign||'pulso')),[editing,setEditing]=useState(false),[transition,setTransition]=useState(null),[progress,setProgress]=useState(1),[status,setStatus]=useState('');
 const previews=useRef({}),timer=useRef(null),request=useRef(0),loadRef=useRef(null),focusRef=useRef(null);
 useEffect(()=>{document.documentElement.style.background=theme==='dark'?'#090b11':'#f3f4ef';try{localStorage.setItem('ds-vitrina-theme',theme)}catch{}},[theme]);
 useEffect(()=>{if(!status)return;const id=setTimeout(()=>setStatus(''),6000);return()=>clearTimeout(id)},[status]);
 useEffect(()=>()=>clearTimeout(timer.current),[]);
 function cancel(){request.current++;clearTimeout(timer.current);setTransition(null);focusRef.current?.focus()}
 useEffect(()=>{if(!transition)return;loadRef.current?.focus();const previous=document.body.style.overflow;document.body.style.overflow='hidden';const key=e=>{if(e.key==='Escape')cancel();if(e.key==='Tab'){e.preventDefault();loadRef.current?.querySelector('button')?.focus()}};document.addEventListener('keydown',key);return()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',key)}},[transition]);
 function select(next){if(!DESIGNS.includes(next)||transition)return;const id=++request.current;focusRef.current=document.activeElement;setTransition(next);setProgress(1);const start=performance.now(),duration=reduced?160:1250;function tick(){if(id!==request.current)return;const value=Math.max(1,Math.min(100,Math.round((performance.now()-start)/duration*100)));setProgress(value);if(value<100)timer.current=setTimeout(tick,16);else timer.current=setTimeout(()=>{setData(previews.current[next]||defaults(next));setDesign(next);setTransition(null);history.replaceState(null,'','#'+next);window.scrollTo(0,0);requestAnimationFrame(()=>document.getElementById('experience')?.focus({preventScroll:true}))},reduced?0:150)}tick()}
 async function applyPreview(next){const checked=validateData(next);previews.current[design]=checked;setData(checked);setStatus('Cambios aplicados solo a tu prueba. Al recargar vuelve el demo original.');}
 function reset(){previews.current={};setData(defaults(design||'pulso'));setStatus('Demo original restablecido.');}
 const toggle=()=>setTheme(t=>t==='dark'?'light':'dark');
 return <div className="app" data-theme={theme}><AnimatePresence mode="wait">{design?<motion.div key={design} id="experience" tabIndex={-1} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced?0:.2}}><Storefront design={design} data={data} theme={theme} onToggleTheme={toggle} onEdit={()=>setEditing(true)} onReset={reset} onBack={()=>{setDesign(null);history.replaceState(null,'',location.pathname);window.scrollTo(0,0)}}/></motion.div>:<Landing key="landing" theme={theme} onToggleTheme={toggle} onSelect={select}/>}</AnimatePresence>
 <FaqRobot store={data.store} products={data.products} design={design} isLanding={!design}/>{editing?<Editor demoOnly design={design} data={data} onSave={applyPreview} onClose={()=>setEditing(false)} onDesignChange={next=>{if(DESIGNS.includes(next))setDesign(next)}}/>:null}
 <AnimatePresence>{transition?<motion.div className="load-screen" role="dialog" aria-modal="true" aria-label={'Abriendo experiencia '+names[transition]} tabIndex={-1} ref={loadRef} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><div className="load-content"><span className="load-kicker">DIGITAL SOLUTION / PREPARANDO {names[transition]}</span><h2>Tu próxima vitrina empieza aquí.</h2><div className="load-number" aria-hidden="true">{String(progress).padStart(2,'0')}<small>/ 100</small></div><div className="load-track" role="progressbar" aria-label="Transición a la vitrina" aria-valuemin={1} aria-valuemax={100} aria-valuenow={progress}><span style={{width:progress+'%'}}/></div><div className="load-bottom"><span>Menos dudas repetidas. Más claridad para comprar.</span><span>{names[transition]} ↗</span></div><button className="load-cancel" onClick={cancel}>Volver a elegir</button></div></motion.div>:null}</AnimatePresence>{status?<div className="app-status" role="status">{status}</div>:null}</div>
}
createRoot(document.getElementById('root')).render(<App/>);
