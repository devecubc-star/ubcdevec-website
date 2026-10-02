import { alumniStories } from '../../data/alumni';
import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function AlumniCarousel() {
  return (
    <PageContainer className="py-20">
      <SectionHeading eyebrow="Alumni Stories" title="Member testimonials" className="mb-10" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {alumniStories.map((alum) => (
          <Card key={alum.id} className="flex gap-4">
            <div className="h-14 w-14 shrink-0 rounded-full bg-cardinal/20" aria-hidden="true" />
            <div>
              <p className="font-sans text-sm text-navy/70 italic">&ldquo;{alum.quote}&rdquo;</p>
              <p className="mt-3 font-sans text-sm font-semibold text-navy">
                {alum.name}
                {alum.gradYear && <span className="font-normal text-navy/50"> · Class of {alum.gradYear}</span>}
              </p>
              <p className="font-sans text-xs text-navy/50">{alum.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
