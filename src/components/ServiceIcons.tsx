interface IconProps {
  size?: number;
  className?: string;
}

/* ── AI & Machine Learning ─────────────────────────────────────────────── */
export function AiMlIcon({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="ai-brain-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="ai-network" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      {/* Brain left half */}
      <path d="M24 8 C18 8 13 11 11 16 C9 18 8 21 8 24 C8 28 10 31 13 33 C13 35 14 37 16 38 L24 38 L24 8Z"
        fill="url(#ai-brain-bg)" opacity="0.9" />
      {/* Brain right half */}
      <path d="M24 8 C30 8 35 11 37 16 C39 18 40 21 40 24 C40 28 38 31 35 33 C35 35 34 37 32 38 L24 38 L24 8Z"
        fill="#6d28d9" opacity="0.85" />
      {/* Neural network nodes on brain */}
      <circle cx="17" cy="18" r="2" fill="#a78bfa" />
      <circle cx="24" cy="15" r="2" fill="#c4b5fd" />
      <circle cx="31" cy="18" r="2" fill="#a78bfa" />
      <circle cx="16" cy="27" r="2" fill="#818cf8" />
      <circle cx="24" cy="24" r="2.5" fill="#e0e7ff" />
      <circle cx="32" cy="27" r="2" fill="#818cf8" />
      <circle cx="20" cy="33" r="2" fill="#a78bfa" />
      <circle cx="28" cy="33" r="2" fill="#a78bfa" />
      {/* Connections */}
      <line x1="17" y1="18" x2="24" y2="15" stroke="#c4b5fd" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="24" y1="15" x2="31" y2="18" stroke="#c4b5fd" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="17" y1="18" x2="16" y2="27" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="31" y1="18" x2="32" y2="27" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="16" y1="27" x2="24" y2="24" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="32" y1="27" x2="24" y2="24" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="16" y1="27" x2="20" y2="33" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="32" y1="27" x2="28" y2="33" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="24" y1="24" x2="20" y2="33" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="24" y1="24" x2="28" y2="33" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.5" />
      {/* Circuit pins radiating out */}
      <line x1="8" y1="20" x2="4" y2="20" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="20" x2="4" y2="17" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="26" x2="4" y2="26" stroke="#6d28d9" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="20" x2="44" y2="20" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="44" y1="20" x2="44" y2="17" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="26" x2="44" y2="26" stroke="#6d28d9" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="4" cy="17" r="1.2" fill="#a78bfa" />
      <circle cx="4" cy="26" r="1.2" fill="#a78bfa" />
      <circle cx="44" cy="17" r="1.2" fill="#a78bfa" />
      <circle cx="44" cy="26" r="1.2" fill="#a78bfa" />
    </svg>
  );
}

/* ── Automation & Workflows ────────────────────────────────────────────── */
export function AutomationIcon({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="gear-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="box-teal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
        <linearGradient id="box-orange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      {/* Main gear */}
      <path d="M20 6 L22 4 L26 4 L28 6 L31 5 L33 7 L33 10 L35 12 L37 12 L39 14 L39 18 L37 20 L38 23 L36 25 L33 25 L31 27 L31 30 L29 32 L25 32 L23 30 L20 31 L18 29 L18 26 L16 24 L13 24 L11 22 L11 18 L13 16 L12 13 L14 11 L17 11 L19 9 Z"
        fill="url(#gear-grad)" />
      <circle cx="25" cy="18" r="5" fill="#0c4a6e" />
      <circle cx="25" cy="18" r="3" fill="#0ea5e9" opacity="0.5" />
      {/* Arrow pointing right-down */}
      <path d="M33 28 L39 28 L39 35 L42 35 L38 40 L34 35 L37 35 L37 30 L33 30 Z"
        fill="#0ea5e9" opacity="0.85" />
      {/* Two workflow boxes at bottom */}
      <rect x="5" y="30" width="14" height="14" rx="3" fill="url(#box-teal)" />
      <rect x="23" y="36" width="14" height="9" rx="3" fill="url(#box-orange)" />
      {/* Small arrow between top-left and center */}
      <path d="M12 29 L12 27 L21 27 L21 29" stroke="#2dd4bf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Check mark in teal box */}
      <path d="M9 37 L11 39 L16 34" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Dots in orange box */}
      <circle cx="27" cy="40.5" r="1" fill="white" fillOpacity="0.9" />
      <circle cx="30" cy="40.5" r="1" fill="white" fillOpacity="0.9" />
      <circle cx="33" cy="40.5" r="1" fill="white" fillOpacity="0.9" />
    </svg>
  );
}

/* ── Custom Software Development ────────────────────────────────────────── */
export function CustomSoftwareIcon({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="editor-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="badge-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      {/* Editor window */}
      <rect x="3" y="4" width="36" height="34" rx="4" fill="url(#editor-bg)" />
      <rect x="3" y="4" width="36" height="34" rx="4" fill="none" stroke="#334155" strokeWidth="0.8" />
      {/* Title bar */}
      <rect x="3" y="4" width="36" height="10" rx="4" fill="#1e293b" />
      <rect x="3" y="9" width="36" height="5" fill="#1e293b" />
      {/* Traffic dots */}
      <circle cx="10" cy="10" r="2.2" fill="#ef4444" />
      <circle cx="17" cy="10" r="2.2" fill="#f59e0b" />
      <circle cx="24" cy="10" r="2.2" fill="#22c55e" />
      {/* Code lines */}
      <rect x="8" y="19" width="12" height="2" rx="1" fill="#60a5fa" />
      <rect x="22" y="19" width="8" height="2" rx="1" fill="#34d399" />
      <rect x="10" y="24" width="8" height="2" rx="1" fill="#f472b6" />
      <rect x="20" y="24" width="10" height="2" rx="1" fill="#fbbf24" />
      <rect x="8" y="29" width="14" height="2" rx="1" fill="#a78bfa" />
      <rect x="24" y="29" width="6" height="2" rx="1" fill="#60a5fa" />
      {/* </> badge */}
      <rect x="28" y="28" width="17" height="16" rx="4" fill="url(#badge-blue)" />
      <text x="29.5" y="40" fontFamily="monospace" fontSize="8" fontWeight="700" fill="white">&lt;/&gt;</text>
    </svg>
  );
}

/* ── Cybersecurity & Compliance ─────────────────────────────────────────── */
export function CybersecurityIcon({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="shield-outer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="60%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="shield-inner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>
      {/* Outer shield */}
      <path d="M24 3 L41 9 L41 24 C41 33 33 40 24 44 C15 40 7 33 7 24 L7 9 Z"
        fill="url(#shield-outer)" />
      {/* Inner shield (slightly inset) */}
      <path d="M24 7 L37 12 L37 24 C37 31 31 37 24 41 C17 37 11 31 11 24 L11 12 Z"
        fill="url(#shield-inner)" />
      {/* Circuit lines radiating from shield edge */}
      <line x1="5" y1="20" x2="1" y2="20" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="1" y1="20" x2="1" y2="16" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="1" cy="16" r="1.2" fill="#86efac" />
      <line x1="43" y1="20" x2="47" y2="20" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="47" y1="20" x2="47" y2="16" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="47" cy="16" r="1.2" fill="#86efac" />
      <line x1="11" y1="8" x2="8" y2="5" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="5" r="1.2" fill="#86efac" />
      <line x1="37" y1="8" x2="40" y2="5" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="40" cy="5" r="1.2" fill="#86efac" />
      {/* Lock body */}
      <rect x="18" y="22" width="12" height="10" rx="2" fill="#14532d" />
      {/* Lock shackle */}
      <path d="M19 22 L19 18 C19 15 29 15 29 18 L29 22" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Lock keyhole */}
      <circle cx="24" cy="27" r="2.2" fill="#4ade80" />
      <rect x="23" y="27" width="2" height="3" rx="1" fill="#4ade80" />
    </svg>
  );
}

/* ── Data & Analytics ──────────────────────────────────────────────────── */
export function DataAnalyticsIcon({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="bar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="bar3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="bar4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      {/* Axis */}
      <line x1="7" y1="6" x2="7" y2="40" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7" y1="40" x2="45" y2="40" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bar 1 – purple */}
      <rect x="10" y="22" width="7" height="18" rx="2" fill="url(#bar1)" />
      {/* Bar 2 – teal */}
      <rect x="20" y="14" width="7" height="26" rx="2" fill="url(#bar2)" />
      {/* Bar 3 – orange */}
      <rect x="30" y="18" width="7" height="22" rx="2" fill="url(#bar3)" />
      {/* Bar 4 – blue (partial, at edge) */}
      <rect x="40" y="10" width="5" height="30" rx="2" fill="url(#bar4)" />
      {/* Trend line over bars */}
      <polyline
        points="13.5,20 23.5,12 33.5,16 42.5,8"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray="2 1"
      />
      {/* Dots on trend line */}
      <circle cx="13.5" cy="20" r="2.5" fill="#a78bfa" />
      <circle cx="23.5" cy="12" r="2.5" fill="#34d399" />
      <circle cx="33.5" cy="16" r="2.5" fill="#fb923c" />
      <circle cx="42.5" cy="8" r="2.5" fill="#38bdf8" />
    </svg>
  );
}
