import { flagshipEvents } from '../data/flagshipEvents';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { CalendarEmbed } from '../components/events/CalendarEmbed';
import { EventList } from '../components/events/EventList';
import { FlagshipEventCard } from '../components/events/FlagshipEventCard';

export function Events() {
  return (
    <PageContainer className="flex flex-col gap-16 py-20">
      <div>
        <SectionHeading eyebrow="Events" title="What's happening" className="mb-8" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CalendarEmbed />
          </div>
          <EventList />
        </div>
      </div>

      <div>
        <SectionHeading eyebrow="Flagship Events" title="Our signature series" className="mb-8" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {flagshipEvents.map((event) => (
            <FlagshipEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
