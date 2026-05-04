// One-off: extract the yellow REV VR XPERIENCE mark from a JPEG that has a
// black/near-black background and write a transparent PNG.
// Run with: node scripts/extract-logo.js
//
// Strategy: decode to raw RGBA, set alpha based on per-pixel brightness so
// pure-black goes fully transparent, mid-tones get partial alpha (smooth edge),
// and bright yellow / white pixels stay fully opaque.

const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "logo.jpg");
const DST = path.join(__dirname, "..", "public", "logo.png");

const LOWER = 28;   // <= treat as background → alpha 0
const UPPER = 70;   // >= treat as foreground → alpha 255

(async () => {
  const img = sharp(SRC).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  if (channels !== 4) throw new Error(`Expected 4 channels, got ${channels}`);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Luminance (Rec. 601)
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    let alpha;
    if (lum <= LOWER) alpha = 0;
    else if (lum >= UPPER) alpha = 255;
    else alpha = Math.round(((lum - LOWER) / (UPPER - LOWER)) * 255);

    data[i + 3] = alpha;
  }

  await sharp(data, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(DST);

  const out = await sharp(DST).metadata();
  console.log(`Wrote ${path.relative(process.cwd(), DST)} — ${out.width}x${out.height}, ${out.channels} channels (alpha: ${out.hasAlpha})`);
})();
