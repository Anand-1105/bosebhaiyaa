const fs = require('fs');
const path = require('path');

const portfolio1Path = 'c:/Users/sures/OneDrive/Desktop/cam App/client/app/portfolio1/page.jsx';
const portfolio2Path = 'c:/Users/sures/OneDrive/Desktop/cam App/client/app/portfolio2/page.jsx';

let p1content = fs.readFileSync(portfolio1Path, 'utf8');

// Array of local client images to use
const images = [
    '/img/gallery/1.jpeg',
    '/img/gallery/2.jpeg',
    '/img/gallery/3.jpeg',
    '/img/gallery/4.jpeg',
    '/img/gallery/5.jpeg',
    '/img/gallery/6.jpeg',
    '/img/gallery/7.jpeg',
    '/img/gallery/8.jpeg',
    '/img/gallery/9.jpeg',
    '/img/gallery/10.jpeg',
    '/img/gallery/11.jpeg',
    '/img/gallery/12.jpeg',
    '/img/gallery/13.jpeg',
    '/img/gallery/14.jpeg',
    '/img/gallery/15.jpeg',
    '/img/gallery/16.jpeg',
    '/img/gallery/17.jpeg',
    '/img/gallery/18.jpeg',
    '/img/gallery/19.jpeg',
    '/img/gallery/20.jpeg',
    '/img/exp1.jpeg',
    '/img/exp2.png',
    '/img/grid-campaign.jpeg'
];

// Replaces unsplash and pravatar URLs with client images sequentially
let imgIndex = 0;
p1content = p1content.replace(/https:\/\/(images\.unsplash\.com|i\.pravatar\.cc)[^"'\s]+/g, (match) => {
    const replacement = images[imgIndex % images.length];
    imgIndex++;
    return replacement;
});

// Update Portfolio 1 to use images and rename component to Portfolio1 if it's Home
p1content = p1content.replace('export default function Home()', 'export default function Portfolio1()');

fs.writeFileSync(portfolio1Path, p1content);
console.log('Portfolio 1 updated with local images.');

// Generate Portfolio 2 with blue theme
let p2content = p1content.replace('export default function Portfolio1()', 'export default function Portfolio2()');

// Theme replacements (Beige to Deep Blue/Navy)
// Background light beige -> dark navy
p2content = p2content.replace(/bg-\[#EAEAE5\]/g, 'bg-[#020617]');
p2content = p2content.replace(/text-\[#EAEAE5\]/g, 'text-slate-100');
p2content = p2content.replace(/border-\[#EAEAE5\]/g, 'border-slate-800');
p2content = p2content.replace(/from-\[#EAEAE5\]/g, 'from-[#020617]');
p2content = p2content.replace(/via-\[#EAEAE5\]/g, 'via-[#0a0f24]');

// Dark #1A1A1A -> deep blue cards
p2content = p2content.replace(/bg-\[#1A1A1A\]/g, 'bg-[#0B1221]');
p2content = p2content.replace(/text-\[#1A1A1A\]/g, 'text-white');
p2content = p2content.replace(/border-\[#1A1A1A\]/g, 'border-blue-900/40');
p2content = p2content.replace(/from-\[#1A1A1A\]/g, 'from-[#0B1221]');
p2content = p2content.replace(/via-\[#1A1A1A\]/g, 'via-[#0B1221]/80');

// Hover effects
p2content = p2content.replace(/hover:bg-\[#1A1A1A\]/g, 'hover:bg-blue-600');
p2content = p2content.replace(/hover:text-\[#1A1A1A\]/g, 'hover:text-blue-400');

// Accents (Buttons and highlights)
p2content = p2content.replace(/bg-\[#4361EE\]/g, 'bg-blue-600');
p2content = p2content.replace(/text-\[#4361EE\]/g, 'text-blue-400');
p2content = p2content.replace(/text-black/g, 'text-blue-100');
p2content = p2content.replace(/bg-black/g, 'bg-blue-950');
p2content = p2content.replace(/border-black/g, 'border-blue-900');
p2content = p2content.replace(/text-gray-700/g, 'text-slate-300');
p2content = p2content.replace(/text-gray-800/g, 'text-slate-200');
p2content = p2content.replace(/text-gray-600/g, 'text-slate-400');

// Fix global background effects and inversions
p2content = p2content.replace(/bg-white/g, 'bg-[#020617]');
p2content = p2content.replace(/invert/g, 'invert-0 opacity-80 brightness-200'); // Fix laurel wreathes turning black

// Specifically target selection colors
p2content = p2content.replace(/selection:bg-\[#1A1A1A\] selection:text-\[#EAEAE5\]/g, 'selection:bg-blue-500/30 selection:text-white');
p2content = p2content.replace(/text-\[#EAEAE5\]\/60/g, 'text-slate-400');
p2content = p2content.replace(/text-\[#EAEAE5\]\/80/g, 'text-slate-300');

fs.writeFileSync(portfolio2Path, p2content);
console.log('Portfolio 2 generated with Blue Theme.');
