import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, visible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
