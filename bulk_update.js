const fs = require('fs');
const path = require('path');

const DIRS_TO_SCAN = ['pages', 'components'];

const REPLACEMENTS = [
  { regex: /Vui Hùng/g, replacement: "TRung Kiên" },
  { regex: /VUI HÙNG/g, replacement: "TRUNG KIÊN" },
  { regex: /vui hùng/gi, replacement: "TRung Kiên" },
  { regex: /0979095076/g, replacement: "0398771444" },
  { regex: /0979\.095\.076/g, replacement: "0398.771.444" },
  { regex: /0979 095 076/g, replacement: "0398 771 444" },
  { regex: /0988257479/g, replacement: "0398771444" },
  { regex: /docuvuihung@gmail\.com/g, replacement: "docutrungkien@gmail.com" },
];

function processPath(targetPath) {
  const stat = fs.statSync(targetPath);
  if (stat.isDirectory()) {
    const files = fs.readdirSync(targetPath);
    for (const file of files) {
      if (file === 'node_modules' || file === '.next') continue;
      processPath(path.join(targetPath, file));
    }
  } else if (stat.isFile() && targetPath.endsWith('.js')) {
    let content = fs.readFileSync(targetPath, 'utf8');
    let original = content;
    
    for (const rep of REPLACEMENTS) {
      content = content.replace(rep.regex, rep.replacement);
    }
    
    if (content !== original) {
      fs.writeFileSync(targetPath, content, 'utf8');
      console.log('Updated:', targetPath);
    }
  }
}

for (const dir of DIRS_TO_SCAN) {
  processPath(dir);
}
console.log('Done scanning and replacing.');
