import { useState, useEffect } from 'react';
import { ModeProvider } from '../../contexts/ModeContext';
import { SearchGroupNavigation } from './SearchGroupNavigation';
import { SearchGroupHero } from './SearchGroupHero';
import { SearchGroupWhyWayMaker } from './SearchGroupWhyWayMaker';
import { IndustriesWeServe } from './IndustriesWeServe';
import { SearchGroupFounders } from './SearchGroupFounders';
import { Process } from '../Process';
import { Contact } from '../Contact';
import { Footer } from '../Footer';

export function SearchGroupPage() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'why', 'industries', 'process', 'founders', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F3F4F6] text-[#111827]">
      <ModeProvider>
        <SearchGroupNavigation />
        
        <main>
          <section id="overview">
            <SearchGroupHero />
          </section>
          
          <section id="why">
            <SearchGroupWhyWayMaker />
          </section>
          
          <section id="industries">
            <IndustriesWeServe />
          </section>
          
          <section id="process">
            <div className="relative py-32 px-6 lg:px-12">
              <div className="max-w-[1600px] mx-auto">
                <Process theme="light" />
              </div>
            </div>
          </section>
          
          <section id="founders">
            <SearchGroupFounders />
          </section>
          
          <section id="contact">
            <Contact theme="light" />
          </section>
        </main>
        
        <Footer theme="light" />
      </ModeProvider>
    </div>
  );
}