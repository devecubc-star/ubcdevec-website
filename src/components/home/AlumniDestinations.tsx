import { PageContainer } from '../layout/PageContainer';
import { SectionHeading } from '../common/SectionHeading';
import logoSheet from '../../assets/logos/alumni-destinations.png';
import pwcLogo from '../../assets/logos/destinations/pwc.webp';
import eyLogo from '../../assets/logos/destinations/ey.svg';
import propelLogo from '../../assets/logos/destinations/propel-impact.png';
import manulifeLogo from '../../assets/logos/destinations/manulife.png';

// Individual logo regions from the club-provided reference, in a 2048 × 763
// coordinate space. SVG viewports keep the supplied logos intact and allow
// each to fit the responsive grid independently.
const destinations: { name: string; region?: string; src?: string; scale?: number }[] = [
  { name: 'University of California, Berkeley', region: '88 249 428 133' },
  { name: 'McKinsey & Company', region: '550 240 402 133' },
  { name: 'The Brattle Group', region: '1000 224 190 169' },
  { name: 'BCI', region: '1230 244 281 130' },
  { name: 'ENMAX', region: '1530 240 380 145' },
  { name: 'Fidelity Investments', region: '80 475 395 108' },
  { name: 'Accenture', region: '514 475 359 110' },
  { name: 'BDO', region: '893 465 282 126' },
  { name: 'Deloitte', region: '1190 475 410 111' },
  { name: 'KPMG', region: '1640 465 287 126' },
  { name: 'CIBC', region: '786 623 430 112' },
  { name: 'PwC', src: pwcLogo, scale: 2.8 },
  { name: 'EY', src: eyLogo, scale: 1.9 },
  { name: 'Propel Impact', src: propelLogo },
  { name: 'Manulife', src: manulifeLogo, scale: 1.25 },
];

export function AlumniDestinations() {
  return (
    <section aria-labelledby="alumni-destinations-heading" className="border-b border-navy/10 py-20">
      <PageContainer>
        <div id="alumni-destinations-heading">
          <SectionHeading eyebrow="Beyond DEVEC" title="Where our members go" align="center" className="mb-12" />
        </div>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-10">
          {destinations.map((destination, index) => (
            <li key={destination.name} className="flex h-28 w-[calc(50%-1rem)] items-center justify-center overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 sm:w-[calc(33.333%-1.667rem)] lg:w-[calc(25%-1.875rem)]">
              {destination.src ? (
                <img src={destination.src} alt={destination.name} loading="lazy" className="h-full w-full object-contain" style={{ transform: `scale(${destination.scale ?? 1})` }} />
              ) : destination.region ? (
              <svg role="img" aria-label={destination.name} viewBox={destination.region} className="h-full w-full overflow-hidden">
                <defs>
                  <clipPath id={`alumni-logo-${index}`}>
                    <rect x={destination.region.split(' ')[0]} y={destination.region.split(' ')[1]} width={destination.region.split(' ')[2]} height={destination.region.split(' ')[3]} />
                  </clipPath>
                </defs>
                <image href={logoSheet} width="2048" height="763" preserveAspectRatio="none" clipPath={`url(#alumni-logo-${index})`} />
              </svg>
              ) : null}
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
