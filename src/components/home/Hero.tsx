import { ComingSoonLink } from '../common/ComingSoonLink';
import eventPhoto from '../../assets/photos/home-event.jpg';
import ubcWordmark from '../../assets/logos/ubc-wordmark.svg';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <img src={eventPhoto} alt="" className="absolute inset-0 h-full w-full object-cover object-[65%_center]" fetchPriority="high" />
      <div className="absolute inset-0 bg-navy/65" />
      <div className="absolute inset-0 bg-linear-to-r from-navy/80 via-navy/35 to-transparent" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-28 sm:py-36">
        <div className="relative aspect-[1788/166] font-brand text-4xl font-normal tracking-tight sm:text-6xl">
          <span aria-hidden="true" className="invisible block h-0 overflow-hidden whitespace-nowrap">Understanding</span>
          <img src={ubcWordmark} alt="The University of British Columbia" className="absolute inset-0 h-full w-full" />
        </div>
        <h1 className="max-w-3xl font-brand text-4xl leading-[1.18] font-normal tracking-tight sm:text-6xl">
          Understanding our world through development economics.
        </h1>
        <p className="max-w-xl font-sans text-lg text-white/80">
          We are UBC’s first club to bring together students from all disciplines to discuss the economic, social, and fiscal conditions of the developing world.
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
