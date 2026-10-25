import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

interface ClientReviewsSectionProps {
  theme: 'dark' | 'light';
}

interface ClientReview {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  region: 'pakistan' | 'global';
  avatar: string;
  projectDelivered: string;
  impactMetric: string;
  quote: string;
}

const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'pk-1',
    name: 'Hamza Tariq',
    role: 'Founder & CEO',
    company: 'Zaviya Menswear & D2C',
    location: 'Karachi, Pakistan',
    region: 'pakistan',
    avatar: '/assets/reviews/client-pk-1.jpg',
    projectDelivered: 'Custom Storefront + 4 UGC Video Ads',
    impactMetric: '3.6x ROAS in 28 Days',
    quote:
      'Before working with Anas Mehboob and Brandier Studio, our agency shoots in Karachi took three weeks and drained our ad budget. Brandier rebuilt our flagship storefront with liquid-glass speed and delivered four campaign films in six days—doubling our checkout conversion rate immediately.',
  },
  {
    id: 'pk-2',
    name: 'Zoya Sikandar',
    role: 'Creative Director',
    company: 'House of Zoya Pret',
    location: 'Lahore, Pakistan',
    region: 'pakistan',
    avatar: '/assets/reviews/client-global-2.jpg',
    projectDelivered: 'Editorial Web Flagship + Virtual Try-On',
    impactMetric: '+175% Online Festive Orders',
    quote:
      'We wanted a website that felt like an international luxury house rather than a generic local template. Brandier Web crafted our dual-mode lookbook and editorial product films down to the last detail. Our Eid collection sold out faster than any previous season.',
  },
  {
    id: 'gl-1',
    name: 'Marcus Vance',
    role: 'Managing Director',
    company: 'Vance Horology Ltd.',
    location: 'London, United Kingdom',
    region: 'global',
    avatar: '/assets/reviews/client-global-1.jpg',
    projectDelivered: 'Bespoke Web Architecture + Spec Commercial',
    impactMetric: '88% Lower Production Cost',
    quote:
      'The timepiece commercial and landing architecture Brandier delivered rivaled London production houses charging ten times more. The macro reflections, pacing, and responsive precision gave our flagship launch immediate authority across Europe and the UK.',
  },
  {
    id: 'gl-2',
    name: 'Elena Rostova',
    role: 'VP of Brand Growth',
    company: 'Maison Lumière Parfums',
    location: 'Dubai, UAE',
    region: 'global',
    avatar: '/assets/reviews/client-pk-2.jpg',
    projectDelivered: 'Interactive Launch Site + Multi-Market Ads',
    impactMetric: '+190% Direct Store CTR',
    quote:
      'Brandier Studio understands luxury restraint. They translated our fragrance notes into a mesmerizing visual film and embedded it into a sub-second landing page that converts cold traffic across Dubai, Riyadh, and Paris effortlessly.',
  },
];

export const ClientReviewsSection: React.FC<ClientReviewsSectionProps> = ({ theme }) => {
  const [regionFilter, setRegionFilter] = useState<'all' | 'pakistan' | 'global'>('all');
  const isDark = theme === 'dark';

  const visibleReviews =
    regionFilter === 'all'
      ? CLIENT_REVIEWS
      : CLIENT_REVIEWS.filter((r) => r.region === regionFilter);

  return (
    <section
      id="reviews"
      className={`py-24 px-5 sm:px-10 lg:px-20 border-t transition-colors duration-300 ${
        isDark
          ? 'bg-[#000000] border-white/10 text-white'
          : 'bg-[#F8F7F4] border-zinc-900/10 text-zinc-950'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className={`text-xs font-medium mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Verified Client Reviews · Pakistan &amp; International Partners
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.12] max-w-2xl">
              Trusted by Founders in{' '}
              <span className="serif-italic">Pakistan &amp; Worldwide.</span>
            </h2>
          </div>

          {/* Short Liquid Glass Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Client region filter">
            <button
              type="button"
              role="tab"
              aria-selected={regionFilter === 'all'}
              onClick={() => setRegionFilter('all')}
              className={`btn !h-10 !px-4 !text-xs ${
                regionFilter === 'all' ? 'btn-solid' : 'btn-ghost'
              }`}
            >
              All Clients
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={regionFilter === 'pakistan'}
              onClick={() => setRegionFilter('pakistan')}
              className={`btn !h-10 !px-4 !text-xs ${
                regionFilter === 'pakistan' ? 'btn-solid' : 'btn-ghost'
              }`}
            >
              Pakistan
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={regionFilter === 'global'}
              onClick={() => setRegionFilter('global')}
              className={`btn !h-10 !px-4 !text-xs ${
                regionFilter === 'global' ? 'btn-solid' : 'btn-ghost'
              }`}
            >
              Global
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleReviews.map((review) => (
            <article
              key={review.id}
              className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all ${
                isDark
                  ? 'bg-zinc-950/90 border-white/14 hover:border-white/30'
                  : 'bg-white border-zinc-900/12 hover:border-zinc-900/30 shadow-xs'
              }`}
            >
              <div>
                {/* Top Rating & Outcome Row */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-sky-400 tabular-nums">
                    {review.impactMetric}
                  </span>
                </div>

                {/* Quote Body */}
                <div className="relative mb-6">
                  <Quote
                    className={`w-6 h-6 mb-2 opacity-25 ${
                      isDark ? 'text-sky-300' : 'text-indigo-600'
                    }`}
                    aria-hidden="true"
                  />
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      isDark ? 'text-zinc-200' : 'text-zinc-800'
                    }`}
                  >
                    “{review.quote}”
                  </p>
                </div>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-5 border-t border-current/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/25 shrink-0 bg-zinc-800">
                    <img
                      src={review.avatar}
                      alt={`${review.name} — ${review.role} at ${review.company}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold tracking-tight truncate">
                      {review.name}
                    </div>
                    <div
                      className={`text-xs truncate ${
                        isDark ? 'text-zinc-400' : 'text-zinc-600'
                      }`}
                    >
                      {review.role}, {review.company}
                    </div>
                    <div
                      className={`text-[11px] truncate ${
                        isDark ? 'text-zinc-500' : 'text-zinc-500'
                      }`}
                    >
                      {review.location} · {review.projectDelivered}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
