import React, { useState } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { BrandierWebMark, BrandierStudioHexMark, BrandierTvLogo } from './BrandLogos';

interface PortfolioShowcaseProps {
  theme: 'dark' | 'light';
  onSelectProjectForQuote: (projectTitle: string) => void;
}

interface VideoCaseStudy {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  metrics: string;
  description: string;
  gradient: string;
}

const OFFICIAL_VIDEOS: VideoCaseStudy[] = [
  {
    id: 'v1',
    youtubeId: 'BNSkWDOEhaE',
    title: 'Self-Publishing Brand Commercial',
    category: 'Narrative UGC Spot · Author Funnel',
    metrics: '+210% Book Funnel ROAS',
    description:
      'Authentic presenter storytelling blended with kinetic typography to scale an author and publishing platform.',
    gradient: 'linear-gradient(135deg, #0a0a14 0%, #1e1b4b 45%, #3b0764 80%, #09090b 100%)',
  },
  {
    id: 'v2',
    youtubeId: 'k7RPSs6QWTQ',
    title: 'High-Velocity Motion Design Spot',
    category: '3D Motion Graphics · SaaS & Tech',
    metrics: '3.8x Thumb-Stop Ratio',
    description:
      'Precision 3D kinetic typography, liquid-glass transitions, and bespoke sound design tailored for digital scale.',
    gradient: 'linear-gradient(135deg, #020818 0%, #0f172a 48%, #1e3a8a 80%, #020617 100%)',
  },
  {
    id: 'v3',
    youtubeId: 'OTII7Z-ecVw',
    title: 'Hublot Timepiece Spec Commercial',
    category: 'Luxury Horology · Broadcast Spot',
    metrics: '92% Production Savings',
    description:
      'Macro metallic reflections, sapphire crystal lighting, and sweeping camera choreography crafted by Brandier Studio.',
    gradient: 'linear-gradient(135deg, #09090b 0%, #18181b 45%, #311042 80%, #050505 100%)',
  },
  {
    id: 'v4',
    youtubeId: 'WYS_mXzY_2Q',
    title: 'Haute Fragrance Social Campaign',
    category: 'Luxury Product Showcase · D2C',
    metrics: '+165% Direct Store CTR',
    description:
      'Sensory visual storytelling with botanical and glass light refraction engineered for luxury e-commerce conversion.',
    gradient: 'linear-gradient(135deg, #0f071e 0%, #3b0764 50%, #701a75 80%, #090514 100%)',
  },
];

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  theme,
  onSelectProjectForQuote,
}) => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const isDark = theme === 'dark';

  return (
    <section
      id="how-it-works"
      className={`py-24 px-5 sm:px-10 lg:px-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050508] border-white/10 text-white' : 'bg-[#EFECE6] border-zinc-900/10 text-zinc-950'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Section Heading + Short Official Website Logo Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className={`text-xs font-medium mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Selected Work &amp; Official Showreel · Proof of Impact
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.12]">
              Commercials &amp; Campaigns That{' '}
              <span className="serif-italic">Set the Standard.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://brandierstudio.online"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
            >
              <BrandierStudioHexMark theme={isDark ? 'light' : 'dark'} size={18} />
              <span>Main Website</span>
            </a>
            <a
              href="https://tv.brandierstudio.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark-glass"
            >
              <BrandierTvLogo size={18} />
              <span>Brandier TV</span>
            </a>
          </div>
        </div>

        {/* Official Brandier Studio Commercials (Kept intact per user request) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h3 className="text-lg sm:text-xl font-medium tracking-tight">
              Official Commercial Showreel (Click Any Film to Play)
            </h3>
            <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              4 Verified Campaigns · Directed by Anas Mehboob
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OFFICIAL_VIDEOS.map((video, idx) => {
              const isPlaying = playingVideoId === video.id;
              return (
                <div
                  key={video.id}
                  className={`rounded-2xl overflow-hidden flex flex-col justify-between transition-all ${
                    idx % 2 === 0 ? 'glass-card-dark' : 'glass-card-frosted'
                  }`}
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingVideoId(video.id)}
                        aria-label={`Play ${video.title}`}
                        className="w-full h-full relative flex flex-col justify-between p-6 text-left group cursor-pointer"
                        style={{ background: video.gradient }}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="text-xs text-white/80 font-medium">
                            {video.category}
                          </span>
                          <BrandierWebMark theme="dark" size={26} />
                        </div>

                        <div className="my-auto self-center w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black text-white transition-all shadow-lg">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>

                        <div className="flex items-end justify-between w-full gap-4">
                          <div>
                            <div className="text-white font-semibold text-base sm:text-lg tracking-tight">
                              {video.title}
                            </div>
                            <div className="text-xs text-sky-300 mt-0.5">{video.metrics}</div>
                          </div>
                          <span className="btn btn-dark-glass !h-8 !px-3.5 !text-xs shrink-0">
                            Watch Film
                          </span>
                        </div>
                      </button>
                    )}
                  </div>

                  <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p
                      className={`text-xs leading-relaxed ${
                        idx % 2 === 0
                          ? 'text-zinc-300'
                          : isDark
                          ? 'text-zinc-300'
                          : 'text-zinc-600'
                      }`}
                    >
                      {video.description}
                    </p>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => onSelectProjectForQuote(`Campaign Style: ${video.title}`)}
                        className="btn btn-ghost !h-9 !px-4 !text-xs shrink-0"
                      >
                        Similar Ad
                      </button>
                      <a
                        href="https://brandierstudio.online/brandier-blog.html#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-solid !h-9 !px-4 !text-xs shrink-0"
                      >
                        Get Quote <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
