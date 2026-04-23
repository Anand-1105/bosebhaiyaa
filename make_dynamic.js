const fs = require('fs');
const pageFile = 'c:/Users/sures/OneDrive/Desktop/cam App/client/app/page.jsx';
let c = fs.readFileSync(pageFile, 'utf8');

const replacements = [
    // HERO
    ['Professor · Builder · Community Leader', '{HERO.badge}'],
    ['Souhardya Bose', '{HERO.name}'],
    ['Souhardya', '{NAV.brand}'],
    ['Bose.', '{NAV.brandSub}'],
    ['Assistant Professor &amp; Head of Student Success at LPU. Founder of Techfluence — 6 editions, 9M+ reach, 30+ global leaders. Building AI-powered futures.', '{HERO.subheadline}'],
    ['Assistant Professor & Head of Student Success at LPU. Founder of Techfluence — 6 editions, 9M+ reach, 30+ global leaders. Building AI-powered futures.', '{HERO.subheadline}'],
    ['1.6K+ students applied', '{HERO.studentCount}'],
    ['Professor. <span style={{ fontWeight: 700 }}>Builder.</span>', '{HERO.tagline} <span style={{ fontWeight: 700 }}>{HERO.taglineHighlight}</span>'],
    ['<span className="blue-grad-text" style={{ fontWeight: 700 }}>Community Leader.</span>', '<span className="blue-grad-text" style={{ fontWeight: 700 }}>{HERO.taglineHighlight}</span>'],
    // CONTACT
    ["Let\\'s Build", "{CONTACT.tagline}"],
    ["Let's Build", "{CONTACT.tagline}"],
    ['<span className="font-bold text-[#84ADFF]">Something.</span>', '<span className="font-bold text-[#84ADFF]">{CONTACT.taglineHighlight}</span>'],
    ['Something.', '{CONTACT.taglineHighlight}'],
    ['Professor · Consultant · Speaker · Technical Partner.', '{CONTACT.subtitle}'],
    ['info.souhardya.bose@gmail.com', '{CONTACT.email}'],
    ['+91 8582988799', '{CONTACT.phone}'],
    ['Punjab, India', '{CONTACT.location}'],
    ['© 2025 Souhardya Bose. All rights reserved.', '{CONTACT.copyright}']
];

for (const [search, replace] of replacements) {
    c = c.split(search).join(replace);
}

// Ensure the first occurence of "Souhardya Bose" logic doesn't break image alt tags
c = c.replace(/alt="\{HERO.name\}"/g, 'alt={HERO.name}');

fs.writeFileSync(pageFile, c);
console.log('Dynamic replacements done.');
