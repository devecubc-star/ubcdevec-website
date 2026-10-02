import { PageContainer } from '../components/layout/PageContainer';
import { portfolios, teamHeroPhoto } from '../data/team';

function PhotoPlaceholder({ group = false }: { group?: boolean }) {
  return (
    <div className={`flex h-full flex-col items-center justify-center gap-4 ${group ? 'text-white/70' : 'text-navy/40'}`}>
      <svg width="64" height="48" viewBox="0 0 64 48" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="62" height="46" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="44" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 38L20 20L38 38L47 29L62 43" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-xs font-semibold tracking-widest uppercase">
        {group ? 'Our team · Group photo coming soon' : 'Photos coming soon'}
      </span>
    </div>
  );
}

export function Team() {
  return (
    <PageContainer className="py-12 sm:py-20">
      <div className="mb-10 grid items-end gap-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-widest text-cardinal uppercase italic">The people behind DEVEC</p>
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">Meet the team.</h1>
        </div>
        <p className="max-w-md text-lg leading-relaxed text-navy/70 md:justify-self-end">
          DEVEC’s six portfolios keep the club running, from social media to event planning to finances
          and everything else in between. Together, our passionate team brings development economics to life at UBC.
        </p>
      </div>

      <figure className="overflow-hidden rounded-3xl bg-navy">
        <div className={`relative overflow-hidden ${teamHeroPhoto ? 'aspect-[4/3] sm:aspect-[16/10]' : 'aspect-[4/3] sm:aspect-[21/9]'}`}>
          {teamHeroPhoto ? (
            <img src={teamHeroPhoto.src} alt={teamHeroPhoto.alt} className="block h-full w-full rotate-[1deg] scale-[1.035] object-cover object-[center_78%]" fetchPriority="high" />
          ) : (
            <>
              <div aria-hidden="true" className="absolute -right-16 -top-32 h-96 w-96 rounded-full border border-white/10" />
              <div aria-hidden="true" className="absolute -bottom-48 -left-16 h-96 w-96 rounded-full border border-highlight/30" />
              <div className="absolute inset-0 px-6 text-center"><PhotoPlaceholder group /></div>
            </>
          )}
        </div>
        {teamHeroPhoto?.caption && <figcaption className="px-6 py-4 text-sm text-white/80">{teamHeroPhoto.caption}</figcaption>}
      </figure>

      <nav aria-label="Team portfolios" className="mt-8 flex flex-wrap gap-3">
        {portfolios.map((portfolio) => (
          <a key={portfolio.id} href={`#${portfolio.id}`} className="rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-navy hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cardinal">
            {portfolio.name} <span aria-hidden="true" className="ml-2 text-cardinal">↘</span>
          </a>
        ))}
      </nav>

      <div className="mt-16 sm:mt-24">
        {portfolios.map((portfolio, index) => (
          <section key={portfolio.id} id={portfolio.id} aria-labelledby={`${portfolio.id}-heading`} className="scroll-mt-28 border-t border-navy/15 py-12 sm:py-16">
            <div className="mb-7 flex items-center gap-5">
              <span className="font-serif text-xl text-cardinal">{String(index + 1).padStart(2, '0')}</span>
              <h2 id={`${portfolio.id}-heading`} className="font-display text-3xl font-bold sm:text-4xl">{portfolio.name}</h2>
              <span className="ml-auto hidden text-xs font-semibold tracking-widest text-navy/50 uppercase italic sm:block">Our portfolios</span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {portfolio.members.map((member, slot) => (
                <figure key={slot}>
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-navy/5">
                    {member.photo ? (
                      <img src={member.photo.src} alt={member.photo.alt} loading="lazy" className="h-full w-full object-cover" />
                    ) : <PhotoPlaceholder />}
                  </div>
                  <figcaption className="mt-4">
                    <p className="text-lg font-semibold text-navy">{member.name}</p>
                    <p className="mt-1 text-sm text-navy/60">{member.position}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
