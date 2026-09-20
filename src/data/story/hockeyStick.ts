// World average GDP per capita over the long run — the "hockey stick" of
// human material progress: roughly flat for millennia, then a sharp
// post-Industrial-Revolution rise.
//
// SOURCE: Our World in Data, "GDP per capita over the long run"
// https://ourworldindata.org/grapher/gdp-per-capita-maddison-2020
// (Maddison Project Database 2020, Bolt & van Zanden), international-$
// (purchasing-power-adjusted).
//
// IMPORTANT: the values below are rounded, order-of-magnitude-correct
// approximations reconstructed from the well-known shape of this series,
// NOT exact figures pulled from the CSV. Before the site goes live, replace
// them with exact values by downloading the CSV from the link above.

export interface GdpPoint {
  year: number; // CE
  gdpPerCapita: number; // international-$, PPP, approximate
}

export const worldGdpPerCapita: GdpPoint[] = [
  { year: 1, gdpPerCapita: 550 },
  { year: 1000, gdpPerCapita: 580 },
  { year: 1500, gdpPerCapita: 680 },
  { year: 1600, gdpPerCapita: 720 },
  { year: 1700, gdpPerCapita: 770 },
  { year: 1800, gdpPerCapita: 900 },
  { year: 1850, gdpPerCapita: 1100 },
  { year: 1900, gdpPerCapita: 1650 },
  { year: 1950, gdpPerCapita: 2200 },
  { year: 1975, gdpPerCapita: 4300 },
  { year: 2000, gdpPerCapita: 8200 },
  { year: 2023, gdpPerCapita: 16900 },
];
