import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import { alerts } from "../../utils/alerts";
const VerifyAccount = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    authService.verifyAccount(searchParams.get("code")).then((res) => {
      if (res.status) {
        alerts.success("Your account has been activated!");
        navigate("/login");
      }
    });
  }, []);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Typography>Verifying your account...</Typography>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default VerifyAccount;
