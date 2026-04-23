const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../app/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Normalize to LF
const norm = content.replace(/\r\n/g, '\n');

// ─── Find section boundaries using unique markers ─────────────────────────────
function idx(marker) {
  const i = norm.indexOf(marker);
  if (i === -1) throw new Error('Cannot find: ' + marker.slice(0,80));
  return i;
}

// Each marker is the start of a comment block for that section
const M2  = idx('SECTION 2 — ABOUT');
const M3  = idx('SECTION 3 — EXPERIENCE');
const M4  = idx('SECTION 4 — STARTUPS');
const M5  = idx('SECTION 5 — SPEAKER');
const M6  = idx('SECTION 6 — TECHFLUENCE');
const M7  = idx('SECTION 7 — SKILLS');
const M10 = idx('SECTION 10 — TESTIMONIALS');
const M11 = idx('SECTION 11 — CONTACT');
// end of file (video modal + closing div)
const MEND = norm.length;

// Walk back from each marker to include the `      {/*` prefix
function blockStart(markerIdx) {
  // Go back to find the `{/*` opening of the comment block
  const prefix = '      {/* ═══';
  const sub = norm.slice(0, markerIdx);
  const i = sub.lastIndexOf(prefix);
  return i;
}

const b2  = blockStart(M2);
const b3  = blockStart(M3);
const b4  = blockStart(M4);
const b5  = blockStart(M5);
const b6  = blockStart(M6);
const b7  = blockStart(M7);
const b10 = blockStart(M10);
const b11 = blockStart(M11);

console.log('Block starts:', {b2,b3,b4,b5,b6,b7,b10,b11});

const beforeAll  = norm.slice(0, b2);   // Hero + everything before Section 2
const aboutSec   = norm.slice(b2, b3);  // Section 2 About
const expSec     = norm.slice(b3, b4);  // Section 3 Experience
const startupSec = norm.slice(b4, b5);  // Section 4 Startups
const speakerSec = norm.slice(b5, b6);  // Section 5 Speaker
const techSec    = norm.slice(b6, b7);  // Section 6 Techfluence (incl. transition div after)
const skillsToTestimonials = norm.slice(b7, b10);  // Sections 7,8,9
const testimonialsSec = norm.slice(b10, b11);       // Section 10 Testimonials
const contactAndEnd   = norm.slice(b11);            // Section 11 + video modal + closing

// ─── NEW: Comments section ────────────────────────────────────────────────────
const commentsSec = `
      {/* ═══════════════════════════════
          SECTION 10b — SOCIAL COMMENTS (Masonry Grid)
      ═══════════════════════════════ */}
      <section className="w-full py-28 px-6 md:px-10 relative overflow-hidden" style={{ background: '#000B21' }}>
        <div
          className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6 text-[10px] font-bold tracking-widest text-white/60 uppercase mx-auto">
              <MessageSquare size={12} className="text-white/60" /> Real Feedback
            </div>
            <h2 className="text-4xl md:text-5xl text-white mb-3" style={{ fontWeight: 300 }}>
              What People <span style={{ fontWeight: 700 }}>Are Saying</span>
            </h2>
            <p className="text-white/40 font-medium max-w-lg mx-auto">
              Genuine comments from professionals, students, and community members across programs.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {(showAllComments ? SOCIAL_COMMENTS : SOCIAL_COMMENTS.slice(0, 6)).map((c, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-[1.6rem] border border-white/10 p-6 hover:-translate-y-1 hover:border-white/25 transition-all duration-300 group"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: c.tagColor + '22', color: c.tagColor, border: \`1px solid \${c.tagColor}40\` }}
                  >
                    {c.tag}
                  </span>
                  <div className="flex items-center gap-0.5 ml-auto">
                    {[...Array(5)].map((_, k) => <Star key={k} size={9} className="fill-white/30 text-white/30" />)}
                  </div>
                </div>
                <p className="text-white/65 text-[13.5px] leading-relaxed mb-4 italic">&ldquo;{c.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={c.img} alt={c.name} className="w-8 h-8 rounded-full object-cover border border-white/15 shrink-0" />
                  <div>
                    <div className="text-white text-xs font-bold">{c.name}</div>
                    <div className="text-white/35 text-[10px]">{c.role}</div>
                  </div>
                  <Linkedin size={12} className="text-white/25 ml-auto group-hover:text-[#0A66C2] transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {SOCIAL_COMMENTS.length > 6 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAllComments(!showAllComments)}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/15 bg-white/5 text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white hover:border-white/30 transition-all hover:-translate-y-0.5"
              >
                {showAllComments ? 'Show Less' : \`Show All \${SOCIAL_COMMENTS.length} Comments\`}
                <ChevronDown size={16} className={\`transition-transform \${showAllComments ? 'rotate-180' : ''}\`} />
              </button>
            </div>
          )}
        </div>
      </section>

`;

// ─── NEW: Podcasts section ────────────────────────────────────────────────────
const podcastsSec = `
      {/* ═══════════════════════════════
          SECTION 11b — PODCASTS
      ═══════════════════════════════ */}
      <section className="w-full py-24 px-6 md:px-10" style={{ background: '#050E24' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
                <Mic size={12} className="text-white/60" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Podcast & Talks</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                Listen & <span className="text-white/60">Learn</span>
              </h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">
              Deep-dive conversations on AI, education, product thinking, and building communities that scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PODCASTS.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[2rem] overflow-hidden border border-white/8 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050E24] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold text-white/80 uppercase tracking-widest">
                    {p.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-white/15 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg">
                      <Play size={22} className="text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t, j) => (
                      <span key={j} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-white/50" style={{ background: 'rgba(255,255,255,0.06)' }}>{t}</span>
                    ))}
                  </div>
                  <h3 className="text-[17px] font-black text-white mb-2 leading-tight group-hover:text-white/90 transition-colors">{p.title}</h3>
                  <p className="text-white/40 text-[13px] leading-relaxed flex-1">{p.desc}</p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/8">
                    <span className="text-white/30 text-[11px] font-medium">{p.date}</span>
                    <div className="flex items-center gap-1.5 text-white/50 text-[12px] font-semibold group-hover:text-white transition-colors">
                      <Play size={12} className="fill-current" /> Listen now
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

`;

// ─── Assemble in new order ────────────────────────────────────────────────────
// NEW ORDER: Hero → Techfluence → Startups → About → Experience → Speaker →
//            Skills/Achievements → Testimonials → Comments → Podcasts → Contact
const newContent = beforeAll
  + techSec
  + startupSec
  + aboutSec
  + expSec
  + speakerSec
  + skillsToTestimonials
  + testimonialsSec
  + commentsSec
  + podcastsSec
  + contactAndEnd;

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Done! New file length:', newContent.length, 'chars,', newContent.split('\n').length, 'lines');
