const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const regex = /\{\/\* Authentic 3D iPhone Presentation \*\/\}(.|\n)*?<\/div>\n\s*<\/motion\.div>/;

const replacement = `
          {/* Authentic 3D iPhone Presentation */}
          <div className="relative w-full max-w-[400px] aspect-[1/2] flex items-center justify-center translate-y-12 sm:translate-y-0" style={{ perspective: '1500px' }}>
            {/* Ambient Glow behind the phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A7CFF]/50 via-transparent to-[#25D366]/40 blur-3xl rounded-full opacity-70 mix-blend-screen scale-125 animate-pulse" />
            
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-[220px] h-[460px] sm:w-[250px] sm:h-[520px] md:w-[280px] md:h-[580px]"
            >
              {/* Phone Edges (Thickness) */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 rounded-[40px] sm:rounded-[48px] bg-[#2a2a2a] border border-[#444]"
                  style={{ transform: \`translateZ(\${i - 6}px)\`, backfaceVisibility: 'hidden' }}
                />
              ))}

              {/* Side bands (Titanium look) */}
              <div 
                className="absolute inset-y-6 -left-[4px] w-[8px] bg-gradient-to-r from-[#111] via-[#555] to-[#111]"
                style={{ transform: 'rotateY(-90deg) translateZ(110px) sm:translateZ(125px) md:translateZ(140px)', transformOrigin: 'left center', backfaceVisibility: 'visible' }}
              />
              <div 
                className="absolute inset-y-6 -right-[4px] w-[8px] bg-gradient-to-r from-[#111] via-[#555] to-[#111]"
                style={{ transform: 'rotateY(90deg) translateZ(110px) sm:translateZ(125px) md:translateZ(140px)', transformOrigin: 'right center', backfaceVisibility: 'visible' }}
              />

              {/* Phone Body (Front) */}
              <div 
                className="absolute inset-0 rounded-[40px] sm:rounded-[48px] bg-black border-[6px] border-[#333] p-1 flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'translateZ(7px)' }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-3 sm:top-4 w-24 h-6 sm:w-28 sm:h-7 bg-black rounded-full flex items-center justify-end px-3 z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#111] border border-white/10 shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full rounded-[34px] sm:rounded-[40px] bg-[#000] relative overflow-hidden flex flex-col items-center justify-center border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#000] opacity-80" />
                  
                  {/* DEMO Text inside screen */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <span className="text-4xl sm:text-5xl font-black tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                      DEMO
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone Body (Back) */}
              <div 
                className="absolute inset-0 rounded-[40px] sm:rounded-[48px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-[4px] border-[#333] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(7px)' }}
              >
                {/* Apple Logo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                </div>
                
                {/* Camera Module (iPhone 16 Pro Style) */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-24 h-24 sm:w-28 sm:h-28 rounded-[24px] sm:rounded-[28px] bg-black/80 backdrop-blur-md border border-white/10 flex flex-wrap p-2 shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
                  {/* Camera 1 */}
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border-2 border-[#222] shadow-[inset_0_0_12px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-slate-800 border border-white/5 shadow-[inset_0_0_4px_rgba(255,255,255,0.2)]"></div>
                    </div>
                  </div>
                  {/* Camera 2 */}
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border-2 border-[#222] shadow-[inset_0_0_12px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-slate-800 border border-white/5 shadow-[inset_0_0_4px_rgba(255,255,255,0.2)]"></div>
                    </div>
                  </div>
                  {/* Camera 3 */}
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border-2 border-[#222] shadow-[inset_0_0_12px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-slate-800 border border-white/5 shadow-[inset_0_0_4px_rgba(255,255,255,0.2)]"></div>
                    </div>
                  </div>
                  {/* Flash/LiDAR */}
                  <div className="w-1/2 h-1/2 flex items-center justify-center relative">
                     <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-amber-100/80 shadow-[0_0_8px_rgba(255,251,204,0.6)]"></div>
                     <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#111] border border-white/10 shadow-[inset_0_0_2px_rgba(0,0,0,1)]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>`;

code = code.replace(regex, replacement.trim());
fs.writeFileSync('src/components/Hero.tsx', code);
