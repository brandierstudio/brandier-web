import React, { useState } from 'react';
import { BrandierWebMark, BrandierStudioHexMark, BrandierTvLogo } from './BrandLogos';
import { ArrowUpRight, CheckCircle2, Globe, Film, ChevronDown, BookOpen } from 'lucide-react';

interface ServicesAndFormatsProps {
  theme: 'dark' | 'light';
  onSelectServiceForQuote: (serviceName: string) => void;
}

interface WebDesireTrack {
  index: string;
  title: string;
  subtitle: string;
  shortLine: string;
  description: string;
  aiSystemNote: string;
  deliverables: string[];
  metric: string;
  surfaceType: 'dark' | 'frosted';
}

const WEB_DESIRE_TRACKS: WebDesireTrack[] = [
  {
    index: '01',
    title: 'Liquid-Glass & Editorial Landing Systems',
    subtitle: 'High-Velocity Conversion Architecture',
    shortLine: 'Bespoke single & multi-viewport landing pages with wave motion and sub-second speed.',
    description:
      'Custom-engineered around your exact visual reference—combining signature Brandier wave motion, tactile liquid-glass controls, top-bar ON/OFF theme switching, and sub-second page speed.',
    aiSystemNote:
      'Built on this website: Our AI + React/TypeScript pipeline decodes your reference, synthesizes custom color-graded motion, and wires direct WhatsApp & Email lead funnels.',
    deliverables: [
      'Custom Responsive Desktop & Mobile Grid',
      'Top-Bar Liquid-Glass ON/OFF Theme Switch',
      'Zero-Flash Instant Paint (#000000 & #F8F7F4)',
      'Direct Lead & Quote Dispatch Funnel',
    ],
    metric: '+185% Lead Conversion Lift',
    surfaceType: 'dark',
  },
  {
    index: '02',
    title: 'E-Commerce & Interactive Product Flagships',
    subtitle: 'High-AOV Digital Storefronts',
    shortLine: 'Luxury storefronts with embedded product films, try-on previews, and fast checkout.',
    description:
      'Turn catalog browsing into a luxury flagship experience with embedded Brandier Studio product commercials, interactive variant previews, and frictionless mobile-first checkout flows.',
    aiSystemNote:
      'Built on this website: Combines AI product visual synthesis, interactive pricing/promo calculators, and high-converting video showcases.',
    deliverables: [
      'Interactive Product & Collection Showcases',
      'Embedded AI Commercial Video Reels',
      'Custom Cart, Promo Code & Bundle Engine',
      'Mobile-First Thumb Navigation UX',
    ],
    metric: '3.4x Return on Ad Spend',
    surfaceType: 'frosted',
  },
  {
    index: '03',
    title: 'SaaS Platforms & Custom Web Portals',
    subtitle: 'Full-Stack Bespoke Web Engineering',
    shortLine: 'Enterprise web apps, interactive client calculators, and custom booking portals.',
    description:
      'From enterprise SaaS marketing platforms to interactive client quote builders and booking portals—architected from scratch around your exact business workflow.',
    aiSystemNote:
      'Built on this website: Full-stack TypeScript & React 19 architecture with unit-tested pricing logic, WCAG AA contrast, and instant Vercel/GitHub deployment.',
    deliverables: [
      'TypeScript & React 19 Modular Architecture',
      'Interactive Live Pricing Estimators',
      'Custom API, Webhook & CRM Wiring',
      '99.8 Lighthouse Speed & Technical SEO',
    ],
    metric: '99.8 Lighthouse Performance',
    surfaceType: 'dark',
  },
];

interface AiAdFormat {
  num: string;
  name: string;
  category: string;
  shortLine: string;
  desc: string;
  outcome: string;
  platforms: string;
  surfaceType: 'dark' | 'frosted';
}

const AI_AD_FORMATS: AiAdFormat[] = [
  {
    num: '01',
    name: 'Talking Head UGC',
    category: 'Direct Response',
    shortLine: 'Authentic presenter ads delivering natural brand hooks that build instant buyer trust.',
    desc: 'Authentic presenter commercials delivering natural brand narratives that build immediate buyer trust without studio reshoot delays.',
    outcome: 'Replaces costly creator reshoots with scalable multi-hook testing.',
    platforms: 'TikTok · Reels · Shorts',
    surfaceType: 'dark',
  },
  {
    num: '02',
    name: 'Cinematic Unboxing',
    category: 'Product Launch',
    shortLine: 'Studio-lit unboxing sequences highlighting packaging craft and product texture.',
    desc: 'Frame-by-frame unboxing sequences that highlight packaging craft and material texture in dramatic studio lighting.',
    outcome: 'Drives high-intent click-through for physical D2C products.',
    platforms: 'Instagram · Meta · Web',
    surfaceType: 'frosted',
  },
  {
    num: '03',
    name: 'Product Review',
    category: 'Social Proof',
    shortLine: 'Credible customer review spots with persuasive pacing that convert visitors.',
    desc: 'Credible customer review spots with natural pacing and persuasive storytelling that convert undecided visitors.',
    outcome: 'Reduces CPA across retargeting and mid-funnel campaigns.',
    platforms: 'Meta · TikTok · Storefront',
    surfaceType: 'dark',
  },
  {
    num: '04',
    name: 'Step-by-Step Tutorials',
    category: 'Product Authority',
    shortLine: 'Structured workflow & explainer commercials demonstrating clear product value.',
    desc: 'Structured explainer and workflow commercials that demonstrate product value clearly and concisely in under 45 seconds.',
    outcome: 'Ideal for software platforms, skincare, and hardware.',
    platforms: 'YouTube · LinkedIn · Web',
    surfaceType: 'frosted',
  },
  {
    num: '05',
    name: 'Virtual Try-On',
    category: 'Fashion & Apparel',
    shortLine: 'Editorial try-on visuals showcasing apparel, watches, and cosmetics on talent.',
    desc: 'Editorial try-on visuals letting customers see apparel, watches, eyewear, and cosmetics on diverse studio talent.',
    outcome: 'Lowers return rates and accelerates purchase confidence.',
    platforms: 'Instagram · Pinterest · Shop',
    surfaceType: 'frosted',
  },
  {
    num: '06',
    name: 'Pro Try-On (Luxury Grade)',
    category: 'Haute Editorial',
    shortLine: 'Anamorphic lighting and architectural sets tailored for luxury fashion houses.',
    desc: 'Editorial campaigns paired with anamorphic lighting and architectural environments tailored to luxury houses.',
    outcome: 'Flagship campaign prestige at a fraction of traditional studio overhead.',
    platforms: 'Global Digital · Flagship Web',
    surfaceType: 'dark',
  },
  {
    num: '07',
    name: 'Broadcast TV Spot',
    category: 'Commercial Production',
    shortLine: 'Cinema-grade commercials with sweeping camera choreography and sound design.',
    desc: 'Broadcast-grade commercials with sweeping camera choreography, custom sound design, and narrative depth.',
    outcome: 'Built for Connected TV, YouTube Masthead, and Brandier TV.',
    platforms: 'Connected TV · YouTube',
    surfaceType: 'frosted',
  },
  {
    num: '08',
    name: 'Wild Card Format',
    category: 'Viral Pattern Interrupt',
    shortLine: 'Scroll-stopping visual hooks and liquid-metal transformations built for virality.',
    desc: 'Bespoke visual hooks, liquid-metal transformations, and unforgettable creative direction that stop the scroll immediately.',
    outcome: 'Engineered for maximum organic shareability and brand recall.',
    platforms: 'All Social & Web Channels',
    surfaceType: 'dark',
  },
];

const OFFICIAL_SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/brandiarco/', darkGlass: false },
  { label: 'YouTube', href: 'https://www.youtube.com/@Brandierstudio', darkGlass: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/brandier-studio/', darkGlass: false },
  { label: 'Anas Mehboob', href: 'https://www.linkedin.com/in/anas-mehboob-a4a215361/', darkGlass: true },
  { label: 'Facebook', href: 'https://www.facebook.com/brandiarstudio', darkGlass: false },
  { label: 'Fiverr', href: 'https://www.fiverr.com/s/akNbvQg', darkGlass: true },
];

export const ServicesAndFormats: React.FC<ServicesAndFormatsProps> = ({
  theme,
  onSelectServiceForQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'ads'>('all');
  const [openWebTrack, setOpenWebTrack] = useState<Record<string, boolean>>({});
  const [openAdFormat, setOpenAdFormat] = useState<Record<string, boolean>>({});
  const isDark = theme === 'dark';

  const toggleWebTrack = (index: string) => {
    setOpenWebTrack((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleAdFormat = (num: string) => {
    setOpenAdFormat((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  return (
    <section
      id="benefits"
      className={`relative py-24 px-5 sm:px-10 lg:px-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#000000] border-white/10 text-white' : 'bg-[#F8F7F4] border-zinc-900/10 text-zinc-950'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* =====================================================================
            OFFICIAL BRANDIER MAIN WEBSITES & SOCIAL NETWORK HUB
            (Fixed responsive grid so Main Website & Brandier TV buttons NEVER overflow)
            ===================================================================== */}
        <div
          className={`mb-20 rounded-2xl border p-6 sm:p-8 overflow-hidden transition-colors ${
            isDark
              ? 'bg-zinc-950/90 border-white/15'
              : 'bg-white/95 border-zinc-900/12 shadow-sm'
          }`}
        >
          <div className="flex flex-col gap-6">
            <div className="max-w-2xl">
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

            {/* Official Main Website & Brandier TV Cards — Clean Full-Width 2-Col Grid, Zero Overflow */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              <a
                href="https://brandierstudio.online"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-dark rounded-2xl p-4 sm:p-5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 min-w-0 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                    <BrandierStudioHexMark theme="dark" size={26} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold tracking-tight text-white truncate">
                      Brandier Studio
                    </div>
                    <div className="text-xs text-zinc-400 truncate">
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
                className="glass-card-frosted rounded-2xl p-4 sm:p-5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 min-w-0 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-current/15 flex items-center justify-center shrink-0">
                    <BrandierTvLogo size={26} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold tracking-tight truncate">
                      Brandier Studio TV
                    </div>
                    <div className={`text-xs truncate ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      tv.brandierstudio.online
                    </div>
                  </div>
                </div>
                <span className="btn btn-dark-glass !h-9 !px-4 !text-xs shrink-0">
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
                  className={`btn ${
                    soc.darkGlass ? 'btn-dark-glass' : 'btn-ghost'
                  } !h-8 !px-3.5 !text-xs`}
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
              Core Capabilities · Tap Any Card Below to Open Full Details
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
                activeTab === 'all' ? 'btn-solid' : 'btn-dark-glass'
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
                activeTab === 'ads' ? 'btn-solid' : 'btn-dark-glass'
              }`}
            >
              Ad Formats
            </button>
          </div>
        </div>

        {/* =====================================================================
            DIVISION 01: WEBSITES ON YOUR OWN DESIRE
            (Tap-to-Expand Liquid-Glass Cards — Full Landing System Details Stay Right Here!)
            ===================================================================== */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-current/10">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-sky-400 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                  01. Brandier Web — Custom Websites On Your Own Desire
                </h3>
              </div>
              <a
                href="#system-blog"
                className="btn btn-dark-glass !h-9 !px-4 !text-xs self-start sm:self-auto"
              >
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                <span>How Our AI Web System Works ↓</span>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {WEB_DESIRE_TRACKS.map((track) => {
                const isOpen = !!openWebTrack[track.index];
                const surfaceClass =
                  track.surfaceType === 'dark' ? 'glass-card-dark' : 'glass-card-frosted';

                return (
                  <div
                    key={track.index}
                    className={`rounded-2xl p-6 transition-all duration-300 ${surfaceClass}`}
                  >
                    {/* Compact Tap-to-Open Header */}
                    <div
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      onClick={() => toggleWebTrack(track.index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleWebTrack(track.index);
                        }
                      }}
                      className="cursor-pointer select-none"
                    >
                      <div className="flex items-center justify-between gap-2 text-xs mb-3">
                        <span className="font-mono text-sky-400">
                          {track.index} · {track.subtitle}
                        </span>
                        <span
                          className={`btn ${
                            isOpen ? 'btn-solid' : 'btn-dark-glass'
                          } !h-7 !px-3 !text-[11px] shrink-0`}
                        >
                          {isOpen ? 'Hide' : 'Details'}
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-semibold tracking-tight mb-2">
                        {track.title}
                      </h4>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                          track.surfaceType === 'dark'
                            ? 'text-zinc-300'
                            : isDark
                            ? 'text-zinc-300'
                            : 'text-zinc-600'
                        }`}
                      >
                        {track.shortLine}
                      </p>
                    </div>

                    {/* Expanded Landing System Details (Kept Right Here on This Page!) */}
                    {isOpen && (
                      <div className="pt-4 mb-4 border-t border-current/15 space-y-4">
                        <p
                          className={`text-xs sm:text-sm leading-relaxed ${
                            track.surfaceType === 'dark'
                              ? 'text-zinc-300'
                              : isDark
                              ? 'text-zinc-300'
                              : 'text-zinc-700'
                          }`}
                        >
                          {track.description}
                        </p>

                        <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-400/25 text-xs leading-relaxed text-sky-200">
                          {track.aiSystemNote}
                        </div>

                        <ul className="space-y-2">
                          {track.deliverables.map((item) => (
                            <li key={item} className="flex items-center gap-2.5 text-xs">
                              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-2">
                          <a
                            href="#system-blog"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:underline"
                          >
                            <span>Read Full AI Web System Blog Below ↓</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Bottom Action Bar */}
                    <div className="pt-4 border-t border-current/10 flex items-center justify-between gap-2">
                      <span className="text-xs font-medium text-sky-400 truncate">
                        {track.metric}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href="#system-blog"
                          onClick={() => onSelectServiceForQuote(`Brandier Web: ${track.title}`)}
                          className="btn btn-ghost !h-8 !px-3 !text-[11px]"
                        >
                          System Blog ↓
                        </a>
                        <a
                          href="https://brandierstudio.online/brandier-blog.html#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn ${
                            track.surfaceType === 'dark' ? 'btn-solid' : 'btn-dark-glass'
                          } !h-8 !px-3.5 !text-xs`}
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
        )}

        {/* =====================================================================
            DIVISION 02: 8 SIGNATURE AD FORMATS FROM BRANDIERSTUDIO.ONLINE
            (Tap-to-Expand Liquid-Glass Cards + "Get Quote" Opens brandier-blog.html#)
            ===================================================================== */}
        {(activeTab === 'all' || activeTab === 'ads') && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-current/10">
              <div className="flex items-center gap-3">
                <Film className="w-5 h-5 text-fuchsia-400 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                  02. Brandier Studio — 8 Signature Commercial Formats
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://brandierstudio.online/brandier-blog.html#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid !h-9 !px-4 !text-xs"
                >
                  <BrandierStudioHexMark theme={isDark ? 'light' : 'dark'} size={16} />
                  <span>Ad Formats Blog &amp; Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
              {AI_AD_FORMATS.map((format) => {
                const isOpen = !!openAdFormat[format.num];
                const surfaceClass =
                  format.surfaceType === 'dark' ? 'glass-card-dark' : 'glass-card-frosted';

                return (
                  <div
                    key={format.num}
                    className={`rounded-2xl p-5 transition-all duration-300 ${surfaceClass}`}
                  >
                    {/* Compact Tap-to-Expand Header */}
                    <div
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      onClick={() => toggleAdFormat(format.num)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleAdFormat(format.num);
                        }
                      }}
                      className="cursor-pointer select-none"
                    >
                      <div className="flex items-center justify-between gap-2 text-xs mb-2.5">
                        <span className="text-fuchsia-400 font-medium">
                          {format.num} · {format.category}
                        </span>
                        <span
                          className={`btn ${
                            isOpen ? 'btn-solid' : 'btn-dark-glass'
                          } !h-7 !px-2.5 !text-[11px] shrink-0`}
                        >
                          {isOpen ? 'Hide' : 'Details'}
                          <ChevronDown
                            className={`w-3 h-3 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-semibold tracking-tight mb-1.5">
                        {format.name}
                      </h4>

                      <p
                        className={`text-xs leading-relaxed mb-3 ${
                          format.surfaceType === 'dark'
                            ? 'text-zinc-300'
                            : isDark
                            ? 'text-zinc-300'
                            : 'text-zinc-600'
                        }`}
                      >
                        {format.shortLine}
                      </p>
                    </div>

                    {/* Expanded Full Ad Format Details */}
                    {isOpen && (
                      <div className="pt-3 mb-3 border-t border-current/15 space-y-2.5">
                        <p
                          className={`text-xs leading-relaxed ${
                            format.surfaceType === 'dark'
                              ? 'text-zinc-300'
                              : isDark
                              ? 'text-zinc-300'
                              : 'text-zinc-700'
                          }`}
                        >
                          {format.desc}
                        </p>
                        <p className="text-xs leading-relaxed font-medium text-sky-400">
                          {format.outcome}
                        </p>
                      </div>
                    )}

                    {/* Bottom Action Bar — Clicking Get Quote Opens https://brandierstudio.online/brandier-blog.html# */}
                    <div className="pt-3.5 border-t border-current/10 flex items-center justify-between gap-2">
                      <span
                        className={`text-[11px] truncate ${
                          format.surfaceType === 'dark'
                            ? 'text-zinc-400'
                            : isDark
                            ? 'text-zinc-400'
                            : 'text-zinc-500'
                        }`}
                      >
                        {format.platforms}
                      </span>
                      <a
                        href="https://brandierstudio.online/brandier-blog.html#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${
                          format.surfaceType === 'dark' ? 'btn-solid' : 'btn-dark-glass'
                        } !h-8 !px-3.5 !text-[11px] shrink-0`}
                      >
                        Get Quote <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
