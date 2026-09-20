import { projects } from '../data/projects';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectCard } from '../components/projects/ProjectCard';

export function Projects() {
  return (
    <PageContainer className="py-20">
      <SectionHeading
        eyebrow="Projects"
        title="What the club is building"
        description="A centralized home for our past and ongoing initiatives."
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageContainer>
  );
}
