import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import SectionBox from "../../components/SectionBox";
import data from "../../data/foodData.json";
import InfoCard from "../../components/InfoCard";

export default function Food() {
  return (
    <Container maxWidth="lg">
      <Box>
        <SectionBox
          color="#3F4C3B"
          title="Кулинарное Искусство"
          boldness="bold"
          font="Georgia"
          padding={3}
        />
        <Box component={Paper} p={5}>
          {data &&
            data.map((item) => (
              <>
                <Box sx={{ my: 5 }}>
                  <Typography key={item.key}>{item.desc}</Typography>
                </Box>
                <Grid container spacing={{ md: 2 }} columns={{ md: 16 }}>
                  {data &&
                    item.items.map((x) => (
                      <Grid key={x.key} item xs={2} sm={4} md={4}>
                        <InfoCard loc={x} />
                      </Grid>
                    ))}
                </Grid>
              </>
            ))}
        </Box>
      </Box>
    </Container>
  );
}
