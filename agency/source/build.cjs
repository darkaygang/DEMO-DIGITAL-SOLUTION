const fs = require('node:fs');
const path = require('node:path');
const localModules = path.resolve(__dirname,'node_modules');
const sharedModules = path.resolve(__dirname,'../vitrina/node_modules');
const esbuild = require(require.resolve('esbuild',{paths:[__dirname,sharedModules]}));

const output = process.argv[2] ? path.resolve(process.argv[2]) : path.join(__dirname,'dist');
fs.mkdirSync(output,{recursive:true});
fs.copyFileSync(path.join(__dirname,'index.html'),path.join(output,'index.html'));
const assets = fs.existsSync(path.join(__dirname,'assets')) ? path.join(__dirname,'assets') : path.join(__dirname,'../public/assets');
fs.mkdirSync(path.join(output,'assets'),{recursive:true});
for(const name of ['logo.png','phone.webp','boleta-case.webp','hero-scene.webp']){
  fs.copyFileSync(path.join(assets,name),path.join(output,'assets',name));
}
esbuild.buildSync({
  entryPoints:[path.join(__dirname,'app.jsx')],
  nodePaths:[localModules,sharedModules],
  bundle:true,minify:true,outfile:path.join(output,'app.js'),external:['./assets/*'],
  define:{'process.env.NODE_ENV':'"production"'},
});
