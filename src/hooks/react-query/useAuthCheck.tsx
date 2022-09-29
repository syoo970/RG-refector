import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { authState } from "@/recoil/auth";
import { authCheck } from "@/api/auth";

const useAuthCheck = () => {
  const navigate = useNavigate();
  const [token, ,] = useCookies(["accessToken"]);
  const setAuthState = useSetRecoilState(authState);
  const queryResult = useQuery(
    ["AuthCheck"],
    () => authCheck(token.accessToken),
    {
      enabled: !!token.accessToken,
      onSuccess: (data) => {
        setAuthState(true);
        const { registered } = data;
        if (!registered) navigate("/register");
      },
    }
  );

  return queryResult;
};

export default useAuthCheck;
