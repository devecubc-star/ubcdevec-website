import { Hero } from '../components/home/Hero';
import { WhatIsDevEcon } from '../components/home/WhatIsDevEcon';
import { MissionSection } from '../components/home/MissionSection';
import { AlumniDestinations } from '../components/home/AlumniDestinations';
import { AlumniCarousel } from '../components/home/AlumniCarousel';
import { UpcomingEventsPreview } from '../components/home/UpcomingEventsPreview';
import { MembershipCTA } from '../components/home/MembershipCTA';

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhatIsDevEcon />
      <MissionSection />
      <AlumniDestinations />
      <AlumniCarousel />
      <UpcomingEventsPreview />
      <MembershipCTA />
    </div>
  );
}
