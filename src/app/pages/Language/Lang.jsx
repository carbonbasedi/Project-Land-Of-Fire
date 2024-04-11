import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import SectionBox from "../../components/SectionBox";
import data from "../../data/langData.json";
import TextPlain from "../../components/TextPlain";

export default function Lang() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={12}>
          <SectionBox
            color="#3F4C3B"
            title="Язык и Алфавит"
            boldness="bold"
            font="Georgia"
            padding={3}
          />
        </Grid>
        <Grid item md={12}>
          <Box component={Paper} sx={{ p: 7 }}>
            <Box
              maxWidth="lg"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={data[0].image}
                alt="Image description"
                style={{ maxHeight: "inherit" }}
              />
            </Box>
            <Typography sx={{ my: 2 }} variant="h2">
              {data[0].header}
            </Typography>
            {data && data.map((x) => <TextPlain key={x.key} data={x.texts} />)}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
