const fs = require('node:fs');
const path = require('node:path');
const localModules = path.resolve(__dirname,'node_modules');
const sharedModules = path.resolve(__dirname,'../vitrina/node_modules');
const esbuild = require(require.resolve('esbuild',{paths:[__dirname,sharedModules]}));

const output = process.argv[2] ? path.resolve(process.argv[2]) : path.join(__dirname,'dist');
fs.mkdirSync(output,{recursive:true});
fs.copyFileSync(path.join(__dirname,'index.html'),path.join(output,'index.html'));
fs.cpSync(path.join(__dirname,'assets'),path.join(output,'assets'),{recursive:true});
esbuild.buildSync({
  entryPoints:[path.join(__dirname,'app.jsx')],
  nodePaths:[localModules,sharedModules],
  bundle:true,minify:true,outfile:path.join(output,'app.js'),
  define:{'process.env.NODE_ENV':'"production"'},
});
const media = path.join(__dirname,'media');
if(fs.existsSync(media)) fs.cpSync(media,path.join(output,'media'),{recursive:true});
