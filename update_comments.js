const fs = require('fs');
let data = fs.readFileSync('./app/lib/data.js', 'utf8');

data = data.replace(/comments: '500\+',/g, `comments: '500+',
    commentsList: [
      { text: 'Best event at LPU! 🔥', linkedin: 'https://linkedin.com/' },
      { text: 'Networking alone was worth it.', linkedin: 'https://linkedin.com/' },
    ],`);

fs.writeFileSync('./app/lib/data.js', data);
