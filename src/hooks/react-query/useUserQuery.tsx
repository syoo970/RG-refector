/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { userState } from "@/recoil/user";
import { getUserInfo } from "@/api/user";

const useUserQuery = (id: number) => {
  const [{ accessToken }, ,] = useCookies(["accessToken"]);
  const [user, setUser] = useRecoilState(userState);

  const { data, isSuccess } = useQuery(
    ["user", id],
    () => getUserInfo(id, accessToken),
    {
      enabled: !!id,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      setUser({ ...data });
    }
  }, [data, isSuccess]);

  return user;
};

export default useUserQuery;
