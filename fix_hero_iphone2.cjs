const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const regex = /\{\/\* Authentic 3D iPhone Presentation \*\/\}(.|\n)*?<\/div>\n\s*<\/motion\.div>/;

const replacement = `
          {/* Authentic 3D iPhone Presentation */}
          <div className="relative w-full max-w-[400px] aspect-[1/2] flex items-center justify-center translate-y-12 sm:translate-y-0" style={{ perspective: '1200px' }}>
            {/* Ambient Glow behind the phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A7CFF]/40 via-transparent to-[#25D366]/30 blur-3xl rounded-full opacity-70 mix-blend-screen scale-110 animate-pulse" />
            
            <motion.div
              animate={{ rotateY: [0, -360] }}
              transition={{ duration: 16, ease: "linear", repeat: Infinity }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-[220px] h-[480px] sm:w-[260px] sm:h-[560px] md:w-[280px] md:h-[600px]"
            >
              {/* Stack layers for thickness */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 rounded-[44px] sm:rounded-[52px] bg-[#1a1a1a] border border-white/10"
                  style={{ transform: \`translateZ(\${(i - 3) * 2}px)\`, backfaceVisibility: 'hidden' }}
                />
              ))}

              {/* Phone Body (Front) */}
              <div 
                className="absolute inset-0 rounded-[44px] sm:rounded-[52px] bg-black border-4 border-[#333] p-1.5 sm:p-2 flex flex-col items-center shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'translateZ(6px)' }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-4 w-24 h-6 sm:w-28 sm:h-7 bg-black rounded-full flex items-center justify-end px-3 z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#111] border border-white/10 shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full rounded-[38px] sm:rounded-[44px] bg-gradient-to-br from-[#1a1a24] to-[#0d0d12] relative overflow-hidden flex flex-col items-center justify-center border border-white/5">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                  
                  {/* DEMO Text inside screen */}
                  <div className="relative z-10 flex flex-col items-center mt-10">
                    <span className="text-5xl sm:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      DEMO
                    </span>
                    <span className="mt-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[9px] sm:text-[10px] font-medium tracking-widest uppercase text-white/70">
                      Modo Ilustrativo
                    </span>
                  </div>

                  {/* UI Elements mock */}
                  <div className="absolute bottom-6 inset-x-4 sm:inset-x-6 h-14 sm:h-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-around px-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10" />
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10" />
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10" />
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>

              {/* Phone Body (Back) */}
              <div 
                className="absolute inset-0 rounded-[44px] sm:rounded-[52px] bg-gradient-to-br from-[#111] to-[#050505] border-4 border-[#333] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(6px)' }}
              >
                {/* Apple Logo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 text-white" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                </div>
                
                {/* Camera Module */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-24 h-24 sm:w-28 sm:h-28 rounded-[24px] sm:rounded-[28px] bg-black/60 backdrop-blur-md border border-white/10 flex flex-wrap p-2 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111] border border-[#333] shadow-[inset_0_0_8px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-900/40 blur-[1px]"></div>
                    </div>
                  </div>
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111] border border-[#333] shadow-[inset_0_0_8px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-900/40 blur-[1px]"></div>
                    </div>
                  </div>
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111] border border-[#333] shadow-[inset_0_0_8px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-900/40 blur-[1px]"></div>
                    </div>
                  </div>
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                     <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-400 shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>`;

code = code.replace(regex, replacement.trim());
fs.writeFileSync('src/components/Hero.tsx', code);
