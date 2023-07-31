export interface Country {
  name: string,
  nativeName: string,
  flag: Flag,
  population: number,
  region: string,
  subRegion: string,
  capital: string,
  topLevelDomain: string,
  currencies: string[],
  languages: string[],
  borderCountries: string[],
}

interface Flag {
  src: string,
  alt: string,
}