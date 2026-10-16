import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PersonaToggle } from '../ui/PersonaToggle';
import { BrandToggle } from '../ui/BrandToggle';
import { publicAsset } from '../../lib/brand';

const logoImage = publicAsset('assets/waymaker-logo-regular-small.webp');

export function SearchGroupNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Why Waymaker', href: '#why' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'Founders', href: '#founders' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E5E7EB]">
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left Group */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center hover:opacity-80 transition-opacity shrink-0"
            >
              <img src={logoImage} alt="WayMaker" width={1024} height={296} className="h-9 lg:h-11 w-auto" />
            </button>

            {/* Desktop Navigation - Center Group */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute left-0 right-0 bottom-[-4px] h-[1px] bg-[#DC2626] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <BrandToggle theme="light" />
              <div className="hidden lg:flex items-center gap-4">
                <PersonaToggle theme="light" />
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="px-4 py-2 rounded-lg bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors text-sm"
                >
                  Talk to our team
                </button>
              </div>
              <button
                className="lg:hidden p-2 text-[#6B7280] hover:text-[#111827] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              <PersonaToggle theme="light" />
              
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-xl text-[#6B7280] hover:text-[#111827] transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}