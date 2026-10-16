import meta from './brand-meta.json'

export type Brand = 'defense' | 'waymaker'

export const brandMeta: Record<Brand, { title: string; description: string }> = meta

export function siteBase(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '')
}

export function pathForBrand(brand: Brand): string {
  const base = siteBase()
  return brand === 'waymaker' ? `${base}/waymaker` : `${base}/`
}

export function brandFromPath(pathname: string): Brand {
  const base = siteBase()
  let path = pathname
  if (base && path.startsWith(base)) {
    path = path.slice(base.length)
  }
  if (!path.startsWith('/')) path = `/${path}`
  path = path.replace(/\/+$/, '') || '/'
  return path === '/waymaker' ? 'waymaker' : 'defense'
}

export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
