import { formatEventDate, getUpcomingEvents } from '../../data/events';
import { ComingSoonLink } from '../common/ComingSoonLink';

export function EventList() {
  const upcoming = getUpcomingEvents();

  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-navy/10 p-5">
      <h3 className="font-display text-lg font-bold text-navy">Upcoming Events</h3>
      {upcoming.length === 0 ? (
        <p className="font-sans text-sm text-navy/50">No upcoming events yet — check back soon.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {upcoming.map((event) => (
            <li key={event.id} className="border-b border-navy/10 pb-4 last:border-none last:pb-0">
              <p className="font-sans text-xs font-semibold text-cardinal">
                {formatEventDate(event.date)}
                {event.time ? ` · ${event.time}` : ''}
              </p>
              <p className="mt-1 font-sans text-sm font-semibold text-navy">{event.title}</p>
              <p className="font-sans text-xs text-navy/60">{event.location}</p>
              <ComingSoonLink
                href={event.rsvpUrl}
                className="mt-1 inline-block font-sans text-xs font-semibold text-cardinal hover:underline"
              >
                RSVP →
              </ComingSoonLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
