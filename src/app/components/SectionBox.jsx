import { Box, Typography, Grid } from "@mui/material";
import PropTypes from "prop-types";

export default function SectionBox({ title, color }) {
  return (
    <Grid container>
      <Grid item md={12}>
        <Box
          sx={{
            position: "relative",
            p: 7,
            mb: 2,
            mt: 2,
            background: color,
            width: "full",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            fontWeight="bold"
            color="white"
            textAlign="center"
            gutterBottom
          >
            {title}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

SectionBox.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
