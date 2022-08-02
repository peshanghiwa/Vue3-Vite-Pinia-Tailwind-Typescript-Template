import axiosInstance from "../plugins/axios";
import useProfileStore from "../store/profile";
import { Name } from "../types/profile";

export default async (name: Name) => {
  const { userGender, setGender } = useProfileStore();
  if (userGender) return userGender;

  const response = await axiosInstance.get(
    `http://api.genderize.io/?name=${name}`
  );
  const gender = response.data.gender;
  setGender(gender);
  return gender;
};