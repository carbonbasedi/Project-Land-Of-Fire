import { Container, Grid, Box, Button, Typography } from "@mui/material";
import MediaCard from "../../components/MediaCard";
import SectionBox from "../../components/SectionBox";
import FeaturedPost from "../../components/FeaturedPost";
import Data from "../../data/cardData.json";
import postData from "../../data/postData.json";

export default function Main() {
  return (
    <Container maxWidth="lg" >
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              position: "relative",
              p: 7,
              mb: 2,
              mt: 2,
              background: "white",
              width: "full",
            }}
          >
            <iframe
              width="100%"
              height="640"
              src="https://www.youtube.com/embed/-LZ6x6GFvj0?si=ujLZ4C312uacea7I"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <Typography
              variant="subtitle2"
              color="black"
              textAlign="left"
              gutterBottom
              sx={{ mt: 5 }}
            >
              Virtual tour to Azerbaijan
              (https://www.youtube.com/watch?v=-LZ6x6GFvj0)
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <SectionBox
        color="#E37249"
        title="Пейзажи, от которых захватывает дух, богатая история и вкусная еда — ваша поездка в Азербайджан станет незабываемой."
        alignment="center"
      />
      <Grid container rowGap={3}>
        {postData &&
          postData.map((post) => (
            <Grid item xs={12} key={post.key}>
              <FeaturedPost post={post} />
            </Grid>
          ))}
        <SectionBox
          color="#3F4C3BCC"
          title="Туристические Достопримечательности"
          alignment="center"
          boldness="bold"
        />
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        columnSpacing={4}
        rowSpacing={2}
      >
        {Data &&
          Data.map((entry) => (
            <Grid item key={entry.key}>
              <MediaCard data={entry} />
            </Grid>
          ))}
      </Grid>
      <Box textAlign="center" sx={{ m: 10 }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: 0,
            py: 3,
            px: 12,
            fontSize: "32px",
            color: "black",
            borderColor: "black",
            backgroundColor: "white",
          }}
        >
          ЕЩЁ
        </Button>
      </Box>
    </Container>
  );
}
