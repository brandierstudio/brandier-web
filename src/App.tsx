/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { BrandierWebMark, BrandierStudioHexMark, BrandierTvLogo } from './components/BrandLogos';
import { ServicesAndFormats } from './components/ServicesAndFormats';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ClientReviewsSection } from './components/ClientReviewsSection';
import { PricingAndDesireBuilder } from './components/PricingAndDesireBuilder';
import { AboutAndFaq } from './components/AboutAndFaq';
import { WebSystemBlogSection } from './components/WebSystemBlogSection';
import { ContactSection } from './components/ContactSection';
import { buildWhatsAppUrl, CONTACT_INFO } from './utils/pricingAndContact';
import { Sun, Moon } from 'lucide-react';

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [settledElements, setSettledElements] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string>(
    'Websites On Your Own Desire + AI Ads'
  );
  const [prefilledBudget, setPrefilledBudget] = useState<string>('$950 (Growth Package)');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Sync theme attribute on <html>, <body>, and keep the transparent black-stem Brandier Web favicon active
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.style.background = '#000000';
      root.style.color = '#ffffff';
      document.body.style.background = '#000000';
      document.body.style.color = '#ffffff';
    } else {
      root.style.background = '#F8F7F4';
      root.style.color = '#09090B';
      document.body.style.background = '#F8F7F4';
      document.body.style.color = '#09090B';
    }

    const faviconEl = document.getElementById('dynamic-favicon') as HTMLLinkElement | null;
    if (faviconEl) {
      faviconEl.href = './favicon.png?v=5';
    }
  }, [theme]);

  // Force autoplay of the animated particle wave video across all desktop and mobile browsers
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    const playPromise = v.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        const retry = () => {
          v.play().catch(() => {});
          window.removeEventListener('pointerdown', retry);
        };
        window.addEventListener('pointerdown', retry, { once: true });
      });
    }
  }, []);

  // Sync mobile menu class on body + Escape & resize listeners
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 901) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  // Entrance animation fallback after two requestAnimationFrames + timer
  useEffect(() => {
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const els = document.querySelectorAll<HTMLElement>('.appear, .hero-photo');
        els.forEach((el) => {
          const anims = typeof el.getAnimations === 'function' ? el.getAnimations() : [];
          const hasActive = anims.some(
            (a) => a.playState === 'running' || a.playState === 'finished'
          );
          if (!hasActive) {
            el.classList.add('is-in');
          }
        });
      });
    });
    const timer = setTimeout(() => setSettledElements(true), 2600);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timer);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleJumpToQuote = (serviceLabel: string, budgetLabel?: string) => {
    setPrefilledService(serviceLabel);
    if (budgetLabel) setPrefilledBudget(budgetLabel);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appearHelper = (mod: string) =>
    `appear ${mod}${settledElements ? ' is-in' : ''}`;

  return (
    <div className="min-h-screen relative">
      {/* Subtle Film Grain Layer */}
      <div className="grain" aria-hidden="true" />

      {/* =====================================================================
          FLOATING BOTTOM-RIGHT WHATSAPP BUTTON (ICON ONLY — NO PHONE NUMBER TEXT,
          AND THE ONLY WHATSAPP BUTTON ON THE ENTIRE WEBSITE)
          ===================================================================== */}
      <a
        href={buildWhatsAppUrl(
          'Assalam o Alaikum Brandier Studio! I visited Brandier Web and want to discuss a project.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="floating-whatsapp"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="shrink-0"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.98 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.56 13.99C16.31 13.87 15.09 13.27 14.87 13.18C14.64 13.1 14.48 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 12.99 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.48 11.15 9.61 11.01 9.73 10.89C9.84 10.78 9.98 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.6C10.27 9.48 9.77 8.26 9.57 7.76C9.37 7.28 9.16 7.35 9.01 7.34C8.87 7.33 8.7 7.33 8.54 7.33C8.37 7.33 8.1 7.39 7.88 7.64C7.65 7.89 7.01 8.49 7.01 9.71C7.01 10.93 7.9 12.11 8.02 12.27C8.15 12.44 9.77 14.94 12.25 16.01C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 13.99Z" />
        </svg>
      </a>

      {/* =====================================================================
          FIRST VIEWPORT: Brandier Web Hero with Logo-Gradient Wave Animation
          ===================================================================== */}
      <div className="hero-viewport">
        {/* Animated Particle Wave Video Tinted with Brandier Web Logo Iridescent Gradient */}
        <div className={`hero-photo${settledElements ? ' is-in' : ''}`}>
          <video
            ref={videoRef}
            poster="/assets/hero-wave-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/assets/hero-wave.webm" type="video/webm" />
            <source src="/assets/hero-wave-h264.mp4" type="video/mp4" />
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        {/* Mobile Menu Blur Backdrop */}
        <div
          className="menu-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Header — Top Bar with Liquid-Glass ON/OFF Theme Switch at the Very Top */}
        <header className="header">
          {/* Zone 1: Brandier Web Transparent Logo Lockup */}
          <a
            href="#top"
            aria-label="Brandier Web"
            style={{ '--d': '0.08s' } as React.CSSProperties}
            onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
            className={`logo ${appearHelper('appear--scale')}`}
          >
            <BrandierWebMark theme={theme} size={32} />
            <span>
              Brandier<span className="logo-suffix">.web</span>
            </span>
          </a>

          {/* Zone 2: Center Liquid-Glass Pill Navigation */}
          <nav id="site-nav" aria-label="Primary">
            <a
              href="#benefits"
              onClick={() => setMenuOpen(false)}
              style={{ '--d': '0.16s' } as React.CSSProperties}
              onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
              className={`nav-pill ${appearHelper('appear--scale')}`}
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              style={{ '--d': '0.24s' } as React.CSSProperties}
              onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
              className={`nav-pill ${appearHelper('appear--soft')}`}
            >
              Work
            </a>
            <a
              href="#reviews"
              onClick={() => setMenuOpen(false)}
              style={{ '--d': '0.32s' } as React.CSSProperties}
              onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
              className={`nav-pill ${appearHelper('appear--scale')}`}
            >
              Reviews
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              style={{ '--d': '0.40s' } as React.CSSProperties}
              onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
              className={`nav-pill ${appearHelper('appear--soft')}`}
            >
              Pricing
            </a>
            <a
              href="#system-blog"
              onClick={() => setMenuOpen(false)}
              style={{ '--d': '0.48s' } as React.CSSProperties}
              onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
              className={`nav-pill ${appearHelper('appear--scale')}`}
            >
              Blog
            </a>
          </nav>

          {/* Zone 3: Top-Bar Liquid-Glass ON/OFF Theme Switch + Primary CTA + Mobile Burger */}
          <div className="header-right flex items-center justify-end gap-2.5">
            <button
              type="button"
              role="switch"
              aria-checked={theme === 'light'}
              aria-label={theme === 'dark' ? 'Switch to Light Mode (ON)' : 'Switch to Night Mode (OFF)'}
              onClick={toggleTheme}
              style={{ '--d': '0.30s' } as React.CSSProperties}
              onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
              className={`theme-switch ${appearHelper('appear--scale')}`}
            >
              <span className="theme-switch-track" aria-hidden="true">
                <Moon className="w-3 h-3 text-indigo-300 opacity-80" />
                <Sun className="w-3 h-3 text-amber-300 opacity-80" />
                <span className="theme-switch-thumb">
                  {theme === 'dark' ? (
                    <Moon className="w-3 h-3" />
                  ) : (
                    <Sun className="w-3 h-3" />
                  )}
                </span>
              </span>
              <span className="theme-switch-label hidden sm:inline">
                {theme === 'dark' ? 'Night' : 'Light'}
              </span>
            </button>

            <a
              href="#start"
              style={{ '--d': '0.34s' } as React.CSSProperties}
              onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
              className={`btn btn-solid header-cta ${appearHelper('appear--scale')}`}
            >
              Get Started
            </a>

            <button
              type="button"
              className={`burger ${appearHelper('appear--scale')}`}
              style={{ '--d': '0.34s' } as React.CSSProperties}
              aria-controls="site-nav"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        {/* Hero Main Content */}
        <main id="top" className="hero">
          <div className="hero-copy">
            {/* Editorial Badge */}
            <div
              style={{ '--d': '0.22s' } as React.CSSProperties}
              onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
              className={`badge ${appearHelper('appear--pop')}`}
            >
              <BrandierWebMark theme="dark" size={18} />
              <span>Websites On Your Desire · Brandier Studio</span>
            </div>

            {/* Two Masked H1 Headline Lines */}
            <h1>
              <span className="headline-line">
                <span
                  style={{ '--d': '0.42s' } as React.CSSProperties}
                  onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
                  className={`inline-block ${appearHelper('appear--mask')}`}
                >
                  Craft <em>bespoke websites</em>
                </span>
              </span>
              <span className="headline-line">
                <span
                  style={{ '--d': '0.62s' } as React.CSSProperties}
                  onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
                  className={`inline-block ${appearHelper('appear--mask')}`}
                >
                  &amp; commercials on your desire.
                </span>
              </span>
            </h1>

            {/* Short, Punchy Lede */}
            <p
              style={
                {
                  '--d': '0.82s',
                  animationDuration: '1.25s',
                } as React.CSSProperties
              }
              onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
              className={`lede ${appearHelper('appear--soft')}`}
            >
              Directed by Anas Mehboob — flagship websites &amp; commercial films built to scale.
            </p>

            {/* Hero Actions — Short Crisp Liquid-Glass Buttons (Light/Dark Button Removed from Main Hero per Request) */}
            <div className="hero-actions">
              <a
                href="#pricing"
                style={{ '--d': '0.96s' } as React.CSSProperties}
                onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
                className={`btn btn-solid btn-primary-full ${appearHelper('appear--btn')}`}
              >
                Start Project
              </a>

              <a
                href="#how-it-works"
                style={{ '--d': '1.04s' } as React.CSSProperties}
                onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
                className={`btn btn-ghost ${appearHelper('appear--side')}`}
              >
                Our Work
              </a>

              <a
                href={CONTACT_INFO.mainWebsite}
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--d': '1.12s' } as React.CSSProperties}
                onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
                className={`btn btn-dark-glass ${appearHelper('appear--side')}`}
              >
                <BrandierStudioHexMark theme="dark" size={18} />
                <span>Main Website</span>
              </a>

              <a
                href={CONTACT_INFO.tvWebsite}
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--d': '1.16s' } as React.CSSProperties}
                onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
                className={`btn btn-ghost ${appearHelper('appear--side')}`}
              >
                <BrandierTvLogo size={18} />
                <span>Brandier TV</span>
              </a>
            </div>
          </div>
        </main>

        {/* Crisp, Concise 3-Stat Hero Footer Bar */}
        <footer className="stats">
          {/* Stat 1 */}
          <div
            style={{ '--d': '1.12s' } as React.CSSProperties}
            onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
            className={`stat ${appearHelper('appear--stat')}`}
          >
            <BrandierWebMark theme={theme} size={22} />
            <span>60+ Websites &amp; Commercials</span>
          </div>

          {/* Stat 2 */}
          <div
            style={{ '--d': '1.28s' } as React.CSSProperties}
            onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
            className={`stat ${appearHelper('appear--stat')}`}
          >
            <BrandierStudioHexMark theme={theme} size={20} />
            <span>92% Faster Studio Delivery</span>
          </div>

          {/* Stat 3 */}
          <div
            style={{ '--d': '1.44s' } as React.CSSProperties}
            onAnimationEnd={(e) => e.currentTarget.classList.add('is-in')}
            className={`stat ${appearHelper('appear--stat')}`}
          >
            <BrandierTvLogo size={22} />
            <span>12+ Pakistani &amp; Global Brands</span>
          </div>
        </footer>
      </div>

      {/* =====================================================================
          BELOW THE FOLD: Complete Brandier Web & Brandier Studio Experience
          ===================================================================== */}
      <ServicesAndFormats
        theme={theme}
        onSelectServiceForQuote={(serviceName) => handleJumpToQuote(serviceName)}
      />

      <PortfolioShowcase
        theme={theme}
        onSelectProjectForQuote={(projectTitle) => handleJumpToQuote(projectTitle)}
      />

      <ClientReviewsSection theme={theme} />

      <PricingAndDesireBuilder
        theme={theme}
        onSelectPlanForContact={(summaryText, budgetText) =>
          handleJumpToQuote(summaryText, budgetText)
        }
      />

      <AboutAndFaq theme={theme} />

      {/* Dedicated End-of-Page Blog Section Explaining Our Full AI + Bespoke Web System */}
      <WebSystemBlogSection
        theme={theme}
        onSelectForQuote={(serviceLabel) => handleJumpToQuote(serviceLabel)}
      />

      <ContactSection
        theme={theme}
        prefilledService={prefilledService}
        prefilledBudget={prefilledBudget}
      />
    </div>
  );
}
