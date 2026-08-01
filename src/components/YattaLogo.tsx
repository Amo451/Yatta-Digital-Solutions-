interface LogoProps {
  variant?: 'full' | 'mark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: { mark: 32, width: 160, height: 32 },
  md: { mark: 40, width: 200, height: 40 },
  lg: { mark: 56, width: 280, height: 56 },
};

export function YattaLogo({ variant = 'full', size = 'md', className = '' }: LogoProps) {
  const s = sizes[size];

  if (variant === 'mark') {
    return (
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Yatta Digital Solutions"
      >
        <defs>
          <linearGradient id="markBg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0d1f3c" />
            <stop offset="100%" stopColor="#091428" />
          </linearGradient>
          <linearGradient id="markGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#0088cc" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Background square with rounded corners */}
        <rect width="40" height="40" rx="10" fill="url(#markBg)" />
        <rect width="40" height="40" rx="10" fill="none" stroke="url(#markGlow)" strokeWidth="0.8" strokeOpacity="0.6" />

        {/* Circuit trace grid dots (corner accents) */}
        <circle cx="6" cy="6" r="1" fill="#00a8e8" fillOpacity="0.4" />
        <circle cx="34" cy="6" r="1" fill="#00a8e8" fillOpacity="0.4" />
        <circle cx="6" cy="34" r="1" fill="#00a8e8" fillOpacity="0.4" />
        <circle cx="34" cy="34" r="1" fill="#00a8e8" fillOpacity="0.4" />

        {/* Horizontal trace lines */}
        <line x1="7" y1="6" x2="13" y2="6" stroke="#00a8e8" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="27" y1="6" x2="33" y2="6" stroke="#00a8e8" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="7" y1="34" x2="13" y2="34" stroke="#00a8e8" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="27" y1="34" x2="33" y2="34" stroke="#00a8e8" strokeWidth="0.8" strokeOpacity="0.3" />

        {/* Y letterform — circuit trace style */}
        {/* Left arm: top-left down to center */}
        <path
          d="M12 9 L20 20"
          stroke="url(#markGlow)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        {/* Right arm: top-right down to center */}
        <path
          d="M28 9 L20 20"
          stroke="url(#markGlow)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        {/* Stem: center down */}
        <path
          d="M20 20 L20 31"
          stroke="url(#markGlow)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Node dots at arm tips */}
        <circle cx="12" cy="9" r="2" fill="#00d4ff" filter="url(#glow)" />
        <circle cx="28" cy="9" r="2" fill="#00d4ff" filter="url(#glow)" />
        <circle cx="20" cy="31" r="2" fill="#00d4ff" filter="url(#glow)" />

        {/* Central junction node — slightly larger, brighter */}
        <circle cx="20" cy="20" r="3" fill="#0088cc" />
        <circle cx="20" cy="20" r="1.8" fill="#00d4ff" filter="url(#glow)" />
      </svg>
    );
  }

  return (
    <svg
      width={s.width}
      height={s.height}
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Yatta Digital Solutions"
    >
      <defs>
        <linearGradient id="fullMarkBg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d1f3c" />
          <stop offset="100%" stopColor="#091428" />
        </linearGradient>
        <linearGradient id="fullMarkGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#0088cc" />
        </linearGradient>
        <filter id="fullGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Mark */}
      <rect width="40" height="40" rx="10" fill="url(#fullMarkBg)" />
      <rect width="40" height="40" rx="10" fill="none" stroke="url(#fullMarkGlow)" strokeWidth="0.8" strokeOpacity="0.6" />

      <circle cx="6" cy="6" r="1" fill="#00a8e8" fillOpacity="0.35" />
      <circle cx="34" cy="6" r="1" fill="#00a8e8" fillOpacity="0.35" />
      <circle cx="6" cy="34" r="1" fill="#00a8e8" fillOpacity="0.35" />
      <circle cx="34" cy="34" r="1" fill="#00a8e8" fillOpacity="0.35" />
      <line x1="7" y1="6" x2="13" y2="6" stroke="#00a8e8" strokeWidth="0.7" strokeOpacity="0.25" />
      <line x1="27" y1="6" x2="33" y2="6" stroke="#00a8e8" strokeWidth="0.7" strokeOpacity="0.25" />
      <line x1="7" y1="34" x2="13" y2="34" stroke="#00a8e8" strokeWidth="0.7" strokeOpacity="0.25" />
      <line x1="27" y1="34" x2="33" y2="34" stroke="#00a8e8" strokeWidth="0.7" strokeOpacity="0.25" />

      <path d="M12 9 L20 20" stroke="url(#fullMarkGlow)" strokeWidth="2.5" strokeLinecap="round" filter="url(#fullGlow)" />
      <path d="M28 9 L20 20" stroke="url(#fullMarkGlow)" strokeWidth="2.5" strokeLinecap="round" filter="url(#fullGlow)" />
      <path d="M20 20 L20 31" stroke="url(#fullMarkGlow)" strokeWidth="2.5" strokeLinecap="round" filter="url(#fullGlow)" />

      <circle cx="12" cy="9" r="2" fill="#00d4ff" filter="url(#fullGlow)" />
      <circle cx="28" cy="9" r="2" fill="#00d4ff" filter="url(#fullGlow)" />
      <circle cx="20" cy="31" r="2" fill="#00d4ff" filter="url(#fullGlow)" />
      <circle cx="20" cy="20" r="3" fill="#0088cc" />
      <circle cx="20" cy="20" r="1.8" fill="#00d4ff" filter="url(#fullGlow)" />

      {/* YATTA wordmark */}
      <text
        x="48"
        y="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="16"
        letterSpacing="3"
        fill="white"
      >
        YATTA
      </text>

      {/* Divider */}
      <line x1="108" y1="10" x2="108" y2="30" stroke="#00a8e8" strokeWidth="0.8" strokeOpacity="0.4" />

      {/* DIGITAL SOLUTIONS */}
      <text
        x="115"
        y="19"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="500"
        fontSize="7"
        letterSpacing="2.5"
        fill="#00a8e8"
      >
        DIGITAL
      </text>
      <text
        x="115"
        y="30"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="400"
        fontSize="7"
        letterSpacing="2"
        fill="#627d98"
      >
        SOLUTIONS
      </text>
    </svg>
  );
}
