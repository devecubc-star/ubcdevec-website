import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../lib/routes';

interface ComingSoonLinkProps {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Every button/CTA/nav item in the site should render through this
 * component instead of a raw <Link>/<a>. If neither `to` nor `href` is
 * given (e.g. an events/projects/research data row with no link yet),
 * it structurally falls through to the shared Coming Soon page — nobody
 * has to remember a null check.
 */
export function ComingSoonLink({ to, href, children, className }: ComingSoonLinkProps) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={ROUTES.comingSoon} className={className}>
      {children}
    </Link>
  );
}
