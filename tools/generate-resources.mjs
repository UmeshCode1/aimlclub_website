// Generate docs/resources with images and links used across the site
// - Scans public/images and public/assets for image files
// - Scans src/**/* for http(s) and mailto links
// Output: docs/resources/IMAGES.md and docs/resources/LINKS.md
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const imgDirs = [
  path.join(publicDir, 'images'),
  path.join(publicDir, 'assets'),
];
const srcDir = path.join(root, 'src');
const outDir = path.join(root, 'docs', 'resources');

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

function isImage(file) {
  return /\.(png|jpe?g|webp|gif|svg)$/i.test(file);
}

async function walk(dir) {
  const out = [];
  try {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) out.push(...await walk(full));
      else out.push(full);
    }
  } catch (e) {
    // ignore missing folders
  }
  return out;
}

async function collectImages() {
  const all = [];
  for (const d of imgDirs) {
    const files = await walk(d);
    for (const f of files) {
      if (isImage(f)) all.push(f);
    }
  }
  // Normalize to web paths under /public
  const normalized = all.map(f => '/' + path.relative(publicDir, f).replace(/\\/g, '/'));
  // Group by top folder
  const groups = {};
  for (const p of normalized) {
    const top = p.split('/')[1] || '';
    groups[top] ||= [];
    groups[top].push(p);
  }
  return groups;
}

async function collectLinks() {
  const files = await walk(srcDir);
  const srcFiles = files.filter(f => /\.(ts|tsx|js|jsx|mdx?)$/i.test(f));
  const urlRe = /(https?:\/\/[^\s"'\)\]}]+|mailto:[^\s"'\)\]}]+)/g;
  const set = new Set();
  for (const f of srcFiles) {
    try {
      const text = await fs.promises.readFile(f, 'utf8');
      const matches = text.match(urlRe) || [];
      for (const m of matches) {
        if (m === '#') continue;
        // Skip template string placeholders like ${var}
        if (m.includes('${')) continue;
        set.add(m.replace(/`/g, ''));
      }
    } catch {
      // ignore
    }
  }
  return Array.from(set).sort();
}

function header(title, level = 1) {
  return `${'#'.repeat(level)} ${title}\n\n`;
}

async function generate() {
  await ensureDir(outDir);

  // Images doc
  const groups = await collectImages();
  let imagesMd = header('Images used in the website');
  imagesMd += 'This index is auto-generated. Paths are relative to the site root (public).\n\n';
  for (const [group, list] of Object.entries(groups)) {
    imagesMd += header(group || 'root', 2);
    for (const p of list.sort()) imagesMd += `- ${p}\n`;
    imagesMd += '\n';
  }
  await fs.promises.writeFile(path.join(outDir, 'IMAGES.md'), imagesMd, 'utf8');

  // Links doc
  const links = await collectLinks();
  let linksMd = header('Links referenced across the site');
  linksMd += 'This index is auto-generated from the codebase.\n\n';
  for (const l of links) linksMd += `- ${l}\n`;
  linksMd += '\n';
  await fs.promises.writeFile(path.join(outDir, 'LINKS.md'), linksMd, 'utf8');

  console.log('Generated docs/resources/IMAGES.md and LINKS.md');
}

await generate();
