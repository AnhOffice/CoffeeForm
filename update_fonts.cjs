const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        filelist = fs.statSync(path.join(dir, file)).isDirectory()
            ? walkSync(path.join(dir, file), filelist)
            : filelist.concat(path.join(dir, file));
    });
    return filelist;
};

const files = walkSync('./components').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/'Lora', serif/g, "'Merriweather', serif")
        .replace(/'Playfair Display', serif/g, "'Merriweather', serif")
        .replace(/'Cormorant Garamond', serif/g, "'Merriweather', serif");
        
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated ' + file);
    }
});

console.log('Done');
