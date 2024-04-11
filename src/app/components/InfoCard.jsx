import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button, CardActionArea, Modal } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InfoCard(props) {
  const { loc } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
            <Button onClick={handleOpen}>
              <ChevronRightIcon />
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ flex: 1, marginRight: 2 }}>
              <img
                src={loc.image}
                alt={loc.title}
                style={{
                  width: "100%",
                  height: 400,
                  objectFit: "cover",
                  border: 1,
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                align="left"
                component="h2"
                sx={{ fontSize: "32px", fontWeight: "Bold" }}
              >
                {loc.title}
              </Typography>
              <Typography align="left" variant="subtitle1" paragraph>
                {loc.desc}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

InfoCard.propTypes = {
  loc: PropTypes.object.isRequired,
};
