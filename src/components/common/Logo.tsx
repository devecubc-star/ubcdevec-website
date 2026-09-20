import { logos, type LogoVariant } from '../../assets/logos';

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  alt?: string;
}

const PLACEHOLDER_ASPECT: Record<LogoVariant, string> = {
  full: 'aspect-[3/1]',
  mark: 'aspect-square',
  wordmark: 'aspect-[4/1]',
};

export function Logo({ variant = 'full', className = '', alt = 'UBC Development Economics Club' }: LogoProps) {
  const src = logos[variant];

  if (!src) {
    return (
      <div
        className={`flex items-center justify-center rounded border border-dashed border-cardinal/50 bg-cardinal/5 text-cardinal ${PLACEHOLDER_ASPECT[variant]} ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-display text-xs tracking-wide uppercase">DEC</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} />;
}
