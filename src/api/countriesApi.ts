import { ref } from "vue";
import axiosInstance from "../plugins/axios";
import useInfoStore from "../store/info";
import { Country, University } from "../types/info";

export const getAllCountries = () => {
  const data = ref<Country[] | null>(null);
  const error = ref<any | null>(null);
  const loading = ref<boolean>(false);

  const fetch = async () => {
    try {
      loading.value = true;
      const { countriesList, setCountries } = useInfoStore();
      if (countriesList.length > 0) return countriesList;

      const response = await axiosInstance.get(
        "http://restcountries.com/v3.1/all?fields=name"
      );

      const countries = response.data.map(
        (country: any) => country.name.common
      );
      setCountries(countries);
      data.value = countries;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    fetch,
    data,
    error,
    loading,
  };
};

export const getCountry = () => {
  const data = ref<Country | null>(null);
  const error = ref<any | null>(null);
  const loading = ref<boolean>(false);

  const { setCountry } = useInfoStore();

  const fetch = async (country: string) => {
    try {
      loading.value = true;
      const response = await axiosInstance.get(
        `http://restcountries.com/v3.1/name/${country}`
      );

      const res = response.data[0];

      data.value = {
        countryCode: res.cca2,
        capitalCity: res.capital.join(", "),
        population: res.population,
        area: res.area,
        flag: res.flag,
        currency: Object.values(res.currencies)
          .map((currency: any) => `${currency.name} (${currency.symbol})`)
          .join(", "),

        languages: Object.values(res.languages).join(", "),
      };
      setCountry(country);
    } catch (err: any) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { fetch, data, error, loading };
};

export const getUniversities = () => {
  const data = ref<University[] | null>(null);
  const error = ref<any | null>(null);
  const loading = ref<boolean>(false);

  const fetch = async (country: string) => {
    try {
      loading.value = true;

      const response = await axiosInstance.get(
        `http://universities.hipolabs.com/search?country=${country}`
      );

      data.value = response.data.map((university: any) => ({
        universityName: university.name,
        website: university.web_pages[0],
      }));
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { fetch, data, error, loading };
};
