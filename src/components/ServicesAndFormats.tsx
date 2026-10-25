import React, { useState } from 'react';
import { BrandierWebMark, BrandierStudioHexMark, BrandierTvLogo } from './BrandLogos';
import { ArrowUpRight, CheckCircle2, Globe, Film } from 'lucide-react';

interface ServicesAndFormatsProps {
  theme: 'dark' | 'light';
  onSelectServiceForQuote: (serviceName: string) => void;
}

interface WebDesireTrack {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  metric: string;
}

const WEB_DESIRE_TRACKS: WebDesireTrack[] = [
  {
    index: '01',
    title: 'Liquid-Glass & Editorial Landing Systems',
    subtitle: 'High-Velocity Conversion Architecture',
    description:
      'Custom-engineered around your exact visual reference—combining signature wave motion, liquid-glass controls, and sub-second page speed.',
    deliverables: ['Custom Responsive Grid', 'Dual Light & Night Theme', 'Zero-Flash Instant Paint', 'Direct Lead Funnel'],
    metric: '+185% Lead Conversion Lift',
  },
  {
    index: '02',
    title: 'E-Commerce & Interactive Product Flagships',
    subtitle: 'High-AOV Digital Storefronts',
    description:
      'Turn catalog browsing into a luxury flagship experience with embedded product films, virtual try-on previews, and frictionless checkout flows.',
    deliverables: ['Interactive Product Showcases', 'Commercial Video Integration', 'Custom Cart & Promo Engine', 'Mobile-First Thumb UX'],
    metric: '3.4x Return on Ad Spend',
  },
  {
    index: '03',
    title: 'SaaS Platforms & Custom Web Portals',
    subtitle: 'Full-Stack Bespoke Web Engineering',
    description:
      'From enterprise web applications to interactive client calculators and booking portals—architected from scratch around your business workflow.',
    deliverables: ['TypeScript & React Architecture', 'Interactive Pricing Estimators', 'Custom API & CRM Wiring', 'WCAG AA Contrast & SEO'],
    metric: '99.8 Lighthouse Performance',
  },
];

interface AiAdFormat {
  num: string;
  name: string;
  category: string;
  desc: string;
  outcome: string;
  platforms: string;
}

const AI_AD_FORMATS: AiAdFormat[] = [
  {
    num: '01',
    name: 'Talking Head UGC',
    category: 'Direct Response',
    desc: 'Authentic presenter commercials delivering natural brand narratives that build immediate buyer trust.',
    outcome: 'Replaces costly creator reshoots with scalable multi-hook testing.',
    platforms: 'TikTok · Reels · Shorts',
  },
  {
    num: '02',
    name: 'Cinematic Unboxing',
    category: 'Product Launch',
    desc: 'Frame-by-frame unboxing sequences that highlight packaging craft and material texture in studio lighting.',
    outcome: 'Drives high-intent click-through for physical D2C products.',
    platforms: 'Instagram · Meta · Web',
  },
  {
    num: '03',
    name: 'Product Review',
    category: 'Social Proof',
    desc: 'Credible customer review spots with natural pacing and persuasive storytelling that convert undecided visitors.',
    outcome: 'Reduces CPA across retargeting and mid-funnel campaigns.',
    platforms: 'Meta · TikTok · Storefront',
  },
  {
    num: '04',
    name: 'Step-by-Step Tutorials',
    category: 'Product Authority',
    desc: 'Structured explainer and workflow commercials that demonstrate product value clearly and concisely.',
    outcome: 'Ideal for software platforms, skincare, and hardware.',
    platforms: 'YouTube · LinkedIn · Web',
  },
  {
    num: '05',
    name: 'Virtual Try-On',
    category: 'Fashion & Apparel',
    desc: 'Editorial try-on visuals letting customers see apparel, watches, eyewear, and cosmetics on diverse talent.',
    outcome: 'Lowers return rates and accelerates purchase confidence.',
    platforms: 'Instagram · Pinterest · Shop',
  },
  {
    num: '06',
    name: 'Pro Try-On (Luxury Grade)',
    category: 'Haute Editorial',
    desc: 'Editorial campaigns paired with anamorphic lighting and architectural environments tailored to luxury houses.',
    outcome: 'Flagship campaign prestige at a fraction of traditional studio overhead.',
    platforms: 'Global Digital · Flagship Web',
  },
  {
    num: '07',
    name: 'Broadcast TV Spot',
    category: 'Commercial Production',
    desc: 'Broadcast-grade commercials with sweeping camera choreography, custom sound design, and narrative depth.',
    outcome: 'Built for Connected TV, YouTube Masthead, and Brandier TV.',
    platforms: 'Connected TV · YouTube',
  },
  {
    num: '08',
    name: 'Wild Card Format',
    category: 'Viral Pattern Interrupt',
    desc: 'Bespoke visual hooks, liquid-metal transformations, and unforgettable creative direction that stop the scroll.',
    outcome: 'Engineered for maximum organic shareability and brand recall.',
    platforms: 'All Social & Web Channels',
  },
];

const OFFICIAL_SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/brandiarco/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Brandierstudio' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/brandier-studio/' },
  { label: 'Anas Mehboob', href: 'https://www.linkedin.com/in/anas-mehboob-a4a215361/' },
  { label: 'Facebook', href: 'https://www.facebook.com/brandiarstudio' },
  { label: 'Fiverr', href: 'https://www.fiverr.com/s/akNbvQg' },
];

export const ServicesAndFormats: React.FC<ServicesAndFormatsProps> = ({
  theme,
  onSelectServiceForQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'ads'>('all');
  const isDark = theme === 'dark';

  return (
    <section
      id="benefits"
      className={`relative py-24 px-5 sm:px-10 lg:px-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#000000] border-white/10 text-white' : 'bg-[#F8F7F4] border-zinc-900/10 text-zinc-950'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Official Brandier Main Websites & Social Network Hub (Replaces old logo showcase box) */}
        <div
          className={`mb-20 rounded-2xl border p-6 sm:p-8 transition-colors ${
            isDark
              ? 'bg-zinc-950/85 border-white/15'
              : 'bg-white/95 border-zinc-900/12 shadow-sm'
          }`}
        >
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
            <div className="max-w-lg">
              <div className={`text-xs tracking-wide mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Official Brandier Network · Main Websites &amp; Social Channels
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Our Official Main Websites{' '}
                <span className="serif-italic font-normal">&amp; Broadcast Hub.</span>
              </h2>
              <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <strong>Brandier Web</strong> is part of the official Brandier ecosystem led by Anas Mehboob. Visit our main agency headquarters at <strong>brandierstudio.online</strong> or stream our full commercial showreel on <strong>tv.brandierstudio.online</strong>.
              </p>
            </div>

            {/* Official Main Website & Brandier TV Cards with Official Logos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full xl:w-auto xl:min-w-[660px]">
              <a
                href="https://brandierstudio.online"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-2xl border p-4 sm:p-5 flex items-center justify-between gap-4 transition-all ${
                  isDark
                    ? 'bg-black/80 border-white/15 hover:border-sky-400/60'
                    : 'bg-zinc-50 border-zinc-900/12 hover:border-indigo-500/50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-current/10 flex items-center justify-center shrink-0">
                    <BrandierStudioHexMark theme={theme} size={28} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold tracking-tight whitespace-nowrap">
                      Brandier Studio
                    </div>
                    <div className={`text-xs whitespace-nowrap ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      brandierstudio.online
                    </div>
                  </div>
                </div>
                <span className="btn btn-solid !h-9 !px-4 !text-xs shrink-0">
                  Main Website <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="https://tv.brandierstudio.online/"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-2xl border p-4 sm:p-5 flex items-center justify-between gap-4 transition-all ${
                  isDark
                    ? 'bg-black/80 border-white/15 hover:border-fuchsia-400/60'
                    : 'bg-zinc-50 border-zinc-900/12 hover:border-fuchsia-500/50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-current/10 flex items-center justify-center shrink-0">
                    <BrandierTvLogo size={28} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold tracking-tight whitespace-nowrap">
                      Brandier Studio TV
                    </div>
                    <div className={`text-xs whitespace-nowrap ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      tv.brandierstudio.online
                    </div>
                  </div>
                </div>
                <span className="btn btn-ghost !h-9 !px-4 !text-xs shrink-0">
                  Brandier TV <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Official Social Channels Bar */}
          <div className="mt-6 pt-5 border-t border-current/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs">
              <BrandierWebMark theme={theme} size={22} />
              <span className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>
                Official Social Channels:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {OFFICIAL_SOCIAL_LINKS.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost !h-8 !px-3.5 !text-xs"
                >
                  {soc.label} <ArrowUpRight className="w-3 h-3 opacity-75" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Section Header + Short Liquid Glass Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className={`text-xs font-medium mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Core Capabilities · Bespoke Web Architecture &amp; Commercial Production
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.12] max-w-2xl">
              Websites <span className="serif-italic">On Your Own Desire</span> &amp; Commercials That Convert.
            </h2>
          </div>

          {/* Short Liquid Glass Filter Tabs */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter capabilities"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
              className={`btn !h-10 !px-4 !text-xs ${
                activeTab === 'all' ? 'btn-solid' : 'btn-ghost'
              }`}
            >
              All
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'web'}
              onClick={() => setActiveTab('web')}
              className={`btn !h-10 !px-4 !text-xs ${
                activeTab === 'web' ? 'btn-solid' : 'btn-ghost'
              }`}
            >
              Websites
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'ads'}
              onClick={() => setActiveTab('ads')}
              className={`btn !h-10 !px-4 !text-xs ${
                activeTab === 'ads' ? 'btn-solid' : 'btn-ghost'
              }`}
            >
              Ad Formats
            </button>
          </div>
        </div>

        {/* Division 01: Websites On Your Own Desire */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-current/10">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-sky-400 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                  01. Brandier Web — Custom Websites On Your Own Desire
                </h3>
              </div>
              <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Bespoke Design · Light &amp; Night Mode · Mobile &amp; Desktop Precision
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {WEB_DESIRE_TRACKS.map((track) => (
                <div
                  key={track.index}
                  className={`group rounded-2xl border p-7 flex flex-col justify-between transition-all ${
                    isDark
                      ? 'bg-zinc-950/90 border-white/14 hover:border-white/35'
                      : 'bg-white border-zinc-900/12 hover:border-zinc-900/30 shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-4">
                      <span className={`font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        {track.index}. {track.subtitle}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold tracking-tight mb-3">{track.title}</h4>
                    <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {track.description}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {track.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-current/10 flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-sky-400">{track.metric}</span>
                    <button
                      type="button"
                      onClick={() => onSelectServiceForQuote(`Brandier Web: ${track.title}`)}
                      className="btn btn-ghost !h-9 !px-4 !text-xs"
                    >
                      Get Quote <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Division 02: 8 Signature Ad Formats from brandierstudio.online */}
        {(activeTab === 'all' || activeTab === 'ads') && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-current/10">
              <div className="flex items-center gap-3">
                <Film className="w-5 h-5 text-fuchsia-400 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                  02. Brandier Studio — 8 Signature Commercial Formats
                </h3>
              </div>
              <a
                href="https://brandierstudio.online"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !h-9 !px-4 !text-xs"
              >
                <BrandierStudioHexMark theme={theme} size={18} /> Main Website
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {AI_AD_FORMATS.map((format) => (
                <div
                  key={format.num}
                  className={`rounded-xl border p-6 flex flex-col justify-between transition-all ${
                    isDark
                      ? 'bg-zinc-950/75 border-white/12 hover:border-white/30'
                      : 'bg-white border-zinc-900/10 hover:border-zinc-900/25 shadow-xs'
                  }`}
                >
                  <div>
                    <div className={`text-xs mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {format.num} · {format.category}
                    </div>
                    <h4 className="text-lg font-semibold tracking-tight mb-2">{format.name}</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {format.desc}
                    </p>
                    <p className={`text-xs leading-relaxed mb-4 font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-800'}`}>
                      {format.outcome}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-current/10 flex items-center justify-between gap-2">
                    <span className={`text-[11px] truncate ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {format.platforms}
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectServiceForQuote(`Ad Format ${format.num}: ${format.name}`)}
                      className="btn btn-ghost !h-8 !px-3.5 !text-[11px] shrink-0"
                    >
                      Select →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
