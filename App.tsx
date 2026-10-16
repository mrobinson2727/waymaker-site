import { ModeProvider } from './contexts/ModeContext';
import { BrandRouter, useBrand } from './components/BrandRouter';
import { SearchGroupPage } from './components/search-group/SearchGroupPage';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WhyWayMaker } from './components/WhyWayMaker';
import { RolesWeOffer } from './components/RolesWeOffer';
import { Process } from './components/Process';
import { Founders } from './components/Founders';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPage } from './components/PrivacyPage';

function DefensePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0B0B10] to-[#050505] text-[#F9FAFB]">
      <ModeProvider>
        <Navigation />

        <main>
          <section id="overview">
            <Hero />
          </section>

          <section id="why">
            <WhyWayMaker />
          </section>

          <section id="roles">
            <RolesWeOffer />
          </section>

          <section id="process">
            <Process />
          </section>

          <section id="founders">
            <Founders />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </ModeProvider>
    </div>
  );
}

export function SiteView() {
  const { page } = useBrand();
  if (page === 'waymaker') return <SearchGroupPage />;
  if (page === 'privacy') return <PrivacyPage />;
  return <DefensePage />;
}

export default function App() {
  return (
    <BrandRouter>
      <SiteView />
    </BrandRouter>
  );
}
