import { Button } from '../ui/Button';
import { useMode } from '../../contexts/ModeContext';
import { TypingEffect } from '../TypingEffect';
import { publicAsset } from '../../lib/brand';
import { useRef, useEffect } from 'react';

export function SearchGroupHero() {
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
        poster={publicAsset('videos/waymaker-poster.jpg')}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={publicAsset('videos/WAYMAKER-PRIVATE.mp4')} type="video/mp4" />
      </video>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/20 to-white/40" />

      {/* Background Grid - Light */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#9CA3AF 1px, transparent 1px), linear-gradient(90deg, #9CA3AF 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Background Arc - Light */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#DC2626]/[0.03] blur-3xl" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-20 w-full">
        {/* Centered Content */}
        <div className="max-w-[1040px] mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-xs uppercase tracking-[0.2em] text-[#DC2626] drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]">
              Executive & Technical Search
            </h1>
            <p className="text-5xl lg:text-7xl text-[#111827] leading-[1.1] drop-shadow-[0_1px_3px_rgba(255,255,255,0.3)]">
              <TypingEffect 
                text="You are who you hire."
                className="text-5xl lg:text-7xl text-[#111827] leading-[1.1] drop-shadow-[0_1px_3px_rgba(255,255,255,0.3)]"
                typingSpeed={50}
              />
            </p>
            <p className="text-lg text-[#1F2937] max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]">
              {isHiringMode
                ? 'Waymaker partners with high-growth and enterprise companies to place executive and technical talent who actually ship real products and outcomes—not just fill seats.'
                : 'Waymaker connects high-performing professionals with curated executive and technical roles in critical industries.'}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => scrollToSection(isHiringMode ? '#contact' : '#industries')}
                className="px-6 py-3 rounded-lg bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-lg hover:shadow-xl"
              >
                {isHiringMode ? 'Schedule a call' : 'See curated roles'}
              </button>
              <button 
                onClick={() => scrollToSection(isHiringMode ? '#process' : '#contact')}
                className="px-6 py-3 rounded-lg bg-white text-[#DC2626] border border-[#E5E7EB] hover:border-[#DC2626] transition-colors"
              >
                {isHiringMode ? 'See our process' : 'Share your profile'}
              </button>
            </div>

            <button 
              onClick={() => scrollToSection(isHiringMode ? '#industries' : '#process')}
              className="text-sm text-[#374151] hover:text-[#111827] underline underline-offset-4 transition-colors"
            >
              {isHiringMode ? 'View example searches' : 'How we work with candidates'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}