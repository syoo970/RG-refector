import { Grid } from "@mui/material";
import Text from "@/components/Text";

const Login = () => (
  <Grid container direction="column" alignItems="center">
    <Grid item>
      <Text variant="h1" gutterBottom color="primary">
        RG 로그인
      </Text>
    </Grid>
  </Grid>
);

export default Login;
