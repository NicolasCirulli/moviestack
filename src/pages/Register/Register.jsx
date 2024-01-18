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
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import authService from "../../services/auth.service";
import { GoogleLogin } from "@react-oauth/google";
import decode from "jwt-decode";
import { alerts } from "../../utils/alerts";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: " " });
  const navigate = useNavigate();
  const handleRegister = () => {
    authService.register(formData).then((res) => {
      console.log(res);
      if (res.status == "ok") {
        alerts.success("Account created");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        if (res.errors) {
          alerts.error(res.errors[0].message);
        } else {
          alerts.error(res.message);
        }
      }
    });
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleInput = () => {
    setFormData({
      name: name.current.children[0].value,
      email: email.current.children[0].value,
      password: password.current.children[0].value,
    });
  };
  const handleGoogle = (data) => {
    authService.register(data).then((res) => {
      if (res.status == "ok") {
        alerts.success("Account created");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        if (res.errors) {
          alerts.error(res.errors[0].message);
        } else {
          alerts.error(res.message);
        }
      }
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
        <FormControl>
          <InputLabel htmlFor="full-name-login">Name</InputLabel>
          <Input id="full-name-login" type="text" ref={name} />
        </FormControl>
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
            endIcon={<PersonAddIcon />}
            onClick={handleRegister}
          >
            Register
          </Button>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const { email, name, sub } = decode(
                credentialResponse.credential
              );
              handleGoogle({ email, name, password: sub, google: true });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          {/* <Button variant="contained" endIcon={<GoogleIcon />}>
            Register with Google
          </Button> */}
        </Stack>
        <Stack spacing={2} direction={"column"}>
          <Typography>Already have an account?</Typography>
          <Link to="/login">
            <Button variant="contained" endIcon={<LoginIcon />} fullWidth>
              Login
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Register;
