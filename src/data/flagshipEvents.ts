// The club's recurring signature event series (not dated instances — see
// events.ts for specific upcoming dates). Shown as cards on the Events page.

export interface FlagshipEvent {
  id: 'devtalks' | 'internship-networking-night' | 'perspectives-in-development';
  name: string;
  description: string;
  link?: string;
}

export const flagshipEvents: FlagshipEvent[] = [
  {
    id: 'devtalks',
    name: 'DevTalks',
    description: 'Placeholder description — replace with the real series description.',
  },
  {
    id: 'internship-networking-night',
    name: 'Internship Networking Night',
    description: 'Placeholder description — replace with the real series description.',
  },
  {
    id: 'perspectives-in-development',
    name: 'Perspectives in Development',
    description: 'Placeholder description — replace with the real series description.',
  },
];
