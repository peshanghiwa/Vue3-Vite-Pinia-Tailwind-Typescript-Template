import axiosInstance from "../plugins/axios";
import useInfoStore from "../store/info";

export default async () => {
  const { countriesList, setCountries } = useInfoStore();
  if (countriesList.length > 0) return countriesList;

  const response = await axiosInstance.get(
    "http://restcountries.com/v3.1/all?fields=name"
  );

  const countries = response.data.map((country: any) => country.name.common);
  setCountries(countries);
  return countries;
};
