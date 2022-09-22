import { useRecoilValue } from "recoil";
import { AppBar, Toolbar, Container } from "@mui/material";
import { authState } from "@/recoil/auth";
import PageMenu from "./components/PageMenu";
import Logo from "./components/Logo";
import PageList from "./components/PageList";
import AuthButton from "./components/AuthButton";
import UserBlock from "./components/UserBlock";

const pages = [
  { title: "라이딩 찾아보기", headTo: "/posts" },
  { title: "라이딩 개설", headTo: "/post/create" },
];

const NavBar = () => {
  const isAuth = useRecoilValue(authState);

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <PageMenu pages={pages} />
          <Logo />
          <PageList pages={pages} />
          {isAuth ? <UserBlock /> : <AuthButton />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
