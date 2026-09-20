import { research } from '../../data/research';
import { Card } from '../common/Card';
import { ComingSoonLink } from '../common/ComingSoonLink';

export function ResearchGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {research.map((entry) => (
        <Card key={entry.id} className="flex flex-col gap-3">
          {entry.year && <span className="font-sans text-xs font-semibold text-cardinal">{entry.year}</span>}
          <h3 className="font-display text-lg font-bold text-navy">{entry.title}</h3>
          <p className="font-sans text-xs text-navy/50">{entry.authors.join(', ')}</p>
          <p className="flex-1 font-sans text-sm text-navy/70">{entry.blurb}</p>
          <ComingSoonLink href={entry.link} className="font-sans text-sm font-semibold text-cardinal hover:underline">
            Read more →
          </ComingSoonLink>
        </Card>
      ))}
    </div>
  );
}
