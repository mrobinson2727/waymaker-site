import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const meta = JSON.parse(fs.readFileSync(path.join(root, 'lib/brand-meta.json'), 'utf8'))
const dist = path.join(root, 'dist')
const indexPath = path.join(dist, 'index.html')
const source = fs.readFileSync(indexPath, 'utf8')

function applyMeta(html, page) {
  if (!/<title>[\s\S]*?<\/title>/.test(html)) {
    throw new Error('Built index.html is missing a title element')
  }
  if (!/<meta name="description" content="[^"]*"\s*\/?>/.test(html)) {
    throw new Error('Built index.html is missing a description meta tag')
  }
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${page.description}" />`,
    )
}

fs.writeFileSync(indexPath, applyMeta(source, meta.defense))
fs.mkdirSync(path.join(dist, 'waymaker'), { recursive: true })
fs.writeFileSync(path.join(dist, 'waymaker/index.html'), applyMeta(source, meta.waymaker))
