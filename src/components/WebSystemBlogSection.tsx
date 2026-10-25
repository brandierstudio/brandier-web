import React, { useState } from 'react';
import { BrandierWebMark, BrandierStudioHexMark } from './BrandLogos';
import {
  ChevronDown,
  Cpu,
  Layers,
  Sparkles,
  Rocket,
  CheckCircle2,
  ArrowUpRight,
  BookOpen,
} from 'lucide-react';

interface WebSystemBlogSectionProps {
  theme: 'dark' | 'light';
  onSelectForQuote: (serviceLabel: string) => void;
}

interface SystemStage {
  id: string;
  stage: string;
  title: string;
  shortLine: string;
  readTime: string;
  icon: React.ReactNode;
  surfaceType: 'dark' | 'frosted';
  deepDive: string;
  aiWorkflowPoints: string[];
  deliverableOutcome: string;
}

const SYSTEM_STAGES: SystemStage[] = [
  {
    id: 'stage-01',
    stage: 'Stage 01 · Reference & Desire Decoding',
    title: 'Visual Blueprinting Around Your Exact Desire',
    shortLine: 'We decode your brand reference, layout geometry, and buyer psychology before writing a single line of code.',
    readTime: 'Step 1 of 4',
    icon: <Sparkles className="w-5 h-5 text-sky-400 shrink-0" />,
    surfaceType: 'dark',
    deepDive:
      'Every Brandier Web project starts with your exact vision ("Websites On Your Own Desire"). Whether you love a luxury obsidian single-viewport experience, an editorial e-commerce flagship, or a custom SaaS calculator portal, our creative direction team led by Anas Mehboob maps the exact typography scale, color tokens, and conversion hierarchy.',
    aiWorkflowPoints: [
      'AI-assisted visual reference & competitor teardown for your niche',
      'Custom typography pairing (Display Serif + Geometric Sans + Tabular Metrics)',
      'Conversion wireframing so every scroll leads directly to an inquiry or purchase',
      'Dual-theme token mapping (#000000 Pure Obsidian & #F8F7F4 Warm Alabaster)',
    ],
    deliverableOutcome: 'Approved Interactive Design System & Token Blueprint in 48 Hours',
  },
  {
    id: 'stage-02',
    stage: 'Stage 02 · AI Visual & Motion Synthesis',
    title: 'Bespoke Particle Waves, Liquid Glass & Brand Assets',
    shortLine: 'Custom color-graded motion backgrounds and studio visuals generated specifically for your brand palette.',
    readTime: 'Step 2 of 4',
    icon: <Cpu className="w-5 h-5 text-indigo-400 shrink-0" />,
    surfaceType: 'frosted',
    deepDive:
      'Instead of relying on generic stock templates, our AI design pipeline synthesizes custom visual assets, color-graded particle wave animations matched to your exact logo gradient, and tactile Liquid-Glass surfaces with real specular reflections.',
    aiWorkflowPoints: [
      'Logo-matched iridescent wave color-grading (Sky Cyan → Royal Cobalt → Violet → Rose)',
      'Authentic studio imagery and realistic client/product visuals with zero stock clichés',
      'Tactile Liquid-Glass buttons (.btn-solid, .btn-dark-glass, .btn-ghost) with 190% backdrop saturation',
      'Hardware-accelerated CSS & WebM/MP4 motion loops that run smoothly at 60fps',
    ],
    deliverableOutcome: '100% Custom Visual & Motion Asset Library Tailored to Your Brand',
  },
  {
    id: 'stage-03',
    stage: 'Stage 03 · Sub-Second React & TypeScript Engineering',
    title: 'Zero-Flash Architecture & Responsive Precision',
    shortLine: 'Hand-crafted React 19, TypeScript, and Tailwind v4 code engineered for instant paint on every device.',
    readTime: 'Step 3 of 4',
    icon: <Layers className="w-5 h-5 text-fuchsia-400 shrink-0" />,
    surfaceType: 'dark',
    deepDive:
      'AI helps us prototype rapidly, while our senior engineering standards guarantee production-grade reliability. We enforce instant zero-flash black/light rendering, tap-to-expand progressive disclosure cards so mobile screens never feel cluttered, and strict WCAG AA contrast legibility.',
    aiWorkflowPoints: [
      'Zero-flash instant paint lock on <html> and <body> with top-bar ON/OFF theme switch',
      'Tap-to-expand interactive card architecture for clean, clutter-free reading on mobile & desktop',
      'Interactive live pricing & promo-code calculators wired with unit-tested business logic',
      '99+ Google Lighthouse performance, semantic SEO meta tags, and instant Vercel/GitHub deployment',
    ],
    deliverableOutcome: 'Production-Ready Codebase Deployed Live on Your Custom Domain',
  },
  {
    id: 'stage-04',
    stage: 'Stage 04 · Commercial Film & Funnel Integration',
    title: 'Merging Custom Web With Brandier Studio AI Commercials',
    shortLine: 'We embed high-converting AI UGC spots, 3D motion reels, and direct WhatsApp/Email lead routing.',
    readTime: 'Step 4 of 4',
    icon: <Rocket className="w-5 h-5 text-emerald-400 shrink-0" />,
    surfaceType: 'frosted',
    deepDive:
      'A beautiful website needs high-converting traffic and persuasive video proof. Because Brandier Web is part of Brandier Studio (brandierstudio.online & tv.brandierstudio.online), we pair your landing system with our 8 signature AI commercial formats—turning cold visitors into booked clients.',
    aiWorkflowPoints: [
      'Seamless embedding of Talking Head UGC, 3D Motion Spots, and Luxury Product Commercials',
      'One-tap floating WhatsApp concierge & multi-channel Email/Brief dispatch',
      ' Synchronized ad-to-landing-page visual continuity that boosts ROAS up to 3.4x',
      'Full post-launch support, analytics verification, and ad creative scaling',
    ],
    deliverableOutcome: 'Complete Revenue-Ready Website + Commercial Growth Engine',
  },
];

export const WebSystemBlogSection: React.FC<WebSystemBlogSectionProps> = ({
  theme,
  onSelectForQuote,
}) => {
  const [openStageIds, setOpenStageIds] = useState<Record<string, boolean>>({
    'stage-01': true,
  });
  const [showFullGuideModal, setShowFullGuideModal] = useState<boolean>(false);
  const isDark = theme === 'dark';

  const toggleStage = (id: string) => {
    setOpenStageIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAllStages = () => {
    const allOpen = SYSTEM_STAGES.every((s) => openStageIds[s.id]);
    if (allOpen) {
      setOpenStageIds({ 'stage-01': true });
    } else {
      const next: Record<string, boolean> = {};
      SYSTEM_STAGES.forEach((s) => {
        next[s.id] = true;
      });
      setOpenStageIds(next);
    }
  };

  return (
    <section
      id="system-blog"
      className={`py-24 px-5 sm:px-10 lg:px-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#030306] border-white/10 text-white' : 'bg-[#F8F7F4] border-zinc-900/10 text-zinc-950'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Editorial Header + Dedicated System Blog Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className={`text-xs font-medium mb-3 flex items-center gap-2 ${isDark ? 'text-sky-400' : 'text-indigo-600'}`}>
              <BookOpen className="w-4 h-4" />
              <span>Brandier Web System Blog · AI + Bespoke Web Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.12]">
              How We Design &amp; Engineer Websites{' '}
              <span className="serif-italic">With Our AI System.</span>
            </h2>
            <p className={`mt-3 text-sm sm:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Tap any stage below to read the full technical breakdown of our <strong>Landing &amp; Web Desire System</strong>, or open our official <strong>Brandier Ad Formats Blog</strong> for commercial production details.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={expandAllStages}
              className="btn btn-dark-glass !h-10 !px-5 !text-xs"
            >
              {SYSTEM_STAGES.every((s) => openStageIds[s.id])
                ? 'Collapse System Guide'
                : 'Open All 4 System Stages'}
            </button>
            <a
              href="https://brandierstudio.online/brandier-blog.html#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid !h-10 !px-5 !text-xs"
            >
              <BrandierStudioHexMark theme={isDark ? 'light' : 'dark'} size={16} />
              <span>Ad Formats Blog</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Interactive Tap-to-Expand System Blog Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10 items-start">
          {SYSTEM_STAGES.map((item) => {
            const isOpen = !!openStageIds[item.id];
            const cardClass =
              item.surfaceType === 'dark' ? 'glass-card-dark' : 'glass-card-frosted';

            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 transition-all duration-300 ${cardClass}`}
              >
                {/* Clickable Header Button */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleStage(item.id)}
                  className="w-full text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-sky-400 font-medium mb-1.5">
                      {item.icon}
                      <span>{item.stage}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-1.5">
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        item.surfaceType === 'dark'
                          ? 'text-zinc-300'
                          : isDark
                          ? 'text-zinc-300'
                          : 'text-zinc-600'
                      }`}
                    >
                      {item.shortLine}
                    </p>
                  </div>

                  <span
                    className={`btn ${
                      isOpen ? 'btn-solid' : 'btn-dark-glass'
                    } !h-8 !px-3 !text-[11px] shrink-0 mt-1`}
                  >
                    {isOpen ? 'Hide' : 'Read'}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                </button>

                {/* Expanded Full Details */}
                {isOpen && (
                  <div className="mt-5 pt-5 border-t border-current/15 space-y-4">
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        item.surfaceType === 'dark'
                          ? 'text-zinc-300'
                          : isDark
                          ? 'text-zinc-300'
                          : 'text-zinc-700'
                      }`}
                    >
                      {item.deepDive}
                    </p>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold tracking-wide text-sky-400">
                        How Our AI + Studio System Executes This Stage:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.aiWorkflowPoints.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-xs leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-current/10 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-medium text-emerald-400">
                        Outcome: {item.deliverableOutcome}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onSelectForQuote(`System Stage: ${item.title}`)}
                          className="btn btn-solid !h-8 !px-3.5 !text-xs"
                        >
                          Build With This System <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dedicated Bottom Full-System Deep-Dive Button & Drawer */}
        <div
          className={`rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
            isDark ? 'glass-card-dark' : 'glass-card-frosted'
          }`}
        >
          <div className="flex items-start gap-4 min-w-0">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <BrandierWebMark theme="dark" size={30} />
            </div>
            <div>
              <div className="text-xs text-sky-400 font-medium mb-1">
                Complete Landing System + 8 Commercial Ad Formats
              </div>
              <h3 className="text-lg sm:text-2xl font-semibold tracking-tight">
                Want to read our complete AI Website &amp; Ad Production Architecture?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-2xl">
                Our Landing System architecture is documented right here on Brandier Web, while all 8 Commercial Ad Format specifications and quotes are hosted on our official Brandier Studio Blog.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setShowFullGuideModal((prev) => !prev)}
              className="btn btn-ghost !h-10 !px-5 !text-xs"
            >
              {showFullGuideModal ? 'Hide System Summary' : 'Read Full Web System Summary'}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showFullGuideModal ? 'rotate-180' : ''}`}
              />
            </button>

            <a
              href="https://brandierstudio.online/brandier-blog.html#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid !h-10 !px-5 !text-xs"
            >
              <span>Open Brandier Blog &amp; Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {showFullGuideModal && (
          <div
            className={`mt-4 rounded-2xl p-6 sm:p-8 border transition-all ${
              isDark
                ? 'bg-zinc-950/95 border-sky-400/35 text-zinc-200'
                : 'bg-white border-indigo-500/30 text-zinc-800 shadow-md'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm leading-relaxed">
              <div>
                <h4 className="font-semibold text-sky-400 mb-2">
                  1. Why AI + Human Creative Direction Wins
                </h4>
                <p>
                  Pure templates look generic, while traditional agencies take 8+ weeks. By combining AI visual synthesis with Anas Mehboob’s creative direction and hand-written React/TypeScript engineering, we deliver flagship custom websites in 5–14 days.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-400 mb-2">
                  2. Liquid-Glass &amp; Dual-Theme Mastery
                </h4>
                <p>
                  Every button, navigation capsule, and interactive card uses multi-layered specular highlights, 190% backdrop saturation, and instant top-bar ON/OFF theme switching so your brand looks unmistakable on mobile and desktop.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-fuchsia-400 mb-2">
                  3. Unified Landing System + Ad Formats
                </h4>
                <p>
                  Your website and your ads are built by the same studio. Visitors clicking your Talking Head UGC, Unboxing, or 3D Motion ad land on a page with the exact same visual language—maximizing trust and ROAS.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
