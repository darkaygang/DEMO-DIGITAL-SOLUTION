const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

if (!code.includes('@keyframes pulseGlow')) {
    code += `\n
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.055);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.15);
  }
}
.animate-pulse-glow {
  animation: pulseGlow 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
}
`;
    fs.writeFileSync('src/index.css', code);
}
