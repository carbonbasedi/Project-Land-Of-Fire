import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import CustomButton from "./CustomButton";

export default function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12}>
      <Card sx={{ display: "flex", backgroundColor: "#3F4C3B" }}>
        {post.key % 2 === 1 ? (
          <>
            <CardMedia
              component="img"
              sx={{
                width: "50%",
                maxHeight: "450px",
              }}
              image={post.image}
              alt={post.title}
            />
            <CardContent sx={{ flex: 1, p: 8 }}>
              <Typography align="left" variant="subtitle1" color="white">
                {post.key}
              </Typography>
              <Typography
                align="left"
                component="h2"
                sx={{ fontSize: "32px", fontWeight: "Bold" }}
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
              <Typography align="left" variant="subtitle1" color="primary">
                <CustomButton text={post.button} />
              </Typography>
            </CardContent>
          </>
        ) : (
          <>
            <CardContent sx={{ flex: 1, p: 8 }}>
              <Typography align="left" variant="subtitle1" color="white">
                {post.key}
              </Typography>
              <Typography
                align="left"
                component="h2"
                sx={{ fontSize: "32px", fontWeight: "Bold" }}
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
              <Typography align="left" variant="subtitle1" color="primary">
                <CustomButton text={post.button} />
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
        )}
      </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    key: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
};
