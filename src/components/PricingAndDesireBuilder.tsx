import React, { useState } from 'react';
import {
  PACKAGE_PLANS,
  BillingMode,
  PackagePlan,
  evaluatePromoCode,
  formatPrice,
  calculateDesireEstimate,
} from '../utils/pricingAndContact';
import { Check, Tag, Calculator, ArrowRight } from 'lucide-react';

interface PricingAndDesireBuilderProps {
  theme: 'dark' | 'light';
  onSelectPlanForContact: (summaryText: string, budgetText: string) => void;
}

export const PricingAndDesireBuilder: React.FC<PricingAndDesireBuilderProps> = ({
  theme,
  onSelectPlanForContact,
}) => {
  const [billingMode, setBillingMode] = useState<BillingMode>('project');
  const [selectedPlan, setSelectedPlan] = useState<PackagePlan>(PACKAGE_PLANS[1]); // Default Growth
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{
    valid: boolean;
    discountPercent: number;
    normalizedCode: string;
    message: string;
  } | null>(null);

  // Interactive "Websites On Your Own Desire" Estimator State
  const [serviceType, setServiceType] = useState<'website' | 'ai_ads' | 'both'>('both');
  const [pagesCount, setPagesCount] = useState<number>(4);
  const [adVideosCount, setAdVideosCount] = useState<number>(2);
  const [includeLightDarkMode, setIncludeLightDarkMode] = useState<boolean>(true);
  const [includeCustomLogoBgRemoval, setIncludeCustomLogoBgRemoval] = useState<boolean>(true);
  const [expressDelivery, setExpressDelivery] = useState<boolean>(false);

  const isDark = theme === 'dark';

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const res = evaluatePromoCode(promoInput, selectedPlan, billingMode);
    setAppliedPromo({
      valid: res.valid,
      discountPercent: res.discountPercent,
      normalizedCode: res.normalizedCode,
      message: res.message,
    });
  };

  const getDisplayPrice = (plan: PackagePlan) => {
    const base = billingMode === 'project' ? plan.projectPrice : plan.retainerPrice;
    if (base === 0) return 'Let’s Talk';
    if (appliedPromo?.valid && selectedPlan.id === plan.id) {
      const discounted = Math.round(base * (1 - appliedPromo.discountPercent / 100));
      return formatPrice(discounted);
    }
    return formatPrice(base);
  };

  const desireEstimate = calculateDesireEstimate({
    serviceType,
    pagesCount,
    adVideosCount,
    includeLightDarkMode,
    includeCustomLogoBgRemoval,
    expressDelivery,
  });

  return (
    <section
      id="pricing"
      className={`py-24 px-5 sm:px-10 lg:px-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#000000] border-white/10 text-white' : 'bg-[#F8F7F4] border-zinc-900/10 text-zinc-950'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading + Short Liquid-Glass Billing Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className={`text-xs font-medium mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Transparent Studio Investment · Websites &amp; Commercial Production
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.12]">
              Packages Built for{' '}
              <span className="serif-italic">Your Exact Desire.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setBillingMode('project')}
              className={`btn !h-10 !px-5 !text-xs ${
                billingMode === 'project' ? 'btn-solid' : 'btn-ghost'
              }`}
            >
              Per Project
            </button>
            <button
              type="button"
              onClick={() => setBillingMode('retainer')}
              className={`btn !h-10 !px-5 !text-xs ${
                billingMode === 'retainer' ? 'btn-solid' : 'btn-ghost'
              }`}
            >
              Monthly (-20%)
            </button>
          </div>
        </div>

        {/* 4 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PACKAGE_PLANS.map((plan) => {
            const isSelected = selectedPlan.id === plan.id;
            const basePrice = billingMode === 'project' ? plan.projectPrice : plan.retainerPrice;
            const priceLabel = getDisplayPrice(plan);

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-zinc-900/95 border-white/60 shadow-xl'
                      : 'bg-white border-zinc-900 shadow-lg'
                    : isDark
                    ? 'bg-zinc-950/80 border-white/12 hover:border-white/30'
                    : 'bg-white/85 border-zinc-900/12 hover:border-zinc-900/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-lg font-semibold tracking-tight">{plan.name}</span>
                    <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {plan.turnaround}
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {plan.tagline}
                  </p>

                  <div className="mb-6 pb-5 border-b border-current/10">
                    <div className="text-3xl font-semibold tracking-tight tabular-nums">
                      {priceLabel}
                    </div>
                    <div className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {basePrice === 0
                        ? 'Bespoke Enterprise Scope'
                        : appliedPromo?.valid && isSelected
                        ? `${billingMode === 'project' ? 'Per project' : 'Per month'} after ${appliedPromo.discountPercent}% code`
                        : billingMode === 'project'
                        ? 'Starting project investment'
                        : 'Per month retainer'}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {plan.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-start gap-2.5 text-xs leading-relaxed">
                        <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan(plan);
                    onSelectPlanForContact(
                      `${plan.name} Package (${billingMode === 'project' ? 'Per Project' : 'Monthly Retainer'})`,
                      priceLabel
                    );
                  }}
                  className={`btn w-full ${plan.featured || isSelected ? 'btn-solid' : 'btn-ghost'}`}
                >
                  Select {plan.name}
                </button>
              </div>
            );
          })}
        </div>

        {/* Client Promo Code Bar */}
        <div
          className={`rounded-2xl border p-6 sm:p-8 mb-16 ${
            isDark ? 'bg-zinc-950/90 border-white/15' : 'bg-white border-zinc-900/12 shadow-xs'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-sky-400 font-medium mb-1">
                <Tag className="w-3.5 h-3.5" /> Official Brandier Client Code
              </div>
              <h3 className="text-xl font-semibold tracking-tight">
                {selectedPlan.name} Selected — Have a Promo Code?
              </h3>
              <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Enter <code className="font-mono">WELCOME10</code>,{' '}
                <code className="font-mono">BRANDIER15</code>, or{' '}
                <code className="font-mono">SPECIAL20</code> for instant client savings.
              </p>
            </div>

            <div>
              <form onSubmit={handleApplyPromo} className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="promo-code-input" className="sr-only">
                  Discount Code
                </label>
                <input
                  id="promo-code-input"
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Enter code (e.g. BRANDIER15)"
                  className={`flex-1 h-11 px-4 rounded-full border text-sm focus:outline-none ${
                    isDark
                      ? 'bg-black border-white/25 text-white placeholder:text-zinc-500 focus:border-white'
                      : 'bg-zinc-50 border-zinc-300 text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-900'
                  }`}
                />
                <button type="submit" className="btn btn-solid">
                  Apply
                </button>
              </form>
              {appliedPromo && (
                <p
                  className={`text-xs mt-2.5 font-medium ${
                    appliedPromo.valid ? 'text-emerald-400' : 'text-amber-400'
                  }`}
                  aria-live="polite"
                >
                  {appliedPromo.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Interactive "Websites On Your Own Desire" Custom Scope Builder */}
        <div
          className={`rounded-2xl border p-6 sm:p-10 ${
            isDark ? 'bg-zinc-950/95 border-white/15' : 'bg-white border-zinc-900/15 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-2.5 text-xs text-sky-400 font-medium mb-2">
            <Calculator className="w-4 h-4" /> Custom Scope Configurator
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">
            Configure Your Custom Website &amp; Campaign Scope
          </h3>
          <p className={`text-sm mb-8 max-w-2xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Select your required views, commercial films, and delivery speed below to calculate an instant studio estimate.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-medium mb-2.5">
                  1. Select Project Track
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'website', label: 'Website Only' },
                    { id: 'ai_ads', label: 'Video Ads Only' },
                    { id: 'both', label: 'Full Bundle' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setServiceType(item.id as 'website' | 'ai_ads' | 'both')}
                      className={`btn !h-10 !text-xs w-full ${
                        serviceType === item.id ? 'btn-solid' : 'btn-ghost'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {(serviceType === 'website' || serviceType === 'both') && (
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <label htmlFor="pages-range" className="font-medium">
                      Custom Website Views / Sections
                    </label>
                    <span className="font-mono font-semibold tabular-nums">{pagesCount} Views</span>
                  </div>
                  <input
                    id="pages-range"
                    type="range"
                    min={1}
                    max={12}
                    value={pagesCount}
                    onChange={(e) => setPagesCount(Number(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                </div>
              )}

              {(serviceType === 'ai_ads' || serviceType === 'both') && (
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <label htmlFor="ads-range" className="font-medium">
                      Commercial / UGC Videos
                    </label>
                    <span className="font-mono font-semibold tabular-nums">{adVideosCount} Videos</span>
                  </div>
                  <input
                    id="ads-range"
                    type="range"
                    min={1}
                    max={10}
                    value={adVideosCount}
                    onChange={(e) => setAdVideosCount(Number(e.target.value))}
                    className="w-full accent-fuchsia-400 cursor-pointer"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <label
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer ${
                    isDark ? 'border-white/15 bg-black/40' : 'border-zinc-200 bg-zinc-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={includeLightDarkMode}
                    onChange={(e) => setIncludeLightDarkMode(e.target.checked)}
                    className="accent-sky-400"
                  />
                  <span>Light &amp; Night Mode</span>
                </label>

                <label
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer ${
                    isDark ? 'border-white/15 bg-black/40' : 'border-zinc-200 bg-zinc-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={includeCustomLogoBgRemoval}
                    onChange={(e) => setIncludeCustomLogoBgRemoval(e.target.checked)}
                    className="accent-sky-400"
                  />
                  <span>Brand Identity Suite</span>
                </label>

                <label
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer ${
                    isDark ? 'border-white/15 bg-black/40' : 'border-zinc-200 bg-zinc-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={expressDelivery}
                    onChange={(e) => setExpressDelivery(e.target.checked)}
                    className="accent-sky-400"
                  />
                  <span>Express 5-Day Delivery</span>
                </label>
              </div>
            </div>

            {/* Live Estimate Summary Box (No extra WhatsApp button here per user request) */}
            <div
              className={`lg:col-span-5 rounded-xl border p-6 ${
                isDark ? 'bg-black border-white/20' : 'bg-zinc-50 border-zinc-300'
              }`}
            >
              <div className={`text-xs mb-1 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Estimated Project Investment
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-semibold tracking-tight tabular-nums">
                  {formatPrice(desireEstimate.estimatedTotal)}
                </span>
                <span className="text-xs text-sky-400 font-medium">
                  Matches {desireEstimate.recommendedTier} Tier
                </span>
              </div>

              <ul className="space-y-2 mb-6 text-xs">
                {desireEstimate.summaryPoints.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() =>
                  onSelectPlanForContact(
                    `Custom Desire Build (${desireEstimate.summaryPoints.join(', ')})`,
                    formatPrice(desireEstimate.estimatedTotal)
                  )
                }
                className="btn btn-solid w-full"
              >
                Lock Estimate <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
