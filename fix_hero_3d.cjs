const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const regex = /<motion\.div\s+animate=\{\{\s*rotateY:\s*\[0,\s*360\]\s*\}\}(.|\n)*?<\/motion\.div>/;

const replacement = `
          {/* Authentic 3D iPhone Presentation */}
          <div className="relative w-[300px] sm:w-[400px] md:w-[500px] aspect-square flex items-center justify-center -translate-y-10 sm:translate-y-0">
            {/* Ambient Glow behind the phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A7CFF]/30 via-transparent to-[#25D366]/20 blur-3xl rounded-full opacity-60 mix-blend-screen scale-75 animate-pulse" />
            
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-contain relative z-10 scale-[1.3] mix-blend-screen"
              style={{ filter: 'drop-shadow(0 0 30px rgba(138, 124, 255, 0.2))' }}
            >
              <source src="https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/hero/large.mp4" type="video/mp4" />
            </video>
          </div>
`;

code = code.replace(regex, replacement.trim());
fs.writeFileSync('src/components/Hero.tsx', code);
