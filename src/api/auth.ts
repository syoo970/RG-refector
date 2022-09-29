import axios from "axios";
import { OAuthResponse, AuthCheckResponse } from "./interfaces/auth.interface";

export const oauthLogin = async (authorizationCode: string): OAuthResponse => {
  const result = await axios.post("/users/oauth/login", { authorizationCode });
  return result.data;
};

export const authCheck = async (token: string): AuthCheckResponse => {
  const result = await axios.get("/user/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
