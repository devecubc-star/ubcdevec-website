export interface TeamPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface Portfolio {
  id: string;
  name: string;
  members: TeamMember[];
}

export interface TeamMember {
  name: string;
  position: string;
  photo?: TeamPhoto;
}

function emptyMembers(): TeamMember[] {
  return Array.from({ length: 3 }, () => ({ name: 'Member name', position: 'Position' }));
}

// Put selected images in public/images/team/ and reference them here as
// /images/team/filename.jpg. Add a photo to each member when available;
// name and position can be filled in independently of their photo.
export const teamHeroPhoto: TeamPhoto | null = {
  src: '/images/team/group.jpeg',
  alt: 'UBC Development Economics Club team gathered for a group photo',
};

export const portfolios: Portfolio[] = [
  { id: 'presidential', name: 'Presidential', members: emptyMembers() },
  { id: 'academic', name: 'Academic', members: emptyMembers() },
  { id: 'admin', name: 'Admin', members: emptyMembers() },
  { id: 'events', name: 'Events', members: emptyMembers() },
  { id: 'finance', name: 'Finance', members: emptyMembers() },
  { id: 'marketing', name: 'Marketing', members: emptyMembers() },
];
