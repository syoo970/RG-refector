import axios from "axios";
import { OAuthResponse } from "./interfaces/auth.interface";

export const oauthLogin = async (authorizationCode: string): OAuthResponse => {
  const result = await axios.post(
    "/users/oauth/login",
    { authorizationCode },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
  return result.data;
};
