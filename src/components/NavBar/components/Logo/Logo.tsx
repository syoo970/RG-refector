import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { LogoWrapper } from "../../NavBar.style";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box
      component={LogoWrapper}
      onClick={handleClick}
      sx={{ flexGrow: { xs: 1, md: 0 } }}
    >
      <img src="RG_Logo.png" alt="Logo" />
    </Box>
  );
};

export default Logo;
