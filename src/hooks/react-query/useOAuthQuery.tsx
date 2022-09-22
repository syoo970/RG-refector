/* eslint-disable no-unused-expressions */
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import { oauthLogin } from "@/api/auth";
import { authState } from "@/recoil/auth";

const useOAuthQuery = (code: string) => {
  const setAuthState = useSetRecoilState(authState);
  const [, setCookie] = useCookies(["accessToken"]);
  const navigate = useNavigate();
  const results = useQuery(["OAuth"], () => oauthLogin(code), {
    enabled: !!code,
    onSuccess: (data) => {
      const { accessToken, isNew } = data;
      const TOKEN_EXPIRE = new Date(Date.now() + 60 * 60 * 24 * 1000);
      setCookie("accessToken", accessToken, {
        path: "/",
        expires: TOKEN_EXPIRE,
      });
      setAuthState(true);
      isNew
        ? navigate("/register", { replace: true })
        : navigate("/", { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return results;
};

export default useOAuthQuery;
