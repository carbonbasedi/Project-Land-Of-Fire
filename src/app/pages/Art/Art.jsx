import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import SectionBox from "../../components/SectionBox";
import data from "../../data/artData.json";

export default function Art() {
  return (
    <Container maxWidth="lg">
      <SectionBox
        title="Искусство"
        color="#3F4C3B"
        boldness="bold"
        font="Georgia"
        padding={3}
      />
      {data &&
        data.map((post) => (
          <Box key={post.key} component={Paper}>
            <Grid item xs={12}>
              <Card
                sx={{ display: "flex", backgroundColor: "white", boxShadow: 0 }}
              >
                <>
                  <CardContent sx={{ flex: 1, p: 7 }}>
                    <Typography
                      align="left"
                      component="h2"
                      sx={{ fontSize: "32px", fontWeight: "Bold" }}
                      color="#3F4C3B"
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      align="left"
                      variant="subtitle1"
                      paragraph
                      color="#3F4C3B"
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
            {data &&
              post.article.map((x) => (
                <Box key={x.key} sx={{ borderBottom: 1, px: 4, py: 4 }}>
                  <Typography
                    align="left"
                    component="h2"
                    sx={{
                      fontSize: "48px",
                      fontWeight: "Bold",
                      py: 4,
                    }}
                    color="black"
                  >
                    {x.name}
                  </Typography>
                  <Grid item xs={12}>
                    <Card
                      sx={{
                        display: "flex",
                        backgroundColor: "white",
                        boxShadow: 0,
                      }}
                    >
                      <Grid container>
                        <Grid item xs={12} md={6}>
                          <CardMedia
                            component="img"
                            sx={{
                              width: "100%", // Adjusted to take full width
                              maxHeight: "450px",
                            }}
                            image={x.image}
                            alt={x.name}
                          />
                          <Box
                            display="flex"
                            justifyContent="left"
                            alignItems="center"
                            textAlign="center"
                            p={2}
                            backgroundColor="#F4F4F4"
                          >
                            <Typography variant="body1" color="black">
                              {x.name}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <CardContent sx={{ p: 2 }}>
                            <Typography
                              align="left"
                              variant="subtitle1"
                              paragraph
                              color="black"
                            >
                              {x.text}
                            </Typography>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                </Box>
              ))}
          </Box>
        ))}
    </Container>
  );
}
