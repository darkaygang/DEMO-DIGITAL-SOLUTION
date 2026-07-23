const fs = require('fs');
let code = fs.readFileSync('src/components/FeaturedModels.tsx', 'utf8');

code = code.replace(/<div\n\s*onClick=\{([^}]+)\}\n\s*className="lg:col-span-7/g, 
`<motion.div
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                onClick={$1}
                className="lg:col-span-7`);

code = code.replace(/<div\n\s*onClick=\{([^}]+)\}\n\s*className="lg:col-span-5/g, 
`<motion.div
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                onClick={$1}
                className="lg:col-span-5`);

code = code.replace(/<\/div>\s*\{\/\* Model 2 \*\/\}/, `</motion.div>\n\n            {/* Model 2 */}`);
code = code.replace(/<\/div>\s*<\/RevealTransition>/, `</motion.div>\n          </RevealTransition>`);

fs.writeFileSync('src/components/FeaturedModels.tsx', code);
