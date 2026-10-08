const fs = require('fs');
const path = require('path');
const source = '.next/server/app/index.html';
const dist = 'personal-site/dist';
if (!fs.existsSync(source)) throw Error('Run the root Next.js production build first.');
let html = fs.readFileSync(source, 'utf8');
// This page uses server-rendered HTML and native browser controls; no hydration is needed.
html = html.replace(/<script\b([^>]*)>[\s\S]*?<\/script>/g, (tag, attrs) => attrs.includes('application/ld+json') ? tag : '');
html = html.replace(/<link\b[^>]*(?:as="script"|rel="modulepreload")[^>]*>/g, '');
fs.mkdirSync(dist,{recursive:true});
fs.writeFileSync(path.join(dist,'index.html'), html);
fs.cpSync('public', dist, {recursive:true});
fs.cpSync('.next/static', path.join(dist,'_next/static'), {recursive:true});
fs.copyFileSync('app/favicon.ico',path.join(dist,'favicon.ico'));
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const match of html.matchAll(/\b(?:href|src)="([^\"]+)"/g)) {
  const href = match[1].replaceAll('&amp;','&');
  if(href.startsWith('#') && !ids.has(href.slice(1))) throw Error('Missing navigation target: '+href);
  if(href.startsWith('/') && !href.startsWith('//')) {
    const file = decodeURIComponent(href.split('?')[0].slice(1));
    if(!fs.existsSync(path.join(dist,file))) throw Error('Missing local asset: '+file);
  }
}
const projectCount = (html.match(/class="project-row"/g)||[]).length;
const certCount = (html.match(/class="certificate-row"/g)||[]).length;
if(projectCount !== 7 || certCount !== 3) throw Error('Content count mismatch.');
if(!html.includes('WorkManager') || !html.includes('RecyclerView') || !html.includes('84/100')) throw Error('Legacy details missing.');
const css = fs.readFileSync('app/globals.css','utf8');
for(const color of ['--bg:#101215','--surface:#191c21','--muted:#a4abb7','--line:#2c3037','--blue:#7aabff','--white:#f2f4f8']) if(!css.includes(color)) throw Error('Original palette changed: '+color);
console.log(JSON.stringify({projects:projectCount,certifications:certCount,navigation:'all targets valid',localAssets:'all references valid',palette:'unchanged',framework:'Next.js App Router',hostedOutput:dist}));
