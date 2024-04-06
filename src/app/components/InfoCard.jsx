import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function InfoCard(props) {
  const { loc } = props;

  return (
    <Card
      style={{
        borderRadius: 0,
        boxShadow: "none",
        backgroundColor: "transparent",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={loc.image}
          alt={loc.title}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <CardContent
          style={{
            height: "70px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: 0,
            backdropFilter: "blur(4px)",
            justifyContent: "space-between",
            padding: "0 16px",
            textAlign: "left",
          }}
        >
          <Typography variant="body2" component="div">
            {loc.title}
          </Typography>
          <ChevronRightIcon />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

InfoCard.propTypes = {
  loc: PropTypes.object.isRequired,
};
