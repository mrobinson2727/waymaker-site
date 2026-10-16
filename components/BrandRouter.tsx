import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Brand, brandFromPath, brandMeta, pathForBrand } from '../lib/brand'

interface BrandContextValue {
  brand: Brand
  navigate: (brand: Brand) => void
}

const BrandContext = createContext<BrandContextValue | undefined>(undefined)

function applyBrandMeta(brand: Brand) {
  const page = brandMeta[brand]
  document.title = page.title
  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', page.description)
}

export function BrandRouter({ children }: { children: ReactNode }) {
  const [brand, setBrand] = useState<Brand>(() => brandFromPath(window.location.pathname))

  useEffect(() => {
    applyBrandMeta(brand)
  }, [brand])

  useEffect(() => {
    const onPopState = () => {
      setBrand(brandFromPath(window.location.pathname))
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (next: Brand) => {
    if (next !== brand) {
      window.history.pushState({ brand: next }, '', pathForBrand(next))
      setBrand(next)
    }
    window.scrollTo(0, 0)
  }

  return (
    <BrandContext.Provider value={{ brand, navigate }}>
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
