import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { PageContainer } from './PageContainer';
import { ROUTES } from '../../lib/routes';

const NAV_ITEMS = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Story', to: ROUTES.story },
  { label: 'Projects', to: ROUTES.projects },
  { label: 'Events', to: ROUTES.events },
  { label: 'Team', to: ROUTES.team },
  { label: 'Sustainable Development Lab', to: ROUTES.lab },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-sans text-sm font-semibold transition-colors ${
      isActive ? 'text-cardinal' : 'text-navy hover:text-cardinal'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <PageContainer className="flex h-20 items-center justify-between">
        <NavLink to={ROUTES.home} className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo variant="mark" className="h-10 w-10 object-contain" />
          <span className="font-brand text-lg font-bold tracking-[0.08em] text-navy">UBC DEVEC</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === ROUTES.home}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to={ROUTES.comingSoon}
          className="hidden rounded-full bg-navy px-5 py-2 font-sans text-sm font-semibold text-white transition hover:bg-cardinal md:inline-block"
        >
          Join the Club
        </NavLink>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-navy" />
            <span className="h-0.5 w-5 bg-navy" />
            <span className="h-0.5 w-5 bg-navy" />
          </div>
        </button>
      </PageContainer>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy/10 bg-white px-6 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              end={item.to === ROUTES.home}
              onClick={() => setOpen(false)}
            >
              <span className="block py-2">{item.label}</span>
            </NavLink>
          ))}
          <NavLink
            to={ROUTES.comingSoon}
            className="mt-2 rounded-full bg-navy px-5 py-2 text-center font-sans text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Join the Club
          </NavLink>
        </nav>
      )}
    </header>
  );
}
