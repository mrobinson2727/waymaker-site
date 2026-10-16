import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { PersonaToggle } from './ui/PersonaToggle';
import { BrandToggle } from './ui/BrandToggle';
import { ContactButton } from './ui/ContactButton';
import { useMode } from '../contexts/ModeContext';
import { publicAsset } from '../lib/brand';

const logoImage = publicAsset('assets/small-logo.png');

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode, setMode } = useMode();

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Why Waymaker', href: '#why' },
    { label: 'Roles We Fill', href: '#roles' },
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-[#2A2A32]">
        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left Group */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center hover:opacity-80 transition-opacity shrink-0"
            >
              <img src={logoImage} alt="WayMaker" className="h-9 lg:h-11 w-auto" />
            </button>

            {/* Desktop Navigation - Center Group */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute left-0 right-0 bottom-[-4px] h-[1px] bg-[#B91C1C] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <BrandToggle />
              <div className="hidden lg:flex items-center gap-4">
                <PersonaToggle />
                <ContactButton onClick={() => scrollToSection('#contact')} />
              </div>
              <button
                className="lg:hidden p-2 text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
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
          <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              <PersonaToggle />
              
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-xl text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors duration-200"
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