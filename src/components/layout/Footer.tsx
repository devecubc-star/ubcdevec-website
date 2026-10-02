import { NavLink } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { PageContainer } from './PageContainer';
import { ROUTES } from '../../lib/routes';

const FOOTER_LINKS = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Story', to: ROUTES.story },
  { label: 'Projects', to: ROUTES.projects },
  { label: 'Events', to: ROUTES.events },
  { label: 'Team', to: ROUTES.team },
  { label: 'Sustainable Development Lab', to: ROUTES.lab },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/devec.ubc/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/devecubc/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@devec-ubc' },
  { label: 'Email', href: 'mailto:devec.ubc@gmail.com' },
  { label: 'Membership', href: 'https://showpass.com/m/devec-membership/' },
] as const;

function ConnectIcon({ label }: { label: (typeof SOCIAL_LINKS)[number]['label'] }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      {label === 'Instagram' && <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></>}
      {label === 'LinkedIn' && <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M11 17v-7M11 13c0-4 6-4 6 0v4" /><circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none" /></>}
      {label === 'YouTube' && <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" /></>}
      {label === 'Email' && <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m3 6 9 7 9-7" /></>}
      {label === 'Membership' && <><path d="M3 5h18v5a2 2 0 0 0 0 4v5H3v-5a2 2 0 0 0 0-4z" /><path d="M15 5v2m0 3v4m0 3v2" /></>}
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-navy/10 bg-navy text-white">
      <PageContainer className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div className="flex flex-col gap-3">
          <Logo variant="wordmark" className="h-14 w-14 rounded-lg object-contain" />
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
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="flex w-fit items-center gap-3 py-1 font-sans text-sm text-white/80 transition-colors hover:text-cardinal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight">
              <ConnectIcon label={link.label} />
              {link.label}
            </a>
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
