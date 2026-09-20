import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { worldGdpPerCapita } from '../../data/story/hockeyStick';

function formatYear(year: number) {
  return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { year: number; gdpPerCapita: number } }> }) {
  if (!active || !payload || payload.length === 0) return null;
  const point = payload[0].payload;
  return (
    <div className="rounded-lg border border-navy/10 bg-white px-4 py-2 shadow-lg">
      <p className="font-sans text-xs font-semibold text-navy/60">{formatYear(point.year)}</p>
      <p className="font-display text-lg font-bold text-navy">
        ${point.gdpPerCapita.toLocaleString()} <span className="text-sm font-sans font-normal text-navy/60">int'l-$</span>
      </p>
    </div>
  );
}

export function HockeyStickChart() {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-navy/10 bg-white p-4">
      <p className="mb-2 font-sans text-xs text-navy/50">
        World average GDP per capita, year 1 – 2023 (international-$, PPP). Hover to explore.
      </p>
      <div className="min-h-[280px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={worldGdpPerCapita} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="gdpGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#449afc" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#449afc" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#0e437a" strokeOpacity={0.08} />
            <XAxis
              dataKey="year"
              tickFormatter={formatYear}
              stroke="#0e437a"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
              stroke="#0e437a"
              fontSize={12}
              tickLine={false}
              width={44}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="gdpPerCapita"
              stroke="#0e437a"
              strokeWidth={2}
              fill="url(#gdpGradient)"
              activeDot={{ r: 5, fill: '#449afc', stroke: '#0e437a', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
