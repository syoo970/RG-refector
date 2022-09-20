import styled from "@emotion/styled";
import { ButtonBase } from "@mui/material";

export const ImageButton = styled(ButtonBase)`
  position: relative;
  width: 100%;
  height: 45px;
  max-width: 180px;
`;

export const ImageSrc = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("img/kakao_login_medium_narrow.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 40%;
  position: absolute;
`;
