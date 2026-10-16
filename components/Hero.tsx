import { Button } from './ui/Button';
import { useMode } from '../contexts/ModeContext';
import { TypingEffect } from './TypingEffect';
import { publicAsset } from '../lib/brand';
import { useRef, useEffect } from 'react';

export function Hero() {
  const { isHiringMode } = useMode();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented:', err);
      });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={publicAsset('videos/WAYMAKER-DEFENSE.mp4')} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050505]/45" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#4B4B55 1px, transparent 1px), linear-gradient(90deg, #4B4B55 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Background Arc */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#B91C1C]/5 blur-3xl" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-20 w-full">
        {/* Centered Content */}
        <div className="max-w-[1040px] mx-auto text-center space-y-8">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#FCA5A5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Executive & Defense Tech Recruiting
            </p>
            <h1 className="text-5xl lg:text-7xl text-white leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <TypingEffect 
                text="You are who you hire."
                className="text-5xl lg:text-7xl text-white leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                typingSpeed={50}
              />
            </h1>
            <p className="text-lg text-[#E5E7EB] max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {isHiringMode
                ? 'Waymaker partners with defense technology companies to place executive and technical talent who actually ship mission-critical capabilities-not just fill seats.'
                : 'Waymaker connects cleared, mission-aligned professionals with curated executive and technical roles in defense tech.'}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" onClick={() => scrollToSection(isHiringMode ? '#contact' : '#roles')}>
                {isHiringMode ? 'Schedule a call' : 'See curated roles'}
              </Button>
              <Button variant="secondary" onClick={() => scrollToSection(isHiringMode ? '#process' : '#contact')}>
                {isHiringMode ? 'See our process' : 'Share your profile'}
              </Button>
            </div>

            <button 
              onClick={() => scrollToSection(isHiringMode ? '#roles' : '#process')}
              className="text-sm text-[#D1D5DB] hover:text-white underline underline-offset-4 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              {isHiringMode ? 'View example roles' : 'How we work with candidates'}
            </button>
          </div>
        </div>
      </div>

      {/* Tactical Labels */}
      <div className="hidden lg:block absolute bottom-20 left-12 text-[10px] uppercase tracking-widest text-[#4B4B55] space-y-1">
        <div>Cleared</div>
        <div>Unclassified</div>
        <div>Mission-Aligned</div>
      </div>
    </div>
  );
}