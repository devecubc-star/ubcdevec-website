export const ROUTES = {
  home: '/',
  story: '/story',
  projects: '/projects',
  projectDetail: (slug: string) => `/projects/${slug}`,
  events: '/events',
  team: '/team',
  lab: '/lab',
  comingSoon: '/coming-soon',
} as const;
