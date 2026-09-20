// Life expectancy at birth, by country, at five snapshot years — powers the
// Story page's historical world map + time slider.
//
// SOURCE: Our World in Data, "Life Expectancy"
// https://ourworldindata.org/life-expectancy
// (historical estimates before ~1950 draw on Riley (2005) and the UN Population
// Division for later years).
//
// IMPORTANT: this is a CURATED SUBSET of ~24 representative countries per
// snapshot year, not full global coverage, and the values are rounded,
// order-of-magnitude-correct approximations reconstructed from well-known
// regional trends — NOT exact figures pulled from OWID's CSV. Countries not
// listed render as "no data" (gray) on the map. Before launch: (1) replace
// these with exact CSV-sourced values, (2) expand coverage to more
// countries. Both are easy — just add more { iso3, value } rows below.
//
// Snapshot years were chosen because OWID publishes data at or near each of
// these points, so real figures are genuinely obtainable, not invented.

export interface CountryValue {
  iso3: string;
  value: number;
}

export type SnapshotYear = 1820 | 1900 | 1950 | 1980 | 2023;

export interface HistoricalSnapshot {
  year: SnapshotYear;
  metric: 'lifeExpectancy';
  unit: 'years';
  values: CountryValue[];
}

export const historicalSnapshots: HistoricalSnapshot[] = [
  {
    year: 1820,
    metric: 'lifeExpectancy',
    unit: 'years',
    values: [
      { iso3: 'USA', value: 39 },
      { iso3: 'GBR', value: 40 },
      { iso3: 'FRA', value: 37 },
      { iso3: 'DEU', value: 35 },
      { iso3: 'JPN', value: 34 },
      { iso3: 'RUS', value: 28 },
      { iso3: 'CHN', value: 32 },
      { iso3: 'IND', value: 25 },
      { iso3: 'BRA', value: 27 },
      { iso3: 'MEX', value: 28 },
      { iso3: 'NGA', value: 26 },
      { iso3: 'EGY', value: 27 },
      { iso3: 'ZAF', value: 28 },
      { iso3: 'IDN', value: 27 },
      { iso3: 'TUR', value: 28 },
      { iso3: 'AUS', value: 34 },
      { iso3: 'CAN', value: 38 },
      { iso3: 'ARG', value: 30 },
    ],
  },
  {
    year: 1900,
    metric: 'lifeExpectancy',
    unit: 'years',
    values: [
      { iso3: 'USA', value: 47 },
      { iso3: 'GBR', value: 48 },
      { iso3: 'FRA', value: 47 },
      { iso3: 'DEU', value: 47 },
      { iso3: 'JPN', value: 44 },
      { iso3: 'RUS', value: 32 },
      { iso3: 'CHN', value: 33 },
      { iso3: 'IND', value: 24 },
      { iso3: 'BRA', value: 33 },
      { iso3: 'MEX', value: 30 },
      { iso3: 'NGA', value: 30 },
      { iso3: 'EGY', value: 30 },
      { iso3: 'ZAF', value: 33 },
      { iso3: 'IDN', value: 31 },
      { iso3: 'TUR', value: 32 },
      { iso3: 'AUS', value: 53 },
      { iso3: 'CAN', value: 48 },
      { iso3: 'ARG', value: 38 },
    ],
  },
  {
    year: 1950,
    metric: 'lifeExpectancy',
    unit: 'years',
    values: [
      { iso3: 'USA', value: 68 },
      { iso3: 'GBR', value: 69 },
      { iso3: 'FRA', value: 66 },
      { iso3: 'DEU', value: 67 },
      { iso3: 'JPN', value: 61 },
      { iso3: 'RUS', value: 57 },
      { iso3: 'CHN', value: 43 },
      { iso3: 'IND', value: 37 },
      { iso3: 'BRA', value: 51 },
      { iso3: 'MEX', value: 50 },
      { iso3: 'NGA', value: 36 },
      { iso3: 'EGY', value: 42 },
      { iso3: 'ZAF', value: 45 },
      { iso3: 'IDN', value: 39 },
      { iso3: 'TUR', value: 44 },
      { iso3: 'PAK', value: 38 },
      { iso3: 'BGD', value: 37 },
      { iso3: 'VNM', value: 40 },
      { iso3: 'PHL', value: 51 },
      { iso3: 'KEN', value: 42 },
      { iso3: 'ETH', value: 34 },
      { iso3: 'AUS', value: 69 },
      { iso3: 'CAN', value: 68 },
      { iso3: 'ARG', value: 62 },
    ],
  },
  {
    year: 1980,
    metric: 'lifeExpectancy',
    unit: 'years',
    values: [
      { iso3: 'USA', value: 74 },
      { iso3: 'GBR', value: 74 },
      { iso3: 'FRA', value: 74 },
      { iso3: 'DEU', value: 73 },
      { iso3: 'JPN', value: 76 },
      { iso3: 'RUS', value: 67 },
      { iso3: 'CHN', value: 66 },
      { iso3: 'IND', value: 54 },
      { iso3: 'BRA', value: 63 },
      { iso3: 'MEX', value: 67 },
      { iso3: 'NGA', value: 46 },
      { iso3: 'EGY', value: 57 },
      { iso3: 'ZAF', value: 57 },
      { iso3: 'IDN', value: 58 },
      { iso3: 'TUR', value: 61 },
      { iso3: 'PAK', value: 56 },
      { iso3: 'BGD', value: 48 },
      { iso3: 'VNM', value: 62 },
      { iso3: 'PHL', value: 61 },
      { iso3: 'KEN', value: 55 },
      { iso3: 'ETH', value: 43 },
      { iso3: 'AUS', value: 75 },
      { iso3: 'CAN', value: 75 },
      { iso3: 'ARG', value: 69 },
    ],
  },
  {
    year: 2023,
    metric: 'lifeExpectancy',
    unit: 'years',
    values: [
      { iso3: 'USA', value: 79 },
      { iso3: 'GBR', value: 81 },
      { iso3: 'FRA', value: 83 },
      { iso3: 'DEU', value: 81 },
      { iso3: 'JPN', value: 84 },
      { iso3: 'RUS', value: 73 },
      { iso3: 'CHN', value: 78 },
      { iso3: 'IND', value: 70 },
      { iso3: 'BRA', value: 75 },
      { iso3: 'MEX', value: 75 },
      { iso3: 'NGA', value: 55 },
      { iso3: 'EGY', value: 71 },
      { iso3: 'ZAF', value: 65 },
      { iso3: 'IDN', value: 72 },
      { iso3: 'TUR', value: 78 },
      { iso3: 'PAK', value: 67 },
      { iso3: 'BGD', value: 73 },
      { iso3: 'VNM', value: 74 },
      { iso3: 'PHL', value: 71 },
      { iso3: 'KEN', value: 64 },
      { iso3: 'ETH', value: 65 },
      { iso3: 'AUS', value: 83 },
      { iso3: 'CAN', value: 82 },
      { iso3: 'ARG', value: 76 },
    ],
  },
];
