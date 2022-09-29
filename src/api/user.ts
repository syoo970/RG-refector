import axios from "axios";
import { UserInfoResponse } from "./interfaces/user.interface";

// prettier-ignore
export const getUserInfo = async (userid: number, token: string): UserInfoResponse => {
  const result = await axios.get(`/users/${userid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
