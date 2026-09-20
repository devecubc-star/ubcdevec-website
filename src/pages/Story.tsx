import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { ScrollySection } from '../components/story/ScrollySection';
import { HockeyStickChart } from '../components/story/HockeyStickChart';
import { HistoricalMap } from '../components/story/HistoricalMap';
import { InequalityMap } from '../components/story/InequalityMap';
import { ResearchGrid } from '../components/story/ResearchGrid';

export function Story() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <PageContainer className="pt-16">
        <SectionHeading
          eyebrow="Our Story"
          title="A short history of human progress — and how far there still is to go"
          description="For nearly all of human history, most people everywhere lived in poverty most of us today would find unimaginable. That changed, recently and unevenly. This page is our attempt to show both halves of that story: how much better things have become, and how awful things can still be."
        />
      </PageContainer>

      <PageContainer>
        <ScrollySection
          steps={[
            <div key="1" className="max-w-md">
              <h3 className="font-display text-2xl font-bold text-navy">The hockey stick</h3>
              <p className="mt-3 font-sans text-navy/70">
                For most of the last two thousand years, average incomes barely moved. Then, starting around the
                Industrial Revolution, something changed — and the change has been accelerating ever since. Hover
                over the chart to see the numbers behind the curve.
              </p>
            </div>,
            <div key="2" className="max-w-md">
              <h3 className="font-display text-2xl font-bold text-navy">Uneven, but real, progress</h3>
              <p className="mt-3 font-sans text-navy/70">
                Rising average income came with rising life expectancy — but not at the same time, or the same pace,
                everywhere. Drag the slider through history to see how that gap opened, and how it has started to
                close.
              </p>
            </div>,
            <div key="3" className="max-w-md">
              <h3 className="font-display text-2xl font-bold text-navy">Where things stand today</h3>
              <p className="mt-3 font-sans text-navy/70">
                Global poverty has fallen dramatically over the last few decades. But "better" is not the same as
                "good" — the gap between the richest and poorest countries today is larger than at almost any point
                in history. Hover over the map to compare countries.
              </p>
            </div>,
          ]}
          renderVisual={(activeStep) => {
            if (activeStep === 0) return <HockeyStickChart />;
            if (activeStep === 1) return <HistoricalMap />;
            return <InequalityMap />;
          }}
        />
      </PageContainer>

      <PageContainer>
        <SectionHeading
          eyebrow="Current Research"
          title="What the club is reading and writing about"
          description="A running list the team updates by hand — see src/data/research.ts."
          className="mb-10"
        />
        <ResearchGrid />
      </PageContainer>
    </div>
  );
}
