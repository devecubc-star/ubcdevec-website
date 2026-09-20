import { useMemo } from 'react';
import { inequalityToday } from '../../data/story/inequalityToday';
import { ChoroplethMap } from './ChoroplethMap';

export function InequalityMap() {
  const values = useMemo(() => {
    const map = new Map<string, number>();
    inequalityToday.values.forEach((v) => map.set(v.iso3, v.value));
    return map;
  }, []);

  const countryNames = useMemo(() => {
    const map = new Map<string, string>();
    inequalityToday.values.forEach((v) => map.set(v.iso3, v.country));
    return map;
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="rounded-2xl border border-navy/10 bg-white px-4 py-3">
        <p className="font-sans text-xs text-navy/50">{inequalityToday.metric}</p>
        <p className="font-display text-2xl font-bold text-navy">{inequalityToday.year}</p>
      </div>
      <div className="min-h-[320px] flex-1">
        <ChoroplethMap
          values={values}
          countryNames={countryNames}
          formatValue={(v) => `$${v.toLocaleString()} int'l-$`}
        />
      </div>
    </div>
  );
}
