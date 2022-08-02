import axiosInstance from "../plugins/axios";
import useInfoStore from "../store/info";

export const getAllCountries = async () => {
  const { countriesList, setCountries } = useInfoStore();
  if (countriesList.length > 0) return countriesList;

  const { data } = await axiosInstance.get(
    "http://restcountries.com/v3.1/all?fields=name"
  );

  const countries = data.map((country: any) => country.name.common);
  setCountries(countries);
  return countries;
};

export const getCountry = async (country: string) => {
  const response = await axiosInstance.get(
    `http://restcountries.com/v3.1/name/${country}`
  );

  const data = response.data[0];

  return {
    countryCode: data.cca2,
    capitalCity: data.capital.join(", "),
    population: data.population,
    area: data.area,
    flag: data.flag,
    currency: Object.values(data.currencies)
      .map((currency: any) => `${currency.name} (${currency.symbol})`)
      .join(", "),

    languages: Object.values(data.languages).join(", "),
  };
};
