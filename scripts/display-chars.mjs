// Prints every non-ASCII character set in display serif type on the built
// zh page, for regenerating public/fonts/hive-serif-sc.woff2 (see the
// comment above @font-face in src/styles/global.css). Run after `pnpm build`.
import { readFileSync } from 'node:fs'

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8')
const open = /<(\w+)\b[^>]*class="[^"]*\btype-(?:display|subhead|manifesto|wordmark|h2)\b[^"]*"[^>]*>/g
const chars = new Set()

for (const m of html.matchAll(open)) {
  const tag = m[1]
  const tagRe = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'g')
  tagRe.lastIndex = m.index + m[0].length
  let depth = 1
  let end = html.length
  for (const t of html.slice(tagRe.lastIndex).matchAll(new RegExp(tagRe.source, 'g'))) {
    depth += t[1] ? -1 : 1
    if (depth === 0) { end = tagRe.lastIndex + t.index; break }
  }
  const text = html.slice(m.index + m[0].length, end).replace(/<[^>]+>/g, '')
  for (const ch of text) if (ch.codePointAt(0) > 0x7f) chars.add(ch)
}

if (chars.size === 0) throw new Error('No display text found — did `pnpm build` run?')
process.stdout.write([...chars].sort().join(''))
