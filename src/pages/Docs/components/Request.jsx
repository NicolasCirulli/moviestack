import { Stack, Typography } from "@mui/material";

export const Request = ({ method, url, paragraph, title, example }) => {
  return (
    <Stack>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Typography
          color={"white"}
          fontWeight={"600"}
          borderRadius={2}
          padding={1}
          bgcolor={"rgb(0,200,120)"}
        >
          {method}
        </Typography>
        <Typography fontWeight={"600"}>{title}</Typography>
      </Stack>
      <Typography variant="subtitle1" color={"GrayText"}>
        https://moviestack.onrender.com/api{url}
      </Typography>
      <Typography paragraph fontSize={18}>
        {paragraph}
      </Typography>
      <pre
        style={{
          width: "85vw",
          maxWidth: 800,
          borderRadius: 5,
          padding: 10,
          backgroundColor: "gray",
          color: "white",
          overflow: "auto",
        }}
      >
        {JSON.stringify(example, null, 2)}
      </pre>
    </Stack>
  );
};
