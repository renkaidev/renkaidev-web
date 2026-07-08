const fs = require('fs');
const path = require('path');
const traverse = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.astro') || fullPath.endsWith('.tsx') || fullPath.endsWith('.md')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('material-symbols-outlined') && !content.includes('translate="no"')) {
                // Add notranslate class and translate="no" attribute to material-symbols-outlined spans
                content = content.replace(/class="([^"]*)material-symbols-outlined([^"]*)"/g, 'class="$1material-symbols-outlined notranslate$2" translate="no"');
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        }
    });
};
traverse('./src');
