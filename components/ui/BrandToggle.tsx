import { useBrand } from '../BrandRouter'
import { Brand, pathForBrand } from '../../lib/brand'

const options: { id: Brand; label: string }[] = [
  { id: 'defense', label: 'Defense' },
  { id: 'waymaker', label: 'Waymaker' },
]

export function BrandToggle({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const { page, navigate } = useBrand()

  return (
    <div
      className={`flex items-center gap-1 rounded-full p-1 ${
        theme === 'light'
          ? 'bg-[#F3F4F6] border border-[#E5E7EB]'
          : 'bg-[#111116] border border-[#2A2A32]'
      }`}
      role="group"
      aria-label="Choose a Waymaker brand"
    >
      {options.map((option) => {
        const selected = page === option.id
        return (
          <a
            key={option.id}
            href={pathForBrand(option.id)}
            aria-current={selected ? 'page' : undefined}
            onClick={(event) => {
              if (
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey ||
                event.button !== 0
              ) {
                return
              }
              event.preventDefault()
              navigate(option.id)
            }}
            className={`h-9 rounded-full px-3 flex items-center justify-center text-xs whitespace-nowrap transition-all duration-300 ${
              selected
                ? 'bg-[#B91C1C] text-white'
                : theme === 'light'
                  ? 'text-[#6B7280] hover:bg-white'
                  : 'text-[#9CA3AF] hover:bg-[#1C1C22]'
            }`}
          >
            {option.label}
          </a>
        )
      })}
    </div>
  )
}
