import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="font-sans text-sm font-semibold tracking-wide text-cardinal uppercase">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
      {description && <p className="font-sans text-base text-navy/70">{description}</p>}
    </div>
  );
}
