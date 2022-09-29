import { Outlet } from "react-router-dom";
import NavBar from "@/components/NavBar";
import useAuthCheck from "@/hooks/react-query/useAuthCheck";
import useUserQuery from "@/hooks/react-query/useUserQuery";

const Entry = () => {
  const { data } = useAuthCheck();
  useUserQuery(data?.userId || 0);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Entry;
