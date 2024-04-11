import { Box, Grid, List, ListItem, ListItemText } from "@mui/material";
import data from "../../data/cities.json";
import { useState } from "react";

export default function Map() {
  const [highlightedPath, setHighlightedPath] = useState(null);

  const handleCityMouseEnter = (vector) => {
    setHighlightedPath(vector);
  };

  const handleCityMouseLeave = () => {
    setHighlightedPath(null);
  };
  return (
    <Box maxWidth="lg">
      <Grid container columnSpacing={2}>
        <Grid item>
          <List>
            {data.map((city) => (
              <ListItem
                key={city.key}
                onMouseEnter={() => handleCityMouseEnter(city.vector)}
                onMouseLeave={handleCityMouseLeave}
              >
                <ListItemText primary={city.title} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="500"
            height="500"
          >
            {data.map((city) => (
              <path
                key={city.vector}
                id={city.vector}
                d="M50 50h10v10H50z"
                fill={highlightedPath === city.vector ? "yellow" : "none"}
              />
            ))}
            {/* Add more SVG paths as needed */}
          </svg>
        </Grid>
      </Grid>
    </Box>
  );
}
