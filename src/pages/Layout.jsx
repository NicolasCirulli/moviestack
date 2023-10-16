import React from "react";
import Header from "../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
const Layout = () => {
  return (
    <Stack direction="column" spacing={3} style={{ minHeight: "100vh" }}>
      <Header />
      <Box
        sx={{ flexGrow: 1 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Outlet />
      </Box>
      <footer>
        <Typography textAlign={"center"} padding={2}>
          MH MOVIES
        </Typography>
      </footer>
    </Stack>
  );
};

export default Layout;
