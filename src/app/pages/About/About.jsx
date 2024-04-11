import { Container, Grid } from "@mui/material";
import SectionBox from "../../components/SectionBox";
import BasicTabs from "../../components/CenteredTabs";
import data from "../../data/aboutData.json";

export default function About() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={12}>
          <SectionBox
            color="#3F4C3B"
            title="История Азербайджана"
            boldness="bold"
            font="Georgia"
            padding={3}
          />
        </Grid>
        <Grid item md={12}>
          <BasicTabs data={data} />
        </Grid>
      </Grid>
    </Container>
  );
}
