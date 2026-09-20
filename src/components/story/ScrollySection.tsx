import type { ReactNode } from 'react';
import { useScrollyStep } from './useScrollyStep';

interface ScrollySectionProps {
  steps: ReactNode[];
  renderVisual: (activeStep: number) => ReactNode;
}

/**
 * Pins `renderVisual` in a sticky column while `steps` scroll past beside
 * it, and reports which step is currently in view so the visual can react
 * (e.g. moving a map's time slider, highlighting a chart region).
 */
export function ScrollySection({ steps, renderVisual }: ScrollySectionProps) {
  const { activeStep, setStepRef } = useScrollyStep(steps.length);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-[40vh] py-[20vh] lg:gap-[60vh]">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={setStepRef(index)}
            className={`transition-opacity duration-300 ${
              activeStep === index ? 'opacity-100' : 'opacity-40'
            }`}
          >
            {step}
          </div>
        ))}
      </div>

      <div className="lg:sticky lg:top-24 lg:h-[70vh]">{renderVisual(activeStep)}</div>
    </div>
  );
}
