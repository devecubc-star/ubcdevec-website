import { formatEventDate, getUpcomingEvents } from '../../data/events';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { ComingSoonLink } from '../common/ComingSoonLink';
import { ROUTES } from '../../lib/routes';

export function UpcomingEventsPreview() {
  const upcoming = getUpcomingEvents(3);

  return (
    <PageContainer className="py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="What's Next" title="Upcoming Events" className="mb-0" />
        <ComingSoonLink to={ROUTES.events} className="font-sans text-sm font-semibold text-cardinal hover:underline">
          View all events →
        </ComingSoonLink>
      </div>

      {upcoming.length === 0 ? (
        <p className="font-sans text-navy/50">No upcoming events yet — check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {upcoming.map((event) => (
            <div key={event.id} className="rounded-2xl border border-navy/10 p-5">
              <p className="font-sans text-xs font-semibold text-cardinal">{formatEventDate(event.date)}</p>
              <h3 className="mt-2 font-display text-lg font-bold text-navy">{event.title}</h3>
              <p className="mt-1 font-sans text-sm text-navy/60">{event.location}</p>
            </div>
          ))}
        </div>
      )}
    </PageContainer>
  );
}
