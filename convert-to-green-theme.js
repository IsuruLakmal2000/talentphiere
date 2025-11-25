// Script to convert all CSS files to use green theme variables
const fs = require('fs');
const path = require('path');

// Color mapping: Blue -> Green theme variables
const colorReplacements = [
  // Blue colors to theme variables
  { from: /#3b82f6/gi, to: 'var(--primary)' },
  { from: /#2563eb/gi, to: 'var(--primary-dark)' },
  { from: /#60a5fa/gi, to: 'var(--primary-light)' },
  { from: /#93c5fd/gi, to: 'var(--primary-light)' },
  { from: /#dbeafe/gi, to: 'var(--primary-pale)' },
  { from: /#eff6ff/gi, to: 'var(--primary-ultra-light)' },
  
  // Purple/Violet colors (keep for accents)
  { from: /#8b5cf6/gi, to: 'var(--accent)' },
  { from: /#7c3aed/gi, to: 'var(--accent-dark)' },
  
  // Text colors
  { from: /#1a2332/gi, to: 'var(--text-primary)' },
  { from: /#1e293b/gi, to: 'var(--text-primary)' },
  { from: /#1f2937/gi, to: 'var(--text-primary)' },
  { from: /#111827/gi, to: 'var(--text-primary)' },
  { from: /#475569/gi, to: 'var(--text-secondary)' },
  { from: /#4b5563/gi, to: 'var(--text-secondary)' },
  { from: /#334155/gi, to: 'var(--text-secondary)' },
  { from: /#5a6c7d/gi, to: 'var(--text-secondary)' },
  { from: /#64748b/gi, to: 'var(--text-tertiary)' },
  { from: /#6b7280/gi, to: 'var(--text-tertiary)' },
  { from: /#94a3b8/gi, to: 'var(--text-light)' },
  
  // Background colors
  { from: /#f8fafc/gi, to: 'var(--bg-secondary)' },
  { from: /#f1f5f9/gi, to: 'var(--bg-tertiary)' },
  { from: /#f0fdf4/gi, to: 'var(--bg-accent)' },
  { from: /#f7f9fb/gi, to: 'var(--bg-tertiary)' },
  
  // Border colors
  { from: /rgba\(226,\s*232,\s*240,\s*0\.8\)/gi, to: 'var(--border-light)' },
  { from: /rgba\(203,\s*213,\s*225,\s*0\.6\)/gi, to: 'var(--border-medium)' },
  { from: /rgba\(226,\s*232,\s*240,\s*0\.6\)/gi, to: 'var(--border-medium)' },
  
  // Blue rgba overlays -> Green
  { from: /rgba\(59,\s*130,\s*246,\s*0\.04\)/gi, to: 'var(--overlay-primary-light)' },
  { from: /rgba\(59,\s*130,\s*246,\s*0\.05\)/gi, to: 'var(--overlay-primary-light)' },
  { from: /rgba\(59,\s*130,\s*246,\s*0\.08\)/gi, to: 'var(--overlay-primary-medium)' },
  { from: /rgba\(59,\s*130,\s*246,\s*0\.1\)/gi, to: 'var(--border-primary)' },
  { from: /rgba\(59,\s*130,\s*246,\s*0\.12\)/gi, to: 'var(--overlay-primary-dark)' },
  { from: /rgba\(59,\s*130,\s*246,\s*0\.15\)/gi, to: 'var(--border-primary)' },
  { from: /rgba\(59,\s*130,\s*246,\s*0\.2\)/gi, to: 'var(--border-primary)' },
  { from: /rgba\(59,\s*130,\s*246,\s*0\.3\)/gi, to: 'var(--shadow-md)' },
  
  // Green colors (keep as is with variables)
  { from: /#10b981/gi, to: 'var(--primary)' },
  { from: /#059669/gi, to: 'var(--primary-dark)' },
  { from: /#34d399/gi, to: 'var(--primary-light)' },
  { from: /#d1fae5/gi, to: 'var(--primary-pale)' },
  { from: /#ecfdf5/gi, to: 'var(--primary-ultra-light)' },
  
  // Teal colors
  { from: /#14b8a6/gi, to: 'var(--secondary)' },
  { from: /#0d9488/gi, to: 'var(--secondary-dark)' },
  
  // Common gradients
  { from: /linear-gradient\(135deg,\s*#3b82f6\s+0%,\s*#2563eb\s+100%\)/gi, to: 'var(--gradient-primary)' },
  { from: /linear-gradient\(135deg,\s*#10b981\s+0%,\s*#059669\s+100%\)/gi, to: 'var(--gradient-primary)' },
  { from: /linear-gradient\(135deg,\s*#14b8a6\s+0%,\s*#0d9488\s+100%\)/gi, to: 'var(--gradient-secondary)' },
  { from: /linear-gradient\(90deg,\s*#3b82f6\s+0%,\s*#8b5cf6\s+100%\)/gi, to: 'var(--gradient-top-accent)' },
  { from: /linear-gradient\(90deg,\s*#10b981\s+0%,\s*#14b8a6\s+100%\)/gi, to: 'var(--gradient-top-accent)' },
  { from: /linear-gradient\(135deg,\s*#f5f7fa\s+0%,\s*#e8f0f9\s+100%\)/gi, to: 'var(--gradient-bg-light)' },
  { from: /linear-gradient\(135deg,\s*#f0fdf4\s+0%,\s*#dcfce7\s+100%\)/gi, to: 'var(--gradient-bg-light)' },
  { from: /linear-gradient\(135deg,\s*#ffffff\s+0%,\s*#f8fafc\s+100%\)/gi, to: 'var(--gradient-card)' },
  { from: /linear-gradient\(135deg,\s*#ffffff\s+0%,\s*#f0fdf4\s+100%\)/gi, to: 'var(--gradient-card)' },
  
  // Border radius
  { from: /border-radius:\s*8px/gi, to: 'border-radius: var(--radius-sm)' },
  { from: /border-radius:\s*10px/gi, to: 'border-radius: var(--radius-md)' },
  { from: /border-radius:\s*12px/gi, to: 'border-radius: var(--radius-md)' },
  { from: /border-radius:\s*16px/gi, to: 'border-radius: var(--radius-lg)' },
  { from: /border-radius:\s*20px/gi, to: 'border-radius: var(--radius-xl)' },
  
  // Transitions
  { from: /transition:\s*all\s+0\.2s\s+ease/gi, to: 'transition: all var(--transition-fast)' },
  { from: /transition:\s*all\s+0\.3s\s+ease/gi, to: 'transition: all var(--transition-base)' },
  { from: /transition:\s*transform\s+0\.3s\s+ease/gi, to: 'transition: transform var(--transition-base)' },
];

// Get all CSS files recursively
function getAllCssFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllCssFiles(filePath, fileList);
    } else if (file.endsWith('.css') && !file.includes('theme.css')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Process a CSS file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changeCount = 0;
  
  colorReplacements.forEach(({ from, to }) => {
    const matches = content.match(from);
    if (matches) {
      content = content.replace(from, to);
      changeCount += matches.length;
    }
  });
  
  if (changeCount > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${filePath} (${changeCount} changes)`);
    return true;
  }
  
  return false;
}

// Main execution
console.log('🎨 Converting entire site to Green Theme...\n');

const srcDir = path.join(__dirname, 'src');
const cssFiles = getAllCssFiles(srcDir);

console.log(`Found ${cssFiles.length} CSS files to process\n`);

let updatedCount = 0;
cssFiles.forEach(file => {
  if (processFile(file)) {
    updatedCount++;
  }
});

console.log(`\n✨ Conversion complete!`);
console.log(`📊 Updated ${updatedCount} out of ${cssFiles.length} files`);
console.log(`🎨 Your site now uses the professional Green theme!`);
