const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const vm = require('vm');
const excluded = new Set(['node_modules', '.next', '.git', '.sites-runtime']);
const entries = [];
function walk(dir) {
  for (const item of fs.readdirSync(dir, {withFileTypes:true})) {
    if (excluded.has(item.name)) continue;
    const file = path.join(dir,item.name);
    if (item.isDirectory()) walk(file);
    else {
      const bytes = fs.readFileSync(file);
      const textual = /\.(jsx?|css|html|json|md|mjs|cjs|xml|txt|yaml)$/.test(file);
      entries.push({file:file.replaceAll('\\','/'), size:bytes.length, sha256:crypto.createHash('sha256').update(bytes).digest('hex'),textual});
    }
  }
}
walk('.');
fs.mkdirSync('docs', {recursive:true});
fs.writeFileSync('docs/source-inventory.json', JSON.stringify(entries,null,2));
function array(file, name) {
  const source = fs.readFileSync(file,'utf8');
  return vm.runInNewContext(source.slice(source.indexOf('const '+name+' = ')+('const '+name+' = ').length, source.indexOf('\n];',source.indexOf('const '+name+' = '))+2), {hackerankImg:'/assets/hackerank.png',gfgImg:'/assets/gfg.png',uniImg:'/assets/uni.png'}, {timeout:1000});
}
const projects = array('components/Projects.jsx','projects');
const descriptions = array('src/components/Projects.jsx','projects');
projects.forEach((p,i) => {
  if(i) p.description = descriptions[i-1].description;
  p.status = i===3 ? 'Prototype' : i===0 ? 'Live website' : 'Developed project';
});
projects[4].title = 'CampusConnect — College Management App';
projects[2].tech = ['Android','Java','SQLite','MVC Pattern'];
projects[3].tech = ['Android Studio','Java','Google Maps SDK','Firebase'];
projects[4].tech.push('Mobile Development');
projects[5].tech = ['Android Studio','Java','Kotlin','Room DB','MPAndroidChart','WorkManager'];
projects[5].description = "Developed a fitness app to track step count, distance, and calories burned in real time using Android’s built-in sensors. Stores historical activity data and presents insights through charts and lists.";
projects[6].tech = ['Android Studio','Java','MediaPlayer API','RecyclerView','Room DB','Foreground Service'];
projects[6].description = 'Created a media player for playing, pausing, and navigating songs from local storage. Supports background playback, dynamic playlists, and custom notification controls.';
const details = [
 ['Built dynamic user interfaces for Vedenterprise.','Focused on performance and a seamless web experience.'],
 ['Built the Learning Management System during the DeepVectro internship.','Implemented login and authentication, course modules, quiz submissions, and progress tracking.'],
 ['Developed the Android app during the internship.','Implemented expense categories, credit and debit tracking, summary charts, and SQLite persistence.'],
 ['Developed an Android prototype connecting riders and drivers.','Implemented secure login, real-time GPS tracking, ride requests, and live maps.'],
 ['Built student create, read, update, and delete operations.','Added timetable viewing and PDF document downloads.'],
 ['Used Android sensors for live activity tracking.','Stored historical data and presented it in charts and lists.'],
 ['Implemented local audio playback and playlist navigation.','Supported background playback and custom notification controls.']
];
projects.forEach((p,i) => {p.contributions = details[i]; delete p.accent;});
const certifications = array('components/Certificates.jsx','certificates');
certifications[1].description += ' Strengthened Java skills through hands-on exercises and real-world examples.';
certifications[2].issuer = 'UniAthena in partnership with Cambridge International Qualifications, UK';
certifications[2].links[1].url += '?usp=sharing';
fs.mkdirSync('data',{recursive:true});
fs.writeFileSync('data/portfolio.js', '// Content reconciled from components/, src/components/, and legacy/index.html.\nexport const projects = '+JSON.stringify(projects,null,2)+';\n\nexport const certifications = '+JSON.stringify(certifications,null,2)+';\n');
console.log('Read '+entries.length+' source and asset files. Generated reconciled data for '+projects.length+' projects and '+certifications.length+' certifications.');
