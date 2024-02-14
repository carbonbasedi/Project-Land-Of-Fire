import { Button } from "@mui/material";
import PropTypes from "prop-types";

export default function CustomButton({ text }) {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: 0,
        color: "white",
        borderColor: "white",
        py: 2,
        px: 4,
        fontSize: "12px",
      }}
    >
      {text}
    </Button>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
};
