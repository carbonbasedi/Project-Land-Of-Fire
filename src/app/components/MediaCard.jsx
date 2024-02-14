import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";

export default function MediaCard({ data }) {
  return (
    <Box sx={{ maxWidth: 345, p: 3, background: "white", border: 1 }}>
      <Card
        sx={{ maxWidth: 305, borderRadius: 0, boxShadow: "none" }}
        key={data.key}
      >
        <CardMedia sx={{ height: 280 }} image={data.image} title={data.title} />
        <CardContent sx={{ height: 150 }}>
          <Typography
            gutterBottom
            fontWeight="bold"
            variant="h5"
            component="div"
          >
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
          >
            Read More &gt;
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

MediaCard.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
