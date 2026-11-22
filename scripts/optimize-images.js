const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projects = [
  { name: 'ved-enterprise', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop' },
  { name: 'event-qr', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop' },
  { name: 'lms-system', url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop' },
  { name: 'expense-tracker', url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop' },
  { name: 'ride-sharing', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop' },
  { name: 'campus-connect', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop' },
  { name: 'fitness-tracker', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop' },
  { name: 'media-player', url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&h=400' }
];

const targetDir = path.join(__dirname, '../public/assets/projects');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

async function downloadAndOptimize() {
  for (const p of projects) {
    const dest = path.join(targetDir, `${p.name}.webp`);
    try {
      console.log(`Downloading ${p.name}...`);
      const res = await fetch(p.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      await sharp(buffer)
        .resize(600, 400, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(dest);
      console.log(`Saved ${dest}`);
    } catch (err) {
      console.error(`Failed ${p.name}:`, err.message);
    }
  }
}

downloadAndOptimize();
