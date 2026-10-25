import React, { useState } from 'react';
import { BrandierWebMark, BrandierStudioHexMark, BrandierTvLogo } from './BrandLogos';
import { ChevronDown } from 'lucide-react';

interface AboutAndFaqProps {
  theme: 'dark' | 'light';
}

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'What does "Websites On Your Own Desire" mean at Brandier Web?',
    a: 'Instead of forcing your brand into a generic agency template, we design and engineer every layout, interaction, and visual layer around your exact reference and business goals—complete with liquid-glass controls, dual Light & Night mode, and sub-second responsiveness.',
  },
  {
    q: 'What are the official Brandier Studio websites?',
    a: 'Our main agency website is brandierstudio.online, our commercial broadcast channel is tv.brandierstudio.online, and Brandier Web is our dedicated custom web engineering division.',
  },
  {
    q: 'Do all websites work seamlessly across mobile, tablet, and desktop?',
    a: 'Yes. Every Brandier Web build ships with responsive fluid typography, touch-friendly mobile navigation, and an instant theme engine supporting both Night Mode (#000000) and Daylight Mode (#F8F7F4).',
  },
  {
    q: 'How fast can we launch our website or commercial campaign?',
    a: 'Single-viewport luxury landing pages and initial UGC ad variations launch in 5–7 business days. Multi-page web platforms and full 6-format campaign bundles complete within 10–18 business days.',
  },
  {
    q: 'How can we contact Anas Mehboob and the studio team directly?',
    a: 'You can use the project brief form below, email brandierstudio@gmail.com, or tap the WhatsApp icon in the bottom-right corner of the screen for direct executive onboarding.',
  },
];

export const AboutAndFaq: React.FC<AboutAndFaqProps> = ({ theme }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isDark = theme === 'dark';

  return (
    <section
      id="faqs"
      className={`py-24 px-5 sm:px-10 lg:px-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#050508] border-white/10 text-white' : 'bg-[#EFECE6] border-zinc-900/10 text-zinc-950'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Founder & Studio Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Founder Portrait from brandierstudio.online */}
          <div className="lg:col-span-5">
            <div
              className={`relative rounded-2xl overflow-hidden border p-3 ${
                isDark ? 'bg-zinc-950 border-white/15' : 'bg-white border-zinc-900/12 shadow-md'
              }`}
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900">
                <img
                  src="/assets/brandier_site_img_1_Anas_Mehboob.jpeg"
                  alt="Anas Mehboob — CGO & Creative Director at Brandier Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center gap-3">
                    <BrandierWebMark theme="dark" size={34} />
                    <div>
                      <div className="text-sm font-semibold tracking-tight">Anas Mehboob</div>
                      <div className="text-[11px] text-zinc-300">
                        CGO &amp; Creative Director · Brandier Studio
                      </div>
                    </div>
                  </div>
                  <BrandierStudioHexMark theme="dark" size={26} />
                </div>
              </div>
            </div>
          </div>

          {/* Studio Narrative */}
          <div className="lg:col-span-7">
            <div className={`text-xs font-medium mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Leadership &amp; Vision · Karachi, Pakistan to Global Markets
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.12] mb-6">
              The Mind Behind <span className="serif-italic">Brandier Studio.</span>
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed mb-5 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              Led by Creative Director <strong>Anas Mehboob</strong>, <strong>Brandier Studio</strong> (<a href="https://brandierstudio.online" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">brandierstudio.online</a>) and <strong>Brandier Studio TV</strong> (<a href="https://tv.brandierstudio.online/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">tv.brandierstudio.online</a>) partner with ambitious founders across Pakistan, the UK, UAE, and North America. With <strong>Brandier Web</strong>, we bring the same cinema-grade discipline to custom web engineering—building flagship websites and commercial campaigns under one roof.
            </p>

            <blockquote
              className={`p-5 rounded-xl border text-base sm:text-lg serif-italic mb-6 ${
                isDark ? 'bg-white/[0.03] border-white/15 text-zinc-200' : 'bg-white border-zinc-300 text-zinc-800'
              }`}
            >
              “Great brands deserve more than generic templates and forgettable ads. We engineer digital flagships and commercial films that command immediate respect.”
            </blockquote>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { num: '60+', label: 'Campaigns Delivered' },
                { num: '12+', label: 'Global Brands Scaled' },
                { num: '8', label: 'Signature Ad Formats' },
                { num: '100%', label: 'Custom Engineered' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`p-4 rounded-xl border ${
                    isDark ? 'bg-black/60 border-white/12' : 'bg-white border-zinc-900/10'
                  }`}
                >
                  <div className="text-2xl font-semibold tracking-tight tabular-nums">{stat.num}</div>
                  <div className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
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
              <a
                href="https://drive.google.com/file/d/1RidwSLR3MmW3CxUQ9V2m7QeddNaUhrH4/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Agency Deck
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className={`text-xs font-medium mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Frequently Asked Questions
            </div>
            <h3 className="text-2xl sm:text-4xl font-medium tracking-tight">
              Clear Answers Before We <span className="serif-italic">Begin.</span>
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.q}
                  className={`rounded-2xl border transition-colors ${
                    isDark ? 'bg-zinc-950/90 border-white/14' : 'bg-white border-zinc-900/12'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left font-medium text-sm sm:text-base cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className={`px-5 pb-5 text-xs sm:text-sm leading-relaxed border-t pt-4 ${
                        isDark ? 'text-zinc-400 border-white/10' : 'text-zinc-600 border-zinc-100'
                      }`}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
