import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { ROUTES } from '../lib/routes';

export function ComingSoon({ title = 'Coming Soon' }: { title?: string }) {
  return (
    <PageContainer className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
      <span className="rounded-full bg-highlight/20 px-4 py-1 font-sans text-sm font-semibold text-navy">
        {title}
      </span>
      <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl">This page is still in the works.</h1>
      <p className="max-w-md font-sans text-navy/60">
        We're actively building this out. Check back soon, or head back to the homepage in the meantime.
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
