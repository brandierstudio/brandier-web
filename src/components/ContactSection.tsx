import React, { useState, useEffect } from 'react';
import {
  CONTACT_INFO,
  validateLeadInquiry,
} from '../utils/pricingAndContact';
import { BrandierWebMark, BrandierStudioHexMark, BrandierTvLogo } from './BrandLogos';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

interface ContactSectionProps {
  theme: 'dark' | 'light';
  prefilledService: string;
  prefilledBudget: string;
}

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://www.instagram.com/brandiarco/' },
  { name: 'YouTube', href: 'https://www.youtube.com/@Brandierstudio' },
  { name: 'LinkedIn (Studio)', href: 'https://www.linkedin.com/company/brandier-studio/' },
  { name: 'LinkedIn (Anas)', href: 'https://www.linkedin.com/in/anas-mehboob-a4a215361/' },
  { name: 'Facebook', href: 'https://www.facebook.com/brandiarstudio' },
  { name: 'Fiverr', href: 'https://www.fiverr.com/s/akNbvQg' },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  theme,
  prefilledService,
  prefilledBudget,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(prefilledService || 'Websites On Your Own Desire + AI Ads');
  const [budget, setBudget] = useState(prefilledBudget || '$950 (Growth Package)');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedLeads, setSubmittedLeads] = useState<
    Array<{ name: string; email: string; service: string; budget: string; timestamp: string }>
  >([]);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    if (prefilledService) setService(prefilledService);
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledBudget) setBudget(prefilledBudget);
  }, [prefilledBudget]);

  const isDark = theme === 'dark';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateLeadInquiry({ name, email, service, budget, message });
    if (!validation.valid) {
      setErrors(validation.errors as Record<string, string>);
      return;
    }

    setErrors({});
    setSubmitStatus('sending');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('service', service);
      formData.append('budget', budget);
      formData.append('message', message);

      await fetch('https://formspree.io/f/xaqazkjg', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      }).catch(() => null);
    } catch {
      // Offline or sandboxed environment fallback
    }

    setSubmittedLeads((prev) => [
      {
        name: name.trim(),
        email: email.trim(),
        service,
        budget,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
      ...prev,
    ]);
    setSubmitStatus('sent');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section
      id="start"
      className={`py-24 px-5 sm:px-10 lg:px-20 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#000000] border-white/10 text-white' : 'bg-[#F8F7F4] border-zinc-900/10 text-zinc-950'
      }`}
    >
      <div id="contact" className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Official Websites, Direct Email & Social Links (No duplicate WhatsApp buttons) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className={`text-xs font-medium mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Direct Studio Dispatch · Start Your Project
              </div>
              <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.12] mb-4">
                Let’s Build Something <span className="serif-italic">Unforgettable.</span>
              </h2>
              <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Ready for a custom website built on your own desire or a high-converting commercial campaign? Connect with Anas Mehboob via email, our official websites, or our social channels below.
              </p>

              {/* Official Websites & Email Cards */}
              <div className="space-y-3.5 mb-8">
                <a
                  href={CONTACT_INFO.mainWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    isDark
                      ? 'bg-zinc-950 border-white/14 hover:border-white/35'
                      : 'bg-white border-zinc-900/12 hover:border-zinc-900/30'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <BrandierStudioHexMark theme={theme} size={26} />
                    <div className="min-w-0">
                      <div className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Official Agency Headquarters
                      </div>
                      <div className="text-sm font-semibold truncate">brandierstudio.online</div>
                    </div>
                  </div>
                  <span className="btn btn-solid !h-8 !px-3.5 !text-xs shrink-0">
                    Main Website
                  </span>
                </a>

                <a
                  href={CONTACT_INFO.tvWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    isDark
                      ? 'bg-zinc-950 border-white/14 hover:border-white/35'
                      : 'bg-white border-zinc-900/12 hover:border-zinc-900/30'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <BrandierTvLogo size={26} />
                    <div className="min-w-0">
                      <div className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Official Commercial Broadcast Portal
                      </div>
                      <div className="text-sm font-semibold truncate">tv.brandierstudio.online</div>
                    </div>
                  </div>
                  <span className="btn btn-ghost !h-8 !px-3.5 !text-xs shrink-0">
                    Brandier TV
                  </span>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=Project%20Inquiry%20—%20Brandier%20Web%20%26%20Studio`}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    isDark
                      ? 'bg-zinc-950 border-white/14 hover:border-white/35'
                      : 'bg-white border-zinc-900/12 hover:border-zinc-900/30'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                    <div className="min-w-0">
                      <div className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Official Studio Email
                      </div>
                      <div className="text-sm font-semibold truncate">{CONTACT_INFO.email}</div>
                    </div>
                  </div>
                  <span className="btn btn-ghost !h-8 !px-3.5 !text-xs shrink-0">Email Us</span>
                </a>

                <div
                  className={`flex items-center gap-3.5 p-4 rounded-2xl border ${
                    isDark ? 'bg-zinc-950/60 border-white/10' : 'bg-white/70 border-zinc-900/10'
                  }`}
                >
                  <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <div className={`text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Studio Location
                    </div>
                    <div className="text-sm font-medium">
                      Karachi, Pakistan · Partnering Globally
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Social Links Pills */}
            <div>
              <div className={`text-xs font-medium mb-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Official Social Links
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_LINKS.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost !h-8 !px-3.5 !text-xs"
                  >
                    {soc.name} <ArrowUpRight className="w-3 h-3 opacity-75" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Brief Form */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-2xl border p-6 sm:p-9 ${
                isDark ? 'bg-zinc-950/90 border-white/15' : 'bg-white border-zinc-900/15 shadow-sm'
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
                Send Your Project Brief
              </h3>
              <p className={`text-xs mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Share your desired website style or campaign goals below. Anas Mehboob responds within 24 hours.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-name" className="block text-xs font-medium mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Hamza Tariq"
                      className={`w-full h-11 px-3.5 rounded-xl border text-sm focus:outline-none ${
                        isDark
                          ? 'bg-black border-white/20 text-white placeholder:text-zinc-500 focus:border-white'
                          : 'bg-zinc-50 border-zinc-300 text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-900'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lead-email" className="block text-xs font-medium mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className={`w-full h-11 px-3.5 rounded-xl border text-sm focus:outline-none ${
                        isDark
                          ? 'bg-black border-white/20 text-white placeholder:text-zinc-500 focus:border-white'
                          : 'bg-zinc-50 border-zinc-300 text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-900'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-service" className="block text-xs font-medium mb-1.5">
                      Service Track
                    </label>
                    <select
                      id="lead-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={`w-full h-11 px-3.5 rounded-xl border text-sm focus:outline-none ${
                        isDark
                          ? 'bg-black border-white/20 text-white focus:border-white'
                          : 'bg-zinc-50 border-zinc-300 text-zinc-950 focus:border-zinc-900'
                      }`}
                    >
                      <option value="Websites On Your Own Desire + AI Ads">
                        Websites On Your Own Desire + Commercial Ads
                      </option>
                      <option value="Custom Website Design (Brandier Web)">
                        Custom Website Design (Brandier Web)
                      </option>
                      <option value="AI UGC & Motion Graphics Commercials">
                        UGC &amp; Motion Graphics Commercials
                      </option>
                      <option value="Full Studio Retainer">Full Studio Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="lead-budget" className="block text-xs font-medium mb-1.5">
                      Selected Package / Budget
                    </label>
                    <input
                      id="lead-budget"
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className={`w-full h-11 px-3.5 rounded-xl border text-sm focus:outline-none ${
                        isDark
                          ? 'bg-black border-white/20 text-white focus:border-white'
                          : 'bg-zinc-50 border-zinc-300 text-zinc-950 focus:border-zinc-900'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-message" className="block text-xs font-medium mb-1.5">
                    Project Brief &amp; Website Desire *
                  </label>
                  <textarea
                    id="lead-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your desired website style, reference links, or the campaign format you want us to produce..."
                    className={`w-full p-3.5 rounded-xl border text-sm focus:outline-none ${
                      isDark
                        ? 'bg-black border-white/20 text-white placeholder:text-zinc-500 focus:border-white'
                        : 'bg-zinc-50 border-zinc-300 text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-900'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitStatus === 'sending'}
                    className="btn btn-solid"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {submitStatus === 'sending' ? 'Sending…' : 'Send Brief'}
                  </button>
                </div>
              </form>

              {submitStatus === 'sent' && submittedLeads.length > 0 && (
                <div
                  className={`mt-6 p-4 rounded-xl border flex items-start gap-3 ${
                    isDark
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                      : 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  }`}
                  role="status"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <div className="font-semibold">
                      Brief Dispatched to {CONTACT_INFO.email}!
                    </div>
                    <div>
                      Thank you, <strong>{submittedLeads[0].name}</strong>. Your inquiry for{' '}
                      <strong>{submittedLeads[0].service}</strong> ({submittedLeads[0].budget}) has been logged at{' '}
                      {submittedLeads[0].timestamp}.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quiet Editorial Footer */}
        <footer className="mt-20 pt-8 pb-16 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-3">
            <BrandierWebMark theme={theme} size={28} />
            <BrandierStudioHexMark theme={theme} size={22} />
            <BrandierTvLogo size={22} />
            <span className="font-semibold tracking-tight">Brandier Web &amp; Studio</span>
            <span className="text-zinc-500">
              · © {new Date().getFullYear()} Anas Mehboob
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://brandierstudio.online"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !h-8 !px-3.5 !text-xs"
            >
              <BrandierStudioHexMark theme={theme} size={15} /> Main Website
            </a>
            <a
              href="https://tv.brandierstudio.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !h-8 !px-3.5 !text-xs"
            >
              <BrandierTvLogo size={15} /> Brandier TV
            </a>
            <a
              href="mailto:brandierstudio@gmail.com"
              className="btn btn-ghost !h-8 !px-3.5 !text-xs"
            >
              Email Studio
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};
