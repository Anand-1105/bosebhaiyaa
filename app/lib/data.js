/**
 * ==============================================================================
 * 🚀 SOUHARDYA BOSE — PORTFOLIO CONTENT & DATA CENTER 🚀
 * ==============================================================================
 * HELLO! If you are reading this, you are in the perfect place to update your website.
 * You DO NOT need to be a developer to edit this file.
 *
 * HOW TO EDIT THIS FILE SAFELY:
 * 1. Only change the text inside the quotes 'like this' or "like this".
 * 2. DO NOT delete the quotes (' ') or the commas (,) at the end of lines.
 * 3. To change an image, simply upload your image to the "public/img/gallery" folder
 *    and update the path here from '/img/gallery/1.jpeg' to your new file name.
 * 4. To add a new item to any list, copy an existing block inside the curly brackets
 *    { ... } and paste it below, making sure to separate them with a comma (,).
 * 5. URLs or Links should start with https:// (e.g., 'https://linkedin.com/in/you')
 *
 * After saving this file, the page will hot-reload in development mode!
 * Push to GitHub/Vercel and your live site will update automatically.
 * ==============================================================================
 */

// ── 1. HERO SECTION (The very top of your homepage) ──────────────────────────
export const HERO = {
  badge: 'Professor · Builder · Lead',           // The small pill text at the top
  name: 'Souhardya Bose',                          // Your full name
  tagline: 'Professor. Builder.',                  // First part of large title
  taglineHighlight: 'Lead',                     // Colored part of large title
  subheadline: 'I turn classrooms into launchpads and ideas into movements. Head of Student Success at LPU. Founder of Techfluence — 6 editions, 9M+ reach, 30+ global leaders shaping tomorrow\'s tech landscape.',

  videoSrc: '/homepage.mp4',                       // Background video file
  studentCount: '15k+ students mentored',          // Text next to the small avatars
  profileImg: '/img/gallery/7.jpeg',               // Your portrait image

  // The small circulating profile pictures shown in the hero section
  avatarImages: [
    '/img/gallery/10.jpeg',
    '/img/gallery/2.jpeg',
    '/img/gallery/3.jpeg',
    '/img/gallery/4.jpeg',
  ],

  // The floating stats boxes over the video (platform: 'youtube' | 'linkedin')
  socialStats: [
    { label: 'Program Director', value: 'Souhardya Bose', platform: 'profile', color: '#84ADFF', img: '/img/gallery/6.jpeg' },
  ],
};

// ── 2. BIG STATS (Shown site-wide in the About section) ─────────────────────
export const STATS = [
  { value: '6', label: 'Patents Filed' },
  { value: '2', label: 'Research Papers' },
  { value: '20K+', label: 'Students Impacted' },
  { value: '9M+', label: 'Content Reach' },
];

// ── 3. ANIMATED ROLES (The changing text in the header) ─────────────────────
export const ROLES = [
  'Professor @ LPU',
  'Product & Community Leader',
  'Full-Stack Developer',
  'AI Evangelist',
];

// ── 4. NAVIGATION BAR (Top menu links) ──────────────────────────────────────
export const NAV = {
  brand: 'Souhardya',                    // First half of your logo name
  brandSub: ' Bose.',                     // Second half (italic)
  links: [                               // The menu links
    { label: 'Startups', href: '/startups' },
    { label: 'Experience', href: '/experience' },
    { label: 'Professional Praise', href: '/recommendations' },
    { label: 'Student Feedback', href: '/testimonials' },
    { label: 'Patents', href: '/patents' },
    { label: 'Research Papers', href: '/research' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Podcasts', href: '/podcasts' },
    { label: 'Hire Me', href: '/hire' },
  ],
  resumeHref: 'https://drive.google.com/file/d/1rNVCTDXIRvFbnHwyfdmMISTOWQXS--xE/view',             // Link to your resume file
  ctaLabel: 'Schedule a Meeting',        // Text for the booking button
};

// ── 5. MARQUEE STRIP (The scrolling recognitions text at the bottom of the hero) ─
export const MARQUEE_ITEMS = [
  '🎓 LPU — Lovely Professional University',
  '🧪 Google Nebular Contributor',
  '🏆 Y Combinator Top 10%',
  '🏛️ UGC — Govt. of India',
  '📡 9M+ Community Reach',
  '📋 6 Patents Filed',
  '🌐 NASSCOM Community',
  '🎓 LPU — Lovely Professional University',
  '🧪 Google Nebular Contributor',
  '🏆 Y Combinator Top 10%',
  '🏛️ UGC — Govt. of India',
  '📡 9M+ Community Reach',
  '📋 6 Patents Filed',
  '🌐 NASSCOM Community',
];

// ── 6. ABOUT SECTION ─────────────────────────────────────────────────────────

// The 4 images in the left-side photo stack of the About section
export const ABOUT_IMAGES = {
  portrait: '/img/gallery/9.jpeg',     // The tall portrait image
  square1: '/img/gallery/10.jpeg',    // First square image
  square2: '/img/gallery/16.jpeg',    // Second square image
  wide: '/img/gallery/11.jpeg',    // Wide landscape image at the bottom
};

// The 6 bullet points in the About bio column
// icon: use one of: 'graduation', 'brain', 'building', 'rocket', 'globe', 'sparkles', 'mic', 'star'
export const ABOUT_HIGHLIGHTS = [
  { icon: 'graduation', text: 'M.Tech CS & B.Tech CS — LPU', color: '#4361EE' },
  { icon: 'building', text: 'Co-built TeachGenie — AI teaching platform at LPU', color: '#7C3AED' },
  { icon: 'building', text: 'NEP Sarthi Reform Officer, UGC — Govt. of India', color: '#10B981' },
  { icon: 'rocket', text: 'Mentro — 50K+ downloads, Y Combinator Top 10%', color: '#F59E0B' },
  { icon: 'globe', text: 'Techfluence — 6 editions, 9M+ reach, 30+ leaders', color: '#4361EE' },
  { icon: 'sparkles', text: 'Google Nebular Contributor · 6 Patents Filed', color: '#7C3AED' },
];

// The identity pills shown in the About section (right column)
export const ABOUT_ROLES = [
  '🎤 Speaker',
  '🧑‍🏫 Teacher',
  '📲 Influencer',
  '🚀 Founder',
  '🏛️ Policy Advisor',
  '💡 Innovator',
];

// The education block in the About section (right column)
export const ABOUT_EDUCATION = [
  { degree: 'M.Tech — CSE', school: 'LPU · 2023–25', icon: 'graduation', color: '#4361EE' },
  { degree: 'B.Tech — CSE', school: 'LPU · 2019–23', icon: 'book', color: '#7C3AED' },
];

// The quick fact badge in the bottom of the left photo column
export const ABOUT_QUICK_FACT = {
  label: '50+ Keynote Talks',
  sublabel: 'National & International stages',
};

// ── 7. WORK EXPERIENCE TIMELINE ─────────────────────────────────────────────
export const EXPERIENCE = [
  {
    period: 'Jul 2025 – Present',
    role: 'Asst. Professor & SCC Head',
    org: 'Lovely Professional University',
    color: '#4361EE',
    img: '/img/gallery/14.jpeg',
    bullets: [
      'Led student success for 20,000+ CSE students',
      'Managed 150+ core members & 20+ clubs',
      'Organized 50+ tech events & onboarded 30+ CXOs',
      'Co-built AI platform: TeachGenie',
    ],
  },
  {
    period: 'Apr 2025 – Jun 2025',
    role: 'Product & Innovation Associate Intern',
    org: 'LPU – Corporate Engagement & Growth',
    color: '#34A853',
    img: '/img/gallery/15.jpeg',
    bullets: [
      'Founded Techfluence (6 editions) & Finfluence',
      'Achieved 9M+ reach with 30+ global leaders',
      'Led 250+ students & 30+ staff',
      'Built event + influencer tech platform',
    ],
  },
  {
    period: 'Sep 2023 – Jun 2025',
    role: 'NEP Sarthi Education Reform Officer',
    org: 'UGC, Govt. of India (Volunteer)',
    color: '#FBBC05',
    img: '/img/gallery/17.jpeg',
    bullets: [
      'Worked with UGC Chairman on national policy',
      'Built research frameworks for academia-industry gaps',
    ],
  },
  {
    period: 'Oct 2022 – Apr 2023',
    role: 'Full Stack Developer Intern & Community Lead',
    org: 'Indian Cyber Security Solutions',
    color: '#F25022',
    img: '/img/gallery/11.jpeg',
    bullets: [
      'Built SAVE-AI — AI vulnerability assessment tool',
      'Designed backend architecture & tested scalable APIs',
    ],
  },
  {
    period: 'Feb 2021 – Mar 2023',
    role: 'Lead Product & Strategy (Volunteer)',
    org: 'Mentro — Y Combinator Top 10%',
    color: '#EA4335',
    img: '/img/gallery/13.jpeg',
    bullets: [
      'Scaled platform to 50,000+ downloads',
      'Enabled 5,000+ mentorship sessions',
      'Led product strategy & UX improvements',
    ],
  },
];

// ── 8. TECHFLUENCE EDITIONS ──────────────────────────────────────────────────
export const TECHFLUENCE = [
  {
    edition: 1,
    date: 'Feb 2023',
    title: 'Techfluence 1.0 — The Ignition',
    desc: 'The founding edition that kickstarted a tech community at LPU. Focused on emerging tech trends and student entrepreneurship.',
    guests: [
      {
        name: 'Mohammad F',
        desc: 'Founder @LearnYard | Ex-Google | 500K+ YouTube learners | TEDx Speaker',
        linkedin: 'https://www.linkedin.com/in/mohammadfraz/',
        posts: [],
        tag: 'Founder @LearnYard | Ex-Google | TEDx Speaker',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s1/guests/guest1.jpg'
      },
      {
        name: 'Abhishek Kumar',
        desc: 'Senior Engineering Leader | Ex-Google | $1B+ Revenue Impact | Stanford GSB | ISB',
        linkedin: 'https://www.linkedin.com/in/abhishek0647/',
        posts: [],
        tag: 'Senior Engineering Leader | Ex-Google',
        sirComment: '',
        importantInfo: [],
        img: '/img/techfluence/s1/guests/guest2.jpg'
      },
      {
        name: 'Shashank Mishra',
        desc: 'Staff Data Engineer @ Prophecy | Building GrowDataSkills | YouTuber (184k+)',
        linkedin: 'https://www.linkedin.com/in/shashank219/',
        posts: [],
        tag: 'Staff Data Engineer @ Prophecy',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s1/guests/guest3.jpg'
      },
      {
        name: 'Rocky Bhatia',
        desc: 'Architect @ Adobe | GenAI & Systems at Scale',
        linkedin: 'https://www.linkedin.com/in/rocky-bhatia-a4801010/',
        posts: ["https://www.linkedin.com/posts/rocky-bhatia-a4801010_%3F%3F%3F%3F-%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F-%3F%3F-%3F%3F-activity-7158806709040279552-_KnH?utm_source=share&utm_medium=member_desktop",
          "https://www.instagram.com/reel/C2z6c-ith4y/?utm_source=ig_web_copy_link",
          "https://www.instagram.com/reel/C2llgYvikM5/?utm_source=ig_web_copy_link"
        ],
        tag: 'Architect @ Adobe | GenAI',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s1/guests/guest4.jpg'
      }
    ],
    reach: '2,000+',
    attendees: '500+',
    img: '',
    comments: '500+',
    commentsList: [
      { text: 'Best event at LPU! ', linkedin: 'https://linkedin.com/' },
      { text: 'Networking alone was worth it.', linkedin: 'https://linkedin.com/' },
    ],
    gallery: [
      '/img/techfluence/s1/guests/guest1.jpg',
      '/img/techfluence/s1/guests/guest2.jpg',
      '/img/techfluence/s1/guests/guest3.jpg',
      '/img/techfluence/s1/guests/guest4.jpg'
    ]
  },
  {
    edition: 2, date: 'Jun 2023', title: 'Techfluence 2.0 — The Builder',
    desc: 'Focused on hands-on product building. Students shipped real MVPs during 24-hour hackathon sessions.',
    guests: [
      { name: 'Vivek Sridhar', desc: 'CTO - Microsoft for Startups | AI Advisor | Investor | Founder', linkedin: 'https://www.linkedin.com/in/vivsridh/', tag: 'CTO - Microsoft for Startups', sirComment: '', importantInfo: ['Conducted live PRD workshops', ''], img: '/img/techfluence/s2/guests/guest1.jpg' },
    ],
    reach: '1.5M+', attendees: '800+',
    img: '/img/carousel/2.jpeg',
    comments: '500+',
    commentsList: [
      { text: 'Best event at LPU! 🔥', linkedin: 'https://linkedin.com/' },
      { text: 'Networking alone was worth it.', linkedin: 'https://linkedin.com/' },
    ],
    gallery: [
      '/img/techfluence/s2/guests/guest1.jpg'
    ]
  },
  {
    edition: 3,
    date: 'Feb 2023',
    title: 'Techfluence 3.0 — The Ignition',
    desc: 'The founding edition that kickstarted a tech community at LPU. Focused on emerging tech trends and student entrepreneurship.',
    guests: [
      {
        name: 'Saumya Singh',
        desc: 'International Open Source Awardee | Educator | Google Connect Winner | 3x TEDx Speaker',
        linkedin: 'https://www.linkedin.com/in/saumya1singh/',
        posts: ["https://www.linkedin.com/posts/saumya1singh_didnt-expect-so-much-love-from-students-activity-7239897223923163136-I9Cd/?utm_source=share&utm_medium=member_ios",
          "https://www.linkedin.com/posts/saumya1singh_opportunity-hackathon-activity-7240930078073741314-Wnfm/?utm_source=share&utm_medium=member_ios",
          "https://www.instagram.com/reel/C_yEC5FKzH-/"
        ],
        tag: 'International Open Source Awardee',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s3/guests/guest1.jpg'
      },
      {
        name: 'Sandeep Jain',
        desc: 'Founder - GeeksforGeeks',
        linkedin: 'https://www.linkedin.com/in/sandeep-jain-/',
        posts: [],
        tag: 'Founder - GeeksforGeeks',
        sirComment: '',
        importantInfo: [],
        img: '/img/techfluence/s3/guests/guest2.jpg'
      },
      {
        name: 'Darika Jain',
        desc: 'Founder, ImpactD | Josh Talks Speaker | 2x WEF Awardee | Ex-American Express',
        linkedin: 'https://www.linkedin.com/in/darikajain/',
        posts: ["https://www.linkedin.com/posts/darikajain_maam-my-feet-tremble-when-i-have-to-speak-activity-7241288089522860032-3xNV/?utm_source=share&utm_medium=member_ios",
          "https://www.instagram.com/reel/C_n7xXwJomc/"
        ],
        tag: 'Founder, ImpactD | 2x WEF Awardee',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s3/guests/guest3.jpg'
      },
      {
        name: 'Hina Arora',
        desc: 'Founder @BrandBuilders | AI-powered LinkedIn Growth for Tech & AI leaders',
        linkedin: 'https://www.linkedin.com/in/careerwithhina/',
        posts: ["https://www.linkedin.com/posts/hinaaroraa_techfluence-guestspeaker-professionalgrowth-activity-7240216114004119552-Ztd_/?utm_source=share&utm_medium=member_ios",
          "https://www.instagram.com/p/C_hnnOSPkC_/?img_index=1",
          "https://www.instagram.com/p/C_-ixTMTIkX/"
        ],
        tag: 'Founder @BrandBuilders',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s3/guests/guest4.jpg'
      },
      {
        name: 'Dr. Deeksha Sharma',
        desc: 'Academic & Research Leader',
        linkedin: '',
        posts: ["https://www.linkedin.com/posts/deeksha26_it-was-a-surreal-experience-to-be-the-panel-activity-7237895245139435521-auWm?utm_source=share&utm_medium=member_ios",
          "https://www.linkedin.com/posts/deeksha26_i-had-an-amazing-conversation-on-a-podcast-activity-7239156824791216128-Rp1W/?utm_source=share&utm_medium=member_ios",
          "https://www.linkedin.com/posts/deeksha26_it-was-a-great-experience-to-meet-and-mentor-activity-7238848484584398848-8ona?utm_source=share&utm_medium=member_ios",
          "https://www.instagram.com/p/C_cZ6cTPkt4/?img_index=1",
          "https://www.instagram.com/p/C_iOzPtPuO4hnrx_c971ydUmzAXegWvJQgiB_g0/"
        ],
        tag: 'Academic & Research Leader',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s3/guests/guest5.jpg'
      },
      {
        name: 'Karan MV',
        desc: 'Director, International Developer Relations at GitHub',
        linkedin: 'https://www.linkedin.com/in/mvkaran/',
        posts: [],
        tag: 'Director, Developer Relations @ GitHub',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s3/guests/guest6.jpg'
      }
    ],
    reach: '2,000+',
    attendees: '500+',
    img: '',
    comments: '500+',
    commentsList: [
      { text: 'Best event at LPU! 🔥', linkedin: 'https://linkedin.com/' },
      { text: 'Networking alone was worth it.', linkedin: 'https://linkedin.com/' },
    ],
    gallery: [
      '/img/techfluence/s3/guests/guest1.jpg',
      '/img/techfluence/s3/guests/guest2.jpg',
      '/img/techfluence/s3/guests/guest3.jpg',
      '/img/techfluence/s3/guests/guest4.jpg',
      '/img/techfluence/s3/guests/guest5.jpg',
      '/img/techfluence/s3/guests/guest6.jpg'
    ]
  },
  {
    edition: 4, date: 'Apr 2024', title: 'Techfluence 4.0 — The Scale',
    desc: 'First edition to cross national boundaries. Speakers from 5 countries.',
    guests: [
      {
        name: 'Rajya Vardhan',
        desc: 'Engineering Leader @ Google | Mentored 300+ Software Engineers | Building high-performance teams | Tech Speaker | Led $1B+ programs | Cornell University | Lifelong learner driven by optimism & growth mindset',
        linkedin: 'https://www.linkedin.com/in/rajya-vardhan/',
        posts: [],
        tag: 'Engineering Leader @ Google | Mentored 300+ Software Engineers | Building high-performance teams | Tech Speaker | Led $1B+ programs | Cornell University | Lifelong learner driven by optimism & growth mindset',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s4/guests/guest1.jpg'
      }, {
        name: 'Rocky Bhatia',
        desc: '400K+ Engineers | Architect @ Adobe | GenAI & Systems at Scale',
        linkedin: 'https://www.linkedin.com/in/rocky-bhatia-a4801010/',
        posts: [],
        tag: '400K+ Engineers | Architect @ Adobe | GenAI & Systems at Scale',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s4/guests/guest2.jpg'
      }, {
        name: 'Ajay Suneja',
        desc: 'React Developer | MERN Stack | Javascript | DSA | Front-End Engineer @Adidas | Ex-Coforge | Tech Speaker GDSC’23, Postman’23 | Building Codecompile.ai  | YouTuber @Technical Suneja (600K+)',
        linkedin: 'https://www.linkedin.com/in/ajaysuneja/',
        posts: [],
        tag: 'React Developer | MERN Stack | Javascript | DSA | Front-End Engineer @Adidas | Ex-Coforge | Tech Speaker GDSC’23, Postman’23 | Building Codecompile.ai  | YouTuber @Technical Suneja (600K+)',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s4/guests/guest3.jpg'
      },
      {
        name: 'Parikh Jain',
        desc: 'Founder @ ProPeers | Ex-Amazon | Ex-Founding Member at Coding Ninjas | Youtuber(80k+) | DTU',
        linkedin: 'https://www.linkedin.com/in/parikh-jain-79568798/',
        posts: [],
        tag: 'Founder @ ProPeers | Ex-Amazon | Ex-Founding Member at Coding Ninjas | Youtuber(80k+) | DTU',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s4/guests/guest4.jpg'
      }, {
        name: 'Shivangi Narula',
        desc: 'Director, International Developer Relations at GitHub',
        linkedin: 'https://www.linkedin.com/in',
        posts: [],
        tag: 'Director, Developer Relations @ GitHub',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s4/guests/guest5.jpg'
      }, {
        name: 'Shivani Gera',
        desc: 'Director, International Developer Relations at GitHub',
        linkedin: 'https://www.linkedin.com/in',
        posts: [],
        tag: 'Director, Developer Relations @ GitHub',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s4/guests/guest6.jpg'
      }
    ],
    reach: '5M+', attendees: '2,000+',
    img: '',
    comments: '500+',
    commentsList: [
      { text: 'Best event at LPU! 🔥', linkedin: 'https://linkedin.com/' },
      { text: 'Networking alone was worth it.', linkedin: 'https://linkedin.com/' },
    ],
    gallery: [
      '/img/gallery/15.jpeg',
      '/img/gallery/16.jpeg',
      '/img/gallery/17.jpeg'
    ]
  },
  {
    edition: 5,
    date: 'Feb 2023',
    title: 'Techfluence 5.0 — The Ignition',
    desc: 'The founding edition that kickstarted a tech community at LPU. Focused on emerging tech trends and student entrepreneurship.',
    guests: [
      {
        name: 'Archy Gupta',
        desc: 'SWE III at Google | Tech, AI & Career creator | 800K+ Followers',
        linkedin: 'https://www.linkedin.com/in/archy-gupta-myprofile/',
        posts: [
          { url: 'https://www.linkedin.com/posts/mahimahans_linkedin-connections-network-ugcPost-7429549479344730113-1mmN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF2cJWABigt2yrsdbOmP1V1cymRIAGo1WRo', platform: 'linkedin', label: 'LinkedIn Post' }
        ],
        tag: 'SWE III at Google',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s5/guests/guest1.JPG'
      },
      {
        name: 'Hina Arora',
        desc: 'Founder @BrandBuilders | AI-powered LinkedIn Growth for Tech & AI leaders | Worked with 35+ tech execs (EMs, VPs, CTOs) | Tech / AI ',
        linkedin: 'https://www.linkedin.com/in/careerwithhina/',
        posts: [],
        tag: 'SWE III at Google',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s5/guests/guest2.JPG'
      }, {
        name: 'Hemant Pandey',
        tag: 'senior software engineer at linkedin',
        desc: 'Helping Software Engineers 2X their compensation | Tech Lead | Ex - Meta, Salesforce, Tesla | Featured on Business Insider and Times Square',
        linkedin: 'https://www.linkedin.com/in/hemant-pandey/',
        posts: [

        ],
        tag: '',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s5/guests/guest3.JPG'
      },
      {
        name: 'Omkar S.',
        desc: 'Thought Leader at Autodesk | AI/ML | Platform Engineering | Ex-Microsoft | LinkedIn Top Voice- AI, Leadership, System Design | IIM-I | Lean 6 Sigma, SLII & SAFe Agile Certified | Featured@ Times Square | Mentor | Speaker',
        linkedin: 'https://www.linkedin.com/in/omsrivastava/',
        posts: [],
        tag: 'Thought Leader at Autodesk | AI/ML | Platform Engineering | Ex-Microsoft | LinkedIn Top Voice- AI, Leadership, System Design | IIM-I | Lean 6 Sigma, SLII & SAFe Agile Certified | Featured@ Times Square | Mentor | Speaker',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s5/guests/guest4.JPG'
      }

    ],
    reach: '2,000+',
    attendees: '500+',
    img: '',
    comments: '500+',
    commentsList: [
      { text: 'Best event at LPU! 🔥', linkedin: 'https://linkedin.com/' },
      { text: 'Networking alone was worth it.', linkedin: 'https://linkedin.com/' },
    ],
    gallery: [
      '/img/techfluence/s5/guests/guest1.JPG',
      '/img/techfluence/s6/guests/guest2.JPG',
      '/img/techfluence/s6/guests/guest3.JPG',
      '/img/techfluence/s6/guests/guest4.jpeg',
      '/img/techfluence/s6/guests/guest5.jpeg',
      '/img/techfluence/s6/guests/guest6.JPG'
    ]
  },
  {
    edition: 6,
    date: 'Feb 2023',
    title: 'Techfluence 6.0 — The Ignition',
    desc: 'The founding edition that kickstarted a tech community at LPU. Focused on emerging tech trends and student entrepreneurship.',
    guests: [
      {
        name: 'Mahima Hans',
        desc: 'Software Engineer at Salesforce | Ex-Microsoft',
        linkedin: 'https://www.linkedin.com/in/mahimahans/',
        posts: [
          { url: 'https://www.linkedin.com/posts/mahimahans_linkedin-connections-network-ugcPost-7429549479344730113-1mmN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF2cJWABigt2yrsdbOmP1V1cymRIAGo1WRo', platform: 'linkedin', label: 'LinkedIn Post' }
        ],
        tag: 'Software Engineer @ Salesforce | Ex-Microsoft',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s6/guests/guest1.JPG'
      },
      {
        name: 'Vanshika Pandey',
        desc: 'SDE 2 @JPMC',
        linkedin: 'https://www.linkedin.com/in/vanshikapandeyy/',
        posts: [
          { url: 'https://www.linkedin.com/posts/vanshikapandeyy_lpu-jalandhar-recently-i-was-invited-ugcPost-7425148704451354624-d6R3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXP1LABGy-A4sbzl2T3n9jQsmo7hIIDKEM', platform: 'linkedin', label: 'LinkedIn Post' }
        ],
        tag: 'SDE 2 @JPMC',
        sirComment: '',
        importantInfo: [],
        img: '/img/techfluence/s6/guests/guest2.JPG'
      },
      {
        name: 'Abhishek Kumar',
        desc: 'Senior Engineering Manager @ Walmart',
        linkedin: 'https://www.linkedin.com/in/abhishek0647/',
        posts: [],
        tag: 'Senior Engineering Manager @ Walmart',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s6/guests/guest3.JPG'
      },
      {
        name: 'Prashanth Kumar',
        desc: 'Head of Commercial Digital India @ Volvo Cars',
        linkedin: 'https://www.linkedin.com/in/prashanth-kumar-3ab702a/',
        posts: [
          { url: 'https://www.linkedin.com/posts/prashanth-kumar-3ab702a_techfluence-ai-engineeringleadership-activity-7428302752696442880-TD8Y?utm_source=share&utm_medium=member_desktop', platform: 'linkedin', label: 'LinkedIn Post' }
        ],
        tag: 'Head of Commercial Digital India @ Volvo',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s6/guests/guest4.jpeg'
      },
      {
        name: 'Radhakrishnan Ramasamy',
        desc: 'Senior Engineering Manager @ Walmart',
        linkedin: '',
        posts: [
          { url: 'https://www.linkedin.com/posts/prashanth-kumar-3ab702a_techfluence-ai-engineeringleadership-activity-7428302752696442880-TD8Y?utm_source=share&utm_medium=member_desktop', platform: 'linkedin', label: 'LinkedIn Post' }
        ],
        tag: 'Senior Engineering Manager @ Walmart',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s6/guests/guest5.jpeg'
      },
      {
        name: 'Nancy Solanki',
        desc: 'Software Engineer @Microsoft',
        linkedin: 'https://www.linkedin.com/in/nancysolanki/',
        posts: [
          { url: 'https://www.linkedin.com/posts/prashanth-kumar-3ab702a_techfluence-ai-engineeringleadership-activity-7428302752696442880-TD8Y?utm_source=share&utm_medium=member_desktop', platform: 'linkedin', label: 'LinkedIn Post' }
        ],
        tag: 'Software Engineer @Microsoft',
        sirComment: "",
        importantInfo: [],
        img: '/img/techfluence/s6/guests/guest6.JPG'
      }
    ],
    reach: '2,000+',
    attendees: '500+',
    img: '',
    comments: '500+',
    commentsList: [
      { text: 'Best event at LPU! 🔥', linkedin: 'https://linkedin.com/' },
      { text: 'Networking alone was worth it.', linkedin: 'https://linkedin.com/' },
    ],
    gallery: [
      '/img/techfluence/s6/guests/guest1.JPG',
      '/img/techfluence/s6/guests/guest2.JPG',
      '/img/techfluence/s6/guests/guest3.JPG',
      '/img/techfluence/s6/guests/guest4.jpeg',
      '/img/techfluence/s6/guests/guest5.jpeg',
      '/img/techfluence/s6/guests/guest6.JPG'
    ]
  },
];

// ── 8b. PEOPLE (Guest Speakers Grid) ─────────────────────────────────────────
// Same format as Techfluence guests. Add/remove/edit here anytime.
export const PEOPLE = [
  // ── FAANG & SENIOR ENGINEERS ────────────────────────
  {
    name: 'Rajya Vardhan Mishra',
    role: 'Engineering Leader @ Google',
    desc: 'Engineering Leader @ Google | Mentored 300+ Software Engineers | Led $1B+ programs | Cornell University alumnus.',
    prev: 'Amazon Engineering',
    tags: ['Google', 'Engineering Leader', 'Cornell', '$1B+ Programs'],
    li: 'https://www.linkedin.com/in/rajya-vardhan/',
    img: '/img/gallery/rajya_v2.jpg',
    posts: [
      'https://www.linkedin.com/posts/rajya-vardhan_from-quitting-amazon-to-becoming-a-founding-activity-7309098151896879104-LJ7V',
    ],
  },
  {
    name: 'Archy Gupta',
    role: 'SWE III at Google',
    desc: 'SWE III at Google | Tech, AI & Career creator | 800K+ Followers. Inspiring students to break into top tech companies.',
    prev: 'Student → Google',
    tags: ['Google', 'Content Creator', '800K+ Followers', 'Career'],
    li: 'https://www.linkedin.com/in/archy-gupta-myprofile/',
    img: '/img/techfluence/s5/guests/guest1.JPG',
    posts: [],
  },
  {
    name: 'Mohammad F',
    role: 'Founder @LearnYard | Ex-Google',
    desc: 'Founder @LearnYard | Ex-Google | 500K+ YouTube learners | TEDx Speaker. A visionary educator shaping the next generation of tech talent.',
    prev: 'Google Engineer',
    tags: ['EdTech', 'YouTube Creator', 'TEDx Speaker', 'Ex-Google'],
    li: 'https://www.linkedin.com/in/mohammadfraz/',
    img: '/img/techfluence/s1/guests/guest1.jpg',
    posts: [],
  },
  {
    name: 'Abhishek Kumar',
    role: 'Senior Engineering Leader | Ex-Google',
    desc: 'Senior Engineering Leader driving $1B+ revenue impact. Stanford GSB & ISB alumnus building high-performance product teams globally.',
    prev: 'Google Engineering',
    tags: ['Engineering Leader', 'Ex-Google', 'Stanford GSB', '$1B+ Impact'],
    li: 'https://www.linkedin.com/in/abhishek0647/',
    img: '/img/techfluence/s1/guests/guest2.jpg',
    posts: [],
  },
  {
    name: 'Hemant Pandey',
    role: 'Tech Lead | Ex-Meta, Salesforce, Tesla',
    desc: 'Helping Software Engineers 2X their compensation. Featured on Business Insider & Times Square. Ex-Meta, Salesforce, Tesla.',
    prev: 'Meta / Salesforce / Tesla',
    tags: ['Tech Lead', 'Ex-Meta', 'Ex-Tesla', 'Career Growth'],
    li: 'https://www.linkedin.com/in/hemant-pandey/',
    img: '/img/gallery/hemant_v2.jpg',
    posts: [],
  },
  {
    name: 'Mahima Hans',
    role: 'Software Engineer @ Salesforce | Ex-Microsoft',
    desc: 'Software Engineer at Salesforce | Ex-Microsoft. Sharing insights on diversity in tech and breaking into Tier-1 companies.',
    prev: 'Microsoft',
    tags: ['Salesforce', 'Ex-Microsoft', 'Diversity in Tech'],
    li: 'https://www.linkedin.com/in/mahimahans/',
    img: '/img/techfluence/s6/guests/guest1.JPG',
    posts: [],
  },
  {
    name: 'Vanshika Pandey',
    role: 'SDE 2 @ JPMC',
    desc: 'SDE 2 at J.P. Morgan Chase. Building scalable financial infrastructure and mentoring students on backend engineering.',
    prev: 'JPMC',
    tags: ['JPMC', 'SDE 2', 'Backend', 'Mentorship'],
    li: 'https://www.linkedin.com/in/vanshikapandeyy/',
    img: '/img/techfluence/s6/guests/guest2_v2.jpg',
    posts: [],
  },
  {
    name: 'Rocky Bhatia',
    role: 'Architect @ Adobe | GenAI',
    desc: 'Architect @ Adobe leading GenAI & Systems at Scale. 400K+ engineers follow his insights on modern architecture.',
    prev: 'Enterprise Architect',
    tags: ['Adobe', 'GenAI', 'Systems Design', '400K+ Followers'],
    li: 'https://www.linkedin.com/in/rocky-bhatia-a4801010/',
    img: '/img/techfluence/s1/guests/guest4.jpg',
    posts: [
      'https://www.linkedin.com/posts/rocky-bhatia-a4801010_%3F%3F%3F%3F-%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F-%3F%3F-%3F%3F-activity-7158806709040279552-_KnH',
      'https://www.instagram.com/reel/C2z6c-ith4y/',
    ],
  },
  {
    name: 'Shashank Mishra',
    role: 'Staff Data Engineer @ Prophecy',
    desc: 'Staff Data Engineer @ Prophecy | Building GrowDataSkills | YouTuber (184k+). Top data engineering educator in India.',
    prev: 'Expedia, Amazon, McKinsey',
    tags: ['Data Engineering', 'YouTuber', 'Prophecy', 'Open Source'],
    li: 'https://www.linkedin.com/in/shashank219/',
    img: '/img/techfluence/s1/guests/guest3.jpg',
    posts: [],
  },
  {
    name: 'Abhishek Kumar',
    role: 'Senior Engineering Manager @ Walmart',
    desc: 'Senior Engineering Manager at Walmart. Expert in scaling e-commerce systems and building world-class engineering teams.',
    prev: 'Engineering Manager',
    tags: ['Walmart', 'Scaling Systems', 'Engineering Manager'],
    li: 'https://www.linkedin.com/in/abhishek0647/',
    img: '/img/techfluence/s6/guests/guest3.JPG',
    posts: [],
  },
  {
    name: 'Prashanth Kumar',
    role: 'Head of Commercial Digital India @ Volvo',
    desc: 'Head of Commercial Digital India at Volvo Cars. Leading digital transformation across India\'s commercial vehicle segment.',
    prev: 'Digital Strategy Leader',
    tags: ['Volvo Cars', 'Digital India', 'Commercial Head', 'Leadership'],
    li: 'https://www.linkedin.com/in/prashanth-kumar-3ab702a/',
    img: '/img/techfluence/s6/guests/guest4_v2.jpg',
    posts: [
      'https://www.linkedin.com/posts/prashanth-kumar-3ab702a_techfluence-ai-engineeringleadership-activity-7428302752696442880-TD8Y',
    ],
  },
  {
    name: 'Radhakrishnan Ramasamy',
    role: 'Senior Engineering Manager @ Walmart',
    desc: 'Senior Engineering Manager at Walmart Global Tech. Driving innovation in supply chain and retail technologies at scale.',
    prev: 'Engineering Leader',
    tags: ['Walmart', 'Retail Tech', 'Engineering Manager'],
    li: '',
    img: '/img/techfluence/s6/guests/guest5_v2.jpg',
    posts: [],
  },
  {
    name: 'Nancy Solanki',
    role: 'Software Engineer @ Microsoft',
    desc: 'Software Engineer at Microsoft. A rising leader in technical engineering and a role model for women in software development.',
    prev: 'Student → Microsoft',
    tags: ['Microsoft', 'Software Engineer', 'Women in Tech', 'Inspiration'],
    li: 'https://www.linkedin.com/in/nancysolanki/',
    img: '/img/techfluence/s6/guests/guest6_v2.jpg',
    posts: [],
  },

  // ── FOUNDERS & LEADERS ─────────────────────────────
  {
    name: 'Sandeep Jain',
    role: 'Founder - GeeksforGeeks',
    desc: 'Founder of GeeksforGeeks — the world\'s largest CS learning platform. Empowering millions of students globally.',
    prev: 'Software Engineer',
    tags: ['Founder', 'GeeksforGeeks', 'CS Education', 'Entrepreneur'],
    li: 'https://www.linkedin.com/in/sandeep-jain-/',
    img: '/img/techfluence/s3/guests/guest2.jpg',
    posts: [],
  },
  {
    name: 'Vivek Sridhar',
    role: 'CTO - Microsoft for Startups',
    desc: 'CTO at Microsoft for Startups | AI Advisor | Investor | Founder. Helping the next generation of startups scale with AI.',
    prev: 'Microsoft',
    tags: ['CTO', 'Microsoft', 'AI Advisor', 'Investor'],
    li: 'https://www.linkedin.com/in/vivsridh/',
    img: '/img/gallery/7.jpeg',
    posts: [],
  },
  {
    name: 'Darika Jain',
    role: 'Founder, ImpactD | 2x WEF Awardee',
    desc: 'Founder of ImpactD | Josh Talks Speaker | 2x WEF Awardee | Ex-American Express. LinkedIn branding expert for Founders and CXOs.',
    prev: 'American Express',
    tags: ['Founder', 'WEF Awardee', 'Josh Talks', 'LinkedIn Expert'],
    li: 'https://www.linkedin.com/in/darikajain/',
    img: '/img/techfluence/s3/guests/guest3.jpg',
    posts: [
      'https://www.linkedin.com/posts/darikajain_maam-my-feet-tremble-when-i-have-to-speak-activity-7241288089522860032-3xNV/',
      'https://www.instagram.com/reel/C_n7xXwJomc/',
    ],
  },
  {
    name: 'Hina Arora',
    role: 'Founder @BrandBuilders',
    desc: 'Founder @BrandBuilders | AI-powered LinkedIn Growth for Tech & AI leaders. Worked with 35+ tech executives.',
    prev: 'Marketing Leader',
    tags: ['Founder', 'LinkedIn Growth', 'AI Marketing', 'Brand Strategy'],
    li: 'https://www.linkedin.com/in/careerwithhina/',
    img: '/img/techfluence/s3/guests/guest4.jpg',
    posts: [
      'https://www.linkedin.com/posts/hinaaroraa_techfluence-guestspeaker-professionalgrowth-activity-7240216114004119552-Ztd_/',
      'https://www.instagram.com/p/C_hnnOSPkC_/',
    ],
  },
  {
    name: 'Saumya Singh',
    role: 'International Open Source Awardee',
    desc: 'International Open Source Awardee | Educator | Google Connect Winner | 3x TEDx Speaker. Inspiring students through open source and community.',
    prev: 'Remote Software Engineer',
    tags: ['Open Source', 'TEDx', 'Google Connect', 'Educator'],
    li: 'https://www.linkedin.com/in/saumya1singh/',
    img: '/img/techfluence/s3/guests/guest1.jpg',
    posts: [
      'https://www.linkedin.com/posts/saumya1singh_didnt-expect-so-much-love-from-students-activity-7239897223923163136-I9Cd/',
      'https://www.instagram.com/reel/C_yEC5FKzH-/',
    ],
  },

  // ── ACADEMICIANS & RESEARCHERS ─────────────────────
  {
    name: 'Dr. Deeksha Sharma',
    role: 'Academic & Research Leader',
    desc: 'Academic & Research Leader driving innovation in higher education. Panel expert and mentor at premier institutions.',
    prev: 'Research Academia',
    tags: ['Research', 'Academia', 'Panel Expert', 'Mentor'],
    li: '',
    img: '/img/techfluence/s3/guests/guest5.jpg',
    posts: [
      'https://www.linkedin.com/posts/deeksha26_it-was-a-surreal-experience-to-be-the-panel-activity-7237895245139435521-auWm',
      'https://www.instagram.com/p/C_cZ6cTPkt4/',
    ],
  },
  {
    name: 'Karan MV',
    role: 'Director, Developer Relations @ GitHub',
    desc: 'Director of International Developer Relations at GitHub. Building open source communities and empowering developers worldwide.',
    prev: 'Developer Evangelist',
    tags: ['GitHub', 'Developer Relations', 'Open Source', 'Community'],
    li: 'https://www.linkedin.com/in/mvkaran/',
    img: '/img/techfluence/s3/guests/guest6.jpg',
    posts: [],
  },
];

// ── 9. OTHER FLAGSHIP EVENTS ─────────────────────────────────────────────────
export const OTHER_EVENTS = [
  {
    id: 101,
    title: 'Techfluence 1',
    subtitle: 'Seasons 1, 2 & 3',
    date: '2023',
    description: 'The founding editions that kickstarted a tech community at LPU. Focused on emerging tech trends, hands-on product building, and open-source impact.',
    stats: [
      { label: 'Cumulative Reach', value: '2M+' },
      { label: 'Guest Speakers', value: '12+' },
      { label: 'Students Present', value: '2K+' },
    ],
    highlights: [
      'Founding Edition: The Ignition',
      'Hands-on Product Building Workshops',
      'International Open Source Awardees',
    ],
    gallery: [
      { src: '/img/techfluence/s1/guests/guest1.jpg', label: 'Mohammad F — Founder @LearnYard | Ex-Google' },
      { src: '/img/techfluence/s1/guests/guest2.jpg', label: 'Abhishek Kumar — Senior Engineering Leader | Ex-Google' },
      { src: '/img/techfluence/s1/guests/guest3.jpg', label: 'Shashank Mishra — Staff Data Engineer @ Prophecy' },
      { src: '/img/techfluence/s1/guests/guest4.jpg', label: 'Rocky Bhatia — Architect @ Adobe | GenAI' },
      { src: '/img/techfluence/s2/guests/guest1.jpg', label: 'Vivek Sridhar — CTO - Microsoft for Startups' },
      { src: '/img/techfluence/s3/guests/guest1.jpg', label: 'Saumya Singh — International Open Source Awardee' },
      { src: '/img/techfluence/s3/guests/guest2.jpg', label: 'Sandeep Jain — Founder - GeeksforGeeks' },
      { src: '/img/techfluence/s3/guests/guest3.jpg', label: 'Darika Jain — Founder, ImpactD | 2x WEF Awardee' },
      { src: '/img/techfluence/s3/guests/guest4.jpg', label: 'Hina Arora — Founder @BrandBuilders' },
      { src: '/img/techfluence/s3/guests/guest5.jpg', label: 'Dr. Deeksha Sharma — Academic & Research Leader' },
      { src: '/img/techfluence/s3/guests/guest6.jpg', label: 'Karan MV — Director, DevRel @ GitHub' }
    ],
    color: '#3D5BF1',
  },
  {
    id: 102,
    title: 'Techfluence 2',
    subtitle: 'Seasons 4, 5 & 6',
    date: '2024-25',
    description: 'Scaling to national impact and global leadership. Featuring engineering leaders from Google, Microsoft, and Volvo, and crossing 5M+ cumulative reach.',
    stats: [
      { label: 'Cumulative Reach', value: '7M+' },
      { label: 'Guest Speakers', value: '18+' },
      { label: 'Students Present', value: '3K+' },
    ],
    highlights: [
      'Scaling National Boundaries',
      'Speakers from 5+ Global Companies',
      'Flagship National Tech Event at LPU',
    ],
    gallery: [
      { src: '/img/gallery/rajya.jpg', label: 'Rajya Vardhan — Engineering Leader @ Google' },
      { src: '/img/gallery/17.jpeg', label: 'Industry-Academia Networking' },
      { src: '/img/techfluence/s5/guests/guest1.JPG', label: 'Archy Gupta — SWE III at Google' },
      { src: '/img/techfluence/s5/guests/guest2.JPG', label: 'Hina Arora — Founder @BrandBuilders' },
      { src: '/img/gallery/hemant.JPG', label: 'Hemant Pandey — Tech Lead | Ex-Meta, Tesla' },
      { src: '/img/techfluence/s5/guests/guest4.JPG', label: 'Omkar S. — Thought Leader at Autodesk' },
      { src: '/img/techfluence/s6/guests/guest1.JPG', label: 'Mahima Hans — Software Engineer at Salesforce' },
      { src: '/img/techfluence/s6/guests/guest2.JPG', label: 'Vanshika Pandey — SDE 2 @JPMC' },
      { src: '/img/techfluence/s6/guests/guest3.JPG', label: 'Abhishek Kumar — Senior Engineering Manager @ Walmart' },
      { src: '/img/techfluence/s6/guests/guest4.jpeg', label: 'Prashanth Kumar — Head of Digital @ Volvo Cars' },
      { src: '/img/techfluence/s6/guests/guest5.jpeg', label: 'Radhakrishnan Ramasamy — Engineering Manager @ Walmart' },
      { src: '/img/techfluence/s6/guests/guest6.JPG', label: 'Nancy Solanki — Software Engineer @Microsoft' },
      { src: '/img/techfluence 4,5,6/Copy of A_G07148.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/Copy of A_G07159.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/Copy of A_G07179.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/Copy of A_G07191.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/Copy of A_G07224.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/Copy of A_G07251.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/Copy of A_G07254.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/Copy of A_G07259.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/Copy of A_G07266.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/Copy of A_G07273.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/DSC09574.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/DSC09577.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/DSC09597.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/DSC09601.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/DSC09622.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/DSC09650.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/DSC09652.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/DSC09655.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/DSC09675.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/HRI05775.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/HRI05779.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/HRI05818.JPG', label: 'Techfluence Session' },
      { src: '/img/techfluence 4,5,6/HRI05896.JPG', label: 'Techfluence Session' }
    ],
    color: '#84ADFF',
  },
  {
    id: 1,
    title: 'AI Summit 2.0',
    subtitle: 'The Director GitHub Relations',
    date: '2024',
    description: 'Featuring Karan MV — Director of GitHub Relations',
    stats: [
      { label: 'Reach', value: '15K+' },
      { label: 'Students Present', value: '2K' },
      { label: 'Speakers', value: '1' },
    ],
    highlights: [
      'Speaker: Karan MV, Director of GitHub Relations',
      'Venue: Uni Audi Auditorium, LPU',
    ],
    gallery: [{ src: '/img/otherevent/event2.jpeg', label: 'AI Summit 2.0 — Featuring Karan MV (GitHub)' }],
    color: '#10B981',
  },
  {
    id: 2,
    title: 'Product Summit',
    subtitle: 'A Flagship Product Summit',
    date: '2024',
    description: 'A Flagship Product Summit',
    stats: [
      { label: 'Reach', value: '10K+' },
      { label: 'Students Present', value: '2K' },
      { label: 'Speakers', value: '2' },
    ],
    highlights: [
      'Venue: SDMA, LPU',
    ],
    gallery: [
      { src: '/img/otherevent/event3.JPG', label: 'Product Summit — Industry Leadership Talk' },
      { src: '/img/product summit/Copy of Copy of A_G04754.JPG', label: 'Product Summit Session' },
      { src: '/img/product summit/Copy of Copy of A_G04766.JPG', label: 'Product Summit Session' },
      { src: '/img/product summit/Copy of Copy of A_G04812.JPG', label: 'Product Summit Session' },
      { src: '/img/product summit/Copy of Copy of A_G04817.JPG', label: 'Product Summit Session' },
      { src: '/img/product summit/Copy of Copy of A_G04819.JPG', label: 'Product Summit Session' },
      { src: '/img/product summit/Copy of Copy of A_G04822.JPG', label: 'Product Summit Session' }
    ],
    color: '#F59E0B',
  },
  {
    id: 3,
    title: 'Googlify 2025 & 2026',
    subtitle: 'The Googler',
    date: '2025 & 2026',
    description: 'The Googler',
    stats: [
      { label: 'Reach', value: '12K+' },
      { label: 'Students Present', value: '2K' },
      { label: 'Speakers', value: '4' },
    ],
    highlights: [
      'Venue: SDMA, LPU',
    ],
    gallery: [
      { src: '/img/otherevent/event4.JPG', label: 'Googlify — The Google Culture at LPU' },
      { src: '/img/googlify/IMG_20250922_152326.jpg', label: 'Googlify Session' },
      { src: '/img/googlify/IMG_3890.jpg', label: 'Googlify Session' },
      { src: '/img/googlify/IMG_3893.jpg', label: 'Googlify Session' },
      { src: '/img/googlify/IMG_3901.jpg', label: 'Googlify Session' },
      { src: '/img/googlify/IMG_3968.jpg', label: 'Googlify Session' },
      { src: '/img/googlify/IMG_4078.jpg', label: 'Googlify Session' },
      { src: '/img/googlify/IMG_4233.jpg', label: 'Googlify Session' },
      { src: '/img/googlify/IMG_4273.jpg', label: 'Googlify Session' },
      { src: '/img/googlify/IMG_4304.jpg', label: 'Googlify Session' },
      { src: '/img/googlify/IMG_4305.jpg', label: 'Googlify Session' }
    ],
    color: '#E11D48',
  },
  {
    id: 4,
    title: 'Sukoon 2023',
    subtitle: "LPU's Biggest Youth Tech Fest",
    date: '2023',
    description: "Talk Show With Aman Dhattarwal and Shraddha Khapra",
    stats: [
      { label: 'Reach', value: '20K+' },
      { label: 'Students Present', value: '3K' },
      { label: 'Speakers', value: '2' },
    ],
    highlights: [
      'Speakers: Aman Dhattarwal & Shraddha Khapra',
      'Venue: SDMA, LPU',
    ],
    gallery: [{ src: '/img/otherevent/event1.jpeg', label: 'Sukoon 2023 — Aman Dhattarwal & Shraddha Khapra' }],
    color: '#3D5BF1',
  },
];

// ── 10. STARTUPS / PROJECTS ──────────────────────────────────────────────────
export const STARTUPS = [
  {
    name: 'TeachGenie',
    tag: 'EdTech · Platform',
    role: 'Founding Member & Head of Strategic Product',
    desc: 'Revolutionize Teaching. One Minute. Infinite Impact.',
    status: 'Active',
    year: '2024',
    color: '#7C3AED',
    metrics: [],
    img: '/img/startup/techgeani .jpeg',
    icon: '🎓',
    link: 'https://www.teachgenie.ai/',
    linkedin: 'https://www.linkedin.com/company/teachgenie-ai/',
  },
  {
    name: 'Mentro',
    tag: 'Mentorship · Community',
    role: 'Founding Board Member | Product & Strategy',
    desc: "Ace your tech interviews with Mentro's AI-driven mentor matching. With Mentorship at your fingertips, increase your chances of landing your dream job by 94%.",
    status: 'Active',
    year: '2022',
    color: '#0D9488',
    metrics: [],
    img: '',
    icon: '🤝',
    link: 'https://mentro.tech/',
    linkedin: 'https://www.linkedin.com/company/mentro-official/',
  },
  {
    name: 'VickyBytes',
    tag: 'Dev · Platform',
    role: 'Building@VickyBytes — Product & Strategy (Vol.)',
    desc: 'AI-verified content sharing platform for Developers.',
    status: 'Active',
    year: '2025',
    color: '#3D5BF1',
    metrics: [],
    img: '',
    icon: '💻',
    link: 'https://vickybytes.com/',
    linkedin: 'https://www.linkedin.com/company/vickybytes/',
  },
  {
    name: 'SAVE-AI',
    tag: 'CyberSec · Tool',
    role: '',
    desc: '',
    status: 'Shipped',
    year: '',
    color: '#E11D48',
    metrics: [],
    img: '',
    icon: '🛡️',
    link: '',
    linkedin: '',
  },
];

// ── 11. PROGRAM SECTION — "Out from the Classroom" ──────────────────────────
// Redirecting to LinkedIn for live updates
export const CLASSROOM_REDIRECT = "https://www.linkedin.com/in/souhardya-bose/";

// The bento grid cards showing the program structure
export const PROGRAM_CARDS = [
  {
    title: '',
    desc: '',
    img: '/img/otherimages/1769339658872.jpeg',
    type: 'text',
  },
  // Top row - 2 wide cards
  {
    title: '',
    desc: '',
    img: '/img/otherimages/b.jpeg',
    type: 'split',
  },

  // Bottom row - left col
  {
    title: '',
    desc: '',
    img: '/img/otherimages/1770234692913.jpeg',
    type: 'split',
  },
  // Center full-height card
  {
    title: '',
    desc: '',
    img: '/img/otherimages/1770234696510.jpeg',
    type: 'centerFull',
  },
  // Bottom row - right col
  {
    title: '',
    desc: '',
    img: '/img/otherimages/1771738357897.jpeg',
    type: 'number',
  },
  {
    title: '',
    desc: '',
    img: '/img/otherimages/a.jpeg',
    type: 'split',
  },
];

// Gallery images for the program section expand/collapse — update paths here anytime
export const PROGRAM_GALLERY = [
  { src: '/img/otherimages/1769339650034.jpeg', alt: 'Program session 1' },
  { src: '/img/otherimages/1769339658872.jpeg', alt: 'Program session 2' },
  { src: '/img/otherimages/1769707238811.jpeg', alt: 'Program session 3' },
  { src: '/img/otherimages/1770234692913.jpeg', alt: 'Program session 4' },
  { src: '/img/otherimages/1770234696510.jpeg', alt: 'Program session 5' },
  { src: '/img/otherimages/1771738357897.jpeg', alt: 'Program session 6' },
  { src: '/img/gallery/team-1.jpg', alt: 'Program session 7' },
  { src: '/img/gallery/team-2.jpg', alt: 'Program session 8' },
  { src: '/img/gallery/team-3.jpg', alt: 'Program session 9' },
  { src: '/img/otherimages/IMG-20230902-WA0022.jpg', alt: 'Program session 10' },
  { src: '/img/otherimages/IMG-20230902-WA0028.jpg', alt: 'Program session 11' },
  { src: '/img/otherimages/IMG-20230908-WA0062.jpg', alt: 'Program session 12' },

  { src: '/img/otherimages/IMG-20251226-WA0072.jpg', alt: 'Program session 14' },
  { src: '/img/otherimages/IMG-20251226-WA0086.jpg', alt: 'Program session 15' },
  { src: '/img/otherimages/IMG_20230908_112213.jpg', alt: 'Program session 16' },
  { src: '/img/otherimages/IMG_20260407_171424153.jpg', alt: 'Program session 17' },
  { src: '/img/otherimages/IMG_20260407_171431190.jpg', alt: 'Program session 18' },
];

const ALL_CLASSROOM_SOURCES = [
  ...PROGRAM_CARDS.map(c => c.img),
  ...PROGRAM_GALLERY.map(g => g.src)
];

// Normalize and filter unique sources
const UNIQUE_SOURCES = Array.from(new Set(
  ALL_CLASSROOM_SOURCES
    .filter(src => typeof src === 'string' && src.trim() !== '')
    .map(src => src.trim().startsWith('/') ? src.trim() : `/${src.trim()}`)
));

// Remove manual duplicates (the WIC shots that look identical)
const FINAL_SOURCES = UNIQUE_SOURCES.filter(src =>
  !src.includes('IMG_20260407_171431190.jpg') // This is the duplicate WIC shot
);

export const CLASSROOM_PHOTOS = FINAL_SOURCES.map(src => ({
  src,
}));

// ── 12. SKILLS INVENTORY ─────────────────────────────────────────────────────
// Languages, Frameworks, and Tools

export const SKILLS_TECH = [
  { name: 'Python', icon: '🐍', color: '#3B82F6' },
  { name: 'JavaScript', icon: '⚡', color: '#F59E0B' },
  { name: 'React.js', icon: '⚛️', color: '#38BDF8' },
  { name: 'Node.js', icon: '🟢', color: '#4ADE80' },
  { name: 'TensorFlow', icon: '🧠', color: '#F97316' },
  { name: 'FastAPI', icon: '🚀', color: '#A78BFA' },
  { name: 'AWS', icon: '☁️', color: '#FB923C' },
  { name: 'PostgreSQL', icon: '🐘', color: '#60A5FA' },
  { name: 'Google Cloud', icon: '🌐', color: '#34A853' },
];

export const SKILLS_PM = [
  { name: 'Product Roadmaps', icon: '🗺️', color: '#A78BFA' },
  { name: 'Agile / Scrum', icon: '🔄', color: '#38BDF8' },
  { name: 'User Research', icon: '🔍', color: '#F59E0B' },
  { name: 'A/B Testing', icon: '📊', color: '#4ADE80' },
  { name: 'Prompt Engineering', icon: '✨', color: '#A78BFA' },
];

export const SKILLS_TOOLS = [
  { name: 'Figma', icon: '🎨', color: '#F87171' },
  { name: 'Jira', icon: '📋', color: '#60A5FA' },
  { name: 'Postman', icon: '📮', color: '#FB923C' },
  { name: 'ChatGPT', icon: '🤖', color: '#4ADE80' },
];

// Skill category metadata (header image + icon key for each card)
// iconKey: 'code' | 'target' | 'cpu'
export const SKILLS_CATEGORIES = [
  { title: 'Languages & Frameworks', iconKey: 'code', img: '/img/gallery/12.jpeg', skills: 'SKILLS_TECH' },
  { title: 'Product Management', iconKey: 'target', img: '/img/gallery/15.jpeg', skills: 'SKILLS_PM' },
  { title: 'Tools & Platforms', iconKey: 'cpu', img: '/img/gallery/8.jpeg', skills: 'SKILLS_TOOLS' },
];

// ── 13. KEY PROJECT ──────────────────────────────────────────────────────────
export const KEY_PROJECT = {
  title: 'Cancer Detection Framework',
  subtitle: 'An intelligent web framework for gastrointestinal cancer detection.',
  bullets: [
    'DenseNet CNN trained on 9,000+ medical images',
    'Real-time gastrointestinal cancer detection system',
    'React.js frontend + FastAPI backend architecture',
    'Model deployed via Hugging Face + Render',
    'Automated PDF report generation for clinical use',
    'Cross-team collaboration: ML, data & UI teams',
  ],
  tags: ['React.js', 'FastAPI', 'Python', 'TensorFlow', 'Hugging Face', 'Render'],
  img: '/img/gallery/12.jpeg',
  liveLabel: 'LIVE PROJECT',
  liveTitle: 'Gastrointestinal Cancer Detection',
  liveSubtitle: 'Deployed · Hugging Face + Render',
};

// ── 14. ACHIEVEMENTS & CERTIFICATIONS ────────────────────────────────────────
export const ACHIEVEMENTS = [
  { icon: '🏆', title: '6 Patents Communicated', desc: 'Domains: edtech, cybersecurity & intelligent systems', color: '#F59E0B', img: '/img/gallery/17.jpeg' },
  { icon: '📄', title: '2 Scopus Research Papers', desc: 'Published at internationally indexed conferences', color: '#4361EE', img: '/img/gallery/18.jpeg' },
  { icon: '✨', title: 'Google Nebular Project', desc: 'Contributed to Google prompt engineering research', color: '#34A853', img: '/img/gallery/19.jpeg' },
  { icon: '🚀', title: 'Y Combinator Top 10%', desc: 'Recognized top contributor at Mentro', color: '#EA4335', img: '/img/gallery/20.jpeg' },
  { icon: '🌏', title: 'UGC National Policy', desc: 'Represented LPU to the UGC Chairman in New Delhi', color: '#A78BFA', img: '/img/gallery/6.jpeg' },
  { icon: '📡', title: '9M+ Content Reach', desc: 'Techfluence & education content impact', color: '#0D9488', img: '/img/gallery/7.jpeg' },
];

export const CERTS = [
  { name: 'Microsoft Technical Associate', org: 'Microsoft', color: '#0078D4', icon: '🪟', img: '/img/gallery/5.jpeg' },
  { name: 'NPTEL – Soft Skills', org: 'IIT Kanpur', color: '#FF6B35', icon: '🎓', img: '/img/gallery/8.jpeg' },
  { name: 'Google Cloud Platform', org: 'Google', color: '#34A853', icon: '☁️', img: '/img/gallery/4.jpeg' },
];

export const STUDENT_COMMENTS = [
  {
    text: 'Attended an insightful session today on Building an Impactful LinkedIn Profile & Leveraging AI Effectively conducted by our respected mentor, Souhardya Bose sir. As a B.Tech CSE student, this gave me a clear direction on how to present myself professionally.',
    linkedin: 'https://www.linkedin.com/posts/sayantan-ghosh-372143314_linkedin-personalbranding-ai-ugcPost-7443329604381184000-vpR5',
    avatar: '/img/testimonials/sayantan.jpg',
  },
  {
    text: 'Excited to share a big milestone! From learning in classrooms to building solutions for classrooms. I will be working on TeachGenie.ai at LPU. Grateful for the opportunity to work alongside Mr. Lovi Raj Gupta Sir. Special thanks to Souhardya Bose Sir.',
    linkedin: 'https://www.linkedin.com/posts/medha-jha810_internship-lovelyprofessionaluniversity-lpu-ugcPost-7442417676410531840-c7Ox',
    avatar: '/img/testimonials/medha.jpg',
  },
  {
    text: 'Today, we (D4 Community) successfully hosted our first GenAI Conclave 2025 at LPU. Special thank you to SAMI ANAND Sir and Souhardya Bose bhaiya for their encouragement, guidance, and constant support throughout.',
    linkedin: 'https://www.linkedin.com/posts/gagan27x_genaiconclave2025-d4community-lovelyprofessionaluniversity-ugcPost-7403167607018938368-SEKv',
    avatar: '/img/testimonials/gagandeep.jpg',
  },
  {
    text: 'I’m working as a Founding Contributor on TeachGenie.ai — an AI-powered platform designed to transform learning. A big thank you to Souhardya Bose Sir for his constant guidance and support. Excited to build alongside an amazing team — including Souhardya Bose — as we work towards shaping the future of education through AI. 🚀',
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7445324441217114112/',
    avatar: '/img/testimonials/golu.jpg',
    zoom: 3.0,
    position: '50% 0%',
    offsetY: '10%',
  },
  {
    text: 'I had the privilege of attending a Leader’s Talk Session with Mr. Vishwa Mohan , Founder of AIMERZ, CEO of upGrad School of Technologies, and Ex-CIO of PW (PhysicsWallah).\n\nThe session was extremely insightful and eye-opening for students like us.\n\nA special thanks to the moderator Mr. Souhardya Bose Sir for asking precise, thoughtful, and necessary questions that helped extract maximum value from the session and addressed almost every doubt students had.',
    linkedin: 'https://www.linkedin.com/posts/harsh-singh-b4a67b347_leaderstalk-aiintech-careerguidance-activity-7422315606433021952-TUDw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnvYTYBh9IRSZsbaScolNOBX2qLDvp0L_8',
    avatar: '/img/testimonials/harsh.jpg',
  },
  {
    text: 'Some moments from Leaders’ Talk: AI & Innovation ✨\nSincere thanks to Souhardya Bose sir for his guidance, vision, and continuous support throughout the journey. His mentorship creates an environment where students feel motivated to lead, learn, and take initiative.\nExperiences like these remind me why student communities matter.',
    linkedin: 'https://www.linkedin.com/posts/manjari-nk_leadership-mentorship-studentcommunities-activity-7423002072490385408-n8oG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnvYTYBh9IRSZsbaScolNOBX2qLDvp0L_8',
    avatar: '/img/testimonials/manjari.jpg',
  },
  {
    text: 'I had the opportunity to attend a Leaders’ Talk on AI & Innovation organized by the Student Career Committee, School of Computer Science and Engineering.\n\nAlso got a lot of things to learn from Souhardya Bose the way he speaks fluently \nand hatts off to his energy.\n\nSessions like these help bridge the gap between classroom learning and industry realities, and they reinforced the importance of continuous learning and innovation in the tech space.',
    linkedin: 'https://www.linkedin.com/posts/swastik-das-306788395_leaderstalk-aiandinnovation-artificialintelligence-activity-7422499200451645441--t_f?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnvYTYBh9IRSZsbaScolNOBX2qLDvp0L_8',
    avatar: '/img/testimonials/swastik.jpg',
  },
  {
    text: 'A Leader\'s Talk On "AI And Innovation" Student Career Committee The LPU School of Computer Science Engineering, Lovely Professional University Organized A Leader\'s Talk On AI And Innovation As Part Of Its Ongoing Efforts To Strength Of Industry–Academia Engagement And Prepare Students For A Technology-Driven Future.\n\nI Sincerely Thank My Mentor Prof. Souhardya Bose Sir For His Constant Guidance And Support, Which Gave Me The Confidence To Take Responsibility And Contribute Effectively To Organizing This Event.',
    linkedin: 'https://www.linkedin.com/posts/ganeshbhosle1_a-leaders-talk-on-ai-and-innovation-student-activity-7422690159911165954-ZdBy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnvYTYBh9IRSZsbaScolNOBX2qLDvp0L_8',
    avatar: '/img/testimonials/ganesh.jpg',
  },
  {
    text: 'This week was special. After completing my 100 Days of Code (DSA) challenge, I joined the Student Career Community (SCC) at LPU — and got the opportunity to organize my first technical event with the team.\n\nGrateful to have guidance and support from our SCC leadership:\n✨ @Souhardya Bose (Event Head, SCC) — for direction & clarity',
    linkedin: 'https://www.linkedin.com/posts/aryan100_communitybuilding-opensource-gsoc-activity-7421217141535825922-3iZH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnvYTYBh9IRSZsbaScolNOBX2qLDvp0L_8',
    avatar: '/img/testimonials/aryan.jpg',
  },
  {
    text: 'Today marked an important learning experience for me — my first time volunteering for a student-led academic event, not as a participant, but as part of the organizing team.\nSpecial thanks to my mentor, Prof. Souhardya Bose Sir, whose guidance, trust, and leadership helped the entire SCC team plan and execute this event successfully. Your mentorship truly made a difference.',
    linkedin: 'https://www.linkedin.com/posts/saiprakashreddy1_scc-opensource-gsoc-activity-7421074214163558400-ojFQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnvYTYBh9IRSZsbaScolNOBX2qLDvp0L_8',
    avatar: '/img/testimonials/sai prakash.jpg',
  },
  {
    text: 'From Overthinking to Action: Lessons in Open Source and Leadership\nI’m still processing the incredible whirlwind of the last few days! 🌪️\nStepping up to help lead an event and engaging with Google Summer of Code (GSoC) contributors has been a masterclass in growth. Handling high-pressure situations and navigating the Open Source ecosystem felt daunting at first, but the right environment and mentorship make all the difference.\nHuge gratitude to Souhardya Bose sir and SAMI ANAND sir for the mentorship and for opening doors to these opportunities. Your guidance gave me the confidence to handle things I never imagined I’d be managing on my own.',
    linkedin: 'https://www.linkedin.com/posts/yajnesh-dutt-6b8702379_opensource-gsoc-leadership-activity-7420869507969208320-mYVI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnvYTYBh9IRSZsbaScolNOBX2qLDvp0L_8',
    avatar: '/img/testimonials/yajnesh.png',
  },
  {
    text: 'Grateful for the opportunity to host the Product Management Summit 2025 at LPU. Heartfelt thanks to our moderator Souhardya Bose bhaiya for leading the session so gracefully, and to SAMI ANAND Sir for his constant guidance. 🙏',
    linkedin: 'https://www.linkedin.com/posts/medha-jha810_productmanagement-leadership-entrepreneurship-ugcPost-7371228797351817216-F7XX',
    avatar: '/img/testimonials/medha.jpg',
  },
  {
    text: 'Yesterday, I attended Tech Fluence 5.0 at LPU — an incredible experience! A big thank you to the organizers and mentors SAMI ANAND Sir and Souhardya Bose Sir for making this insightful and inspiring! Looking forward to implementing the learnings.',
    linkedin: 'https://www.linkedin.com/posts/sanchit-goyal-922700370_techfluence5-lpu-learning-activity-7372514784543682560--vlL',
    avatar: '/img/testimonials/sanchit.jpg',
  },
  {
    text: 'Happy Birthday Souhardya Bose 🎉 Today we celebrate not just his birthday — but his journey. From failing in 12th... to becoming a voice for thousands. He has touched 15,000+ students. Bose Bhaiya, failure is not final — it\'s the foundation. 💙',
    linkedin: 'https://www.linkedin.com/posts/mithlesh-mahato_happybirthday-motivation-inspiration-ugcPost-7362388268266487809-nrhc',
    avatar: '/img/testimonials/mithlesh.jpg',
  },
  {
    text: 'Souhardya Bose sir played a pivotal role in my placement journey. With his constant support and late-night mentoring sessions in the library, I cracked every stage. Today I\'m placed as a Software Developer at Wesoftek. Thank you Souhardya da 🙏',
    linkedin: 'https://www.linkedin.com/posts/nikhil-mahato_gratitude-wesoftek-placement-activity-7359434038798954499-1aA1',
    avatar: '/img/testimonials/nikhil.jpg',
    position: '95% 50%',
  },
];

export const PROFESSIONAL_COMMENTS = [
  {
    text: `I was at TechFluence 6.0 at Lovely Professional University (LPU) in Jan. 

Second time speaking there (First was Techfluence 2.0 with Saumya Singh)

Same campus, Completely different energy.

Two days, Great student interactions, and legendary hospitality from LPU, SAMI ANAND and Souhardya Bose.`,
    linkedin: 'https://www.linkedin.com/posts/abhishek0647_a-1st-year-student-asked-me-something-i-wasnt-ugcPost-7433119517964288000-aPNv',
    avatar: '/img/testimonials/abhishek.jpg',
  },
  {
    text: 'A few weeks back I had the privilege of being the keynote speaker at the Product Management Summit 2025 at LPU. Standing before 5,000+ bright students was surreal. A heartfelt thanks to LPU, Souhardya Bose, and every student who made this day unforgettable.',
    linkedin: 'https://www.linkedin.com/posts/shravantickoo_folks-a-few-weeks-back-i-had-the-privilege-ugcPost-7383748431854575616-UK-X',
    avatar: '/img/testimonials/shravan.jpg',
  },
  {
    text: 'The future of tech felt very real to me last weekend. I was at LPU as a speaker, talking about jobs, AI, and tech placements. Also loved sharing the stage with Abhishek Kumar, Vanshika Pandey, and Souhardya Bose.',
    linkedin: 'https://www.linkedin.com/posts/mahimahans_the-future-of-tech-felt-very-real-to-me-last-ugcPost-7426630435910266880-E7-6',
    avatar: '/img/testimonials/mahima.jpg',
  },
  {
    text: 'Is India Ready for the AI-First Decade? Techfluence 6.0 at LPU. Standing before that energetic crowd was humbling. I saw aspiration, discipline, and direction. That gives me confidence about the next generation of engineers.',
    linkedin: 'https://www.linkedin.com/posts/prashanth-kumar-3ab702a_techfluence-ai-engineeringleadership-ugcPost-7428302751182299136-dBEq',
    avatar: '/img/testimonials/prashant.jpg',
  },
  {
    text: 'Second time invited to LPU for Techfluence 5.0. Day 1 with first-year students sharing the roadmap from Campus to Career. They need more than classes and grades — they need mentors. Thanks Souhardya Bose and SAMI ANAND 🙌',
    linkedin: 'https://www.linkedin.com/posts/careerwithhina_second-time-invited-to-lovely-professional-ugcPost-7373032755032424449-y3R1',
    avatar: '/img/testimonials/hina.jpg',
  },
  {
    text: 'Recently, I was invited to Lovely Professional University, Jalandhar for Techfluence 6.0 — an amazing experience. Met some incredible people, enjoyed authentic Punjabi food, and had great conversations with students. ✨',
    linkedin: 'https://www.linkedin.com/posts/vanshikapandeyy_lpu-jalandhar-recently-i-was-invited-ugcPost-7425148704451354624-d6R3',
    avatar: '/img/testimonials/vanshika.jpg',
  },
  {
    text: `Grateful to have been part of the Techfluence panel at Lovely Professional University 

It was a great time talking to the students about career growth, AI and sharing my journey along with Hina Arora and Archy Gupta 

A big thank you to Souhardya Bose, SAMI ANAND, Rajya Vardhan Mishra and the students and faculty for the opportunity and the warm welcome`,
    linkedin: 'https://www.linkedin.com/posts/hemant-pandey_grateful-to-have-been-part-of-the-techfluence-ugcPost-7376605981872545792-D3f3/',
    avatar: '/img/testimonials/hemant.jpg',
  },
  {
    text: 'Met Souhardya Bose at KIET. Great to reconnect. Remembering by past students makes any teacher very happy and same joy I had when he came to meet me travelling all the way form Jalandhar. Thank you',
    linkedin: 'https://www.linkedin.com/posts/preeti-bajaj-49415b7_met-souhardya-bose-at-kiet-great-to-reconnect-ugcPost-7248242355294666752-4_UA/',
    avatar: '/img/testimonials/preeti.jpg',
  },
  {
    text: `It is such an honour to be invited by Lovely Professional University as guest speaker. Feeling really excited for hashtag#Freshers_K_Saath_Baatcheet 😊😊

Thank you Souhardya Bose and his team for such a great initiative in this pandemic.`,
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6694885595023491072/',
    avatar: '/img/testimonials/shashank.jpg',
  },
  {
    text: `Standing in front of 2500+ curious minds at LPU was a moment to remember! 🚀

The tech world is changing fast— AI, Web3, Microservices, Frontend Innovations— but the real game-changer? Your mindset, adaptability & continuous learning! 

✨ From guiding students to sharing insights, this was an unforgettable experience! And the faculty? Incredibly humble & welcoming. ❤️

Special thanks to Souhardya Bose for the kind invitation & making this possible!`,
    linkedin: 'https://www.linkedin.com/posts/ajaysuneja_lpu-techtalk-codinglife-ugcPost-7305916919038033922-q_wa/',
    avatar: '/img/testimonials/ajay.jpg',
  },
  {
    text: `It’s been two months since I signed off as an Assistant Professor at Lovely Professional University and I’ve been meaning to put into words just how grateful I am for this chapter. 
To my wonderful teammates Kirti Basra Mridhu Rajput Pushpinder Kaur Dr. Himani Arora Namratta Kaushal Souhardya Bose Laxmi Devi and others. Thank you for being such a supportive, positive and driven bunch.`,
    linkedin: 'https://www.linkedin.com/posts/arohi-khajuria_gratitude-leadershipmatters-teamwork-ugcPost-7345539958297776128-v1b2/',
    avatar: '/img/testimonials/arohi.jpg',
  },
];

// ── 17. TEXT TESTIMONIALS ─────────────────────────────────────────────────────
export const TESTIMONIALS = [];

// ── 18. VIDEO TESTIMONIALS ──────────────────────────────────────────────────
export const VIDEO_TESTIMONIALS = [
  { name: 'Riya', org: 'OASIS LPU', role: 'Student Experience', img: '/img/gallery/1.jpeg', videoId: 'dQw4w9WgXcQ' },
  { name: 'Saksham', org: 'OASIS LPU', role: '8 months ago', img: '/img/gallery/2.jpeg', videoId: 'dQw4w9WgXcQ' },
  { name: 'Sandeep', org: 'OASIS LPU', role: 'Photography', img: '/img/gallery/3.jpeg', videoId: 'dQw4w9WgXcQ' },
  { name: 'Aayush', org: 'OASIS LPU', role: 'Student organization', img: '/img/gallery/4.jpeg', videoId: 'dQw4w9WgXcQ' },
];

// ── 18.5 LINKEDIN TESTIMONIALS ──────────────────────────────────────────────
export const LINKEDIN_TESTIMONIALS = [
  { img: '/img/gallery/1.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567890' },
  { img: '/img/gallery/2.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567891' },
  { img: '/img/gallery/3.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567892' },
  { img: '/img/gallery/4.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567893' },
  { img: '/img/gallery/1.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567894' },
  { img: '/img/gallery/2.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567895' },
  { img: '/img/gallery/3.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567896' },
  { img: '/img/gallery/4.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567897' },
  { img: '/img/gallery/1.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567898' },
  { img: '/img/gallery/2.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567899' },
  { img: '/img/gallery/3.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567900' },
  { img: '/img/gallery/4.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567901' },
  { img: '/img/gallery/1.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567902' },
  { img: '/img/gallery/2.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567903' },
  { img: '/img/gallery/3.jpeg', link: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567904' },
];

// ── 19. PODCASTS AND TALKS ───────────────────────────────────────────────────
export const PODCASTS = [
  { title: "Cybersecurity & Startups", desc: "Entrepreneur | Technology speaker | Investor", guestName: "Sanjay Katkar", guestOrg: "Co-Founder & Jt. MD Quick Heal", duration: "Short", date: "2024", videoId: "h_2hvvvNiaY", link: "https://youtube.com/shorts/h_2hvvvNiaY", tags: ["Cybersec", "Startup"] },
  { title: "Building Quick Heal", desc: "Expert insights from the CTO", guestName: "Sanjay Katkar", guestOrg: "Co-Founder & Jt. MD Quick Heal", duration: "Short", date: "2024", videoId: "-55DANZmwS0", link: "https://youtube.com/shorts/-55DANZmwS0", tags: ["Mentor", "Tech"] },
  { title: "About Souhardya", desc: "Words and insights about Souhardya Bose", guestName: "Bose Sir", guestOrg: "Testimonial", duration: "Short", date: "2024", videoId: "v12gUdKel9Y", link: "https://youtube.com/shorts/v12gUdKel9Y", tags: ["Testimonial"] },
  { title: "Tech & Education", desc: "Insights from the founder of GeeksforGeeks", guestName: "Sandeep Jain", guestOrg: "Founder - GeeksforGeeks", duration: "Short", date: "2024", videoId: "PVOlrYNcVic", link: "https://youtube.com/shorts/PVOlrYNcVic", tags: ["EdTech"] },
  { title: "Building GeeksforGeeks", desc: "Journey of scaling a platform for millions", guestName: "Sandeep Jain", guestOrg: "Founder - GeeksforGeeks", duration: "Short", date: "2024", videoId: "l5e5-GzH39k", link: "https://youtube.com/shorts/l5e5-GzH39k", tags: ["Founder"] },
  { title: "Tech Career Tips", desc: "Advice for budding software engineers", guestName: "Sandeep Jain", guestOrg: "Founder - GeeksforGeeks", duration: "Short", date: "2024", videoId: "LUt9h1OUayo", link: "https://youtube.com/shorts/LUt9h1OUayo", tags: ["Career"] },
  { title: "Future of Coding", desc: "How development is evolving in India", guestName: "Sandeep Jain", guestOrg: "Founder - GeeksforGeeks", duration: "Short", date: "2024", videoId: "x36iTFJEY-4", link: "https://youtube.com/shorts/x36iTFJEY-4", tags: ["Coding"] },
  { title: "GitHub & Developers", desc: "Empowering the international developer community", guestName: "Karan M V", guestOrg: "Dir. Int. DevRel @ GitHub", duration: "Short", date: "2024", videoId: "t2vo939FO4M", link: "https://youtube.com/shorts/t2vo939FO4M", tags: ["GitHub", "DevRel"] },
  { title: "Open Source Ecosystem", desc: "The future of collaborative building", guestName: "Karan M V", guestOrg: "Dir. Int. DevRel @ GitHub", duration: "Short", date: "2024", videoId: "rxnm4NjHHaQ", link: "https://youtube.com/shorts/rxnm4NjHHaQ", tags: ["Open Source", "Scale"] },
  { title: "Personal Branding", desc: "Working with 20+ Tech Executives", guestName: "Hina Arora", guestOrg: "AI-Powered LinkedIn Branding", duration: "Short", date: "2024", videoId: "W9HyOG4NhuY", link: "https://youtube.com/shorts/W9HyOG4NhuY", tags: ["Branding", "AI"] },
  { title: "Navigating Tech", desc: "Perspectives on the changing tech landscape", guestName: "Deeksha Sharma", guestOrg: "Creator", duration: "Short", date: "2024", videoId: "CDyr5iLiFiA", link: "https://youtube.com/shorts/CDyr5iLiFiA", tags: ["Creator"] },
  { title: "Optics for Founders", desc: "Insights from 2x WEF Awardee & Ex-Amex", guestName: "Darika Jain", guestOrg: "Founder, ImpactD", duration: "Short", date: "2024", videoId: "m-xSM98eb5A", link: "https://youtube.com/shorts/m-xSM98eb5A", tags: ["CXO", "Growth"] },
  { title: "Building in Stealth", desc: "Life after acquisition and Microsoft", guestName: "Nishant Chahar", guestOrg: "Ex-Algoprep & Microsoft", duration: "Short", date: "2024", videoId: "0ITVzkS7GwQ", link: "https://youtube.com/shorts/0ITVzkS7GwQ", tags: ["Stealth", "SDE"] },
  { title: "Remote Work", desc: "3xTEDx Speaker & LinkedIn Top Voice", guestName: "Saumya Singh", guestOrg: "Remote Software Engineer", duration: "Short", date: "2024", videoId: "e0zkq6RYQPM", link: "https://youtube.com/shorts/e0zkq6RYQPM", tags: ["Remote", "OS"] },
  { title: "AI & Startups", desc: "Insights from an AI Advisor & Investor", guestName: "Vivek Sridhar", guestOrg: "CTO - Microsoft for Startups", duration: "Short", date: "2024", videoId: "vat3u-_KtNs", link: "https://youtube.com/shorts/vat3u-_KtNs", tags: ["Microsoft", "AI"] },
  { title: "Literature Fest Highlights", desc: "Engaging converations at the fest", guestName: "Students x Bose", guestOrg: "Literature Fest", duration: "Short", date: "2024", videoId: "M_JnAvM1BPo", link: "https://youtube.com/shorts/M_JnAvM1BPo", tags: ["Fest"] },
  { title: "Flagship Event", desc: "A flagship Tech Event at LPU", guestName: "Techfluence Season 4", guestOrg: "Lovely Professional Univ.", duration: "Short", date: "2024", videoId: "KKrEUig1JCM", link: "https://youtube.com/shorts/KKrEUig1JCM", tags: ["Techfluence"] },
  { title: "Student Testimonial", desc: "Insights into his mentorship", guestName: "Souhardya Bose", guestOrg: "Testimonial", duration: "Short", date: "2024", videoId: "7xdeDe32N2I", link: "https://youtube.com/shorts/7xdeDe32N2I", tags: ["Mentorship"] },
  { title: "Engineering Culture", desc: "How to build responsible scale in APAC", guestName: "Vivek KC", guestOrg: "Founder @ Greenink.pro", duration: "Short", date: "2024", videoId: "Q7r-bUQ6x1Q", link: "https://youtube.com/shorts/Q7r-bUQ6x1Q", tags: ["Engineering"] },
  { title: "Digital Transformation", desc: "Strategizing transformation in modern companies", guestName: "Vivek KC", guestOrg: "Founder @ Greenink.pro", duration: "Short", date: "2024", videoId: "1ItooPFxVjM", link: "https://youtube.com/shorts/1ItooPFxVjM", tags: ["Transformation"] },
  { title: "Responsible Scale", desc: "Architecture and growth strategies", guestName: "Vivek KC", guestOrg: "Founder @ Greenink.pro", duration: "Short", date: "2024", videoId: "UhgDQd2Ov3M", link: "https://youtube.com/shorts/UhgDQd2Ov3M", tags: ["Scale"] },
  { title: "Financial Literacy", desc: "Building financial awareness in India", guestName: "Shivani Gera", guestOrg: "YP at SEBI & EY", duration: "Short", date: "2024", videoId: "jutingdwvhk", link: "https://youtube.com/shorts/jutingdwvhk", tags: ["Finance"] },
  { title: "Multicloud Innovations", desc: "Leading DevOps and driving efficiency", guestName: "Akshay Sanklecha", guestOrg: "Dir. DevOps @ Good Glamm", duration: "Short", date: "2024", videoId: "tQfml9kzhUc", link: "https://youtube.com/shorts/tQfml9kzhUc", tags: ["DevOps"] },
  { title: "Driving Efficiency", desc: "A deep dive into reliable architectures", guestName: "Akshay Sanklecha", guestOrg: "Dir. DevOps @ Good Glamm", duration: "Short", date: "2024", videoId: "lt6cON_xHCY", link: "https://youtube.com/shorts/lt6cON_xHCY", tags: ["Cloud"] },
  { title: "Modern Tools", desc: "Strategies for modern scalable infrastructures", guestName: "Akshay Sanklecha", guestOrg: "Dir. DevOps @ Good Glamm", duration: "Short", date: "2024", videoId: "29-MenaBvOM", link: "https://youtube.com/shorts/29-MenaBvOM", tags: ["Infrastructure"] },
  { title: "The Journey", desc: "Tracing the path and lessons learned", guestName: "Souhardya Bose", guestOrg: "Journey", duration: "Short", date: "2024", videoId: "WZxX-zGHJOs", link: "https://youtube.com/shorts/WZxX-zGHJOs", tags: ["Journey"] },
  { title: "Sukoon 2023 Fest", desc: "Talk Show with Apna College Founders", guestName: "Aman & Shradha", guestOrg: "Apna College", duration: "Long", date: "2023", videoId: "MXEvMusmzU4", link: "https://youtu.be/MXEvMusmzU4", tags: ["Fest", "Talk Show"] },
  { title: "LPU YouthFest", desc: "Online solution for Tech Internship prep", guestName: "Aman & Shradha", guestOrg: "Apna College", duration: "Long", date: "2023", videoId: "LbpPaDelsq4", link: "https://youtu.be/LbpPaDelsq4", tags: ["YouthFest"] },
  { title: "Season 1 Highlights", desc: "Throwback to the first flagship edition", guestName: "Techfluence", guestOrg: "Season 1", duration: "Short", date: "2024", videoId: "4PQY3YsNhXE", link: "https://youtube.com/shorts/4PQY3YsNhXE", tags: ["Throwback"] },
  { title: "Day 1 Highlights", desc: "A Day of Inspiration & Growth", guestName: "Techfluence", guestOrg: "Season 3", duration: "Long", date: "2024", videoId: "wMpb45VSUVc", link: "https://youtu.be/wMpb45VSUVc", tags: ["Highlights"] },
  { title: "Leading Scientist", desc: "Former Research Collaborator at Stanford", guestName: "Dr. Lovi Raj Gupta", guestOrg: "Pro VC, LPU", duration: "Short", date: "2024", videoId: "nbVCVhiYHYQ", link: "https://youtube.com/shorts/nbVCVhiYHYQ", tags: ["Stanford"] },
  { title: "Academic Excellence", desc: "Insights from SFedU, Russia", guestName: "Dr. Lovi Raj Gupta", guestOrg: "Pro VC, LPU", duration: "Short", date: "2024", videoId: "dEug3liSJlw", link: "https://youtube.com/shorts/dEug3liSJlw", tags: ["Academics"] },
  { title: "Inspiring Leadership", desc: "A conversation on the future of universities", guestName: "Dr. Lovi Raj Gupta", guestOrg: "Pro VC, LPU", duration: "Long", date: "2024", videoId: "gFYGiKGKWZ0", link: "https://youtu.be/gFYGiKGKWZ0", tags: ["Leadership"] }
];

// ── 19b. NOTABLE MEETS ───────────────────────────────────────────────────────
// People Souhardya has had the privilege of meeting.
// → Copy photos to: public/img/meets/ using the filenames below
export const MEETS = [
  {
    name: 'UGC Chairman',
    role: 'Chairman',
    org: 'University Grants Commission of India',
    category: 'Government',
    color: '#3D5BF1',
    photos: [
      '/img/meets/ugc-chairman-1.jpeg',
      '/img/meets/ugc-chairman-2.jpeg',
      '/img/meets/ugc-chairman-3.jpeg',
      '/img/meets/ugc-chairman-4.jpg',
      '/img/meets/ugc-chairman-5.jpg',
    ],
  },
  {
    name: 'Vivek Sridhar',
    role: 'CTO · AI Advisor · Investor · Founder',
    org: 'Microsoft for Startups',
    category: 'Tech Leader',
    color: '#3D5BF1',
    photos: [
      '/img/meets/vivek-sridhar-1.jpg',
    ],
    linkedin: 'https://www.linkedin.com/in/viveksridhar/',
  },
  {
    name: 'Sanjay Katkar',
    role: 'Co-Founder & Jt. MD · Ex-CTO · Cybersecurity Expert',
    org: 'SEQRITE / Quick Heal Technologies',
    category: 'Tech Leader',
    color: '#0D9488',
    photos: [
      '/img/meets/sanjay-katkar-1.jpg',
    ],
    linkedin: 'https://www.linkedin.com/in/sanjay-katkar-seqrite/',
  },
  {
    name: 'Karan M V',
    role: 'Director, International Developer Relations',
    org: 'GitHub',
    category: 'Tech Leader',
    color: '#1A1A1A',
    photos: [
      '/img/meets/karan-mv-1.jpeg',
    ],
  },
  {
    name: 'Paramjit Sachdeva',
    role: 'Highest Tax Payer in Punjab · Managing Director',
    org: 'Sachdeva Stocks Pvt Ltd',
    category: 'Business',
    color: '#F59E0B',
    photos: [
      '/img/meets/paramjit-sachdeva-2.jpg',
      '/img/meets/paramjit-sachdeva-1.jpg'
    ],
  },
  {
    name: 'Dr. Rajeev Sobti',
    role: 'Head of Admissions',
    org: 'Lovely Professional University (LPU)',
    category: 'Academia',
    color: '#0A66C2',
    photos: [
      '/img/gallery/rajeev-sobti-fixed.png',
    ],
  },
  {
    name: 'Ramesh Venugopalsamy',
    role: 'Global Talent Acquisition Leader',
    org: 'Quick Heal Technologies',
    category: 'Tech Leader',
    color: '#E11D48',
    photos: [
      '/img/gallery/ramesh-venugopalsamy.png',
    ],
  },
  {
    name: 'Dr. Charles Severance',
    role: 'Clinical Associate Professor',
    org: 'University of Michigan',
    category: 'Educator',
    color: '#7C3AED',
    photos: [
      '/img/meets/charles-severance-1.jpg',
      '/img/meets/charles-severance-2.jpg',
      '/img/meets/charles-severance-3.jpg',
    ],
  },
  {
    name: 'Ashutosh Gupta',
    role: 'MD - India & South Asia',
    org: 'Coursera',
    category: 'Tech Leader',
    color: '#0056D2',
    photos: [
      '/img/gallery/ashutosh-gupta.png',
    ],
  },
  {
    name: 'Shailesh Kumar',
    role: 'Chief Data Scientist, CoE AI/ML',
    org: 'Jio',
    category: 'Tech Leader',
    color: '#0D9488',
    photos: [
      '/img/gallery/shailesh-new.jpg',
      '/img/meets/shailesh-kumar-2.jpeg',
      '/img/meets/shailesh-kumar-3.jpeg',
    ],
    linkedin: 'https://www.linkedin.com/in/shailesh-kumar-jio/',
  },
  {
    name: 'Love Babbar',
    role: 'Founder · Educator · YouTuber',
    org: 'CodeHelp',
    category: 'Educator',
    color: '#F59E0B',
    photos: [
      '/img/gallery/love.jpg',
    ],
    linkedin: 'https://www.linkedin.com/in/love-babbar/',
  },
  {
    name: 'Anand Kumar',
    role: 'Founder · Mathematician · Mentor · Speaker',
    org: 'Super 30',
    category: 'Educator',
    color: '#3D5BF1',
    photos: [
      '/img/meets/anand-kumar-1.jpg',
    ],
  },
  {
    name: 'Dr Col Rashmi Mittal',
    role: 'Pro Chancellor',
    org: 'Lovely Professional University',
    category: 'Academia',
    color: '#8B5CF6',
    photos: [
      '/img/meets/rashmi-mittal-1.jpg',
      '/img/meets/rashmi-mittal-2.jpg',
      '/img-1/meets/rashmi-mittal-3.JPG',
    ],
  },
  {
    name: 'Dr. Preeti Bajaj ',
    role: 'Ex: Vice Chancellor LPU, KIET Group, Galgotias University',
    org: '',
    category: 'Academia',
    color: '#E11D48',
    photos: [
      '/img/gallery/1.jpeg',
    ],
  },
  {
    name: 'Dr. Lovi Raj Gupta',
    role: 'Pro Vice Chancellor',
    org: 'Lovely Professional University',
    category: 'Academia',
    color: '#0A66C2',
    photos: [
      '/img/meets/lovi-raj-gupta-1.jpg',
    ],
  },
  {
    name: 'Aman Dhattarwal',
    role: 'Founder',
    org: 'Apna College — India\'s #1 Tech Placement Platform',
    category: 'Educator',
    color: '#10B981',
    photos: [
      '/img/meets/aman-dhattarwal-1.jpg',
      '/img/meets/aman-dhattarwal-2.jpeg',
    ],
  },
  {
    name: 'Vikrant Massey',
    role: 'Actor · "The 12th Fail"',
    org: 'Bollywood',
    category: 'Entertainment',
    color: '#F97316',
    photos: [
      '/img/meets/vikrant-massey-1.jpg',
    ],
  },
  {
    name: 'Saurabh Dwivedi',
    role: '"Achor" · Show Host',
    org: 'Allantop',
    category: 'Media',
    color: '#E11D48',
    photos: [
      '/img/meets/saurabh-dwivedi-1.jpg',
      '/img/meets/saurabh-dwivedi-2.jpg',
    ],
  },
];


// ── 20. CONTACT PAGE & FOOTER ────────────────────────────────────────────────
export const CONTACT = {
  tagline: "Let's Build",
  taglineHighlight: 'Something.',
  subtitle: 'Professor · Consultant · Speaker · Technical Partner.',
  email: 'info.souhardya.bose@gmail.com',   // Update with your email
  phone: '+91 8582988799',                  // Update with your phone number
  location: 'Punjab, India',
  hireMeHref: '/hire',
  footerName: 'Souhardya Bose.',
  copyright: '© 2025 Souhardya Bose. All rights reserved.',
};

// Social media links (used in footer)
export const SOCIAL_LINKS = [
  { platform: 'linkedin', href: 'https://www.linkedin.com/in/souhardya-bose/', label: 'LinkedIn' },
  { platform: 'github', href: 'https://github.com/bose07', label: 'GitHub' },
  { platform: 'youtube', href: 'https://www.youtube.com/@Bose.Bhaiya', label: 'YouTube' },
  { platform: 'mail', href: 'mailto:info.souhardya.bose@gmail.com', label: 'Email' },
];

// ── 21. GALLERY IMAGES ───────────────────────────────────────────────────────
export const GALLERY_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `/img/gallery/${(i % 16) + 1}.jpeg`,
  alt: `Gallery image ${i + 1}`,
}));
