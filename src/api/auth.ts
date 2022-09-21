import axios from "axios";
import { OAuthLoginProp, OAuthResponse } from "./interfaces/auth.interface";

export const oauthLogin = async (
  authorizationCode: OAuthLoginProp
): OAuthResponse => {
  const result = await axios.post("/users/oauth/login", {
    authorizationCode,
  });
  return result.data;
};
