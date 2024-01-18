import {
  FormControl,
  Input,
  InputLabel,
  Stack,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import GoogleIcon from "@mui/icons-material/Google";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser } from "../../store/reducer/user";
import authService from "../../services/auth.service";
import { useRef, useState } from "react";
import { alerts } from "../../utils/alerts";
import { GoogleLogin } from "@react-oauth/google";
import decode from "jwt-decode";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleLogin = () => {
    authService.login(formData).then((res) => {
      if (res.user) {
        alerts.success(res.message);
        dispatch(loadUser(res.user));
      } else {
        if (res.errors) {
          alerts.error(res.errors[0].message);
        } else {
          alerts.error(res.message);
        }
      }
    });
  };
  const handleGoogle = (data) => {
    authService.login(data).then((res) => {
      if (res.user) {
        alerts.success(res.message);
        dispatch(loadUser(res.user));
      } else {
        if (res.errors) {
          alerts.error(res.errors[0].message);
        } else {
          alerts.error(res.message);
        }
      }
    });
  };
  const email = useRef(null);
  const password = useRef(null);

  const handleInput = () => {
    setFormData({
      email: email.current.children[0].value,
      password: password.current.children[0].value,
    });
  };

  return (
    <Paper elevation={3}>
      <Stack
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        padding={10}
        width={"90vw"}
        maxWidth={"500px"}
        onInput={handleInput}
      >
        ;
        <FormControl>
          <InputLabel htmlFor="email-login">Email address</InputLabel>
          <Input id="email-login" type="email" ref={email} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password-login">Password</InputLabel>
          <Input id="password-login" type="password" ref={password} />
        </FormControl>
        <Stack spacing={2} direction={"column"}>
          <Button
            variant="contained"
            endIcon={<LoginIcon />}
            onClick={handleLogin}
          >
            Login
          </Button>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const { email, name, sub } = decode(
                credentialResponse.credential
              );
              handleGoogle({ email, password: sub });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          {/*  <Button variant="contained" endIcon={<GoogleIcon />}>
            Login with Google
          </Button> */}
        </Stack>
        <Stack spacing={2} direction={"column"}>
          <Typography>Don't have account?</Typography>
          <Link to="/register">
            <Button variant="contained" endIcon={<PersonAddIcon />} fullWidth>
              Register
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Login;
