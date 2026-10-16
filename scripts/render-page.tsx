import { renderToString } from 'react-dom/server'
import { BrandRouter } from '../components/BrandRouter'
import { SiteView } from '../App'
import type { SitePage } from '../lib/brand'
import { productionUrl, shareImage, structuredData } from '../lib/seo'
import { brandMeta } from '../lib/brand'

export function renderPage(page: SitePage) {
  const body = renderToString(
    <BrandRouter initialPage={page}>
      <SiteView />
    </BrandRouter>,
  )
  return {
    body,
    title: brandMeta[page].title,
    description: brandMeta[page].description,
    canonical: productionUrl(page),
    image: shareImage(page),
    jsonLd: JSON.stringify(structuredData(page)).replace(/</g, '\\u003c'),
  }
}
