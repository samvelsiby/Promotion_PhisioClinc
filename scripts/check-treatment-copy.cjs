#!/usr/bin/env node
/**
 * Flags wording in the treatment pages that the College of Physiotherapists of
 * Manitoba "Advertising and Marketing" practice direction (12 June 2025) does not
 * allow: guarantees, superlatives and comparisons, "specialist" language,
 * incentives and free offers. It is a word check, not a legal review.
 *
 * Usage: node scripts/check-treatment-copy.cjs [file ...]
 */
const fs = require('fs')
const path = require('path')

const files = process.argv.slice(2)
if (files.length === 0) files.push(path.join(__dirname, '..', 'app', 'how-we-treat', 'treatmentPages.ts'))

const rules = [
  [/\b(guarantee[ds]?|cures?|cured|permanent(ly)? (fix|relief)|risk[- ]free|pain[- ]free|painless|100%|miracle|instant(ly)?)\b/i, 'F.iii: guarantee or unrealistic expectation'],
  [/\b(proven|clinically proven|always works|works for everyone)\b/i, 'F.iii: unsubstantiated claim'],
  [/\b(best|leading|top[- ]rated|number one|#1|world[- ]class|premier|unmatched|superior|state[- ]of[- ]the[- ]art|cutting[- ]edge|most (effective|advanced|trusted))\b/i, 'F.v: superlative or comparative statement'],
  [/\b(unique|exclusive|only clinic|one of a kind)\b/i, 'F.iv: claim of uniqueness or special advantage'],
  [/\b(specialist|speciali[sz]e[sd]?|speciali[sz]ing|speciali[sz]ed|expert|experts|expertise|advanced)\b/i, 'B/C: specialist or practice-focus language'],
  [/\b(free|discount(ed|s)?|coupon|promo(tion)?|package deal|bundle|gift (card|certificate)|limited[- ]time|special offer|% off|giveaway|raffle|prize)\b/i, 'G/H: incentive or free service'],
  [/\b(better than|unlike other|other clinics)\b/i, 'F.vi: comparison with other providers'],
  [/\b(safe|safely|harmless|no side effects)\b/i, 'F.iii: absolute safety claim (describe the risks instead)'],
  [/\b(detox|toxins?|energy flow|qi|boosts? immunity|wellness)\b/i, 'D: claim outside verifiable physiotherapy practice'],
]

// Text that names a rule in order to rule it out, not to claim it.
const allowed = [/do not offer acupuncture for general wellness/i]

let problems = 0
for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  lines.forEach((line, index) => {
    const text = line.trim()
    // Skip comments and non-copy fields.
    if (/^(\/\/|\/\*|\*)/.test(text) || /^(slug|url|href):/.test(text)) return
    if (allowed.some((pattern) => pattern.test(text))) return
    for (const [pattern, reason] of rules) {
      const match = text.match(pattern)
      if (match) {
        problems += 1
        console.log(`${path.relative(process.cwd(), file)}:${index + 1}  "${match[0]}"  ${reason}`)
      }
    }
  })
}

if (problems > 0) {
  console.log(`\n${problems} wording issue(s) to review.`)
  process.exit(1)
}
console.log('No flagged wording found.')
