// Dated, one-off events. Both the Home page's "Upcoming Events" preview and
// the Events page pull from this single list — add an event here once and
// it shows up in both places automatically.
//
// To add an event, copy an existing entry and edit the fields. `rsvpUrl` is
// optional — leave it out and the "RSVP" button will link to the Coming
// Soon page instead of breaking.

export interface ClubEvent {
  id: string;
  title: string;
  date: string; // ISO date, e.g. "2026-03-14"
  time?: string; // display-only, e.g. "6:00 PM"
  location: string;
  description: string;
  rsvpUrl?: string;
}

export const events: ClubEvent[] = [
  {
    id: 'devtalks-fall-2026',
    title: 'DevTalks: Fall Speaker Series',
    date: '2026-10-15',
    time: '6:00 PM',
    location: 'UBC Vancouver Campus',
    description: 'Placeholder description — replace with the real event details.',
  },
  {
    id: 'internship-networking-2026',
    title: 'Internship Networking Night',
    date: '2026-11-05',
    time: '5:30 PM',
    location: 'UBC Vancouver Campus',
    description: 'Placeholder description — replace with the real event details.',
  },
];

export function getUpcomingEvents(limit?: number): ClubEvent[] {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  return limit ? upcoming.slice(0, limit) : upcoming;
}

// `new Date("2026-10-15")` parses as UTC midnight, which then renders as the
// previous day in any timezone behind UTC — parse the parts as a local date
// instead so the displayed date always matches what's in the data file.
export function formatEventDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
