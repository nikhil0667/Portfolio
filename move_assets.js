const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'assets');
const destDir = path.join(__dirname, 'public', 'assets');

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
files.forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
        fs.unlinkSync(path.join(srcDir, file));
    }
});
console.log('Successfully moved files');
