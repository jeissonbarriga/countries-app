import { Country } from "@/types/entity.types";
import { CountryGetResponse } from "@/types/payload.types";

export function rawCountriesToEntities(
  getResponse: CountryGetResponse[]
): Country[] {
  return getResponse.map((c) => ({
    name: c.name.common,
    nativeName: c.name.nativeName ? Object.values(c.name.nativeName)[0].common : '',
    flag: {
      src: c.flags.svg,
      alt: c.flags.alt || `The flag of ${c.name.common}`,
    },
    population: c.population,
    region: c.region,
    subRegion: c.subregion,
    capital: c.capital ? c.capital[0] : '',
    topLevelDomain: c.tld ? c.tld[0] : '',
    currencies: c.currencies ? Object.values(c.currencies).map(curr => curr.name) : [],
    languages: c.languages ? Object.values(c.languages) : [],
    borderCountries: c.borders ? c.borders : [],
  }));
}
