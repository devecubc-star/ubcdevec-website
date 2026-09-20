import { ComingSoonLink } from '../common/ComingSoonLink';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-cardinal)_0%,_transparent_45%)] opacity-30" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-28 sm:py-36">
        <span className="rounded-full border border-highlight/40 bg-highlight/10 px-4 py-1 font-sans text-sm font-semibold text-highlight">
          University of British Columbia
        </span>
        <h1 className="max-w-3xl font-display text-4xl font-bold sm:text-6xl">
          Understanding — and changing — global development.
        </h1>
        <p className="max-w-xl font-sans text-lg text-white/80">
          The Development Economics Club connects students, researchers, and practitioners working to understand
          poverty, growth, and human progress — and what actually works to improve them.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <ComingSoonLink className="rounded-full bg-highlight px-6 py-3 font-sans text-sm font-semibold text-navy transition hover:opacity-90">
            Become a Member
          </ComingSoonLink>
          <ComingSoonLink
            to="/story"
            className="rounded-full border border-white/30 px-6 py-3 font-sans text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Read Our Story
          </ComingSoonLink>
        </div>
      </div>
    </section>
  );
}
