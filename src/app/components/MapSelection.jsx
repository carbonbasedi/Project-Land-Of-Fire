import { Box, Typography } from "@mui/material";
import cities from "../data/cities.json";

export default function MapSelection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        gap: 20,
      }}
    >
      {cities &&
        cities.map((entry) => (
          <Box
            key={entry.key}
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography color="white" variant="body2" fontWeight={600}>
              {entry.title}
            </Typography>
          </Box>
        ))}
    </Box>
  );
}
