import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function TextPlain(props) {
  const { data } = props;
  return (
    <div>
      <Stack direction="column" spacing={2}>
        {data && data.map((x) => <Typography key={x.key}>{x.text}</Typography>)}
      </Stack>
    </div>
  );
}

TextPlain.propTypes = {
  data: PropTypes.array,
};
