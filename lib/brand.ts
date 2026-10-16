import brandMetaJson from './brand-meta.json'

export type Brand = 'defense' | 'waymaker'
export type SitePage = 'defense' | 'waymaker' | 'privacy'

export const brandMeta: Record<SitePage, { title: string; description: string }> = brandMetaJson

export function siteBase(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '')
}

export function pathForPage(page: SitePage): string {
  const base = siteBase()
  if (page === 'waymaker') return `${base}/waymaker`
  if (page === 'privacy') return `${base}/privacy`
  return `${base}/`
}

export function pathForBrand(brand: Brand): string {
  return pathForPage(brand)
}

export function pageFromPath(pathname: string): SitePage {
  const base = siteBase()
  let path = pathname
  if (base && path.startsWith(base)) {
    path = path.slice(base.length)
  }
  if (!path.startsWith('/')) path = `/${path}`
  path = path.replace(/\/+$/, '') || '/'
  if (path === '/waymaker') return 'waymaker'
  if (path === '/privacy') return 'privacy'
  return 'defense'
}

export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
