const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.jsx');
let allIcons = new Set();
files.forEach(f => {
  const code = fs.readFileSync(f, 'utf-8');
  const match = code.match(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/);
  if (match) {
    match[1].split(',').map(s => s.trim()).filter(Boolean).forEach(icon => allIcons.add(icon));
  }
});
const icons = Array.from(allIcons);
console.log('Icons to check:', icons);
import('lucide-react').then(m => {
  const missing = icons.filter(name => !m[name]);
  console.log('Missing icons:', missing);
}).catch(console.error);
