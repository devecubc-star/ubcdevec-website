// Shown as cards on the Projects page. `link` can be an internal route
// (e.g. "/projects/development-in-review") or an external URL — leave it
// out to route to Coming Soon.

export interface ClubProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  link?: string;
}

export const projects: ClubProject[] = [
  {
    id: 'development-in-review',
    name: 'Development in Review',
    tagline: 'Placeholder tagline — replace with the real one-liner.',
    description: 'Placeholder description — replace with the real project description.',
  },
  {
    id: 'sustainable-development-lab',
    name: 'The Sustainable Development Lab',
    tagline: 'Placeholder tagline — replace with the real one-liner.',
    description: 'Placeholder description — replace with the real project description.',
  },
];
