import type { FlagshipEvent } from '../../data/flagshipEvents';
import { Card } from '../common/Card';
import { ComingSoonLink } from '../common/ComingSoonLink';

export function FlagshipEventCard({ event }: { event: FlagshipEvent }) {
  return (
    <Card className="flex flex-col gap-3">
      <h3 className="font-display text-xl font-bold text-navy">{event.name}</h3>
      <p className="flex-1 font-sans text-sm text-navy/70">{event.description}</p>
      <ComingSoonLink href={event.link} className="font-sans text-sm font-semibold text-cardinal hover:underline">
        Learn more →
      </ComingSoonLink>
    </Card>
  );
}
