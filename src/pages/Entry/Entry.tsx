import { Outlet } from "react-router-dom";
import NavBar from "@/components/NavBar";
import useAuthCheck from "@/hooks/react-query/useAuthCheck";

const Entry = () => {
  const { data } = useAuthCheck();

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Entry;
