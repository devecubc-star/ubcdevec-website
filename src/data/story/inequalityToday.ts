// Current global economic inequality — GDP per capita (PPP) by country —
// powers the Story page's present-day choropleth map.
//
// SOURCE: World Bank Poverty & Inequality Platform
// https://datatopics.worldbank.org/world-development-indicators/themes/poverty-and-inequality.html
// and Our World in Data, "GDP per capita, PPP"
// https://ourworldindata.org/grapher/gdp-per-capita-worldbank
//
// IMPORTANT: this is a CURATED SUBSET of ~32 representative countries, not
// full global coverage, and values are rounded, order-of-magnitude-correct
// approximations — NOT exact figures pulled from the source CSVs. Countries
// not listed render as "no data" (gray) on the map. Before launch, replace
// with exact sourced values and expand coverage — just add more rows below.

export interface CountryGdpValue {
  iso3: string;
  country: string;
  value: number;
}

export const inequalityToday = {
  metric: 'GDP per capita, PPP (current international $)',
  year: 2023,
  unit: 'international $',
  values: [
    { iso3: 'LUX', country: 'Luxembourg', value: 140000 },
    { iso3: 'SGP', country: 'Singapore', value: 140000 },
    { iso3: 'QAT', country: 'Qatar', value: 115000 },
    { iso3: 'NOR', country: 'Norway', value: 90000 },
    { iso3: 'CHE', country: 'Switzerland', value: 90000 },
    { iso3: 'USA', country: 'United States', value: 82000 },
    { iso3: 'DEU', country: 'Germany', value: 68000 },
    { iso3: 'AUS', country: 'Australia', value: 65000 },
    { iso3: 'CAN', country: 'Canada', value: 60000 },
    { iso3: 'FRA', country: 'France', value: 60000 },
    { iso3: 'SAU', country: 'Saudi Arabia', value: 58000 },
    { iso3: 'GBR', country: 'United Kingdom', value: 58000 },
    { iso3: 'KOR', country: 'South Korea', value: 55000 },
    { iso3: 'JPN', country: 'Japan', value: 48000 },
    { iso3: 'RUS', country: 'Russia', value: 38000 },
    { iso3: 'TUR', country: 'Turkey', value: 40000 },
    { iso3: 'ARG', country: 'Argentina', value: 28000 },
    { iso3: 'MEX', country: 'Mexico', value: 24000 },
    { iso3: 'CHN', country: 'China', value: 23000 },
    { iso3: 'BRA', country: 'Brazil', value: 19000 },
    { iso3: 'ZAF', country: 'South Africa', value: 15500 },
    { iso3: 'EGY', country: 'Egypt', value: 15000 },
    { iso3: 'IDN', country: 'Indonesia', value: 15000 },
    { iso3: 'VNM', country: 'Vietnam', value: 14000 },
    { iso3: 'PHL', country: 'Philippines', value: 10500 },
    { iso3: 'IND', country: 'India', value: 9000 },
    { iso3: 'BGD', country: 'Bangladesh', value: 8500 },
    { iso3: 'PAK', country: 'Pakistan', value: 6500 },
    { iso3: 'KEN', country: 'Kenya', value: 6000 },
    { iso3: 'NGA', country: 'Nigeria', value: 6000 },
    { iso3: 'MDG', country: 'Madagascar', value: 1800 },
    { iso3: 'COD', country: 'DR Congo', value: 1500 },
  ] as CountryGdpValue[],
};
