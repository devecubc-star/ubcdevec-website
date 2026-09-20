// Shown in the "Current Research" section at the bottom of the Story page.
// Add/remove entries freely — leave `link` out to route to Coming Soon.

export interface ResearchEntry {
  id: string;
  title: string;
  authors: string[];
  blurb: string;
  year?: number;
  link?: string;
}

export const research: ResearchEntry[] = [
  {
    id: 'placeholder-1',
    title: 'Placeholder Research Paper Title',
    authors: ['Author Name'],
    blurb: 'Placeholder abstract/summary — replace with the real research entry.',
    year: 2026,
  },
];
