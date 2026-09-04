export const site = {
  name: 'Joshua Cherian Varughese',
  short: 'Joshua Cherian Varughese',
  title: 'Joshua Cherian Varughese - Robotics Engineer',
  role: 'Senior Robotics Engineer · Senior Researcher',
  location: 'Linz, Austria',
  email: 'joshuacherian.v@gmail.com',
  // Phone deliberately omitted - it isn't rendered anywhere, and there's no
  // reason for it to sit in a repo or a published page. Keep it on the CV you
  // send directly.
  linkedin: 'https://www.linkedin.com/in/jcvarughese',
  scholar: 'https://scholar.google.com/citations?user=6MvaaMsAAAAJ&hl=en',
  github: 'https://github.com/joshuacv',
  /**
   * The on-site CV page - no street address, no phone number, safe to index.
   * The original PDF lives in /private (gitignored) and is never served.
   * To offer a PDF download, redact it first, save it as public/cv.pdf, and
   * flip `hasPdf` in src/pages/cv.astro.
   */
  resume: '/cv',
  description:
    'Robotics engineer and researcher with 10+ years across swarm intelligence, ' +
    'industrial mobile robots and autonomous mobility - from embedded firmware ' +
    'to deployed production systems.',
};

// Order mirrors the page flow: About → Work → Research.
export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Research', href: '/research' },
];
