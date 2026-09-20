import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { ComingSoon } from './ComingSoon';

// No project has full detail-page content yet, so every slug currently
// falls through to Coming Soon. Once a project has a real write-up, give
// it a `detail` field in data/projects.ts and render it here instead.
export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.id === slug);

  if (!project) return <ComingSoon />;

  return (
    <PageContainer className="py-20">
      <SectionHeading eyebrow="Project" title={project.name} description={project.tagline} className="mb-8" />
      <p className="max-w-2xl font-sans text-navy/70">{project.description}</p>
      <div className="mt-12 rounded-2xl border border-dashed border-navy/20 bg-navy/5 p-8 text-center">
        <p className="font-sans text-sm text-navy/50">Full project write-up coming soon.</p>
      </div>
    </PageContainer>
  );
}
