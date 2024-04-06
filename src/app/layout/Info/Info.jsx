import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import InfoCard from "../../components/InfoCard";
import data from "../../data/cityData.json";

export default function Info() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Box
            maxWidth="70%"
            sx={{
              position: "relative",
              py: 10,
              mb: 10,
              mt: 10,
              background: "transparent",
              width: "full",
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              color="white"
              fontFamily="Georgia"
              fontWeight="bold"
            >
              {data[0].title}
            </Typography>
            <Typography variant="subtitle1" paragraph color="white">
              {data[0].desc}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box
            component={Paper}
            justifyContent="center"
            alignItems="center"
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              textAlign: "center",
              p: 5,
              gap: 3,
            }}
          >
            {data[0].topics.map((x) => (
              <>
                <Typography
                  component="h3"
                  variant="h3"
                  fontFamily="Georgia"
                  fontWeight="bold"
                >
                  {x.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  paragraph
                  maxWidth="md"
                  alignSelf="center"
                >
                  {x.text}
                </Typography>
                <Grid container maxWidth="sm" justifyContent="center">
                  {x.images.map((x, index) => (
                    <Grid
                      item
                      xs={6}
                      key={index}
                      style={{ width: "100%", overflow: "hidden" }}
                    >
                      <img
                        src={x.image}
                        alt={`Image ${index}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </>
            ))}
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              maxWidth="md"
            >
              {data[0].locations.map((loc) => (
                <Grid item xs={2} sm={4} md={4} key={loc.key}>
                  <InfoCard loc={loc} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
