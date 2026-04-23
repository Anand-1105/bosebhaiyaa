const fs = require('fs');
const path = require('path');

// ─── Update globals.css ───────────────────────────────────────────────────────
const cssPath = path.join(__dirname, '../app/globals.css');
const newCSS = `@import "tailwindcss";

/* ── RETHINK SYSTEMS DESIGN SYSTEM ── */
:root {
  --background: #060D25;
  --foreground: #E2E8F0;
  --blue-grad: linear-gradient(180deg, #3D5BF1 0%, #4179EA 50%, #84ADFF 100%);
  --card-bg: #0D1635;
  --card-border: rgba(83,99,177,0.25);
  --rethink-navy: #060D25;
  --rethink-card: #0D1635;
  --rethink-card-deep: #0A1228;
  --rethink-blue: #3D5BF1;
  --rethink-blue-mid: #4179EA;
  --rethink-blue-light: #84ADFF;
  --rethink-inactive-tab: #202D61;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  background: var(--background);
  color: var(--foreground);
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.02em;
}

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #060D25; }
::-webkit-scrollbar-thumb { background: #3D5BF1; border-radius: 2px; }

/* ── Keyframe Animations ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; } to { opacity: 1; }
}
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes slideRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(61,91,241,0.3); }
  50%       { box-shadow: 0 0 60px rgba(61,91,241,0.7); }
}
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes modalSlideIn {
  from { opacity: 0; transform: scale(0.94) translateY(20px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes borderDance {
  0%,100% { border-color: rgba(61,91,241,0.4); }
  50%      { border-color: rgba(132,173,255,0.7); }
}
@keyframes cardEntrance {
  from { opacity: 0; transform: translateY(40px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes marqueeReverse {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
@keyframes rethinkGlow {
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1; }
}

/* ── Utility Classes ── */
.animate-fadeUp      { animation: fadeUp 0.7s ease forwards; }
.animate-fadeIn      { animation: fadeIn 0.5s ease forwards; }
.animate-slideLeft   { animation: slideLeft 0.7s ease forwards; }
.animate-slideRight  { animation: slideRight 0.7s ease forwards; }
.animate-float       { animation: floatY 4s ease-in-out infinite; }
.animate-pulseGlow   { animation: pulseGlow 2.5s ease-in-out infinite; }
.animate-modalIn     { animation: modalSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards; }
.animate-borderDance { animation: borderDance 3s ease-in-out infinite; }
.animate-cardEntrance{ animation: cardEntrance 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
.animate-marquee     { animation: marquee 30s linear infinite; }
.animate-marquee-reverse { animation: marqueeReverse 25s linear infinite; }

/* ── Gradient Text ── */
.shimmer-text {
  background: linear-gradient(90deg, #84ADFF, #4179EA, #3D5BF1, #84ADFF);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4s linear infinite;
}

.blue-grad-text {
  background: linear-gradient(135deg, #84ADFF 0%, #4179EA 50%, #3D5BF1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ── Rethink-style Card ── */
.glass-card {
  background: #0D1635;
  border: 1px solid rgba(83,99,177,0.25);
}

/* ── Rethink Card (deep version) ── */
.rethink-card {
  background: #0D1635;
  border: 1px solid rgba(83,99,177,0.2);
  border-radius: 24px;
  transition: all 0.3s ease;
}
.rethink-card:hover {
  border-color: rgba(83,99,177,0.45);
  transform: translateY(-4px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(61,91,241,0.1);
}

/* ── Blue glow ── */
.blue-glow {
  box-shadow: 0 0 40px rgba(61,91,241,0.3);
}

/* ── Rethink gradient button ── */
.rethink-btn {
  background: linear-gradient(180deg, #3D5BF1 0%, #4179EA 60%, #84ADFF 100%);
  color: white;
  font-weight: 700;
  border-radius: 9999px;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(61,91,241,0.35);
}
.rethink-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 0 35px rgba(61,91,241,0.55);
}

/* ── Rethink inactive tab button ── */
.rethink-tab-inactive {
  background: #202D61;
  color: rgba(255,255,255,0.7);
  border: none;
  border-radius: 9999px;
  transition: all 0.3s ease;
}
.rethink-tab-inactive:hover {
  background: #2A3A7A;
  color: white;
}

/* ── Section pill badge ── */
.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: rgba(61,91,241,0.15);
  border: 1px solid rgba(61,91,241,0.3);
  color: #84ADFF;
}

/* ── Rethink Ambient Glow (for section backgrounds) ── */
.rethink-glow-right {
  position: absolute;
  top: 0; right: -100px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(61,91,241,0.12) 0%, transparent 70%);
  pointer-events: none; z-index: 0;
}
.rethink-glow-left {
  position: absolute;
  bottom: 0; left: -100px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(65,121,234,0.1) 0%, transparent 70%);
  pointer-events: none; z-index: 0;
}

/* ── Marquee mask ── */
.mask-marquee {
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

fs.writeFileSync(cssPath, newCSS, 'utf8');
console.log('✅ globals.css updated');

// ─── Transform page.jsx ───────────────────────────────────────────────────────
const pagePath = path.join(__dirname, '../app/page.jsx');
let page = fs.readFileSync(pagePath, 'utf8');

// Backup
fs.writeFileSync(pagePath + '.bak', page, 'utf8');

// ─── 1. Section backgrounds ───────────────────────────────────────────────────
// All dark section backgrounds → Rethink navy
page = page.replace(/style=\{\{ background: '#050E24' \}\}/g, "style={{ background: '#060D25' }}");
page = page.replace(/style=\{\{ background: '#000B21' \}\}/g, "style={{ background: '#060D25' }}");
page = page.replace(/style=\{\{ background: '#000B21', borderTop:[^}]+\}\}/g, "style={{ background: '#060D25', borderTop: '1px solid rgba(83,99,177,0.15)' }}");
page = page.replace(/background: '#050E24'/g, "background: '#060D25'");
page = page.replace(/background: '#000B21'/g, "background: '#060D25'");
page = page.replace(/background: '#030816'/g, "background: '#060D25'");

// Alternating section (slightly different shade)
// The "EAEAE5" light section (testimonials) - keep as-is, it's a light section

// ─── 2. Card / inner backgrounds ─────────────────────────────────────────────
page = page.replace(/background: '#0B1221'/g, "background: '#0D1635'");
page = page.replace(/bg-\[#0B1221\]/g, 'bg-[#0D1635]');
page = page.replace(/\bbg-\[#050E24\]\/60\b/g, 'bg-[#060D25]/60');
page = page.replace(/\bbg-\[#050E24\]\/80\b/g, 'bg-[#060D25]/80');
page = page.replace(/\bbg-\[#050E24\]\/50\b/g, 'bg-[#060D25]/50');
page = page.replace(/\bbg-\[#050E24\]\b/g, 'bg-[#060D25]');
page = page.replace(/\bbg-\[#000B21\]\b/g, 'bg-[#060D25]');
page = page.replace(/from-\[#0B1221\]/g, 'from-[#0D1635]');
page = page.replace(/to-\[#0B1221\]/g, 'to-[#0D1635]');
page = page.replace(/from-\[#050E24\]/g, 'from-[#060D25]');
page = page.replace(/to-\[#050E24\]/g, 'to-[#060D25]');
page = page.replace(/via-\[#0B1221\]/g, 'via-[#0D1635]');

// ─── 3. Transition divs between sections ─────────────────────────────────────
page = page.replace(
  /linear-gradient\(to bottom, #030816, #050E24\)/g,
  'linear-gradient(to bottom, #060D25, #060D25)'
);
page = page.replace(
  /linear-gradient\(to bottom, #050E24, #050E24\)/g,
  'linear-gradient(to bottom, #060D25, #060D25)'
);

// ─── 4. bg-white/5 and bg-white/4 → Rethink card bg on standalone cards ─────
// Replace card backgrounds that are NOT inside gradient strings
// We target the pattern in className strings for section cards
page = page.replace(/\bbg-white\/5\b/g, 'bg-[#0D1635]');
page = page.replace(/\bbg-white\/4\b/g, 'bg-[#0D1635]');

// ─── 5. Border colors → Rethink style ────────────────────────────────────────
page = page.replace(/border border-white\/5\b/g, 'border border-[#5363B1]/20');
page = page.replace(/border border-white\/6\b/g, 'border border-[#5363B1]/20');
page = page.replace(/border border-white\/8\b/g, 'border border-[#5363B1]/25');
page = page.replace(/border border-white\/10\b/g, 'border border-[#5363B1]/25');
page = page.replace(/\bborder-white\/5\b/g, 'border-[#5363B1]/20');
page = page.replace(/\bborder-white\/6\b/g, 'border-[#5363B1]/20');
page = page.replace(/\bborder-white\/8\b/g, 'border-[#5363B1]/25');
page = page.replace(/\bborder-white\/10\b/g, 'border-[#5363B1]/25');
page = page.replace(/\bborder-white\/15\b/g, 'border-[#5363B1]/35');
page = page.replace(/hover:border-white\/20\b/g, 'hover:border-[#5363B1]/50');
page = page.replace(/hover:border-white\/15\b/g, 'hover:border-[#5363B1]/40');
page = page.replace(/hover:border-white\/25\b/g, 'hover:border-[#5363B1]/55');
page = page.replace(/hover:border-white\/30\b/g, 'hover:border-[#5363B1]/60');

// ─── 6. Techfluence tab buttons → Rethink style ──────────────────────────────
page = page.replace(
  /activeEdition === i\s*\n\s*\? 'text-black bg-white scale-105 border-transparent'\s*\n\s*: 'bg-transparent text-white\/50 border-white\/15 hover:border-white\/30 hover:text-white\/80'/g,
  "activeEdition === i\n                    ? 'text-white scale-105 border-transparent shadow-[0_0_20px_rgba(61,91,241,0.4)]'\n                    : 'bg-[#202D61] text-white/70 border-transparent hover:bg-[#2A3A7A] hover:text-white'"
);
// Also handle the style prop for the active tab button
page = page.replace(
  /className=\{`px-5 py-2\.5 rounded-full text-sm font-semibold border transition-all duration-300 \$\{[\s\S]*?activeEdition === i[\s\S]*?\}`\}/g,
  (match) => {
    return match
      .replace("'text-black bg-white scale-105 border-transparent'",
        "'text-white scale-105 border-transparent'")
      .replace("'bg-transparent text-white/50 border-white/15 hover:border-white/30 hover:text-white/80'",
        "'bg-[#202D61] text-white/70 border-transparent hover:bg-[#2A3A7A] hover:text-white'");
  }
);

// ─── 7. Primary CTA buttons (Schedule Meeting / Resume) ── ensure Rethink gradient
page = page.replace(
  /background: 'linear-gradient\(135deg,#3D5BF1,#84ADFF\)',\s*boxShadow: '0 0 24px rgba\(61,91,241,0\.45\)'/g,
  "background: 'linear-gradient(180deg,#3D5BF1,#4179EA,#84ADFF)', boxShadow: '0 0 24px rgba(61,91,241,0.45)'"
);
page = page.replace(
  /background: 'linear-gradient\(135deg,#3D5BF1,#4179EA\)', boxShadow: '0 0 40px rgba\(61,91,241,0\.5\)'/g,
  "background: 'linear-gradient(180deg,#3D5BF1,#4179EA,#84ADFF)', boxShadow: '0 0 30px rgba(61,91,241,0.5)'"
);

// ─── 8. Experience section CTA box ───────────────────────────────────────────
page = page.replace(
  /bg-\[#000B21\] text-white rounded-\[2\.5rem\]/g,
  'bg-[#060D25] text-white rounded-[2.5rem]'
);

// ─── 9. Inline style backgrounds in gradient/radial divs ─────────────────────
page = page.replace(
  /background: 'linear-gradient\(to bottom, #050E24, transparent\)'/g,
  "background: 'linear-gradient(to bottom, #060D25, transparent)'"
);
page = page.replace(
  /background: 'linear-gradient\(to bottom, transparent 30%, #000B21 100%\)'/g,
  "background: 'linear-gradient(to bottom, transparent 30%, #060D25 100%)'"
);
page = page.replace(
  /background: `linear-gradient\(to bottom,transparent,#0B1221\)`/g,
  "background: `linear-gradient(to bottom,transparent,#0D1635)`"
);
page = page.replace(
  /background: `linear-gradient\(to bottom,transparent 40%,#0B1221 100%\)`/g,
  "background: `linear-gradient(to bottom,transparent 40%,#0D1635 100%)`"
);
page = page.replace(
  /bg-gradient-to-b from-\[#0B1221\]/g,
  'bg-gradient-to-b from-[#0D1635]'
);
page = page.replace(
  /from-\[#0B1221\]\/40/g,
  'from-[#0D1635]/40'
);

// ─── 10. Fix testimonials light section – keep #EAEAE5 but update CTA box in it
// (testimonials stays light cream – that's intentional contrast, Rethink also has light sections)

// ─── 11. Startup cards inner bg ──────────────────────────────────────────────
page = page.replace(
  /background: '#0B1221',\s*borderColor: 'rgba\(255,255,255,0\.06\)'/g,
  "background: '#0D1635', borderColor: 'rgba(83,99,177,0.2)'"
);

// ─── 12. Achievements section - update radial glow colors for Rethink ─────────
// Already blue-based, just update bg
page = page.replace(/bg-\[#050E24\]\/60 backdrop-blur-xl/g, 'bg-[#060D25]/60 backdrop-blur-xl');

// ─── 13. Video Section - DO NOT change (hero) ────────────────────────────────
// The video section uses no background color in JSX (it's a <video> tag), so it's safe

// ─── 14. Inline style rgba card overlays ─────────────────────────────────────
page = page.replace(/rgba\(0,11,33,0\.6\)/g, 'rgba(6,13,37,0.6)');
page = page.replace(/rgba\(0,11,33,0\.5\)/g, 'rgba(6,13,37,0.5)');
page = page.replace(/rgba\(0,11,33,0\.8\)/g, 'rgba(6,13,37,0.8)');
page = page.replace(/'rgba\(0,11,33,0\.85\)'/g, "'rgba(6,13,37,0.85)'");
page = page.replace(/rgba\(0,11,33,0\.35\)/g, 'rgba(6,13,37,0.35)');

// ─── 15. Fix small inline styles on inner cards ───────────────────────────────
page = page.replace(
  /style=\{\{ background: 'rgba\(255,255,255,0\.04\)' \}\}/g,
  "style={{ background: '#0D1635' }}"
);
page = page.replace(
  /style=\{\{ background: 'rgba\(255,255,255,0\.08\)' \}\}/g,
  "style={{ background: '#0D1635' }}"
);

// ─── 16. About section specific ──────────────────────────────────────────────
page = page.replace(/style=\{\{ background: '#050E24' \}\}/g, "style={{ background: '#060D25' }}");

// ─── 17. Hover shadow colors ─────────────────────────────────────────────────
page = page.replace(
  /hover:shadow-\[0_20px_50px_rgba\(0,0,0,0\.5\)\]/g,
  'hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
);

// Write output
fs.writeFileSync(pagePath, page, 'utf8');
console.log('✅ page.jsx updated — applying Rethink design system');
console.log('   Lines:', page.split('\n').length);
