const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const regex = /<video(.|\n)*?<\/video>/;
const replacement = `
            <div className="relative z-10 w-[140%] h-[140%] md:w-[150%] md:h-[150%] scale-[1.15] md:scale-[1.2] ml-[20%] pointer-events-auto">
               <iframe 
                title="iPhone 15 Pro Max 3D" 
                frameBorder="0" 
                allowFullScreen 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true" 
                allow="autoplay; fullscreen; xr-spatial-tracking" 
                xr-spatial-tracking="true" 
                execution-while-out-of-viewport="true" 
                execution-while-not-rendered="true" 
                web-share="true" 
                src="https://sketchfab.com/models/df17520841214c1792fb8a44c6783ee7/embed?autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_theme=dark&dnt=1" 
                className="w-full h-full object-contain"
                style={{ filter: 'drop-shadow(0 0 30px rgba(138, 124, 255, 0.2))' }}
              />
            </div>
`;

code = code.replace(regex, replacement.trim());
fs.writeFileSync('src/components/Hero.tsx', code);
