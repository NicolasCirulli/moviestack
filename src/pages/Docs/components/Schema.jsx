import { Stack, Typography } from "@mui/material";
import React from "react";
import { MOVIES_SCHEMA, THEAD_MOVIES } from "../utils/constants";
import TableSchema from "./TableSchema";
const MoviesSchema = () => {
  return (
    <Stack>
      <Typography variant="h4" fontWeight="400" maxWidth={"80ch"}>
        Movie schema
      </Typography>
      <TableSchema schema={MOVIES_SCHEMA} thead={THEAD_MOVIES} />
    </Stack>
  );
};

export default MoviesSchema;
