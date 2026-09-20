import { PageContainer } from '../layout/PageContainer';
import { ComingSoonLink } from '../common/ComingSoonLink';

export function MembershipCTA() {
  return (
    <section className="bg-navy py-20 text-white">
      <PageContainer className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Join the Development Economics Club</h2>
        <p className="max-w-xl font-sans text-white/70">
          Placeholder copy — describe membership, who it's for, and what members get.
        </p>
        <ComingSoonLink className="rounded-full bg-highlight px-6 py-3 font-sans text-sm font-semibold text-navy transition hover:opacity-90">
          Become a Member
        </ComingSoonLink>
      </PageContainer>
    </section>
  );
}
