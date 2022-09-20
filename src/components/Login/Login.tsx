import { Grid, DialogContent } from "@mui/material";
import Text from "@/components/Text";
import KakaoButton from "./KakaoButton";

const Login = () => (
  <DialogContent>
    <Grid container direction="column">
      <Grid item container justifyContent="center">
        <Text color="primary" variant="h2">
          RG 로그인
        </Text>
      </Grid>
      <Grid item container justifyContent="center">
        <KakaoButton />
      </Grid>
    </Grid>
  </DialogContent>
);

export default Login;
