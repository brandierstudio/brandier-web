import React, { useState } from 'react';
import { Play, MonitorSmartphone } from 'lucide-react';
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

interface WebBlueprint {
  id: string;
  title: string;
  domain: string;
  styleTag: string;
  summary: string;
  metrics: string;
}

const WEB_BLUEPRINTS: WebBlueprint[] = [
  {
    id: 'wb-1',
    title: 'Obsidian Liquid-Glass Flagship',
    domain: 'B2B Tech & SaaS Platform',
    styleTag: 'Single & Multi-Viewport Architecture',
    summary:
      'Full-bleed Brandier gradient wave hero, liquid-glass capsule navigation, Instrument Serif editorial accents, and instant calculators.',
    metrics: '99.8 Lighthouse Score',
  },
  {
    id: 'wb-2',
    title: 'Alabaster & Obsidian Luxury Storefront',
    domain: 'High-AOV E-Commerce Desire',
    styleTag: 'Dual Light/Night Editorial Commerce',
    summary:
      'Interactive product inspection, embedded commercial reels, instant VIP concierge routing, and bespoke editorial typography.',
    metrics: '+140% Checkout Conversion',
  },
  {
    id: 'wb-3',
    title: 'Global Creative & Broadcast Portal',
    domain: 'Agency & Video Showreel Network',
    styleTag: 'Interactive Showreel & Pricing Engine',
    summary:
      'Seamless integration of 8 commercial formats, live promo-code pricing matrix, and multi-channel lead dispatch.',
    metrics: '60+ Campaigns Delivered',
  },
];

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  theme,
  onSelectProjectForQuote,
}) => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [selectedBlueprint, setSelectedBlueprint] = useState<string>('wb-1');
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
              Selected Work &amp; Live Architectures · Proof of Impact
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.12]">
              Websites &amp; Commercials That{' '}
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
              className="btn btn-ghost"
            >
              <BrandierTvLogo size={18} />
              <span>Brandier TV</span>
            </a>
          </div>
        </div>

        {/* Part 1: Interactive "Websites On Your Own Desire" Blueprints */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-medium tracking-tight flex items-center gap-2.5">
              <MonitorSmartphone className="w-5 h-5 text-sky-400" />
              Interactive Web Desire Blueprints
            </h3>
            <span className={`text-xs hidden sm:inline ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Select any architecture to customize
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {WEB_BLUEPRINTS.map((bp) => {
              const isSelected = selectedBlueprint === bp.id;
              return (
                <div
                  key={bp.id}
                  onClick={() => setSelectedBlueprint(bp.id)}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all cursor-pointer ${
                    isSelected
                      ? isDark
                        ? 'bg-zinc-900/95 border-sky-400/70 shadow-lg'
                        : 'bg-white border-zinc-900 shadow-md'
                      : isDark
                      ? 'bg-zinc-950/80 border-white/12 hover:border-white/30'
                      : 'bg-white/85 border-zinc-900/12 hover:border-zinc-900/30'
                  }`}
                >
                  <div>
                    <div
                      className="rounded-xl p-4 mb-5 border border-white/15 relative overflow-hidden h-40 flex flex-col justify-between"
                      style={{
                        background:
                          bp.id === 'wb-1'
                            ? 'radial-gradient(circle at 75% 25%, rgba(56,189,248,0.34), rgba(99,102,241,0.28) 45%, rgba(244,114,182,0.18) 75%, #050508 95%)'
                            : bp.id === 'wb-2'
                            ? 'linear-gradient(135deg, #18181b 0%, #312e81 55%, #4c1d95 100%)'
                            : 'linear-gradient(135deg, #090d16 0%, #1e1b4b 50%, #701a75 100%)',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BrandierWebMark theme="dark" size={24} />
                          <span className="text-[11px] font-medium text-white/90 tracking-tight">
                            {bp.domain}
                          </span>
                        </div>
                        <BrandierStudioHexMark theme="dark" size={20} />
                      </div>

                      <div>
                        <div className="text-xs text-sky-300/90 mb-0.5">{bp.styleTag}</div>
                        <div className="text-sm font-semibold text-white tracking-tight">
                          {bp.title}
                        </div>
                      </div>
                    </div>

                    <div className={`text-xs mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {bp.domain} · {bp.styleTag}
                    </div>
                    <h4 className="text-lg font-semibold tracking-tight mb-2">{bp.title}</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {bp.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-current/10 flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-sky-400 truncate">{bp.metrics}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProjectForQuote(`Custom Web Architecture: ${bp.title}`);
                      }}
                      className="btn btn-ghost !h-8 !px-3.5 !text-xs shrink-0"
                    >
                      Customize →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: 4 Official Brandier Studio Commercials */}
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
            {OFFICIAL_VIDEOS.map((video) => {
              const isPlaying = playingVideoId === video.id;
              return (
                <div
                  key={video.id}
                  className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all ${
                    isDark
                      ? 'bg-zinc-950/90 border-white/14 hover:border-white/30'
                      : 'bg-white border-zinc-900/12 hover:border-zinc-900/30 shadow-xs'
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
                          <span className="btn btn-ghost !h-8 !px-3.5 !text-xs shrink-0">
                            Watch Film
                          </span>
                        </div>
                      </button>
                    )}
                  </div>

                  <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {video.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => onSelectProjectForQuote(`Campaign Style: ${video.title}`)}
                      className="btn btn-ghost !h-9 !px-4 !text-xs shrink-0"
                    >
                      Similar Ad
                    </button>
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
