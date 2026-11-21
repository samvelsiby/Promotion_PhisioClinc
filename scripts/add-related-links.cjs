// Adds "related services and next steps" links to blog posts that have no internal links.
// Dry run by default: reads the public dataset and prints what would change.
// Run with --apply only after the clinic has reviewed the list; --apply writes to the
// live site through the Sanity CLI session and never prints the token.
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const PROJECT = 'o1vrge91';
const DATASET = 'production';
const API = `https://${PROJECT}.api.sanity.io/v2023-10-01/data`;

// Keyed by slug. Only applied when the post has no related links yet.
const LINKS = {
  'understanding-acl-injuries-recovery-timelines-and-the-path-to-ret1urn-to-play': [
    { label: 'Sports injury physiotherapy', href: '/services/sports-injuries' },
    { label: 'Hip and knee pain physiotherapy', href: '/services/hip-knee-pain-relief' },
    { label: 'What to expect at your first visit', href: '/first-visit' },
  ],
  'fall-prevention-physiotherapy-in-winnipeg-protecting-seniors-from-the-rising-risk-of-falls': [
    { label: 'Fall prevention physiotherapy', href: '/services/fall-prevention' },
    { label: 'What to expect at your first visit', href: '/first-visit' },
  ],
  'what-is-physiotherapy-and-when-should-you-see-a-physiotherapist': [
    { label: 'Conditions we treat', href: '/what-we-treat' },
    { label: 'Meet the physiotherapy team', href: '/team' },
    { label: 'What to expect at your first visit', href: '/first-visit' },
  ],
  'whiplash-after-a-car-accident-mpi-why-your-recovery-deserves-more-than-a-referral': [
    { label: 'Physiotherapy after a motor vehicle accident', href: '/services/motor-vehicle-accident-recovery' },
    { label: 'MPI physiotherapy: what to bring', href: '/blogs/mpi-physiotherapy-claims-winnipeg' },
    { label: 'What to expect at your first visit', href: '/first-visit' },
  ],
  'simple-stretches-to-ease-desk-job-tension': [
    { label: 'Neck pain physiotherapy', href: '/services/neck-pain-relief' },
    { label: 'Neck pain after desk work', href: '/blogs/neck-pain-desk-work-physiotherapy-winnipeg' },
  ],
  'how-exercise-based-therapy-supports-chronic-pain': [
    { label: 'Chronic pain physiotherapy', href: '/services/chronic-pain-relief' },
    { label: 'What to expect at your first visit', href: '/first-visit' },
  ],
  'recovering-after-a-motor-vehicle-accident': [
    { label: 'Physiotherapy after a motor vehicle accident', href: '/services/motor-vehicle-accident-recovery' },
    { label: 'MPI physiotherapy: what to bring', href: '/blogs/mpi-physiotherapy-claims-winnipeg' },
  ],
  '1-5-signs-it-s-time-to-see-a-physiotherapist': [
    { label: 'Conditions we treat', href: '/what-we-treat' },
    { label: 'What to expect at your first visit', href: '/first-visit' },
  ],
};

async function main() {
  const apply = process.argv.includes('--apply');
  const query = '*[_type == "post" && slug.current in $slugs && !(_id in path("drafts.**"))]{_id, title, "slug": slug.current, "existing": count(relatedLinks)}';
  const url = `${API}/query/${DATASET}?query=${encodeURIComponent(query)}&$slugs=${encodeURIComponent(JSON.stringify(Object.keys(LINKS)))}`;
  const posts = (await (await fetch(url)).json()).result;

  const missing = Object.keys(LINKS).filter((slug) => !posts.some((post) => post.slug === slug));
  if (missing.length) throw new Error(`Posts not found: ${missing.join(', ')}`);

  const mutations = [];
  for (const post of posts) {
    if (post.existing) {
      console.log(`skip   ${post.slug} (already has ${post.existing} related links)`);
      continue;
    }
    const links = LINKS[post.slug].map((link, index) => ({ _key: `link${index}`, _type: 'object', ...link }));
    console.log(`update ${post.slug}\n       ${links.map((link) => link.href).join(', ')}`);
    mutations.push({ patch: { id: post._id, set: { relatedLinks: links } } });
  }

  if (!apply) {
    console.log(`\nDry run: ${mutations.length} posts would change. Nothing was written.`);
    return;
  }

  const token = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.config/sanity/config.json'), 'utf8')).authToken;
  if (!token) throw new Error('Sign into the Sanity CLI before applying.');
  const response = await fetch(`${API}/mutate/${DATASET}?visibility=sync`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutations }),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(JSON.stringify(result.error || result));
  console.log(`Applied: ${result.results.length} posts updated.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
