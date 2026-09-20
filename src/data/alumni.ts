// Shown in the Home page's Alumni Stories section. Leave `photoUrl` out
// for a placeholder avatar.

export interface AlumniStory {
  id: string;
  name: string;
  gradYear?: number;
  role: string;
  quote: string;
  photoUrl?: string;
}

export const alumniStories: AlumniStory[] = [
  {
    id: 'placeholder-1',
    name: 'Alumni Name',
    gradYear: 2024,
    role: 'Placeholder role/organization',
    quote: 'Placeholder quote about their experience in the club — replace with a real story.',
  },
  {
    id: 'placeholder-2',
    name: 'Alumni Name',
    gradYear: 2023,
    role: 'Placeholder role/organization',
    quote: 'Placeholder quote about their experience in the club — replace with a real story.',
  },
];
