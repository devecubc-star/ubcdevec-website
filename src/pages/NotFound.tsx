import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { ROUTES } from '../lib/routes';

export function NotFound() {
  return (
    <PageContainer className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
      <h1 className="font-display text-5xl font-bold text-navy">404</h1>
      <p className="max-w-md font-sans text-navy/60">
        We couldn't find that page. It may have moved, or the link might be broken.
      </p>
      <Link
        to={ROUTES.home}
        className="mt-4 rounded-full bg-navy px-6 py-3 font-sans text-sm font-semibold text-white transition hover:bg-cardinal"
      >
        Back to Home
      </Link>
    </PageContainer>
  );
}
