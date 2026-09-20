export const ROUTES = {
  home: '/',
  story: '/story',
  projects: '/projects',
  projectDetail: (slug: string) => `/projects/${slug}`,
  events: '/events',
  lab: '/lab',
  comingSoon: '/coming-soon',
} as const;
