import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../common/SectionHeading';

export function MissionSection() {
  return (
    <section className="bg-cardinal/5 py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Our Mission"
          title="Placeholder mission statement headline"
          description="Placeholder mission statement body — replace with the club's real mission statement."
          align="center"
          className="mb-0"
        />
      </PageContainer>
    </section>
  );
}
