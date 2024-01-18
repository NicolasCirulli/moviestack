import { Stack, Typography } from "@mui/material";
import TableSchema from "./TableSchema";
import { PARAMETERS, THEAD_PARAMETERS } from "../utils/constants";

const QueryParams = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Query params</Typography>
      <Typography variant="paragraph" maxWidth={"80ch"}>
        {" "}
        The API offers the flexibility to customize queries through the use of
        query parameters. Utilize various query parameters to tailor your
        requests and retrieve specific sets of data. This allows you to
        fine-tune your queries and obtain the precise information you're looking
        for, enhancing the overall versatility and usability of the API.
      </Typography>
      <Stack spacing={1} maxWidth={"80ch"}>
        <Typography variant="paragraph" fontWeight="600" fontSize={18}>
          For example:
          <Typography variant="paragraph" fontWeight="400" paddingX={1}>
            https://moviestack.onrender.com/api/movies?genre=Drama&page=2
          </Typography>
        </Typography>
        <Typography variant="paragraph">
          allows you to retrieve movies of the Drama genre on the third page,
          showcasing how query parameters can be employed to refine and paginate
          your search results.
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="paragraph">Available parameters:</Typography>
        <TableSchema schema={PARAMETERS} thead={THEAD_PARAMETERS} />
      </Stack>
    </Stack>
  );
};

export default QueryParams;
