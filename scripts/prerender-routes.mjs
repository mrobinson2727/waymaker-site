import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const indexPath = path.join(dist, 'index.html')
const template = fs.readFileSync(indexPath, 'utf8')

function detectBase(html) {
  const match = html.match(/(?:src|href)="([^"]*?)assets\/index-[^"]+\.(?:js|css)"/)
  if (!match) return '/'
  const prefix = match[1]
  if (!prefix || prefix === '/') return '/'
  return prefix.endsWith('/') ? prefix : `${prefix}/`
}

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`Built index.html is missing ${label}`)
  }
  return html.replace(pattern, () => replacement)
}

function applyPage(html, page) {
  let next = html
  next = replaceOnce(next, /<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`, 'title')
  next = replaceOnce(
    next,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${page.description}" />`,
    'description',
  )
  next = replaceOnce(
    next,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${page.canonical}" />`,
    'canonical',
  )
  next = replaceOnce(
    next,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${page.title}" />`,
    'og:title',
  )
  next = replaceOnce(
    next,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${page.description}" />`,
    'og:description',
  )
  next = replaceOnce(
    next,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${page.canonical}" />`,
    'og:url',
  )
  next = replaceOnce(
    next,
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${page.image}" />`,
    'og:image',
  )
  next = replaceOnce(
    next,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${page.title}" />`,
    'twitter:title',
  )
  next = replaceOnce(
    next,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${page.description}" />`,
    'twitter:description',
  )
  next = replaceOnce(
    next,
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${page.image}" />`,
    'twitter:image',
  )
  next = replaceOnce(
    next,
    /<script type="application\/ld\+json" id="waymaker-jsonld">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="waymaker-jsonld">${page.jsonLd}</script>`,
    'json-ld',
  )
  if (!next.includes('<div id="root"></div>')) {
    throw new Error('Built index.html is missing an empty <div id="root"></div>')
  }
  next = next.replace('<div id="root"></div>', () => `<div id="root">${page.body}</div>`)
  return next
}

const base = detectBase(template)
const vite = await createServer({
  root,
  base,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { renderPage } = await vite.ssrLoadModule('/scripts/render-page.tsx')
  const pages = [
    ['index.html', 'defense'],
    ['waymaker/index.html', 'waymaker'],
    ['privacy/index.html', 'privacy'],
  ]
  for (const [file, pageName] of pages) {
    const rendered = await renderPage(pageName)
    const required = pageName === 'privacy'
      ? 'Privacy Policy'
      : pageName === 'waymaker'
        ? 'Executive & Technical Search'
        : 'Defense Tech Executive & Cleared Talent Recruiting'
    const visible = rendered.body.replace(/&amp;/g, '&')
    if (!visible.includes(required)) {
      throw new Error(`Prerendered ${pageName} HTML is missing heading: ${required}`)
    }
    const intro = pageName === 'privacy'
      ? 'Effective date: October 16, 2026'
      : 'You are who you hire.'
    if (!visible.includes(intro)) {
      throw new Error(`Prerendered ${pageName} HTML is missing intro copy`)
    }
    if (!/<h2[\s>]/.test(rendered.body)) {
      throw new Error(`Prerendered ${pageName} HTML is missing a section heading`)
    }
    const html = applyPage(template, rendered)
    const destination = path.join(dist, file)
    fs.mkdirSync(path.dirname(destination), { recursive: true })
    fs.writeFileSync(destination, html)
  }
} finally {
  await vite.close()
}
