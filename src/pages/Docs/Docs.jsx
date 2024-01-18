import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Request } from "./components/Request";
import { REQUEST } from "./utils/constants";
import { Link } from "react-router-dom";
import MoviesSchema from "./components/Schema";
import QueryParams from "./components/QueryParams";

const Docs = () => {
  return (
    <Stack padding={5} spacing={5}>
      <Typography variant="h3" fontWeight="600" textAlign={"center"}>
        Documentation
      </Typography>
      <Typography variant="h4" fontWeight="400">
        Introduction
      </Typography>
      <Typography maxWidth={"80ch"}>
        The API REST is designed to provide a seamless experience for your
        requests. To ensure security and proper authentication, please include
        your unique API key in the headers of your requests. You can do this by
        adding a header with the key 'x-api-key' and the value being your
        specific API key, like this:{" "}
        <code
          style={{
            backgroundColor: "lightgray",
            padding: "2px 5px",
            borderRadius: 2,
          }}
        >
          'x-api-key': apikey
        </code>
        . If you haven't obtained your API key yet, don't worry – you can easily
        acquire it
        <Link style={{ color: "blue" }} to={"/api-key"}>
          {" "}
          here.
        </Link>
      </Typography>
      <MoviesSchema />
      <Stack spacing={1} gap={10}>
        {REQUEST.map((request) => (
          <Request key={request.title} {...request} />
        ))}
      </Stack>
      <QueryParams />
    </Stack>
  );
};

export default Docs;
