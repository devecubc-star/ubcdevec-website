import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

const PILLARS = [
  {
    title: 'Why nations grow',
    body: 'Placeholder copy — explain the growth/institutions angle of development economics.',
  },
  {
    title: 'What actually reduces poverty',
    body: 'Placeholder copy — explain the empirical/RCT angle of development economics.',
  },
  {
    title: 'Who gets left behind, and why',
    body: 'Placeholder copy — explain the inequality/distribution angle of development economics.',
  },
];

export function WhatIsDevEcon() {
  return (
    <PageContainer className="py-20">
      <SectionHeading
        eyebrow="What is Development Economics?"
        title="Understanding how economies grow, why development differs across places, and what can help close the gap."
        description="Placeholder intro paragraph — replace with the club's own framing."
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {PILLARS.map((pillar) => (
          <Card key={pillar.title}>
            <h3 className="font-display text-lg font-bold text-navy">{pillar.title}</h3>
            <p className="mt-2 font-sans text-sm text-navy/70">{pillar.body}</p>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
