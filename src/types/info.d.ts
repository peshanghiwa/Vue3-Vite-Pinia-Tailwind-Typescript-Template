export type CountryRef = string | null;
export type Country = {
  countryCode: string;
  capitalCity: string;
  population: number;
  area: number;
  flag: string;
  currency: string;
  languages: string;
} | null;
