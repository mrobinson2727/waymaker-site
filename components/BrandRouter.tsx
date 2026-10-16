import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { SitePage, pageFromPath, pathForPage } from '../lib/brand'
import { applyDocumentMeta } from '../lib/seo'

interface BrandContextValue {
  page: SitePage
  navigate: (page: SitePage) => void
}

const BrandContext = createContext<BrandContextValue | undefined>(undefined)

export function BrandRouter({
  children,
  initialPage,
}: {
  children: ReactNode
  initialPage?: SitePage
}) {
  const [page, setPage] = useState<SitePage>(() => {
    if (initialPage) return initialPage
    if (typeof window === 'undefined') return 'defense'
    return pageFromPath(window.location.pathname)
  })

  useEffect(() => {
    applyDocumentMeta(page)
  }, [page])

  useEffect(() => {
    const onPopState = () => {
      setPage(pageFromPath(window.location.pathname))
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (next: SitePage) => {
    if (next !== page) {
      window.history.pushState({ page: next }, '', pathForPage(next))
      setPage(next)
    }
    window.scrollTo(0, 0)
  }

  return (
    <BrandContext.Provider value={{ page, navigate }}>
      {children}
    </BrandContext.Provider>
  )
}

export function useBrand() {
  const context = useContext(BrandContext)
  if (!context) {
    throw new Error('useBrand must be used within a BrandRouter')
  }
  return context
}
