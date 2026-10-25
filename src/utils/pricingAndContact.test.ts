import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PACKAGE_PLANS,
  evaluatePromoCode,
  calculateDesireEstimate,
  validateLeadInquiry,
  buildWhatsAppUrl,
  formatPrice,
} from './pricingAndContact';

test('evaluatePromoCode applies valid Brandier discount codes accurately', () => {
  const growthPlan = PACKAGE_PLANS.find((p) => p.id === 'growth')!;
  const res15 = evaluatePromoCode('brandier15', growthPlan, 'project');
  assert.equal(res15.valid, true);
  assert.equal(res15.discountPercent, 15);
  assert.equal(res15.finalPrice, Math.round(950 * 0.85));

  const res20 = evaluatePromoCode('SPECIAL20', growthPlan, 'retainer');
  assert.equal(res20.valid, true);
  assert.equal(res20.discountPercent, 20);
  assert.equal(res20.finalPrice, Math.round(750 * 0.8));
});

test('evaluatePromoCode handles invalid codes and custom Studio tier', () => {
  const studioPlan = PACKAGE_PLANS.find((p) => p.id === 'studio')!;
  const studioRes = evaluatePromoCode('WELCOME10', studioPlan, 'project');
  assert.equal(studioRes.valid, false);
  assert.equal(studioRes.finalPrice, 0);

  const starterPlan = PACKAGE_PLANS.find((p) => p.id === 'starter')!;
  const badRes = evaluatePromoCode('INVALID99', starterPlan, 'project');
  assert.equal(badRes.valid, false);
  assert.equal(badRes.finalPrice, 490);
});

test('calculateDesireEstimate computes accurate custom website + AI ad pricing', () => {
  const est = calculateDesireEstimate({
    serviceType: 'both',
    pagesCount: 5,
    adVideosCount: 3,
    includeLightDarkMode: true,
    includeCustomLogoBgRemoval: true,
    expressDelivery: false,
  });
  // webBase = 350 + 5*95 = 825; adsBase = 3*180 = 540; +90 +60 = 1515
  assert.equal(est.estimatedTotal, 1515);
  assert.equal(est.recommendedTier, 'Growth');
  assert.equal(est.summaryPoints.length, 4);
});

test('validateLeadInquiry enforces required fields and email format', () => {
  const invalid = validateLeadInquiry({
    name: 'A',
    email: 'not-an-email',
    service: 'Websites On Your Own Desire',
    budget: '$950',
    message: 'Short',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateLeadInquiry({
    name: 'Anas Client',
    email: 'client@example.com',
    service: 'Websites On Your Own Desire + AI Ads',
    budget: '$1,850',
    message: 'We need a dark/light liquid metal website and 3 AI UGC ads.',
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('buildWhatsAppUrl formats Pakistan number 03158878955 to +923158878955', () => {
  const url = buildWhatsAppUrl('Assalam o Alaikum Brandier Studio!');
  assert.ok(url.startsWith('https://wa.me/923158878955?text='));
  assert.equal(formatPrice(950), '$950');
  assert.equal(formatPrice(0), 'Custom');
});
