// Maps the numeric ISO 3166-1 country codes used as feature `id`s in the
// world-atlas TopoJSON (countries-110m.json) to the ISO 3166-1 alpha-3
// codes used in our curated datasets (src/data/story/*.ts). Only covers the
// countries actually present in those datasets — expand alongside them.
//
// Do not hand-edit the TopoJSON itself; this lookup is the only place that
// needs to change when the curated country lists grow.

export const NUMERIC_ID_TO_ISO3: Record<string, string> = {
  '840': 'USA',
  '826': 'GBR',
  '250': 'FRA',
  '276': 'DEU',
  '392': 'JPN',
  '643': 'RUS',
  '156': 'CHN',
  '356': 'IND',
  '76': 'BRA',
  '484': 'MEX',
  '566': 'NGA',
  '818': 'EGY',
  '710': 'ZAF',
  '404': 'KEN',
  '231': 'ETH',
  '360': 'IDN',
  '586': 'PAK',
  '50': 'BGD',
  '704': 'VNM',
  '608': 'PHL',
  '792': 'TUR',
  '32': 'ARG',
  '36': 'AUS',
  '124': 'CAN',
  '442': 'LUX',
  '702': 'SGP',
  '634': 'QAT',
  '578': 'NOR',
  '756': 'CHE',
  '682': 'SAU',
  '410': 'KOR',
  '450': 'MDG',
  '180': 'COD',
};

export function getIso3FromFeatureId(id: string | number | undefined): string | undefined {
  if (id === undefined) return undefined;
  // The TopoJSON stores ids as zero-padded 3-digit strings (e.g. "032" for
  // Argentina); normalize both sides through Number() so the lookup table
  // above can use plain numeric keys without hand-padding each one.
  return NUMERIC_ID_TO_ISO3[String(Number(id))];
}
