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

const Register = () => {
  return (
    <Paper elevation={3}>
      <Stack
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        padding={10}
        width={"90vw"}
        maxWidth={"500px"}
      >
        <FormControl>
          <InputLabel htmlFor="full-name-login">Name</InputLabel>
          <Input id="full-name-login" type="text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email-login">Email address</InputLabel>
          <Input id="email-login" type="email" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password-login">Password</InputLabel>
          <Input id="password-login" type="password" />
        </FormControl>
        <Stack spacing={2} direction={"column"}>
          <Button variant="contained" endIcon={<PersonAddIcon />}>
            Register
          </Button>
          <Button variant="contained" endIcon={<GoogleIcon />}>
            Register with Google
          </Button>
        </Stack>
        <Stack spacing={2} direction={"column"}>
          <Typography>Do you have account?</Typography>
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
