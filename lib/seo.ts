import type { SitePage } from './brand'
import meta from './brand-meta.json'

export const PRODUCTION_ORIGIN = 'https://www.waymakerstaffing.com'

const LOGO_URL = `${PRODUCTION_ORIGIN}/assets/waymaker-logo-regular-small.webp`
const ORG_ID = `${PRODUCTION_ORIGIN}/#organization`
export const COMPANY_LINKEDIN = 'https://www.linkedin.com/company/waymaker-staffing-and-recruiting/'

export function productionUrl(page: SitePage): string {
  if (page === 'waymaker') return `${PRODUCTION_ORIGIN}/waymaker/`
  if (page === 'privacy') return `${PRODUCTION_ORIGIN}/privacy/`
  return `${PRODUCTION_ORIGIN}/`
}

export function shareImage(page: SitePage): string {
  if (page === 'defense') return `${PRODUCTION_ORIGIN}/og/defense.jpg`
  return `${PRODUCTION_ORIGIN}/og/waymaker.jpg`
}

export function structuredData(page: SitePage) {
  const organization = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: 'Waymaker',
    url: `${PRODUCTION_ORIGIN}/`,
    logo: LOGO_URL,
    image: LOGO_URL,
    email: 'info@waymakerstaffing.com',
    sameAs: [COMPANY_LINKEDIN],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dallas–Fort Worth',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Dallas–Fort Worth, Texas, US',
    },
    employee: [
      { '@id': `${PRODUCTION_ORIGIN}/#matt-robinson` },
      { '@id': `${PRODUCTION_ORIGIN}/#ben-robinson` },
    ],
  }

  const people = [
    {
      '@type': 'Person',
      '@id': `${PRODUCTION_ORIGIN}/#matt-robinson`,
      name: 'Matt Robinson',
      jobTitle: 'Co-founder',
      worksFor: { '@id': ORG_ID },
      sameAs: ['https://www.linkedin.com/in/matt-j-robinson2/'],
    },
    {
      '@type': 'Person',
      '@id': `${PRODUCTION_ORIGIN}/#ben-robinson`,
      name: 'Ben Robinson',
      jobTitle: 'Co-founder',
      worksFor: { '@id': ORG_ID },
      sameAs: ['https://www.linkedin.com/in/benrobinson3/'],
    },
  ]

  const graph: Record<string, unknown>[] = [organization, ...people]

  if (page === 'defense' || page === 'waymaker') {
    graph.push({
      '@type': 'Service',
      name: page === 'defense'
        ? 'Defense Tech Executive & Cleared Talent Recruiting'
        : 'Executive & Technical Search',
      serviceType: page === 'defense' ? 'Defense technology recruiting' : 'Executive search',
      provider: { '@id': ORG_ID },
      areaServed: 'Dallas–Fort Worth, Texas, US',
      url: productionUrl(page),
      description: meta[page].description,
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  const element = document.querySelector(`meta[${attr}="${key}"]`)
  if (element) element.setAttribute('content', value)
}

export function applyDocumentMeta(page: SitePage) {
  if (typeof document === 'undefined') return
  const pageMeta = meta[page]
  document.title = pageMeta.title
  setMeta('name', 'description', pageMeta.description)
  setMeta('property', 'og:title', pageMeta.title)
  setMeta('property', 'og:description', pageMeta.description)
  setMeta('property', 'og:url', productionUrl(page))
  setMeta('property', 'og:image', shareImage(page))
  setMeta('name', 'twitter:title', pageMeta.title)
  setMeta('name', 'twitter:description', pageMeta.description)
  setMeta('name', 'twitter:image', shareImage(page))
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', productionUrl(page))
  const jsonLd = document.getElementById('waymaker-jsonld')
  if (jsonLd) jsonLd.textContent = JSON.stringify(structuredData(page))
}
