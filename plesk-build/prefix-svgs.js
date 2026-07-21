const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.svg')) {
                results.push(file);
            }
        }
    });
    return results;
}

const svgFiles = walk('./src/assets');
let modifiedCount = 0;

svgFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const basename = path.basename(file, '.svg').replace(/[^a-zA-Z0-9_]/g, '_');

    // Find all id="..."
    const idRegex = /id="([^"]+)"/g;
    let match;
    const ids = new Set();
    while ((match = idRegex.exec(content)) !== null) {
        if (!match[1].startsWith(basename + '_')) {
            ids.add(match[1]);
        }
    }

    if (ids.size > 0) {
        let newContent = content;
        ids.forEach(id => {
            // Replace id="<id>"
            const idStr = `id="${id}"`;
            const newIdStr = `id="${basename}_${id}"`;
            newContent = newContent.split(idStr).join(newIdStr);

            // Replace url(#<id>)
            const urlStr = `url(#${id})`;
            const newUrlStr = `url(#${basename}_${id})`;
            newContent = newContent.split(urlStr).join(newUrlStr);
        });

        fs.writeFileSync(file, newContent, 'utf8');
        modifiedCount++;
    }
});

console.log(`Prefixed IDs in ${modifiedCount} SVG files.`);
