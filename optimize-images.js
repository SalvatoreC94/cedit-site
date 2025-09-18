import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.resolve('./src/assets');

// Funzione per convertire in WebP
async function convertToWebp(filePath) {
    const ext = path.extname(filePath);
    const fileName = path.basename(filePath, ext);
    const newFilePath = path.join(path.dirname(filePath), `${fileName}.webp`);

    await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(newFilePath);

    console.log(`✅ Converted: ${filePath} → ${newFilePath}`);
    return newFilePath;
}

// Funzione ricorsiva per scansionare la cartella
async function scanAndConvert(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            await scanAndConvert(fullPath);
        } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
            await convertToWebp(fullPath);
        }
    }
}

// Aggiorna riferimenti nel codice
function updateReferences() {
    const srcDir = path.resolve('./src');
    const vueFiles = [];

    function scanFiles(dir) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                scanFiles(fullPath);
            } else if (/\.(vue|js)$/i.test(file)) {
                vueFiles.push(fullPath);
            }
        }
    }

    scanFiles(srcDir);

    vueFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf-8');
        content = content.replace(/\.(png|jpg|jpeg)/gi, '.webp');
        fs.writeFileSync(file, content);
        console.log(`🔄 Updated references in ${file}`);
    });
}

(async () => {
    console.log('🚀 Starting image optimization...');
    await scanAndConvert(assetsDir);
    updateReferences();
    console.log('🎯 Optimization complete!');
})();
