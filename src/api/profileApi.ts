import axiosInstance from "../plugins/axios";
import useProfileStore from "../store/profile";
import { Name } from "../types/profile";

export const requestGender = async (name: Name) => {
  const { userGender, setGender } = useProfileStore();
  if (userGender) return userGender;

  const { data } = await axiosInstance.get(
    `http://api.genderize.io/?name=${name}`
  );
  const gender = data.gender;
  return gender;
};
