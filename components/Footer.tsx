import { pathForPage } from '../lib/brand';
import { COMPANY_LINKEDIN } from '../lib/seo';

export function Footer({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const muted = theme === 'light' ? 'text-[#6B7280]' : 'text-[#4B4B55]';
  const link = theme === 'light'
    ? 'text-[#4B5563] hover:text-[#111827]'
    : 'text-[#9CA3AF] hover:text-[#F9FAFB]';

  return (
    <footer className={`border-t ${
      theme === 'light' 
        ? 'border-[#E5E7EB] bg-white' 
        : 'border-[#1C1C22] bg-[#050505]'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">
        <div className={`text-xs text-center space-y-3 ${muted}`}>
          <p>{theme === 'light' ? 'Waymaker - Executive & Technical Search' : 'Waymaker - Executive & Defense Tech Recruiting'}</p>
          <p>© 2026 Waymaker · Dallas–Fort Worth, Texas · Website designed by Patrick Sherlund</p>
          <p>
            <a
              href={COMPANY_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link} underline underline-offset-4`}
            >
              LinkedIn
            </a>
            <span className="mx-3" aria-hidden="true">·</span>
            <a href={pathForPage('privacy')} className={`${link} underline underline-offset-4`}>
              Privacy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
