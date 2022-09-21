import { useNavigate } from "react-router-dom";
import { ImageSrc, ImageButton } from "./KakaoButton.style";

const KAKAO_END_POINT = "https://kauth.kakao.com";
const KAKAO_REDIRECT_URL = `${KAKAO_END_POINT}/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=code`;

const KakaoButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/redirect", { state: { url: KAKAO_REDIRECT_URL } });
  };

  return (
    <ImageButton disableRipple onClick={onClick}>
      <ImageSrc />
    </ImageButton>
  );
};

export default KakaoButton;
