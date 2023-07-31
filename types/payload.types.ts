export interface CountryGetResponse {
  name: {
    common: string,
    nativeName: {
      ['string']: {
        common: string
      },
    },
  },
  flags: {
    svg: string,
    alt: string,
  }
  population: number,
  region: string,
  subregion: string,
  capital: string[],
  tld: string[],
  currencies: {
    ['string']: {
      name: string
    },
  }
  languages: {
    ['string']: string
  }
  borders: string[],
}