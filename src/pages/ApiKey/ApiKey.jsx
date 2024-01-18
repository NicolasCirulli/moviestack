import { useState } from "react";
import authService from "../../services/auth.service";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";

function ApiKey() {
  const user = useSelector((store) => store.user);
  const [apiKey, setApiKey] = useState(user.api_key);

  const handleClick = () => {
    authService.createApiKey().then((res) => {
      setApiKey(res.api_key);
    });
  };

  return (
    <Stack spacing={3}>
      <Stack>
        <Typography color={"GrayText"} variant="subtitle1">
          Welcome back
        </Typography>
        <Typography variant="h3">{user.name}</Typography>
      </Stack>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        {apiKey ? (
          <>
            <Typography paddingY={2}> Your API key is</Typography>
            <Typography
              borderRadius={1}
              padding={1}
              color={"Black"}
              bgcolor={"lightgray"}
              fontWeight={"bold"}
              fontSize={14}
            >
              {" "}
              {apiKey}
            </Typography>
          </>
        ) : (
          <Stack spacing={1}>
            <Typography> You don't have an API Key </Typography>
            <Typography> Is you want to create one </Typography>
            <Button
              onClick={handleClick}
              title="create an API key"
              variant="contained"
              size="large"
            >
              click here
            </Button>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default ApiKey;
