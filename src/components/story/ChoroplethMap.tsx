import { useMemo, useRef, useState } from 'react';
import { scaleSequential } from 'd3-scale';
import { interpolateBlues } from 'd3-scale-chromatic';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { getIso3FromFeatureId } from '../../lib/isoMap';

const GEO_URL = `${import.meta.env.BASE_URL}data/world-50m.json`;

interface ChoroplethMapProps {
  values: Map<string, number>;
  formatValue: (value: number) => string;
  countryNames?: Map<string, string>;
}

interface HoverInfo {
  name: string;
  value: number | null;
  x: number;
  y: number;
}

export function ChoroplethMap({ values, formatValue, countryNames }: ChoroplethMapProps) {
  const [hover, setHover] = useState<HoverInfo | null>(null);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const colorScale = useMemo(() => {
    const nums = Array.from(values.values());
    const max = nums.length > 0 ? Math.max(...nums) : 1;
    const min = nums.length > 0 ? Math.min(...nums) : 0;
    return scaleSequential(interpolateBlues).domain([min, max]);
  }, [values]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full rounded-2xl border border-navy/10 bg-white p-2"
      onMouseMove={(e) => {
        if (hover) {
          const rect = e.currentTarget.getBoundingClientRect();
          setHover((h) => (h ? { ...h, x: e.clientX - rect.left, y: e.clientY - rect.top } : h));
        }
      }}
    >
      <ComposableMap
        projection="geoEqualEarth"
        width={800}
        height={420}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const iso3 = getIso3FromFeatureId(geo.id);
              const value = iso3 ? values.get(iso3) : undefined;
              const name = (countryNames?.get(iso3 ?? '') ?? geo.properties?.name ?? 'Unknown') as string;
              const baseFill = value !== undefined ? colorScale(value) : '#e5e9ef';
              const fill = hoveredKey === geo.rsmKey ? '#e9d080' : baseFill;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="#fefeff"
                  strokeWidth={0.5}
                  onMouseEnter={(e) => {
                    const rect = containerRef.current?.getBoundingClientRect();
                    setHoveredKey(geo.rsmKey);
                    setHover({
                      name,
                      value: value ?? null,
                      x: rect ? e.clientX - rect.left : 0,
                      y: rect ? e.clientY - rect.top : 0,
                    });
                  }}
                  onMouseLeave={() => {
                    setHoveredKey(null);
                    setHover(null);
                  }}
                  style={{ outline: 'none', cursor: 'pointer' }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {hover && (
        <div
          className="pointer-events-none absolute z-10 rounded-lg border border-navy/10 bg-white px-3 py-2 text-sm shadow-lg"
          style={{ left: hover.x + 12, top: hover.y + 12 }}
        >
          <p className="font-sans font-semibold text-navy">{hover.name}</p>
          <p className="font-sans text-navy/70">{hover.value !== null ? formatValue(hover.value) : 'No data'}</p>
        </div>
      )}
    </div>
  );
}
