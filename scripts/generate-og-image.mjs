import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

// Read logo and encode to base64 for embedding in SVG
const logoPng = readFileSync(resolve(rootDir, 'public/logo.png'));
const logoBase64 = logoPng.toString('base64');

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FDFCFB"/>
      <stop offset="50%" style="stop-color:#FAF8F6"/>
      <stop offset="100%" style="stop-color:#F5F0EB"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#C8442E"/>
      <stop offset="100%" style="stop-color:#E05A3A"/>
    </linearGradient>
    <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#C9B8A8;stop-opacity:0.25"/>
      <stop offset="100%" style="stop-color:#C9B8A8;stop-opacity:0"/>
    </radialGradient>
    <radialGradient id="blob2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#E05A3A;stop-opacity:0.12"/>
      <stop offset="100%" style="stop-color:#E05A3A;stop-opacity:0"/>
    </radialGradient>
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#059669"/>
      <stop offset="100%" style="stop-color:#10B981"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Decorative blobs -->
  <ellipse cx="100" cy="80" rx="300" ry="250" fill="url(#blob1)"/>
  <ellipse cx="1100" cy="500" rx="350" ry="280" fill="url(#blob2)"/>
  <ellipse cx="800" cy="100" rx="200" ry="180" fill="url(#blob1)"/>

  <!-- Grid pattern -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.02)" stroke-width="0.5"/>
  </pattern>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>

  <!-- Left content area -->

  <!-- Logo + brand -->
  <image href="data:image/png;base64,${logoBase64}" x="80" y="140" width="88" height="88"/>
  <text x="182" y="200" font-family="system-ui, -apple-system, sans-serif" font-size="46" font-weight="700" fill="#3D3D3D">Pedro</text>

  <!-- Main title -->
  <text x="80" y="300" font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="700" fill="#3D3D3D">Confronto Prezzi</text>
  <text x="80" y="368" font-family="system-ui, -apple-system, sans-serif" font-size="54" font-weight="700" fill="url(#accent)">Supermercati</text>

  <!-- Subtitle -->
  <text x="80" y="430" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="400" fill="#888888">Lista della spesa intelligente.</text>
  <text x="80" y="464" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="400" fill="#888888">Gratis su iPhone e Android.</text>

  <!-- Right side: big savings card -->
  <rect x="720" y="155" width="400" height="310" rx="28" fill="white" stroke="#E8E0D8" stroke-width="1.5"/>

  <!-- Savings percentage -->
  <text x="920" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="110" font-weight="800" fill="url(#greenGrad)" text-anchor="middle">-30%</text>

  <!-- Savings label -->
  <text x="920" y="330" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="500" fill="#888888" text-anchor="middle">risparmio sulla spesa</text>

  <!-- Stats row inside card -->
  <line x1="760" y1="365" x2="1080" y2="365" stroke="#F0ECE7" stroke-width="1"/>

  <text x="810" y="405" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#3D3D3D" text-anchor="middle">7+</text>
  <text x="810" y="430" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#AAAAAA" text-anchor="middle">Supermercati</text>

  <line x1="880" y1="380" x2="880" y2="445" stroke="#F0ECE7" stroke-width="1"/>

  <text x="950" y="405" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#3D3D3D" text-anchor="middle">60+</text>
  <text x="950" y="430" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#AAAAAA" text-anchor="middle">Province</text>

  <line x1="1020" y1="380" x2="1020" y2="445" stroke="#F0ECE7" stroke-width="1"/>

  <text x="1080" y="405" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#3D3D3D" text-anchor="middle">17+</text>
  <text x="1080" y="430" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#AAAAAA" text-anchor="middle">Regioni</text>

  <!-- Bottom bar -->
  <rect y="565" width="${width}" height="65" fill="#3D3D3D"/>
  <text x="80" y="604" font-family="system-ui, sans-serif" font-size="17" font-weight="400" fill="#BBBBBB">Disponibile gratis su</text>

  <!-- App Store badge -->
  <rect x="320" y="580" width="130" height="38" rx="8" fill="#555555"/>
  <text x="345" y="594" font-family="system-ui, sans-serif" font-size="9" fill="#CCCCCC">Scarica su</text>
  <text x="345" y="610" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="white">App Store</text>

  <!-- Google Play badge -->
  <rect x="470" y="580" width="150" height="38" rx="8" fill="#555555"/>
  <text x="495" y="594" font-family="system-ui, sans-serif" font-size="9" fill="#CCCCCC">Disponibile su</text>
  <text x="495" y="610" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="white">Google Play</text>

  <!-- Website URL -->
  <text x="1120" y="604" font-family="system-ui, sans-serif" font-size="16" font-weight="500" fill="#AAAAAA" text-anchor="end">pedroshoppinglist.app</text>
</svg>`;

async function generate() {
  const buffer = Buffer.from(svg);

  await sharp(buffer)
    .resize(1200, 630)
    .png({ quality: 95, compressionLevel: 6 })
    .toFile(resolve(rootDir, 'public/og-image.png'));

  console.log('OG image generated: public/og-image.png');
}

generate().catch(console.error);
