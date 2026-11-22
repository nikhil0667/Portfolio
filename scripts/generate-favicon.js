const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svg128 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14171d"/>
      <stop offset="100%" stop-color="#0a0c0f"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="30" fill="url(#bg)"/>
  <rect width="126" height="126" x="1" y="1" rx="29" fill="none" stroke="#2c3037" stroke-width="2"/>
  <text x="60" y="86" font-family="'Space Grotesk', Arial, Helvetica, sans-serif" font-size="66" font-weight="800" letter-spacing="-4" text-anchor="middle">
    <tspan fill="#f2f4f8">nk</tspan><tspan fill="#7aabff">.</tspan>
  </text>
</svg>
`.trim();

// Write to public/favicon.svg
fs.writeFileSync(path.join(__dirname, '../public/favicon.svg'), svg128);

// Write to app/icon.svg (Next.js automatically uses app/icon.svg as dynamic icon)
fs.writeFileSync(path.join(__dirname, '../app/icon.svg'), svg128);

// Generate PNG buffers for 16, 32, 48, 192, 512
async function generateIcons() {
  const buf32 = await sharp(Buffer.from(svg128)).resize(32, 32).png().toBuffer();
  const buf48 = await sharp(Buffer.from(svg128)).resize(48, 48).png().toBuffer();
  const buf192 = await sharp(Buffer.from(svg128)).resize(192, 192).png().toBuffer();
  
  // Write PNGs
  fs.writeFileSync(path.join(__dirname, '../public/favicon-32x32.png'), buf32);
  fs.writeFileSync(path.join(__dirname, '../public/favicon-48x48.png'), buf48);
  fs.writeFileSync(path.join(__dirname, '../public/apple-touch-icon.png'), buf192);

  // Simple ICO file writer (wrapping 32x32 PNG)
  // An ICO header (6 bytes) + Directory entry (16 bytes) + PNG data
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // type 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // 1 image

  const icoDir = Buffer.alloc(16);
  icoDir.writeUInt8(32, 0); // width 32
  icoDir.writeUInt8(32, 1); // height 32
  icoDir.writeUInt8(0, 2);  // color palette
  icoDir.writeUInt8(0, 3);  // reserved
  icoDir.writeUInt16LE(1, 4); // color planes
  icoDir.writeUInt16LE(32, 6); // bits per pixel
  icoDir.writeUInt32LE(buf32.length, 8); // image data size
  icoDir.writeUInt32LE(22, 12); // image data offset (6 + 16 = 22)

  const icoBuffer = Buffer.concat([icoHeader, icoDir, buf32]);
  
  // Replace in app/favicon.ico and public/favicon.ico
  fs.writeFileSync(path.join(__dirname, '../app/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
  
  console.log('Successfully generated nk. favicons in all required locations!');
}

generateIcons().catch(console.error);

