const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const regex = /\{\/\* Authentic 3D iPhone Presentation \*\/\}(.|\n)*?<\/div>\n\s*<\/motion\.div>/;

const replacement = `
          {/* Authentic 3D iPhone Presentation */}
          <div className="relative w-[280px] sm:w-[320px] md:w-[380px] aspect-[1/2] flex items-center justify-center -translate-y-10 sm:translate-y-0 perspective-[1200px]">
            {/* Ambient Glow behind the phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A7CFF]/40 via-transparent to-[#25D366]/30 blur-3xl rounded-full opacity-70 mix-blend-screen scale-110 animate-pulse" />
            
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 12, ease: "linear", repeat: Infinity }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-[240px] h-[520px] sm:w-[280px] sm:h-[600px] md:w-[300px] md:h-[640px]"
            >
              {/* Phone Body (Front) */}
              <div 
                className="absolute inset-0 rounded-[48px] bg-black border-4 border-[#333] p-2 flex flex-col items-center shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden backface-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'translateZ(10px)' }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-4 w-28 h-7 bg-black rounded-full flex items-center justify-end px-3 z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-white/10 shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full rounded-[38px] bg-gradient-to-br from-[#1a1a24] to-[#0d0d12] relative overflow-hidden flex items-center justify-center border border-white/5">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                  
                  {/* DEMO Text inside screen */}
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      DEMO
                    </span>
                    <span className="mt-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-medium tracking-widest uppercase text-white/70">
                      Modo Ilustrativo
                    </span>
                  </div>

                  {/* UI Elements mock */}
                  <div className="absolute bottom-6 inset-x-6 h-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-around px-4">
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>

              {/* Phone Body (Back) */}
              <div 
                className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-4 border-[#333] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] backface-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(10px)' }}
              >
                {/* Apple Logo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                </div>
                
                {/* Camera Module */}
                <div className="absolute top-8 left-8 w-28 h-28 rounded-[28px] bg-black border border-white/5 flex flex-wrap p-2 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#111] border-2 border-[#222] shadow-[inset_0_0_10px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-3 h-3 rounded-full bg-blue-900/30 blur-[1px]"></div>
                    </div>
                  </div>
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#111] border-2 border-[#222] shadow-[inset_0_0_10px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-3 h-3 rounded-full bg-blue-900/30 blur-[1px]"></div>
                    </div>
                  </div>
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#111] border-2 border-[#222] shadow-[inset_0_0_10px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-3 h-3 rounded-full bg-blue-900/30 blur-[1px]"></div>
                    </div>
                  </div>
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                     <div className="w-4 h-4 rounded-full bg-gray-300 shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]"></div>
                  </div>
                </div>
              </div>
              
              {/* Phone Edges (Thickness) */}
              <div 
                className="absolute inset-y-8 -left-[10px] w-[20px] bg-gradient-to-r from-[#222] to-[#111] border-y-4 border-[#333]"
                style={{ transform: 'rotateY(-90deg) translateZ(120px) sm:translateZ(140px) md:translateZ(150px)', transformOrigin: 'left center' }}
              />
              <div 
                className="absolute inset-y-8 -right-[10px] w-[20px] bg-gradient-to-l from-[#222] to-[#111] border-y-4 border-[#333]"
                style={{ transform: 'rotateY(90deg) translateZ(120px) sm:translateZ(140px) md:translateZ(150px)', transformOrigin: 'right center' }}
              />
            </motion.div>
          </div>
        </motion.div>`;

code = code.replace(regex, replacement.trim());
fs.writeFileSync('src/components/Hero.tsx', code);
