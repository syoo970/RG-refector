import { Outlet } from "react-router-dom";
import NavBar from "@/components/NavBar";

const Entry = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Entry;
