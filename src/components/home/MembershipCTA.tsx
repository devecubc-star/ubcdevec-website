import { PageContainer } from '../layout/PageContainer';

export function MembershipCTA() {
  return (
    <section className="bg-navy py-20 text-white">
      <PageContainer className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Join DEVEC today</h2>
        <p className="max-w-xl font-sans text-white/70">
          As a DEVEC member, you can attend the various events that we hold, everything from DevTalks to the Internship Networking Night to the Dating Show Fundraiser, and so much more.
        </p>
        <a href="https://www.showpass.com/m/devec-membership/" className="rounded-full bg-highlight px-6 py-3 font-sans text-sm font-semibold text-navy transition hover:opacity-90">
          Become a Member
        </a>
      </PageContainer>
    </section>
  );
}
