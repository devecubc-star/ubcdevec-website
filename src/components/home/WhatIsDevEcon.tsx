import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../common/SectionHeading';

export function WhatIsDevEcon() {
  return (
    <PageContainer className="py-20">
      <SectionHeading
        eyebrow="What is Development Economics?"
        title="Understanding how economies grow, why development differs across places, and what can help close the gap."
        align="center"
      />
    </PageContainer>
  );
}
