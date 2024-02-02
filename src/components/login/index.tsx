import MuiReactComponent, {
  defineWebComponent,
} from "@/components/utils/MuiReactComponent";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  InputAdornment,
  Link,
  TextField,
} from "@mui/material";

const Login = () => {
  return (
    <MuiReactComponent>
      <Box sx={{ maxWidth: 460, margin: "auto", marginTop: 4 }}>
        <Card variant="outlined" sx={{ paddingX: 2, paddingY: 2 }}>
          <CardContent>
            <Box sx={{ paddingY: 2 }}>
              <img
                src="images/logo_mdvap_login.png"
                width="220"
                alt="MDV Application platform"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "16px",
                }}
              />
            </Box>
            <Box sx={{ maxWidth: 270, margin: "auto" }}>
              <TextField
                label="ユーザ名"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
                placeholder="ユーザ名"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="パスワード"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
                placeholder="パスワード"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              color="primary"
              disabled={false}
              variant="contained"
              sx={{ width: 270 }}
            >
              ログイン
            </Button>
          </CardActions>
          <Box sx={{ textAlign: "center", padding: 2 }}>
            <Link href="#" color="primary">
              パスワードを忘れた場合
            </Link>
          </Box>
        </Card>
      </Box>
    </MuiReactComponent>
  );
};
export default Login;

defineWebComponent("mdvap-login", Login);
