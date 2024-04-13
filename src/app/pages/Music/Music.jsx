import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import SectionBox from "../../components/SectionBox";
import data from "../../data/musicData.json";

export default function Music() {
  return (
    <Container maxWidth="lg">
      <SectionBox
        color="#3F4C3B"
        title="Музыка"
        boldness="bold"
        font="Georgia"
        padding={3}
      />
      <Grid container>
        <Grid item>
          {data &&
            data.map((post) => (
              <Box key={post.key}>
                <Grid item xs={12}>
                  <Card
                    sx={{
                      display: "flex",
                      backgroundColor: "#000000CC",
                      boxShadow: 0,
                    }}
                  >
                    <>
                      <CardContent sx={{ flex: 1, p: 7 }}>
                        <Typography
                          align="left"
                          component="h2"
                          sx={{ fontSize: "28px", fontWeight: "Bold" }}
                          color="white"
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          align="left"
                          variant="subtitle1"
                          paragraph
                          color="white"
                        >
                          {post.desc}
                        </Typography>
                      </CardContent>
                      <CardMedia
                        component="img"
                        sx={{
                          width: "50%",
                          maxHeight: "450px",
                        }}
                        image={post.image}
                        alt={post.title}
                      />
                    </>
                  </Card>
                </Grid>
                <Grid
                  container
                  justifyContent="space-between"
                  columnSpacing={4}
                  rowSpacing={2}
                  sx={{ my: 2 }}
                >
                  {data &&
                    post.musicians.map((x) => (
                      <Grid item key={x.key}>
                        <Card key={x.key} sx={{ maxWidth: 360 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              image={x.image}
                              alt={x.name}
                              sx={{ height: "500px" }}
                            />
                            <CardContent sx={{ backgroundColor: "#5E6D62" }}>
                              <Typography
                                gutterBottom
                                variant="h4"
                                component="div"
                                color="white"
                              >
                                {x.name}
                              </Typography>
                              <Typography
                                color="white"
                                variant="subtitle1"
                              >
                                {x.text}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
              </Box>
            ))}
        </Grid>
      </Grid>
    </Container>
  );
}
