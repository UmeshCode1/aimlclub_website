import { spawn } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';
const OUTPUT_DIR = path.join(process.cwd(), 'lighthouse-reports');

const config = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    formFactor: 'desktop',
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0
    },
    screenEmulation: {
      mobile: false,
      width: 1350,
      height: 940,
      deviceScaleFactor: 1,
      disabled: false
    }
  }
};

async function runLighthouse() {
  console.log('🔍 Running Lighthouse audit...\n');
  
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
    const outputPath = path.join(OUTPUT_DIR, `report-${timestamp}.html`);
    const jsonPath = path.join(OUTPUT_DIR, `report-${timestamp}.json`);
    
    const args = [
      SITE_URL,
      '--output=html',
      '--output=json',
      `--output-path=${outputPath.replace('.html', '')}`,
      '--chrome-flags="--headless --no-sandbox --disable-dev-shm-usage"',
      '--quiet'
    ];
    
    const lighthouse = spawn('npx', ['lighthouse', ...args], {
      stdio: 'inherit',
      shell: true
    });
    
    lighthouse.on('close', async (code) => {
      if (code === 0) {
        console.log(`\n✅ Lighthouse audit complete!`);
        console.log(`📊 HTML Report: ${outputPath}`);
        console.log(`📄 JSON Report: ${jsonPath}`);
        
        try {
          const jsonData = await fs.readFile(jsonPath, 'utf-8');
          const results = JSON.parse(jsonData);
          const categories = results.categories;
          
          console.log('\n📈 Scores:');
          console.log(`  Performance:    ${(categories.performance.score * 100).toFixed(0)}/100`);
          console.log(`  Accessibility:  ${(categories.accessibility.score * 100).toFixed(0)}/100`);
          console.log(`  Best Practices: ${(categories['best-practices'].score * 100).toFixed(0)}/100`);
          console.log(`  SEO:            ${(categories.seo.score * 100).toFixed(0)}/100`);
          
          // Check thresholds
          const thresholds = { performance: 90, accessibility: 95, 'best-practices': 90, seo: 95 };
          let failed = false;
          
          for (const [key, threshold] of Object.entries(thresholds)) {
            const score = categories[key].score * 100;
            if (score < threshold) {
              console.log(`\n⚠️  ${key} score ${score.toFixed(0)} is below threshold ${threshold}`);
              failed = true;
            }
          }
          
          if (failed) {
            console.log('\n❌ Some scores are below thresholds. Review the report for details.');
            process.exit(1);
          } else {
            console.log('\n✅ All scores meet thresholds!');
          }
        } catch (err) {
          console.error('Failed to parse JSON report:', err);
        }
      } else {
        console.error(`\n❌ Lighthouse failed with code ${code}`);
        process.exit(code || 1);
      }
    });
    
    lighthouse.on('error', (err) => {
      console.error('Failed to start Lighthouse:', err);
      process.exit(1);
    });
    
  } catch (error) {
    console.error('Error running Lighthouse:', error);
    process.exit(1);
  }
}

runLighthouse();
