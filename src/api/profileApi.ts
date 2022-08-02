import { ref } from "vue";
import axiosInstance from "../plugins/axios";
import useProfileStore from "../store/profile";
import { Gender, Name } from "../types/profile";

export const requestGender = () => {
  const data = ref<Gender | null>(null);
  const error = ref<any | null>(null);
  const loading = ref<boolean>(false);

  const fetch = async (name: Name) => {
    try {
      loading.value = true;

      const { userGender, setGender } = useProfileStore();
      if (userGender) return userGender;

      const response = await axiosInstance.get(
        `http://api.genderize.io/?name=${name}`
      );
      const gender = response.data.gender;
      setGender(gender);
      data.value = gender;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    fetch,
  };
};
