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

// Put selected images in public/images/team/ and reference them here as
// /images/team/filename.jpg. Add a photo to each member when available;
// name and position can be filled in independently of their photo.
export const teamHeroPhoto: TeamPhoto | null = {
  src: '/images/team/group.jpeg',
  alt: 'UBC Development Economics Club team gathered for a group photo',
};

export const portfolios: Portfolio[] = [
  {
    id: 'presidential', name: 'Presidential', members: [
      { name: 'Luke Chan', position: 'President' },
      { name: 'Lucas Epp', position: 'Executive Projects Director' },
      { name: 'Anel Melis', position: 'Executive Projects Director' },
    ],
  },
  {
    id: 'academic', name: 'Academic', members: [
      { name: 'Shree Kanetkar', position: 'VP Academic' },
      { name: 'Minh Anh Pham', position: 'Academic Project Director' },
      { name: 'Melih Salli', position: 'Academic Project Director' },
      { name: 'Sharanya Chandra', position: 'Academic Project Director' },
    ],
  },
  {
    id: 'admin', name: 'Admin', members: [
      { name: 'Selina Wu', position: 'VP Admin' },
      { name: 'Rachel Kennedy', position: 'Administrative Assistant' },
      { name: 'Rhea Brar', position: 'Communications Director' },
    ],
  },
  {
    id: 'events', name: 'Events', members: [
      { name: 'Mina Hoang', position: 'Co-VP Events' },
      { name: 'Nina Chang', position: 'Co-VP Events' },
      { name: 'Kabir Jain', position: 'Events Coordinator' },
      { name: 'Sebastian Chen-McDermott', position: 'Partnerships & Engagement Strategist' },
      { name: 'Kevin Butchart', position: 'Partnerships & Engagement Strategist' },
    ],
  },
  {
    id: 'finance', name: 'Finance', members: [
      { name: 'Lara Uyanik', position: 'VP Finance' },
      { name: 'Aarjav Mehendiratta', position: 'Treasurer' },
      { name: 'Billy Peng', position: 'Fundraising Strategist' },
      { name: 'Salma Alkhatib', position: 'Corporate Relations Director' },
    ],
  },
  {
    id: 'marketing', name: 'Marketing', members: [
      { name: 'Siddhant Rai', position: 'Co-VP Marketing' },
      { name: 'Linda Zhu', position: 'Co-VP Marketing' },
      { name: 'Mariajose Perales', position: 'Visual Design Specialist' },
    ],
  },
];
