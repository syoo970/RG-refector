import { Grid, DialogContent, Box } from "@mui/material";
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
      <Grid item container direction="column" alignItems="center">
        <Text variant="body1">간편 로그인을 통해 RG에 로그인 해보세요!</Text>
        <Box
          component="img"
          src="RG_Logo.png"
          sx={{ width: "220px", height: "150px" }}
        />
      </Grid>
      <Grid item container justifyContent="center">
        <KakaoButton />
      </Grid>
    </Grid>
  </DialogContent>
);

export default Login;
