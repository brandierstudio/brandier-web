import React from 'react';

interface LogoProps {
  theme: 'dark' | 'light';
  size?: number;
  className?: string;
}

/**
 * Brandier Web Iridescent B-Monogram (Uploaded logo with background removed)
 */
export const BrandierWebMark: React.FC<LogoProps> = ({ theme, size = 30, className = '' }) => {
  const src =
    theme === 'dark'
      ? '/assets/brandier-web-dark-mark.png'
      : '/assets/brandier-web-light-mark.png';

  return (
    <img
      src={src}
      alt="Brandier Web Logo"
      width={size}
      height={size}
      referrerPolicy="no-referrer"
      className={`object-contain shrink-0 select-none ${className}`}
    />
  );
};

/**
 * Brandier Web Full Lockup with "BRANDIER WEB" wordmark (Uploaded logo with background removed)
 */
export const BrandierWebFullLogo: React.FC<LogoProps> = ({ theme, size = 64, className = '' }) => {
  const src =
    theme === 'dark'
      ? '/assets/brandier-web-dark-full.png'
      : '/assets/brandier-web-light-full.png';

  return (
    <img
      src={src}
      alt="Brandier Web Full Logo"
      style={{ height: size, width: 'auto' }}
      referrerPolicy="no-referrer"
      className={`object-contain shrink-0 select-none ${className}`}
    />
  );
};

/**
 * Official Brandier Studio Hex Aperture Logo (Extracted from brandierstudio.online with background removed)
 */
export const BrandierStudioHexMark: React.FC<LogoProps> = ({ theme, size = 28, className = '' }) => {
  const src =
    theme === 'dark'
      ? '/assets/brandier-studio-mark-dark.png'
      : '/assets/brandier-studio-mark-light.png';

  return (
    <img
      src={src}
      alt="Brandier Studio Official Logo"
      width={size}
      height={size}
      referrerPolicy="no-referrer"
      className={`object-contain shrink-0 select-none ${className}`}
    />
  );
};

/**
 * Official Brandier Studio TV Vector Emblem (Exact SVG from tv.brandierstudio.online with Brandier gradient accent)
 */
export const BrandierTvLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 22,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 select-none ${className}`}
    >
      <defs>
        <linearGradient id="brandierTvGrad" x1="60" y1="420" x2="440" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="35%" stopColor="#6366F1" />
          <stop offset="70%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
      </defs>
      <path
        fill="url(#brandierTvGrad)"
        d="M161.7,77.3 L92.4,136.5 L92.4,321.4 L250.0,412.3 L272.5,398.9 L150.3,328.4 L150.3,170.0 L161.7,77.3 Z"
      />
      <path
        fill="url(#brandierTvGrad)"
        d="M338.3,422.7 L407.6,363.5 L407.6,178.6 L250.0,87.7 L227.5,101.1 L349.7,171.6 L349.7,330.0 L338.3,422.7 Z"
      />
      <path
        fill="currentColor"
        d="M221.7,40.1 L250.0,91.5 L391.2,173.0 L391.2,143.0 L260.6,67.6 L221.7,40.1 Z"
      />
      <path
        fill="currentColor"
        d="M278.3,459.9 L250.0,408.5 L108.8,327.0 L108.8,357.0 L239.4,432.4 L278.3,459.9 Z"
      />
      <path
        fill="url(#brandierTvGrad)"
        d="M186.5,101.9 L206.5,236.0 L309.8,210.0 L186.5,101.9 Z"
      />
      <path
        fill="url(#brandierTvGrad)"
        d="M313.5,398.1 L293.5,264.0 L190.2,290.0 L313.5,398.1 Z"
      />
      <path
        fill="currentColor"
        d="M250.0,163.4 L335.7,171.3 L293.5,263.8 L250.0,163.4 Z"
      />
      <path
        fill="currentColor"
        d="M250.0,336.6 L164.3,328.7 L206.5,236.2 L250.0,336.6 Z"
      />
    </svg>
  );
};
