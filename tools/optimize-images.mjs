// Optimize images in public/images/team and faculty using sharp to WebP.
// Safe to run with no images; skips non JPG/PNG.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const teamDir = path.resolve('public/images/team');
const facultyDir = path.resolve('public/images/faculty');

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return false;
  const base = path.basename(filePath, ext);
  const out = path.join(path.dirname(filePath), `${base}.webp`);
  try {
    const input = await fs.promises.readFile(filePath);
    const img = sharp(input).rotate();
    // If very large, cap width to 1024 to keep assets light
    const meta = await img.metadata();
    const resized = meta.width && meta.width > 1024 ? img.resize({ width: 1024 }) : img;
    await resized.webp({ quality: 82 }).toFile(out);
    console.log(`Optimized: ${path.relative(process.cwd(), out)}`);
    return true;
  } catch (e) {
    console.warn(`Failed to optimize ${filePath}:`, e.message);
    return false;
  }
}

async function processDir(dir, label) {
  await ensureDir(dir);
  const files = await fs.promises.readdir(dir).catch(() => []);
  if (files.length === 0) {
    console.log(`No ${label} images found.`);
    return;
  }
  await Promise.all(
    files.map(f => optimizeFile(path.join(dir, f)))
  );
}

async function run() {
  console.log('Optimizing images...');
  await processDir(teamDir, 'team');
  await processDir(facultyDir, 'faculty');
  console.log('Done!');
}

run();
