import { useEffect, useRef, useState } from 'react';

/**
 * Tracks which of a list of "step" elements is currently most in view,
 * for a sticky-visual-beside-scrolling-text pattern. Returns a ref
 * callback to attach to each step element (by index) and the currently
 * active index.
 */
export function useScrollyStep(stepCount: number) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const index = stepRefs.current.findIndex((el) => el === visible[0].target);
          if (index !== -1) setActiveStep(index);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-20% 0px -20% 0px' },
    );

    stepRefs.current.slice(0, stepCount).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [stepCount]);

  const setStepRef = (index: number) => (el: HTMLElement | null) => {
    stepRefs.current[index] = el;
  };

  return { activeStep, setStepRef };
}
