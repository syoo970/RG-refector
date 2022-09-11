import { Box } from "@mui/material";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useModal from "@/recoil/hooks/useModal";
import Login from "@/components/Login";

const AuthButton = () => {
  const { handleOpen } = useModal();

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Button disableRipple onClick={() => handleOpen(Login)}>
          로그인/회원가입
        </Button>
      </Box>
      <Modal />
    </>
  );
};

export default AuthButton;
