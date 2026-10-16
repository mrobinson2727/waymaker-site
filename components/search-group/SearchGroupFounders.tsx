import { useState } from 'react';
import { Chip } from '../ui/Chip';
import { publicAsset } from '../../lib/brand';

const benImage = publicAsset('assets/ben.png');
const mattImage = publicAsset('assets/matt.png');

export function SearchGroupFounders() {
  const [hoveredFounder, setHoveredFounder] = useState<number | null>(null);

  const founders = [
    {
      name: 'Ben Robinson',
      title: 'CO-FOUNDER',
      tagline: '13+ years in tech recruiting',
      bio: 'Over a decade of experience managing mission-critical recruiting initiatives for Fortune 10 enterprises all the way to early-stage startups.  Career highlights include the placement of hundreds of top professionals in areas of software engineering, AI/ML, QA, DevOps, GTM, Engineering and related disciplines. Produced multiple eight figures of recruiting transactions.',
      tags: ['Executive search', 'Tech recruiting', 'AI/ML hiring'],
      image: benImage
    },
    {
      name: 'Matt Robinson',
      title: 'CO-FOUNDER',
      tagline: 'Marine officer & technology leader',
      bio: '10 years as a Marine Corps infantry officer, with a focus on technology leadership in the last six. Deputy Director helping stand up the Marine Corps Software Factory in Austin, overseeing 12 applications across the services. Master\'s in Modeling & Simulation and a Finance degree.',
      tags: ['Marine Corps', 'Software factory', 'Leadership'],
      image: mattImage
    }
  ];

  return (
    <div id="founders" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#DC2626]">
              Founders
            </p>
            <h2 className="text-4xl lg:text-5xl text-[#111827] leading-[1.15] max-w-[760px]">
              Led by people who understand both worlds.
            </h2>
          </div>

          {/* Main Co-Founders Card */}
          <div className="relative rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            
            {/* Top Red Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent opacity-60" />
            
            {/* Card Content */}
            <div className="p-8 lg:p-12">
              
              {/* Shared Header Row */}
              <div className="space-y-4 mb-12 pb-8 border-b border-[#E5E7EB]">
                <div className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                  Waymaker Leadership
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                </div>
              </div>

              {/* Portrait Band - Featured Photos (Desktop Only) */}
              <div className="hidden lg:block mb-12 pb-12 border-b border-[#E5E7EB]">
                {/* Subtle connecting background */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-3xl h-32 bg-gradient-to-r from-transparent via-[#F3F4F6] to-transparent rounded-full blur-2xl" />
                  </div>

                  {/* Two Portrait Blocks */}
                  <div className="relative grid grid-cols-2 gap-16">
                    
                    {/* Ben Robinson Portrait Block */}
                    <div 
                      className="flex flex-col items-center text-center space-y-4"
                      onMouseEnter={() => setHoveredFounder(0)}
                      onMouseLeave={() => setHoveredFounder(null)}
                    >
                      {/* Large Portrait */}
                      <div className="relative">
                        <div className={`w-36 h-36 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                          hoveredFounder === 0 
                            ? 'border-[#DC2626] shadow-[0_0_32px_rgba(220,38,38,0.3)]' 
                            : 'border-[#E5E7EB]'
                        }`}>
                          <img
                            src={founders[0].image}
                            alt={founders[0].name}
                            style={{ objectPosition: 'center -15px' }}
                            className={`w-full h-full object-cover transition-all duration-300 ${
                              hoveredFounder === 0 ? 'grayscale-0 scale-105' : 'grayscale'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Name & Credentials */}
                      <div className="space-y-2">
                        <h4 className={`text-2xl transition-colors duration-300 ${
                          hoveredFounder === 0 ? 'text-[#111827]' : 'text-[#4B5563]'
                        }`}>
                          {founders[0].name}
                        </h4>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                          {founders[0].title}
                        </p>
                        <p className="text-sm text-[#DC2626] font-medium">
                          {founders[0].tagline}
                        </p>
                      </div>
                    </div>

                    {/* Matt Robinson Portrait Block */}
                    <div 
                      className="flex flex-col items-center text-center space-y-4"
                      onMouseEnter={() => setHoveredFounder(1)}
                      onMouseLeave={() => setHoveredFounder(null)}
                    >
                      {/* Large Portrait */}
                      <div className="relative">
                        <div className={`w-36 h-36 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                          hoveredFounder === 1 
                            ? 'border-[#DC2626] shadow-[0_0_32px_rgba(220,38,38,0.3)]' 
                            : 'border-[#E5E7EB]'
                        }`}>
                          <img
                            src={founders[1].image}
                            alt={founders[1].name}
                            className={`w-full h-full object-cover transition-all duration-300 ${
                              hoveredFounder === 1 ? 'grayscale-0 scale-105' : 'grayscale'
                            }`}
                            style={{ objectPosition: 'center calc(-10% + 10px)', transform: 'scale(1.5)' }}
                          />
                        </div>
                      </div>

                      {/* Name & Credentials */}
                      <div className="space-y-2">
                        <h4 className={`text-2xl transition-colors duration-300 ${
                          hoveredFounder === 1 ? 'text-[#111827]' : 'text-[#4B5563]'
                        }`}>
                          {founders[1].name}
                        </h4>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                          {founders[1].title}
                        </p>
                        <p className="text-sm text-[#DC2626] font-medium">
                          {founders[1].tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile View - Complete Founder Blocks */}
              <div className="lg:hidden space-y-12 mb-12 pb-12 border-b border-[#E5E7EB]">
                
                {/* Ben Robinson - Complete Block */}
                <div 
                  className="space-y-6"
                  onMouseEnter={() => setHoveredFounder(0)}
                  onMouseLeave={() => setHoveredFounder(null)}
                >
                  {/* Portrait */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className={`w-32 h-32 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                        hoveredFounder === 0 
                          ? 'border-[#DC2626] shadow-[0_0_32px_rgba(220,38,38,0.3)]' 
                          : 'border-[#E5E7EB]'
                      }`}>
                        <img
                          src={founders[0].image}
                          alt={founders[0].name}
                          style={{ objectPosition: 'center -15px' }}
                          className={`w-full h-full object-cover transition-all duration-300 ${
                            hoveredFounder === 0 ? 'grayscale-0 scale-105' : 'grayscale'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className={`text-2xl transition-colors duration-300 ${
                        hoveredFounder === 0 ? 'text-[#111827]' : 'text-[#4B5563]'
                      }`}>
                        {founders[0].name}
                      </h4>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                        {founders[0].title}
                      </p>
                      <p className="text-sm text-[#DC2626] font-medium">
                        {founders[0].tagline}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-[#6B7280] leading-relaxed text-center">
                    {founders[0].bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founders[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs border transition-all duration-300 ${
                          hoveredFounder === 0 
                            ? 'border-[#DC2626] bg-[#FEE2E2] text-[#B91C1C]' 
                            : 'border-[#E5E7EB] bg-[#F9FAFB] text-[#6B7280]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />

                {/* Matt Robinson - Complete Block */}
                <div 
                  className="space-y-6"
                  onMouseEnter={() => setHoveredFounder(1)}
                  onMouseLeave={() => setHoveredFounder(null)}
                >
                  {/* Portrait */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className={`w-32 h-32 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                        hoveredFounder === 1 
                          ? 'border-[#DC2626] shadow-[0_0_32px_rgba(220,38,38,0.3)]' 
                          : 'border-[#E5E7EB]'
                      }`}>
                        <img
                          src={founders[1].image}
                          alt={founders[1].name}
                          className={`w-full h-full object-cover transition-all duration-300 ${
                            hoveredFounder === 1 ? 'grayscale-0 scale-105' : 'grayscale'
                          }`}
                          style={{ objectPosition: 'center calc(-10% + 11.6px)', transform: 'scale(1.5)' }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className={`text-2xl transition-colors duration-300 ${
                        hoveredFounder === 1 ? 'text-[#111827]' : 'text-[#4B5563]'
                      }`}>
                        {founders[1].name}
                      </h4>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">
                        {founders[1].title}
                      </p>
                      <p className="text-sm text-[#DC2626] font-medium">
                        {founders[1].tagline}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-[#6B7280] leading-relaxed text-center">
                    {founders[1].bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founders[1].tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs border transition-all duration-300 ${
                          hoveredFounder === 1 
                            ? 'border-[#DC2626] bg-[#FEE2E2] text-[#B91C1C]' 
                            : 'border-[#E5E7EB] bg-[#F9FAFB] text-[#6B7280]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio Band - Two Text Columns (Desktop Only) */}
              <div className="hidden lg:block relative mb-12">
                <div className="grid grid-cols-2 gap-16">
                  
                  {/* Ben's Bio Column */}
                  <div 
                    className="space-y-6"
                    onMouseEnter={() => setHoveredFounder(0)}
                    onMouseLeave={() => setHoveredFounder(null)}
                  >
                    {/* Bio Text */}
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {founders[0].bio}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {founders[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 rounded text-xs border transition-all duration-300 ${
                            hoveredFounder === 0 
                              ? 'border-[#DC2626] bg-[#FEE2E2] text-[#B91C1C]' 
                              : 'border-[#E5E7EB] bg-[#F9FAFB] text-[#6B7280]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Divider (Desktop Only) */}
                  <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E5E7EB] to-transparent" />

                  {/* Matt's Bio Column */}
                  <div 
                    className="space-y-6"
                    onMouseEnter={() => setHoveredFounder(1)}
                    onMouseLeave={() => setHoveredFounder(null)}
                  >
                    {/* Bio Text */}
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {founders[1].bio}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {founders[1].tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 rounded text-xs border transition-all duration-300 ${
                            hoveredFounder === 1 
                              ? 'border-[#DC2626] bg-[#FEE2E2] text-[#B91C1C]' 
                              : 'border-[#E5E7EB] bg-[#F9FAFB] text-[#6B7280]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Joint Metrics Strip */}
              <div className="pt-8">
                <div className="grid grid-cols-3 gap-8">
                  
                  {/* Metric 1 */}
                  <div className="text-center space-y-2">
                    <div className="text-2xl lg:text-3xl text-[#DC2626] font-medium">
                      23+
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF]">
                      Years combined in<br />tech & leadership
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="text-center space-y-2">
                    <div className="text-2xl lg:text-3xl text-[#DC2626] font-medium">
                      400+
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF]">
                      Candidate offers<br />accepted
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="text-center space-y-2">
                    <div className="text-2xl lg:text-3xl text-[#DC2626] font-medium">
                      12
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF]">
                      Mission-critical<br />apps overseen
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
