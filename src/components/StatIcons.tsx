interface StatIconProps {
  size?: number;
  className?: string;
}

/* ── Rocket — Projects Delivered ──────────────────────────────────────── */
export function RocketStatIcon({ size = 96, className = '' }: StatIconProps) {
  const id = 'r';
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a3a6e" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#0d1f42" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#080c1e" stopOpacity="1" />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-blur`}>
          <feGaussianBlur stdDeviation="1.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Outer glow ring */}
      <circle cx="48" cy="48" r="46" fill={`url(#${id}-glow)`} />
      {/* Main circle */}
      <circle cx="48" cy="48" r="40" fill={`url(#${id}-bg)`} />
      <circle cx="48" cy="48" r="40" stroke="#1e3a7a" strokeWidth="1" strokeOpacity="0.8" fill="none" />

      {/* Sparkle dots */}
      <circle cx="20" cy="22" r="1.5" fill="#60a5fa" fillOpacity="0.8" />
      <circle cx="76" cy="20" r="1.5" fill="#93c5fd" fillOpacity="0.7" />
      <circle cx="18" cy="72" r="1.2" fill="#60a5fa" fillOpacity="0.6" />
      <circle cx="78" cy="74" r="1.2" fill="#93c5fd" fillOpacity="0.5" />
      <circle cx="26" cy="48" r="1" fill="#bfdbfe" fillOpacity="0.5" />
      <circle cx="72" cy="44" r="1" fill="#bfdbfe" fillOpacity="0.5" />
      {/* Small cross-sparkle top-left */}
      <line x1="20" y1="20" x2="20" y2="24" stroke="#93c5fd" strokeWidth="0.8" strokeOpacity="0.7" />
      <line x1="18" y1="22" x2="22" y2="22" stroke="#93c5fd" strokeWidth="0.8" strokeOpacity="0.7" />

      {/* Rocket body */}
      <path
        d="M54 30 C54 30 60 36 60 44 L60 52 L36 52 L36 44 C36 36 42 30 48 26 C48 26 54 30 54 30Z"
        stroke="#3b82f6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter={`url(#${id}-blur)`}
      />
      {/* Rocket nose tip */}
      <path
        d="M42 30 C42 30 48 22 48 22 C48 22 54 30 54 30"
        stroke="#60a5fa"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter={`url(#${id}-blur)`}
      />
      {/* Rocket window */}
      <circle cx="48" cy="40" r="4" stroke="#7dd3fc" strokeWidth="1.6" fill="none" filter={`url(#${id}-blur)`} />
      <circle cx="48" cy="40" r="1.5" fill="#7dd3fc" fillOpacity="0.6" />
      {/* Left fin */}
      <path
        d="M36 52 L30 58 L36 58 Z"
        stroke="#3b82f6"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right fin */}
      <path
        d="M60 52 L66 58 L60 58 Z"
        stroke="#3b82f6"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Exhaust flames */}
      <path
        d="M42 58 C42 58 44 64 48 64 C52 64 54 58 54 58"
        stroke="#60a5fa"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${id}-blur)`}
      />
      <path
        d="M44 62 C44 62 46 68 48 68 C50 68 52 62 52 62"
        stroke="#93c5fd"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

/* ── Globe + Users — Enterprise Clients ───────────────────────────────── */
export function GlobeUsersStatIcon({ size = 96, className = '' }: StatIconProps) {
  const id = 'g';
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a3a6e" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#0d1f42" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#080c1e" stopOpacity="1" />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-blur`}>
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="48" cy="48" r="46" fill={`url(#${id}-glow)`} />
      <circle cx="48" cy="48" r="40" fill={`url(#${id}-bg)`} />
      <circle cx="48" cy="48" r="40" stroke="#1e3a7a" strokeWidth="1" strokeOpacity="0.8" fill="none" />

      {/* Sparkles */}
      <circle cx="22" cy="24" r="1.5" fill="#60a5fa" fillOpacity="0.7" />
      <circle cx="74" cy="22" r="1.5" fill="#93c5fd" fillOpacity="0.6" />
      <line x1="74" y1="20" x2="74" y2="24" stroke="#93c5fd" strokeWidth="0.8" strokeOpacity="0.6" />
      <line x1="72" y1="22" x2="76" y2="22" stroke="#93c5fd" strokeWidth="0.8" strokeOpacity="0.6" />

      {/* Globe circle */}
      <circle cx="48" cy="37" r="15" stroke="#3b82f6" strokeWidth="1.8" fill="none" filter={`url(#${id}-blur)`} />
      {/* Globe latitude lines */}
      <ellipse cx="48" cy="37" rx="15" ry="6" stroke="#3b82f6" strokeWidth="1.4" fill="none" />
      {/* Globe meridian */}
      <line x1="48" y1="22" x2="48" y2="52" stroke="#3b82f6" strokeWidth="1.4" />
      {/* Globe horizontal equator */}
      <line x1="33" y1="37" x2="63" y2="37" stroke="#3b82f6" strokeWidth="1.4" />
      {/* Upper latitude curve */}
      <path d="M34 30 Q48 33 62 30" stroke="#60a5fa" strokeWidth="1.1" fill="none" strokeOpacity="0.7" />
      {/* Lower latitude curve */}
      <path d="M34 44 Q48 41 62 44" stroke="#60a5fa" strokeWidth="1.1" fill="none" strokeOpacity="0.7" />

      {/* Person center (larger) */}
      <circle cx="48" cy="60" r="4.5" stroke="#7dd3fc" strokeWidth="1.6" fill="none" filter={`url(#${id}-blur)`} />
      <path d="M40 72 C40 67 43.5 64.5 48 64.5 C52.5 64.5 56 67 56 72"
        stroke="#7dd3fc" strokeWidth="1.6" strokeLinecap="round" fill="none" filter={`url(#${id}-blur)`} />

      {/* Person left */}
      <circle cx="35" cy="61" r="3.5" stroke="#3b82f6" strokeWidth="1.4" fill="none" />
      <path d="M28 72 C28 68 31 65.5 35 65.5 C39 65.5 42 68 42 72"
        stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" fill="none" />

      {/* Person right */}
      <circle cx="61" cy="61" r="3.5" stroke="#3b82f6" strokeWidth="1.4" fill="none" />
      <path d="M54 72 C54 68 57 65.5 61 65.5 C65 65.5 68 68 68 72"
        stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ── Shield + Heartbeat — System Uptime ───────────────────────────────── */
export function UptimeStatIcon({ size = 96, className = '' }: StatIconProps) {
  const id = 'u';
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a3a6e" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#0d1f42" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#080c1e" stopOpacity="1" />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-blur`}>
          <feGaussianBlur stdDeviation="1.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="48" cy="48" r="46" fill={`url(#${id}-glow)`} />
      <circle cx="48" cy="48" r="40" fill={`url(#${id}-bg)`} />
      <circle cx="48" cy="48" r="40" stroke="#1e3a7a" strokeWidth="1" strokeOpacity="0.8" fill="none" />

      {/* Sparkles */}
      <circle cx="74" cy="24" r="1.5" fill="#60a5fa" fillOpacity="0.7" />
      <line x1="74" y1="22" x2="74" y2="26" stroke="#60a5fa" strokeWidth="0.8" strokeOpacity="0.7" />
      <line x1="72" y1="24" x2="76" y2="24" stroke="#60a5fa" strokeWidth="0.8" strokeOpacity="0.7" />
      <circle cx="22" cy="70" r="1.2" fill="#93c5fd" fillOpacity="0.5" />

      {/* Shield outer */}
      <path
        d="M48 22 L66 29 L66 46 C66 57 58 65 48 69 C38 65 30 57 30 46 L30 29 Z"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
        filter={`url(#${id}-blur)`}
      />
      {/* Shield inner (slightly smaller, same shape) */}
      <path
        d="M48 26 L62 32 L62 46 C62 55 55 62 48 65 C41 62 34 55 34 46 L34 32 Z"
        stroke="#60a5fa"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
        strokeOpacity="0.4"
      />

      {/* Heartbeat / ECG line inside shield */}
      <polyline
        points="32,46 38,46 40,38 43,54 46,40 49,52 52,44 54,46 64,46"
        stroke="#7dd3fc"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter={`url(#${id}-blur)`}
      />

      {/* Checkmark badge (bottom-right of shield) */}
      <circle cx="62" cy="62" r="9" fill="#1e3a78" />
      <circle cx="62" cy="62" r="9" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      <circle cx="62" cy="62" r="9" fill="#1d4ed8" fillOpacity="0.25" />
      <path
        d="M57 62 L60 65 L67 58"
        stroke="#60a5fa"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter={`url(#${id}-blur)`}
      />
    </svg>
  );
}

/* ── Medal / Award — Average Experience ───────────────────────────────── */
export function AwardStatIcon({ size = 96, className = '' }: StatIconProps) {
  const id = 'a';
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a3a6e" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#0d1f42" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#080c1e" stopOpacity="1" />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-blur`}>
          <feGaussianBlur stdDeviation="1.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="48" cy="48" r="46" fill={`url(#${id}-glow)`} />
      <circle cx="48" cy="48" r="40" fill={`url(#${id}-bg)`} />
      <circle cx="48" cy="48" r="40" stroke="#1e3a7a" strokeWidth="1" strokeOpacity="0.8" fill="none" />

      {/* Sparkle top-right */}
      <circle cx="74" cy="24" r="1.5" fill="#60a5fa" fillOpacity="0.8" />
      <line x1="74" y1="21" x2="74" y2="27" stroke="#93c5fd" strokeWidth="0.9" strokeOpacity="0.7" />
      <line x1="71" y1="24" x2="77" y2="24" stroke="#93c5fd" strokeWidth="0.9" strokeOpacity="0.7" />
      {/* Sparkle top-left */}
      <circle cx="22" cy="30" r="1.2" fill="#bfdbfe" fillOpacity="0.6" />
      <line x1="22" y1="28" x2="22" y2="32" stroke="#bfdbfe" strokeWidth="0.7" strokeOpacity="0.5" />
      <line x1="20" y1="30" x2="24" y2="30" stroke="#bfdbfe" strokeWidth="0.7" strokeOpacity="0.5" />
      {/* Sparkle bottom-left */}
      <circle cx="26" cy="70" r="1" fill="#60a5fa" fillOpacity="0.5" />

      {/* Outer ring of medal */}
      <circle cx="48" cy="40" r="18" stroke="#3b82f6" strokeWidth="2" fill="none" filter={`url(#${id}-blur)`} />
      {/* Inner ring */}
      <circle cx="48" cy="40" r="13" stroke="#2563eb" strokeWidth="1.2" fill="none" />
      {/* Filled inner circle subtle */}
      <circle cx="48" cy="40" r="13" fill="#1e3a78" fillOpacity="0.6" />

      {/* Star inside medal */}
      <path
        d="M48 28 L50.4 35.2 L58 35.2 L52 39.8 L54.4 47 L48 42.4 L41.6 47 L44 39.8 L38 35.2 L45.6 35.2 Z"
        stroke="#7dd3fc"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
        filter={`url(#${id}-blur)`}
      />
      <path
        d="M48 30 L50 36.2 L56.5 36.2 L51.2 40.2 L53.2 46.4 L48 42.6 L42.8 46.4 L44.8 40.2 L39.5 36.2 L46 36.2 Z"
        fill="#3b82f6"
        fillOpacity="0.25"
      />

      {/* Ribbon left */}
      <path
        d="M40 56 L36 72 L48 64 Z"
        stroke="#3b82f6"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Ribbon right */}
      <path
        d="M56 56 L60 72 L48 64 Z"
        stroke="#3b82f6"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Ribbon connector */}
      <line x1="40" y1="56" x2="56" y2="56" stroke="#3b82f6" strokeWidth="1.6" />
    </svg>
  );
}
