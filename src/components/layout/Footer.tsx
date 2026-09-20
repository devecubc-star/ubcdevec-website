import { NavLink } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { PageContainer } from './PageContainer';
import { ROUTES } from '../../lib/routes';

const FOOTER_LINKS = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Story', to: ROUTES.story },
  { label: 'Projects', to: ROUTES.projects },
  { label: 'Events', to: ROUTES.events },
  { label: 'Lab', to: ROUTES.lab },
];

const SOCIAL_LINKS = ['Instagram', 'LinkedIn', 'Email'];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-navy/10 bg-navy text-white">
      <PageContainer className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div className="flex flex-col gap-3">
          <Logo variant="wordmark" className="h-8 w-auto" />
          <p className="font-sans text-sm text-white/70">
            The Development Economics Club at the University of British Columbia.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-sans text-sm font-semibold tracking-wide text-highlight uppercase">Explore</span>
          {FOOTER_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className="font-sans text-sm text-white/80 hover:text-cardinal">
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-sans text-sm font-semibold tracking-wide text-highlight uppercase">Connect</span>
          {SOCIAL_LINKS.map((label) => (
            <NavLink key={label} to={ROUTES.comingSoon} className="font-sans text-sm text-white/80 hover:text-cardinal">
              {label}
            </NavLink>
          ))}
        </div>
      </PageContainer>

      <div className="border-t border-white/10 py-6">
        <PageContainer>
          <p className="font-sans text-xs text-white/50">
            © {new Date().getFullYear()} UBC Development Economics Club. All rights reserved.
          </p>
        </PageContainer>
      </div>
    </footer>
  );
}
