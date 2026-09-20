import type { ClubProject } from '../../data/projects';
import { Card } from '../common/Card';
import { ComingSoonLink } from '../common/ComingSoonLink';

export function ProjectCard({ project }: { project: ClubProject }) {
  const isInternal = project.link?.startsWith('/');

  return (
    <Card className="flex flex-col gap-3">
      <h3 className="font-display text-xl font-bold text-navy">{project.name}</h3>
      <p className="font-sans text-sm font-semibold text-cardinal">{project.tagline}</p>
      <p className="flex-1 font-sans text-sm text-navy/70">{project.description}</p>
      <ComingSoonLink
        to={isInternal ? project.link : undefined}
        href={!isInternal ? project.link : undefined}
        className="font-sans text-sm font-semibold text-navy hover:underline"
      >
        Learn more →
      </ComingSoonLink>
    </Card>
  );
}
