import { useMemo, useState } from 'react';
import { historicalSnapshots, type SnapshotYear } from '../../data/story/historicalSnapshots';
import { ChoroplethMap } from './ChoroplethMap';

const YEARS = historicalSnapshots.map((s) => s.year);

export function HistoricalMap() {
  const [yearIndex, setYearIndex] = useState(YEARS.length - 1);
  const year = YEARS[yearIndex] as SnapshotYear;

  const snapshot = useMemo(() => historicalSnapshots.find((s) => s.year === year), [year]);

  const values = useMemo(() => {
    const map = new Map<string, number>();
    snapshot?.values.forEach((v) => map.set(v.iso3, v.value));
    return map;
  }, [snapshot]);

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center justify-between rounded-2xl border border-navy/10 bg-white px-4 py-3">
        <div>
          <p className="font-sans text-xs text-navy/50">Life expectancy at birth</p>
          <p className="font-display text-2xl font-bold text-navy">{year}</p>
        </div>
        <div className="flex flex-1 items-center gap-3 pl-6">
          <input
            type="range"
            min={0}
            max={YEARS.length - 1}
            step={1}
            value={yearIndex}
            onChange={(e) => setYearIndex(Number(e.target.value))}
            className="w-full accent-cardinal"
            aria-label="Select year"
          />
        </div>
      </div>
      <div className="flex justify-between px-1 font-sans text-xs text-navy/40">
        {YEARS.map((y) => (
          <span key={y}>{y}</span>
        ))}
      </div>
      <div className="min-h-[320px] flex-1">
        <ChoroplethMap values={values} formatValue={(v) => `${v.toFixed(0)} years`} />
      </div>
    </div>
  );
}
